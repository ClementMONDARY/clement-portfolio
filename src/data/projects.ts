export const projects = [
  {
    title: "Runner",
    description: {
      fr: "Un programme Rust qui utilise la techonlogie de rayscating pour générer un terrain de jeu en 3D (à la Doom/Wolfenstein). Le joueur peut se déplacer dans la carte et changer sa FOV. Si vous voulez l'essayer, il vous suffit de télécharger le fichier exécutable ci-dessous (Z/Q/S/D pour se déplacer, ←/→ pour tourner, A/E pour modifier la FOV, ↓ pour reset la FOV).",
      en: "A Rust program using raycasting technology to generate a 3D game environment (Doom/Wolfenstein style). The player can navigate the map and adjust their FOV. To try it, just download the executable below (Z/Q/S/D to move, ←/→ to rotate, A/E to adjust FOV, ↓ to reset FOV).",
    },
    image: "runner.gif",
    tags: {
      fr: ["Rust", "Raycasting", "DDA", "Texturing"],
      en: ["Rust", "Raycasting", "DDA", "Texturing"],
    },
    github: "https://github.com/ClementMONDARY/runner",
    exec: "runner.exe",
    category: ["Rust"],
  },
  {
    title: "Grav Rush",
    description: {
      fr: "Un prototype de jeu de plateforme 2D. Il est encore en développement, mais il est jouable. Mon projet le plus ambitieux à ce jour. La partie la plus amusante à été le Level Design et le développement du systeme de mouvement.",
      en: "A 2D platformer prototype. Still in development, but already playable. My most ambitious project to date. The most enjoyable parts were the Level Design and the movement system development.",
    },
    image: "grav-rush.gif",
    tags: {
      fr: ["Godot", "GDScript", "2D", "Platformer", "Animation", "Sound Design", "Level Design", "Shaders"],
      en: ["Godot", "GDScript", "2D", "Platformer", "Animation", "Sound Design", "Level Design", "Shaders"],
    },
    github: "https://github.com/ClementMONDARY/grav_rush",
    demo: "https://nemeco.itch.io/grav-rush",
    category: ["Godot"],
  },
  {
    title: "Gulag",
    description: {
      fr: "Mon premier jeu en 3D, un court projet de 4 jours. Il s'agit d'un jeu de tire à la premiere personne. Ce projet est la fondation d'un jeu plus complet que je compte développer dans le futur.",
      en: "My first 3D game, a short 4-day project. It's a first-person shooter. This project serves as the foundation for a more complete game I plan to develop in the future.",
    },
    image: "gulag.gif",
    tags: {
      fr: ["Godot", "GDScript", "3D", "FPS", "Animation", "Sound Design", "UI", "Pathfinding", "Shaders"],
      en: ["Godot", "GDScript", "3D", "FPS", "Animation", "Sound Design", "UI", "Pathfinding", "Shaders"],
    },
    github: "https://github.com/ClementMONDARY/gulag",
    demo: "https://nemeco.itch.io/gulag",
    category: ["Godot"],
  },
  {
    title: "Site vitrine M-Signalétique",
    description: {
      fr: "Un site vitrine pour la société de signalétique 'M-Signalétique'. Étant seul développeur, j'ai réalisé le site de A à Z. Le site est responsive et utilise des animations pour améliorer l'expérience utilisateur.",
      en: "A showcase website for the signage company 'M-Signalétique'. As the sole developer, I built the site from scratch. The site is responsive and uses animations to enhance the user experience.",
    },
    image: "m-signaletique.gif",
    tags: {
      fr: ["React", "Vite", "Responsive", "Hébergement", "Formulaire", "Communication"],
      en: ["React", "Vite", "Responsive", "Hosting", "Form", "Communication"],
    },
    demo: "https://m-signaletique.fr",
    category: ["Web"],
  },
  {
    title: "Trésor Rachat d'Or",
    description: {
      fr: "Un site vitrine pour la toute nouvelle franchise \"Trésor Rachat D'Or\". Développé dans un timing de 1 mois, moi même ainsi qu'un de mes tuteurs ont réussi à tenir une deadline sérré en proposant un site fonctionelle pour le web, ainsi que des affichages en magasins physique.",
      en: "A showcase website for the brand-new franchise \"Trésor Rachat D'Or\". Developed within a tight one-month deadline, my supervisor and I successfully delivered a functional website alongside in-store display content.",
    },
    image: "tresor-rachat-d-or.gif",
    tags: {
      fr: ["HTML", "CSS", "PHP", "XML", "Magento 2", "Google Maps API"],
      en: ["HTML", "CSS", "PHP", "XML", "Magento 2", "Google Maps API"],
    },
    demo: "https://www.tresor-rachat-or.com",
    category: ["Web"],
  },
  {
    title: "Godot Premier Pas",
    description: {
      fr: "Un petit projet pour découvrir le moteur Godot et le langage GDScript. C'est un défi que je me suis lancé moi même dans le cadre de mon objectif professionel. Le jeu n'a pas de but précis, j'ai juste joué un peu avec les mécaniques de Godot pour le découvrir.",
      en: "A small project to explore the Godot engine and GDScript. A personal challenge I set for myself as part of my professional goals. The game has no specific objective — I just experimented with Godot's mechanics to get familiar with it.",
    },
    image: "first_godot.gif",
    tags: {
      fr: ["Godot", "GDScript", "2D", "Machine à états", "Animation", "Sound Design", "UI", "Game Design", "Level Design"],
      en: ["Godot", "GDScript", "2D", "State Machine", "Animation", "Sound Design", "UI", "Game Design", "Level Design"],
    },
    github: "https://github.com/ClementMONDARY/Tree-and-Inventory",
    demo: "https://nemeco.itch.io/tree-and-inventory",
    category: ["Godot"],
  },
  {
    title: "LoL Website",
    description: {
      fr: "Un projet scolaire qui avait pour but de manier une API en ligne. Le sujet etait libre, j'ai donc choisi L'API de League of Legends. Le site permet de consulter les champions, leurs sorts, ainsi que leurs skins. Il est responsive et utilise une API pour récupérer les données des champions.",
      en: "A school project aimed at working with an online API. The subject was open-ended, so I chose the League of Legends API. The site lets users browse champions, their abilities, and their skins. It's responsive and fetches champion data from the API.",
    },
    image: "lol_website.gif",
    tags: {
      fr: ["HTML", "CSS", "JavaScript", "Insomnia", "API"],
      en: ["HTML", "CSS", "JavaScript", "Insomnia", "API"],
    },
    github: "https://github.com/ClementMONDARY/LoL_Website",
    demo: "https://clementmondary.github.io/LoL_Website/",
    category: ["Web"],
  },
  {
    title: "Trésor Locator",
    description: {
      fr: "Un site vitrine pour la marque de bijoux \"Trésor\" dans le cadre de mon stage effectué chez THOM Group avec l'aide de l'équipe de développement. Le site est responsive, et propose une carte interactive pour localiser les magasins de la marque",
      en: "A showcase website for the jewelry brand \"Trésor\" built during my internship at THOM Group with the support of the dev team. The site is responsive and features an interactive map to locate the brand's stores.",
    },
    image: "tresor.gif",
    tags: {
      fr: ["HTML", "CSS", "JavaScript", "XML", "Magento 2", "Google Maps API"],
      en: ["HTML", "CSS", "JavaScript", "XML", "Magento 2", "Google Maps API"],
    },
    demo: "https://www.tresor-bijoux.fr",
    category: ["Web"],
  },
  {
    title: "Maze",
    description: {
      fr: "Un programme C qui trouve la sortie d'un labyrinthe. Il trouve la sortie en tenant le mur de droite. Un des tous premiers projets que j'ai réalisé en C en classe, il m'a permis de découvrir des fonctionnalités avancées du langage comme les structures, les pointeurs et la gestion de la mémoire. Le programme peut trouver la sortie en moins de 10 secondes, même pour des labyrinthes de 1000x1000 cases.",
      en: "A C program that finds the exit of a maze by following the right-hand wall. One of my very first C projects in class, it helped me explore advanced language features such as structs, pointers, and memory management. The program can solve mazes up to 1000×1000 cells in under 10 seconds.",
    },
    image: "maze.gif",
    tags: {
      fr: ["C", "Algorithme", "Récursion"],
      en: ["C", "Algorithm", "Recursion"],
    },
    github: "https://github.com/ClementMONDARY/maze",
    category: ["C"],
  },
  {
    title: "Windraw",
    description: {
      fr: "Une fênetre qui permet de dessiner des pixels sur un canvas, commes des lignes, des cercles et des spirales. Il s'agit d'un projet qui m'as permit de manier les pixels d'un écran ainsi que de découvrir la gestion de la mémoire et de la pile.",
      en: "A window application that allows drawing pixels on a canvas, including lines, circles, and spirals. This project helped me understand pixel-level screen manipulation and explore memory and stack management.",
    },
    image: "windraw.gif",
    tags: {
      fr: ["Rust", "WinitHandler"],
      en: ["Rust", "WinitHandler"],
    },
    github: "https://github.com/ClementMONDARY/windraw",
    category: ["Rust"],
  },
];

export const switches = [
  { label: "Rust", image: "softwares/RUST.png" },
  { label: "Godot", image: "softwares/GODOT.png" },
  { label: "Web", image: "softwares/HTML.png" },
  { label: "C", image: "softwares/C.png" },
];
