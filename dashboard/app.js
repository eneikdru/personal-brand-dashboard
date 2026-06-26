const episodes = [
  {
    "episode": 1,
    "rubric": "Как думают топ-аналитики",
    "title": "Вы спорите не о стратегии, а о смысле одного слова",
    "source": "Gottlob Frege",
    "hook": "Представь рабочую сцену: вы спорите не о стратегии, а о смысле одного слова. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Смысл фразы меняет действие команды",
    "literature": "Gottlob Frege, Begriffsschrift; The Foundations of Arithmetic"
  },
  {
    "episode": 2,
    "rubric": "Как думают топ-аналитики",
    "title": "Когда здравый смысл сильнее красивой стратегии",
    "source": "G. E. Moore",
    "hook": "Представь рабочую сцену: когда здравый смысл сильнее красивой стратегии. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Очевидное нельзя отменять красивой теорией",
    "literature": "G. E. Moore, Principia Ethica; A Defence of Common Sense"
  },
  {
    "episode": 3,
    "rubric": "Как думают топ-аналитики",
    "title": "Все говорят одно предложение, но внутри него три разных решения",
    "source": "Bertrand Russell",
    "hook": "Представь рабочую сцену: все говорят одно предложение, но внутри него три разных решения. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Поверхностная грамматика скрывает реальную структуру решения",
    "literature": "Bertrand Russell, On Denoting; Problems of Philosophy"
  },
  {
    "episode": 4,
    "rubric": "Как думают топ-аналитики",
    "title": "Команда использует одно слово, но играет в разные игры",
    "source": "Ludwig Wittgenstein",
    "hook": "Представь рабочую сцену: команда использует одно слово, но играет в разные игры. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Значение слова видно в правилах его использования",
    "literature": "Ludwig Wittgenstein, Philosophical Investigations"
  },
  {
    "episode": 5,
    "rubric": "Как думают топ-аналитики",
    "title": "Вы спорите о решении, хотя не договорились о правилах языка",
    "source": "Rudolf Carnap",
    "hook": "Представь рабочую сцену: вы спорите о решении, хотя не договорились о правилах языка. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Без явного каркаса спор превращается в шум",
    "literature": "Rudolf Carnap, Logical Syntax of Language; The Logical Structure of the World"
  },
  {
    "episode": 6,
    "rubric": "Как думают топ-аналитики",
    "title": "Встреча закончилась выводом, который никто не может проверить",
    "source": "A. J. Ayer",
    "hook": "Представь рабочую сцену: встреча закончилась выводом, который никто не может проверить. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Сильное утверждение должно иметь способ проверки",
    "literature": "A. J. Ayer, Language, Truth and Logic"
  },
  {
    "episode": 7,
    "rubric": "Как думают топ-аналитики",
    "title": "Вы наняли процесс, а ждете от него результата",
    "source": "Gilbert Ryle",
    "hook": "Представь рабочую сцену: вы наняли процесс, а ждете от него результата. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Категориальная ошибка ломает управленческое ожидание",
    "literature": "Gilbert Ryle, The Concept of Mind"
  },
  {
    "episode": 8,
    "rubric": "Как думают топ-аналитики",
    "title": "Одна фраза руководителя уже изменила поведение команды",
    "source": "J. L. Austin",
    "hook": "Представь рабочую сцену: одна фраза руководителя уже изменила поведение команды. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Слова в бизнесе часто являются действиями",
    "literature": "J. L. Austin, How to Do Things with Words"
  },
  {
    "episode": 9,
    "rubric": "Как думают топ-аналитики",
    "title": "Данные выглядят точными, пока вы не спросили: в какой ситуации?",
    "source": "P. F. Strawson",
    "hook": "Представь рабочую сцену: данные выглядят точными, пока вы не спросили: в какой ситуации?. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Факт получает смысл только в контексте применения",
    "literature": "P. F. Strawson, Individuals; Introduction to Logical Theory"
  },
  {
    "episode": 10,
    "rubric": "Как думают топ-аналитики",
    "title": "Человек сказал все правильно, но команда поняла другое",
    "source": "H. P. Grice",
    "hook": "Представь рабочую сцену: человек сказал все правильно, но команда поняла другое. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Смысл коммуникации рождается из намерения и контекста",
    "literature": "H. P. Grice, Logic and Conversation"
  },
  {
    "episode": 11,
    "rubric": "Как думают топ-аналитики",
    "title": "Одна плохая гипотеза держит на себе весь план продаж",
    "source": "W. V. O. Quine",
    "hook": "Представь рабочую сцену: одна плохая гипотеза держит на себе весь план продаж. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Убеждения компании связаны в сеть, а не лежат отдельно",
    "literature": "W. V. O. Quine, Two Dogmas of Empiricism; Word and Object"
  },
  {
    "episode": 12,
    "rubric": "Как думают топ-аналитики",
    "title": "Факт есть в таблице, но решения из него все равно нет",
    "source": "Wilfrid Sellars",
    "hook": "Представь рабочую сцену: факт есть в таблице, но решения из него все равно нет. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Факт становится знанием только в системе оснований",
    "literature": "Wilfrid Sellars, Empiricism and the Philosophy of Mind"
  },
  {
    "episode": 13,
    "rubric": "Как думают топ-аналитики",
    "title": "Клиент сказал простую фразу, а вы перевели ее в неправильную задачу",
    "source": "Donald Davidson",
    "hook": "Представь рабочую сцену: клиент сказал простую фразу, а вы перевели ее в неправильную задачу. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Понимание клиента требует интерпретации, а не угадывания мыслей",
    "literature": "Donald Davidson, Inquiries into Truth and Interpretation"
  },
  {
    "episode": 14,
    "rubric": "Как думают топ-аналитики",
    "title": "Все спорят о том же слове, но каждый держит в голове другой объект",
    "source": "Saul Kripke",
    "hook": "Представь рабочую сцену: все спорят о том же слове, но каждый держит в голове другой объект. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Имя и ссылка важны, когда команда связывает слова с реальностью",
    "literature": "Saul Kripke, Naming and Necessity"
  },
  {
    "episode": 15,
    "rubric": "Как думают топ-аналитики",
    "title": "Значение продукта находится не в презентации, а в среде клиента",
    "source": "Hilary Putnam",
    "hook": "Представь рабочую сцену: значение продукта находится не в презентации, а в среде клиента. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Смысл определяется внешней средой, а не только намерением команды",
    "literature": "Hilary Putnam, The Meaning of Meaning"
  },
  {
    "episode": 16,
    "rubric": "Как думают топ-аналитики",
    "title": "План выглядит разумно, пока не проверили второй сценарий",
    "source": "David Lewis",
    "hook": "Представь рабочую сцену: план выглядит разумно, пока не проверили второй сценарий. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Сценарное мышление проверяет решение через альтернативы",
    "literature": "David Lewis, Counterfactuals; On the Plurality of Worlds"
  },
  {
    "episode": 17,
    "rubric": "Как думают топ-аналитики",
    "title": "Команда делает задачу, но уже забыла, зачем она это делает",
    "source": "G. E. M. Anscombe",
    "hook": "Представь рабочую сцену: команда делает задачу, но уже забыла, зачем она это делает. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Действие понимается через намерение и описание цели",
    "literature": "G. E. M. Anscombe, Intention"
  },
  {
    "episode": 18,
    "rubric": "Как думают топ-аналитики",
    "title": "Метрика стала решением, хотя за ошибку заплатит другой человек",
    "source": "Heather Douglas",
    "hook": "Представь рабочую сцену: метрика стала решением, хотя за ошибку заплатит другой человек. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Данные требуют ответственности, когда решение влияет на людей",
    "literature": "Heather Douglas, Science, Policy, and the Value-Free Ideal"
  },
  {
    "episode": 19,
    "rubric": "Как думают топ-аналитики",
    "title": "Роль в системе заставляет человека вести себя как другой пользователь",
    "source": "Sally Haslanger",
    "hook": "Представь рабочую сцену: роль в системе заставляет человека вести себя как другой пользователь. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Социальные роли меняют поведение продукта и команды",
    "literature": "Sally Haslanger, Resisting Reality"
  },
  {
    "episode": 20,
    "rubric": "Как думают топ-аналитики",
    "title": "Вы улучшили измерение и внезапно изменили сам продукт",
    "source": "Hasok Chang",
    "hook": "Представь рабочую сцену: вы улучшили измерение и внезапно изменили сам продукт. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Измерение не только описывает мир, но и перестраивает практику",
    "literature": "Hasok Chang, Inventing Temperature"
  },
  {
    "episode": 21,
    "rubric": "Как думают топ-аналитики",
    "title": "Доверие появляется не после слов, а после принятых обязательств",
    "source": "Robert Brandom",
    "hook": "Представь рабочую сцену: доверие появляется не после слов, а после принятых обязательств. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Доверие строится на обязательствах и праве спрашивать основания",
    "literature": "Robert Brandom, Making It Explicit"
  },
  {
    "episode": 22,
    "rubric": "Как думают топ-аналитики",
    "title": "Компания тонет не в задачах, а в среде информации",
    "source": "Luciano Floridi",
    "hook": "Представь рабочую сцену: компания тонет не в задачах, а в среде информации. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Информация стала средой, в которой живет бизнес",
    "literature": "Luciano Floridi, The Philosophy of Information"
  },
  {
    "episode": 23,
    "rubric": "Как думают топ-аналитики",
    "title": "Умный человек молчит на встрече, и компания теряет знание",
    "source": "Miranda Fricker",
    "hook": "Представь рабочую сцену: умный человек молчит на встрече, и компания теряет знание. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Знание теряется, когда источнику не дают доверия",
    "literature": "Miranda Fricker, Epistemic Injustice"
  },
  {
    "episode": 24,
    "rubric": "Как думают топ-аналитики",
    "title": "Запуск выстрелил, но никто не знает почему",
    "source": "Duncan Pritchard",
    "hook": "Представь рабочую сцену: запуск выстрелил, но никто не знает почему. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Успех без понимания может быть удачей, а не знанием",
    "literature": "Duncan Pritchard, Epistemic Luck"
  },
  {
    "episode": 25,
    "rubric": "Как думают топ-аналитики",
    "title": "То, что сработало в одном рынке, ломается в другом",
    "source": "Nancy Cartwright",
    "hook": "Представь рабочую сцену: то, что сработало в одном рынке, ломается в другом. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Законы работают через условия, а не одинаково везде",
    "literature": "Nancy Cartwright, How the Laws of Physics Lie; Evidence-Based Policy"
  },
  {
    "episode": 26,
    "rubric": "Как думают топ-аналитики",
    "title": "Клиент решил раньше, чем успел объяснить свое решение",
    "source": "Patricia Churchland",
    "hook": "Представь рабочую сцену: клиент решил раньше, чем успел объяснить свое решение. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Решения связаны с мозгом, привычкой и телесной экономией",
    "literature": "Patricia Churchland, Neurophilosophy; Braintrust"
  },
  {
    "episode": 27,
    "rubric": "Как думают топ-аналитики",
    "title": "Вы не имеете права утверждать то, чего еще не знаете",
    "source": "Timothy Williamson",
    "hook": "Представь рабочую сцену: вы не имеете права утверждать то, чего еще не знаете. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Утверждение должно соответствовать статусу знания",
    "literature": "Timothy Williamson, Knowledge and Its Limits"
  },
  {
    "episode": 28,
    "rubric": "Как думают топ-аналитики",
    "title": "Инструмент уже думает вместе с вами, но вы называете его просто софтом",
    "source": "Andy Clark",
    "hook": "Представь рабочую сцену: инструмент уже думает вместе с вами, но вы называете его просто софтом. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Мышление распределено между человеком, инструментом и средой",
    "literature": "Andy Clark, Supersizing the Mind; Natural-Born Cyborgs"
  },
  {
    "episode": 29,
    "rubric": "Как думают топ-аналитики",
    "title": "Пользователь видит не экран, а возможность действовать",
    "source": "Susanna Siegel",
    "hook": "Представь рабочую сцену: пользователь видит не экран, а возможность действовать. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Восприятие уже содержит интерпретацию ситуации",
    "literature": "Susanna Siegel, The Contents of Visual Experience"
  },
  {
    "episode": 30,
    "rubric": "Как думают топ-аналитики",
    "title": "Люди доверяют ответу не потому, что он длинный",
    "source": "Jennifer Nagel",
    "hook": "Представь рабочую сцену: люди доверяют ответу не потому, что он длинный. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Мы приписываем знание по сигналам уверенности, доступа и надежности",
    "literature": "Jennifer Nagel, Knowledge: A Very Short Introduction"
  },
  {
    "episode": 31,
    "rubric": "Как думают топ-аналитики",
    "title": "Лучший сотрудник знает больше, чем может объяснить в регламенте",
    "source": "Michael Polanyi",
    "hook": "Представь рабочую сцену: лучший сотрудник знает больше, чем может объяснить в регламенте. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "В бизнесе много неявного знания, которое нельзя свести к инструкции",
    "literature": "Michael Polanyi, Personal Knowledge; The Tacit Dimension"
  },
  {
    "episode": 32,
    "rubric": "Как думают топ-аналитики",
    "title": "Вы спорите о доказательствах, но у вас нет схемы аргумента",
    "source": "Stephen Toulmin",
    "hook": "Представь рабочую сцену: вы спорите о доказательствах, но у вас нет схемы аргумента. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Убедительный аргумент требует не просто фактов, а обоснования перехода к выводам",
    "literature": "Stephen Toulmin, The Uses of Argument"
  },
  {
    "episode": 33,
    "rubric": "Как думают топ-аналитики",
    "title": "Данные похожи на кроссворд: одна ошибка портит все пересечения",
    "source": "Susan Haack",
    "hook": "Представь рабочую сцену: данные похожи на кроссворд, где одна ошибка ломает всю структуру. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Обоснование знания строится как кроссворд, где доказательства поддерживают друг друга взаимно",
    "literature": "Susan Haack, Evidence and Inquiry"
  },
  {
    "episode": 34,
    "rubric": "Как думают топ-аналитики",
    "title": "Программа выполняет код, но не понимает смысл бизнеса",
    "source": "John Searle",
    "hook": "Представь рабочую сцену: программа отлично выполняет код, но понятия не имеет о смысле бизнес-целей. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Синтаксиса недостаточно для семантики: имитация понимания не является реальным пониманием",
    "literature": "John Searle, Intentionality; Minds, Brains, and Programs"
  },
  {
    "episode": 35,
    "rubric": "Как думают топ-аналитики",
    "title": "Вы смотрите на метрики пользователя, но не знаете, каково им быть",
    "source": "Thomas Nagel",
    "hook": "Представь рабочую сцену: вы смотрите на метрики пользователя, но совершенно не понимаете их реальный опыт. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Субъективный опыт пользователя нельзя полностью свести к объективным измерениям",
    "literature": "Thomas Nagel, What Is It Like to Be a Bat?; Mortal Questions"
  },
  {
    "episode": 36,
    "rubric": "Как думают топ-аналитики",
    "title": "Гипотеза хороша не тем, что подтверждается, а тем, как ее можно опровергнуть",
    "source": "Karl Popper",
    "hook": "Представь рабочую сцену: гипотеза кажется идеальной, пока вы не спросили, как ее опровергнуть. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Научность и проверяемость гипотезы определяются ее опровержимостью",
    "literature": "Karl Popper, The Logic of Scientific Discovery"
  },
  {
    "episode": 37,
    "rubric": "Как думают топ-аналитики",
    "title": "Команда строит продукт для мира, которого не существует",
    "source": "Nelson Goodman",
    "hook": "Представь рабочую сцену: команда строит продукт для вымышленного мира. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Мы создаем разные версии мира с помощью описаний, систем и репрезентаций",
    "literature": "Nelson Goodman, Fact, Fiction, and Forecast; Ways of Worldmaking"
  }
];

const commands = [
  ["Выпуски", "покажи первые 5 выпусков YouTube-календаря"],
  ["План выступления", "покажи план выступления для выпуска #1"],
  ["Телесуфлер", "открой телесуфлер для выпуска #1"],
  ["Сценарий выпуска", "собери полный сценарий YouTube для выпуска #1 по плану выступления и брендбуку"],
  ["План съемки", "сделай план съемки и тезисы для следующего выпуска"],
  ["Обновить статус", "обнови статус выпуска #1 на drafted"],
  ["Пост к выпуску", "собери Instagram-пост к ближайшему YouTube-выпуску"],
  ["Философский метод", "свяжи Поппера с проверкой гипотез MVP и брендбуком"],
  ["Философ", "свяжи Витгенштейна с бизнес-коммуникацией и продуктом, но не используй имя в YouTube-заголовке"],
  ["Пробелы", "покажи все незаполненные места в Brand OS"],
  ["PDF", "обнови PDF-план выпусков"],
  ["Брендбук", "проверь этот текст на соответствие брендбуку: "]
];

const stats = [
  ["YouTube", "37", "выпусков"],
  ["Философы", "37", "эпизодов"],
  ["Планы", "37", "структур выступлений"]
];

const philosophers = episodes;
const metrics = [];

const state = { search: "" };

const els = {
  stats: document.querySelector("#stats"),
  nextEpisodes: document.querySelector("#nextEpisodes"),
  calendarRows: document.querySelector("#calendarRows"),
  philosopherTiles: document.querySelector("#philosopherTiles"),
  commandGrid: document.querySelector("#commandGrid"),
  globalSearch: document.querySelector("#globalSearch"),
  toast: document.querySelector("#toast")
};

function normalize(value) {
  return String(value).toLowerCase().replace(/\u0451/g, "\u0435");
}

function isMatch(item) {
  const needle = normalize(state.search.trim());
  if (!needle) return true;
  return normalize(`${item.title} ${item.source} ${item.rubric} ${item.hook} ${item.thesis}`).includes(needle);
}

function getFilteredEpisodes() {
  return episodes.filter(isMatch);
}

function getNextEpisodes() {
  return episodes.slice(0, 5);
}

function renderStats() {
  els.stats.innerHTML = stats.map(([label, value, note]) => `
    <article class="stat-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${note}</small>
    </article>
  `).join("");
}

function renderNextEpisodes() {
  els.nextEpisodes.innerHTML = getNextEpisodes().map((item) => `
    <article class="episode-row">
      <div class="episode-date">Выпуск ${item.episode}</div>
      <div>
        <a href="https://youtube.com/@dmitrii.efremov?si=kmKibTcmPNlJIY-5" target="_blank" class="episode-title-link"><strong>${item.title}</strong></a>
        <small>${item.rubric} · ${item.source}</small>
        <small>${item.thesis}</small>
      </div>
    </article>
  `).join("");
}

function renderCalendar() {
  const rows = getFilteredEpisodes();
  els.calendarRows.innerHTML = rows.map((item) => {
    const type = "business";
    return `
      <tr>
        <td>${item.episode}</td>
        <td><span class="rubric-pill ${type}">${item.rubric}</span></td>
        <td>
          <a href="https://youtube.com/@dmitrii.efremov?si=kmKibTcmPNlJIY-5" target="_blank" class="episode-title-link"><strong>${item.title}</strong></a>
          <small class="table-note">${item.hook}</small>
        </td>
        <td>${item.source}</td>
        <td><span class="status-pill">planned</span></td>
      </tr>
    `;
  }).join("");
}

function renderTiles(container, items) {
  container.innerHTML = items.filter(isMatch).map((item) => `
    <article class="tile">
      <span>выпуск ${item.episode}</span>
      <a href="https://youtube.com/@dmitrii.efremov?si=kmKibTcmPNlJIY-5" target="_blank" class="episode-title-link"><strong>${item.title}</strong></a>
      <small>${item.source}</small>
      <small>${item.thesis}</small>
    </article>
  `).join("");
}

function renderCommands() {
  els.commandGrid.innerHTML = commands.map(([title, text]) => `
    <button class="command-card" type="button" data-copy="${text.replace(/"/g, "&quot;")}">
      <strong>${title}</strong>
      <span>${text}</span>
    </button>
  `).join("");
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
  renderCommands();
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`#${button.dataset.view}`).classList.add("active");
  });
});

els.globalSearch.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderCalendar();
  renderTiles(els.philosopherTiles, philosophers);
});

document.body.addEventListener("click", (event) => {
  const command = event.target.closest("[data-command]");
  if (command) copyCommand(command.dataset.command);

  const copy = event.target.closest("[data-copy]");
  if (copy) copyCommand(copy.dataset.copy);
});

renderAll();
