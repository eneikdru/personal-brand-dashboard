# Журнал изменений

## 2026-06-06

- Создана структура Brand OS.
- Добавлены профиль, ссылки, брендбук, направления, философский раздел, метрики, каналы, фотоархив и правила управления из чата.
- Первичное наполнение сделано на основе публичного сайта и ссылок из чата.
- Импортированы материалы из прошлых чатов Codex: финальный брендбук, fact-only брендбук, 31 аналитический философ, EMS-сортировка философов, MVP metrics course, Instagram grid references, фото-референсы Дмитрия.
- Импортированы контентные пакеты: Instagram-кампания "Пять твердых метрик MVP", YouTube-серия MVP engineering, YouTube-серия analytical philosophy.
- Создан YouTube-календарь публикаций на 51 выпуск: все философы и все MVP-метрики, каждый вторник с 2026-06-16 по 2027-06-01.
- Создан локальный HTML-dashboard для управления Brand OS: обзор, YouTube-календарь, рубрики, философы, метрики, ассеты и команды чата.
- Создан промпт для AI-агента Instagram-стратега: без фотографий, только дизайн, текстовые карточки, схемы и маленькие карандашные рисунки.
- Обновлены названия YouTube-рубрик по кликабельности: `Как думают топ-аналитики` и `Пройди собеседование сегодня`.
- Создан печатный PDF-план YouTube-выпусков: `06-content/print/youtube-publication-plan-2026-2027.pdf`.

- Updated YouTube philosophy title rule: philosopher names and terms are removed from clickable titles; scene-based titles and speaking plans for all 51 episodes were added.
- Created YouTube teleprompter package: 51 episode scripts, 6 pages each at 11 pt, plus combined 306-page PDF and print HTML.
- Rewrote YouTube teleprompters voice: removed robotic framework phrases and rebuilt all 51 scripts/PDF in a more spoken, dry camera style.
- Created complete LinkedIn profile kit: copy-paste fields, About, Headline, Experience, Services, Featured, Skills, Projects, settings checklist and visibility rules.
- Created operational LinkedIn fill instruction and ready assets: exact profile photo, exact banner, field-by-field values without strategic commentary.

## 2026-06-07 (Pivot to Business Philosophy & Linear Integration)

- **Brand Pivot:** Transitioned the brand core from analyst interview preparation to "Business Philosophy" based on the analytic philosophy tradition.
- **Content Expansion:** Updated the philosopher index and YouTube series to 50 episodes, featuring key analytic philosophers (Frege, Russell, Wittgenstein, etc.).
- **Schedule Update:** Synchronized the publication calendar for a weekly Tuesday rhythm (50 episodes).
- **Automation:** Overhauled `rebuild-youtube-content.js` and created `update-dashboard-data.js` to automate dashboard data synchronization.
- **Dashboard UI:** Updated the "Brand OS" dashboard to reflect the new 50-episode dataset and status tracking (released vs. planned).
- **Linear Integration:** Implemented `linear-client.js` and a CLI utility `create-linear-issue.js` for task management.
- **Security:** Configured Linear integration to use the `Brandagent` environment variable for authentication.
- **Testing:** Added a test suite `test-linear-client.js` with mock-based verification for the Linear API.
