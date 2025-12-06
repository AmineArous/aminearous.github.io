// Helper pour le badge App Store selon la langue
function getAppStoreBadge() {
    const lang = localStorage.getItem('preferred-lang') || 'fr';
    return lang === 'en' ? 'assets/appstoreen.png' : 'assets/appstorefr.png';
}

// Card style templates
const cardStyles = {
    default: function(app) {
        const priceHtml = app.price
            ? `<span class="price" data-i18n="${app.price}"></span>`
            : '';

        return `
            <article class="app-card">
                <div class="app-icon">
                    <img src="${app.icon}" alt="${app.name}">
                </div>
                <div class="app-info">
                    <h3>${app.name}</h3>
                    <p class="app-description" data-i18n="${app.descKey}"></p>
                    <div class="app-meta">
                        <span class="category" data-i18n="${app.category}"></span>
                        ${priceHtml}
                    </div>
                    <a href="${app.url}" class="app-store-badge" target="_blank" rel="noopener">
                        <img src="${getAppStoreBadge()}" alt="App Store" data-badge="appstore">
                    </a>
                </div>
            </article>
        `;
    },

    compact: function(app) {
        return `
            <article class="app-card app-card--compact">
                <a href="${app.url}" target="_blank" rel="noopener" class="app-card__link">
                    <div class="app-icon">
                        <img src="${app.icon}" alt="${app.name}">
                    </div>
                    <h3>${app.name}</h3>
                    <span class="category" data-i18n="${app.category}"></span>
                </a>
            </article>
        `;
    },

    appstore: function(app) {
        return `
            <article class="app-card app-card--appstore">
                <div class="app-card__header">
                    <div class="app-icon">
                        <img src="${app.icon}" alt="${app.name}">
                    </div>
                    <div class="app-card__title">
                        <h3>${app.name}</h3>
                        <span class="category" data-i18n="${app.category}"></span>
                    </div>
                    <a href="${app.url}" class="app-store-badge" target="_blank" rel="noopener">
                        <img src="${getAppStoreBadge()}" alt="App Store" data-badge="appstore">
                    </a>
                </div>
                <p class="app-description" data-i18n="${app.descKey}"></p>
            </article>
        `;
    }
};

let currentStyle = 'default';

function setCardStyle(style) {
    if (!cardStyles[style]) return;

    currentStyle = style;

    // Update renderCard function
    window.renderCard = cardStyles[style];

    // Re-render apps
    renderApps();

    // Update active button
    document.querySelectorAll('.style-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.style === style);
    });

    // Save preference
    localStorage.setItem('preferred-card-style', style);
}

// Initialize style switcher
document.addEventListener('DOMContentLoaded', () => {
    // Set up click handlers
    document.querySelectorAll('.style-btn').forEach(btn => {
        btn.addEventListener('click', () => setCardStyle(btn.dataset.style));
    });

    // Load saved preference
    const savedStyle = localStorage.getItem('preferred-card-style') || 'default';
    if (savedStyle !== 'default') {
        setCardStyle(savedStyle);
    }
});
