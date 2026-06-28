const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const CHANNEL_ID = "UCard3oH_eFAxZfdrCcwJjxA";
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const OUTPUT_FILE = path.join(__dirname, "..", "06-content", "real-youtube-videos.json");

function fetchFeed() {
    try {
        console.log(`Fetching feed from ${FEED_URL}...`);
        const xml = execSync(`curl -s "${FEED_URL}"`, { encoding: "utf8" });
        return xml;
    } catch (error) {
        console.error("Error fetching YouTube feed:", error.message);
        return null;
    }
}

function parseFeed(xml) {
    const entries = [];
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    let match;

    while ((match = entryRegex.exec(xml)) !== null) {
        const content = match[1];

        const videoIdMatch = content.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
        const titleMatch = content.match(/<title>([^<]+)<\/title>/);
        const linkMatch = content.match(/<link [^>]*href="([^"]+)"/);
        const publishedMatch = content.match(/<published>([^<]+)<\/published>/);
        const descriptionMatch = content.match(/<media:description>([\s\S]*?)<\/media:description>/);

        if (videoIdMatch && titleMatch) {
            entries.push({
                videoId: videoIdMatch[1],
                title: titleMatch[1].trim(),
                link: linkMatch ? linkMatch[1] : `https://www.youtube.com/watch?v=${videoIdMatch[1]}`,
                published: publishedMatch ? publishedMatch[1] : null,
                description: descriptionMatch ? descriptionMatch[1].trim() : ""
            });
        }
    }

    return entries;
}

function main() {
    const xml = fetchFeed();
    if (!xml) return;

    const videos = parseFeed(xml);
    console.log(`Parsed ${videos.length} videos.`);

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(videos, null, 2), "utf8");
    console.log(`Saved video data to ${OUTPUT_FILE}`);
}

if (require.main === module) {
    main();
}
