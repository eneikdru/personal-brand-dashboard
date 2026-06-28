/**
 * Script to deploy the Philosopher Carousel tasks to Linear.
 * This script discovers the required IDs (Team, State, Labels) and creates the 3 atomic tasks.
 */

const { getTeams, getWorkflowStates, getLabels, createIssue, getIssues } = require("./linear-client");

async function main() {
  console.log("🚀 Deploying Philosopher Carousel tasks to Linear...");

  try {
    // 1. Fetch Team ID
    const teams = await getTeams();
    if (teams.length === 0) throw new Error("No teams found.");
    const teamId = teams[0].id;
    console.log(`Found Team: ${teams[0].name} (${teamId})`);

    // 2. Fetch "Todo: AI-Agents" State ID
    const states = await getWorkflowStates(teamId);
    const todoState = states.find(s => s.name === "Todo: AI-Agents");
    if (!todoState) throw new Error("State 'Todo: AI-Agents' not found.");
    console.log(`Found State: ${todoState.name} (${todoState.id})`);

    // 3. Fetch Existing Issues to avoid duplicates
    const existingIssues = await getIssues(teamId);

    // 4. Fetch Label IDs
    const labels = await getLabels();
    const philosophyLabel = labels.find(l => l.name === "#agent-philosophy");
    const frontendLabel = labels.find(l => l.name === "#agent-frontend");

    if (!philosophyLabel || !frontendLabel) {
      throw new Error("Required labels (#agent-philosophy or #agent-frontend) not found.");
    }
    console.log("Found required labels.");

    // 5. Create Tasks
    const tasks = [
      {
        title: "[Data] Enrich Philosopher Dataset with Business Risk Theses",
        description: "Extract business-risk theses for all 50 philosophers and update dashboard/app.js. DoD: 50 entries with 'thesis' and 'episodeStatus'. Agent: #agent-philosophy",
        labelIds: [philosophyLabel.id]
      },
      {
        title: "[UI] Implement Carousel Component Skeleton & Styling",
        description: "Add responsive carousel container to index.html and style in styles.css. DoD: Responsive shell, Brand OS aesthetic. Agent: #agent-frontend",
        labelIds: [frontendLabel.id]
      },
      {
        title: "[Logic] Dynamic Rendering & Lifecycle Management",
        description: "Logic to populate carousel from app.js data and handle navigation. DoD: 50 slides render, Next/Prev works. Agent: #agent-frontend",
        labelIds: [frontendLabel.id]
      }
    ];

    for (const task of tasks) {
      const match = existingIssues.find(i => i.title.toLowerCase() === task.title.toLowerCase());
      if (match) {
        console.log(`⚠️ Task '${task.title}' already exists. Skipping.`);
        continue;
      }

      const issue = await createIssue({
        ...task,
        teamId,
        stateId: todoState.id
      });
      console.log(`✅ Created Task: ${issue.title} (${issue.identifier})`);
    }

    console.log("\n✨ All Philosopher Carousel tasks are now live in Linear!");

  } catch (error) {
    console.error("\n❌ Deployment Failed:", error.message);
    process.exit(1);
  }
}

main();
