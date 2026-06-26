# 11. Formula: Feature Adoption Rate

## Что измеряет
Как измерить, нужна ли функция пользователям после релиза?

## Формула
```text
Feature Adoption Rate = users_who_used_feature / eligible_users * 100%

Repeat Feature Usage = users_who_used_feature_2plus_times / users_who_used_feature_once * 100%

Feature Penetration by accounts = accounts_with_feature_usage / eligible_accounts * 100%
```

## Как измерять на практике
- Определить eligible users: пользователи, которым функция доступна и релевантна.
- Отделить exposure от usage: видел кнопку не равно использовал функцию.
- Считать first use, repeat use и depth of use.
- Следить за rollout: процент раскатки должен быть известен.

## Нюансы и ловушки
- Новая функция может иметь низкий adoption из-за плохого discoverability, а не из-за отсутствия ценности.
- Высокий adoption может быть вызван принудительным UX.
- Для функций, которые нужны редко, повторное использование надо мерить в длинном окне.
- Adoption без влияния на North Star или retention не доказывает бизнес-ценность.

## Мини-шаблон ответа на собеседовании
"Я сначала уточню бизнес-модель и единицу анализа. Затем задам событие или состояние, которое считаем успехом, выберу окно наблюдения и сегменты. После этого посчитаю метрику по когортам и проверю, не конфликтует ли она с retention, revenue или пользовательской ценностью."

## Что обязательно назвать вслух
- Числитель.
- Знаменатель.
- Период или окно наблюдения.
- Уровень анализа: user, account, subscription, order, session.
- Сегменты: channel, cohort, platform, country, plan, new/returning.
- Решение, которое будет принято по результату.
