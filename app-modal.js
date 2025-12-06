// App Modal Lightbox
let currentApp = null;
let currentScreenshotIndex = 0;

function openAppModal(appId) {
    const app = apps.find(a => a.id === appId);
    if (!app) return;

    currentApp = app;
    currentScreenshotIndex = 0;
    const modal = document.getElementById('app-modal');
    const lang = localStorage.getItem('preferred-lang') || 'fr';

    // Get translated content
    const description = translations[lang][app.descKey] || '';
    const category = translations[lang][app.category] || '';

    // Get App Store badge
    const theme = document.documentElement.getAttribute('data-theme');
    const isDark = theme === 'dark';
    let badgeSrc;
    if (lang === 'en') {
        badgeSrc = isDark ? 'assets/appstoreen-dark.svg' : 'assets/appstoreen.svg';
    } else {
        badgeSrc = isDark ? 'assets/appstorefr-dark.svg' : 'assets/appstorefr.svg';
    }

    // Generate screenshots carousel or placeholder
    let screenshotsHTML = '';
    if (app.screenshots && app.screenshots.length > 0) {
        const screenshotItems = app.screenshots.map((src, i) =>
            `<img src="${src}" alt="Screenshot ${i + 1}" class="modal-screenshot ${i === 0 ? 'active' : ''}" data-index="${i}">`
        ).join('');

        const hasMultiple = app.screenshots.length > 1;
        const dots = hasMultiple ? app.screenshots.map((_, i) =>
            `<button class="modal-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></button>`
        ).join('') : '';

        screenshotsHTML = `
            <div class="modal-screenshots-container">
                ${hasMultiple ? `<button class="modal-nav modal-nav--prev" onclick="prevScreenshot()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>` : ''}
                <div class="modal-screenshots">
                    ${screenshotItems}
                </div>
                ${hasMultiple ? `<button class="modal-nav modal-nav--next" onclick="nextScreenshot()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>` : ''}
            </div>
            ${hasMultiple ? `<div class="modal-dots">${dots}</div>` : ''}`;
    } else {
        screenshotsHTML = `
            <div class="modal-placeholder">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                </svg>
                <span data-i18n="screenshots-coming">Screenshots bientot disponibles</span>
            </div>
        `;
    }

    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeAppModal()"></div>
        <div class="modal-content">
            <button class="modal-close" onclick="closeAppModal()" aria-label="Fermer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </button>

            <div class="modal-body">
                <div class="modal-left">
                    ${screenshotsHTML}
                </div>

                <div class="modal-right">
                    <div class="modal-header">
                        <img src="${app.icon}" alt="${app.name}" class="modal-icon">
                        <div class="modal-info">
                            <h2 class="modal-name">${app.name}</h2>
                            <span class="modal-category">${category}</span>
                        </div>
                    </div>

                    <div class="modal-description">
                        <p>${description}</p>
                    </div>

                    <a href="${app.url}" target="_blank" rel="noopener" class="modal-badge">
                        <img src="${badgeSrc}" alt="App Store" data-badge="appstore">
                    </a>
                </div>
            </div>
        </div>
    `;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Setup dot clicks
    modal.querySelectorAll('.modal-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            goToScreenshot(parseInt(dot.dataset.index));
        });
    });

    // Apply translations
    if (typeof setLanguage === 'function') {
        setTimeout(() => setLanguage(lang), 10);
    }
}

function closeAppModal() {
    const modal = document.getElementById('app-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentApp = null;
}

function nextScreenshot() {
    if (!currentApp || !currentApp.screenshots.length) return;
    currentScreenshotIndex = (currentScreenshotIndex + 1) % currentApp.screenshots.length;
    updateScreenshot();
}

function prevScreenshot() {
    if (!currentApp || !currentApp.screenshots.length) return;
    currentScreenshotIndex = (currentScreenshotIndex - 1 + currentApp.screenshots.length) % currentApp.screenshots.length;
    updateScreenshot();
}

function goToScreenshot(index) {
    if (!currentApp || !currentApp.screenshots.length) return;
    currentScreenshotIndex = index;
    updateScreenshot();
}

function updateScreenshot() {
    const modal = document.getElementById('app-modal');
    const screenshots = modal.querySelectorAll('.modal-screenshot');
    const dots = modal.querySelectorAll('.modal-dot');

    screenshots.forEach((img, i) => {
        img.classList.toggle('active', i === currentScreenshotIndex);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentScreenshotIndex);
    });
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && currentApp) {
        closeAppModal();
    }
    if (currentApp && currentApp.screenshots && currentApp.screenshots.length > 0) {
        if (e.key === 'ArrowRight') nextScreenshot();
        if (e.key === 'ArrowLeft') prevScreenshot();
    }
});

// Create modal container on load
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.createElement('div');
    modal.id = 'app-modal';
    modal.className = 'app-modal';
    document.body.appendChild(modal);
});
