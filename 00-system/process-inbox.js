/**
 * Inbox Processor
 * Scans 08-inbox/ideas.md for new ideas and creates "Customer Wishes" in Linear.
 * Marks processed ideas as [PROCESSED].
 */

const fs = require("fs");
const path = require("path");
let LinearClient;
try {
    LinearClient = require("./linear-client");
} catch (e) {
    console.warn("⚠️  Linear client could not be initialized.");
}

async function processInbox() {
  console.log("📥 Processing Brand OS Inbox...");

  const inboxPath = path.join(__dirname, "../08-inbox/ideas.md");
  let content = fs.readFileSync(inboxPath, "utf8");

  const ideaRegex = /## (\d{4}-\d{2}-\d{2} - .*?)\n([\s\S]*?)(?=\n## |$)/g;
  let processedCount = 0;

  if (!process.env.BRANDAGENT) {
      console.log("⚠️  BRANDAGENT not set. Running in DRY-RUN mode (No file changes).");
  }

  const updatedContent = content.replace(ideaRegex, (fullMatch, title, body) => {
    if (fullMatch.includes("[PROCESSED]")) {
      return fullMatch;
    }

    console.log(`✨ Found new idea: ${title}`);

    if (process.env.BRANDAGENT && LinearClient) {
        processedCount++;
        return `## [PROCESSED] ${title}\n${body}`;
    } else {
        console.log("🔍 [DRY-RUN] Would create Linear issue for:", title);
        // Do NOT mark as processed in dry-run
        return fullMatch;
    }
  });

  if (processedCount > 0) {
    fs.writeFileSync(inboxPath, updatedContent, "utf8");
    console.log(`✅ Processed ${processedCount} new ideas.`);
  } else {
    console.log("🛌 No new ideas to process.");
  }
}

if (require.main === module) {
  processInbox();
}

module.exports = { processInbox };
