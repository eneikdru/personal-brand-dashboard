# 13. Formula: Lifetime Value (LTV / CLV)

## Что измеряет
Как оценить будущую выручку или прибыль от клиента и не нарисовать красивую фантазию?

## Формула
```text
Simple SaaS LTV = ARPU * Gross Margin / Customer Churn Rate

Revenue LTV = ARPU / Customer Churn Rate

Cohort LTV at period N = cumulative_revenue_or_gross_profit_from_cohort / users_in_cohort

Predictive LTV = expected future gross profit per customer based on survival, payments and segment behavior.
```

## Как измерять на практике
- Уточнить, считаем выручку или gross profit. Для экономики лучше gross profit.
- Считать по когортам и каналам, потому что средний LTV почти всегда скрывает различия.
- Не использовать зрелую формулу 1/churn для продукта, где churn еще нестабилен.
- Для подписок учитывать refunds, discounts, taxes, platform fees и failed payments.

## Нюансы и ловушки
- LTV на раннем MVP лучше считать как наблюдаемый cohort LTV + аккуратный прогноз, а не как точную истину.
- Высокий ARPU при высоком churn может давать слабый LTV.
- Предиктивный LTV должен калиброваться на фактических когортах.
- LTV без confidence range опасен для решений о бюджете.

## Мини-шаблон ответа на собеседовании
"Я сначала уточню бизнес-модель и единицу анализа. Затем задам событие или состояние, которое считаем успехом, выберу окно наблюдения и сегменты. После этого посчитаю метрику по когортам и проверю, не конфликтует ли она с retention, revenue или пользовательской ценностью."

## Что обязательно назвать вслух
- Числитель.
- Знаменатель.
- Период или окно наблюдения.
- Уровень анализа: user, account, subscription, order, session.
- Сегменты: channel, cohort, platform, country, plan, new/returning.
- Решение, которое будет принято по результату.
