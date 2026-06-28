/**
 * Unified Sync Orchestrator
 * Coordinates all data synchronization and automation tasks in the Brand OS.
 */

const { rebuild } = require("./rebuild-youtube-content");
const { updateDashboard } = require("./update-dashboard-data");
const { processInbox } = require("./process-inbox");
const { monitorPerformance } = require("./dmaic-monitor");
const { director } = require("./ems-value-stream-director");
const { architectSession } = require("./architect-session");

async function syncAll() {
  console.log("🔄 Starting Unified Sync Orchestration...");

  const isArchitectMode = process.argv.includes("--architect");

  try {
    if (isArchitectMode) {
      console.log("🏛️  MODE: Advanced Architect Session");
      await architectSession();
    } else {
      console.log("1/5: Processing Inbox Ideas...");
      await processInbox();

      console.log("2/5: Activating Value Stream Director (Lean Pull)...");
      await director();
    }

    console.log("3/5: Rebuilding YouTube content (CSVs, MDs)...");
    rebuild();

    console.log("4/5: Updating Dashboard (JS, HTML)...");
    updateDashboard();

    console.log("5/5: Monitoring System Efficiency (DMAIC)...");
    await monitorPerformance();

    console.log("✅ All systems synchronized and automated successfully.");
  } catch (error) {
    console.error("❌ Sync Failed:", error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  syncAll();
}
