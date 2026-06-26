# 02. Formula: AARRR / Pirate Metrics

## Что измеряет
Как разложить рост MVP на понятную воронку и найти самое слабое место?

## Формула
```text
AARRR - это не одна формула, а цепочка конверсий:

Acquisition = users_from_channel
Activation Rate = activated_users / acquired_users * 100%
Retention Rate N = users_active_on_day_N / users_in_signup_cohort * 100%
Referral Rate = users_who_invited_or_shared / active_users * 100%
Revenue Rate = paying_users / activated_users * 100%

Для диагностики:
Stage Conversion = users_at_next_stage / users_at_previous_stage * 100%
```

## Как измерять на практике
- Определить события для каждой стадии: visit/install, signup, aha action, return, invite, payment.
- Считать отдельно по каналам, странам, платформам и когортам запуска.
- Не смешивать пользователей разных дат: AARRR без когорт часто маскирует проблему.
- Показывать не только проценты, но и абсолютные объемы: 80% конверсии на 10 пользователях не равно сильному росту.

## Нюансы и ловушки
- Порядок стадий можно адаптировать: в некоторых продуктах Revenue идет до Referral, а в freemium Referral может быть до оплаты.
- AARRR не заменяет экономику: хорошая activation не спасает продукт с плохим CAC или churn.
- Referral нельзя считать только по кнопке 'пригласить друга': органика может приходить через word of mouth, SEO, контент.
- В MVP AARRR полезен как карта дыр, а не как набор целей на все сразу.

## Мини-шаблон ответа на собеседовании
"Я сначала уточню бизнес-модель и единицу анализа. Затем задам событие или состояние, которое считаем успехом, выберу окно наблюдения и сегменты. После этого посчитаю метрику по когортам и проверю, не конфликтует ли она с retention, revenue или пользовательской ценностью."

## Что обязательно назвать вслух
- Числитель.
- Знаменатель.
- Период или окно наблюдения.
- Уровень анализа: user, account, subscription, order, session.
- Сегменты: channel, cohort, platform, country, plan, new/returning.
- Решение, которое будет принято по результату.
