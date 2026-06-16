# Signal Wordstat research: 2026-06-16 batch

Date: 2026-06-16
Source: Yandex Wordstat open in Chrome with authorized access.
Region: all regions.
Purpose: pick 5 non-duplicate Signal blog articles with confirmed demand and product/category fit.

## Duplicate check

Checked current Signal blog slugs from `shelpakovzhenya-art/Signal` `origin/main`.

Selected slugs are not present:

- `ray-ban-meta-stoit-li-pokupat`
- `iphone-17-air-ili-iphone-17`
- `iphone-17e-ili-iphone-17`
- `samsung-galaxy-a56-ili-a36`
- `apple-pencil-pro-ili-apple-pencil-usb-c`

## Product/category fit check

Checked live Signal search API:

- `iphone 17 air`: 12 results, including `smartfon-apple-iphone-17-air-256-gb-black-chernyi`.
- `iphone 17e`: 12 results, including `smartfon-apple-iphone-17e-256-gb-black-2`.
- `galaxy a56`: 17 results, including `smartfon-samsung-galaxy-a56-8-128-gb-chernyi`.
- `galaxy a36`: 20 results, including `smartfon-samsung-galaxy-a36-8-128-gb-chernyi`.
- `apple pencil`: 3 results, including `stilus-apple-pencil-pro`, `stilus-apple-pencil-1-usb-c`, and `stilus-apple-pencil-2`.
- `ray-ban`: 8 results, including Ray-Ban Meta Wayfarer Gen 2 and Wayfarer models.

## Selected topics

| Topic | Wordstat query | Period | Total | Useful tails | Reason |
|---|---|---:|---:|---|---|
| Ray-Ban Meta: стоит ли покупать | `ray ban meta` | 16.05.2026-14.06.2026 | 48 603 | `ray ban meta очки` 16 922; `ray ban meta 2` 13 228; `ray ban meta купить` 5 698 | Very strong demand, clear product category, high commercial intent. |
| iPhone 17 Air или iPhone 17 | `iphone 17 air iphone 17` | 16.05.2026-14.06.2026 | 29 970 | `iphone 17 vs iphone 17 air` 1 531; `сравнение iphone 17 и 17 air` 1 166; `купить iphone 17 air` 1 928 | Strong demand and useful comparison intent. |
| iPhone 17e или iPhone 17 | `iphone 17e iphone 17` | 16.05.2026-14.06.2026 | 2 635 | `iphone 17e vs 17` 599; `сравнение iphone 17 и 17e` 465; `чем отличается iphone 17 от 17e` 224 | Good commercial comparison, both product families exist in Signal. |
| Samsung Galaxy A56 или A36 | `samsung galaxy a56 a36` | 16.05.2026-14.06.2026 | 354 | `сравнение samsung galaxy a36 и a56` 61; `samsung galaxy a36 vs a56` 47; `samsung galaxy a56 или a36` 39 | Midrange Samsung comparison, both product families present. |
| Apple Pencil Pro или Apple Pencil USB-C | `apple pencil pro apple pencil usb c` | 16.05.2026-14.06.2026 | 185 | `apple pencil pro usb c` 185 | Accessory comparison with product availability and buyer confusion. |

## Rejected or deferred topics

| Topic | Demand result | Decision |
|---|---:|---|
| AirPods Pro 3 vs AirPods 4 | 2 061 | Demand is good, but Signal already has several AirPods comparison articles; risk of topical repetition. |
| Xiaomi 15 vs iPhone 17 | 681 | No exact duplicate, but product/category fit is less clean in the current Signal data than selected topics. |
| JBL PartyBox 120 vs 320 | 270 | Demand exists, but live product search did not confirm PartyBox 120/320 cards quickly. Defer until product fit is confirmed. |
| GoPro Hero 13 vs DJI Action 5 | 92 | Low exact demand and adjacent article coverage already exists around action cameras. |
| Dyson V16 vs V15 | 80 | Low exact demand and Signal already has broader Dyson articles. |
| Galaxy Watch 8 vs Apple Watch Series 11 | 10 | Too low for this batch. |
| ASUS ROG Xbox Ally X vs Steam Deck OLED | 41 | Low exact demand and existing portable-console article is close. |
| Sennheiser Momentum 4 vs Sony WH-1000XM6 | 40 | Low exact demand and audio comparisons already exist. |

## Article requirements for the batch

- Commercial-helpful structure.
- Direct answer in the first 150-200 words.
- One comparison table per comparison article.
- FAQ from search intent and product objections.
- 3-6 internal Signal links per article.
- 3 inline lifestyle images per article with descriptive alt/caption.
- Cover image in Signal style, without text.
