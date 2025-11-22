// scripts.js - externalized JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('modeToggle');
  const body = document.body;
  const nav = document.querySelector('.navigation');
  const navSmallTexts = document.querySelectorAll('.nav-small');
  const cards = document.querySelectorAll('.card');

  // Keep a simple darkMode flag; actual style changes come via CSS .dark-mode class.
  let darkMode = false;

  // Toggle CSS class on body to switch themes.
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

  // initialize with light theme
  applyThemeClass();

  toggleBtn.addEventListener('click', toggleTheme);
  toggleBtn.addEventListener('keydown', e => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggleBtn.click();
    }
  });
});