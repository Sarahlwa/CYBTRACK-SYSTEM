(function () {
  const storageKey = "theme";
  const html = document.documentElement;
  const body = document.body;

  function applyTheme(theme) {
    const mode = theme === "light" || theme === "dark" ? theme : "dark";
    html.setAttribute("data-theme", mode);
    if (body) {
      body.setAttribute("data-theme", mode);
    }
    html.style.colorScheme = mode;
    localStorage.setItem(storageKey, mode);

    document.querySelectorAll(".theme-toggle-btn, [data-theme-toggle]").forEach((el) => {
      const targetTheme = el.getAttribute("data-theme") || el.dataset.theme;
      el.classList.toggle("active", targetTheme === mode);
    });
  }

  window.setTheme = applyTheme;
  window.applyTheme = applyTheme;

  const savedTheme = localStorage.getItem(storageKey);
  const preferredTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const initialTheme = savedTheme || preferredTheme;

  applyTheme(initialTheme);

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(localStorage.getItem(storageKey) || initialTheme);
  });
})();
