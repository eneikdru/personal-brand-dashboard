/**
 * EMS Lean Pull Value Stream Director
 * Orchestrates the "Pull" of tasks from 'Customer Wishes' to 'Todo: AI-Agents'
 * enforces WIP limits and capacity constraints.
 */

const { getTeams, getWorkflowStates, getIssues, createIssue, getLabels } = require("./linear-client");

const WIP_LIMIT = 3;

async function director() {
  console.log("🏭 EMS Value Stream Director: Activating Lean Pull Mechanism...");

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
      console.log("Action: Re-routing agents to swarm existing constraints.");
      return;
    }

    // 3. Capacity Check (Pull Signal)
    const todoIssues = await getIssues(teamId, todoState.id);
    if (todoIssues.length >= 2) {
      console.log("⏸️  Execution queue (Todo) has sufficient inventory. No new tasks pulled.");
      return;
    }

    // 4. Pull from Backlog (JTBD Slicing)
    console.log("📥 Pull signal received. Selecting high-level requirement from Customer Wishes...");
    const wishes = await getIssues(teamId, backlogState.id);

    if (wishes.length === 0) {
      console.log("✅ Customer Wishes backlog is empty. System idling.");
      return;
    }

    const nextWish = wishes[0];
    console.log(`🎯 Pulling requirement: ${nextWish.title}`);

    // Mock slicing for now - in real scenario this would use an LLM or predefined decomposition
    // Here we convert a 'Wish' into a 'JTBD' task
    const taskInput = {
      title: `[JTBD] ${nextWish.title}`,
      description: `**JTBD Framework:**\nWhen [Situation], I want to [Motivation], so that [Value/Outcome].\n\n**Original Requirement:** ${nextWish.title}\n\n**DoD:**\n- [ ] Code is verified with automated tests.\n- [ ] Logic preserves analytic philosophy architecture.\n- [ ] Zero defects on first run.`,
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
