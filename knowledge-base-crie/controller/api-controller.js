/**
 * API Controller for Knowledge Base
 * Handles document searching, filtering, and role-based access.
 */

const fs = require('fs');
const path = require('path');

const modelPath = path.join(__dirname, '../model/documents.json');

function getDocuments(options = {}) {
    if (!fs.existsSync(modelPath)) return [];

    const { search = "", filter = "", role = "guest" } = options;
    let docs = JSON.parse(fs.readFileSync(modelPath, 'utf8'));

    // 1. Role-based filtering (Task C-2 placeholder)
    if (role === "student" || role === "guest") {
        // Hide documents tagged with 'internal' or 'budget' if they existed
        docs = docs.filter(doc => !doc.tags.includes('internal') && !doc.tags.includes('budget'));
    }

    // 2. Full-text search (Task M-3 placeholder logic)
    if (search) {
        const query = search.toLowerCase();
        docs = docs.filter(doc =>
            doc.title.toLowerCase().includes(query) ||
            doc.tags.some(t => t.toLowerCase().includes(query)) ||
            doc.id.toLowerCase().includes(query)
        );
    }

    // 3. Quick filters (Tags)
    if (filter) {
        const tag = filter.toLowerCase();
        docs = docs.filter(doc => doc.tags.some(t => t.toLowerCase().includes(tag)));
    }

    return docs;
}

module.exports = {
    getDocuments
};
