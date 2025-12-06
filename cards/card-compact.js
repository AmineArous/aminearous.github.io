// Style compact - carte verticale centrée, idéale pour grille dense
function renderCard(app) {
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
}
