// Style App Store - grande carte avec fond dégradé
function renderCard(app) {
    const priceHtml = app.price
        ? `<span class="price" data-i18n="${app.price}"></span>`
        : '<span class="price free">Gratuit</span>';

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
                <a href="${app.url}" class="app-card__get" target="_blank" rel="noopener">GET</a>
            </div>
            <p class="app-description" data-i18n="${app.descKey}"></p>
        </article>
    `;
}
