const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const contentDir = path.join(root, "06-content");

function csvEscape(value) {
  const text = String(value);
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
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

function rebuild() {
  const episodes = JSON.parse(fs.readFileSync(path.join(contentDir, "youtube-episodes.json"), "utf8"));
  const plans = episodes.map(planFor);

  // 1. Calendar CSV
  const calendarCsv = [
    "episode,date,weekday,rubric,title,source,status",
    ...episodes.map((item) => [item.episode, item.date, "Tuesday", item.rubric, item.title, item.source, item.status].map(csvEscape).join(",")),
  ].join("\n") + "\n";
  fs.writeFileSync(path.join(contentDir, "youtube-publication-calendar-2026-2027.csv"), calendarCsv, "utf8");

  // 2. Calendar MD
  let calendarMd = `# YouTube-календарь публикаций: 2026-2027

Статус: \`active\`

Период: с 2026-06-16 по 2027-05-25.
Ритм: каждый вторник.
Объем: ${episodes.length} выпусков (Аналитическая философия бизнеса).

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

  console.log(`Rebuilt ${episodes.length} episodes for Business Philosophy brand from JSON database.`);
}

if (require.main === module) {
  rebuild();
}

module.exports = { rebuild };
