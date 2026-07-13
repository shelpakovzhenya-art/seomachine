import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const signalRoot = resolve(__dirname, '..')
const publishedRoot = resolve(signalRoot, 'published')
const assetsRoot = resolve(signalRoot, 'assets', 'blog-images')
const exportRoot = resolve(signalRoot, 'exports')

const postsOutput = resolve(process.argv[2] || resolve(exportRoot, 'blog-signal-seomachine-2026-07-13-data.ts'))
const mediaOutput = resolve(process.argv[3] || resolve(exportRoot, 'blog-signal-inline-media-2026-07-13-data.ts'))

const slugs = [
  'luchshie-igrovye-smartfony-2026',
  'smartfony-s-horoshey-batareey-2026',
  'planshet-ili-noutbuk-dlya-ucheby-i-raboty',
  'kak-vybrat-mehanicheskuyu-klaviaturu',
  'luchshie-igrovye-myshi-2026',
  'kak-vybrat-igrovoy-monitor-2026',
  'luchshie-geympady-dlya-pk-2026',
  'kak-vybrat-besprovodnoy-mikrofon',
  'luchshie-umnye-kolca-2026',
  'kakuyu-umnuyu-kolonku-vybrat-2026',
]

const mediaScenes = {
  'luchshie-igrovye-smartfony-2026': [
    'мобильная игра на смартфоне крупным планом',
    'друзья играют на смартфонах вместе',
    'игрок управляет персонажем на экране смартфона',
  ],
  'smartfony-s-horoshey-batareey-2026': [
    'смартфон используется в долгой поездке',
    'путешественница проверяет маршрут на смартфоне',
    'смартфон помогает снять пейзаж вдали от розетки',
  ],
  'planshet-ili-noutbuk-dlya-ucheby-i-raboty': [
    'студенты работают с планшетом в библиотеке',
    'ноутбук используется для работы дома',
    'студенты сравнивают планшет и ноутбук для учебы',
  ],
  'kak-vybrat-mehanicheskuyu-klaviaturu': [
    'набор текста на клавиатуре с подсветкой',
    'работа за полноразмерной клавиатурой',
    'клавиатура используется за рабочим столом',
  ],
  'luchshie-igrovye-myshi-2026': [
    'игровая мышь в руке пользователя',
    'управление игровой мышью во время матча',
    'игрок использует мышь за компьютерным столом',
  ],
  'kak-vybrat-igrovoy-monitor-2026': [
    'игра на большом мониторе дома',
    'соревновательная игра за монитором',
    'игровое место с монитором и клавиатурой',
  ],
  'luchshie-geympady-dlya-pk-2026': [
    'геймпад удерживают двумя руками',
    'два игрока используют геймпады вместе',
    'геймпад подключен к ноутбуку',
  ],
  'kak-vybrat-besprovodnoy-mikrofon': [
    'микрофон используют для уличного интервью',
    'автор записывает голос рядом со смартфоном',
    'создатель контента снимает видео на кухне',
  ],
  'luchshie-umnye-kolca-2026': [
    'гладкое кольцо на руке в повседневной обстановке',
    'кольцо на руке крупным планом',
    'настоящий smart-ring с датчиками внутри корпуса',
  ],
  'kakuyu-umnuyu-kolonku-vybrat-2026': [
    'человек обращается к умной колонке на кухне',
    'умная колонка используется в жилом интерьере',
    'умная колонка и подключенное устройство крупным планом',
  ],
}

function parseScalar(rawValue) {
  const value = rawValue.trim()
  if ((value.startsWith('"') && value.endsWith('"')) || value.startsWith('[')) {
    return JSON.parse(value)
  }
  if (/^\d+$/.test(value)) return Number(value)
  return value
}

function parseArticle(slug) {
  const file = resolve(publishedRoot, `${slug}.md`)
  const raw = readFileSync(file, 'utf8').replace(/\r\n/g, '\n')
  const match = raw.match(/^---\n([\s\S]*?)\n---\n\n?([\s\S]*)$/)

  if (!match) throw new Error(`Frontmatter is missing in ${file}`)

  const [, frontmatter, body] = match
  const data = {}

  for (const line of frontmatter.split('\n')) {
    const index = line.indexOf(':')
    if (index === -1) continue
    const key = line.slice(0, index).trim()
    data[key] = parseScalar(line.slice(index + 1))
  }

  const links = [...body.matchAll(/\[([^\]]+)]\((\/[^)]+)\)/g)].map((match) => ({
    label: match[1],
    href: match[2],
  }))
  const relatedProducts = [...new Map(links.map((item) => [item.href, item])).values()].slice(0, 5)

  return {
    ...data,
    content: body.trim(),
    excerpt: makeExcerpt(body),
    relatedProducts,
  }
}

function makeExcerpt(body) {
  const plain = body
    .split(/\n\s*\n/)
    .find((paragraph) => paragraph.trim() && !paragraph.startsWith('#') && !paragraph.startsWith('|'))

  return (plain || body)
    .replace(/\[([^\]]+)]\([^)]+\)/g, '$1')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 190)
    .replace(/\s+\S*$/, '')
    .replace(/[.,:;!?-]*$/, '.')
}

function countWords(body) {
  return body.match(/[\p{L}\p{N}][\p{L}\p{N}–—-]*/gu)?.length || 0
}

function validate(posts) {
  const required = [
    'title',
    'metaTitle',
    'metaDescription',
    'primaryKeyword',
    'keywords',
    'slug',
    'category',
    'date',
    'readTime',
    'wordstat',
    'wordstatPeriod',
    'tags',
    'image',
  ]
  const errors = []

  if (posts.length !== 10) errors.push(`Expected 10 posts, got ${posts.length}`)
  if (new Set(posts.map((post) => post.slug)).size !== posts.length) errors.push('Article slugs are not unique')

  for (const post of posts) {
    for (const field of required) {
      if (post[field] === undefined || post[field] === '') errors.push(`${post.slug}: missing ${field}`)
    }

    const words = countWords(post.content)
    const h2Count = (post.content.match(/^## /gm) || []).length
    const linkCount = post.relatedProducts.length

    if (post.date !== '2026-07-13') errors.push(`${post.slug}: unexpected date ${post.date}`)
    if (post.metaTitle.length < 45 || post.metaTitle.length > 65) errors.push(`${post.slug}: metaTitle length ${post.metaTitle.length}`)
    if (post.metaDescription.length < 130 || post.metaDescription.length > 170) errors.push(`${post.slug}: metaDescription length ${post.metaDescription.length}`)
    if (words < 900 || words > 1600) errors.push(`${post.slug}: body has ${words} words`)
    if (h2Count < 5 || h2Count > 8) errors.push(`${post.slug}: body has ${h2Count} H2 headings`)
    if (!/^\|.+\|$/m.test(post.content)) errors.push(`${post.slug}: comparison table is missing`)
    if (linkCount < 3 || linkCount > 6) errors.push(`${post.slug}: body has ${linkCount} unique internal links`)
    if (/!\[[^\]]*]\([^)]+\)/.test(post.content)) errors.push(`${post.slug}: inline Markdown images are not allowed`)
    if (!existsSync(resolve(assetsRoot, `${post.slug}-cover.jpg`))) errors.push(`${post.slug}: cover asset is missing`)

    for (let index = 1; index <= 3; index += 1) {
      const suffix = String(index).padStart(2, '0')
      if (!existsSync(resolve(assetsRoot, 'inline', `${post.slug}-${suffix}.jpg`))) {
        errors.push(`${post.slug}: inline image ${suffix} is missing`)
      }
    }
  }

  if (errors.length) throw new Error(`Signal batch validation failed:\n- ${errors.join('\n- ')}`)
}

function literal(value) {
  return JSON.stringify(value, null, 2)
}

function template(value) {
  return value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
}

function renderPosts(posts) {
  return `import type { BlogPost } from './mock-data'

// Generated from the append-only 2026-07-13 SEO Machine batch.
export const signalSeomachineBlogPosts20260713: BlogPost[] = [
${posts
  .map(
    (post) => `  {
    id: ${literal(post.slug)},
    slug: ${literal(post.slug)},
    title: ${literal(post.title)},
    metaTitle: ${literal(post.metaTitle)},
    metaDescription: ${literal(post.metaDescription)},
    excerpt: ${literal(post.excerpt)},
    content: \`${template(post.content)}\`,
    category: ${literal(post.category)},
    date: ${literal(post.date)},
    readTime: ${literal(String(post.readTime))},
    image: ${literal(post.image)},
    tags: ${literal(post.tags)},
    keywords: ${literal(post.keywords)},
    relatedProducts: ${literal(post.relatedProducts)},
  }`,
  )
  .join(',\n')}
]
`
}

function renderMedia(posts) {
  const entries = posts.map((post) => {
    const scenes = mediaScenes[post.slug]
    if (!scenes || scenes.length !== 3) throw new Error(`${post.slug}: media copy is incomplete`)

    const items = scenes.map((scene, index) => ({
      src: `/blog-images/inline/${post.slug}-${String(index + 1).padStart(2, '0')}.jpg`,
      alt: `${post.title}: ${scene}`,
      caption: `${scene.charAt(0).toUpperCase()}${scene.slice(1)}.`,
    }))

    return `  ${literal(post.slug)}: ${literal(items)}`
  })

  return `import type { BlogInlineMediaItem } from './blog-inline-media'

// Generated from the append-only 2026-07-13 SEO Machine batch.
export const signalInlineMedia20260713: Record<string, BlogInlineMediaItem[]> = {
${entries.join(',\n')}
}
`
}

const posts = slugs.map(parseArticle)
validate(posts)

mkdirSync(dirname(postsOutput), { recursive: true })
mkdirSync(dirname(mediaOutput), { recursive: true })
writeFileSync(postsOutput, renderPosts(posts), 'utf8')
writeFileSync(mediaOutput, renderMedia(posts), 'utf8')

console.log(`Validated and exported ${posts.length} Signal posts`)
console.log(postsOutput)
console.log(mediaOutput)
