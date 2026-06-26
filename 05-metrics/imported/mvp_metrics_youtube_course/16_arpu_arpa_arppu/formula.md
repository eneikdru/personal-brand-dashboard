# 16. Formula: ARPU, ARPA, ARPPU

## Что измеряет
Как понять средний уровень монетизации и не перепутать всех пользователей с платящими?

## Формула
```text
ARPU = revenue / active_users

ARPA = revenue / active_accounts

ARPPU = revenue / paying_users

Subscription ARPA often uses MRR:
ARPA = MRR / active_paying_accounts
```

## Как измерять на практике
- Согласовать revenue: gross revenue, net revenue, MRR, recognized revenue.
- Выбрать users или accounts. В B2B чаще ARPA, в consumer - ARPU/ARPPU.
- Отдельно считать paid users и all active users.
- Сегментировать по тарифам, странам, платформам и каналам.

## Нюансы и ловушки
- ARPU падает, когда приходит много бесплатных пользователей, даже если платящие становятся лучше.
- ARPPU может расти из-за ухода дешевых платящих пользователей.
- Средние значения чувствительны к whales и enterprise accounts.
- Для marketplace лучше дополнительно смотреть take rate и GMV.

## Мини-шаблон ответа на собеседовании
"Я сначала уточню бизнес-модель и единицу анализа. Затем задам событие или состояние, которое считаем успехом, выберу окно наблюдения и сегменты. После этого посчитаю метрику по когортам и проверю, не конфликтует ли она с retention, revenue или пользовательской ценностью."

## Что обязательно назвать вслух
- Числитель.
- Знаменатель.
- Период или окно наблюдения.
- Уровень анализа: user, account, subscription, order, session.
- Сегменты: channel, cohort, platform, country, plan, new/returning.
- Решение, которое будет принято по результату.
