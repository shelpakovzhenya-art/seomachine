# EcoFlow topic cluster for Signal - 2026-08-08

## Objective

Build a 20-article commercial-information cluster around the live Signal EcoFlow catalog. The cluster must increase qualified discovery traffic without replacing category or product-page intent.

Production facts captured before writing:

- Live category: `https://signalmsk.com/catalog/ecoflow`.
- Live inventory: 209 unique products across 9 result pages.
- Published Signal blog before this batch: 342 runtime entries; no dedicated EcoFlow articles found.
- Prices are volatile. Articles must never hard-code a current price.
- Every article links to `/catalog/ecoflow`, 2-4 relevant live product URLs, and 1-2 sibling articles where useful.

## Wordstat method

Demand was checked in the authenticated Yandex Wordstat interface for all regions. Values below are monthly query totals shown for the latest available period around 2026-07-08 to 2026-08-06. Broad phrases overlap, so they must not be summed into a traffic forecast.

High-demand signals:

- `ecoflow` - 109,100
- `ecoflow delta 3` - 54,531
- `ecoflow delta 3 max` - 21,304
- `ecoflow delta 3 plus` - 17,723
- `ecoflow river 3` - 5,383
- `ecoflow солнечная панель` - 3,892
- `ecoflow отзывы` - 2,257
- `ecoflow дополнительная батарея` - 1,883
- `ecoflow аккумулятор` - 1,375
- `ecoflow обзор` - 1,160
- `ecoflow инструкция` - 682
- `ecoflow glacier` - 376
- `ecoflow для дома` - 332
- `ecoflow сравнение` - 308
- `ecoflow alternator charger` - 302
- `ecoflow ибп` - 258
- `ecoflow delta 3 сравнение` - 218
- `ecoflow для холодильника` - 115
- `ecoflow сколько работает` - 98
- `ecoflow для кемпинга` - 80
- `ecoflow для котла` - 58
- `какой ecoflow выбрать` - 58
- `ecoflow для квартиры` - 52
- `ecoflow для дачи` - 51

## Topic map

| # | Slug | Primary intent | Wordstat signal | Search role |
| --- | --- | --- | ---: | --- |
| 1 | `kakoy-ecoflow-vybrat-obzor-lineyki` | какой EcoFlow выбрать / EcoFlow обзор | 58 / 1,160 | Cluster hub and lineup guide |
| 2 | `ecoflow-otzyvy-plyusy-i-minusy` | EcoFlow отзывы | 2,257 | Evidence-based pre-purchase concerns |
| 3 | `ecoflow-instrukciya-pervyy-zapusk` | EcoFlow инструкция | 682 | First setup, charging, app, safe use |
| 4 | `ecoflow-dlya-doma-kvartiry-i-dachi` | EcoFlow для дома | 332 (+52/+51) | Scenario guide, no doorway-page split |
| 5 | `ecoflow-dlya-holodilnika-raschet` | EcoFlow для холодильника | 115 | Runtime and starting-load calculation |
| 6 | `ecoflow-dlya-gazovogo-kotla` | EcoFlow для котла | 58 | Backup-power compatibility checklist |
| 7 | `ecoflow-kak-ibp-ups` | EcoFlow ИБП | 258 | UPS mode, switchover and load limits |
| 8 | `ecoflow-dlya-kempinga` | EcoFlow для кемпинга | 80 | Portable scenario and model selection |
| 9 | `skolko-rabotaet-ecoflow` | EcoFlow сколько работает | 98 | Formula-led runtime explainer |
| 10 | `solnechnaya-panel-ecoflow-kak-vybrat` | EcoFlow солнечная панель | 3,892 | Panel power, connectors, placement |
| 11 | `dopolnitelnaya-batareya-ecoflow` | EcoFlow дополнительная батарея | 1,883 | Compatibility and capacity expansion |
| 12 | `akkumulyator-ecoflow-resurs-i-hranenie` | EcoFlow аккумулятор | 1,375 | Chemistry, cycles, storage and care |
| 13 | `ecoflow-delta-3-obzor` | EcoFlow DELTA 3 обзор | 745 | Model overview by scenarios, not price |
| 14 | `ecoflow-delta-3-ili-delta-3-plus` | DELTA 3 vs DELTA 3 Plus | 218 comparison / 17,723 model | Comparison intent |
| 15 | `ecoflow-delta-3-max-ili-max-plus` | DELTA 3 Max vs Max Plus | 21,304 broad model | Comparison intent |
| 16 | `ecoflow-delta-3-classic-ili-delta-3` | DELTA 3 Classic vs DELTA 3 | 6,167 broad model | Comparison intent |
| 17 | `ecoflow-delta-3-1500-1000-air-2000-air` | DELTA 3 1500 / Air comparison | 44 overview plus model demand | Capacity-step comparison |
| 18 | `ecoflow-river-3-plus-max-sravnenie` | EcoFlow RIVER 3 comparison | 5,383 | Compact-lineup comparison |
| 19 | `ecoflow-glacier-classic-35-45-55` | EcoFlow GLACIER | 376 | Portable-fridge size guide |
| 20 | `ecoflow-alternator-charger-500-800` | EcoFlow Alternator Charger | 302 | Vehicle-charging comparison |

## Cannibalization boundaries

- Category `/catalog/ecoflow` owns broad transactional intent: `EcoFlow купить`, `EcoFlow цена`, and the product assortment.
- Product pages own exact model transactional intent: model name plus `купить`, `цена`, capacity, or color.
- Articles own comparison, selection, setup, runtime, compatibility, review-analysis, and usage-scenario intent.
- Never put `купить` or a price promise in article titles, H1, meta titles, or slugs.
- The hub article may summarize every family, but detailed comparisons belong only to their mapped article.
- The generic review article must discuss recurring selection criteria and limitations across the ecosystem. It must not duplicate the DELTA 3 model overview.

## Live internal links

Core:

- EcoFlow category: `/catalog/ecoflow`
- DELTA 3: `/product/portativnaya-zaryadnaya-stanciya-ecoflow-delta-3-1024-vtch`
- DELTA 3 Plus: `/product/portativnaya-zaryadnaya-stanciya-ecoflow-delta-3-plus-1024-vtch`
- DELTA 3 Max: `/product/portativnaya-zaryadnaya-stanciya-ecoflow-delta-3-max-2048-vtch`
- DELTA 3 Max Plus: `/product/portativnaya-zaryadnaya-stanciya-ecoflow-delta-3-max-plus-2048-vtch`
- DELTA 3 Classic: `/product/portativnaya-zaryadnaya-stanciya-ecoflow-delta-3-classic-1024-vtch`
- DELTA 3 1500: `/product/portativnaya-zaryadnaya-stanciya-ecoflow-delta-3-1500-1536-vtch`
- DELTA 3 1000 Air: `/product/portativnaya-zaryadnaya-stanciya-ecoflow-delta-3-1000-air-960-vtch`
- DELTA 3 2000 Air: `/product/portativnaya-zaryadnaya-stanciya-ecoflow-delta-3-2000-air-1920-vtch`
- DELTA Pro 3: `/product/portativnaya-zaryadnaya-stanciya-ecoflow-delta-pro-3-4096-vtch`
- DELTA Pro Ultra: `/product/portativnaya-zaryadnaya-stanciya-ecoflow-delta-pro-ultra-6-30-kvtch`
- RIVER 3: `/product/portativnaya-zaryadnaya-stanciya-ecoflow-river-3-245-vtch`
- RIVER 3 Plus: `/product/portativnaya-zaryadnaya-stanciya-ecoflow-river-3-plus-286-vtch`
- RIVER 3 Max: `/product/portativnaya-zaryadnaya-stanciya-ecoflow-river-3-max-572-vtch`
- RIVER 3 Max Plus: `/product/portativnaya-zaryadnaya-stanciya-ecoflow-river-3-max-plus-858-vtch`
- RIVER 3 UPS: `/product/portativnaya-zaryadnaya-stanciya-ecoflow-river-3-ups-245-vtch`
- DELTA 3 extra battery: `/product/dopolnitelnaya-batareya-ecoflow-delta-3-1024-vtch`
- DELTA 3 Max Plus extra battery: `/product/dopolnitelnaya-batareya-ecoflow-delta-3-max-plus-2048-vtch`
- NextGen 220 W panel: `/product/solnechnaya-panel-skladnaya-dvustoronnyaya-ecoflow-nextgen-220-vt`
- Alternator Charger 500 W: `/product/avtomobilnoe-zaryadnoe-ustroistvo-ecoflow-alternator-charger-500-vt`
- Alternator Charger 800 W: `/product/avtomobilnoe-zaryadnoe-ustroistvo-ecoflow-alternator-charger-800-vt`
- GLACIER Classic 35 L: `/product/portativnyi-holodilnik-morozilnik-ecoflow-glacier-classic-35-l`
- GLACIER Classic 45 L: `/product/portativnyi-holodilnik-morozilnik-ecoflow-glacier-classic-45-l`
- GLACIER Classic 55 L: `/product/portativnyi-holodilnik-morozilnik-ecoflow-glacier-classic-55-l`

## Editorial requirements

- Russian, calm expert retail voice.
- 1,100-1,600 useful words per article, 5-7 H2 sections, short answer near the start.
- Add one useful comparison or calculation table where it improves the answer.
- Add an FAQ section with 3-5 concise questions whose answers are present in the article.
- Use only verifiable current technical facts. Prefer official EcoFlow product/manual pages as factual sources.
- Do not claim first-hand testing, owner experience, guaranteed runtime, guaranteed savings, or universal compatibility.
- Runtime calculations must show assumptions and use a realistic inverter-loss range rather than false precision.
- No copied competitor prose, filler, keyword stuffing, or em dashes.
- No hard-coded prices. Link visitors to the live catalog for availability and current price.
- Frontmatter category: `ecoflow`; date: `2026-08-08`.
- Cover path: `/blog/ecoflow/<slug>-cover.webp`.
- Include exactly three inline Markdown images after relevant paragraphs:
  - `/blog/ecoflow/<slug>-01.webp`
  - `/blog/ecoflow/<slug>-02.webp`
  - `/blog/ecoflow/<slug>-03.webp`
- Every image needs a natural descriptive Russian alt, not a keyword list.
- Images will be genuine in-use/lifestyle photographs sourced separately, optimized locally, and hosted by Signal. Writers must not invent image credits or hotlink external assets.

## Forecast rule

Do not sum the Wordstat totals. A conservative forecast must account for query overlap, ranking ramp, SERP click share, and commercial seasonality. Report traffic as a range after the pages are live and indexed, never as a guarantee.
