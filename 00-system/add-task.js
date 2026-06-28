const fs = require("fs");
const path = require("path");

/**
 * CLI tool to add items to the Brand OS inbox.
 * Usage: node 00-system/add-task.js "Your task description"
 */

const inboxPath = path.join(__dirname, "../08-inbox/ideas.md");

function addTask(description) {
  if (!description) {
    console.error("Error: Task description is required.");
    process.exit(1);
  }

  const date = new Date().toISOString().split("T")[0];
  const title = description.split("\n")[0].substring(0, 50);

  const entry = `
## ${date} - ${title}

${description}

Связать с:

- направление:
- канал: dashboard
- метрика успеха:
- статус: draft
`;

  try {
    fs.appendFileSync(inboxPath, entry);
    console.log(`✅ Task successfully added to ${inboxPath}`);
  } catch (error) {
    console.error(`❌ Failed to add task: ${error.message}`);
    process.exit(1);
  }
}

const args = process.argv.slice(2);
addTask(args[0]);
