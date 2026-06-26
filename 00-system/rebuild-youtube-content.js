const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..", "..");
const contentDir = path.join(root, "brand-os", "06-content");

const rows = [
  [1, "2026-06-16", "Как думают топ-аналитики", "Вы спорите не о стратегии, а о смысле одного слова", "Gottlob Frege", "Смысл фразы меняет действие команды", "Gottlob Frege, Begriffsschrift; The Foundations of Arithmetic"],
  [2, "2026-06-23", "Пройди собеседование сегодня", "North Star Metric: как выбрать главную метрику продукта", "North Star Metric", "Главная метрика должна связывать ценность пользователя и рост бизнеса", "Amplitude North Star Playbook; Sean Ellis, Hacking Growth"],
  [3, "2026-06-30", "Как думают топ-аналитики", "Когда здравый смысл сильнее красивой стратегии", "G. E. Moore", "Очевидное нельзя отменять красивой теорией", "G. E. Moore, Principia Ethica; A Defence of Common Sense"],
  [4, "2026-07-07", "Пройди собеседование сегодня", "AARRR: как найти слабое место роста", "AARRR / Pirate Metrics", "Воронка нужна, чтобы видеть конкретный провал, а не спорить о росте вообще", "Dave McClure, Startup Metrics for Pirates; Lean Analytics"],
  [5, "2026-07-14", "Как думают топ-аналитики", "Все говорят одно предложение, но внутри него три разных решения", "Bertrand Russell", "Поверхностная грамматика скрывает реальную структуру решения", "Bertrand Russell, On Denoting; Problems of Philosophy"],
  [6, "2026-07-21", "Пройди собеседование сегодня", "Activation Rate: как доказать, что пользователь получил ценность", "Activation Rate", "Активация показывает первый момент реальной ценности, а не просто регистрацию", "Lean Analytics; Reforge Activation essays"],
  [7, "2026-07-28", "Как думают топ-аналитики", "Команда использует одно слово, но играет в разные игры", "Ludwig Wittgenstein", "Значение слова видно в правилах его использования", "Ludwig Wittgenstein, Philosophical Investigations"],
  [8, "2026-08-04", "Пройди собеседование сегодня", "Conversion Rate: как не ошибиться в знаменателе", "Conversion Rate", "Конверсия зависит от правильно выбранного события и знаменателя", "CXL Conversion Rate Optimization; Lean Analytics"],
  [9, "2026-08-11", "Как думают топ-аналитики", "Вы спорите о решении, хотя не договорились о правилах языка", "Rudolf Carnap", "Без явного каркаса спор превращается в шум", "Rudolf Carnap, Logical Syntax of Language; The Logical Structure of the World"],
  [10, "2026-08-18", "Пройди собеседование сегодня", "Funnel Drop-off: где воронка теряет деньги", "Funnel Drop-off Rate", "Падение на шаге воронки показывает место потери, а не всю причину сразу", "Mixpanel funnel analysis docs; Lean Analytics"],
  [11, "2026-08-25", "Как думают топ-аналитики", "Встреча закончилась выводом, который никто не может проверить", "A. J. Ayer", "Сильное утверждение должно иметь способ проверки", "A. J. Ayer, Language, Truth and Logic"],
  [12, "2026-09-01", "Пройди собеседование сегодня", "Retention Rate: нужен ли продукт после первого интереса", "Retention Rate", "Retention отвечает, возвращаются ли люди после первого обещания ценности", "Brian Balfour on retention; Lean Analytics"],
  [13, "2026-09-08", "Как думают топ-аналитики", "Вы наняли процесс, а ждете от него результата", "Gilbert Ryle", "Категориальная ошибка ломает управленческое ожидание", "Gilbert Ryle, The Concept of Mind"],
  [14, "2026-09-15", "Пройди собеседование сегодня", "Cohort Analysis: почему среднее значение обманывает", "Cohort Analysis", "Когорты показывают поведение групп во времени, а среднее часто прячет правду", "Lean Analytics; Amplitude cohort analysis guides"],
  [15, "2026-09-22", "Как думают топ-аналитики", "Одна фраза руководителя уже изменила поведение команды", "J. L. Austin", "Слова в бизнесе часто являются действиями", "J. L. Austin, How to Do Things with Words"],
  [16, "2026-09-29", "Пройди собеседование сегодня", "Churn Rate: как считать потери пользователей и выручки", "Churn Rate", "Churn нужно считать по пользователям и по деньгам отдельно", "SaaS Metrics 2.0; ChartMogul churn guides"],
  [17, "2026-10-06", "Как думают топ-аналитики", "Данные выглядят точными, пока вы не спросили: в какой ситуации?", "P. F. Strawson", "Факт получает смысл только в контексте применения", "P. F. Strawson, Individuals; Introduction to Logical Theory"],
  [18, "2026-10-13", "Пройди собеседование сегодня", "DAU, WAU, MAU: как измерить живую аудиторию", "Active Users", "Активность должна определяться через ценное действие, а не просто вход", "Sequoia Product Analytics; Lean Analytics"],
  [19, "2026-10-20", "Как думают топ-аналитики", "Человек сказал все правильно, но команда поняла другое", "H. P. Grice", "Смысл коммуникации рождается из намерения и контекста", "H. P. Grice, Logic and Conversation"],
  [20, "2026-10-27", "Пройди собеседование сегодня", "Stickiness: когда продукт становится привычкой", "DAU/MAU", "Stickiness показывает частоту возврата, но требует правильной природы продукта", "Facebook growth metrics; Lean Analytics"],
  [21, "2026-11-03", "Как думают топ-аналитики", "Одна плохая гипотеза держит на себе весь план продаж", "W. V. O. Quine", "Убеждения компании связаны в сеть, а не лежат отдельно", "W. V. O. Quine, Two Dogmas of Empiricism; Word and Object"],
  [22, "2026-11-10", "Пройди собеседование сегодня", "Feature Adoption: как понять, нужна ли функция", "Feature Adoption Rate", "Adoption показывает, стала ли функция частью поведения, а не только релиза", "Pendo feature adoption guides; Product-Led Growth"],
  [23, "2026-11-17", "Как думают топ-аналитики", "Факт есть в таблице, но решения из него все равно нет", "Wilfrid Sellars", "Факт становится знанием только в системе оснований", "Wilfrid Sellars, Empiricism and the Philosophy of Mind"],
  [24, "2026-11-24", "Пройди собеседование сегодня", "CAC: сколько стоит новый клиент", "Customer Acquisition Cost", "CAC имеет смысл только при честном учете всех затрат привлечения", "SaaS Metrics 2.0; David Skok SaaS metrics"],
  [25, "2026-12-01", "Как думают топ-аналитики", "Клиент сказал простую фразу, а вы перевели ее в неправильную задачу", "Donald Davidson", "Понимание клиента требует интерпретации, а не угадывания мыслей", "Donald Davidson, Inquiries into Truth and Interpretation"],
  [26, "2026-12-08", "Пройди собеседование сегодня", "LTV: как считать ценность клиента без фантазии", "Lifetime Value", "LTV должен быть связан с реальным retention и маржой, а не надеждой", "SaaS Metrics 2.0; Lean Analytics"],
  [27, "2026-12-15", "Как думают топ-аналитики", "Все спорят о том же слове, но каждый держит в голове другой объект", "Saul Kripke", "Имя и ссылка важны, когда команда связывает слова с реальностью", "Saul Kripke, Naming and Necessity"],
  [28, "2026-12-22", "Пройди собеседование сегодня", "LTV:CAC: когда рост окупается", "LTV:CAC Ratio", "Соотношение LTV:CAC показывает экономику привлечения, но не заменяет cash flow", "SaaS Metrics 2.0; David Skok SaaS metrics"],
  [29, "2026-12-29", "Как думают топ-аналитики", "Значение продукта находится не в презентации, а в среде клиента", "Hilary Putnam", "Смысл определяется внешней средой, а не только намерением команды", "Hilary Putnam, The Meaning of Meaning"],
  [30, "2027-01-05", "Пройди собеседование сегодня", "CAC Payback: когда вернутся деньги на привлечение", "CAC Payback Period", "CAC Payback показывает скорость возврата денег, вложенных в рост", "Bessemer SaaS benchmarks; SaaS Metrics 2.0"],
  [31, "2027-01-12", "Как думают топ-аналитики", "План выглядит разумно, пока не проверили второй сценарий", "David Lewis", "Сценарное мышление проверяет решение через альтернативы", "David Lewis, Counterfactuals; On the Plurality of Worlds"],
  [32, "2027-01-19", "Пройди собеседование сегодня", "ARPU, ARPA, ARPPU: как читать среднюю выручку", "ARPU / ARPA / ARPPU", "Средняя выручка полезна только если ясно, кто именно в знаменателе", "SaaS Metrics 2.0; mobile analytics ARPU guides"],
  [33, "2027-01-26", "Как думают топ-аналитики", "Команда делает задачу, но уже забыла, зачем она это делает", "G. E. M. Anscombe", "Действие понимается через намерение и описание цели", "G. E. M. Anscombe, Intention"],
  [34, "2027-02-02", "Пройди собеседование сегодня", "MRR и ARR: как не перепутать подписку и случайные деньги", "MRR / ARR", "MRR и ARR показывают повторяемую выручку, если исключить разовые платежи", "SaaS Metrics 2.0; ChartMogul MRR guides"],
  [35, "2027-02-09", "Как думают топ-аналитики", "Метрика стала решением, хотя за ошибку заплатит другой человек", "Heather Douglas", "Данные требуют ответственности, когда решение влияет на людей", "Heather Douglas, Science, Policy, and the Value-Free Ideal"],
  [36, "2027-02-16", "Пройди собеседование сегодня", "Trial-to-Paid: почему trial не всегда продает", "Trial-to-Paid Conversion", "Trial-to-Paid показывает, превращается ли проба в готовность платить", "Product-Led Growth; OpenView PLG benchmarks"],
  [37, "2027-02-23", "Как думают топ-аналитики", "Роль в системе заставляет человека вести себя как другой пользователь", "Sally Haslanger", "Социальные роли меняют поведение продукта и команды", "Sally Haslanger, Resisting Reality"],
  [38, "2027-03-02", "Пройди собеседование сегодня", "NRR и GRR: как удерживать и расширять выручку", "NRR / GRR", "NRR и GRR разделяют удержание базы и расширение выручки", "Bessemer SaaS metrics; ChartMogul retention guides"],
  [39, "2027-03-09", "Как думают топ-аналитики", "Вы улучшили измерение и внезапно изменили сам продукт", "Hasok Chang", "Измерение не только описывает мир, но и перестраивает практику", "Hasok Chang, Inventing Temperature"],
  [40, "2027-03-16", "Пройди собеседование сегодня", "NPS, CSAT, CES: что опросы показывают, а что скрывают", "NPS / CSAT / CES", "Опросы показывают восприятие, но требуют связи с поведением", "Bain NPS materials; Customer Effort Score research"],
  [41, "2027-03-23", "Как думают топ-аналитики", "Доверие появляется не после слов, а после принятых обязательств", "Robert Brandom", "Доверие строится на обязательствах и праве спрашивать основания", "Robert Brandom, Making It Explicit"],
  [42, "2027-03-30", "Как думают топ-аналитики", "Компания тонет не в задачах, а в среде информации", "Luciano Floridi", "Информация стала средой, в которой живет бизнес", "Luciano Floridi, The Philosophy of Information"],
  [43, "2027-04-06", "Как думают топ-аналитики", "Умный человек молчит на встрече, и компания теряет знание", "Miranda Fricker", "Знание теряется, когда источнику не дают доверия", "Miranda Fricker, Epistemic Injustice"],
  [44, "2027-04-13", "Как думают топ-аналитики", "Запуск выстрелил, но никто не знает почему", "Duncan Pritchard", "Успех без понимания может быть удачей, а не знанием", "Duncan Pritchard, Epistemic Luck"],
  [45, "2027-04-20", "Как думают топ-аналитики", "То, что сработало в одном рынке, ломается в другом", "Nancy Cartwright", "Законы работают через условия, а не одинаково везде", "Nancy Cartwright, How the Laws of Physics Lie; Evidence-Based Policy"],
  [46, "2027-04-27", "Как думают топ-аналитики", "Клиент решил раньше, чем успел объяснить свое решение", "Patricia Churchland", "Решения связаны с мозгом, привычкой и телесной экономией", "Patricia Churchland, Neurophilosophy; Braintrust"],
  [47, "2027-05-04", "Как думают топ-аналитики", "Вы не имеете права утверждать то, чего еще не знаете", "Timothy Williamson", "Утверждение должно соответствовать статусу знания", "Timothy Williamson, Knowledge and Its Limits"],
  [48, "2027-05-11", "Как думают топ-аналитики", "Инструмент уже думает вместе с вами, но вы называете его просто софтом", "Andy Clark", "Мышление распределено между человеком, инструментом и средой", "Andy Clark, Supersizing the Mind; Natural-Born Cyborgs"],
  [49, "2027-05-18", "Как думают топ-аналитики", "Пользователь видит не экран, а возможность действовать", "Susanna Siegel", "Восприятие уже содержит интерпретацию ситуации", "Susanna Siegel, The Contents of Visual Experience"],
  [50, "2027-05-25", "Как думают топ-аналитики", "Люди доверяют ответу не потому, что он длинный", "Jennifer Nagel", "Мы приписываем знание по сигналам уверенности, доступа и надежности", "Jennifer Nagel, Knowledge: A Very Short Introduction"],
  [51, "2027-06-01", "Как думают топ-аналитики", "Лучший сотрудник знает больше, чем может объяснить в регламенте", "Michael Polanyi", "В бизнесе много неявного знания, которое нельзя свести к инструкции", "Michael Polanyi, Personal Knowledge; The Tacit Dimension"],
];

const episodes = rows.map(([episode, date, rubric, title, source, thesis, literature]) => ({
  episode,
  date,
  weekday: "Tuesday",
  rubric,
  title,
  source,
  status: "planned",
  thesis,
  literature,
}));

function csvEscape(value) {
  const text = String(value);
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[char]);
}

function ruDate(value) {
  const [year, month, day] = value.split("-");
  return `${day}.${month}.${year}`;
}

function planFor(item) {
  const isPhilosophy = item.rubric === "Как думают топ-аналитики";
  const hook = isPhilosophy
    ? `Представь рабочую сцену: ${item.title.toLowerCase()}. Это не абстрактная философия, а момент, где команда теряет ясность.`
    : `На собеседовании тебя спрашивают: "${item.source}". Сильный ответ должен быть коротким, точным и прикладным.`;
  const greeting = `Привет, я Дмитрий Ефремов. Сегодня разбираем выпуск #${item.episode}: ${item.title}.`;
  const data = isPhilosophy
    ? "Данные/сцена: управленческая встреча, продуктовый спор, таблица или интервью с клиентом. Покажи 2-3 наблюдаемых признака проблемы: кто говорит, что измеряют, где возникает разрыв."
    : "Данные: дай формулу или способ расчета, пример с простыми числами, правильный знаменатель, типичный источник данных и вопрос, на который метрика отвечает.";
  const support = isPhilosophy
    ? "Поддержка: разложи сцену на элементы, покажи ошибку мышления и переведи идею в рабочий прием для аналитика, предпринимателя или product owner."
    : "Поддержка: покажи мини-кейс, как аналитик использует метрику для решения: что проверить, какой сегмент открыть, какое действие предложить бизнесу.";
  const rebuttal = isPhilosophy
    ? "Опровержение: возьми сильное возражение «это слишком философски для бизнеса» и ответь: ценность идеи в том, что она улучшает вопрос, решение и качество доказательства."
    : "Опровержение: разбери ловушку метрики: когда показатель растет, но продукт или экономика не становятся лучше.";
  const related = isPhilosophy
    ? "Другие видео: связать с соседними философскими выпусками рубрики и с метриками, где эта ошибка мышления проявляется в данных."
    : "Другие видео: связать с ближайшими метриками рубрики и с философским выпуском, который объясняет ошибку мышления за неправильным расчетом.";
  return { ...item, hook, greeting, data, support, rebuttal, related };
}

const plans = episodes.map(planFor);

const calendarCsv = [
  "episode,date,weekday,rubric,title,source,status",
  ...episodes.map((item) => [item.episode, item.date, item.weekday, item.rubric, item.title, item.source, item.status].map(csvEscape).join(",")),
].join("\n") + "\n";
fs.writeFileSync(path.join(contentDir, "youtube-publication-calendar-2026-2027.csv"), calendarCsv, "utf8");

let calendarMd = `# YouTube-календарь публикаций: 2026-2027

Статус: \`planned\`

Период: с 2026-06-16 по 2027-06-01.

Ритм: каждый вторник.

Объем: 51 выпуск: 31 философ и 20 метрик.

## Рубрики

### 1. Как думают топ-аналитики

Подзаголовок: философские идеи как сцены, которые зритель уже пережил в бизнесе, продукте или аналитике.

Суть: в заголовке не называем философа и не называем термин. Заголовок описывает узнаваемую рабочую ситуацию: спор, ошибку, встречу, метрику, доверие, решение. Имя философа остается в описании видео, карточке выпуска и плане, но не в кликабельном заголовке.

Четыре механики заголовка: конфликт, срочность, узнаваемая боль, обещание практического мышления. Для философов добавляется пятая закономерность: философская идея должна быть спрятана в сцене, которую зритель уже проживал.

### 2. Пройди собеседование сегодня

Подзаголовок: метрики для собеседования и реальной работы.

Суть: короткая прикладная рубрика по метрикам. Каждый выпуск помогает быстро подготовиться к вопросу на собеседовании аналитика: объяснить формулу, выбрать правильный знаменатель, назвать ловушки и показать, какое решение можно принять по метрике.

## Календарь

| # | Дата | Рубрика | Выпуск | База |
|---:|---|---|---|---|
`;
for (const item of episodes) {
  calendarMd += `| ${item.episode} | ${item.date} | ${item.rubric} | ${item.title} | ${item.source} |\n`;
}
fs.writeFileSync(path.join(contentDir, "youtube-publication-calendar-2026-2027.md"), calendarMd, "utf8");

const planCsvHeader = ["episode", "date", "rubric", "title", "source", "hook", "greeting", "data", "thesis", "support", "rebuttal", "literature", "related_videos"];
const planCsv = [
  planCsvHeader.join(","),
  ...plans.map((item) => [item.episode, item.date, item.rubric, item.title, item.source, item.hook, item.greeting, item.data, item.thesis, item.support, item.rebuttal, item.literature, item.related].map(csvEscape).join(",")),
].join("\n") + "\n";
fs.writeFileSync(path.join(contentDir, "youtube-episode-speaking-plans-2026-2027.csv"), planCsv, "utf8");

let planMd = `# Планы выступлений YouTube: 2026-2027

Структура каждого выпуска: хук, приветствие, данные, тезис, поддержка, опровержение, литература и ссылки на другие видео.

Правило философских заголовков: в названии нет имени философа и нет термина. Название описывает сцену, которую зритель уже пережил. Имя философа остается в описании видео и внутри подготовки.

`;
for (const item of plans) {
  planMd += `## ${item.episode}. ${item.title}

Дата: ${item.date}

Рубрика: ${item.rubric}

База для описания: ${item.source}

- Хук: ${item.hook}
- Приветствие: ${item.greeting}
- Данные: ${item.data}
- Тезис: ${item.thesis}
- Поддержка: ${item.support}
- Опровержение: ${item.rebuttal}
- Ссылка на литературу: ${item.literature}
- Другие видео: ${item.related}

`;
}
fs.writeFileSync(path.join(contentDir, "youtube-episode-speaking-plans-2026-2027.md"), planMd, "utf8");

const appEpisodes = plans.map(({ episode, date, rubric, title, source, hook, thesis, literature }) => ({ episode, date, rubric, title, source, hook, thesis, literature }));
const app = `const episodes = ${JSON.stringify(appEpisodes, null, 2)};

const commands = [
  ["Ближайшие выпуски", "покажи ближайшие 5 выпусков YouTube-календаря"],
  ["План выступления", "покажи план выступления для выпуска #1"],
  ["Телесуфлер", "открой телесуфлер для выпуска #1"],
  ["Сценарий выпуска", "собери полный сценарий YouTube для выпуска #1 по плану выступления и брендбуку"],
  ["План съемки", "сделай план съемки и тезисы для следующего выпуска"],
  ["Обновить статус", "обнови статус выпуска #1 на drafted"],
  ["Пост к выпуску", "собери Instagram-пост к ближайшему YouTube-выпуску"],
  ["Метрика", "объясни Activation Rate в стиле рубрики Пройди собеседование сегодня"],
  ["Философ", "свяжи Витгенштейна с бизнес-коммуникацией и продуктом, но не используй имя в YouTube-заголовке"],
  ["Пробелы", "покажи все незаполненные места в Brand OS"],
  ["PDF", "обнови PDF-план выпусков"],
  ["Брендбук", "проверь этот текст на соответствие брендбуку: "]
];

const stats = [
  ["YouTube", "51", "выпуск"],
  ["Философы", "31", "эпизод"],
  ["Метрики", "20", "эпизодов"],
  ["Планы", "51", "структура выступления"]
];

const philosophers = episodes.filter((item) => item.rubric === "Как думают топ-аналитики");
const metrics = episodes.filter((item) => item.rubric === "Пройди собеседование сегодня");

const state = { activeRubric: "all", search: "" };

const els = {
  stats: document.querySelector("#stats"),
  nextEpisodes: document.querySelector("#nextEpisodes"),
  calendarRows: document.querySelector("#calendarRows"),
  philosopherTiles: document.querySelector("#philosopherTiles"),
  metricTiles: document.querySelector("#metricTiles"),
  commandGrid: document.querySelector("#commandGrid"),
  globalSearch: document.querySelector("#globalSearch"),
  toast: document.querySelector("#toast")
};

function formatDate(value) {
  const date = new Date(\`\${value}T00:00:00\`);
  return date.toLocaleDateString("ru-RU", { day: "2-digit", month: "short", year: "numeric" });
}

function normalize(value) {
  return String(value).toLowerCase().replace(/\\u0451/g, "\\u0435");
}

function isMatch(item) {
  const needle = normalize(state.search.trim());
  if (!needle) return true;
  return normalize(\`\${item.title} \${item.source} \${item.rubric} \${item.hook} \${item.thesis}\`).includes(needle);
}

function getFilteredEpisodes() {
  return episodes.filter((item) => {
    const rubricMatch = state.activeRubric === "all" || item.rubric === state.activeRubric;
    return rubricMatch && isMatch(item);
  });
}

function getNextEpisodes() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const upcoming = episodes.filter((item) => new Date(\`\${item.date}T00:00:00\`).getTime() >= today);
  return (upcoming.length ? upcoming : episodes).slice(0, 5);
}

function renderStats() {
  els.stats.innerHTML = stats.map(([label, value, note]) => \`
    <article class="stat-card">
      <span>\${label}</span>
      <strong>\${value}</strong>
      <small>\${note}</small>
    </article>
  \`).join("");
}

function renderNextEpisodes() {
  els.nextEpisodes.innerHTML = getNextEpisodes().map((item) => \`
    <article class="episode-row">
      <div class="episode-date">\${formatDate(item.date)}</div>
      <div>
        <strong>\${item.title}</strong>
        <small>\${item.rubric} · \${item.source}</small>
        <small>\${item.thesis}</small>
      </div>
    </article>
  \`).join("");
}

function renderCalendar() {
  const rows = getFilteredEpisodes();
  els.calendarRows.innerHTML = rows.map((item) => {
    const type = item.rubric === "Как думают топ-аналитики" ? "business" : "analyst";
    return \`
      <tr>
        <td>\${item.episode}</td>
        <td>\${formatDate(item.date)}</td>
        <td><span class="rubric-pill \${type}">\${item.rubric}</span></td>
        <td><strong>\${item.title}</strong><small class="table-note">\${item.hook}</small></td>
        <td>\${item.source}</td>
        <td><span class="status-pill">planned</span></td>
      </tr>
    \`;
  }).join("");
}

function renderTiles(container, items) {
  container.innerHTML = items.filter(isMatch).map((item) => \`
    <article class="tile">
      <span>\${formatDate(item.date)} · выпуск \${item.episode}</span>
      <strong>\${item.title}</strong>
      <small>\${item.source}</small>
      <small>\${item.thesis}</small>
    </article>
  \`).join("");
}

function renderCommands() {
  els.commandGrid.innerHTML = commands.map(([title, text]) => \`
    <button class="command-card" type="button" data-copy="\${text.replace(/"/g, "&quot;")}">
      <strong>\${title}</strong>
      <span>\${text}</span>
    </button>
  \`).join("");
}

function copyCommand(text) {
  navigator.clipboard?.writeText(text).then(showToast).catch(() => {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    showToast();
  });
}

function showToast() {
  els.toast.classList.add("visible");
  window.setTimeout(() => els.toast.classList.remove("visible"), 1300);
}

function renderAll() {
  renderStats();
  renderNextEpisodes();
  renderCalendar();
  renderTiles(els.philosopherTiles, philosophers);
  renderTiles(els.metricTiles, metrics);
  renderCommands();
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(\`#\${button.dataset.view}\`).classList.add("active");
  });
});

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.activeRubric = button.dataset.rubric;
    renderCalendar();
  });
});

els.globalSearch.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderCalendar();
  renderTiles(els.philosopherTiles, philosophers);
  renderTiles(els.metricTiles, metrics);
});

document.body.addEventListener("click", (event) => {
  const command = event.target.closest("[data-command]");
  if (command) copyCommand(command.dataset.command);

  const copy = event.target.closest("[data-copy]");
  if (copy) copyCommand(copy.dataset.copy);
});

renderAll();
`;
fs.writeFileSync(path.join(root, "brand-os", "dashboard", "app.js"), app, "utf8");

let printHtml = `<!doctype html><html lang="ru"><head><meta charset="utf-8"><title>YouTube план выпусков Дмитрия Ефремова</title><style>
@page{size:A4;margin:13mm 11mm}*{box-sizing:border-box}body{margin:0;font-family:Arial,'Segoe UI',sans-serif;color:#111318;background:#fff}.cover{min-height:235mm;display:flex;flex-direction:column;justify-content:space-between;page-break-after:always}.mark{width:42px;height:42px;background:#3D5FA0;border-radius:8px;margin-bottom:28px}.eyebrow{color:#3D5FA0;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:.04em;margin-bottom:12px}h1{font-size:38px;line-height:1.08;margin:0 0 18px;max-width:720px}.subtitle{color:#2D333B;font-size:16px;line-height:1.45;max-width:720px}.meta{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:30px}.meta div{border:1px solid #D9DEE8;border-radius:8px;padding:12px;background:#F5F7FA}.meta span{display:block;color:#6B7280;font-size:11px;margin-bottom:6px}.meta strong{font-size:20px}.rubric-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:22px}.rubric{border:1px solid #D9DEE8;border-radius:8px;padding:14px}.rubric h2{margin:0 0 8px;font-size:19px}.rubric p{margin:0;color:#2D333B;line-height:1.45;font-size:13px}.section-title{font-size:22px;margin:0 0 10px}.note{color:#6B7280;font-size:12px;margin:0 0 14px}table{width:100%;border-collapse:collapse;font-size:10px}thead{display:table-header-group}tr,.plan{page-break-inside:avoid}th{text-align:left;color:#6B7280;font-size:9px;text-transform:uppercase;border-bottom:1px solid #BFC7D5;padding:7px 6px}td{border-bottom:1px solid #E2E6EE;padding:7px 6px;vertical-align:top;line-height:1.28}.num{width:26px;font-weight:700;color:#3D5FA0}.date{width:68px;white-space:nowrap}.title{font-weight:700}.source{color:#6B7280}.pill{display:inline-block;border-radius:6px;padding:3px 6px;font-size:9.5px;white-space:nowrap}.rubric-a{background:#E9F0FA;color:#1E3A6E}.rubric-b{background:#E9F5EF;color:#2E7D5B}.footer{color:#6B7280;font-size:10px;border-top:1px solid #D9DEE8;padding-top:10px;margin-top:18px}.plans{page-break-before:always}.plan{border-top:1px solid #D9DEE8;padding:9px 0}.plan h3{font-size:15px;margin:0 0 5px}.plan .meta-line{font-size:10px;color:#6B7280;margin-bottom:6px}.plan ul{margin:0;padding-left:16px}.plan li{font-size:10.5px;line-height:1.32;margin:2px 0}
</style></head><body><section class="cover"><div><div class="mark"></div><div class="eyebrow">Brand OS / YouTube</div><h1>План выпусков и выступлений Дмитрия Ефремова</h1><p class="subtitle">Календарь публикаций по вторникам плюс структура каждого выпуска: хук, приветствие, данные, тезис, поддержка, опровержение, литература и ссылки на другие видео.</p><div class="meta"><div><span>Период</span><strong>16.06.2026 - 01.06.2027</strong></div><div><span>Ритм</span><strong>вторник</strong></div><div><span>Выпуски</span><strong>51</strong></div><div><span>Планы</span><strong>51</strong></div></div><div class="rubric-grid"><article class="rubric"><h2>Как думают топ-аналитики</h2><p>Философские заголовки описывают узнаваемую сцену без имени философа и без термина. Имя остается в описании видео.</p></article><article class="rubric"><h2>Пройди собеседование сегодня</h2><p>Метрики для интервью: формула, знаменатель, ловушки, пример и сильный ответ.</p></article></div></div><div class="footer">Сформировано из Brand OS. Статус выпусков: planned.</div></section><section><h2 class="section-title">Календарь выпусков</h2><p class="note">Философские названия обновлены по сценовой механике кликабельности.</p><table><thead><tr><th>#</th><th>Дата</th><th>Рубрика</th><th>Выпуск</th><th>База</th></tr></thead><tbody>`;
for (const item of plans) {
  printHtml += `<tr><td class="num">${item.episode}</td><td class="date">${ruDate(item.date)}</td><td><span class="pill ${item.rubric.includes("топ") ? "rubric-a" : "rubric-b"}">${escapeHtml(item.rubric)}</span></td><td class="title">${escapeHtml(item.title)}</td><td class="source">${escapeHtml(item.source)}</td></tr>`;
}
printHtml += `</tbody></table></section><section class="plans"><h2 class="section-title">Планы выступлений</h2><p class="note">Короткий каркас для подготовки телесуфлера, описания и монтажа.</p>`;
for (const item of plans) {
  printHtml += `<article class="plan"><h3>${item.episode}. ${escapeHtml(item.title)}</h3><div class="meta-line">${ruDate(item.date)} · ${escapeHtml(item.rubric)} · база: ${escapeHtml(item.source)}</div><ul><li><strong>Хук:</strong> ${escapeHtml(item.hook)}</li><li><strong>Приветствие:</strong> ${escapeHtml(item.greeting)}</li><li><strong>Данные:</strong> ${escapeHtml(item.data)}</li><li><strong>Тезис:</strong> ${escapeHtml(item.thesis)}</li><li><strong>Поддержка:</strong> ${escapeHtml(item.support)}</li><li><strong>Опровержение:</strong> ${escapeHtml(item.rebuttal)}</li><li><strong>Литература:</strong> ${escapeHtml(item.literature)}</li><li><strong>Другие видео:</strong> ${escapeHtml(item.related)}</li></ul></article>`;
}
printHtml += `</section></body></html>`;
fs.writeFileSync(path.join(contentDir, "print", "youtube-publication-plan-print.html"), printHtml, "utf8");

console.log(`Rebuilt ${episodes.length} episodes and ${plans.length} plans.`);
