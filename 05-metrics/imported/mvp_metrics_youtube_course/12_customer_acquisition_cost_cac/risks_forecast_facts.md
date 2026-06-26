# 12. Risks, Forecast and Facts: Customer Acquisition Cost (CAC)

## Слабые стороны с точки зрения аналитической философии
- CAC легко занизить, исключив зарплаты, инструменты, агентства или sales effort.
- Blended CAC скрывает каналы, которые приводят дорогих и плохих клиентов.
- CAC часто считают без лага между spend и paid customer.
- Метрика не показывает качество клиентов без LTV, retention и payback.

## Где метрика может обмануть
Метрика обманывает, когда ее начинают воспринимать как реальность, а не как модель реальности. Для `Customer Acquisition Cost (CAC)` главный риск - забыть, что показатель зависит от определения события, выбранного знаменателя, периода, сегмента и качества данных.

Практическое правило: если метрика не связана с решением, она становится отчетностью; если не связана с поведением пользователя, она становится декором; если не связана с фактами, она становится мнением.

## Прогноз с понижающими коэффициентами
Базовая идея:

```text
Forecast CAC = forecast_acquisition_spend / forecast_new_paid_customers

Risk Coefficient = 1 - Probability_of_Risk * Impact_of_Risk

Conservative Forecast = Base Forecast * K_total
K_total = `K_attribution_confidence` * `K_channel_scalability` * `K_sales_capacity` * `K_customer_quality`
```

Если команда не готова оценивать вероятность и impact отдельно, используйте прямой haircut:
- 0.95 - слабый риск, почти все подтверждено фактами.
- 0.85 - средний риск, есть неполные данные или перенос между сегментами.
- 0.70 - высокий риск, гипотеза еще плохо подтверждена.
- 0.50 - критический риск, прогноз больше похож на сценарий, чем на оценку.

### Типовые понижающие коэффициенты
| Коэффициент | Диапазон | Что означает |
|---|---:|---|
| `K_attribution_confidence` | 0.65-0.95 | понижение уверенности при спорной атрибуции |
| `K_channel_scalability` | 0.60-0.95 | понижение, если канал еще не проверен на большем бюджете |
| `K_sales_capacity` | 0.70-0.98 | понижение, если sales/ops не выдержат объем |
| `K_customer_quality` | 0.65-0.95 | понижение, если новые клиенты хуже по activation/retention |

### Как считать на практике
1. Посчитать базовый прогноз без оптимизма: взять историческую метрику по максимально похожей когорте.
2. Выписать риски, которые могут занизить факт относительно прогноза.
3. Каждому риску присвоить коэффициент от 0.50 до 1.00.
4. Умножить базовый прогноз на все коэффициенты.
5. Отдельно сохранить optimistic, base и conservative forecast.

Пример:

```text
Base Forecast = 10 000
K_data = 0.90
K_segment = 0.80
K_execution = 0.85

Conservative Forecast = 10 000 * 0.90 * 0.80 * 0.85 = 6 120
```

## Как фиксировать факты
- Фиксировать spend by channel, campaign, period и currency.
- Логировать customer_acquired_at, first_paid_at и attribution path.
- Разделять lead, signup, activated user, paid customer.
- Хранить CAC model version: paid CAC, blended CAC, fully loaded CAC.

## Мини-схема fact log
```text
fact_id
metric_id
entity_id: user_id / account_id / subscription_id / order_id
event_name_or_state_change
event_timestamp_utc
cohort_key
segment_keys
product_version
experiment_id
source_system
raw_value
normalized_value
exclusion_flag
exclusion_reason
recorded_at
```

## Как отделять факт от интерпретации
- Факт: пользователь совершил событие, платеж прошел, подписка отменена, аккаунт активен.
- Интерпретация: пользователь получил ценность, пользователь доволен, канал качественный, функция успешна.
- Прогноз: ожидаем, что похожая когорта покажет такой-то результат.
- Риск: почему прогноз может быть завышен.

Хорошая аналитика держит эти четыре слоя отдельно. Это особенно важно на MVP, где данных мало, а желание поверить в красивую метрику очень сильное.
