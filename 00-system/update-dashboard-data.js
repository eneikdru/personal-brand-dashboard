const fs = require("fs");
const path = require("path");

/**
 * Updates the dashboard/app.js with data from the JSON database.
 */
function updateDashboard() {
  console.log("Updating Dashboard data...");
  const episodesPath = path.join(__dirname, "../06-content/youtube-episodes.json");
  const appJsPath = path.join(__dirname, "../dashboard/app.js");
  const indexHtmlPath = path.join(__dirname, "../dashboard/index.html");

  if (!fs.existsSync(episodesPath)) {
    console.error("❌ episodes.json not found");
    return;
  }

  const episodes = JSON.parse(fs.readFileSync(episodesPath, "utf8"));

  const appEpisodes = episodes.map(p => ({
    episode: p.episode,
    date: p.date,
    rubric: p.rubric,
    title: p.title,
    source: p.source,
    hook: p.hook || `Представь рабочую сцену: ${p.title.toLowerCase()}. Это не абстрактная философия, а момент, где команда теряет ясность.`,
    thesis: p.thesis,
    literature: p.literature,
    status: p.status
  }));

  let appJs = fs.readFileSync(appJsPath, "utf8");

  // Update episodes array
  appJs = appJs.replace(/const episodes = \[[\s\S]*?\];/, `const episodes = ${JSON.stringify(appEpisodes, null, 2)};`);

  fs.writeFileSync(appJsPath, appJs, "utf8");

  // Update index.html counts if any
  let indexHtml = fs.readFileSync(indexHtmlPath, "utf8");
  indexHtml = indexHtml.replace(/\d+ выпусков/g, `${appEpisodes.length} выпусков`);
  fs.writeFileSync(indexHtmlPath, indexHtml, "utf8");

  console.log("✅ Updated dashboard/app.js and dashboard/index.html");
}

if (require.main === module) {
  updateDashboard();
}

module.exports = { updateDashboard };
