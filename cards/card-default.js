// Card template
function renderCard(app) {
    const lang = localStorage.getItem('preferred-lang') || 'fr';
    const theme = document.documentElement.getAttribute('data-theme');
    const isDark = theme === 'dark';
    let badgeSrc;
    if (lang === 'en') {
        badgeSrc = isDark ? 'assets/appstoreen-dark.svg' : 'assets/appstoreen.svg';
    } else {
        badgeSrc = isDark ? 'assets/appstorefr-dark.svg' : 'assets/appstorefr.svg';
    }

    return `
        <article class="app-card app-card--appstore" data-app-id="${app.id}">
            <div class="app-card__header">
                <div class="app-icon">
                    <img src="${app.icon}" alt="${app.name}">
                </div>
                <div class="app-card__title">
                    <h3>${app.name}</h3>
                    <span class="category" data-i18n="${app.category}"></span>
                </div>
                <a href="${app.url}" class="app-store-badge" target="_blank" rel="noopener">
                    <img src="${badgeSrc}" alt="App Store" data-badge="appstore">
                </a>
            </div>
            <p class="app-description" data-i18n="${app.descKey}"></p>
        </article>
    `;
}
