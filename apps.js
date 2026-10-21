const apps = [
    {
        id: "crazytrain",
        name: "Crazy Train",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/9f/5d/42/9f5d42f0-2125-8f0e-ae02-0a5355ed181d/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/escape-room-crazy-train/id6821377997",
        category: "cat-games",
        c: { en: "Escape game · Puzzle", fr: "Escape game · Énigmes" },
        y: "2026",
        accent: "#9F372C",
        tagline: {
            en: "Stop a runaway night train before the broken bridge.",
            fr: "Arrêtez un train fou avant le pont brisé."
        },
        desc: {
            en: "1886, in the Sierra Nevada, on a stormy night. You are the brakeman, alone aboard a night train rolling downhill toward a bridge broken by lightning. Open the locked doors car by car with what each one holds, reach the locomotive and stop the train in time.",
            fr: "1886, dans la Sierra Nevada, une nuit d'orage. Vous êtes serre-frein, seul à bord d'un train de nuit qui dévale vers un pont brisé par la foudre. Ouvrez les portes fermées à clé wagon après wagon avec ce que chacun contient, rejoignez la locomotive et arrêtez le train à temps."
        },
        features: {
            en: ["5 illustrated scenes", "Puzzles hidden in every object", "One hint at a time", "No account, no ads"],
            fr: ["5 scènes illustrées", "Des énigmes dans chaque objet", "Un indice à la fois", "Sans compte ni publicité"]
        },
        tech: ["SwiftUI", "Canvas", "AVFoundation", "StoreKit 2"],
        screenshots: {
            en: [
                "assets/crazytrain-en1.jpg",
                "assets/crazytrain-en2.jpg",
                "assets/crazytrain-en3.jpg",
                "assets/crazytrain-en4.jpg",
                "assets/crazytrain-en5.jpg"
            ],
            fr: [
                "assets/crazytrain-fr1.jpg",
                "assets/crazytrain-fr2.jpg",
                "assets/crazytrain-fr3.jpg",
                "assets/crazytrain-fr4.jpg",
                "assets/crazytrain-fr5.jpg"
            ]
        }
    },
    {
        id: "glyphwork",
        name: "Glyphwork",
        icon: "assets/glyphwork-icon.png",
        url: "https://apps.apple.com/app/glyphwork-widgets-themes/id6818160994",
        category: "cat-productivity",
        c: { en: "Widgets · Customization", fr: "Widgets · Personnalisation" },
        y: "2026",
        accent: "#E03A1E",
        tagline: {
            en: "Lock Screen and Home Screen widgets in 20 handcrafted themes.",
            fr: "Des widgets d'écran verrouillé et d'accueil en 20 thèmes faits main."
        },
        desc: {
            en: "Pick a theme and every widget follows it: stained glass, enamel pins, luggage tags, matchboxes, playing cards and more. Each theme redraws the clock, calendar, countdown, moon, quote and zodiac widgets with its own drawings.",
            fr: "Choisissez un thème et tous les widgets le suivent : vitrail, pin's émaillés, étiquettes de bagage, boîtes d'allumettes, cartes à jouer et plus encore. Chaque thème redessine les widgets horloge, calendrier, compte à rebours, lune, citation et zodiaque avec ses propres dessins."
        },
        features: {
            en: ["20 handcrafted themes", "10 widgets", "Lock Screen widgets", "9 languages"],
            fr: ["20 thèmes faits main", "10 widgets", "Widgets d'écran verrouillé", "9 langues"]
        },
        tech: ["SwiftUI", "WidgetKit", "App Intents", "StoreKit 2"],
        screenshots: [
            "assets/glyphwork1.jpg",
            "assets/glyphwork2.jpg",
            "assets/glyphwork3.jpg",
            "assets/glyphwork4.jpg",
            "assets/glyphwork5.jpg"
        ]
    },
    {
        id: "youclip",
        name: "YouClip",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b3/1c/a0/b31ca06c-4ff0-1c74-29b1-d141485f1800/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/youclip-ai-video-summarizer/id6762062662",
        category: "cat-productivity",
        c: { en: "AI · Productivity", fr: "IA · Productivité" },
        y: "2026",
        accent: "#ff3b6b",
        tagline: {
            en: "Drop a YouTube link, get a structured summary in seconds.",
            fr: "Collez un lien YouTube, obtenez un résumé structuré en quelques secondes."
        },
        desc: {
            en: "My playground for SwiftUI, Apple Foundation Models and StoreKit 2. Built end-to-end in a few weekends — from API design to App Store submission.",
            fr: "Mon terrain de jeu pour SwiftUI, Apple Foundation Models et StoreKit 2. Construite de bout en bout en quelques week-ends — de la conception de l'API à la soumission sur l'App Store."
        },
        features: {
            en: ["AI-generated chapters", "Key takeaways", "Read or listen", "Share as Markdown"],
            fr: ["Chapitres générés par l'IA", "Points clés", "À lire ou à écouter", "Partage en Markdown"]
        },
        tech: ["SwiftUI", "Foundation Models", "StoreKit 2", "Combine"],
        screenshots: [
            "assets/youclip1.png",
            "assets/youclip2.png",
            "assets/youclip3.png",
            "assets/youclip4.png",
            "assets/youclip5.png"
        ]
    },
    {
        id: "golazo",
        name: "Golazo",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/19/ce/e1/19cee1ab-f6e2-af0c-421c-ab41bb338e53/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/golazo-soccer-puzzle/id6778422146",
        category: "cat-games",
        c: { en: "Puzzle · Sport", fr: "Puzzle · Sport" },
        y: "2026",
        accent: "#16a34a",
        tagline: {
            en: "Score goals with your brain: a 2D football puzzle.",
            fr: "Marquez des buts avec votre cerveau : un puzzle de foot en 2D."
        },
        desc: {
            en: "Swipe a ball and it slides straight until it hits an obstacle. Arrows redirect shots, walls block them, and one ball can stop another: every level is a mini-puzzle about order and path.",
            fr: "Faites glisser un ballon et il file tout droit jusqu'au prochain obstacle. Les flèches dévient les tirs, les murs les bloquent et un ballon peut en arrêter un autre : chaque niveau est un mini-puzzle d'ordre et de trajectoire."
        },
        features: {
            en: ["One-swipe mechanics", "Dozens of crafted levels", "Stars and leagues", "Deadly trap tiles"],
            fr: ["Un seul geste pour jouer", "Des dizaines de niveaux conçus à la main", "Étoiles et ligues", "Cases pièges mortelles"]
        },
        tech: ["SwiftUI", "SpriteKit", "SceneKit", "StoreKit"],
        screenshots: [
            "assets/golazo1.jpg",
            "assets/golazo2.jpg",
            "assets/golazo3.jpg",
            "assets/golazo4.jpg",
            "assets/golazo5.jpg"
        ]
    },
    {
        id: "playblox",
        name: "PlayBlox",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/47/f0/b3/47f0b38a-717c-05c2-bc9f-8fb500a74f69/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/playblox/id6756233416",
        category: "cat-games",
        c: { en: "Puzzle", fr: "Puzzle" },
        y: "2025",
        accent: "#f59e0b",
        tagline: {
            en: "Block puzzle, reimagined for short coffee breaks.",
            fr: "Le puzzle de blocs, repensé pour les courtes pauses café."
        },
        desc: {
            en: "Tactile haptics, satisfying clear animations. A pure SwiftUI playground, drawn with Canvas.",
            fr: "Retours haptiques, animations d'effacement satisfaisantes. Un terrain de jeu 100 % SwiftUI, dessiné avec Canvas."
        },
        features: {
            en: ["Daily challenges", "Game Center", "Haptic feedback", "iCloud sync"],
            fr: ["Défis quotidiens", "Game Center", "Retours haptiques", "Synchronisation iCloud"]
        },
        tech: ["SwiftUI", "Canvas", "GameKit", "iCloud"],
        screenshots: [
            "assets/playblox1.webp",
            "assets/playblox2.webp",
            "assets/playblox3.webp",
            "assets/playblox4.webp",
            "assets/playblox5.webp",
            "assets/playblox6.webp"
        ]
    },
    {
        id: "crosswordplay",
        name: "Crossword Play",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/23/de/d0/23ded040-b542-f352-13d0-a3eb191f655b/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/6756207492",
        category: "cat-games",
        c: { en: "Word", fr: "Mots" },
        y: "2025",
        accent: "#3b82f6",
        tagline: {
            en: "Daily crosswords with a clean, modern feel.",
            fr: "Des mots croisés quotidiens au style épuré et moderne."
        },
        desc: {
            en: "Hundreds of grids, hint system, and a focus on typography that doesn't fight the puzzle.",
            fr: "Des centaines de grilles, un système d'indices et une typographie qui s'efface devant la grille."
        },
        features: {
            en: ["Daily puzzles", "Hint system", "Statistics", "Dark mode"],
            fr: ["Grilles quotidiennes", "Système d'indices", "Statistiques", "Mode sombre"]
        },
        tech: ["SwiftUI", "CoreData", "StoreKit"],
        screenshots: [
            "assets/crossword1.webp",
            "assets/crossword2.webp",
            "assets/crossword3.webp",
            "assets/crossword4.webp"
        ]
    },
    {
        id: "rituo",
        name: "HabitPace",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/49/8b/65/498b655b-b13c-87a5-1f03-6f868117c7e6/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/habitpace-daily-habits/id6752529512",
        category: "cat-productivity",
        c: { en: "Habits", fr: "Habitudes" },
        y: "2025",
        accent: "#14b8a6",
        tagline: {
            en: "Build habits at your own pace, without the streak guilt.",
            fr: "Prenez de bonnes habitudes à votre rythme, sans culpabiliser pour les séries."
        },
        desc: {
            en: "A gentler take on habit tracking. Charts that celebrate progress, not perfection. Designed around the idea that consistency beats streaks.",
            fr: "Une approche plus douce du suivi d'habitudes. Des graphiques qui célèbrent les progrès, pas la perfection. Pensée autour d'une idée : la régularité compte plus que les séries."
        },
        features: {
            en: ["Flexible cadence", "Beautiful charts", "Apple Health sync", "Widgets"],
            fr: ["Rythme flexible", "Beaux graphiques", "Synchronisation Apple Santé", "Widgets"]
        },
        tech: ["SwiftUI", "SwiftData", "HealthKit", "WidgetKit"],
        screenshots: [
            "assets/habitpace1.png",
            "assets/habitpace2.png",
            "assets/habitpace3.png",
            "assets/habitpace4.png",
            "assets/habitpace5.png"
        ]
    },
    {
        id: "mealwise",
        name: "MealWise",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a7/21/7f/a7217fc7-dea0-357e-a374-9686de6d12b8/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/mealwise/id6754667452",
        category: "cat-health",
        c: { en: "Health", fr: "Santé" },
        y: "2025",
        accent: "#22c55e",
        tagline: {
            en: "Smart meal planning that adapts to your week.",
            fr: "Une planification de repas intelligente qui s'adapte à votre semaine."
        },
        desc: {
            en: "Photo-to-meal logging, weekly planner and grocery lists. Built around quick capture and friction-free editing.",
            fr: "Saisie des repas par photo, planning hebdomadaire et listes de courses. Pensée pour une saisie rapide et une édition sans friction."
        },
        features: {
            en: ["Photo logging", "Weekly planner", "Grocery export", "Macros at a glance"],
            fr: ["Saisie par photo", "Planning hebdomadaire", "Export de la liste de courses", "Macros en un coup d'œil"]
        },
        tech: ["SwiftUI", "VisionKit", "CoreData", "Foundation Models"],
        screenshots: [
            "assets/MealWise1.png",
            "assets/MealWise2.png",
            "assets/MealWise3.png",
            "assets/MealWise4.png",
            "assets/MealWise5.png",
            "assets/MealWise6.png"
        ]
    },
    {
        id: "4bulls",
        name: "4 Bulls",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/9d/6a/d5/9d6ad5b7-79e0-ad6e-b74b-ec94923c89c8/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/4-bulls/id6752808345",
        category: "cat-games",
        c: { en: "Logic", fr: "Logique" },
        y: "2025",
        accent: "#f97316",
        tagline: {
            en: "Guess the secret 4-digit code before the bull does.",
            fr: "Devinez le code secret à 4 chiffres avant le taureau."
        },
        desc: {
            en: "The classic Bulls and Cows logic game: every guess gives clues, a cow for a right digit in the wrong place, a bull for a right digit in the right place. Fast rounds, a colorful design and a leaderboard.",
            fr: "Le jeu de logique classique Taureaux et Vaches : chaque essai donne des indices, une vache pour un bon chiffre mal placé, un taureau pour un bon chiffre bien placé. Des parties rapides, un design coloré et un classement."
        },
        features: {
            en: ["Bulls & Cows logic", "Score streaks", "Leaderboard", "Hundreds of combinations"],
            fr: ["Logique Taureaux et Vaches", "Séries de points", "Classement", "Des centaines de combinaisons"]
        },
        tech: ["SwiftUI", "SwiftData", "MultipeerConnectivity", "StoreKit"],
        screenshots: [
            "assets/4bulls1.jpg",
            "assets/4bulls2.jpg",
            "assets/4bulls3.jpg",
            "assets/4bulls4.jpg",
            "assets/4bulls5.jpg"
        ]
    },
    {
        id: "tictactoe",
        name: "Tic Tac Toe",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/cd/5e/6c/cd5e6cea-7aea-c23b-a534-5556590d5e0b/AppIcon-1x_U007emarketing-0-10-0-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/tic-tac-toe/id382936587",
        category: "cat-games",
        c: { en: "Classic", fr: "Classique" },
        y: "2010",
        accent: "#8b5cf6",
        tagline: {
            en: "The simplest game, polished to feel just right.",
            fr: "Le jeu le plus simple, peaufiné pour être juste parfait."
        },
        desc: {
            en: "My take on the classic — minimax AI with three difficulty levels and a Game Center friendly multiplayer.",
            fr: "Ma version du classique — une IA minimax avec trois niveaux de difficulté et un multijoueur compatible Game Center."
        },
        features: {
            en: ["3 difficulty levels", "Pass-and-play", "Game Center", "Haptics"],
            fr: ["3 niveaux de difficulté", "À deux sur le même appareil", "Game Center", "Retours haptiques"]
        },
        tech: ["SwiftUI", "GameKit"],
        screenshots: [
            "assets/Tictactoe1.png",
            "assets/Tictactoe2.png",
            "assets/Tictactoe3.png",
            "assets/Tictactoe4.png"
        ]
    },
    {
        id: "warship",
        name: "Warship Challenge",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/04/2b/d2/042bd23a-512d-e677-f266-b9e2dd458803/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/warship-challenge/id6446063559",
        category: "cat-games",
        c: { en: "Strategy", fr: "Stratégie" },
        y: "2023",
        accent: "#0ea5e9",
        tagline: {
            en: "Battleship reimagined with sleek visuals.",
            fr: "La bataille navale réinventée avec des visuels élégants."
        },
        desc: {
            en: "Naval strategy with a smart AI opponent and a polished animation layer.",
            fr: "De la stratégie navale avec un adversaire IA malin et des animations soignées."
        },
        features: {
            en: ["AI opponent", "Online play", "Tournaments", "Custom boards"],
            fr: ["Adversaire IA", "Jeu en ligne", "Tournois", "Plateaux personnalisés"]
        },
        tech: ["SpriteKit", "GameKit", "Combine"],
        screenshots: [
            "assets/bn1.png",
            "assets/bn2.png",
            "assets/bn3.png",
            "assets/bn4.png",
            "assets/bn5.png"
        ]
    },
    {
        id: "motscroises",
        name: "Mots croisés - Français",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/34/ae/47/34ae47af-41e1-788a-1375-f8e1bb09900e/AppIcon-1x_U007emarketing-0-10-0-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/mots-crois%C3%A9s-fran%C3%A7ais/id6446811568",
        category: "cat-games",
        c: { en: "Word", fr: "Mots" },
        y: "2023",
        accent: "#0284c7",
        tagline: {
            en: "French-style crosswords, the classic way.",
            fr: "Les mots croisés à la française, version classique."
        },
        desc: {
            en: "Classic grids, French typography and a large word base. First full port in Swift.",
            fr: "Grilles classiques, typographie FR, et une base de mots conséquente. Premier port complet en Swift."
        },
        features: {
            en: ["Classic French grids", "Offline", "Dark mode", "Statistics"],
            fr: ["Grilles FR classiques", "Hors ligne", "Mode sombre", "Statistiques"]
        },
        tech: ["UIKit", "CoreData", "StoreKit"],
        screenshots: [
            "assets/crosswordfr1.png",
            "assets/crosswordfr2.png",
            "assets/crosswordfr3.png"
        ]
    },
    {
        id: "brainquiz",
        name: "Brain Quiz Master",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/6d/de/f4/6ddef403-dc71-614c-7e74-0cf48040fcf4/AppIcon-1x_U007emarketing-0-10-0-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/brain-quiz-master/id6446297886",
        category: "cat-games",
        c: { en: "Trivia", fr: "Quiz" },
        y: "2023",
        accent: "#f43f5e",
        tagline: {
            en: "Trivia that actually keeps you sharp.",
            fr: "Un quiz qui vous garde vraiment l'esprit vif."
        },
        desc: {
            en: "Categorised questions, smart difficulty curve and a satisfying reveal animation.",
            fr: "Des questions par catégorie, une difficulté qui progresse intelligemment et une animation de réponse satisfaisante."
        },
        features: {
            en: ["10+ categories", "Daily quiz", "Streaks", "Multiplayer"],
            fr: ["Plus de 10 catégories", "Quiz quotidien", "Séries", "Multijoueur"]
        },
        tech: ["SwiftUI", "CloudKit", "GameKit"],
        screenshots: [
            "assets/brain-quiz-master1.png",
            "assets/brain-quiz-master2.png",
            "assets/brain-quiz-master3.png",
            "assets/brain-quiz-master4.png",
            "assets/brain-quiz-master5.webp"
        ]
    },
    {
        id: "crossmix",
        name: "Crossmix",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/54/d5/cf/54d5cf98-1ae8-0b7e-aee4-6ee813be7de5/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/crossmix-word-search-puzzle/id6446441786",
        category: "cat-games",
        c: { en: "Word", fr: "Mots" },
        y: "2023",
        accent: "#06b6d4",
        tagline: {
            en: "Endless crossword grids, generated on the fly.",
            fr: "Des grilles de mots croisés à l'infini, générées à la volée."
        },
        desc: {
            en: "A word game that generates infinite dynamic grids, with three difficulty levels and hints for the tricky words.",
            fr: "Un jeu de mots qui génère des grilles dynamiques à l'infini, avec trois niveaux de difficulté et des indices pour les mots difficiles."
        },
        features: {
            en: ["Infinite grids", "3 difficulty levels", "Hints", "Free to play"],
            fr: ["Grilles infinies", "3 niveaux de difficulté", "Indices", "Gratuit"]
        },
        tech: ["SwiftUI", "CoreData", "StoreKit"],
        screenshots: [
            "assets/crossmix1.jpg",
            "assets/crossmix2.jpg",
            "assets/crossmix3.jpg",
            "assets/crossmix4.jpg",
            "assets/crossmix5.jpg"
        ]
    },
    {
        id: "ipuzzle",
        name: "iPuzzle",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/2c/c0/00/2cc000e3-9852-eea5-5637-9c6209363348/AppIcon-1x_U007emarketing-0-10-0-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/ipuzzle-lets-play/id6445866276",
        category: "cat-games",
        c: { en: "Puzzle", fr: "Puzzle" },
        y: "2023",
        accent: "#a855f7",
        tagline: {
            en: "Turn any photo into a jigsaw puzzle.",
            fr: "Transformez n'importe quelle photo en puzzle."
        },
        desc: {
            en: "Pick a free photo or one of your own and play it as a jigsaw puzzle, with several difficulty levels.",
            fr: "Choisissez une photo gratuite ou l'une des vôtres et jouez-la en puzzle, avec plusieurs niveaux de difficulté."
        },
        features: {
            en: ["Free photo library", "Your own photos", "Difficulty levels"],
            fr: ["Photothèque gratuite", "Vos propres photos", "Niveaux de difficulté"]
        },
        tech: ["SwiftUI", "SpriteKit", "Combine"],
        screenshots: [
            "assets/ipuzzle1.jpg",
            "assets/ipuzzle2.jpg",
            "assets/ipuzzle3.jpg",
            "assets/ipuzzle4.jpg",
            "assets/ipuzzle5.jpg"
        ]
    },
    {
        id: "crosswordar1",
        name: "كلمات متقاطعة - لعبة ألغاز",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/8d/f1/88/8df18819-5d7f-9907-a92a-08f3f4c3ff97/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/id6446803444",
        category: "cat-games",
        c: { en: "Word · Arabic", fr: "Mots · Arabe" },
        y: "2023",
        accent: "#0d9488",
        tagline: {
            en: "Arabic crosswords with endless grids.",
            fr: "Des mots croisés en arabe avec des grilles à l'infini."
        },
        desc: {
            en: "An Arabic crossword game with endlessly generated grids and three difficulty levels, from easy to hard.",
            fr: "Un jeu de mots croisés en arabe avec des grilles générées à l'infini et trois niveaux de difficulté, du facile au difficile."
        },
        features: {
            en: ["Endless grids", "3 difficulty levels", "Arabic words", "Free to play"],
            fr: ["Grilles à l'infini", "3 niveaux de difficulté", "Mots en arabe", "Gratuit"]
        },
        tech: ["SwiftUI", "CoreData", "StoreKit"],
        screenshots: [
            "assets/crosswordar11.jpg",
            "assets/crosswordar12.jpg",
            "assets/crosswordar13.jpg",
            "assets/crosswordar14.jpg",
            "assets/crosswordar15.jpg"
        ]
    },
    {
        id: "crosswordar2",
        name: "كلمات متقاطعة: لعبة ذكاء وتحدي",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/dc/6e/a9/dc6ea9b8-03b7-ece2-d646-0fd7355edebb/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/id6446788204",
        category: "cat-games",
        c: { en: "Word · Arabic", fr: "Mots · Arabe" },
        y: "2023",
        accent: "#7c3aed",
        tagline: {
            en: "Hundreds of Arabic words in grids that never repeat.",
            fr: "Des centaines de mots arabes dans des grilles qui ne se répètent jamais."
        },
        desc: {
            en: "An Arabic word game redesigned with a modern look and several themes: new grids every time, three levels and hints for the hard words.",
            fr: "Un jeu de mots en arabe repensé avec un look moderne et plusieurs thèmes : de nouvelles grilles à chaque partie, trois niveaux et des indices pour les mots difficiles."
        },
        features: {
            en: ["Grids that never repeat", "3 difficulty levels", "Hints", "Multiple themes"],
            fr: ["Grilles qui ne se répètent jamais", "3 niveaux de difficulté", "Indices", "Plusieurs thèmes"]
        },
        tech: ["SwiftUI", "StoreKit", "UserNotifications"],
        screenshots: [
            "assets/crosswordar21.jpg",
            "assets/crosswordar22.jpg",
            "assets/crosswordar23.jpg",
            "assets/crosswordar24.jpg",
            "assets/crosswordar25.jpg"
        ]
    }
];

// Pro apps (Amine's employers) — used in the apps marquee + chapter related-apps
const PRO_APPS = [
    { n: 'ALL — Accor Hotels',  c: 'Accor · 2023→',          q: 'accor all hotels',      bundle: 'com.accor.fr',       color: '#1c1c4f' },
    { n: 'Meetic',              c: 'Match Group · 2022',     q: 'meetic',                bundle: 'com.meetic.meetic',  color: '#ff5b86' },
    { n: 'PagesJaunes',         c: 'Solocal · 2015→22',      q: 'pagesjaunes',           bundle: 'com.pagesjaunes.app', color: '#ffcc00' },
    { n: 'Intermarché',         c: 'STIME · 2014→15',        q: 'intermarché courses',   bundle: 'com.intermarche.fr', color: '#e30613' }
];
