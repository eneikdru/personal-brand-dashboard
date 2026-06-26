# 12. Formula: Customer Acquisition Cost (CAC)

## Что измеряет
Сколько стоит привлечь одного нового платящего клиента и окупается ли этот рост?

## Формула
```text
CAC = acquisition_costs / new_customers_acquired

Blended CAC = total_sales_and_marketing_costs / total_new_customers

Paid CAC by channel = paid_spend_in_channel / new_customers_from_channel

Fully Loaded CAC = (marketing + sales salaries + tools + agencies + ad spend) / new_customers
```

## Как измерять на практике
- Решить, считаем paid customers, activated customers или signups. Для unit economics обычно paid customers.
- Согласовать лаг между spend и customer: расходы в январе могут привести клиентов в феврале.
- Разделить new, returning, expansion и reactivation.
- Использовать атрибуцию осознанно: last click, first click, multi-touch дают разные ответы.

## Нюансы и ловушки
- Blended CAC скрывает убыточные каналы.
- CAC без LTV и payback ничего не говорит об устойчивости бизнеса.
- В B2B sales-cycle CAC надо считать с учетом зарплат sales и SDR.
- Для MVP первые клиенты часто приходят вручную, поэтому CAC может быть нерепрезентативным.

## Мини-шаблон ответа на собеседовании
"Я сначала уточню бизнес-модель и единицу анализа. Затем задам событие или состояние, которое считаем успехом, выберу окно наблюдения и сегменты. После этого посчитаю метрику по когортам и проверю, не конфликтует ли она с retention, revenue или пользовательской ценностью."

## Что обязательно назвать вслух
- Числитель.
- Знаменатель.
- Период или окно наблюдения.
- Уровень анализа: user, account, subscription, order, session.
- Сегменты: channel, cohort, platform, country, plan, new/returning.
- Решение, которое будет принято по результату.
