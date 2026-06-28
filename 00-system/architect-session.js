/**
 * Jules-Architect Session Script (Advanced Edition)
 * Automates the three mandatory phases: PHASE_AUDIT, PHASE_DECOMPOSE, PHASE_DISPATCH.
 * Incorporates automated processing, decomposition generation, and defect reporting.
 */

const fs = require("fs");
const path = require("path");
const { getTeams, getWorkflowStates, getIssues, createIssue, getLabels } = require("./linear-client");

const WIP_LIMIT = 3;

/**
 * PHASE_AUDIT: System Health and WIP Monitoring
 */
async function phaseAudit(teamId) {
  console.log("\n--- PHASE_AUDIT: System Health Check ---");
  const states = await getWorkflowStates(teamId);
  const inProgressState = states.find(s => s.type === "started" || s.name === "In Progress");

  if (!inProgressState) {
    console.error("❌ CRITICAL: 'In Progress' state not found in Linear.");
    return { success: false, wip: 0 };
  }

  const activeIssues = await getIssues(teamId, inProgressState.id);
  console.log(`📊 Current WIP (In Progress): ${activeIssues.length}/${WIP_LIMIT}`);

  const blockedTasks = activeIssues.filter(issue =>
    issue.title.toLowerCase().includes("blocking") ||
    (issue.description && issue.description.toLowerCase().includes("blocking"))
  );

  if (blockedTasks.length > 0) {
    console.warn(`🛑 ALERT: Found ${blockedTasks.length} blocked tasks!`);
    blockedTasks.forEach(t => console.log(`   - [${t.identifier}] ${t.title}`));
  }

  activeIssues.forEach(issue => {
    console.log(`- [${issue.identifier}] ${issue.title} (State: ${issue.state.name})`);
  });

  if (activeIssues.length >= WIP_LIMIT) {
    console.warn("⚠️  WIP Limit reached. New tasks will NOT be dispatched.");
  }

  return { success: true, wip: activeIssues.length };
}

/**
 * PHASE_DECOMPOSE: Requirement Extraction and Marking
 */
async function phaseDecompose() {
  console.log("\n--- PHASE_DECOMPOSE: Requirement Extraction ---");
  const inboxPath = path.join(__dirname, "../08-inbox/ideas.md");
  if (!fs.existsSync(inboxPath)) {
    console.warn("⚠️  Inbox file not found.");
    return { ideas: [], updatedContent: null };
  }

  let content = fs.readFileSync(inboxPath, "utf8");
  const ideaRegex = /## (\d{4}-\d{2}-\d{2} - .*?)\n([\s\S]*?)(?=\n## |$)/g;
  const ideas = [];

  const updatedContent = content.replace(ideaRegex, (fullMatch, title, body) => {
    if (fullMatch.includes("[PROCESSED]")) {
      return fullMatch;
    }
    console.log(`✨ Extracting: ${title}`);
    ideas.push({ title, body: body.trim() });
    return `## [PROCESSED] ${title}\n${body}`;
  });

  if (ideas.length === 0) {
    console.log("🛌 No new requirements found.");
  } else {
    console.log(`✅ Successfully extracted ${ideas.length} requirements.`);
  }

  return { ideas, updatedContent };
}

/**
 * Technical Decomposition Generator
 */
function generateDecompositionFile(idea) {
  const dateStr = new Date().toISOString().split("T")[0];
  const filename = `${dateStr}-${idea.title.split(" - ")[1].toLowerCase().replace(/\s+/g, "-")}.md`;
  const filePath = path.join(__dirname, "../09-operations/tasks", filename);

  const vision = idea.body.split("\n").filter(line => line.trim() && !line.startsWith("-")).join(" ") || "No vision provided.";

  const content = `# Decomposition: ${idea.title}
Date: ${dateStr}
Source: Inbox Idea

## Vision
${vision}

## Atomic Tasks (Chain of Dependencies)
1. [jules-backend-java]: Core business logic and persistence.
2. [jules-backend-go]: High-performance transaction layer (Depends on Java logic).
3. [jules-integrator-api]: External API connectors (Depends on backend services).
4. [jules-qa-automation]: End-to-end verification (Depends on implementation).

## Definition of Done (DoD)
- [ ] Technical implementation verified by specialized agent.
- [ ] Code strictly follows Brand OS architectural laws.
- [ ] Zero Defect rule applied (all tests pass).
- [ ] First Time Yield (FTY) metric is preserved.
`;

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`📝 Generated decomposition record: ${filename}`);
  return filePath;
}

/**
 * PHASE_DISPATCH: Specialized Task Creation with Dependency Chaining
 */
async function phaseDispatch(teamId, ideas, currentWip) {
  console.log("\n--- PHASE_DISPATCH: Specialized Studio Assignment ---");

  if (currentWip >= WIP_LIMIT) {
    console.log("🛑 Dispatch halted: WIP Limit reached.");
    return;
  }

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

  const specializations = [
    { agent: "jules-backend-java", task: "Business Logic Layer" },
    { agent: "jules-backend-go", task: "High-Performance Data Service" },
    { agent: "jules-integrator-api", task: "API/Dashboard Connector" },
    { agent: "jules-qa-automation", task: "QA/Integration Suite" }
  ];

  for (const idea of ideas) {
    console.log(`🎯 Dispatching Idea: ${idea.title}`);
    generateDecompositionFile(idea);

    let parentIssueId = null;

    for (const spec of specializations) {
      const taskTitle = `[${spec.agent}] ${idea.title} - ${spec.task}`;
      const labelId = getLabelId(spec.agent);

      if (process.env.BRANDAGENT) {
        const input = {
          title: taskTitle,
          description: `**JTBD:** When implementing ${idea.title}, I want to develop the ${spec.task} so that the system operates according to Brand OS architectural specifications.\n\n**Context:**\n${idea.body}\n\n**Architectural Guidelines:**\n- Reference Brandbook: 02-brand/brandbook.md\n- Architecture Protocol: 09-operations/EMS-architecture-guide.md\n- Git Isolation Law: Maximum 3 files per task.\n\n**Definition of Done (DoD):**\n- [ ] Code is verified with automated tests (Zero Defect Rule).\n- [ ] Logic preserves analytic philosophy architecture.\n- [ ] System remains idempotent and re-runnable.\n- [ ] First Time Yield (FTY) metric is preserved.`,
          teamId,
          stateId: todoState ? todoState.id : undefined,
          labelIds: labelId ? [labelId] : [],
          parentId: parentIssueId || undefined
        };
        const issue = await createIssue(input);
        console.log(`🚀 Dispatched to ${spec.agent}: ${issue.identifier} ${parentIssueId ? `(Depends on ${parentIssueId})` : "(Base Task)"}`);
        parentIssueId = issue.id; // Set as parent for the next task in the chain
      } else {
        console.log(`🔍 [DRY-RUN] Would dispatch to ${spec.agent}: ${taskTitle} ${parentIssueId ? "(Chained dependency)" : "(Start of chain)"}`);
        parentIssueId = "mock-id-" + spec.agent;
      }
    }
  }
}

/**
 * Unified Session Entry Point
 */
async function architectSession() {
  console.log("🏙️  Jules-Architect Production Session Starting...");
  try {
    let teamId = "mock-team";
    let currentWip = 0;

    if (process.env.BRANDAGENT) {
      const teams = await getTeams();
      const team = teams.find(t => t.name === "Eneikdru") || teams[0];
      teamId = team.id;
      const audit = await phaseAudit(teamId);
      currentWip = audit.wip;
    } else {
      console.log("--- PHASE_AUDIT: [DRY-RUN] Skipping live audit ---");
    }

    const { ideas, updatedContent } = await phaseDecompose();

    if (ideas.length > 0) {
      await phaseDispatch(teamId, ideas, currentWip);

      if (process.env.BRANDAGENT && updatedContent) {
        const inboxPath = path.join(__dirname, "../08-inbox/ideas.md");
        fs.writeFileSync(inboxPath, updatedContent, "utf8");
        console.log("\n✅ Inbox updated: Marked processed ideas.");
      }
    }

    console.log("\n🏁 Session Complete.");
  } catch (error) {
    console.error("\n❌ Session Failed:", error.message);
    if (require.main === module) process.exit(1);
    throw error;
  }
}

if (require.main === module) {
  architectSession();
}

module.exports = { architectSession };
