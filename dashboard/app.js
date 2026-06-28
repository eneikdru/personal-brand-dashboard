const episodes = [
  {
    "episode": 1,
    "date": "2026-06-16",
    "rubric": "Как думают топ-аналитики",
    "title": "Вы спорите не о стратегии, а о смысле одного слова",
    "source": "Gottlob Frege",
    "hook": "Представь рабочую сцену: вы спорите не о стратегии, а о смысле одного слова. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Смысл фразы меняет действие команды",
    "literature": "Gottlob Frege, Begriffsschrift; The Foundations of Arithmetic",
    "status": "released"
  },
  {
    "episode": 2,
    "date": "2026-06-23",
    "rubric": "Как думают топ-аналитики",
    "title": "Когда здравый смысл сильнее красивой стратегии",
    "source": "G. E. Moore",
    "hook": "Представь рабочую сцену: когда здравый смысл сильнее красивой стратегии. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Очевидное нельзя отменять красивой теорией",
    "literature": "G. E. Moore, Principia Ethica; A Defence of Common Sense",
    "status": "released"
  },
  {
    "episode": 3,
    "date": "2026-06-30",
    "rubric": "Как думают топ-аналитики",
    "title": "Все говорят одно предложение, но внутри него три разных решения",
    "source": "Bertrand Russell",
    "hook": "Представь рабочую сцену: все говорят одно предложение, но внутри него три разных решения. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Поверхностная грамматика скрывает реальную структуру решения",
    "literature": "Bertrand Russell, On Denoting; Problems of Philosophy",
    "status": "planned"
  },
  {
    "episode": 4,
    "date": "2026-07-07",
    "rubric": "Как думают топ-аналитики",
    "title": "Команда использует одно слово, но играет в разные игры",
    "source": "Ludwig Wittgenstein",
    "hook": "Представь рабочую сцену: команда использует одно слово, но играет в разные игры. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Значение слова видно в правилах его использования",
    "literature": "Ludwig Wittgenstein, Philosophical Investigations",
    "status": "planned"
  },
  {
    "episode": 5,
    "date": "2026-07-14",
    "rubric": "Как думают топ-аналитики",
    "title": "Вы спорите о решении, хотя не договорились о правилах языка",
    "source": "Rudolf Carnap",
    "hook": "Представь рабочую сцену: вы спорите о решении, хотя не договорились о правилах языка. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Без явного каркаса спор превращается в шум",
    "literature": "Rudolf Carnap, Logical Syntax of Language; The Logical Structure of the World",
    "status": "planned"
  },
  {
    "episode": 6,
    "date": "2026-07-21",
    "rubric": "Как думают топ-аналитики",
    "title": "Встреча закончилась выводом, который никто не может проверить",
    "source": "A. J. Ayer",
    "hook": "Представь рабочую сцену: встреча закончилась выводом, который никто не может проверить. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Сильное утверждение должно иметь способ проверки",
    "literature": "A. J. Ayer, Language, Truth and Logic",
    "status": "planned"
  },
  {
    "episode": 7,
    "date": "2026-07-28",
    "rubric": "Как думают топ-аналитики",
    "title": "Вы наняли процесс, а ждете от него результата",
    "source": "Gilbert Ryle",
    "hook": "Представь рабочую сцену: вы наняли процесс, а ждете от него результата. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Категориальная ошибка ломает управленческое ожидание",
    "literature": "Gilbert Ryle, The Concept of Mind",
    "status": "planned"
  },
  {
    "episode": 8,
    "date": "2026-08-04",
    "rubric": "Как думают топ-аналитики",
    "title": "Одна фраза руководителя уже изменила поведение команды",
    "source": "J. L. Austin",
    "hook": "Представь рабочую сцену: одна фраза руководителя уже изменила поведение команды. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Слова в бизнесе часто являются действиями",
    "literature": "J. L. Austin, How to Do Things with Words",
    "status": "planned"
  },
  {
    "episode": 9,
    "date": "2026-08-11",
    "rubric": "Как думают топ-аналитики",
    "title": "Данные выглядят точными, пока вы не спросили: в какой ситуации?",
    "source": "P. F. Strawson",
    "hook": "Представь рабочую сцену: данные выглядят точными, пока вы не спросили: в какой ситуации?. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Факт получает смысл только в контексте применения",
    "literature": "P. F. Strawson, Individuals; Introduction to Logical Theory",
    "status": "planned"
  },
  {
    "episode": 10,
    "date": "2026-08-18",
    "rubric": "Как думают топ-аналитики",
    "title": "Человек сказал все правильно, но команда поняла другое",
    "source": "H. P. Grice",
    "hook": "Представь рабочую сцену: человек сказал все правильно, но команда поняла другое. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Смысл коммуникации рождается из намерения и контекста",
    "literature": "H. P. Grice, Logic and Conversation",
    "status": "planned"
  },
  {
    "episode": 11,
    "date": "2026-08-25",
    "rubric": "Как думают топ-аналитики",
    "title": "Одна плохая гипотеза держит на себе весь план продаж",
    "source": "W. V. O. Quine",
    "hook": "Представь рабочую сцену: одна плохая гипотеза держит на себе весь план продаж. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Убеждения компании связаны в сеть, а не лежат отдельно",
    "literature": "W. V. O. Quine, Two Dogmas of Empiricism; Word and Object",
    "status": "planned"
  },
  {
    "episode": 12,
    "date": "2026-09-01",
    "rubric": "Как думают топ-аналитики",
    "title": "Факт есть в таблице, но решения из него все равно нет",
    "source": "Wilfrid Sellars",
    "hook": "Представь рабочую сцену: факт есть в таблице, но решения из него все равно нет. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Факт становится знанием только в системе оснований",
    "literature": "Wilfrid Sellars, Empiricism and the Philosophy of Mind",
    "status": "planned"
  },
  {
    "episode": 13,
    "date": "2026-09-08",
    "rubric": "Как думают топ-аналитики",
    "title": "Клиент сказал простую фразу, а вы перевели ее в неправильную задачу",
    "source": "Donald Davidson",
    "hook": "Представь рабочую сцену: клиент сказал простую фразу, а вы перевели ее в неправильную задачу. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Понимание клиента требует интерпретации, а не угадывания мыслей",
    "literature": "Donald Davidson, Inquiries into Truth and Interpretation",
    "status": "planned"
  },
  {
    "episode": 14,
    "date": "2026-09-15",
    "rubric": "Как думают топ-аналитики",
    "title": "Все спорят о том же слове, но каждый держит в голове другой объект",
    "source": "Saul Kripke",
    "hook": "Представь рабочую сцену: все спорят о том же слове, но каждый держит в голове другой объект. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Имя и ссылка важны, когда команда связывает слова с реальностью",
    "literature": "Saul Kripke, Naming and Necessity",
    "status": "planned"
  },
  {
    "episode": 15,
    "date": "2026-09-22",
    "rubric": "Как думают топ-аналитики",
    "title": "Значение продукта находится не в презентации, а в среде клиента",
    "source": "Hilary Putnam",
    "hook": "Представь рабочую сцену: значение продукта находится не в презентации, а в среде клиента. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Смысл определяется внешней средой, а не только намерением команды",
    "literature": "Hilary Putnam, The Meaning of Meaning",
    "status": "planned"
  },
  {
    "episode": 16,
    "date": "2026-09-29",
    "rubric": "Как думают топ-аналитики",
    "title": "План выглядит разумно, пока не проверили второй сценарий",
    "source": "David Lewis",
    "hook": "Представь рабочую сцену: план выглядит разумно, пока не проверили второй сценарий. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Сценарное мышление проверяет решение через альтернативы",
    "literature": "David Lewis, Counterfactuals; On the Plurality of Worlds",
    "status": "planned"
  },
  {
    "episode": 17,
    "date": "2026-10-06",
    "rubric": "Как думают топ-аналитики",
    "title": "Команда делает задачу, но уже забыла, зачем она это делает",
    "source": "G. E. M. Anscombe",
    "hook": "Представь рабочую сцену: команда делает задачу, но уже забыла, зачем она это делает. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Действие понимается через намерение и описание цели",
    "literature": "G. E. M. Anscombe, Intention",
    "status": "planned"
  },
  {
    "episode": 18,
    "date": "2026-10-13",
    "rubric": "Как думают топ-аналитики",
    "title": "Метрика стала решением, хотя за ошибку заплатит другой человек",
    "source": "Heather Douglas",
    "hook": "Представь рабочую сцену: метрика стала решением, хотя за ошибку заплатит другой человек. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Данные требуют ответственности, когда решение влияет на людей",
    "literature": "Heather Douglas, Science, Policy, and the Value-Free Ideal",
    "status": "planned"
  },
  {
    "episode": 19,
    "date": "2026-10-20",
    "rubric": "Как думают топ-аналитики",
    "title": "Роль в системе заставляет человека вести себя как другой пользователь",
    "source": "Sally Haslanger",
    "hook": "Представь рабочую сцену: роль в системе заставляет человека вести себя как другой пользователь. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Социальные роли меняют поведение продукта и команды",
    "literature": "Sally Haslanger, Resisting Reality",
    "status": "planned"
  },
  {
    "episode": 20,
    "date": "2026-10-27",
    "rubric": "Как думают топ-аналитики",
    "title": "Вы улучшили измерение и внезапно изменили сам продукт",
    "source": "Hasok Chang",
    "hook": "Представь рабочую сцену: вы улучшили измерение и внезапно изменили сам продукт. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Измерение не только описывает мир, но и перестраивает практику",
    "literature": "Hasok Chang, Inventing Temperature",
    "status": "planned"
  },
  {
    "episode": 21,
    "date": "2026-11-03",
    "rubric": "Как думают топ-аналитики",
    "title": "Доверие появляется не после слов, а после принятых обязательств",
    "source": "Robert Brandom",
    "hook": "Представь рабочую сцену: доверие появляется не после слов, а после принятых обязательств. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Доверие строится на обязательствах и праве спрашивать основания",
    "literature": "Robert Brandom, Making It Explicit",
    "status": "planned"
  },
  {
    "episode": 22,
    "date": "2026-11-10",
    "rubric": "Как думают топ-аналитики",
    "title": "Компания тонет не в задачах, а в среде информации",
    "source": "Luciano Floridi",
    "hook": "Представь рабочую сцену: компания тонет не в задачах, а в среде информации. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Информация стала средой, в которой живет бизнес",
    "literature": "Luciano Floridi, The Philosophy of Information",
    "status": "planned"
  },
  {
    "episode": 23,
    "date": "2026-11-17",
    "rubric": "Как думают топ-аналитики",
    "title": "Умный человек молчит на встрече, и компания теряет знание",
    "source": "Miranda Fricker",
    "hook": "Представь рабочую сцену: умный человек молчит на встрече, и компания теряет знание. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Знание теряется, когда источнику не дают доверия",
    "literature": "Miranda Fricker, Epistemic Injustice",
    "status": "planned"
  },
  {
    "episode": 24,
    "date": "2026-11-24",
    "rubric": "Как думают топ-аналитики",
    "title": "Запуск выстрелил, но никто не знает почему",
    "source": "Duncan Pritchard",
    "hook": "Представь рабочую сцену: запуск выстрелил, но никто не знает почему. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Успех без понимания может быть удачей, а не знанием",
    "literature": "Duncan Pritchard, Epistemic Luck",
    "status": "planned"
  },
  {
    "episode": 25,
    "date": "2026-12-01",
    "rubric": "Как думают топ-аналитики",
    "title": "То, что сработало в одном рынке, ломается в другом",
    "source": "Nancy Cartwright",
    "hook": "Представь рабочую сцену: то, что сработало в одном рынке, ломается в другом. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Законы работают через условия, а не одинаково везде",
    "literature": "Nancy Cartwright, How the Laws of Physics Lie; Evidence-Based Policy",
    "status": "planned"
  },
  {
    "episode": 26,
    "date": "2026-12-08",
    "rubric": "Как думают топ-аналитики",
    "title": "Клиент решил раньше, чем успел объяснить свое решение",
    "source": "Patricia Churchland",
    "hook": "Представь рабочую сцену: клиент решил раньше, чем успел объяснить свое решение. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Решения связаны с мозгом, привычкой и телесной экономией",
    "literature": "Patricia Churchland, Neurophilosophy; Braintrust",
    "status": "planned"
  },
  {
    "episode": 27,
    "date": "2026-12-15",
    "rubric": "Как думают топ-аналитики",
    "title": "Вы не имеете права утверждать то, чего еще не знаете",
    "source": "Timothy Williamson",
    "hook": "Представь рабочую сцену: вы не имеете права утверждать то, чего еще не знаете. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Утверждение должно соответствовать статусу знания",
    "literature": "Timothy Williamson, Knowledge and Its Limits",
    "status": "planned"
  },
  {
    "episode": 28,
    "date": "2026-12-22",
    "rubric": "Как думают топ-аналитики",
    "title": "Инструмент уже думает вместе с вами, но вы называете его просто софтом",
    "source": "Andy Clark",
    "hook": "Представь рабочую сцену: инструмент уже думает вместе с вами, но вы называете его просто софтом. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Мышление распределено между человеком, инструментом и средой",
    "literature": "Andy Clark, Supersizing the Mind; Natural-Born Cyborgs",
    "status": "planned"
  },
  {
    "episode": 29,
    "date": "2026-12-29",
    "rubric": "Как думают топ-аналитики",
    "title": "Пользователь видит не экран, а возможность действовать",
    "source": "Susanna Siegel",
    "hook": "Представь рабочую сцену: пользователь видит не экран, а возможность действовать. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Восприятие уже содержит интерпретацию ситуации",
    "literature": "Susanna Siegel, The Contents of Visual Experience",
    "status": "planned"
  },
  {
    "episode": 30,
    "date": "2027-01-05",
    "rubric": "Как думают топ-аналитики",
    "title": "Люди доверяют ответу не потому, что он длинный",
    "source": "Jennifer Nagel",
    "hook": "Представь рабочую сцену: люди доверяют ответу не потому, что он длинный. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Мы приписываем знание по сигналам уверенности, доступа и надежности",
    "literature": "Jennifer Nagel, Knowledge: A Very Short Introduction",
    "status": "planned"
  },
  {
    "episode": 31,
    "date": "2027-01-12",
    "rubric": "Как думают топ-аналитики",
    "title": "Лучший сотрудник знает больше, чем может объяснить в регламенте",
    "source": "Michael Polanyi",
    "hook": "Представь рабочую сцену: лучший сотрудник знает больше, чем может объяснить в регламенте. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "В бизнесе много неявного знания, которое нельзя свести к инструкции",
    "literature": "Michael Polanyi, Personal Knowledge; The Tacit Dimension",
    "status": "planned"
  },
  {
    "episode": 32,
    "date": "2027-01-19",
    "rubric": "Как думают топ-аналитики",
    "title": "Вы спорите о доказательствах, но у вас нет схемы аргумента",
    "source": "Stephen Toulmin",
    "hook": "Представь рабочую сцену: вы спорите о доказательствах, но у вас нет схемы аргумента. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Убедительный аргумент требует не просто фактов, а обоснования перехода к выводам",
    "literature": "Stephen Toulmin, The Uses of Argument",
    "status": "planned"
  },
  {
    "episode": 33,
    "date": "2027-01-26",
    "rubric": "Как думают топ-аналитики",
    "title": "Данные похожи на кроссворд: одна ошибка портит все пересечения",
    "source": "Susan Haack",
    "hook": "Представь рабочую сцену: данные похожи на кроссворд: одна ошибка портит все пересечения. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Обоснование знания строится как кроссворд, где доказательства поддерживают друг друга взаимно",
    "literature": "Susan Haack, Evidence and Inquiry",
    "status": "planned"
  },
  {
    "episode": 34,
    "date": "2027-02-02",
    "rubric": "Как думают топ-аналитики",
    "title": "Программа выполняет код, но не понимает смысл бизнеса",
    "source": "John Searle",
    "hook": "Представь рабочую сцену: программа выполняет код, но не понимает смысл бизнеса. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Синтаксиса недостаточно для семантики: имитация понимания не является реальным пониманием",
    "literature": "John Searle, Intentionality; Minds, Brains, and Programs",
    "status": "planned"
  },
  {
    "episode": 35,
    "date": "2027-02-09",
    "rubric": "Как думают топ-аналитики",
    "title": "Вы смотрите на метрики пользователя, но не знаете, каково им быть",
    "source": "Thomas Nagel",
    "hook": "Представь рабочую сцену: вы смотрите на метрики пользователя, но не знаете, каково им быть. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Субъективный опыт пользователя нельзя полностью свести к объективным измерениям",
    "literature": "Thomas Nagel, What Is It Like to Be a Bat?; Mortal Questions",
    "status": "planned"
  },
  {
    "episode": 36,
    "date": "2027-02-16",
    "rubric": "Как думают топ-аналитики",
    "title": "Гипотеза хороша не тем, что подтверждается, а тем, как ее можно опровергнуть",
    "source": "Karl Popper",
    "hook": "Представь рабочую сцену: гипотеза хороша не тем, что подтверждается, а тем, как ее можно опровергнуть. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Научность и проверяемость гипотезы определяются ее опровержимостью",
    "literature": "Karl Popper, The Logic of Scientific Discovery",
    "status": "planned"
  },
  {
    "episode": 37,
    "date": "2027-02-23",
    "rubric": "Как думают топ-аналитики",
    "title": "Команда строит продукт для мира, которого не существует",
    "source": "Nelson Goodman",
    "hook": "Представь рабочую сцену: команда строит продукт для мира, которого не существует. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Мы создаем разные версии мира с помощью описаний, систем и репрезентаций",
    "literature": "Nelson Goodman, Fact, Fiction, and Forecast; Ways of Worldmaking",
    "status": "planned"
  },
  {
    "episode": 38,
    "date": "2027-03-02",
    "rubric": "Как думают топ-аналитики",
    "title": "План основан на вере, а не на расчете вероятности",
    "source": "Frank Ramsey",
    "hook": "Представь рабочую сцену: план основан на вере, а не на расчете вероятности. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Убеждения — это карты, по которым мы действуем, а их истинность проверяется успехом действия",
    "literature": "Frank Ramsey, Foundations of Mathematics and other Logical Essays",
    "status": "planned"
  },
  {
    "episode": 39,
    "date": "2027-03-09",
    "rubric": "Как думают топ-аналитики",
    "title": "Мы спорим о будущем продукта, как будто оно уже где-то записано",
    "source": "Michael Dummett",
    "hook": "Представь рабочую сцену: мы спорим о будущем продукта, как будто оно уже где-то записано. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Смысл утверждения определяется условиями его обоснованности, а не абстрактной истиной",
    "literature": "Michael Dummett, Truth and Other Enigmas",
    "status": "planned"
  },
  {
    "episode": 40,
    "date": "2027-03-16",
    "rubric": "Как думают топ-аналитики",
    "title": "Вы строите бренд для человека, который через год станет другим",
    "source": "Derek Parfit",
    "hook": "Представь рабочую сцену: вы строите бренд для человека, который через год станет другим. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Личная идентичность не так важна, как непрерывность намерений и ценностей",
    "literature": "Derek Parfit, Reasons and Persons",
    "status": "planned"
  },
  {
    "episode": 41,
    "date": "2027-03-23",
    "rubric": "Как думают топ-аналитики",
    "title": "Ваши данные о рынке — это не просто числа, а концептуальные очки",
    "source": "John McDowell",
    "hook": "Представь рабочую сцену: ваши данные о рынке — это не просто числа, а концептуальные очки. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Восприятие мира всегда пронизано нашими понятиями и культурой",
    "literature": "John McDowell, Mind and World",
    "status": "planned"
  },
  {
    "episode": 42,
    "date": "2027-03-30",
    "rubric": "Как думают топ-аналитики",
    "title": "Процессы в компании работают как модули: никто не видит всей картины",
    "source": "Jerry Fodor",
    "hook": "Представь рабочую сцену: процессы в компании работают как модули: никто не видит всей картины. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Мышление модульно, и иногда части системы не знают, что делают другие",
    "literature": "Jerry Fodor, The Modularity of Mind",
    "status": "planned"
  },
  {
    "episode": 43,
    "date": "2027-04-06",
    "rubric": "Как думают топ-аналитики",
    "title": "У вас есть все данные о поведении, но нет понимания опыта клиента",
    "source": "David Chalmers",
    "hook": "Представь рабочую сцену: у вас есть все данные о поведении, но нет понимания опыта клиента. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Трудная проблема сознания: функционального описания недостаточно для понимания субъективности",
    "literature": "David Chalmers, The Conscious Mind",
    "status": "planned"
  },
  {
    "episode": 44,
    "date": "2027-04-13",
    "rubric": "Как думают топ-аналитики",
    "title": "Функция продукта — это не то, что он делает сейчас, а то, для чего он выжил",
    "source": "Ruth Millikan",
    "hook": "Представь рабочую сцену: функция продукта — это не то, что он делает сейчас, а то, для чего он выжил. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Биологические функции и цели определяются историей успеха и воспроизводства",
    "literature": "Ruth Millikan, Language, Thought, and Other Biological Categories",
    "status": "planned"
  },
  {
    "episode": 45,
    "date": "2027-04-20",
    "rubric": "Как думают топ-аналитики",
    "title": "Бизнес-цель не может быть оправданием, если она ломает базовые ценности",
    "source": "Philippa Foot",
    "hook": "Представь рабочую сцену: бизнес-цель не может быть оправданием, если она ломает базовые ценности. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Добродетели — это не правила, а необходимые качества для процветания сообщества",
    "literature": "Philippa Foot, Virtues and Vices",
    "status": "planned"
  },
  {
    "episode": 46,
    "date": "2027-04-27",
    "rubric": "Как думают топ-аналитики",
    "title": "Смысл ваших задач зависит от рынка больше, чем от ваших мыслей",
    "source": "Tyler Burge",
    "hook": "Представь рабочую сцену: смысл ваших задач зависит от рынка больше, чем от ваших мыслей. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Содержание мыслей определяется внешней средой и социальными институтами",
    "literature": "Tyler Burge, Individualism and the Mental",
    "status": "planned"
  },
  {
    "episode": 47,
    "date": "2027-05-04",
    "rubric": "Как думают топ-аналитики",
    "title": "Вы ссылаетесь на проблему, которой на самом деле нет в данных",
    "source": "Gareth Evans",
    "hook": "Представь рабочую сцену: вы ссылаетесь на проблему, которой на самом деле нет в данных. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Сингулярные мысли требуют реального информационного канала к объекту",
    "literature": "Gareth Evans, The Varieties of Reference",
    "status": "planned"
  },
  {
    "episode": 48,
    "date": "2027-05-11",
    "rubric": "Как думают топ-аналитики",
    "title": "Ваши метрики качества — это просто прилагательные без существительного",
    "source": "Peter Geach",
    "hook": "Представь рабочую сцену: ваши метрики качества — это просто прилагательные без существительного. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Добро и качество всегда относительны к роду объекта: хороший нож не равен хорошему человеку",
    "literature": "Peter Geach, Good and Evil",
    "status": "planned"
  },
  {
    "episode": 49,
    "date": "2027-05-18",
    "rubric": "Как думают топ-аналитики",
    "title": "Мы думаем, что управляем проектом, хотя все уже определено процессами",
    "source": "Peter van Inwagen",
    "hook": "Представь рабочую сцену: мы думаем, что управляем проектом, хотя все уже определено процессами. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Проблема свободы воли в мире, где каждое событие имеет причину",
    "literature": "Peter van Inwagen, An Essay on Free Will",
    "status": "planned"
  },
  {
    "episode": 50,
    "date": "2027-05-25",
    "rubric": "Как думают топ-аналитики",
    "title": "Ваша уверенность в успехе — это базовая установка, а не вывод из данных",
    "source": "Alvin Plantinga",
    "hook": "Представь рабочую сцену: ваша уверенность в успехе — это базовая установка, а не вывод из данных. Это не абстрактная философия, а момент, где команда теряет ясность.",
    "thesis": "Некоторые убеждения рациональны без доказательств, если они порождены надежным механизмом",
    "literature": "Alvin Plantinga, Warranted Christian Belief; Warrant and Proper Function",
    "status": "planned"
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

const state = {
  search: "",
  view: "overview",
  calendarTab: "pipeline"
};

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
  return episodes.filter(isMatch).filter(item => {
    if (state.view === "calendar") {
      return state.calendarTab === "archive" ? item.status === "released" : item.status !== "released";
    }
    return true;
  });
}

function getNextEpisodes() {
  return episodes.filter(item => item.status === "planned").slice(0, 5);
}

function renderStats() {
  const releasedCount = episodes.filter(e => e.status === "released").length;
  const plannedCount = episodes.filter(e => e.status === "planned").length;
  const philosopherCount = new Set(episodes.map(e => e.source)).size;

  const dynamicStats = [
    ["Выпущено", releasedCount, "видео"],
    ["В пайплайне", plannedCount, "видео"],
    ["Философы", philosopherCount, "в индексе"]
  ];

  els.stats.innerHTML = dynamicStats.map(([label, value, note]) => `
    <article class="stat-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${note}</small>
    </article>
  `).join("");
}

function renderNextEpisodes() {
  const upcoming = getNextEpisodes();
  if (upcoming.length === 0) {
    els.nextEpisodes.innerHTML = "<p class='empty-note'>Все запланированные выпуски вышли.</p>";
    return;
  }
  els.nextEpisodes.innerHTML = upcoming.map((item) => `
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
    const type = item.rubric.includes("аналитики") ? "analyst" : "business";
    return `
      <tr>
        <td>${item.episode}</td>
        <td><span class="rubric-pill ${type}">${item.rubric}</span></td>
        <td>
          <a href="https://youtube.com/@dmitrii.efremov?si=kmKibTcmPNlJIY-5" target="_blank" class="episode-title-link"><strong>${item.title}</strong></a>
          <small class="table-note">${item.hook || item.thesis}</small>
        </td>
        <td>${item.source}</td>
        <td><span class="status-pill ${item.status}">${item.status}</span></td>
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
    state.view = button.dataset.view;
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`#${button.dataset.view}`).classList.add("active");
    renderAll();
  });
});

document.body.addEventListener("click", (event) => {
  const tabBtn = event.target.closest(".segment");
  if (tabBtn && tabBtn.parentElement.classList.contains("calendar-tabs")) {
    state.calendarTab = tabBtn.dataset.tab;
    document.querySelectorAll(".calendar-tabs .segment").forEach(s => s.classList.remove("active"));
    tabBtn.classList.add("active");
    renderCalendar();
  }
});

els.globalSearch.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderCalendar();
  renderTiles(els.philosopherTiles, episodes);
});

document.querySelector("#addTaskBtn").addEventListener("click", () => {
  const taskText = document.querySelector("#quickTask").value.trim();
  if (!taskText) return;

  const date = new Date().toISOString().split("T")[0];
  const command = `node 00-system/add-task.js "${taskText}"`;

  copyCommand(command);
  alert(`Команда для добавления задачи скопирована!\n\n${command}\n\nВыполните её в терминале.`);
  document.querySelector("#quickTask").value = "";
});

document.body.addEventListener("click", (event) => {
  const command = event.target.closest("[data-command]");
  if (command) copyCommand(command.dataset.command);

  const copy = event.target.closest("[data-copy]");
  if (copy) copyCommand(copy.dataset.copy);
});

renderAll();
