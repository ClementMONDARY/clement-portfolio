export const projects = [
  {
    title: "Runner",
    description: "Un programme Rust qui utilise la techonlogie de rayscating pour générer un terrain de jeu en 3D (à la Doom/Wolfenstein). Le joueur peut se déplacer dans la carte et changer sa FOV. Si vous voulez l'essayer, il vous suffit de télécharger le fichier exécutable ci-dessous (Z/Q/S/D pour se déplacer, ←/→ pour tourner, A/E pour modifier la FOV, ↓ pour reset la FOV).",
    image: "runner.gif",
    tags: ["Rust", "Raycasting", "DDA", "Texturing"],
    github: "https://github.com/ClementMONDARY/runner",
    exec: "runner.exe"
  },
  {
    title: "Godot Premier Pas",
    description: "Un petit projet pour découvrir le moteur Godot et le langage GDScript. C'est un défi que je me suis lancé moi même dans le cadre de mon objectif professionel. Le jeu n'a pas de but précis, j'ai juste joué un peu avec les mécaniques de Godot pour le découvrir.",
    image: "first_godot.gif",
    tags: ["Godot", "GDScript", "2D", "States Machine", "Animation", "Sound Design", "UI", "Game Design", "Level Design"],
    github: "https://github.com/ClementMONDARY/Tree-and-Inventory",
  },
  {
    title: "LoL Website",
    description: "Un projet scolaire qui avait pour but de manier une API en ligne. Le sujet etait libre, j'ai donc choisi L'API de League of Legends. Le site permet de consulter les champions, leurs sorts, ainsi que leurs skins. Il est responsive et utilise une API pour récupérer les données des champions.",
    image: "lol_website.gif",
    tags: ["HTML", "CSS", "JavaScript", "Insomnia", "API"],
    github: "https://github.com/ClementMONDARY/LoL_Website",
    demo: "https://clementmondary.github.io/LoL_Website/",
  },
  {
    title: "Trésor Locator",
    description: "Un site vitrine pour la marque de bijoux \"Trésor\" dans le cadre de mon stage effectué chez THOM Group avec l'aide de l'équipe de développement. Le site est responsive, et propose une carte interactive pour localiser les magasins de la marque",
    image: "tresor.gif",
    tags: ["HTML", "CSS", "JavaScript", "XML", "Magento 2", "Google Maps API"],
    demo: "https://www.tresor-bijoux.fr",
  },
  {
    title: "Maze",
    description: "Un programme C qui trouve la sortie d'un labyrinthe. Il trouve la sortie en tenant le mur de droite. Un des tous premiers projets que j'ai réalisé en C en classe, il m'a permis de découvrir des fonctionnalités avancées du langage comme les structures, les pointeurs et la gestion de la mémoire. et le programme peut trouver la sortie en moins de 10 secondes, même pour des labyrinthes de 1000x1000 cases.",
    image: "maze.gif",
    tags: ["C", "Algorithm", "Recursion"],
    github: "https://github.com/ClementMONDARY/maze",
  },
  {
    title: "Windraw",
    description: "Une fênetre qui permet de dessiner des pixels sur un canvas, commes des lignes, des cercles et des spirales. Il s'agit d'un projet qui m'as permit de manier les pixels d'un écran ainsi que de découvrir la gestion de la mémoire et de la pile.",
    image: "windraw.gif",
    tags: ["Rust", "WinitHandler"],
    github: "https://github.com/ClementMONDARY/windraw",
  }
];