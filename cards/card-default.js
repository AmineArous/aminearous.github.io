// Style par défaut - carte horizontale avec icône à gauche
function renderCard(app) {
    const priceHtml = app.price
        ? `<span class="price" data-i18n="${app.price}"></span>`
        : '';

    const lang = localStorage.getItem('preferred-lang') || 'fr';
    const badgeSrc = lang === 'en' ? 'assets/appstoreen.png' : 'assets/appstorefr.png';

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
                    <img src="${badgeSrc}" alt="App Store" data-badge="appstore">
                </a>
            </div>
        </article>
    `;
}
