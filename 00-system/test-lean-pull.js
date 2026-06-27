/**
 * Idempotency & Lean Pull Test for EMS Tracker
 */

const assert = require("assert");

// Mocking global fetch
const originalFetch = global.fetch;
let fetchCalls = [];

global.fetch = async (url, options) => {
  const body = JSON.parse(options.body);
  const query = body.query;

  fetchCalls.push({ query, variables: body.variables });

  if (query.includes("query { teams") || query.includes("teams {")) {
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
                { id: "s1", name: "Customer Wishes", type: "backlog" },
                { id: "s2", name: "Todo: AI-Agents", type: "unstarted" },
                { id: "s3", name: "In Progress", type: "started" }
              ]
            }
          }
        }
      })
    };
  }

  if (query.includes("query Issues")) {
    // If stateId is s3 (In Progress), return 3 issues to trigger WIP limit
    if (body.variables.stateId === "s3") {
        return {
            json: async () => ({
                data: { issues: { nodes: [ {id: "i1"}, {id: "i2"}, {id: "i3"} ] } }
            })
        };
    }
    // For backlog
    if (body.variables.stateId === "s1") {
        return {
            json: async () => ({
                data: { issues: { nodes: [ {id: "w1", title: "Test Wish", labels: {nodes: []} } ] } }
            })
        };
    }
    return {
      json: async () => ({
        data: { issues: { nodes: [] } }
      })
    };
  }

  return {
    json: async () => ({ data: {} })
  };
};

process.env.BRANDAGENT = "mock-token";

async function testWIPLimit() {
  console.log("Running WIP Limit Test...");
  const { director } = require("./ems-value-stream-director");

  fetchCalls = [];
  await director();

  const creations = fetchCalls.filter(c => c.query.includes("mutation IssueCreate"));
  assert.strictEqual(creations.length, 0, "Should NOT create new issues when WIP limit is reached");
  console.log("✅ WIP Limit test passed!");
}

async function runTests() {
  try {
    await testWIPLimit();
    console.log("\nAll Lean Pull tests passed!");
  } catch (error) {
    console.error("\n❌ Lean Pull test failed:", error);
    process.exit(1);
  } finally {
    global.fetch = originalFetch;
  }
}

runTests();
