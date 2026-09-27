
(() => {
  const cfg = window.APP_CONFIG;

  const topMenu = document.getElementById("topMenu");
  const sideMenus = document.getElementById("sideMenus");
  const content = document.getElementById("content");
  const pageTitle = document.getElementById("pageTitle");
  const breadcrumb = document.getElementById("breadcrumb");
  const pageActions = document.getElementById("pageActions");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  const allItems = [
    ...cfg.topMenu.map(item => ({...item, source: "top", group: "Main"})),
    ...cfg.sideMenus.flatMap(group =>
      group.items.map(item => ({...item, source: "side", group: group.label}))
    )
  ];

  function escapeHtml(value = "") {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderTopMenu() {
    topMenu.innerHTML = cfg.topMenu.map(item => `
      <button class="nav-btn" data-id="${item.id}">
        ${item.icon ? `<span>${item.icon}</span> ` : ""}${escapeHtml(item.label)}
      </button>
    `).join("");

    topMenu.querySelectorAll(".nav-btn").forEach(btn => {
      btn.addEventListener("click", () => navigate(btn.dataset.id));
    });
  }

  function renderSideMenus() {
    sideMenus.innerHTML = cfg.sideMenus.map(group => `
      <section class="side-group">
        <button class="side-group-btn" data-group="${group.id}">
          <span>${group.icon || "▸"} &nbsp; ${escapeHtml(group.label)}</span>
          <span class="chevron">${group.openByDefault ? "⌄" : "›"}</span>
        </button>
        <div class="side-items ${group.openByDefault ? "" : "collapsed"}" data-items="${group.id}">
          ${group.items.map(item => `
            <button class="side-item" data-id="${item.id}">${escapeHtml(item.label)}</button>
          `).join("")}
        </div>
      </section>
    `).join("");

    sideMenus.querySelectorAll(".side-group-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const list = sideMenus.querySelector(`[data-items="${btn.dataset.group}"]`);
        const arrow = btn.querySelector(".chevron");
        list.classList.toggle("collapsed");
        arrow.textContent = list.classList.contains("collapsed") ? "›" : "⌄";
      });
    });

    sideMenus.querySelectorAll(".side-item").forEach(btn => {
      btn.addEventListener("click", () => {
        navigate(btn.dataset.id);
        closeMobileSidebar();
      });
    });
  }

  function setActive(id) {
    document.querySelectorAll("[data-id]").forEach(el => {
      el.classList.toggle("active", el.dataset.id === id);
    });
  }

  function renderHome() {
    setActive("");
    pageTitle.textContent = cfg.home.title;
    breadcrumb.textContent = "Home";
    pageActions.innerHTML = "";

    content.innerHTML = `
      <div class="hero">
        <h2>${escapeHtml(cfg.home.title)}</h2>
        <p>${escapeHtml(cfg.home.description)}</p>
      </div>
      <div class="grid">
        ${cfg.topMenu.map(item => `
          <article class="project-card">
            <h3>${item.icon || ""} ${escapeHtml(item.label)}</h3>
            <p>${escapeHtml(item.description || "Fără descriere.")}</p>
            <div class="badges">
              ${(item.tags || []).map(tag => `<span class="badge">${escapeHtml(tag)}</span>`).join("")}
            </div>
          </article>
        `).join("")}
      </div>
    `;
  }

  function renderProject(item) {
    setActive(item.id);
    pageTitle.textContent = item.label;
    breadcrumb.textContent = `${item.group} / ${item.label}`;

    const genericLinks = item.links || [];
    const githubUrl = item.githubUrl || "";
    const pageUrl = item.pageUrl || "";

    if (githubUrl) {
      pageActions.innerHTML = `
        <a class="github-top-link" href="${githubUrl}" target="_blank" rel="noopener">
          <span class="github-mark">⌘</span>
          GitHub Repository
          <span aria-hidden="true">↗</span>
        </a>
      `;
    } else {
      pageActions.innerHTML = genericLinks.length
        ? `<a class="action-btn" href="${genericLinks[0].url}" target="_blank" rel="noopener">Open ↗</a>`
        : "";
    }

    if (item.group === "GITHUB") {
      if (pageUrl) {
        content.classList.add("web-preview-card");
        content.innerHTML = `
          <div class="web-preview-toolbar">
            <div class="web-preview-status">
              <span class="live-dot"></span>
              <span>${escapeHtml(item.label)}</span>
            </div>
            <a class="open-site-link" href="${pageUrl}" target="_blank" rel="noopener">
              Deschide în tab nou ↗
            </a>
          </div>
          <iframe
            class="project-frame"
            src="${pageUrl}"
            title="${escapeHtml(item.label)}"
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        `;
      } else {
        content.classList.remove("web-preview-card");
        content.innerHTML = `
          <div class="empty">
            <div>
              <h2>${escapeHtml(item.label)}</h2>
              <p>Adaugă în <strong>config.js</strong> câmpurile <code>githubUrl</code> și <code>pageUrl</code> pentru acest proiect.</p>
            </div>
          </div>
        `;
      }
      return;
    }

    content.classList.remove("web-preview-card");
    const links = genericLinks;

    content.innerHTML = `
      <div class="hero">
        <h2>${escapeHtml(item.label)}</h2>
        <p>${escapeHtml(item.description || "Adaugă descrierea proiectului în config.js.")}</p>
        ${(item.tags || []).length ? `
          <div class="badges">
            ${(item.tags || []).map(tag => `<span class="badge">${escapeHtml(tag)}</span>`).join("")}
          </div>
        ` : ""}
        ${links.length ? `
          <div class="link-row">
            ${links.map(link => `
              <a class="link-btn" href="${link.url}" target="_blank" rel="noopener">
                ${escapeHtml(link.label || "Open")} ↗
              </a>
            `).join("")}
          </div>
        ` : ""}
      </div>

      <div class="grid">
        <article class="project-card">
          <h3>Overview</h3>
          <p>Poți pune aici statusul proiectului, obiective, task-uri sau linkuri utile.</p>
        </article>
        <article class="project-card">
          <h3>Notes</h3>
          <p>Conținutul poate fi extins ușor din config.js sau, ulterior, încărcat din fișiere Markdown.</p>
        </article>
        <article class="project-card">
          <h3>Next steps</h3>
          <p>Adaugă ce vrei să faci în continuare pentru proiectul selectat.</p>
        </article>
      </div>
    `;
  }

  function navigate(id) {
    const item = allItems.find(x => x.id === id);
    if (!item) {
      history.replaceState(null, "", "#home");
      renderHome();
      return;
    }
    history.replaceState(null, "", `#${item.id}`);
    renderProject(item);
  }

  function openMobileSidebar() {
    sidebar.classList.add("open");
    overlay.classList.add("show");
  }

  function closeMobileSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  }

  document.getElementById("mobileMenuBtn").addEventListener("click", openMobileSidebar);
  document.getElementById("closeSidebarBtn").addEventListener("click", closeMobileSidebar);
  overlay.addEventListener("click", closeMobileSidebar);

  const themeBtn = document.getElementById("themeBtn");
  const savedTheme = localStorage.getItem("project-hub-theme");
  if (savedTheme) document.documentElement.dataset.theme = savedTheme;

  themeBtn.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme;
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("project-hub-theme", next);
  });

  renderTopMenu();
  renderSideMenus();

  const initial = location.hash.replace("#", "");
  if (initial && initial !== "home") navigate(initial);
  else renderHome();

  window.addEventListener("hashchange", () => {
    const id = location.hash.replace("#", "");
    if (id && id !== "home") {
      const item = allItems.find(x => x.id === id);
      if (item) renderProject(item);
      else renderHome();
    } else {
      renderHome();
    }
  });
})();
