# Signal SEO context

## Project

- Website: https://signalmsk.com
- GitHub website repository: `shelpakovzhenya-art/Signal`
- SEO source repository: `shelpakovzhenya-art/seomachine`
- Rule: write and store SEO source articles here first, then mirror finished content into the Signal website repository.
- Production deploys are handled only from the Signal repository and require separate explicit approval for the specific deploy action.

## Audience and intent

Signal sells consumer electronics, Apple/Samsung smartphones, gaming devices, audio, photo/video gear, drones, accessories, smart glasses, and special equipment. Blog articles should serve high-intent buyers who are comparing models before purchase.

The winning article format is commercial-helpful, not abstract informational:

- Start with a direct answer in the first screen.
- Explain who should buy each option and who should not.
- Use practical scenarios: home, office, commute, travel, sport, content creation, family use, gift purchase.
- Include comparison tables when a user is choosing between products.
- Mention Signal naturally as the place to compare configurations, prices, availability, and accessories.
- Avoid empty hype, keyword stuffing, fake certainty, and generic AI phrasing.

## Editorial style

- Language: Russian.
- Tone: calm expert consultant, direct and practical.
- Paragraphs: short, mobile-friendly, usually 2-4 sentences.
- Headings: clear buyer questions, not decorative phrases.
- Format: intro, short answer, comparison table, scenario sections, buying recommendation, FAQ, conclusion.
- Facts: do not invent specifications; verify current product details from official pages or Signal product cards.
- Prices: use exact Signal prices only when fetched from live product cards at the time of writing. Otherwise write "проверьте актуальную цену".

## SEO-machine process for Signal

For each article:

1. Check current Signal blog slugs in the website GitHub repository to avoid duplicates.
2. Validate demand in Wordstat or another current demand source.
3. Save research in `research/`.
4. Save article source in `drafts/signal/`.
5. When ready to publish, copy the same markdown to `published/signal/`.
6. Mirror the final article into the Signal website as a typed blog data entry.

Frontmatter conventions:

```yaml
---
title: ""
meta_title: ""
meta_description: ""
slug: "/blog/example-slug"
category: ""
read_time: "8 мин"
tags: []
keywords: []
image: "/blog-images/example-cover.png"
related_products: []
---
```

Website mirror fields use camelCase equivalents: `metaTitle`, `metaDescription`, `readTime`, `relatedProducts`.

## Internal links

Prefer direct Signal links:

- Product card: `/product/[slug]`
- Catalog search: `/catalog?q=[encoded query]`
- Category pages where relevant: `/catalog/[category-slug]`
- Related blog articles: `/blog/[slug]`

Use 3-6 internal links per article. Link anchors should be descriptive: product name, model family, or buyer scenario. Do not use "тут", "здесь", "читать далее" as anchor text.

## Images

Featured covers:

- No text, no labels, no fake UI captions.
- Match existing Signal cover style: clean light background, soft shadows, product collage, restrained palette, modern retail-card composition.
- Product/card photography is allowed, but cover must not look like a marketplace banner.

Inline images:

- 3 images per article.
- 1200x750 JPG preferred.
- Realistic/lifestyle scenarios, no text in the image.
- Each image needs `src`, `alt`, and `caption` in Signal's `blog-inline-media.ts`.
- Alt text should describe the concrete scene and include the product/topic naturally when useful.
- Avoid physically impossible or awkward generated scenes. Devices should be held/carried naturally.

## Course/source index applied

Before SEO article work, review the shared course/source index:

https://docs.google.com/spreadsheets/d/1bwqNrnxpdMkdUrCLb2GQZt4rluGHgEyx6rO7z-_dnI8/edit?gid=0#gid=0

For Signal SEO articles, use:

- SEO sources: SEO-radar, SEO Club, Rush Academy, Karbyshev, and related search architecture materials.
- Content/marketing sources: buyer intent, offer clarity, objection handling, and conversion-oriented article structure.
- "Seomachine" principles: demand validation, gap-aware structure, direct answer, section-by-section writing, natural keyword coverage, metadata, internal links, image SEO, and post-writing QA.

## Current 2026-06-16 topic batch

Selected after checking Wordstat demand, GitHub duplicate slugs, and Signal product/category availability:

- `ray-ban-meta-stoit-li-pokupat`
- `iphone-17-air-ili-iphone-17`
- `iphone-17e-ili-iphone-17`
- `samsung-galaxy-a56-ili-a36`
- `apple-pencil-pro-ili-apple-pencil-usb-c`

The detailed demand check is saved in `research/signal-wordstat-2026-06-16.md`.
