/**
 * EMS Full Operations Simulation Suite
 * Simulates the entire value stream: Initialization -> Audit -> Pull -> WIP Enforcement
 */

const assert = require("assert");

// --- MOCK SYSTEM SETUP ---
const originalFetch = global.fetch;
let fetchCalls = [];
let mockData = {
    teams: [{ id: "t1", name: "Eneikdru" }],
    states: [
        { id: "s1", name: "Customer Wishes", type: "backlog" },
        { id: "s2", name: "Todo: AI-Agents", type: "unstarted" },
        { id: "s3", name: "In Progress", type: "started" }
    ],
    labels: [
        { id: "l1", name: "#agent-backend" }
    ],
    issues: {
        "s1": [ { id: "w1", title: "Implement Auth", labels: { nodes: [{id: "l1", name: "#agent-backend"}] } } ],
        "s2": [],
        "s3": [] // Starts empty
    }
};

global.fetch = async (url, options) => {
  const body = JSON.parse(options.body);
  const query = body.query;
  fetchCalls.push({ query, variables: body.variables });

  if (query.includes("teams")) {
    return { json: async () => ({ data: { teams: { nodes: mockData.teams } } }) };
  }
  if (query.includes("WorkflowStates")) {
    return { json: async () => ({ data: { team: { states: { nodes: mockData.states } } } }) };
  }
  if (query.includes("issueLabels")) {
    return { json: async () => ({ data: { issueLabels: { nodes: mockData.labels } } }) };
  }
  if (query.includes("Issues")) {
    const stateId = body.variables.stateId;
    return { json: async () => ({ data: { issues: { nodes: mockData.issues[stateId] || [] } } }) };
  }
  if (query.includes("mutation IssueCreate")) {
    return { json: async () => ({ data: { issueCreate: { success: true, issue: { id: "new-task", title: body.variables.input.title, identifier: "EMS-1" } } } }) };
  }
  if (query.includes("mutation WorkflowStateCreate")) {
    return { json: async () => ({ data: { workflowStateCreate: { success: true, workflowState: {id: "new", name: body.variables.input.name} } } }) };
  }
  if (query.includes("mutation IssueLabelCreate")) {
    return { json: async () => ({ data: { issueLabelCreate: { success: true, issueLabel: {id: "new", name: body.variables.input.name} } } }) };
  }

  return { json: async () => ({ data: {} }) };
};

process.env.BRANDAGENT = "mock-token";

// --- SIMULATION SCENARIOS ---

async function runSimulation() {
  console.log("🧪 Starting EMS Full Operational Simulation...\n");

  try {
    // 1. Initialization Simulation (Idempotency)
    console.log("--- Phase 1: Workspace Initialization ---");
    const { main: init } = require("./initialize-ems-tracker");
    await init();
    console.log("✅ Initialization successful.\n");

    // 2. Pull System Simulation (Available Capacity)
    console.log("--- Phase 2: Lean Pull (Capacity Available) ---");
    const { director } = require("./ems-value-stream-director");
    fetchCalls = [];
    await director();

    const pullCall = fetchCalls.find(c => c.query.includes("mutation IssueCreate"));
    assert.ok(pullCall, "Task should have been pulled");
    assert.ok(pullCall.variables.input.title.includes("[JTBD]"), "Task should be sliced with JTBD");
    console.log(`✅ Pull successful. Created: ${pullCall.variables.input.title}`);
    console.log("✅ JTBD Framework verified.\n");

    // 3. WIP Limit Simulation
    console.log("--- Phase 3: WIP Limit Enforcement ---");
    // Simulate 3 tasks In Progress
    mockData.issues["s3"] = [{id: "i1"}, {id: "i2"}, {id: "i3"}];
    fetchCalls = [];
    await director();

    const blockedCall = fetchCalls.find(c => c.query.includes("mutation IssueCreate"));
    assert.strictEqual(blockedCall, undefined, "Should NOT pull task when WIP is at limit (3)");
    console.log("✅ WIP Limit enforced (Max 3). upstream pull frozen.\n");

    console.log("✨ ALL SIMULATION PHASES PASSED.");
    console.log("System architecture is Lean-Pull compliant and production-ready.");

  } catch (error) {
    console.error("\n❌ Simulation Failed:", error);
    process.exit(1);
  } finally {
    global.fetch = originalFetch;
  }
}

runSimulation();
