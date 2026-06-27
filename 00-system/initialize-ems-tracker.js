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

    // Prioritize "Eneikdru" team
    const team = teams.find(t => t.name === "Eneikdru") || teams[0];
    const teamId = team.id;
    console.log(`Using Team: ${team.name} (${teamId})`);
    if (teams.length > 1) {
      console.log(`Available teams: ${teams.map(t => t.name).join(", ")}`);
    }

    // 2. Create Workflow States
    console.log("Checking existing workflow states...");
    const existingStates = await getWorkflowStates(teamId);
    console.log(`Current states: ${existingStates.map(s => s.name).join(", ")}`);

    const statesToCreate = [
      { name: "Customer Wishes", type: "backlog", color: "#f2c94c" },
      { name: "Todo: AI-Agents", type: "unstarted", color: "#56ccf2" }
    ];

    for (const stateData of statesToCreate) {
      const match = existingStates.find(s => s.name.toLowerCase() === stateData.name.toLowerCase());
      if (match) {
        console.log(`⚠️ State '${stateData.name}' already exists as '${match.name}'. Skipping.`);
        continue;
      }
      try {
        console.log(`Attempting to create state: ${stateData.name}...`);
        const state = await createWorkflowState({
          name: stateData.name,
          type: stateData.type,
          teamId,
          color: stateData.color
        });
        console.log(`✅ Created State: ${state.name} (${state.id})`);
      } catch (err) {
        if (err.message.toLowerCase().includes("duplicate") || err.message.toLowerCase().includes("already exists")) {
          console.log(`⚠️ State '${stateData.name}' already exists (API reported duplicate). Skipping.`);
        } else {
          throw err;
        }
      }
    }

    // 3. Create Labels
    console.log("Checking existing labels...");
    const existingLabels = await getLabels();
    console.log(`Current labels: ${existingLabels.map(l => l.name).join(", ")}`);

    const labelsToCreate = [
      { name: "#agent-backend", color: "#27ae60" },
      { name: "#agent-frontend", color: "#2f80ed" },
      { name: "#agent-philosophy", color: "#9b51e0" }
    ];

    for (const labelData of labelsToCreate) {
      const match = existingLabels.find(l => l.name.toLowerCase() === labelData.name.toLowerCase());
      if (match) {
        console.log(`⚠️ Label '${labelData.name}' already exists as '${match.name}'. Skipping.`);
        continue;
      }
      try {
        console.log(`Attempting to create label: ${labelData.name}...`);
        const label = await createLabel({
          name: labelData.name,
          color: labelData.color,
          teamId
        });
        console.log(`✅ Created Label: ${label.name} (${label.id})`);
      } catch (err) {
        if (err.message.toLowerCase().includes("duplicate") || err.message.toLowerCase().includes("already exists")) {
          console.log(`⚠️ Label '${labelData.name}' already exists (API reported duplicate). Skipping.`);
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
