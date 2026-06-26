# 18. Formula: Trial-to-Paid Conversion

## Что измеряет
Как понять, работает ли trial как механизм продажи подписки?

## Формула
```text
Trial-to-Paid Conversion = users_who_became_paying / users_who_started_trial * 100%

Eligible Trial Conversion = users_who_became_paying / users_whose_trial_reached_billing_attempt * 100%

First Renewal Rate = users_paid_second_cycle / users_paid_first_cycle * 100%
```

## Как измерять на практике
- Разделить free trial without card, free trial with card, paid trial, freemium upgrade.
- Фиксировать trial_start, trial_cancel, billing_attempt, payment_success, subscription_active.
- Считать окно конверсии: immediate, end of trial, within 7 days after trial.
- Отдельно смотреть cancellation before billing и failed payment at billing.

## Нюансы и ловушки
- Trial-to-paid от trial starts ниже, но честнее для маркетинга.
- Trial-to-paid от eligible billing attempts полезен для платежной диагностики.
- Высокая trial conversion может скрывать плохой first renewal.
- Пуши и скидки могут поднять первую оплату, но ухудшить LTV.

## Мини-шаблон ответа на собеседовании
"Я сначала уточню бизнес-модель и единицу анализа. Затем задам событие или состояние, которое считаем успехом, выберу окно наблюдения и сегменты. После этого посчитаю метрику по когортам и проверю, не конфликтует ли она с retention, revenue или пользовательской ценностью."

## Что обязательно назвать вслух
- Числитель.
- Знаменатель.
- Период или окно наблюдения.
- Уровень анализа: user, account, subscription, order, session.
- Сегменты: channel, cohort, platform, country, plan, new/returning.
- Решение, которое будет принято по результату.
