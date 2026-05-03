const apps = [
    {
        id: "youclip",
        name: "YouClip",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b3/1c/a0/b31ca06c-4ff0-1c74-29b1-d141485f1800/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/youclip-ai-video-summarizer/id6762062662",
        category: "cat-productivity",
        c: "AI · Productivity",
        y: "2026",
        accent: "#ff3b6b",
        tagline: "Drop a YouTube link, get a structured summary in seconds.",
        desc: "My playground for SwiftUI, OpenAI streaming and StoreKit 2. Built end-to-end in a few weekends — from API design to App Store submission.",
        features: ["AI-generated chapters", "Key takeaways", "Read or listen", "Share as Markdown"],
        tech: ["SwiftUI", "OpenAI", "StoreKit 2", "Combine"],
        screenshots: [
            "assets/youclip1.png",
            "assets/youclip2.png",
            "assets/youclip3.png",
            "assets/youclip4.png",
            "assets/youclip5.png"
        ]
    },
    {
        id: "playblox",
        name: "PlayBlox",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/47/f0/b3/47f0b38a-717c-05c2-bc9f-8fb500a74f69/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/playblox/id6756233416",
        category: "cat-games",
        c: "Puzzle",
        y: "2025",
        accent: "#f59e0b",
        tagline: "Block puzzle, reimagined for short coffee breaks.",
        desc: "Tactile haptics, satisfying clear animations. A pure SpriteKit + SwiftUI playground.",
        features: ["Daily challenges", "Game Center", "Haptic feedback", "iCloud sync"],
        tech: ["SpriteKit", "SwiftUI", "GameKit", "iCloud"],
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
        c: "Word",
        y: "2025",
        accent: "#3b82f6",
        tagline: "Daily crosswords with a clean, modern feel.",
        desc: "Hundreds of grids, hint system, and a focus on typography that doesn't fight the puzzle.",
        features: ["Daily puzzles", "Hint system", "Statistics", "Dark mode"],
        tech: ["SwiftUI", "CoreData", "StoreKit"],
        screenshots: [
            "assets/crossword1.webp",
            "assets/crossword2.webp",
            "assets/crossword3.webp",
            "assets/crossword4.webp"
        ]
    },
    {
        id: "motscroisesfr",
        name: "Mots Croisés FR",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/59/fd/ad/59fdad93-2f64-2c18-01b0-7b7abf59c0aa/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/mots-croises-fr/id6755928817",
        category: "cat-games",
        c: "Word",
        y: "2025",
        accent: "#ef4444",
        tagline: "Mots croisés français, soignés et hors ligne.",
        desc: "Le pendant français de Crossword Play : grilles bleues classiques, support des accents, et une grosse base de définitions FR.",
        features: ["Hors ligne", "Grilles FR", "Statistiques", "Mode sombre"],
        tech: ["SwiftUI", "CoreData", "StoreKit"],
        screenshots: [
            "assets/motscroisesfr1.jpg",
            "assets/motscroisesfr2.jpg",
            "assets/motscroisesfr3.jpg",
            "assets/motscroisesfr4.jpg"
        ]
    },
    {
        id: "rituo",
        name: "HabitPace",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/49/8b/65/498b655b-b13c-87a5-1f03-6f868117c7e6/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/habitpace-daily-habits/id6752529512",
        category: "cat-productivity",
        c: "Habits",
        y: "2025",
        accent: "#14b8a6",
        tagline: "Build habits at your own pace, without the streak guilt.",
        desc: "A gentler take on habit tracking. Charts that celebrate progress, not perfection. Designed around the idea that consistency beats streaks.",
        features: ["Flexible cadence", "Beautiful charts", "Apple Health sync", "Widgets"],
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
        c: "Health",
        y: "2025",
        accent: "#22c55e",
        tagline: "Smart meal planning that adapts to your week.",
        desc: "Photo-to-meal logging, weekly planner and grocery lists. Built around quick capture and friction-free editing.",
        features: ["Photo logging", "Weekly planner", "Grocery export", "Macros at a glance"],
        tech: ["SwiftUI", "VisionKit", "CoreData", "OpenAI"],
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
        id: "tictactoe",
        name: "Tic Tac Toe",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/cd/5e/6c/cd5e6cea-7aea-c23b-a534-5556590d5e0b/AppIcon-1x_U007emarketing-0-10-0-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/tic-tac-toe/id382936587",
        category: "cat-games",
        c: "Classic",
        y: "2010",
        accent: "#8b5cf6",
        tagline: "The simplest game, polished to feel just right.",
        desc: "My take on the classic — minimax AI with three difficulty levels and a Game Center friendly multiplayer.",
        features: ["3 difficulty levels", "Pass-and-play", "Game Center", "Haptics"],
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
        c: "Strategy",
        y: "2023",
        accent: "#0ea5e9",
        tagline: "Battleship reimagined with sleek visuals.",
        desc: "Naval strategy with a smart AI opponent and a polished animation layer.",
        features: ["AI opponent", "Online play", "Tournaments", "Custom boards"],
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
        id: "crossword",
        name: "CrossWord Mix",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/4a/da/4a/4ada4a61-f5cf-daec-1731-19b2ebd1dae1/AppIcon-1x_U007emarketing-0-10-0-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/crossword-mix/id6446602766",
        category: "cat-games",
        c: "Word",
        y: "2023",
        accent: "#06b6d4",
        tagline: "A mix of crossword styles in one app.",
        desc: "Multiple grid layouts and difficulty levels. Built to test SwiftUI's grid system on a real-world product.",
        features: ["Multiple layouts", "Themed packs", "Hints", "Statistics"],
        tech: ["SwiftUI", "CoreData"],
        screenshots: [
            "assets/crossword-mix1.png",
            "assets/crossword-mix2.png",
            "assets/crossword-mix3.png",
            "assets/crossword-mix4.png"
        ]
    },
    {
        id: "motscroises",
        name: "Mots croisés - Français",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/34/ae/47/34ae47af-41e1-788a-1375-f8e1bb09900e/AppIcon-1x_U007emarketing-0-10-0-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/mots-crois%C3%A9s-fran%C3%A7ais/id6446811568",
        category: "cat-games",
        c: "Word",
        y: "2023",
        accent: "#0284c7",
        tagline: "Les mots croisés à la française, version classique.",
        desc: "Grilles classiques, typographie FR, et une base de mots conséquente. Premier port complet en Swift.",
        features: ["Grilles FR classiques", "Hors ligne", "Mode sombre", "Statistiques"],
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
        c: "Trivia",
        y: "2023",
        accent: "#f43f5e",
        tagline: "Trivia that actually keeps you sharp.",
        desc: "Categorised questions, smart difficulty curve and a satisfying reveal animation.",
        features: ["10+ categories", "Daily quiz", "Streaks", "Multiplayer"],
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
        id: "goal",
        name: "Goal - Let's play",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/88/db/b2/88dbb234-0f9a-7fb0-8acb-b52949ded8ef/AppIcon-1x_U007emarketing-0-10-0-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/goal-lets-play/id1669709630",
        category: "cat-games",
        c: "Sport",
        y: "2023",
        accent: "#10b981",
        tagline: "A puzzle game where you score goals on a 2D soccer field.",
        desc: "Strategy and reflection await — score goals on a 2D soccer field with simple but addictive mechanics.",
        features: ["Multiple levels", "Strategy puzzles", "Smooth animations", "iCloud sync"],
        tech: ["UIKit", "SpriteKit", "iCloud"],
        screenshots: [
            "assets/goal1.png",
            "assets/goal2.png",
            "assets/goal3.png",
            "assets/goal4.png",
            "assets/goal5.png"
        ]
    },
    {
        id: "puzzlo",
        name: "Puzzlo",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/c6/2a/fe/c62afe97-995c-de9d-631a-3be9f67a4792/AppIcon-1x_U007emarketing-0-10-0-85-220.png/512x512bb.jpg",
        url: "https://apps.apple.com/app/puzzlo/id6447078771",
        category: "cat-games",
        c: "Puzzle",
        y: "2023",
        accent: "#a855f7",
        tagline: "Calming logic puzzles for the commute.",
        desc: "Sliding tiles, rotating mirrors, lots of small wins. Designed to be picked up for one minute.",
        features: ["100+ levels", "Daily puzzle", "Zen mode", "iCloud sync"],
        tech: ["SpriteKit", "UIKit", "iCloud"],
        screenshots: [
            "assets/puzzlo1.png",
            "assets/puzzlo2.png",
            "assets/puzzlo3.png",
            "assets/puzzlo4.png"
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
