---
type: metadata-patch
status: published
published_at: 2026-10-28T11:45:56+03:00
published_source_commit: bedb360f337224fd474897f3e12ed9e91cdab06e
checked_at: 2026-10-28
url: https://signalmsk.com/blog/avtomobilnyi-reb-romashka-garpiya-ili-stanciya
workflow: SEO Machine analyze-existing
---

# Исправление неверной обложки

Публичный HTML и визуальная проверка 28.10.2026 показали, что обложка использует
фото комплекта усилителя сигнала DJI — другой категории оборудования.
Использовать нейтральную фирменную обложку Сигнала, не изображающую оборудование.

Точный патч в `src/lib/blog-signal-seo-2026-06-09-data.ts`:

- URL статьи сохранить.
- Поле `image`: `/blog-images/signal-blog-avtomobilnyi-reb-romashka-garpiya-ili-stanciya-cover.png`
  заменить на `/og-default.png`.
- Текст, заголовки, даты, ссылки и товары этой правкой не менять.

Один источник `post.image` уже используется для обложки статьи, OG и BlogPosting.
Приёмка: три места указывают на доступный нейтральный файл; старая обложка
не используется в них; остальные поля статьи полностью совпадают до/после.
Файл старого изображения не удалять. Новых утверждений о товаре не добавлять.

Доказательства: Signal workspace `nonproduct-og-review-index-20261028.json`,
строка index124, контактный лист8; `nonproduct-og-review-20261028.csv`.
