document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('modeToggle');
  const body = document.body;
  const nav = document.querySelector('.navigation');
  const navSmallTexts = document.querySelectorAll('.nav-small');
  const cards = document.querySelectorAll('.card');

  let darkMode = false;

  function applyThemeClass() {
    if (darkMode) {
      body.classList.add('dark-mode');
      toggleBtn.textContent = '☀️ Light';
    } else {
      body.classList.remove('dark-mode');
      toggleBtn.textContent = '🌙 Night';
    }
  }

  function toggleTheme() {
    darkMode = !darkMode;
    applyThemeClass();
  }

  applyThemeClass();

  toggleBtn.addEventListener('click', toggleTheme);
  toggleBtn.addEventListener('keydown', e => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggleBtn.click();
    }
  });
});