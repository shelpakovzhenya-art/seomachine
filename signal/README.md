# Signal SEO Articles

Signal articles are prepared here first, then mirrored into the Signal storefront only for publishing.

Workflow used for earlier batches:

1. Research competitors, existing Signal coverage, catalog inventory, and demand proxies.
2. Pick non-duplicate topics with commercial intent.
3. Write publish-ready articles in `published/`.
4. Mirror the final content into `C:\Signal\src\lib\blog-signal-seomachine-data.ts`.

Direct Yandex Wordstat export was not available for those earlier batches without an authenticated Yandex session, so their topic priority was based on a Wordstat-style proxy: Yandex/search wording frequency in SERPs, competitor coverage, visible market demand signals, and Signal inventory fit.

## 2026-07-13 Wordstat batch

The ten articles dated `2026-07-13` use direct, authenticated Yandex Wordstat data for all regions and the period `11.06.2026-10.07.2026`. The query selection and frequencies are recorded in `research/2026-07-13-wordstat-topic-selection.md`.

Generate the append-only Signal data modules with:

```powershell
node .\signal\tools\export-signal-blog-2026-07-13.mjs
```

The exporter validates metadata, structure, internal links, image references, and the exact ten-slug manifest before writing files to `signal/exports/`. Publishing must merge only those generated modules and their 40 assets into a fresh production snapshot; never replace production blog data with a local Signal tree.
