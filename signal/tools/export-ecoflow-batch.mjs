import { readFileSync, writeFileSync } from 'node:fs'
import { basename, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const signalRoot = resolve(here, '..')
const publishedRoot = resolve(signalRoot, 'published')
const outputPath = process.argv[2]

if (!outputPath) {
  throw new Error('Usage: node export-ecoflow-batch.mjs <output.ts>')
}

const slugs = [
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

function parseScalar(value, file, key) {
  if (value.startsWith('[') || value.startsWith('{')) {
    try {
      return JSON.parse(value)
    } catch (error) {
      throw new Error(`${basename(file)}: invalid JSON in ${key}: ${error.message}`)
    }
  }

  if (value.startsWith('"') && value.endsWith('"')) {
    return JSON.parse(value)
  }

  return value
}

function parsePost(slug) {
  const file = resolve(publishedRoot, `${slug}.md`)
  const raw = readFileSync(file, 'utf8')
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n\r?\n?([\s\S]*)$/)

  if (!match) throw new Error(`${basename(file)}: frontmatter is missing`)

  const data = {}
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(':')
    if (separator < 0) continue
    const key = line.slice(0, separator).trim()
    const value = line.slice(separator + 1).trim()
    data[key] = parseScalar(value, file, key)
  }

  if (data.slug !== slug) {
    throw new Error(`${basename(file)}: slug does not match filename`)
  }

  return { ...data, id: slug, content: match[2].trim() }
}

function literal(value) {
  return JSON.stringify(value, null, 2)
}

function template(value) {
  return value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
}

const posts = slugs.map(parsePost)
const fields = [
  'id',
  'slug',
  'title',
  'metaTitle',
  'metaDescription',
  'excerpt',
  'category',
  'date',
  'readTime',
  'image',
  'tags',
  'keywords',
  'relatedProducts',
]

const source = `import type { BlogPost } from './mock-data'

// Generated from seomachine/signal/published. Edit the Markdown sources and rerun the exporter.
export const signalEcoflowBlogPosts20260808: BlogPost[] = [
${posts
  .map((post) => {
    const entries = fields.map((field) => `    ${field}: ${literal(post[field])},`)
    entries.splice(6, 0, `    content: \`${template(post.content)}\`,`)
    return `  {\n${entries.join('\n')}\n  }`
  })
  .join(',\n')}
]
`

writeFileSync(resolve(outputPath), source, 'utf8')
console.log(JSON.stringify({ articles: posts.length, outputPath: resolve(outputPath) }, null, 2))
