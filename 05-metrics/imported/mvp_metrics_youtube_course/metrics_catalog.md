# Metrics Catalog

Этот файл нужен как быстрый справочник для подготовки к интервью.

| # | Папка | Метрика | Главный вопрос |
|---|---|---|---|
| 1 | `01_north_star_metric` | North Star Metric | Как выбрать одну метрику, вокруг которой можно выстроить MVP, продуктовую команду и рост? |
| 2 | `02_aarrr_pirate_metrics` | AARRR / Pirate Metrics | Как разложить рост MVP на понятную воронку и найти самое слабое место? |
| 3 | `03_activation_rate` | Activation Rate | Как понять, что пользователь не просто зарегистрировался, а впервые получил ценность? |
| 4 | `04_conversion_rate` | Conversion Rate | Как измерять переход пользователя из одного состояния в другое и не попасть в ловушку неправильного знаменателя? |
| 5 | `05_funnel_dropoff_rate` | Funnel Drop-off Rate | Как найти самый болезненный шаг воронки и понять, что именно чинить? |
| 6 | `06_retention_rate` | Retention Rate | Как понять, нужен ли MVP людям после первого любопытства? |
| 7 | `07_cohort_analysis` | Cohort Analysis | Как не смешивать пользователей разных периодов и понять, улучшает ли продукт новые когорты? |
| 8 | `08_churn_rate` | Churn Rate | Как понять, сколько пользователей или выручки продукт теряет за период? |
| 9 | `09_active_users_dau_wau_mau` | Active Users: DAU, WAU, MAU | Как измерять размер живой аудитории продукта без превращения метрики в vanity? |
| 10 | `10_stickiness_dau_mau` | Stickiness: DAU/MAU | Как понять, насколько продукт стал привычкой для месячной аудитории? |
| 11 | `11_feature_adoption_rate` | Feature Adoption Rate | Как измерить, нужна ли функция пользователям после релиза? |
| 12 | `12_customer_acquisition_cost_cac` | Customer Acquisition Cost (CAC) | Сколько стоит привлечь одного нового платящего клиента и окупается ли этот рост? |
| 13 | `13_lifetime_value_ltv_clv` | Lifetime Value (LTV / CLV) | Как оценить будущую выручку или прибыль от клиента и не нарисовать красивую фантазию? |
| 14 | `14_ltv_to_cac_ratio` | LTV:CAC Ratio | Как понять, приносит ли клиент больше ценности, чем стоит его привлечение? |
| 15 | `15_cac_payback_period` | CAC Payback Period | Как быстро бизнес возвращает деньги, потраченные на привлечение клиента? |
| 16 | `16_arpu_arpa_arppu` | ARPU, ARPA, ARPPU | Как понять средний уровень монетизации и не перепутать всех пользователей с платящими? |
| 17 | `17_mrr_arr` | MRR and ARR | Как измерять предсказуемую подписочную выручку и отделять ее от разовых платежей? |
| 18 | `18_trial_to_paid_conversion` | Trial-to-Paid Conversion | Как понять, работает ли trial как механизм продажи подписки? |
| 19 | `19_nrr_grr` | NRR and GRR | Растет ли выручка от существующих клиентов с учетом expansion, contraction и churn? |
| 20 | `20_nps_csat_ces` | NPS, CSAT, CES | Как измерять лояльность, удовлетворенность и усилие пользователя без подмены поведения опросами? |

## Метрики по стадии MVP

| Стадия | Главный вопрос | Метрики |
|---|---|---|
| Problem/Solution Fit | Боль реальна и пользователь готов действовать? | smoke-test conversion, interview signal, waitlist conversion, willingness to pay |
| First Value | Дошел ли пользователь до первого результата? | Activation Rate, Time to Value, Funnel Drop-off |
| Habit / Repeat Use | Возвращается ли пользователь? | Retention, Cohort Analysis, DAU/WAU/MAU, Stickiness |
| Monetization | Есть ли деньги и повторные платежи? | Trial-to-Paid, ARPU/ARPPU, MRR/ARR, Churn |
| Scalable Growth | Можно ли масштабировать привлечение? | CAC, LTV, LTV:CAC, Payback, NRR/GRR |
| Customer Voice | Что пользователи чувствуют и где friction? | NPS, CSAT, CES, qualitative feedback |

## Мини-чеклист любой метрики
- Какое решение принимаем?
- Кто в числителе?
- Кто в знаменателе?
- Какой период или окно?
- Какая единица анализа?
- Какие сегменты обязательны?
- Где возможен bias?
- С чем сравниваем: прошлый период, cohort, control group, benchmark?
