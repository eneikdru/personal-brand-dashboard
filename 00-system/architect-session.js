/**
 * Jules-Architect Session Script
 * Automates the three mandatory phases: PHASE_AUDIT, PHASE_DECOMPOSE, PHASE_DISPATCH.
 */

const fs = require("fs");
const path = require("path");
const { getTeams, getWorkflowStates, getIssues, createIssue, getLabels } = require("./linear-client");

const WIP_LIMIT = 3;

async function phaseAudit(teamId) {
  console.log("--- PHASE_AUDIT: Checking Current Status ---");
  const states = await getWorkflowStates(teamId);
  const inProgressState = states.find(s => s.type === "started" || s.name === "In Progress");

  if (inProgressState) {
    const activeIssues = await getIssues(teamId, inProgressState.id);
    console.log(`📊 Current WIP (In Progress): ${activeIssues.length}/${WIP_LIMIT}`);
    activeIssues.forEach(issue => {
      console.log(`- [${issue.identifier}] ${issue.title} (State: ${issue.state.name})`);
    });
  } else {
    console.warn("⚠️  'In Progress' state not found.");
  }
}

async function phaseDecompose() {
  console.log("\n--- PHASE_DECOMPOSE: Extracting Requirements ---");
  const inboxPath = path.join(__dirname, "../08-inbox/ideas.md");
  if (!fs.existsSync(inboxPath)) {
    console.warn("⚠️  Inbox file not found.");
    return [];
  }

  const content = fs.readFileSync(inboxPath, "utf8");
  const ideaRegex = /## (\d{4}-\d{2}-\d{2} - .*?)\n([\s\S]*?)(?=\n## |$)/g;
  const ideas = [];
  let match;

  while ((match = ideaRegex.exec(content)) !== null) {
    if (!match[0].includes("[PROCESSED]")) {
      ideas.push({ title: match[1], body: match[2] });
    }
  }

  console.log(`✨ Found ${ideas.length} new requirements.`);
  return ideas;
}

async function phaseDispatch(teamId, ideas) {
  console.log("\n--- PHASE_DISPATCH: Assigning Specialized Tasks ---");

  let todoState = null;
  let labels = [];

  if (process.env.BRANDAGENT) {
    const states = await getWorkflowStates(teamId);
    todoState = states.find(s => s.name === "Todo: AI-Agents");
    labels = await getLabels();
  } else {
    console.log("⚠️  BRANDAGENT not set. Running in DRY-RUN mode.");
  }

  const getLabelId = (name) => {
    const label = labels.find(l => l.name.toLowerCase() === name.toLowerCase() || l.name.toLowerCase() === `#${name.toLowerCase()}`);
    return label ? label.id : null;
  };

  for (const idea of ideas) {
    console.log(`🎯 Processing Idea: ${idea.title}`);

    // Automatic Slicing Logic for Specialized Agents
    const specializations = [
      { agent: "jules-backend-java", task: "Core Logic & Persistence" },
      { agent: "jules-backend-go", task: "High-Performance Service/Transaction layer" },
      { agent: "jules-integrator-api", task: "External API/Portal Integration" },
      { agent: "jules-qa-automation", task: "Automated Regression/Integration Tests" }
    ];

    for (const spec of specializations) {
      const taskTitle = `[${spec.agent}] ${idea.title} - ${spec.task}`;
      const labelId = getLabelId(spec.agent);

      if (process.env.BRANDAGENT) {
        const input = {
          title: taskTitle,
          description: `**JTBD:** When executing ${idea.title}, I want to implement ${spec.task} so that the system fulfills the business requirement.\n\n**Context:**\n${idea.body}\n\n**Definition of Done (DoD):**\n- [ ] Technical implementation verified.\n- [ ] Unit tests pass.\n- [ ] Integration with other agents confirmed.`,
          teamId,
          stateId: todoState ? todoState.id : undefined,
          labelIds: labelId ? [labelId] : []
        };
        const issue = await createIssue(input);
        console.log(`🚀 Dispatched to ${spec.agent}: ${issue.identifier}`);
      } else {
        console.log(`🔍 [DRY-RUN] Would dispatch to ${spec.agent}: ${taskTitle}`);
      }
    }
  }
}

async function main() {
  console.log("🏙️  Jules-Architect Session Starting...");
  try {
    let teamId = "mock-team";

    if (process.env.BRANDAGENT) {
      const teams = await getTeams();
      const team = teams.find(t => t.name === "Eneikdru") || teams[0];
      teamId = team.id;
      await phaseAudit(teamId);
    } else {
      console.log("--- PHASE_AUDIT: [DRY-RUN] Skipping live audit ---");
    }

    const ideas = await phaseDecompose();
    await phaseDispatch(teamId, ideas);

    console.log("\n🏁 Session Complete.");
  } catch (error) {
    console.error("\n❌ Session Failed:", error.message);
  }
}

if (require.main === module) {
  main();
}

module.exports = { phaseAudit, phaseDecompose, phaseDispatch };
