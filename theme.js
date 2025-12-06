// Theme toggle functionality
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('preferred-theme', theme);
    updateAppStoreBadges();
}

function updateAppStoreBadges() {
    const theme = document.documentElement.getAttribute('data-theme');
    const lang = localStorage.getItem('preferred-lang') || 'fr';
    const isDark = theme === 'dark';

    let badgeSrc;
    if (lang === 'en') {
        badgeSrc = isDark ? 'assets/appstoreen-dark.svg' : 'assets/appstoreen.svg';
    } else {
        badgeSrc = isDark ? 'assets/appstorefr-dark.svg' : 'assets/appstorefr.svg';
    }

    document.querySelectorAll('[data-badge="appstore"]').forEach(img => {
        img.src = badgeSrc;
    });
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Initialize theme
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Load saved theme or detect system preference
    const savedTheme = localStorage.getItem('preferred-theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
    }
});
