# Восстановление ссылок на действующие EcoFlow

Workflow: analyze-existing → optimize. Дата: 27.10.2026.
Основа: публичный каталог и текущий production source, SHA256 файла
d4977abcfccae13baf8802095ff035c98d0d2aa4682ab4b2af35815c5d896746.

Исправить только две точные ссылки:

- `/product/portativnaya-zaryadnaya-stanciya-ecoflow-delta-3-1024-vtch`
  → `/product/ecoflow-delta-3` (SKU6518: DELTA3 EU,1024Втч).
- `/product/portativnaya-zaryadnaya-stanciya-ecoflow-delta-3-1500-1536-vtch`
  → `/product/ecoflow-delta-3-1500` (SKU6519: DELTA3 1500 EU,1536Втч).

Старые адреса HTTP404; новые относятся к той же названной модели и ёмкости.
Фильтр removeDeletedProductLinks скрывает старые ссылки в публичном HTML,
поэтому исправление возвращает полезные переходы из текста и relatedProducts.
Не заменять DELTA3 на DELTA3Plus, RIVER на DELTA, Pocket3 на Pocket4 или
отсутствующий товар на внешне похожий. HTTP410 не восстанавливать.
Сохранить заголовки, даты публикации, смысл анкора и URL статей.
Приёмка: текущие ссылки в отрендеренном HTML каждого затронутого материала;
оба товара доступны, источники не менялись; lint/tsc/build и production smoke.
