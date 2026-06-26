# 17. Risks, Forecast and Facts: MRR and ARR

## Слабые стороны с точки зрения аналитической философии
- MRR может выглядеть стабильным, даже если внутри есть опасный churn и expansion-компенсация.
- ARR = MRR * 12 создает иллюзию будущей выручки, хотя churn и contraction еще впереди.
- MRR часто путают с cash collected и recognized revenue.
- Usage-based и hybrid pricing плохо укладываются в простую recurring-логику.

## Где метрика может обмануть
Метрика обманывает, когда ее начинают воспринимать как реальность, а не как модель реальности. Для `MRR and ARR` главный риск - забыть, что показатель зависит от определения события, выбранного знаменателя, периода, сегмента и качества данных.

Практическое правило: если метрика не связана с решением, она становится отчетностью; если не связана с поведением пользователя, она становится декором; если не связана с фактами, она становится мнением.

## Прогноз с понижающими коэффициентами
Базовая идея:

```text
Forecast Ending MRR = starting_MRR + new + expansion + reactivation - contraction - churn

Risk Coefficient = 1 - Probability_of_Risk * Impact_of_Risk

Conservative Forecast = Base Forecast * K_total
K_total = `K_recurring_quality` * `K_churn_forecast` * `K_expansion_confidence` * `K_billing_accuracy`
```

Если команда не готова оценивать вероятность и impact отдельно, используйте прямой haircut:
- 0.95 - слабый риск, почти все подтверждено фактами.
- 0.85 - средний риск, есть неполные данные или перенос между сегментами.
- 0.70 - высокий риск, гипотеза еще плохо подтверждена.
- 0.50 - критический риск, прогноз больше похож на сценарий, чем на оценку.

### Типовые понижающие коэффициенты
| Коэффициент | Диапазон | Что означает |
|---|---:|---|
| `K_recurring_quality` | 0.70-0.98 | понижение, если revenue не полностью recurring |
| `K_churn_forecast` | 0.60-0.95 | понижение за неопределенность будущего churn |
| `K_expansion_confidence` | 0.65-0.95 | понижение, если expansion основан на слабой pipeline-гипотезе |
| `K_billing_accuracy` | 0.75-0.98 | понижение за billing, proration, failed payments |

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
- Фиксировать MRR movements: new, expansion, contraction, churn, reactivation.
- Хранить subscription_id, account_id, plan_id, billing_period, normalized_mrr.
- Разделять cash invoice и MRR movement.
- Сохранять proration, discount, pause и cancellation effective date.

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
