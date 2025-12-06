// Génère les cartes d'apps dans le conteneur
function renderApps() {
    const container = document.querySelector('.apps-grid');
    if (!container) return;

    container.innerHTML = apps.map(app => renderCard(app)).join('');

    // Setup scroll animation
    observeAppCards();

    // Setup click events for app cards
    setupAppCardClicks();

    // Réapplique les traductions après le rendu
    if (typeof setLanguage === 'function') {
        const lang = localStorage.getItem('preferred-lang') || 'fr';
        setLanguage(lang);
    }
}

// Configure les clics sur les cartes d'apps pour ouvrir la modal
function setupAppCardClicks() {
    document.querySelectorAll('.app-card').forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            // Ne pas ouvrir la modal si on clique sur le badge App Store
            if (e.target.closest('.app-store-badge')) return;

            const appId = card.dataset.appId;
            if (appId && typeof openAppModal === 'function') {
                openAppModal(appId);
            }
        });
    });
}

function observeAppCards() {
    const cards = document.querySelectorAll('.app-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Get the index for stagger effect
                const allCards = Array.from(document.querySelectorAll('.app-card'));
                const index = allCards.indexOf(entry.target);

                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    cards.forEach(card => observer.observe(card));
}

// Rendu au chargement
document.addEventListener('DOMContentLoaded', renderApps);
