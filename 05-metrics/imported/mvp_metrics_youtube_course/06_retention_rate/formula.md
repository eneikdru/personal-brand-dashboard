# 06. Formula: Retention Rate

## Что измеряет
Как понять, нужен ли MVP людям после первого любопытства?

## Формула
```text
Classic N-day Retention = users_active_on_exact_day_N / users_in_cohort * 100%

Rolling Retention N = users_active_on_day_N_or_later / users_in_cohort * 100%

Bracket Retention = users_active_in_period_N / users_in_cohort * 100%
```

## Как измерять на практике
- Когорта обычно определяется датой signup/install/first_purchase.
- Активность должна быть meaningful event, а не просто open app.
- Окна зависят от продукта: daily utility смотрит D1/D7, B2B SaaS - W1/W4/M3.
- Всегда отделять new user retention от existing user retention.

## Нюансы и ловушки
- Rolling retention почти всегда выше classic N-day, поэтому их нельзя сравнивать напрямую.
- Retention без сегментов скрывает разные паттерны у каналов и платформ.
- Если продукт используется редко по природе, daily retention будет несправедливо низким.
- Retention важнее activation только после того, как activation уже достаточно понятна.

## Мини-шаблон ответа на собеседовании
"Я сначала уточню бизнес-модель и единицу анализа. Затем задам событие или состояние, которое считаем успехом, выберу окно наблюдения и сегменты. После этого посчитаю метрику по когортам и проверю, не конфликтует ли она с retention, revenue или пользовательской ценностью."

## Что обязательно назвать вслух
- Числитель.
- Знаменатель.
- Период или окно наблюдения.
- Уровень анализа: user, account, subscription, order, session.
- Сегменты: channel, cohort, platform, country, plan, new/returning.
- Решение, которое будет принято по результату.
