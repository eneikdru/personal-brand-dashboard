/**
 * CLI utility to create Linear issues
 * Usage: node 00-system/create-linear-issue.js "Title" "Description" "TeamID"
 */

const { createIssue } = require("./linear-client");

async function main() {
  const args = process.argv.slice(2);

  if (args.length < 1) {
    console.log("Usage: node 00-system/create-linear-issue.js \"Title\" [\"Description\"] [\"TeamID\"]");
    process.exit(1);
  }

  const title = args[0];
  const description = args[1] || "";
  const teamId = args[2]; // If undefined, Linear might use default or throw error if not provided

  console.log(`Creating issue: "${title}"...`);

  try {
    const input = { title, description };
    if (teamId) input.teamId = teamId;

    const issue = await createIssue(input);

    console.log("✅ Issue created successfully!");
    console.log(`ID: ${issue.identifier}`);
    console.log(`URL: ${issue.url}`);
  } catch (error) {
    console.error("❌ Error creating issue:", error.message);
    process.exit(1);
  }
}

main();
