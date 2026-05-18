import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const signalRoot = resolve(__dirname, '..')
const publishedRoot = resolve(signalRoot, 'published')
const outputPath = process.argv[2] || 'C:/Signal/src/lib/blog-signal-seomachine-data.ts'

const articles = [
  'kakoy-iphone-kupit-2026',
  'luchshie-smartfony-do-50000-2026',
  'luchshie-kamerofony-2026',
  'kakie-apple-watch-kupit-2026',
  'luchshie-ekshn-kamery-2026',
]

const extra = {
  'kakoy-iphone-kupit-2026': {
    excerpt:
      'Разбираем, какой iPhone выбрать в 2026 году: базовый iPhone 17, тонкий Air, Pro Max или более доступные iPhone 16e и 17e.',
    tags: ['iPhone', 'iPhone 17', 'Apple', 'смартфоны', 'гид покупателя'],
    keywords: [
      'какой iPhone купить в 2026',
      'iPhone 17 или iPhone 16',
      'iPhone 17 Pro Max купить',
      'лучший iPhone 2026',
      'iPhone 17 Air или iPhone 17',
    ],
    relatedProducts: [
      { label: 'iPhone 17 256 ГБ', href: '/product/smartfon-apple-iphone-17-256-gb-goluboi-mist-blue' },
      { label: 'iPhone 17 Air', href: '/product/smartfon-apple-iphone-17-air-256-gb-light-blue-goluboi' },
      { label: 'iPhone 17 Pro', href: '/product/smartfon-apple-iphone-17-pro-256-gb-deep-blue-glubokii-sinii' },
      { label: 'iPhone 17 Pro Max', href: '/product/smartfon-apple-iphone-17-pro-max-256-gb-deep-blue-glubokii-sinii' },
      { label: 'Все iPhone 17', href: '/catalog/smartfony/apple-smartfony/iphone-17' },
    ],
  },
  'luchshie-smartfony-do-50000-2026': {
    excerpt:
      'Подборка смартфонов до 50000 рублей: когда брать iPhone 16e или 17e, кому подойдет Google Pixel и где не стоит переплачивать.',
    tags: ['смартфоны', 'до 50000 рублей', 'iPhone', 'Google Pixel', 'выбор смартфона'],
    keywords: [
      'лучшие смартфоны до 50000 рублей 2026',
      'смартфон до 50000 какой купить',
      'iPhone до 50000',
      'Google Pixel до 50000',
      'лучший смартфон за 50000',
    ],
    relatedProducts: [
      { label: 'iPhone 17e 256 ГБ', href: '/product/smartfon-apple-iphone-17e-256-gb-black-2' },
      { label: 'iPhone 16e 128 ГБ', href: '/product/smartfon-apple-iphone-16e-128-gb-chernyi-nano-sim-esim' },
      { label: 'Google Pixel 9a 8/256 ГБ', href: '/product/smartfon-google-pixel-9a-8-256-gb-obsidian-chernyi' },
      { label: 'Google Pixel 10a', href: '/product/smartfon-google-pixel-10a-8-128-gb-obsidian-chernyi' },
      { label: 'Все смартфоны', href: '/catalog/smartfony' },
    ],
  },
  'luchshie-kamerofony-2026': {
    excerpt:
      'Сравниваем камерофоны 2026 года по реальным сценариям: видео, зум, ночная съемка, портреты, блог и повседневные фото.',
    tags: ['камерофоны', 'смартфоны', 'iPhone 17 Pro Max', 'Samsung Galaxy S26 Ultra', 'Google Pixel'],
    keywords: [
      'лучшие камерофоны 2026',
      'смартфон с лучшей камерой',
      'какой камерофон купить',
      'iPhone 17 Pro Max камера',
      'Samsung Galaxy S26 Ultra камера',
    ],
    relatedProducts: [
      { label: 'iPhone 17 Pro Max', href: '/product/smartfon-apple-iphone-17-pro-max-256-gb-deep-blue-glubokii-sinii' },
      { label: 'iPhone 17 Pro', href: '/product/smartfon-apple-iphone-17-pro-256-gb-deep-blue-glubokii-sinii' },
      { label: 'Samsung Galaxy S26 Ultra', href: '/product/smartfon-samsung-galaxy-s26-ultra-12-512-gb-chernyi' },
      { label: 'Google Pixel', href: '/catalog/smartfony/google-smartfony/google-pixel' },
      { label: 'Samsung Galaxy', href: '/catalog/smartfony/samsung-smartfony' },
    ],
  },
  'kakie-apple-watch-kupit-2026': {
    excerpt:
      'Помогаем выбрать Apple Watch в 2026 году: SE 3 для разумного входа, Series 11 для большинства и Ultra 3 для спорта.',
    tags: ['Apple Watch', 'Series 11', 'SE 3', 'Ultra 3', 'умные часы'],
    keywords: [
      'какие Apple Watch купить в 2026',
      'Apple Watch SE 3 или Series 11',
      'Apple Watch Ultra 3 или Series 11',
      'лучшие Apple Watch 2026',
      'Apple Watch купить',
    ],
    relatedProducts: [
      { label: 'Apple Watch SE 3', href: '/product/umnye-chasy-apple-watch-se-3-40-mm-aluminum-temnaya-noch-sport-band-temnaya-noch' },
      { label: 'Apple Watch Series 11', href: '/product/umnye-chasy-apple-watch-series-11-42-mm-aluminum-chernyi-oniks-sport-band-chernyi' },
      { label: 'Apple Watch Ultra 3', href: '/product/umnye-chasy-apple-watch-ultra-3-49-mm-black-titanium-ocean-band-chernyi' },
      { label: 'Все Apple Watch', href: '/catalog/nosimye-ustroistva/apple-watch-nosimye' },
      { label: 'Аксессуары для Apple Watch', href: '/catalog/aksessuary/dlya-apple-watch' },
    ],
  },
  'luchshie-ekshn-kamery-2026': {
    excerpt:
      'Разбираем, какую экшн-камеру купить в 2026 году: DJI Osmo Action, GoPro Hero 13 или Insta360 под спорт, поездки и блог.',
    tags: ['экшн-камеры', 'DJI Osmo Action', 'GoPro', 'Insta360', 'фото и видео'],
    keywords: [
      'лучшие экшн-камеры 2026',
      'DJI или GoPro',
      'GoPro Hero 13 или DJI Osmo Action',
      'Insta360 X5 купить',
      'какую экшн-камеру выбрать',
    ],
    relatedProducts: [
      { label: 'DJI Osmo Action 6', href: '/product/ekshn-kamera-dji-osmo-action-6-standard-combo' },
      { label: 'DJI Osmo Action 5 Pro', href: '/product/ekshn-kamera-dji-osmo-action-5-pro-standard-combo' },
      { label: 'GoPro Hero 13 Black', href: '/product/ekshn-kamera-gopro-hero-13-black-chdhx-131' },
      { label: 'Insta360 X5', href: '/product/ekshn-kamera-insta360-x5-black-standard-bundle' },
      { label: 'Все экшн-камеры', href: '/catalog/foto-i-video/ekshn-kamery' },
    ],
  },
}

function parseArticle(slug) {
  const file = resolve(publishedRoot, `${slug}.md`)
  const raw = readFileSync(file, 'utf8')
  const match = raw.match(/^---\n([\s\S]*?)\n---\n\n?([\s\S]*)$/)

  if (!match) {
    throw new Error(`Frontmatter is missing in ${file}`)
  }

  const [, frontmatter, body] = match
  const data = {}

  for (const line of frontmatter.split('\n')) {
    const index = line.indexOf(':')
    if (index === -1) continue
    const key = line.slice(0, index).trim()
    let value = line.slice(index + 1).trim()
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1)
    }
    data[key] = value
  }

  return {
    ...data,
    content: body.trim(),
    excerpt: makeExcerpt(body),
    ...extra[slug],
  }
}

function makeExcerpt(body) {
  return body
    .replace(/^#+\s+/gm, '')
    .replace(/\[[^\]]+\]\([^)]+\)/g, (match) => match.match(/\[([^\]]+)\]/)?.[1] || '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 190)
    .replace(/\s+\S*$/, '') + '.'
}

function literal(value) {
  return JSON.stringify(value, null, 2)
}

function template(value) {
  return value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
}

const posts = articles.map(parseArticle)

const ts = `import type { BlogPost } from './mock-data'

// Generated from seomachine/signal/published. Do not edit article text here.
export const signalSeomachineBlogPosts: BlogPost[] = [
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
    readTime: ${literal(post.readTime)},
    image: ${literal(post.image)},
    tags: ${literal(post.tags)},
    keywords: ${literal(post.keywords)},
    relatedProducts: ${literal(post.relatedProducts)},
  }`
  )
  .join(',\n')}
]
`

mkdirSync(dirname(outputPath), { recursive: true })
writeFileSync(outputPath, ts, 'utf8')
console.log(`Exported ${posts.length} Signal blog posts to ${outputPath}`)
