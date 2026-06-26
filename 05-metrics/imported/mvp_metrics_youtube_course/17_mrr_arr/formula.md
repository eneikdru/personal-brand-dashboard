# 17. Formula: MRR and ARR

## Что измеряет
Как измерять предсказуемую подписочную выручку и отделять ее от разовых платежей?

## Формула
```text
MRR = sum(normalized_monthly_recurring_revenue_from_active_subscriptions)

ARR = MRR * 12

Ending MRR = Starting MRR + New MRR + Expansion MRR + Reactivation MRR - Contraction MRR - Churned MRR
```

## Как измерять на практике
- Нормализовать annual, quarterly и monthly планы к monthly value.
- Исключить one-time fees, setup fees, taxes, refunds и usage fees, если они не recurring.
- Определить момент признания subscription active.
- Разделить upgrades, downgrades, pauses, cancellations и failed payments.

## Нюансы и ловушки
- Cash collected и MRR - разные вещи.
- ARR = MRR * 12 корректен только если MRR стабилен и recurring.
- Usage-based pricing требует аккуратной логики committed vs variable revenue.
- MRR bridge важнее одной цифры MRR, потому что показывает источник роста.

## Мини-шаблон ответа на собеседовании
"Я сначала уточню бизнес-модель и единицу анализа. Затем задам событие или состояние, которое считаем успехом, выберу окно наблюдения и сегменты. После этого посчитаю метрику по когортам и проверю, не конфликтует ли она с retention, revenue или пользовательской ценностью."

## Что обязательно назвать вслух
- Числитель.
- Знаменатель.
- Период или окно наблюдения.
- Уровень анализа: user, account, subscription, order, session.
- Сегменты: channel, cohort, platform, country, plan, new/returning.
- Решение, которое будет принято по результату.
