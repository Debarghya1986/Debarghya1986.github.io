(() => {
  const root = document.documentElement;
  const buttons = document.querySelectorAll('[data-theme-toggle]');
  let stored = null;
  try { stored = localStorage.getItem('dn-theme'); } catch (_) { /* storage may be blocked */ }
  const preferredDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let dark = stored === 'dark' || (stored !== 'light' && preferredDark);
  function setTheme(value) {
    dark = value;
    root.dataset.theme = dark ? 'dark' : 'light';
    buttons.forEach(button => { button.setAttribute('aria-pressed', String(dark)); button.title = dark ? 'Switch to light mode' : 'Switch to dark mode'; });
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#101c20' : '#f8faf9');
  }
  setTheme(dark);
  buttons.forEach(button => button.addEventListener('click', () => {
    setTheme(!dark);
    try { localStorage.setItem('dn-theme', dark ? 'dark' : 'light'); } catch (_) { /* storage may be blocked */ }
  }));
  document.querySelectorAll('[data-year]').forEach(node => { node.textContent = String(new Date().getFullYear()); });
  document.querySelector('[data-print-cv]')?.addEventListener('click', () => window.print());
})();
