// Génère les cartes d'apps dans le conteneur
function renderApps() {
    const container = document.querySelector('.apps-grid');
    if (!container) return;

    container.innerHTML = apps.map(app => renderCard(app)).join('');

    // Réapplique les traductions après le rendu
    if (typeof setLanguage === 'function') {
        const lang = localStorage.getItem('preferred-lang') || 'fr';
        setLanguage(lang);
    }
}

// Rendu au chargement
document.addEventListener('DOMContentLoaded', renderApps);
