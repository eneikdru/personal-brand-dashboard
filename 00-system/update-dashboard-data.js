const fs = require("fs");
const path = require("path");

function updateDashboard() {
    const episodes = JSON.parse(fs.readFileSync("06-content/youtube-episodes.json", "utf8"));

    const appEpisodes = episodes.map(p => ({
        episode: p.episode,
function parseCSV(filePath) {
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, "utf8");
    const lines = content.split("\n").filter(line => line.trim());
    if (lines.length === 0) return [];
    const headers = lines[0].split(",");

    return lines.slice(1).map(line => {
        const values = [];
        let current = "";
        let inQuotes = false;
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (char === '"' && line[i+1] === '"') {
                current += '"';
                i++;
            } else if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === "," && !inQuotes) {
                values.push(current);
                current = "";
            } else {
                current += char;
            }
        }
        values.push(current);

        const obj = {};
        headers.forEach((header, index) => {
            obj[header] = values[index];
        });
        return obj;
    });
}

const nameMapping = {
    "Gottlob Frege": "Готтлоб Фреге",
    "G. E. Moore": "Мур",
    "Bertrand Russell": "Рассел",
    "Ludwig Wittgenstein": "Витгенштейн",
    "Rudolf Carnap": "Карнап",
    "A. J. Ayer": "Айер",
    "Gilbert Ryle": "Райл",
    "J. L. Austin": "Остин",
    "P. F. Strawson": "Стросон",
    "H. P. Grice": "Грайс",
    "W. V. O. Quine": "Куайн",
    "Wilfrid Sellars": "Селларс",
    "Donald Davidson": "Дэвидсон",
    "Saul Kripke": "Крипке",
    "Hilary Putnam": "Патнэм",
    "David Lewis": "Льюис",
    "G. E. M. Anscombe": "Энском",
    "Heather Douglas": "Дуглас",
    "Sally Haslanger": "Хаслангер",
    "Hasok Chang": "Чанг",
    "Robert Brandom": "Брэндом",
    "Luciano Floridi": "Флориди",
    "Miranda Fricker": "Фрикер",
    "Duncan Pritchard": "Притчард",
    "Nancy Cartwright": "Картрайт",
    "Patricia Churchland": "Черчленд",
    "Timothy Williamson": "Уильямсон",
    "Andy Clark": "Кларк",
    "Susanna Siegel": "Сигел",
    "Jennifer Nagel": "Нэгел",
    "Michael Polanyi": "Полани",
    "Stephen Toulmin": "Тулмин",
    "Susan Haack": "Хак",
    "John Searle": "Серл",
    "Thomas Nagel": "Нагель",
    "Karl Popper": "Поппер",
    "Nelson Goodman": "Гудмен",
    "Frank Ramsey": "Рамсей",
    "Michael Dummett": "Даммит",
    "Derek Parfit": "Парфит",
    "John McDowell": "Макдауэлл",
    "Jerry Fodor": "Фодор",
    "David Chalmers": "Чалмерс",
    "Ruth Millikan": "Милликен",
    "Philippa Foot": "Фут",
    "Tyler Burge": "Бердж",
    "Gareth Evans": "Эванс",
    "Peter Geach": "Гич",
    "Peter van Inwagen": "ин Ваген",
    "Alvin Plantinga": "Плантинга"
};

const speakingPlans = parseCSV("06-content/youtube-episode-speaking-plans-2026-2027.csv");
const realVideos = fs.existsSync("06-content/real-youtube-videos.json")
    ? JSON.parse(fs.readFileSync("06-content/real-youtube-videos.json", "utf8"))
    : [];

function findRealVideo(plan) {
    const planDate = new Date(plan.date);
    const source = plan.source;
    const ruName = nameMapping[source] || source;

    return realVideos.find(v => {
        const videoDate = new Date(v.published);
        const daysDiff = Math.abs((videoDate - planDate) / (1000 * 60 * 60 * 24));

        const titleLower = v.title.toLowerCase();
        const descLower = v.description.toLowerCase();

        const matchesSource = titleLower.includes(source.toLowerCase()) ||
                             descLower.includes(source.toLowerCase()) ||
                             titleLower.includes(ruName.toLowerCase()) ||
                             descLower.includes(ruName.toLowerCase());

        // Large window for catching existing videos that might be misplaced in the calendar
        return matchesSource && daysDiff <= 300;
    });
}

const appEpisodes = speakingPlans.map(p => {
    const realVideo = findRealVideo(p);

    const episode = {
        episode: parseInt(p.episode),
        date: p.date,
        rubric: p.rubric,
        title: p.title,
        source: p.source,
        hook: `Представь рабочую сцену: ${p.title.toLowerCase()}. Это не абстрактная философия, а момент, где команда теряет ясность.`,
        thesis: p.thesis,
        literature: p.literature,
        status: p.status
    }));

    const appJsPath = "dashboard/app.js";
    let appJs = fs.readFileSync(appJsPath, "utf8");

    // Update episodes array
    appJs = appJs.replace(/const episodes = \[[\s\S]*?\];/, `const episodes = ${JSON.stringify(appEpisodes, null, 2)};`);

    // Update stats
    appJs = appJs.replace(/const stats = \[[\s\S]*?\];/, `const stats = [
  ["Выпущено", "${appEpisodes.filter(e => e.status === 'released').length}", "видео"],
  ["Запланировано", "${appEpisodes.filter(e => e.status === 'planned').length}", "видео"],
  ["Философы", "${appEpisodes.length}", "аналитическая традиция"]
];`);

    fs.writeFileSync(appJsPath, appJs, "utf8");

    // Update index.html
    let indexHtml = fs.readFileSync("dashboard/index.html", "utf8");
    indexHtml = indexHtml.replace(/\d+ выпусков/g, `${appEpisodes.length} выпусков`);
    fs.writeFileSync("dashboard/index.html", indexHtml, "utf8");
        hook: p.hook,
        thesis: p.thesis,
        literature: p.literature,
        status: p.status,
        url: `https://youtube.com/@dmitrii.efremov` // default
    };

    if (realVideo) {
        episode.title = realVideo.title;
        episode.url = realVideo.link;
        episode.status = "released";
        episode.realPublishedDate = realVideo.published.split("T")[0];
        if (realVideo.description) {
            const firstPara = realVideo.description.split("\n\n")[0].replace(/\n/g, " ");
            episode.hook = firstPara;
        }
    }

    return episode;
});

const appJsPath = "dashboard/app.js";
let appJs = fs.readFileSync(appJsPath, "utf8");

// Update episodes array
appJs = appJs.replace(/const episodes = \[[\s\S]*?\];/, `const episodes = ${JSON.stringify(appEpisodes, null, 2)};`);

// Update stats
const releasedCount = appEpisodes.filter(e => e.status === 'released').length;
appJs = appJs.replace(/const stats = \[[\s\S]*?\];/, `const stats = [
  ["Выпущено", "${releasedCount}", "видео"],
  ["Запланировано", "${appEpisodes.length - releasedCount}", "видео"],
  ["Философы", "${appEpisodes.length}", "аналитическая традиция"]
];`);

// Fix URLs in render functions - make them dynamic
appJs = appJs.replace(/href="https:\/\/youtube\.com\/@dmitrii\.efremov\?si=kmKibTcmPNlJIY-5"/g, 'href="${item.url}"');

    console.log("Updated dashboard/app.js and dashboard/index.html with data from JSON database.");
}

if (require.main === module) {
    updateDashboard();
}

module.exports = { updateDashboard };
// Update index.html
let indexHtml = fs.readFileSync("dashboard/index.html", "utf8");
indexHtml = indexHtml.replace(/\d+ выпусков/g, `${appEpisodes.length} выпусков`);
fs.writeFileSync("dashboard/index.html", indexHtml, "utf8");

console.log(`Updated dashboard/app.js and dashboard/index.html with ${releasedCount} real videos matched.`);
