# 07. Formula: Cohort Analysis

## Что измеряет
Как не смешивать пользователей разных периодов и понять, улучшает ли продукт новые когорты?

## Формула
```text
Cohort Retention at period N = active_users_from_cohort_in_period_N / users_in_original_cohort * 100%

Cohort Revenue at period N = revenue_from_cohort_in_period_N

Cumulative Cohort LTV at period N = sum(gross_profit_from_cohort_period_0_to_N) / users_in_cohort
```

## Как измерять на практике
- Определить cohort key: signup month, install week, first purchase date, acquisition channel.
- Определить period index: day since signup, week since first purchase, billing cycle number.
- Не пересчитывать размер исходной когорты задним числом без причины.
- Следить за right censoring: свежие когорты еще не прожили достаточно времени.

## Нюансы и ловушки
- Когорты отвечают на вопрос 'становится ли продукт лучше для новых пользователей'.
- Сравнивать когорты надо на одинаковом возрасте, а не по календарной дате.
- Малые когорты шумят, особенно при сегментации по каналам.
- Для подписок полезны cohort survival и revenue cohort, а не только user activity.

## Мини-шаблон ответа на собеседовании
"Я сначала уточню бизнес-модель и единицу анализа. Затем задам событие или состояние, которое считаем успехом, выберу окно наблюдения и сегменты. После этого посчитаю метрику по когортам и проверю, не конфликтует ли она с retention, revenue или пользовательской ценностью."

## Что обязательно назвать вслух
- Числитель.
- Знаменатель.
- Период или окно наблюдения.
- Уровень анализа: user, account, subscription, order, session.
- Сегменты: channel, cohort, platform, country, plan, new/returning.
- Решение, которое будет принято по результату.
