/**
 * EMS Tracker Initialization Script
 * Deploys the Linear workspace infrastructure from scratch
 */

const { getTeams, createWorkflowState, createLabel } = require("./linear-client");

async function main() {
  console.log("🚀 Initializing EMS Tracker infrastructure...");

  try {
    // 1. Fetch Team ID
    const teams = await getTeams();
    if (teams.length === 0) {
      throw new Error("No teams found in the Linear workspace.");
    }
    const teamId = teams[0].id;
    console.log(`Found Team: ${teams[0].name} (${teamId})`);

    // 2. Create Workflow States
    console.log("Creating workflow states...");

    const wishesState = await createWorkflowState({
      name: "Customer Wishes",
      type: "backlog",
      teamId,
      color: "#f2c94c" // Yellow
    });
    console.log(`✅ Created State: ${wishesState.name} (${wishesState.id})`);

    const todoState = await createWorkflowState({
      name: "Todo: AI-Agents",
      type: "unstarted",
      teamId,
      color: "#56ccf2" // Blue
    });
    console.log(`✅ Created State: ${todoState.name} (${todoState.id})`);

    // 3. Create Labels
    console.log("Creating agent labels...");

    const labels = [
      { name: "#agent-backend", color: "#27ae60" },
      { name: "#agent-frontend", color: "#2f80ed" },
      { name: "#agent-philosophy", color: "#9b51e0" }
    ];

    for (const labelData of labels) {
      const label = await createLabel({
        name: labelData.name,
        color: labelData.color,
        teamId
      });
      console.log(`✅ Created Label: ${label.name} (${label.id})`);
    }

    console.log("\n✨ EMS Tracker initialization complete!");
    console.log("The workspace is now structured according to Lean/Six Sigma/TOC laws.");

  } catch (error) {
    if (error.message.includes("Authentication required") || error.message.includes("BRANDAGENT")) {
      console.error("\n❌ Initialization Failed: Authentication Error.");
      console.error("Please ensure the 'BRANDAGENT' environment variable is set with a valid Linear API token.");
    } else {
      console.error("\n❌ Error during initialization:", error.message);
    }
    process.exit(1);
  }
}

main();
