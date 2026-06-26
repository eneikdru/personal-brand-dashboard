# 19. Formula: NRR and GRR

## Что измеряет
Растет ли выручка от существующих клиентов с учетом expansion, contraction и churn?

## Формула
```text
NRR = (Starting MRR + Expansion MRR - Contraction MRR - Churned MRR) / Starting MRR * 100%

GRR = (Starting MRR - Contraction MRR - Churned MRR) / Starting MRR * 100%

NRR can be > 100%; GRR cannot exceed 100% if calculated canonically.
```

## Как измерять на практике
- Считать только existing customer cohort, без new MRR.
- Фиксировать expansion, contraction и churn separately.
- Выбрать период: monthly, quarterly, annual. Для B2B часто annual.
- Сегментировать по размеру клиента, тарифу, sales motion, industry.

## Нюансы и ловушки
- NRR может быть высоким, даже если много маленьких клиентов уходит, если крупные расширяются.
- GRR показывает защиту базы без expansion, поэтому лучше отражает retention quality.
- New customers никогда не входят в NRR за тот же период.
- NRR по accounts и по revenue отвечают на разные вопросы.

## Мини-шаблон ответа на собеседовании
"Я сначала уточню бизнес-модель и единицу анализа. Затем задам событие или состояние, которое считаем успехом, выберу окно наблюдения и сегменты. После этого посчитаю метрику по когортам и проверю, не конфликтует ли она с retention, revenue или пользовательской ценностью."

## Что обязательно назвать вслух
- Числитель.
- Знаменатель.
- Период или окно наблюдения.
- Уровень анализа: user, account, subscription, order, session.
- Сегменты: channel, cohort, platform, country, plan, new/returning.
- Решение, которое будет принято по результату.
