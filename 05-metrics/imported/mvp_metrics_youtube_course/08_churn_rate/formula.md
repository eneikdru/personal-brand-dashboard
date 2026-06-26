# 08. Formula: Churn Rate

## Что измеряет
Как понять, сколько пользователей или выручки продукт теряет за период?

## Формула
```text
Customer Churn Rate = customers_lost_during_period / customers_at_start_of_period * 100%

Revenue Churn Rate = MRR_lost_from_churn_and_contraction / MRR_at_start_of_period * 100%

Subscription Cancellation Rate = canceled_subscriptions / active_subscriptions_at_start * 100%
```

## Как измерять на практике
- Разделить cancel, expired, paused, failed payment, refund, chargeback.
- Для подписок считать churn по billing cycles, а не только по календарным месяцам.
- Отдельно смотреть voluntary churn и involuntary churn из-за проблем оплаты.
- Сегментировать по тарифу, каналу, стране, платформе, возрасту подписки.

## Нюансы и ловушки
- Logo churn и revenue churn могут вести себя противоположно: ушло много маленьких клиентов, но выручка почти не просела.
- Churn в первый месяц часто отражает неправильное обещание или слабую activation.
- Отмена подписки и потеря доступа могут происходить в разные даты.
- Сезонные продукты требуют сравнения year-over-year или сезонных когорт.

## Мини-шаблон ответа на собеседовании
"Я сначала уточню бизнес-модель и единицу анализа. Затем задам событие или состояние, которое считаем успехом, выберу окно наблюдения и сегменты. После этого посчитаю метрику по когортам и проверю, не конфликтует ли она с retention, revenue или пользовательской ценностью."

## Что обязательно назвать вслух
- Числитель.
- Знаменатель.
- Период или окно наблюдения.
- Уровень анализа: user, account, subscription, order, session.
- Сегменты: channel, cohort, platform, country, plan, new/returning.
- Решение, которое будет принято по результату.
