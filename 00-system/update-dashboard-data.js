const fs = require("fs");
const path = require("path");

function parseCSV(filePath) {
    const content = fs.readFileSync(filePath, "utf8");
    const lines = content.split("\n").filter(line => line.trim());
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

const speakingPlans = parseCSV("06-content/youtube-episode-speaking-plans-2026-2027.csv");

const appEpisodes = speakingPlans.map(p => ({
    episode: parseInt(p.episode),
    date: p.date,
    rubric: p.rubric,
    title: p.title,
    source: p.source,
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
  ["Философы", "50", "аналитическая традиция"]
];`);

// Update philosophers filter
appJs = appJs.replace(/const philosophers = episodes;/, `const philosophers = episodes;`);
appJs = appJs.replace(/const metrics = \[\];/, `const metrics = [];`);

// Update renderCalendar to show status
appJs = appJs.replace(/<td><span class="status-pill">planned<\/span><\/td>/, `<td><span class="status-pill \${item.status}">\${item.status}</span></td>`);

// Update renderStats to handle status properly
appJs = appJs.replace(/const philosophers = episodes;/, `const philosophers = episodes;`);

fs.writeFileSync(appJsPath, appJs, "utf8");

// Update index.html
let indexHtml = fs.readFileSync("dashboard/index.html", "utf8");
indexHtml = indexHtml.replace(/37 выпусков/g, "50 выпусков");
indexHtml = indexHtml.replace(/37 выпусков/g, "50 выпусков"); // second occurrence
fs.writeFileSync("dashboard/index.html", indexHtml, "utf8");

console.log("Updated dashboard/app.js and dashboard/index.html with new content.");
