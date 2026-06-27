/**
 * CLI utility to create Linear issues
 * Usage: node 00-system/create-linear-issue.js --title "Title" [--description "Description"] [--teamId "ID"] [--labelIds "ID1,ID2"] [--stateId "ID"]
 */

const { createIssue } = require("./linear-client");

function parseArgs(args) {
  const params = {};
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith("--")) {
      const key = arg.slice(2);
      const value = args[i + 1];
      if (value && !value.startsWith("--")) {
        params[key] = value;
        i++;
      }
    } else if (i === 0 && !params.title) {
      // Legacy positional support for title
      params.title = arg;
    } else if (i === 1 && !params.description) {
      // Legacy positional support for description
      params.description = arg;
    } else if (i === 2 && !params.teamId) {
      // Legacy positional support for teamId
      params.teamId = arg;
    }
  }
  return params;
}

async function main() {
  const args = process.argv.slice(2);
  const params = parseArgs(args);

  if (!params.title) {
    console.log("Usage: node 00-system/create-linear-issue.js --title \"Title\" [--description \"Description\"] [--teamId \"ID\"] [--labelIds \"ID1,ID2\"] [--stateId \"ID\"]");
    process.exit(1);
  }

  console.log(`Creating issue: "${params.title}"...`);

  try {
    const input = {
      title: params.title,
      description: params.description || ""
    };

    if (params.teamId) input.teamId = params.teamId;
    if (params.stateId) input.stateId = params.stateId;
    if (params.labelIds) {
      input.labelIds = params.labelIds.split(",").map(s => s.trim());
    }

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
