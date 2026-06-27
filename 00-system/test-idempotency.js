/**
 * Idempotency Test for EMS Tracker Initialization
 */

const assert = require("assert");

// Mocking global fetch before requiring anything
const originalFetch = global.fetch;
let fetchCalls = [];

global.fetch = async (url, options) => {
  const body = JSON.parse(options.body);
  const query = body.query;

  fetchCalls.push({ query, variables: body.variables });

  // Mock responses based on the query
  if (query.trim().startsWith("query { teams") || query.includes("teams {")) {
    return {
      json: async () => ({
        data: { teams: { nodes: [{ id: "t1", name: "Eneikdru" }] } }
      })
    };
  }

  if (query.includes("query WorkflowStates")) {
    return {
      json: async () => ({
        data: {
          team: {
            states: {
              nodes: [
                { id: "s1", name: "Customer Wishes", type: "backlog" }
              ]
            }
          }
        }
      })
    };
  }

  if (query.includes("query { issueLabels") || query.includes("issueLabels {")) {
    return {
      json: async () => ({
        data: {
          issueLabels: {
            nodes: [
              { id: "l1", name: "#agent-backend" }
            ]
          }
        }
      })
    };
  }

  if (query.includes("mutation WorkflowStateCreate")) {
    return {
      json: async () => ({
        data: {
          workflowStateCreate: {
            success: true,
            workflowState: { id: "new-s", name: body.variables.input.name }
          }
        }
      })
    };
  }

  if (query.includes("mutation IssueLabelCreate")) {
    return {
      json: async () => ({
        data: {
          issueLabelCreate: {
            success: true,
            issueLabel: { id: "new-l", name: body.variables.input.name }
          }
        }
      })
    };
  }

  return {
    json: async () => ({ data: {} })
  };
};

process.env.Brandagent = "mock-token";

// Prevent process.exit from killing the test
const originalExit = process.exit;
process.exit = (code) => {
  if (code !== 0) {
    throw new Error(`Process exited with code ${code}`);
  }
};

async function runTest() {
  console.log("Running Idempotency Test...");

  try {
    const { main } = require("./initialize-ems-tracker");
    await main();

    // Analyze fetchCalls
    const stateCreations = fetchCalls.filter(c => c.query.includes("mutation WorkflowStateCreate"));
    const labelCreations = fetchCalls.filter(c => c.query.includes("mutation IssueLabelCreate"));

    console.log(`State creations: ${stateCreations.length}`);
    console.log(`Label creations: ${labelCreations.length}`);

    // We mocked "Customer Wishes" and "#agent-backend" as existing.
    // So "Todo: AI-Agents" (1 state) and "#agent-frontend", "#agent-philosophy" (2 labels) should be created.

    assert.strictEqual(stateCreations.length, 1, "Should only create 1 workflow state (Todo: AI-Agents)");
    assert.strictEqual(stateCreations[0].variables.input.name, "Todo: AI-Agents");

    assert.strictEqual(labelCreations.length, 2, "Should only create 2 labels");
    assert.ok(labelCreations.some(c => c.variables.input.name === "#agent-frontend"));
    assert.ok(labelCreations.some(c => c.variables.input.name === "#agent-philosophy"));

    console.log("✅ Idempotency test passed!");
  } catch (error) {
    console.error("❌ Idempotency test failed:", error);
    process.exit(1);
  } finally {
    global.fetch = originalFetch;
    process.exit = originalExit;
  }
}

runTest();
