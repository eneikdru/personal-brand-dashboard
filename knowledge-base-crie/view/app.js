// Simple API mock/bridge for the frontend (Task V-1)
// Since we don't have a real backend server, we'll keep the logic in app.js
// but reference the Controller's logic structure.

const mockDocuments = [
    {
        "id": "LNA-001",
        "title": "Положение об образовательном центре",
        "type": "положение",
        "program": "общая",
        "version": "1.0",
        "status": "active",
        "valid_from": "2026-01-01",
        "responsible_person": "Романова С.В.",
        "tags": ["образовательный центр", "структура", "ЛНА"]
    },
    {
        "id": "PR-2026-ORD",
        "title": "Порядок приема на обучение по программам ординатуры на 2026/27 учебный год",
        "type": "порядок",
        "program": "ординатура",
        "version": "2.0",
        "status": "active",
        "valid_from": "2026-06-01",
        "responsible_person": "Приемная комиссия",
        "tags": ["прием 2026", "ординатура", "порядок"]
    },
    {
        "id": "ST-001",
        "title": "Положение о стипендиальном обеспечении и других формах материальной поддержки",
        "type": "положение",
        "program": "общая",
        "version": "3.1",
        "status": "active",
        "valid_from": "2024-09-01",
        "responsible_person": "Планово-экономический отдел",
        "tags": ["стипендии", "материальная поддержка", "выплаты"]
    },
    {
        "id": "PR-2025-ORD",
        "title": "Порядок приема на обучение по программам ординатуры на 2025/26 учебный год",
        "type": "порядок",
        "program": "ординатура",
        "version": "1.0",
        "status": "archive",
        "valid_from": "2025-06-01",
        "responsible_person": "Приемная комиссия",
        "tags": ["прием 2025", "ординатура", "архив"]
    }
];

const state = {
    search: "",
    filter: "",
    role: "student"
};

const els = {
    search: document.querySelector("#globalSearch"),
    filters: document.querySelector("#quickFilters"),
    grid: document.querySelector("#documentGrid"),
    count: document.querySelector("#resultsCount"),
    title: document.querySelector("#resultsTitle")
};

// This function mimics the api-controller logic
function getFilteredDocuments() {
    let docs = [...mockDocuments];

    if (state.search) {
        const query = state.search.toLowerCase();
        docs = docs.filter(doc =>
            doc.title.toLowerCase().includes(query) ||
            doc.tags.some(t => t.toLowerCase().includes(query))
        );
    }

    if (state.filter) {
        const tag = state.filter.toLowerCase();
        docs = docs.filter(doc => doc.tags.some(t => t.toLowerCase().includes(tag)));
    }

    return docs;
}

function render() {
    const filtered = getFilteredDocuments();

    els.grid.innerHTML = filtered.map(doc => `
        <article class="doc-card">
            <span class="doc-type">${doc.type}</span>
            <a href="#" class="doc-title">${doc.title}</a>
            <div class="doc-meta">
                <span><strong>Версия:</strong> ${doc.version}</span>
                <span><strong>Программа:</strong> ${doc.program}</span>
                <span><strong>Статус:</strong> <span class="status-pill ${doc.status}">${doc.status}</span></span>
            </div>
        </article>
    `).join("");

    els.count.textContent = `${filtered.length} документов`;

    if (state.filter) {
        els.title.textContent = `Результаты по тегу: ${state.filter}`;
    } else if (state.search) {
        els.title.textContent = `Поиск: ${state.search}`;
    } else {
        els.title.textContent = "Все документы";
    }
}

els.search.addEventListener("input", (e) => {
    state.search = e.target.value;
    render();
});

els.filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".tag");
    if (!btn) return;

    if (btn.classList.contains("active")) {
        btn.classList.remove("active");
        state.filter = "";
    } else {
        document.querySelectorAll(".tag").forEach(t => t.classList.remove("active"));
        btn.classList.add("active");
        state.filter = btn.dataset.filter;
    }
    render();
});

render();
