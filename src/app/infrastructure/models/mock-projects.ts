import { Project } from "./projects";


export const fr: Project[] = [
    {
        id: 1,
        name: "Spacerum",
        description: "C'est un application web, où l'utilisateur créer son propre espace dans lequel il peut sauvegarder des fichiers, des contacts, etc... Avec une connexion sécurisé avec clé d'identification envoyé par mail.",
        technos: ["html", "css", 'javascript', 'nodejs', 'sql'],
        link: {
            github: "https://github.com/QuentinLagree/Spacerum",
        }
    },
    {
        id: 6,
        name: "Application de gestion de Pokémon",
        description: "Application créée lors d'une formation sur le Framework Javascript Angular. Gestion de Pokémon : créer, modifier, supprimer, lister.",
        technos: ["html", "css", "javascript", "angular"],
        link: {
            github: "https://github.com/QuentinLagree/ng-pokemon-app",
            demo: 'https://pokemon-app-281ef.web.app'
        }
    },
    {
        id: 5,
        name: "Portfolio",
        description: "Il s'agit de l'application web dans lequel vous êtes actuellement.",
        technos: ["html", "css", "javascript", "typescript", "angular"],
        link: {
            github: "https://github.com/QuentinLagree/Portfolio"
        }
    },
    {
        id: 2,
        name: "Défis en 1h - Animation CSS",
        description: "Création d'une animation CSS fluide avec des durées et délais différents afin de dynamiser l'entrer dans un site web. Ce défi avait une contrainte : la mise en place de cette animation devait être faite en 1h maximum.",
        technos: ["html", "css"],
        link: {
            github: "https://github.com/QuentinLagree/metropolis-challenge",
            demo: 'https://quentinlagree.github.io/metropolis-challenge/'
        }
    },
    {
        id: 3,
        name: "Intégration d'une calculatrice.",
        description: "Création d'une calculatrice simple. Un de mes tous premier projet web.",
        technos: ["html", "css", "javascript"],
        link: {
            github: 'https://github.com/QuentinLagree/Calculatrice',
            demo: 'https://quentinlagree.github.io/Calculatrice/'
        }
    },
    {
        id: 4,
        name: "Bot Discord",
        description: "Création d'un robot discord multi-tâches.",
        technos: ["javascript"],
        link: {
            github: 'https://github.com/QuentinLagree/Treason-bot-discord-'
        }
    },
    {
        id: 7,
        name: "Todo-List",
        description: "Création d'une todo-list. Projet réaliser afin de pratiquer la nouvelle technologie : Angular",
        technos: ["html", "css", "javascript", "typescript", "angular"],
        link: {
            github: "https://github.com/QuentinLagree/todo-list",
            demo: 'https://todolist-cae02.web.app/'
        }
    },
    {
        id: 8,
        name: "Création de plugin Minecraft : Serveur Hystine",
        description: "Création d'un plugin minecraft afin de guider mes joueurs sur un serveur. Création de la partie évenements, commandes, base de données.",
        technos: ["java", 'sql'],
        link: {
            github: "https://github.com/QuentinLagree/HystineServer"
        }
    }
]

export const en: Project[] = [
    {
        id: 1,
        name: "Spacerum",
        description: "It's a website that lets you create a space where you can save files and contacts, so you can have everything in one place.",
        technos: ["html", "css", 'javascript', 'nodejs', 'sql'],
        link: {
            github: "https://github.com/QuentinLagree/Spacerum",
        }
    },
    {
        id: 6,
        name: "Pokemon management application",
        description: "Application created during training on the Angular Javascript Framework. Pokémon management: create, modify, delete, list.",
        technos: ["html", "css", "javascript", "angular"],
        link: {
            github: "https://github.com/QuentinLagree/ng-pokemon-app",
            demo: 'https://pokemon-app-281ef.web.app'
        }
    },
    {
        id: 2,
        name: "Challenges in 1h - CSS animation",
        description: "Create a very fluid CSS animation with different durations and delays to energize a web page using only CSS. This challenge had one constraint: I had to create this animation in 1 hour maximum.",
        technos: ["html", "css"],
        link: {
            github: "https://github.com/QuentinLagree/metropolis-challenge",
            demo: 'https://quentinlagree.github.io/metropolis-challenge/'
        }
    },
    {
        id: 5,
        name: "Portfolio",
        description: "The site you are currently on.",
        technos: ["html", "css", "javascript", "typescript", "angular"],
        link: {
            github: "https://github.com/QuentinLagree/Portfolio"
        }
    },
    {
        id: 3,
        name: "Calculator integration.",
        description: "Creation of a calculator, the start of my apprenticeship.",
        technos: ["html", "css", "javascript"],
        link: {
            github: 'https://github.com/QuentinLagree/Calculatrice',
            demo: 'https://quentinlagree.github.io/Calculatrice/'
        }
    },
    {
        id: 4,
        name: "Bot Discord",
        description: "Create discord bot: Banning, Mute, Voicemail rooms, Mpodaration, discord server management...",
        technos: ["javascript"],
        link: {
            github: 'https://github.com/QuentinLagree/Treason-bot-discord-'
        }
    },
    {
        id: 7,
        name: "Todo-List",
        description: "Creation of a todo-list. Project to practice new technology: Angular",
        technos: ["html", "css", "javascript", "typescript", "angular"],
        link: {
            github: "https://github.com/QuentinLagree/todo-list",
            demo: 'https://todolist-cae02.web.app/'
        }
    },
    {
        id: 8,
        name: "Minecraft plugin creation: Hystine server",
        description: "Creation of a minecraft plugin to guide my players on a server. Creation of the events, orders and database section.",
        technos: ["java", 'sql'],
        link: {
            github: "https://github.com/QuentinLagree/HystineServer"
        }
    }
]

export const DOING: Project = {
    id: 0,
    name: 'Dashboard Admin Angular',
    description: 'Un tableau de bord pour administrer son site web.|A dashboard to manage your website.  ',   
    technos: ["html", "css", "javascript", "typescript", " angular"],
    link: {
        github: ''
    }
}
