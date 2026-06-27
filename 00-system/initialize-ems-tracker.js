/**
 * EMS Tracker Initialization Script
 * Deploys the Linear workspace infrastructure from scratch
 */

const { getTeams, getWorkflowStates, getLabels, createWorkflowState, createLabel } = require("./linear-client");

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
    const existingStates = await getWorkflowStates(teamId);

    const statesToCreate = [
      { name: "Customer Wishes", type: "backlog", color: "#f2c94c" },
      { name: "Todo: AI-Agents", type: "unstarted", color: "#56ccf2" }
    ];

    for (const stateData of statesToCreate) {
      if (existingStates.find(s => s.name === stateData.name)) {
        console.log(`⚠️ State '${stateData.name}' already exists. Skipping.`);
        continue;
      }
      try {
        const state = await createWorkflowState({
          name: stateData.name,
          type: stateData.type,
          teamId,
          color: stateData.color
        });
        console.log(`✅ Created State: ${state.name} (${state.id})`);
      } catch (err) {
        if (err.message.toLowerCase().includes("duplicate") || err.message.toLowerCase().includes("already exists")) {
          console.log(`⚠️ State '${stateData.name}' already exists (API reported). Skipping.`);
        } else {
          throw err;
        }
      }
    }

    // 3. Create Labels
    console.log("Creating agent labels...");
    const existingLabels = await getLabels();

    const labels = [
      { name: "#agent-backend", color: "#27ae60" },
      { name: "#agent-frontend", color: "#2f80ed" },
      { name: "#agent-philosophy", color: "#9b51e0" }
    ];

    for (const labelData of labels) {
      if (existingLabels.find(l => l.name === labelData.name)) {
        console.log(`⚠️ Label '${labelData.name}' already exists. Skipping.`);
        continue;
      }
      try {
        const label = await createLabel({
          name: labelData.name,
          color: labelData.color,
          teamId
        });
        console.log(`✅ Created Label: ${label.name} (${label.id})`);
      } catch (err) {
        if (err.message.toLowerCase().includes("duplicate") || err.message.toLowerCase().includes("already exists")) {
          console.log(`⚠️ Label '${labelData.name}' already exists (API reported). Skipping.`);
        } else {
          throw err;
        }
      }
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
