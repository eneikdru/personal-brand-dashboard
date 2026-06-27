/**
 * Tests for Linear API Client
 * Using mock fetch to verify request structure and response handling
 */

const assert = require("assert");
const linearClient = require("./linear-client");

// Mocking global fetch
const originalFetch = global.fetch;

async function testCreateIssue() {
  console.log("Running testCreateIssue...");

  // Setup mock
  global.fetch = async (url, options) => {
    const body = JSON.parse(options.body);

    // Verify request
    assert.strictEqual(url, "https://api.linear.app/graphql");
    assert.strictEqual(options.method, "POST");
    assert.strictEqual(options.headers["Authorization"], "mock-token");
    assert.strictEqual(body.variables.input.title, "Test Title");
    assert.deepStrictEqual(body.variables.input.labelIds, ["label-1"]);
    assert.strictEqual(body.variables.input.stateId, "state-1");

    return {
      json: async () => ({
        data: {
          issueCreate: {
            success: true,
            issue: {
              id: "issue-id",
              identifier: "TST-1",
              url: "https://linear.app/issue/TST-1",
              title: "Test Title"
            }
          }
        }
      })
    };
  };

  process.env.Brandagent = "mock-token";

  try {
    const issue = await linearClient.createIssue({
      title: "Test Title",
      description: "Test Desc",
      labelIds: ["label-1"],
      stateId: "state-1"
    });
    assert.strictEqual(issue.identifier, "TST-1");
    assert.strictEqual(issue.title, "Test Title");
    console.log("✅ testCreateIssue passed!");
  } finally {
    global.fetch = originalFetch;
  }
}

async function testGetWorkflowStates() {
  console.log("Running testGetWorkflowStates...");

  global.fetch = async (url, options) => {
    return {
      json: async () => ({
        data: {
          team: {
            states: {
              nodes: [
                { id: "s1", name: "Todo", type: "todo" },
                { id: "s2", name: "In Progress", type: "started" }
              ]
            }
          }
        }
      })
    };
  };

  try {
    const states = await linearClient.getWorkflowStates("team-1");
    assert.strictEqual(states.length, 2);
    assert.strictEqual(states[0].name, "Todo");
    console.log("✅ testGetWorkflowStates passed!");
  } finally {
    global.fetch = originalFetch;
  }
}

async function testGetLabels() {
  console.log("Running testGetLabels...");

  global.fetch = async (url, options) => {
    return {
      json: async () => ({
        data: {
          issueLabels: {
            nodes: [
              { id: "l1", name: "bug" },
              { id: "l2", name: "feature" }
            ]
          }
        }
      })
    };
  };

  try {
    const labels = await linearClient.getLabels();
    assert.strictEqual(labels.length, 2);
    assert.strictEqual(labels[0].name, "bug");
    console.log("✅ testGetLabels passed!");
  } finally {
    global.fetch = originalFetch;
  }
}

async function testMissingToken() {
  console.log("Running testMissingToken...");
  const oldToken = process.env.Brandagent;
  delete process.env.Brandagent;

  try {
    await linearClient.createIssue({ title: "Fail" });
    assert.fail("Should have thrown error due to missing token");
  } catch (error) {
    assert.ok(error.message.includes("Brandagent"), "Error should mention Brandagent variable");
    console.log("✅ testMissingToken passed!");
  } finally {
    process.env.Brandagent = oldToken;
  }
}

async function runTests() {
  try {
    await testCreateIssue();
    await testMissingToken();
    await testGetWorkflowStates();
    await testGetLabels();
    console.log("\nAll tests passed successfully!");
  } catch (error) {
    console.error("\n❌ Test failed:");
    console.error(error);
    process.exit(1);
  }
}

runTests();
