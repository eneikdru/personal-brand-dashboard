/**
 * Linear API Client
 * Uses process.env.Brandagent for authentication
 */

const LINEAR_API_URL = "https://api.linear.app/graphql";

async function linearQuery(query, variables = {}) {
  const token = process.env.Brandagent;

  if (!token) {
    throw new Error("Environment variable 'Brandagent' is not set. Please provide your Linear API token.");
  }

  const response = await fetch(LINEAR_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    },
    body: JSON.stringify({
      query,
      variables
    })
  });

  const result = await response.json();

  if (result.errors) {
    throw new Error(`Linear API Error: ${result.errors.map(e => e.message).join(", ")}`);
  }

  return result.data;
}

/**
 * Creates a new issue in Linear
 * @param {Object} input - IssueCreateInput (title, description, teamId, priority, etc.)
 */
async function createIssue(input) {
  const mutation = `
    mutation IssueCreate($input: IssueCreateInput!) {
      issueCreate(input: $input) {
        success
        issue {
          id
          identifier
          url
          title
        }
      }
    }
  `;

  const data = await linearQuery(mutation, { input });

  if (!data.issueCreate.success) {
    throw new Error("Failed to create Linear issue");
  }

  return data.issueCreate.issue;
}

/**
 * Fetches available teams to get teamId
 */
async function getTeams() {
  const query = `
    query {
      teams {
        nodes {
          id
          name
          key
        }
      }
    }
  `;
  const data = await linearQuery(query);
  return data.teams.nodes;
}

module.exports = {
  createIssue,
  getTeams,
  linearQuery
};
