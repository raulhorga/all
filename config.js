
/*
  ==========================================================
  CONFIG PRINCIPAL
  ==========================================================
  Pentru a adăuga o pagină/proiect:
  1. adaugă un obiect nou în topMenu sau într-un grup sideMenus
  2. definește un id unic
  3. completează title, description, tags, links etc.

  Pentru proiectele din meniul GITHUB:
  - githubUrl = linkul către repository
  - pageUrl   = linkul către pagina web care se va încărca în MAIN PAGE

  Nu trebuie să modifici app.js pentru proiecte noi.
*/

window.APP_CONFIG = {
  appName: "Project Hub",

  topMenu: [
    {
      id: "3d-design",
      label: "3D Design",
      icon: "◈",
      description: "Modele, randări, CAD și proiecte 3D.",
      tags: ["Blender", "CAD", "3D"]
    },
    {
      id: "android-studio",
      label: "Android Studio",
      icon: "◫",
      description: "Aplicații și experimente Android.",
      tags: ["Android", "Kotlin", "Java"]
    },
    {
      id: "animator",
      label: "Animator",
      icon: "✦",
      description: "Animații, motion design și experimente vizuale.",
      tags: ["Animation", "Motion"]
    },
    {
      id: "arduino-rpi",
      label: "Arduino / Raspberry Pi",
      icon: "⌁",
      description: "Proiecte hardware, senzori, automatizări și IoT.",
      tags: ["Arduino", "Raspberry Pi", "IoT"]
    },
    {
      id: "database",
      label: "DataBase",
      icon: "▤",
      description: "Proiecte și laboratoare pentru baze de date.",
      tags: ["Oracle", "MySQL", "SQL"]
    },
    {
      id: "algorithms",
      label: "Algorithms",
      icon: "⌘",
      description: "Algoritmi, exerciții și implementări.",
      tags: ["JavaScript", "Python", "DSA"]
    },
    {
      id: "network",
      label: "Network",
      icon: "◎",
      description: "Laboratoare de rețelistică și Cisco.",
      tags: ["Cisco", "Networking"]
    },
    {
      id: "web-service",
      label: "Project Web Service",
      icon: "⌗",
      description: "Proiecte web, API-uri și servicii.",
      tags: ["Web", "API", "Frontend"]
    },
    {
      id: "unity-unreal",
      label: "Unity / Unreal Engine",
      icon: "⬡",
      description: "Game development și experimente 3D interactive.",
      tags: ["Unity", "Unreal Engine", "Game Dev"]
    }
  ],

  sideMenus: [
    {
      id: "personal-list",
      label: "Lista personală",
      icon: "☷",
      openByDefault: true,
      items: [
        { id: "eng", label: "ENG", description: "Notițe și resurse pentru limba engleză.", tags: ["Language"] },
        { id: "esp", label: "ESP", description: "Notițe și resurse pentru limba spaniolă.", tags: ["Language"] },
        { id: "movie", label: "MOVIE", description: "Filme de văzut, văzute și notițe.", tags: ["Media"] },
        { id: "book", label: "BOOK", description: "Cărți, idei, citate și progres.", tags: ["Reading"] },
        { id: "dictie", label: "Dicție", description: "Exerciții și materiale pentru dicție.", tags: ["Practice"] }
      ]
    },
    {
      id: "github",
      label: "GITHUB",
      icon: "⌂",
      openByDefault: true,
      items: [
        {
          id: "arbore-genealogic",
          label: "Arbore Genealogic",
          description: "Proiect pentru vizualizarea și administrarea arborelui genealogic.",
          tags: ["GitHub", "Web"],
          githubUrl: "https://github.com/raulhorga/ArboreGenealogic",
          pageUrl: "https://raulhorga.github.io/ArboreGenealogic/"
        },
        {
          id: "layout-apartament",
          label: "Layout Apartament",
          description: "Planificare și layout pentru apartament.",
          tags: ["Layout", "3D"],
          githubUrl: "https://github.com/raulhorga/model_ap",
          pageUrl: "https://raulhorga.github.io/model_ap/"
        },
        {
          id: "calorii",
          label: "Calorii",
          description: "Aplicație / instrument pentru urmărirea caloriilor.",
          tags: ["App", "Tracking"],
          githubUrl: "https://github.com/raulhorga/calorii",
          pageUrl: "https://raulhorga.github.io/calorii/"
        },
        {
          id: "hot-wheels",
          label: "Hot Wheels",
          description: "Catalog și management pentru colecția Hot Wheels.",
          tags: ["Collection", "Database"],
          githubUrl: "https://github.com/raulhorga/hot_wheels",
          pageUrl: "https://raulhorga.github.io/hot_wheels/"
        },
        {
          id: "cheltuieli",
          label: "Cheltuieli",
          description: "Evidență cheltuieli și analiză personală.",
          tags: ["Finance", "Dashboard"],
          githubUrl: "https://github.com/raulhorga/cheltuieli",
          pageUrl: "https://raulhorga.github.io/cheltuieli/"
        }
      ]
    }
  ],

  home: {
    title: "Dashboard",
    description: "Un singur loc pentru toate proiectele, ideile, listele și repository-urile tale."
  }
};
