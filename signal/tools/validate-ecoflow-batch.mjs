import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const signalRoot = resolve(fileURLToPath(new URL('..', import.meta.url)))
const publishedRoot = resolve(signalRoot, 'published')
const expectedSlugs = [
  'kakoy-ecoflow-vybrat-obzor-lineyki',
  'ecoflow-otzyvy-plyusy-i-minusy',
  'ecoflow-instrukciya-pervyy-zapusk',
  'ecoflow-dlya-doma-kvartiry-i-dachi',
  'ecoflow-dlya-holodilnika-raschet',
  'ecoflow-dlya-gazovogo-kotla',
  'ecoflow-kak-ibp-ups',
  'ecoflow-dlya-kempinga',
  'skolko-rabotaet-ecoflow',
  'solnechnaya-panel-ecoflow-kak-vybrat',
  'dopolnitelnaya-batareya-ecoflow',
  'akkumulyator-ecoflow-resurs-i-hranenie',
  'ecoflow-delta-3-obzor',
  'ecoflow-delta-3-ili-delta-3-plus',
  'ecoflow-delta-3-max-ili-max-plus',
  'ecoflow-delta-3-classic-ili-delta-3',
  'ecoflow-delta-3-1500-1000-air-2000-air',
  'ecoflow-river-3-plus-max-sravnenie',
  'ecoflow-glacier-classic-35-45-55',
  'ecoflow-alternator-charger-500-800',
]

function parseFrontmatter(raw, slug) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n\r?\n?([\s\S]*)$/)
  if (!match) throw new Error(`${slug}: frontmatter is missing`)

  const data = {}
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(':')
    if (separator === -1) continue
    const key = line.slice(0, separator).trim()
    const rawValue = line.slice(separator + 1).trim()
    if (rawValue.startsWith('[') || rawValue.startsWith('{')) {
      data[key] = JSON.parse(rawValue)
    } else {
      data[key] = rawValue.replace(/^"|"$/g, '')
    }
  }

  return { data, body: match[2].trim() }
}

function countWords(body) {
  return body
    .replace(/!\[[^\]]*]\([^)]+\)/g, ' ')
    .replace(/\[([^\]]+)]\([^)]+\)/g, '$1')
    .replace(/[|#*_`>]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
}

const requiredFields = [
  'title', 'metaTitle', 'metaDescription', 'excerpt', 'primaryKeyword', 'slug',
  'category', 'date', 'readTime', 'image', 'tags', 'keywords', 'relatedProducts',
]
const seen = { slug: new Set(), title: new Set(), metaTitle: new Set(), metaDescription: new Set() }
const reports = []
const errors = []

for (const slug of expectedSlugs) {
  const raw = await readFile(resolve(publishedRoot, `${slug}.md`), 'utf8')
  const { data, body } = parseFrontmatter(raw, slug)

  for (const field of requiredFields) {
    if (data[field] == null || data[field] === '') errors.push(`${slug}: missing ${field}`)
  }
  if (data.slug !== slug) errors.push(`${slug}: frontmatter slug does not match filename`)
  if (data.category !== 'ecoflow') errors.push(`${slug}: category must be ecoflow`)
  if (data.date !== '2026-08-08') errors.push(`${slug}: unexpected publish date ${data.date}`)
  if (data.image !== `/blog/ecoflow/${slug}-cover.webp`) errors.push(`${slug}: unexpected cover path`)

  for (const key of Object.keys(seen)) {
    if (seen[key].has(data[key])) errors.push(`${slug}: duplicate ${key}`)
    seen[key].add(data[key])
  }

  const words = countWords(body)
  const h2 = [...body.matchAll(/^##\s+(.+)$/gm)].map((match) => match[1])
  const images = [...body.matchAll(/^!\[([^\]]+)]\(([^)]+)\)$/gm)]
  const internalLinks = [...body.matchAll(/(?<!!)\[[^\]]+]\((\/[^)]+)\)/g)]
  const expectedImages = [1, 2, 3].map((index) => `/blog/ecoflow/${slug}-${String(index).padStart(2, '0')}.webp`)
  const faqHeading = h2.find((heading) => /частые вопросы|вопросы и ответы|faq/i.test(heading))
  const h3Questions = [...body.matchAll(/^###\s+(.+\?)$/gm)]

  if (words < 1100 || words > 1600) errors.push(`${slug}: ${words} words outside 1100-1600`)
  if (h2.length < 5 || h2.length > 7) errors.push(`${slug}: ${h2.length} H2 outside 5-7`)
  if (!faqHeading) errors.push(`${slug}: FAQ H2 is missing`)
  if (h3Questions.length < 3 || h3Questions.length > 5) errors.push(`${slug}: ${h3Questions.length} FAQ questions outside 3-5`)
  if (images.length !== 3) errors.push(`${slug}: expected 3 inline images, got ${images.length}`)
  if (images.some((match, index) => match[2] !== expectedImages[index])) errors.push(`${slug}: inline image paths are unexpected`)
  if (images.some((match) => match[1].trim().length < 12)) errors.push(`${slug}: image alt is too short`)
  if (internalLinks.length < 3 || internalLinks.length > 7) errors.push(`${slug}: ${internalLinks.length} internal links outside 3-7`)
  if (!internalLinks.some((match) => match[1] === '/catalog/ecoflow')) errors.push(`${slug}: EcoFlow category link is missing`)
  if (body.includes('—') || raw.includes('—')) errors.push(`${slug}: em dash is forbidden`)
  if (/₽\s?\d|\d\s?(?:₽|руб(?:\.|лей)?)/i.test(body)) errors.push(`${slug}: hard-coded ruble price found`)
  if (!Array.isArray(data.tags) || data.tags.length < 4 || data.tags.length > 6) errors.push(`${slug}: tags must contain 4-6 items`)
  if (!Array.isArray(data.keywords) || data.keywords.length < 4 || data.keywords.length > 7) errors.push(`${slug}: keywords must contain 4-7 items`)
  if (!Array.isArray(data.relatedProducts) || data.relatedProducts.length < 2 || data.relatedProducts.length > 5) errors.push(`${slug}: relatedProducts must contain 2-5 items`)

  reports.push({ slug, words, h2: h2.length, faq: h3Questions.length, links: internalLinks.length, images: images.length })
}

if (errors.length > 0) {
  console.error(errors.join('\n'))
  process.exitCode = 1
} else {
  console.log(JSON.stringify({ articles: reports.length, reports }, null, 2))
}
