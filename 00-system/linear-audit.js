/**
 * Linear Workspace Audit Script
 * Logs all infrastructure entities to help with remote diagnostics.
 */

const { getTeams, getWorkflowStates, getLabels } = require("./linear-client");

async function main() {
  console.log("🔍 Starting Linear Workspace Audit...");

  try {
    const teams = await getTeams();
    console.log(`\nTeams Found (${teams.length}):`);
    for (const team of teams) {
      console.log(`- [${team.id}] ${team.name} (${team.key})`);

      const states = await getWorkflowStates(team.id);
      console.log(`  Workflow States (${states.length}):`);
      for (const state of states) {
        console.log(`    * [${state.id}] ${state.name} (${state.type})`);
      }
    }

    const labels = await getLabels();
    console.log(`\nGlobal Issue Labels (${labels.length}):`);
    for (const label of labels) {
      console.log(`  * [${label.id}] ${label.name}`);
    }

    console.log("\n✅ Audit complete.");
  } catch (error) {
    console.error("\n❌ Audit Failed:", error.message);
    process.exit(1);
  }
}

main();
