const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const contentDir = path.join(root, "06-content");

// 50 Analytic Philosophers for Business Philosophy
const philosophers = [
  ["Gottlob Frege", "Вы спорите не о стратегии, а о смысле одного слова", "Смысл фразы меняет действие команды", "Gottlob Frege, Begriffsschrift; The Foundations of Arithmetic"],
  ["G. E. Moore", "Когда здравый смысл сильнее красивой стратегии", "Очевидное нельзя отменять красивой теорией", "G. E. Moore, Principia Ethica; A Defence of Common Sense"],
  ["Bertrand Russell", "Все говорят одно предложение, но внутри него три разных решения", "Поверхностная грамматика скрывает реальную структуру решения", "Bertrand Russell, On Denoting; Problems of Philosophy"],
  ["Ludwig Wittgenstein", "Команда использует одно слово, но играет в разные игры", "Значение слова видно в правилах его использования", "Ludwig Wittgenstein, Philosophical Investigations"],
  ["Rudolf Carnap", "Вы спорите о решении, хотя не договорились о правилах языка", "Без явного каркаса спор превращается в шум", "Rudolf Carnap, Logical Syntax of Language; The Logical Structure of the World"],
  ["A. J. Ayer", "Встреча закончилась выводом, который никто не может проверить", "Сильное утверждение должно иметь способ проверки", "A. J. Ayer, Language, Truth and Logic"],
  ["Gilbert Ryle", "Вы наняли процесс, а ждете от него результата", "Категориальная ошибка ломает управленческое ожидание", "Gilbert Ryle, The Concept of Mind"],
  ["J. L. Austin", "Одна фраза руководителя уже изменила поведение команды", "Слова в бизнесе часто являются действиями", "J. L. Austin, How to Do Things with Words"],
  ["P. F. Strawson", "Данные выглядят точными, пока вы не спросили: в какой ситуации?", "Факт получает смысл только в контексте применения", "P. F. Strawson, Individuals; Introduction to Logical Theory"],
  ["H. P. Grice", "Человек сказал все правильно, но команда поняла другое", "Смысл коммуникации рождается из намерения и контекста", "H. P. Grice, Logic and Conversation"],
  ["W. V. O. Quine", "Одна плохая гипотеза держит на себе весь план продаж", "Убеждения компании связаны в сеть, а не лежат отдельно", "W. V. O. Quine, Two Dogmas of Empiricism; Word and Object"],
  ["Wilfrid Sellars", "Факт есть в таблице, но решения из него все равно нет", "Факт становится знанием только в системе оснований", "Wilfrid Sellars, Empiricism and the Philosophy of Mind"],
  ["Donald Davidson", "Клиент сказал простую фразу, а вы перевели ее в неправильную задачу", "Понимание клиента требует интерпретации, а не угадывания мыслей", "Donald Davidson, Inquiries into Truth and Interpretation"],
  ["Saul Kripke", "Все спорят о том же слове, но каждый держит в голове другой объект", "Имя и ссылка важны, когда команда связывает слова с реальностью", "Saul Kripke, Naming and Necessity"],
  ["Hilary Putnam", "Значение продукта находится не в презентации, а в среде клиента", "Смысл определяется внешней средой, а не только намерением команды", "Hilary Putnam, The Meaning of Meaning"],
  ["David Lewis", "План выглядит разумно, пока не проверили второй сценарий", "Сценарное мышление проверяет решение через альтернативы", "David Lewis, Counterfactuals; On the Plurality of Worlds"],
  ["G. E. M. Anscombe", "Команда делает задачу, но уже забыла, зачем она это делает", "Действие понимается через намерение и описание цели", "G. E. M. Anscombe, Intention"],
  ["Heather Douglas", "Метрика стала решением, хотя за ошибку заплатит другой человек", "Данные требуют ответственности, когда решение влияет на людей", "Heather Douglas, Science, Policy, and the Value-Free Ideal"],
  ["Sally Haslanger", "Роль в системе заставляет человека вести себя как другой пользователь", "Социальные роли меняют поведение продукта и команды", "Sally Haslanger, Resisting Reality"],
  ["Hasok Chang", "Вы улучшили измерение и внезапно изменили сам продукт", "Измерение не только описывает мир, но и перестраивает практику", "Hasok Chang, Inventing Temperature"],
  ["Robert Brandom", "Доверие появляется не после слов, а после принятых обязательств", "Доверие строится на обязательствах и праве спрашивать основания", "Robert Brandom, Making It Explicit"],
  ["Luciano Floridi", "Компания тонет не в задачах, а в среде информации", "Информация стала средой, в которой живет бизнес", "Luciano Floridi, The Philosophy of Information"],
  ["Miranda Fricker", "Умный человек молчит на встрече, и компания теряет знание", "Знание теряется, когда источнику не дают доверия", "Miranda Fricker, Epistemic Injustice"],
  ["Duncan Pritchard", "Запуск выстрелил, но никто не знает почему", "Успех без понимания может быть удачей, а не знанием", "Duncan Pritchard, Epistemic Luck"],
  ["Nancy Cartwright", "То, что сработало в одном рынке, ломается в другом", "Законы работают через условия, а не одинаково везде", "Nancy Cartwright, How the Laws of Physics Lie; Evidence-Based Policy"],
  ["Patricia Churchland", "Клиент решил раньше, чем успел объяснить свое решение", "Решения связаны с мозгом, привычкой и телесной экономией", "Patricia Churchland, Neurophilosophy; Braintrust"],
  ["Timothy Williamson", "Вы не имеете права утверждать то, чего еще не знаете", "Утверждение должно соответствовать статусу знания", "Timothy Williamson, Knowledge and Its Limits"],
  ["Andy Clark", "Инструмент уже думает вместе с вами, но вы называете его просто софтом", "Мышление распределено между человеком, инструментом и средой", "Andy Clark, Supersizing the Mind; Natural-Born Cyborgs"],
  ["Susanna Siegel", "Пользователь видит не экран, а возможность действовать", "Восприятие уже содержит интерпретацию ситуации", "Susanna Siegel, The Contents of Visual Experience"],
  ["Jennifer Nagel", "Люди доверяют ответу не потому, что он длинный", "Мы приписываем знание по сигналам уверенности, доступа и надежности", "Jennifer Nagel, Knowledge: A Very Short Introduction"],
  ["Michael Polanyi", "Лучший сотрудник знает больше, чем может объяснить в регламенте", "В бизнесе много неявного знания, которое нельзя свести к инструкции", "Michael Polanyi, Personal Knowledge; The Tacit Dimension"],
  ["Stephen Toulmin", "Вы спорите о доказательствах, но у вас нет схемы аргумента", "Убедительный аргумент требует не просто фактов, а обоснования перехода к выводам", "Stephen Toulmin, The Uses of Argument"],
  ["Susan Haack", "Данные похожи на кроссворд: одна ошибка портит все пересечения", "Обоснование знания строится как кроссворд, где доказательства поддерживают друг друга взаимно", "Susan Haack, Evidence and Inquiry"],
  ["John Searle", "Программа выполняет код, но не понимает смысл бизнеса", "Синтаксиса недостаточно для семантики: имитация понимания не является реальным пониманием", "John Searle, Intentionality; Minds, Brains, and Programs"],
  ["Thomas Nagel", "Вы смотрите на метрики пользователя, но не знаете, каково им быть", "Субъективный опыт пользователя нельзя полностью свести к объективным измерениям", "Thomas Nagel, What Is It Like to Be a Bat?; Mortal Questions"],
  ["Karl Popper", "Гипотеза хороша не тем, что подтверждается, а тем, как ее можно опровергнуть", "Научность и проверяемость гипотезы определяются ее опровержимостью", "Karl Popper, The Logic of Scientific Discovery"],
  ["Nelson Goodman", "Команда строит продукт для мира, которого не существует", "Мы создаем разные версии мира с помощью описаний, систем и репрезентаций", "Nelson Goodman, Fact, Fiction, and Forecast; Ways of Worldmaking"],
  ["Frank Ramsey", "План основан на вере, а не на расчете вероятности", "Убеждения — это карты, по которым мы действуем, а их истинность проверяется успехом действия", "Frank Ramsey, Foundations of Mathematics and other Logical Essays"],
  ["Michael Dummett", "Мы спорим о будущем продукта, как будто оно уже где-то записано", "Смысл утверждения определяется условиями его обоснованности, а не абстрактной истиной", "Michael Dummett, Truth and Other Enigmas"],
  ["Derek Parfit", "Вы строите бренд для человека, который через год станет другим", "Личная идентичность не так важна, как непрерывность намерений и ценностей", "Derek Parfit, Reasons and Persons"],
  ["John McDowell", "Ваши данные о рынке — это не просто числа, а концептуальные очки", "Восприятие мира всегда пронизано нашими понятиями и культурой", "John McDowell, Mind and World"],
  ["Jerry Fodor", "Процессы в компании работают как модули: никто не видит всей картины", "Мышление модульно, и иногда части системы не знают, что делают другие", "Jerry Fodor, The Modularity of Mind"],
  ["David Chalmers", "У вас есть все данные о поведении, но нет понимания опыта клиента", "Трудная проблема сознания: функционального описания недостаточно для понимания субъективности", "David Chalmers, The Conscious Mind"],
  ["Ruth Millikan", "Функция продукта — это не то, что он делает сейчас, а то, для чего он выжил", "Биологические функции и цели определяются историей успеха и воспроизводства", "Ruth Millikan, Language, Thought, and Other Biological Categories"],
  ["Philippa Foot", "Бизнес-цель не может быть оправданием, если она ломает базовые ценности", "Добродетели — это не правила, а необходимые качества для процветания сообщества", "Philippa Foot, Virtues and Vices"],
  ["Tyler Burge", "Смысл ваших задач зависит от рынка больше, чем от ваших мыслей", "Содержание мыслей определяется внешней средой и социальными институтами", "Tyler Burge, Individualism and the Mental"],
  ["Gareth Evans", "Вы ссылаетесь на проблему, которой на самом деле нет в данных", "Сингулярные мысли требуют реального информационного канала к объекту", "Gareth Evans, The Varieties of Reference"],
  ["Peter Geach", "Ваши метрики качества — это просто прилагательные без существительного", "Добро и качество всегда относительны к роду объекта: хороший нож не равен хорошему человеку", "Peter Geach, Good and Evil"],
  ["Peter van Inwagen", "Мы думаем, что управляем проектом, хотя все уже определено процессами", "Проблема свободы воли в мире, где каждое событие имеет причину", "Peter van Inwagen, An Essay on Free Will"],
  ["Alvin Plantinga", "Ваша уверенность в успехе — это базовая установка, а не вывод из данных", "Некоторые убеждения рациональны без доказательств, если они порождены надежным механизмом", "Alvin Plantinga, Warranted Christian Belief; Warrant and Proper Function"]
];

function generateDates(startDate, count) {
  const dates = [];
  let current = new Date(startDate);
  while (dates.length < count) {
    if (current.getDay() === 2) { // Tuesday
      dates.push(current.toISOString().split("T")[0]);
    }
    current.setDate(current.getDate() + 1);
  }
  return dates;
}

const start = "2026-06-16";
const dates = generateDates(start, philosophers.length);

const episodes = philosophers.map((p, i) => ({
  episode: i + 1,
  date: dates[i],
  weekday: "Tuesday",
  rubric: "Как думают топ-аналитики",
  title: p[1],
  source: p[0],
  status: i < 2 ? "released" : "planned", // First 2 episodes marked as released as requested
  thesis: p[2],
  literature: p[3]
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
  const hook = `Представь рабочую сцену: ${item.title.toLowerCase()}. Это не абстрактная философия, а момент, где команда теряет ясность.`;
  const greeting = `Привет, я Дмитрий Ефремов. Сегодня разбираем выпуск #${item.episode}: ${item.title}.`;
  const data = "Данные/сцена: управленческая встреча, продуктовый спор, таблица или интервью с клиентом. Покажи 2-3 наблюдаемых признака проблемы: кто говорит, что измеряют, где возникает разрыв.";
  const support = "Поддержка: разложи сцену на элементы, покажи ошибку мышления и переведи идею в рабочий прием для аналитика, предпринимателя или product owner.";
  const rebuttal = "Опровержение: возьми сильное возражение «это слишком философски для бизнеса» и ответь: ценность идеи в том, что она улучшает вопрос, решение и качество доказательства.";
  const related = "Другие видео: связать с соседними философскими выпусками рубрики.";
  return { ...item, hook, greeting, data, support, rebuttal, related };
}

const plans = episodes.map(planFor);

// 1. Calendar CSV
const calendarCsv = [
  "episode,date,weekday,rubric,title,source,status",
  ...episodes.map((item) => [item.episode, item.date, item.weekday, item.rubric, item.title, item.source, item.status].map(csvEscape).join(",")),
].join("\n") + "\n";
fs.writeFileSync(path.join(contentDir, "youtube-publication-calendar-2026-2027.csv"), calendarCsv, "utf8");

// 2. Calendar MD
let calendarMd = `# YouTube-календарь публикаций: 2026-2027

Статус: \`active\`

Период: с 2026-06-16 по 2027-05-25.
Ритм: каждый вторник.
Объем: 50 выпусков (Аналитическая философия бизнеса).

## Рубрики

### Как думают топ-аналитики

Философские идеи как сцены в бизнесе. В заголовке не называем философа.

## Календарь

| # | Дата | Выпуск | База | Статус |
|---:|---|---|---|---|
`;
for (const item of episodes) {
  calendarMd += `| ${item.episode} | ${item.date} | ${item.title} | ${item.source} | **${item.status}** |\n`;
}
fs.writeFileSync(path.join(contentDir, "youtube-publication-calendar-2026-2027.md"), calendarMd, "utf8");

// 3. Speaking Plans CSV
const planCsvHeader = ["episode", "date", "rubric", "title", "source", "hook", "greeting", "data", "thesis", "support", "rebuttal", "literature", "related_videos", "status"];
const planCsv = [
  planCsvHeader.join(","),
  ...plans.map((item) => [item.episode, item.date, item.rubric, item.title, item.source, item.hook, item.greeting, item.data, item.thesis, item.support, item.rebuttal, item.literature, item.related, item.status].map(csvEscape).join(",")),
].join("\n") + "\n";
fs.writeFileSync(path.join(contentDir, "youtube-episode-speaking-plans-2026-2027.csv"), planCsv, "utf8");

// 4. Speaking Plans MD
let planMd = `# Планы выступлений YouTube: 2026-2027

`;
for (const item of plans) {
  planMd += `## ${item.episode}. ${item.title} (${item.status})

Дата: ${item.date}
База: ${item.source}

- Хук: ${item.hook}
- Тезис: ${item.thesis}
- Литература: ${item.literature}

`;
}
fs.writeFileSync(path.join(contentDir, "youtube-episode-speaking-plans-2026-2027.md"), planMd, "utf8");

console.log(`Rebuilt ${episodes.length} episodes for Business Philosophy brand.`);
