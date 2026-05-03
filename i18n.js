const translations = {
    en: {
        // Brand & nav
        'brand': 'Amine Arous',
        'nav-story': 'Story',
        'nav-work': 'Work',
        'nav-contact': 'Contact',

        // Hero
        'hero-badge': 'Available for freelance · {month} {year}',
        'hero-l1': 'Quiet code.',
        'hero-l2': 'Loud impact.',
        'hero-sub': "I'm Amine Arous — a Paris-based iOS engineer with 15 years of shipping. From Accor to my own indie apps, I build products that feel right.",
        'scroll': 'SCROLL TO EXPLORE',

        // Stats
        'stat-1': 'Years shipping',
        'stat-2': 'Apps on the Store',
        'stat-3': 'Companies trusted',
        'stat-4': 'Lines of Swift',

        // Story
        'story-eyebrow': 'The story so far',
        'story-title': 'Fifteen years of',
        'story-title-em': 'shaping for mobile.',

        // Chapters (CH.01 = 2010 Smartfingers; corrected age 28)
        'ch1-title': 'First app on the Store.',
        'ch1-body': 'Smartfingers Media · Insign Group. Objective-C, an iPhone 4, and the magic of seeing your code travel in someone\'s pocket. Four years of shipping mobile apps for clients across France.',
        'ch1-details': '• iPhone app development: Le Journal du Dimanche, Unifrance, Le Petit Paumé, Grazia Shopping\n• iPad app development: Renault Trucks, Volvo, Pathé, Krys\n• Web services development and database management\n• Operational responsibility for multiple mobile projects\n• Technology watch',

        'ch2-title': 'Retail at scale — STIME.',
        'ch2-body': 'A year inside Les Mousquetaires (Intermarché) building retail apps used in stores. CoreData, REST APIs, and learning what production-grade really means.',
        'ch2-details': '• Development of the lot management feature\n• Implementation of real-time order modification\n• Integration of stock management system\n• Application performance optimization\n• Collaboration with backend team on REST APIs',

        'ch3-title': 'Solocal Group — PagesJaunes.',
        'ch3-body': 'From Objective-C to Swift. From UIKit to Widgets and Siri Shortcuts. I helped lead the migration of a legacy app used by millions of French users — and learned to ship at scale, week after week.',
        'ch3-details': '• Tech Lead of a team of 4 iOS developers\n• Development of iOS 14 Widget (WidgetKit)\n• Creation of App Clip for quick search\n• Integration of Siri Shortcuts\n• Setup and maintenance of CI/CD with Bitrise\n• Progressive migration from Objective-C to Swift',

        'ch4-title': 'Match Group — Meetic.',
        'ch4-body': 'A year inside the dating giant. Reactive architecture (RxSwift, MVVM), Fastlane pipelines, and shipping features to millions of European users.',
        'ch4-details': '• Release manager for 8 applications (Meetic, DisonsDemain, Match...)\n• Development of new matching features\n• A/B testing integration to optimize conversions\n• Release automation with Fastlane\n• Collaboration with international product teams',

        'ch5-year': 'Since 2023',
        'ch5-title': 'Today · Senior iOS @ Accor.',
        'ch5-body': 'Crafting the next-generation Accor app for travelers worldwide. SwiftUI-first, Combine, GraphQL, MVVM. Polishing every interaction so booking a hotel feels effortless.',
        'ch5-details': '• Development of the Accor Deals feature (promotional offers)\n• Implementation of personalized Year in Review\n• Architecture refactoring to MVVM + Combine\n• Progressive migration to SwiftUI\n• Improvement of unit test coverage',

        'ch6-year': 'Since 2010',
        'ch6-title': 'Indie · {count} apps and counting.',
        'ch6-body': "After hours, I build my own apps. Games, productivity, AI experiments. It's where I stay sharp, take risks, and have fun. Every app on the App Store under my own name.",
        'ch6-details': '• {count} apps shipped solo on the App Store\n• SwiftUI-first, StoreKit 2 monetisation\n• Integrated OpenAI and RevenueCat\n• Designed, built, marketed end-to-end\n• Continuous experimentation with new APIs',

        // Featured
        'feat-eyebrow': '★ Latest release',
        'feat-title': 'YouClip —',
        'feat-title-em': 'AI that gets to the point.',
        'feat-body': 'Drop a YouTube link, get a structured summary in seconds. My playground for SwiftUI animations, Combine streams, and StoreKit 2 — shipped solo in 2025.',
        'feat-cta': 'View on App Store',

        // Apps grid
        'work-eyebrow': 'My indie playground',
        'work-title': '{count} apps,',
        'work-title-em': 'shipped solo.',

        // Outro / footer
        'outro-l1': 'Got an iOS',
        'outro-l2': 'project in mind?',
        'outro-or': 'or find me on',
        'foot-craft': 'Crafted with care & coffee',

        // Chapter related apps labels
        'ch-related-label': 'Apps shipped during this chapter',
        'ch-download-label': 'Download',

        // Modal labels
        'modal-screenshots': 'Screenshots',
        'modal-about': 'About this app',
        'modal-features': "What's inside",
        'modal-built': 'Built with',
        'modal-stat-year': 'Year',
        'modal-stat-cat': 'Category',
        'modal-stat-by': 'Made by',
        'modal-stat-by-value': 'Solo',
        'modal-cta-store': 'View on App Store',
        'modal-close': 'Close',

        // Months (for hero badge)
        'month-1': 'January', 'month-2': 'February', 'month-3': 'March', 'month-4': 'April',
        'month-5': 'May', 'month-6': 'June', 'month-7': 'July', 'month-8': 'August',
        'month-9': 'September', 'month-10': 'October', 'month-11': 'November', 'month-12': 'December'
    },
    fr: {
        'brand': 'Amine Arous',
        'nav-story': 'Parcours',
        'nav-work': 'Apps',
        'nav-contact': 'Contact',

        'hero-badge': 'Disponible en freelance · {month} {year}',
        'hero-l1': 'Code discret.',
        'hero-l2': 'Impact fort.',
        'hero-sub': "Je m'appelle Amine Arous — ingénieur iOS à Paris, 15 ans à publier des apps. D'Accor à mes propres apps indé, je conçois des produits qui font juste.",
        'scroll': 'FAITES DÉFILER',

        'stat-1': 'Ans à publier',
        'stat-2': "Apps sur l'App Store",
        'stat-3': 'Entreprises de confiance',
        'stat-4': 'Lignes de Swift',

        'story-eyebrow': "L'histoire jusqu'ici",
        'story-title': 'Quinze ans à',
        'story-title-em': 'façonner pour le mobile.',

        'ch1-title': 'Première app sur le Store.',
        'ch1-body': "Smartfingers Media · Insign Group. Objective-C, un iPhone 4, et la magie de voir son code voyager dans la poche des gens. Quatre ans à publier des apps mobiles pour des clients partout en France.",
        'ch1-details': "• Développement d'applications iPhone : Le Journal du Dimanche, Unifrance, Le Petit Paumé, Grazia Shopping\n• Développement d'applications iPad : Renault Trucks, Volvo, Pathé, Krys\n• Développement de web services et gestion de bases de données\n• Responsabilité opérationnelle de multiples projets mobiles\n• Veille technologique",

        'ch2-title': "Le retail à l'échelle — STIME.",
        'ch2-body': "Un an chez Les Mousquetaires (Intermarché) à concevoir des apps utilisées en magasin. CoreData, API REST, et la découverte du vrai niveau production.",
        'ch2-details': "• Développement de la fonctionnalité de gestion des lots\n• Implémentation de la modification de commandes en temps réel\n• Intégration du système de gestion de stock\n• Optimisation des performances de l'application\n• Collaboration avec l'équipe backend sur les APIs REST",

        'ch3-title': 'Groupe Solocal — PagesJaunes.',
        'ch3-body': "D'Objective-C à Swift. D'UIKit aux Widgets et Raccourcis Siri. J'ai accompagné la migration d'une app legacy utilisée par des millions de Français — et appris à livrer à grande échelle, semaine après semaine.",
        'ch3-details': "• Tech Lead d'une équipe de 4 développeurs iOS\n• Développement du Widget iOS 14 (WidgetKit)\n• Création de l'App Clip pour la recherche rapide\n• Intégration de Siri Shortcuts\n• Mise en place et maintenance du CI/CD avec Bitrise\n• Migration progressive d'Objective-C vers Swift",

        'ch4-title': 'Match Group — Meetic.',
        'ch4-body': "Un an chez le géant de la rencontre. Architecture réactive (RxSwift, MVVM), pipelines Fastlane, et features livrées à des millions d'utilisateurs européens.",
        'ch4-details': "• Release manager pour 8 applications (Meetic, DisonsDemain, Match...)\n• Développement de nouvelles fonctionnalités de matching\n• Intégration de A/B testing pour optimiser les conversions\n• Automatisation des releases avec Fastlane\n• Collaboration avec les équipes produit internationales",

        'ch5-year': 'Depuis 2023',
        'ch5-title': "Aujourd'hui · iOS Senior chez Accor.",
        'ch5-body': "Construire l'app Accor de nouvelle génération pour les voyageurs du monde entier. SwiftUI d'abord, Combine, GraphQL, MVVM. Soigner chaque interaction pour que réserver un hôtel semble évident.",
        'ch5-details': "• Développement de la feature Accor Deals (offres promotionnelles)\n• Implémentation du Year in Review personnalisé\n• Refactoring de l'architecture vers MVVM + Combine\n• Migration progressive vers SwiftUI\n• Amélioration de la couverture de tests unitaires",

        'ch6-year': 'Depuis 2010',
        'ch6-title': "Indé · {count} apps, et ça continue.",
        'ch6-body': "Après le boulot, je construis mes propres apps. Jeux, productivité, expériences IA. C'est là que je teste, je prends des risques, et je m'amuse. Chaque app publiée sur l'App Store sous mon propre nom.",
        'ch6-details': "• {count} apps publiées seul sur le App Store\n• SwiftUI-first, monétisation StoreKit 2\n• Intégration de OpenAI et RevenueCat\n• Design, dev, marketing — bout en bout\n• Expérimentation continue avec les nouvelles APIs",

        'feat-eyebrow': '★ Dernière sortie',
        'feat-title': 'YouClip —',
        'feat-title-em': "l'IA qui va à l'essentiel.",
        'feat-body': "Collez un lien YouTube, obtenez un résumé structuré en quelques secondes. Mon terrain de jeu pour les animations SwiftUI, les streams Combine et StoreKit 2 — publié en solo en 2025.",
        'feat-cta': "Voir sur l'App Store",

        'work-eyebrow': 'Mon terrain de jeu indé',
        'work-title': '{count} apps,',
        'work-title-em': 'publiées en solo.',

        'outro-l1': 'Un projet iOS',
        'outro-l2': 'en tête ?',
        'outro-or': 'ou trouvez-moi sur',
        'foot-craft': 'Conçu avec soin et café',

        'ch-related-label': 'Apps publiées pendant ce chapitre',
        'ch-download-label': 'Télécharger',

        'modal-screenshots': "Captures d'écran",
        'modal-about': 'À propos',
        'modal-features': 'Ce qui se cache dedans',
        'modal-built': 'Construit avec',
        'modal-stat-year': 'Année',
        'modal-stat-cat': 'Catégorie',
        'modal-stat-by': 'Par',
        'modal-stat-by-value': 'Solo',
        'modal-cta-store': "Voir sur l'App Store",
        'modal-close': 'Fermer',

        'month-1': 'Janvier', 'month-2': 'Février', 'month-3': 'Mars', 'month-4': 'Avril',
        'month-5': 'Mai', 'month-6': 'Juin', 'month-7': 'Juillet', 'month-8': 'Août',
        'month-9': 'Septembre', 'month-10': 'Octobre', 'month-11': 'Novembre', 'month-12': 'Décembre'
    }
};
