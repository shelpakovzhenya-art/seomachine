# Signal: sitewide SEO implementation manifest

Date: 2026-07-20
Site: https://signalmsk.com

## Verified baseline

- 4,566 URLs in the live sitemap.
- 4,167 published products.
- 160 blog URLs.
- 193 production categories have non-empty descriptions, but the catalog template did not render them.
- Four Yandex feed endpoints and the Google feed expose 4,167 offers/items.
- The homepage discount block and the DJI, FPV and drone-accessory branches are present.
- Signal is a young domain, so technical completeness and useful intent coverage matter more than mass URL generation.

## Intent architecture

### Transactional catalog

Keep product and category pages as the primary purchase layer. Category copy must explain selection criteria and link to relevant solutions without displacing product cards or filters.

Priority commercial hubs:

- DJI and FPV drones;
- Starlink and satellite connectivity;
- anti-drone equipment, detectors and signal protection;
- thermal and night scopes;
- iPhone eSIM and SIM variants;
- high-demand brand and model families already supported by inventory.

Only create a hub when live inventory, distinct intent and internal links exist. Do not create empty keyword pages.

### Solution intent

The `/solutions` cluster targets a concrete problem or setup task. Every solution must contain:

- a short answer near the top;
- checks in the order a buyer can perform them;
- compatibility and safety caveats;
- links to relevant catalog sections and related articles;
- FAQ and cited/explicitly bounded claims;
- `TechArticle`, `FAQPage` and `BreadcrumbList` markup where applicable.

Initial cluster:

- choosing a DJI drone for shooting and work;
- selecting FPV fiber components;
- choosing a thermal scope by task;
- choosing a drone detector or anti-drone setup.

### Trust and commercial support

- `/info/b2b`: request flow for organizations, without invented contract terms or legal claims.
- `/reviews`: verified Avito review source and clear provenance; never reuse store reviews as product ratings.
- Yandex Business: one verified card, consistent NAP, working hours and delivery facts.

### Regional pilots

Pilot only Moscow, Saint Petersburg, Kazan, Yekaterinburg and Novosibirsk. Each page must state that dispatch is from Moscow and provide unique delivery context. Do not claim local offices, local stock or local phone numbers.

Regional pages remain a pilot. Expand only after Search Console/Yandex Webmaster shows indexation and useful engagement. Avoid city x category multiplication.

## Technical implementation

- Self-referencing canonical for unique blog, product, category, solution and regional pages.
- `BlogPosting`, `Product`, `ProductGroup` where reliable, `BreadcrumbList`, `FAQPage`, `Organization`/`Store` markup.
- Never publish fabricated `AggregateRating` for products.
- Product schema must use real image, URL, SKU, category, price and availability.
- Sitemap `lastmod` must use stored update dates, not request time.
- New pages must be reachable from hubs and included in sitemap only when indexable and useful.
- Facet and sort URLs remain `noindex, follow` and canonicalize to the clean category URL.

## Duplicate-product policy

Exact names are not sufficient proof of duplication. Preserve separate pages when SIM type, region, memory, color or package differs. Make the differentiator visible in title and structured data. Merge or redirect only when identity fields match and one canonical product can safely retain source and feed coverage.

## Release guard

Before and after every deployment verify:

- published product count equals every Yandex feed and the Google feed;
- blog count stays at or above 160;
- discount block is present;
- drone branches and filters are present;
- sitemap, robots and canonicals are valid;
- category, product and blog images return 200 with an image content type;
- no fatal container logs and no unexpected redirects or URL-count loss.

## Measurement and traffic range

No authenticated Wordstat/DataForSEO export is available in the workspace, so this document does not invent keyword volumes. Forecasts are scenario ranges, not promises.

After crawl and indexation stabilizes for 8-16 weeks:

- technical fixes can recover impressions otherwise lost to weak canonicals, stale `lastmod` and missing structured context;
- the first 4 solution pages plus commercial hubs can reasonably target a combined 150-600 non-brand organic visits/month on a young domain;
- five genuinely useful regional pilots can add roughly 75-300 visits/month if indexed and supported by delivery demand;
- Yandex Business can add local discovery and branded actions, measured separately in the Business dashboard.

Primary KPIs: indexed/canonical URL ratio, non-brand impressions, top-10 query count, category-to-product CTR, solution-assisted product visits, feed validity and local card actions.

## Production release result

Released on 2026-07-20 from the production-truth branch. Post-release checks confirmed:

- 4,579 sitemap URLs: 4,167 products, 160 blog articles and 230 catalog URLs;
- all four Yandex feed endpoints return HTTP 200 with 4,167 offers;
- Google Merchant feed returns HTTP 200 with 4,167 items;
- 24 published out-of-stock products map to exactly 24 Yandex offers with `available="false"`;
- all 4,167 products have at least one image;
- 35,341 product image variants and 530 blog images return HTTP 200 with an image content type;
- `.jfif` media now uses `image/jpeg` instead of `application/octet-stream`;
- homepage discount products, drone branches, the right-side/mobile filter, Apple Watch imagery, cart and checkout remain present;
- category 289 (`Спецткани`) now describes SVMPE protective fabrics instead of radio equipment;
- the visible homepage inventory claim is `4000+`, consistent with the live catalog;
- production safety guard passes in normal and deep-image modes.

The Yandex Business form is filled with the verified NAP draft. Publication remains blocked only by the owner's SMS/phone confirmation; no card is counted as live before that verification succeeds.
