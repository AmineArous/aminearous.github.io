// Style App Store - grande carte avec fond dégradé
function renderCard(app) {
    const lang = localStorage.getItem('preferred-lang') || 'fr';
    const badgeSrc = lang === 'en' ? 'assets/appstoreen.png' : 'assets/appstorefr.png';

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
                    <img src="${badgeSrc}" alt="App Store" data-badge="appstore">
                </a>
            </div>
            <p class="app-description" data-i18n="${app.descKey}"></p>
        </article>
    `;
}
