export type Lang = 'fr' | 'en';

export const translations = {
  fr: {
    nav: {
      presentation: 'Présentation',
      parcours: 'Parcours',
      experiences: 'Expériences',
      competences: 'Compétences',
      projets: 'Projets',
    },
    presentation: {
      greeting: "Hello, moi c'est",
      subtitle: "Concepteur Développeur d'Applications",
      subtitleGame: 'Aspirant Game Programmer',
      downloadCV: 'Télécharger mon CV',
      profileAlt: 'Photo de profil',
    },
    parcours: {
      sectionTitle: 'Mon Parcours',
    },
    experiences: {
      sectionTitle: 'Mes Expériences',
      formationsTitle: 'Mes Formations',
      experiencesBtn: 'Expériences',
      formationsBtn: 'Formations',
    },
    competences: {
      sectionTitle: 'Mes Compétences',
    },
    projets: {
      sectionTitle: 'Mes Projets',
      all: 'Tous',
      viewCode: 'Voir le code',
      download: 'Télécharger',
      viewProject: 'Voir le projet',
    },
  },
  en: {
    nav: {
      presentation: 'Presentation',
      parcours: 'Background',
      experiences: 'Experiences',
      competences: 'Skills',
      projets: 'Projects',
    },
    presentation: {
      greeting: "Hi, I'm",
      subtitle: 'Application Developer',
      subtitleGame: 'Aspiring Game Programmer',
      downloadCV: 'Download my Resume',
      profileAlt: 'Profile picture',
    },
    parcours: {
      sectionTitle: 'My Background',
    },
    experiences: {
      sectionTitle: 'My Experiences',
      formationsTitle: 'My Education',
      experiencesBtn: 'Experiences',
      formationsBtn: 'Education',
    },
    competences: {
      sectionTitle: 'My Skills',
    },
    projets: {
      sectionTitle: 'My Projects',
      all: 'All',
      viewCode: 'View code',
      download: 'Download',
      viewProject: 'View project',
    },
  },
} as const;

export type Translations = typeof translations.fr;
