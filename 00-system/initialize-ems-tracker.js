/**
 * EMS Tracker Initialization Script
 * Deploys the Linear workspace infrastructure from scratch
 */

const {
  getTeams,
  getWorkflowStates,
  getLabels,
  createWorkflowState,
  createLabel
} = require("./linear-client");

async function main() {
  console.log("🚀 Initializing EMS Tracker infrastructure...");

  try {
    // 1. Fetch Team ID
    const teams = await getTeams();
    if (teams.length === 0) {
      throw new Error("No teams found in the Linear workspace.");
    }

    // Prioritize 'Eneikdru' team if it exists
    const team = teams.find(t => t.name === "Eneikdru") || teams[0];
    const teamId = team.id;
    console.log(`Found Team: ${team.name} (${teamId})`);

    // 2. Fetch Existing States and Labels
    const existingStates = await getWorkflowStates(teamId);
    const existingLabels = await getLabels();

    // 3. Create Workflow States
    console.log("Checking workflow states...");

    const statesToCreate = [
      { name: "Customer Wishes", type: "backlog", color: "#f2c94c" },
      { name: "Todo: AI-Agents", type: "unstarted", color: "#56ccf2" }
    ];

    for (const stateData of statesToCreate) {
      const existing = existingStates.find(s => s.name === stateData.name);
      if (existing) {
        console.log(`ℹ️ State already exists: ${stateData.name} (${existing.id})`);
      } else {
        try {
          const newState = await createWorkflowState({
            ...stateData,
            teamId
          });
          console.log(`✅ Created State: ${newState.name} (${newState.id})`);
        } catch (error) {
          if (error.message.toLowerCase().includes("duplicate") || error.message.toLowerCase().includes("already exists")) {
            console.log(`ℹ️ State ${stateData.name} reported as duplicate by API, skipping.`);
          } else {
            throw error;
          }
        }
      }
    }

    // 4. Create Labels
    console.log("Checking agent labels...");

    const labelsToCreate = [
      { name: "#agent-backend", color: "#27ae60" },
      { name: "#agent-frontend", color: "#2f80ed" },
      { name: "#agent-philosophy", color: "#9b51e0" }
    ];

    for (const labelData of labelsToCreate) {
      const existing = existingLabels.find(l => l.name === labelData.name);
      if (existing) {
        console.log(`ℹ️ Label already exists: ${labelData.name} (${existing.id})`);
      } else {
        try {
          const newLabel = await createLabel({
            ...labelData,
            teamId
          });
          console.log(`✅ Created Label: ${newLabel.name} (${newLabel.id})`);
        } catch (error) {
          if (error.message.toLowerCase().includes("duplicate") || error.message.toLowerCase().includes("already exists")) {
            console.log(`ℹ️ Label ${labelData.name} reported as duplicate by API, skipping.`);
          } else {
            throw error;
          }
        }
      }
    }

    console.log("\n✨ EMS Tracker initialization complete!");
    console.log("The workspace is now structured according to Lean/Six Sigma/TOC laws.");

  } catch (error) {
    if (error.message.includes("Authentication required") || error.message.includes("Brandagent")) {
      console.error("\n❌ Initialization Failed: Authentication Error.");
      console.error("Please ensure the 'Brandagent' environment variable is set with a valid Linear API token.");
    } else {
      console.error("\n❌ Error during initialization:", error.message);
    }
    throw error;
  }
}

if (require.main === module) {
  main().catch(() => process.exit(1));
}

module.exports = { main };
