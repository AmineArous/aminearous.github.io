const translations = {
    fr: {
        tagline: "Développeur iOS",
        intro: "Je crée des applications iOS intuitives et performantes.",
        myApps: "Mes Applications",
        footer: "© 2025 Amine Arous. Tous droits réservés.",
        "cat-productivity": "Productivité",
        "cat-health": "Santé & Fitness",
        "cat-games": "Jeux",
        "goal-price": "2,99 €",
        "rituo-desc": "Construisez la meilleure version de vous-même. Suivi d'habitudes intelligent avec coach IA, statistiques détaillées et Apple Watch.",
        "mealwise-desc": "Suivez votre nutrition quotidienne avec une app qui respecte votre vie privée. Vos données restent sur vos appareils.",
        "tictactoe-desc": "Le jeu de morpion ultime avec des graphismes étonnants. Jouez en solo ou affrontez des joueurs du monde entier.",
        "warship-desc": "Embarquez pour une aventure maritime palpitante ! Jouez en solo ou défiez des joueurs du monde entier.",
        "crossword-desc": "Prêt pour un nouveau défi de mots ? Des grilles dynamiques générées à l'infini pour des heures de divertissement.",
        "motscroises-desc": "Des grilles de mots croisés générées aléatoirement avec trois niveaux de difficulté pour les amateurs de langue française.",
        "brainquiz-desc": "Un jeu de puzzle innovant et addictif qui met à l'épreuve vos compétences logiques et mathématiques.",
        "goal-desc": "Un jeu de puzzle où vous devez marquer des buts sur un terrain de foot 2D. Stratégie et réflexion au rendez-vous !",
        "puzzlo-desc": "Un jeu fun et addictif qui met au défi vos compétences en puzzle. Combinez les blocs pour atteindre 4096 !"
    },
    en: {
        tagline: "iOS Developer",
        intro: "I create intuitive and powerful iOS applications.",
        myApps: "My Applications",
        footer: "© 2025 Amine Arous. All rights reserved.",
        "cat-productivity": "Productivity",
        "cat-health": "Health & Fitness",
        "cat-games": "Games",
        "goal-price": "$2.99",
        "rituo-desc": "Build the best version of yourself. Smart habit tracking with AI coach, detailed statistics and Apple Watch support.",
        "mealwise-desc": "Track your daily nutrition with an app that respects your privacy. Your data stays on your devices.",
        "tictactoe-desc": "The ultimate Tic Tac Toe game with stunning graphics. Play solo or challenge players from around the world.",
        "warship-desc": "Embark on an exciting maritime adventure! Play solo or challenge players from around the world.",
        "crossword-desc": "Ready for a new word challenge? Infinite dynamic grids generated for hours of entertainment.",
        "motscroises-desc": "Randomly generated crossword grids with three difficulty levels for French language enthusiasts.",
        "brainquiz-desc": "An innovative and addictive puzzle game that tests your logical and mathematical skills.",
        "goal-desc": "A puzzle game where you score goals on a 2D soccer field. Strategy and thinking await!",
        "puzzlo-desc": "A fun and addictive game that challenges your puzzle skills. Combine blocks to reach 4096!"
    }
};

let currentLang = 'fr';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update App Store badges
    const badgeSrc = lang === 'en' ? 'assets/appstoreen.png' : 'assets/appstorefr.png';
    document.querySelectorAll('[data-badge="appstore"]').forEach(img => {
        img.src = badgeSrc;
    });

    localStorage.setItem('preferred-lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// Load saved language preference
const savedLang = localStorage.getItem('preferred-lang');
if (savedLang) {
    setLanguage(savedLang);
}
