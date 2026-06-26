# 15. Formula: CAC Payback Period

## Что измеряет
Как быстро бизнес возвращает деньги, потраченные на привлечение клиента?

## Формула
```text
CAC Payback Months = CAC / (ARPA_or_ARPU_per_month * Gross Margin)

Для когорт:
Payback Month = первый месяц, когда cumulative_gross_profit_from_customer_or_cohort >= CAC
```

## Как измерять на практике
- Использовать monthly gross profit, а не revenue, если считаем реальную окупаемость.
- Считать отдельно по каналам, тарифам и sales motions.
- Учитывать скидки, бесплатные месяцы, refunds и commission fees.
- Для annual plans отдельно смотреть cash payback и revenue recognition.

## Нюансы и ловушки
- Payback важнее для компаний с ограниченным cash runway.
- Длинный payback может быть приемлемым для enterprise SaaS, но опасным для раннего MVP.
- Нельзя считать payback по среднему ARPU, если первые месяцы включают discounts.
- Payback не показывает весь upside клиента после окупаемости.

## Мини-шаблон ответа на собеседовании
"Я сначала уточню бизнес-модель и единицу анализа. Затем задам событие или состояние, которое считаем успехом, выберу окно наблюдения и сегменты. После этого посчитаю метрику по когортам и проверю, не конфликтует ли она с retention, revenue или пользовательской ценностью."

## Что обязательно назвать вслух
- Числитель.
- Знаменатель.
- Период или окно наблюдения.
- Уровень анализа: user, account, subscription, order, session.
- Сегменты: channel, cohort, platform, country, plan, new/returning.
- Решение, которое будет принято по результату.
