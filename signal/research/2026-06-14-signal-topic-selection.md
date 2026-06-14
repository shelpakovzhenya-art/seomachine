# Signal topic selection - 2026-06-14

Direct Yandex Wordstat table export was not available in this local environment without an authenticated Yandex session. The Wordstat web app opened, but did not expose frequency rows to unauthenticated command-line requests. For demand validation this batch uses the Signal seomachine fallback closest to Wordstat: open Yandex suggest demand-family checks (`suggest.yandex.ru`, region Moscow where supported), commercial query phrasing, duplicate review against the live Signal blog, and live Signal product fit.

The user explicitly asked not to repeat topics already on the site, so high-demand but already-covered topics were rejected even when the demand signal was strong.

## Selected topics

| # | Slug | Primary keyword | Demand signal | Signal inventory |
|---|---|---|---|---|
| 1 | nintendo-switch-2-pro-controller-i-aksessuary | Nintendo Switch 2 Pro Controller | Yandex suggest: "nintendo switch 2 pro controller", "nintendo switch 2 pro controller купить", "геймпад nintendo switch 2 pro controller"; accessory queries also return "nintendo switch 2 купить", "nintendo switch 2 игры", "nintendo switch 2 обзор". | Nintendo Switch 2, Pro Controller, Starter Kit 9 in 1, protective glass, case |
| 2 | dualsense-edge-ili-dualsense | DualSense Edge или DualSense | Yandex suggest: "dualsense edge купить", "dualsense edge чем отличается от обычного", "dualsense edge отличия dualsense", "dualsense vs dualsense edge". | Sony DualSense Edge, DualSense, PS5 accessories |
| 3 | galaxy-buds-3-pro-ili-airpods-pro-3 | Galaxy Buds 3 Pro или AirPods Pro 3 | Yandex suggest: "samsung galaxy buds 3 pro vs airpods pro 3", "galaxy buds 3 pro или airpods pro 3", "samsung galaxy buds 3 pro купить", "airpods pro 3 купить". | Samsung Galaxy Buds 3 Pro, AirPods Pro 3 |
| 4 | google-pixel-10-pro-ili-samsung-galaxy-s26-ultra | Google Pixel 10 Pro или Samsung Galaxy S26 Ultra | Yandex suggest: "google pixel 10 pro vs samsung s26 ultra", "google pixel 10 pro купить", "samsung s26 ultra купить", "samsung galaxy s26 ultra купить". | Google Pixel 10 Pro / Pro XL, Samsung Galaxy S26 Ultra |
| 5 | jbl-xtreme-4-ili-charge-6 | JBL Xtreme 4 или Charge 6 | Yandex suggest: "jbl charge 6 vs jbl xtreme 4", "jbl xtreme 4 или charge 6", "сравнение колонок jbl charge 6 и xtreme 4", "jbl xtreme 4 купить". | JBL Xtreme 4, JBL Charge 6, portable speaker category |

## Rejected as duplicates or too close

| Candidate | Reason rejected |
|---|---|
| Starlink Mini / Starlink V4 | Already covered on the live site as `starlink-mini-v5-vs-starlink-v4`; High Performance vs V4 is also covered. |
| PlayStation Portal | Already covered as `playstation-portal-stoit-li-pokupat`. |
| Meta Quest 3 / Quest 3S | Multiple Quest 3 / Quest 3S articles already exist. |
| Garmin vs Apple Watch / Apple Watch Ultra 3 vs Fenix 8 | The live site already has a broad `garmin-ili-apple-watch-kakie-chasy-vybrat` article plus Apple Watch and Garmin-specific guides. |
| Samsung Galaxy S26 Ultra vs iPhone 17 Pro Max | Already covered as `samsung-galaxy-s26-ultra-vs-iphone-17-pro-max`. |
| Steam Deck / ROG Ally / portable consoles | Already covered by the portable console guide and Steam Deck storage article. |
| DJI Mavic 4 Pro / Mini 5 Pro bundles | Already covered by dedicated DJI bundle and comparison articles. |
| DJI Mic 3 / DJI Mic Mini | DJI Mic 3 and DJI Mic 2 vs Mic Mini are already covered; the remaining direct comparison is too close. |
| Dyson V15 / Submarine | Existing `kakoy-dyson-vybrat-2026` already covers V15, V16, Gen5 and Submarine as the core buyer decision. |
| JBL PartyBox / Flip / Charge / Boombox | PartyBox and Flip/Charge/Boombox are already covered; Xtreme 4 vs Charge 6 remains a distinct uncovered intent. |

Notes:
- All selected topics are commercial informational articles tied to live Signal product cards.
- Each article has a unique local cover path for the storefront.
- Existing blog content remains append-only: new topics should be mirrored into a new `blog-signal-seo-2026-06-14-data.ts` module and imported/spread without removing any existing production imports.
