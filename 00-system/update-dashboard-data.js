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

    const appEpisodes = episodes.map(p => ({
        episode: p.episode,
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

    console.log("Updated dashboard/app.js and dashboard/index.html with data from JSON database.");
}

if (require.main === module) {
    updateDashboard();
}

if (require.main === module) {
    updateDashboard();
}

module.exports = { updateDashboard };
// Update index.html
let indexHtml = fs.readFileSync("dashboard/index.html", "utf8");
indexHtml = indexHtml.replace(/\d+ выпусков/g, `${appEpisodes.length} выпусков`);
fs.writeFileSync("dashboard/index.html", indexHtml, "utf8");

module.exports = { updateDashboard };
