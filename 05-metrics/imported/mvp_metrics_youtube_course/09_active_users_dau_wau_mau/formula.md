# 09. Formula: Active Users: DAU, WAU, MAU

## Что измеряет
Как измерять размер живой аудитории продукта без превращения метрики в vanity?

## Формула
```text
DAU = unique_users_with_active_event_in_1_day
WAU = unique_users_with_active_event_in_7_days
MAU = unique_users_with_active_event_in_30_days

Active User должен быть привязан к meaningful event:
active_user = user_id with event in [core_value_events] during period
```

## Как измерять на практике
- Выбрать active event: core action, not login/open/page_view.
- Использовать уникальных пользователей или аккаунты, но не смешивать.
- Считать timezone и границы дня, особенно для международного продукта.
- Отдельно считать new, returning и resurrected active users.

## Нюансы и ловушки
- DAU важен для daily-use продуктов, но бессмысленен для продукта, который нужен раз в месяц.
- MAU может расти из-за acquisition, даже если retention плохой.
- Активные пользователи без глубины использования могут скрывать падение ценности.
- Для B2B лучше часто считать active accounts и seat utilization.

## Мини-шаблон ответа на собеседовании
"Я сначала уточню бизнес-модель и единицу анализа. Затем задам событие или состояние, которое считаем успехом, выберу окно наблюдения и сегменты. После этого посчитаю метрику по когортам и проверю, не конфликтует ли она с retention, revenue или пользовательской ценностью."

## Что обязательно назвать вслух
- Числитель.
- Знаменатель.
- Период или окно наблюдения.
- Уровень анализа: user, account, subscription, order, session.
- Сегменты: channel, cohort, platform, country, plan, new/returning.
- Решение, которое будет принято по результату.
