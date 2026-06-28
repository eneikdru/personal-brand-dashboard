/**
 * EMS Lean Pull Value Stream Director
 * Orchestrates the "Pull" of tasks from 'Customer Wishes' to 'Todo: AI-Agents'
 * enforces WIP limits and capacity constraints.
 */

const { getTeams, getWorkflowStates, getIssues, createIssue } = require("./linear-client");

const WIP_LIMIT = 3;

function sliceJTBD(wish) {
    const title = wish.title;
    const body = wish.description || "";

    // Autonomous Slicing Logic (JTBD)
    const situation = "a new requirement enters the Brand OS backlog";
    const motivation = `implement the following: ${title}`;
    const outcome = "the Brand OS system evolves towards autonomous management and higher efficiency";

    return `**JTBD Framework:**\nWhen ${situation}, I want to ${motivation}, so that ${outcome}.\n\n**Original Requirement Context:**\n${body}\n\n**Definition of Done (DoD):**\n- [ ] Code is verified with automated tests (Zero Defect Rule).\n- [ ] Logic preserves analytic philosophy architecture.\n- [ ] System remains idempotent and re-runnable.\n- [ ] First Time Yield (FTY) metric is preserved.`;
}

async function director() {
  console.log("🏭 EMS Value Stream Director: Activating Lean Pull Mechanism...");

  if (!process.env.BRANDAGENT) {
      console.log("⚠️  BRANDAGENT not set. Running in AUDIT/DRY-RUN mode.");
      return;
  }

  try {
    // 1. Context Discovery
    const teams = await getTeams();
    const team = teams.find(t => t.name === "Eneikdru") || teams[0];
    const teamId = team.id;

    const states = await getWorkflowStates(teamId);
    const backlogState = states.find(s => s.name === "Customer Wishes");
    const todoState = states.find(s => s.name === "Todo: AI-Agents");
    const inProgressState = states.find(s => s.type === "started" || s.name === "In Progress");

    if (!backlogState || !todoState || !inProgressState) {
      throw new Error("Missing critical workflow states (Customer Wishes, Todo: AI-Agents, or In Progress).");
    }

    // 2. WIP Check (Theory of Constraints)
    const activeIssues = await getIssues(teamId, inProgressState.id);
    console.log(`📊 Current WIP (In Progress): ${activeIssues.length}/${WIP_LIMIT}`);

    if (activeIssues.length >= WIP_LIMIT) {
      console.log("🛑 WIP Limit reached. Freezing upstream pull mechanics.");
      return;
    }

    // 3. Capacity Check (Pull Signal)
    const todoIssues = await getIssues(teamId, todoState.id);
    if (todoIssues.length >= 2) {
      console.log("⏸️  Execution queue (Todo) has sufficient inventory. No new tasks pulled.");
      return;
    }

    // 4. Pull from Backlog (Autonomous Slicing)
    console.log("📥 Pull signal received. Selecting requirement from Customer Wishes...");
    const wishes = await getIssues(teamId, backlogState.id);

    if (wishes.length === 0) {
      console.log("✅ Customer Wishes backlog is empty. System idling.");
      return;
    }

    const nextWish = wishes[0];
    console.log(`🎯 Pulling and Slicing: ${nextWish.title}`);

    const taskInput = {
      title: `[JTBD] ${nextWish.title}`,
      description: sliceJTBD(nextWish),
      teamId,
      stateId: todoState.id,
      labelIds: nextWish.labels.nodes.map(l => l.id)
    };

    const task = await createIssue(taskInput);
    console.log(`🚀 Task pulled and sliced: ${task.title} (${task.identifier})`);

  } catch (error) {
    console.error("❌ Director Error:", error.message);
  }
}

if (require.main === module) {
  director();
}

module.exports = { director };
