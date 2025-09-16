import pokedexScreenshot from './screenshots/pokedex.png';
import relappmidosScreenshot from './screenshots/relappmidos.png';

const certifications = {
  javascript: {
    link: "https://freecodecamp.org/certification/hellynx/javascript-algorithms-and-data-structures-v8",
    logo: "fa-brands fa-free-code-camp",
    tags: ["Javascript", "WebDesign", "Frontend"]
  },
  front: {
    link: "https://www.freecodecamp.org/certification/Hellynx/responsive-web-design",
    logo: "fa-brands fa-free-code-camp",
    tags: ["ResponsiveDesign", "HTML5", "CSS3", "WebDesign", "Frontend"]
  },
  ux5: {
    link: "https://coursera.org/share/f687b5db8b0e5dd127b7bb37b8484795",
    logo: "fa-brands fa-google",
    tags: ["UXResearch", "UserExperience", "Wireframing", "Figma", "Prototyping"]
  },
  ux4: {
    link: "https://coursera.org/share/8019a7e126d4f110e312bb91e79b3c51",
    logo: "fa-brands fa-google",
    tags: ["UXResearch", "UserTesting", "UserExperience", "Prototyping", "DesignThinking"]
  },
  ux3: {
    link: "https://coursera.org/share/29701b39320ebbc1c45a96b1bbf9259d",
    logo: "fa-brands fa-google",
    tags: ["Wireframing", "Figma", "Prototyping", "UXDesign", "UIUX"]
  },
  ux2: {
    link: "https://coursera.org/share/8bd7d8b82a04d5420f80e349b31e136c",
    logo: "fa-brands fa-google",
    tags: ["UXProcess", "EmpathyMapping", "UserCenteredDesign", "Ideation", "ProblemSolving"]
  },
  ux1: {
    link: "https://coursera.org/share/77fa22bce2cbdf6909f8832a3d2828c0",
    logo: "fa-brands fa-google",
    tags: ["UXFundamentals", "UserExperience", "InteractionDesign", "DesignPrinciples", "Usability"]
  }
}

export const portfolio = {
  title: "Portfolio",
  content: [
    {
      name: "Relappmidos",
      screenshot: relappmidosScreenshot,
      link: "https://h3llynx.github.io/Relappmidos/",
      code: "https://github.com/H3llynx/Relappmidos",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Authentication",
        "API Integration",
        "Interactive UI",
        "Game Mechanics"
      ]
    },
    {
      name: "Pokedex",
      screenshot: pokedexScreenshot,
      link: "https://h3llynx.github.io/pokedex-vue/",
      code: "https://github.com/H3llynx/pokedex-vue",
      tags: [
        "Vue",
        "JavaScript",
        "API Integration",
        "Multi-View SPA",
        "Interactive Map",
        "Theme Toggle"
      ]
    }
  ]
};

export const english = {
  toolsAndPlatforms: {
    title: "Supporting tools",
    content: [
      "Google Workspace & Microsoft Office",
      "Advanced Excel / Google Sheets",
      "CRM & help-desk systems (Zendesk, Salesforce, Kustomer)",
      "Remote collaboration: Slack, Zoom"
    ]
  },
  professionalStrengths: {
    title: "Professional strengths",
    content: [
      "User-focused problem solving",
      "Cross-team collaboration & communication",
      "Project and workflow organization",
      "Data-driven decision making",
      "Multilingual communication (EN/FR/ES)"
    ]
  },
  formalEducation: {
    title: "Formal education",
    content: [
      {
        year: "2011",
        title: "Bachelor's Degree in Tourism"
      },
      {
        year: "2009",
        title: "High School Diploma in Economics and Social Science"
      }
    ]
  },
  technicalProfessionalTraining: {
    title: "Technical & profesional training",
    content: [
      {
        year: "2025",
        title: "JavaScript Algorithms and Data Structures",
        institution: "freeCodeCamp",
      },
      {
        year: "2025",
        title: "Front End Developer Course",
        institution: "UOC",
      },
      {
        year: "2025",
        title: "Google UX Design Professional Certificate",
        institution: "Coursera",
        status: "in progress"
      },
      {
        year: "2025",
        title: "Foundations of Python Programming",
        institution: "IDFO"
      },
      {
        year: "2025",
        title: "Responsive Web Design Developer",
        institution: "freeCodeCamp",
      },
      {
        year: "2021",
        title: "Application Development for the Internet and Mobile Devices – AF 4 (IFCD017PO)",
        institution: "Grupo Hedima"
      },
      {
        year: "2020",
        title: "Social Media Advertising & Marketing Analytics",
        institution: "ITO"
      }
    ]
  },
  workExperience: {
    title: "Work experience",
    content: [
      {
        period: "2022 - 2025",
        title: "Customer Support (French Market & Collectables)",
        company: "Catawiki · Remote (based in Barcelona, Spain)",
        description: "Handled diverse customer inquiries, ensuring timely and effective resolutions, and recognized as a top performer for high productivity."
      },
      {
        period: "2021 - 2022",
        title: "Customer Service Team Lead",
        company: "Teleperformance Spain & Stripe · Remote (based in Barcelona, Spain)",
        description: "Managed a customer service team of 9 to 13 agents, overseeing performance and providing coaching."
      },
      {
        period: "2021",
        title: "Technical Support Expert for Stripe (French Market)",
        company: "Teleperformance Spain & Stripe · Remote (based in Barcelona, Spain)",
        description: "Utilized strong problem-solving skills to troubleshoot complex technical issues and ensure B2B customers satisfaction. Technical environment: Stripe."
      },
      {
        period: "2020 - 2021",
        title: "Freelance Digital Marketing Consultant",
        company: "Remote",
        description: "Created targeted lead generation campaigns and designed intuitive landing pages to drive conversions. Additionally, redesigned and implemented a client’s full website, including the setup and configuration of an online shop. Technical environment: Facebook & Instagram Ads, Wordpress, HTML, CSS."
      },
      {
        period: "2019 - 2020",
        title: "IT Recruitment Consultant",
        company: "Grupo Norconsulting · Canary Islands"
      },
      {
        period: "2018 - 2019",
        title: "See Lion Activities Promoter (On Site)",
        company: "Aspro Parks · Canary Islands"
      },
      {
        period: "2015 - 2018",
        title: "Hospitality Service Professional (5* Resort)",
        company: "Salobre Hotel Resort & Serenity · Canary Islands"
      },
      {
        period: "2012 - 2014",
        title: "Online Travel Agent",
        company: "eDreams (ODIGEO) · Barcelona, Spain"
      }
    ]
  },
  certifications: {
    title: "Digital certifications",
    content: {
      javascript: {
        title: "JavaScript Algorithms and Data Structures",
        info: certifications.javascript
      },
      front: {
        title: "Responsive Web Design",
        info: certifications.front
      },
      ux5: {
        title: "Create High-Fidelity Designs and Prototypes in Figma",
        info: certifications.ux5
      },
      ux4: {
        title: "Conduct UX Research and Test Early Concepts",
        info: certifications.ux4
      },
      ux3: {
        title: "Build Wireframes and Low-Fidelity Prototypes",
        info: certifications.ux3
      },
      ux2: {
        title: "Start the UX Design Process",
        info: certifications.ux2
      },
      ux1: {
        title: "Foundations of User Experience",
        info: certifications.ux1
      }
    }
  }
};

export const spanish = {
  toolsAndPlatforms: {
    title: "Herramientas complementarias",
    content: [
      "Google Workspace y Microsoft Office",
      "Excel avanzado / Google Sheets",
      "CRM y sistemas de ticketing (Zendesk, Salesforce, Kustomer)",
      "Colaboración remota: Slack, Zoom"
    ]
  },
  professionalStrengths: {
    title: "Fortalezas profesionales",
    content: [
      "Atención al cliente (B2B y B2C)",
      "Seguimiento y reporte de KPIs",
      "Colaboración interdepartamental",
      "Optimización de flujos de trabajo",
      "Comunicación multilingüe"
    ]
  },
  formalEducation: {
    title: "Formación académica",
    content: [
      {
        year: "2011",
        title: "Técnico Superior en Turismo"
      },
      {
        year: "2009",
        title: "Bachillerato en Economía y Ciencias Sociales"
      }
    ]
  },
  technicalProfessionalTraining: {
    title: "Formación profesional complementaria",
    content: [
      {
        year: "2025",
        title: "Algoritmos y Estructuras de Datos en JavaScript",
        institution: "freeCodeCamp",
      },
      {
        year: "2025",
        title: "Front End Developer",
        institution: "UOC"
      },
      {
        year: "2025",
        title: "Certificado Profesional en Diseño UX de Google",
        institution: "Coursera",
        status: "en progreso"
      },
      {
        year: "2025",
        title: "Fundamentos de Programación en Python",
        institution: "IDFO"
      },
      {
        year: "2025",
        title: "Diseño web responsive",
        institution: "freeCodeCamp",
      },
      {
        year: "2021",
        title: "Desarrollo de aplicaciones para internet y dispositivos móviles – AF 4 (IFCD017PO)",
        institution: "Grupo Hedima"
      },
      {
        year: "2020",
        title: "Publicidad en Redes Sociales y Análisis de Marketing",
        institution: "ITO"
      }
    ]
  },
  workExperience: {
    title: "Experiencia laboral",
    content: [
      {
        period: "2022 - 2025",
        title: "Atención al Cliente (mercado francés y coleccionables)",
        company: "Catawiki · Remoto (Barcelona)",
        description:
          "Brindé soporte y asistencia multilingüe a clientes internacionales, gestionando incidencias y consultas en subastas online. Reconocida por productividad y eficiencia."
      },
      {
        period: "2021 - 2022",
        title: "Jefa de Equipo de Atención al Cliente",
        company: "Teleperformance España & Stripe · Remoto (Barcelona)",
        description:
          "Lideré un equipo de 9-13 agentes en el sector fintech, supervisando KPIs y optimizando el rendimiento y la calidad del servicio. Gestión de coaching y formaciones."
      },
      {
        period: "2021",
        title: "Agente de Soporte Técnico (mercado francés)",
        company: "Teleperformance España & Stripe · Remoto (Barcelona)",
        description:
          "Resolución de incidencias técnicas complejas para clientes B2B, con enfoque en la satisfacción del cliente y mejora continua del servicio. Entorno técnico: Stripe."
      },
      {
        period: "2020 - 2021",
        title: "Consultora Freelance en Marketing Digital",
        company: "Remoto",
        description:
          "Creación de campañas de generación de leads y diseño de páginas de destino intuitivas para impulsar conversiones. Rediseño e implementación completa de una web de cliente, incluyendo la configuración de tienda online. Entorno: Facebook & Instagram Ads, WordPress, HTML, CSS."
      },
      {
        period: "2019 - 2020",
        title: "Consultora de Reclutamiento IT",
        company: "Grupo Norconsulting · Gran Canaria"
      },
      {
        period: "2018 - 2019",
        title: "Promotora de Actividades con Leones Marinos (Presencial)",
        company: "Aspro Parks · Gran Canaria"
      },
      {
        period: "2015 - 2018",
        title: "Profesional de Atención en Hostelería (Resort 5*)",
        company: "Salobre Hotel Resort & Serenity · Gran Canaria"
      },
      {
        period: "2012 - 2014",
        title: "Agente de Viaje Online",
        company: "eDreams (ODIGEO) · Barcelona"
      }
    ]
  },
  certifications: {
    title: "Certificaciones digitales",
    content: {
      javascript: {
        title: "Algoritmos y Estructuras de Datos en JavaScript",
        info: certifications.javascript
      },
      front: {
        title: "Diseño web responsive",
        info: certifications.front
      },
      ux5: {
        title: "Crear diseños y prototipos de alta fidelidad en Figma",
        info: certifications.ux5
      },
      ux4: {
        title: "Realizar investigación UX y probar los primeros conceptos",
        info: certifications.ux4
      },
      ux3: {
        title: "Crear maquetas funcionales y prototipos de baja fidelidad",
        info: certifications.ux3
      },
      ux2: {
        title: "Iniciar el proceso de diseño UX: empatizar, definir e idear",
        info: certifications.ux2
      },
      ux1: {
        title: "Principios fundamentales del diseño de experiencia de usuario (UX)",
        info: certifications.ux1
      }
    }
  }
};

export const french = {
  toolsAndPlatforms: {
    title: "Outils complémentaires",
    content: [
      "Google Workspace et Microsoft Office",
      "Excel avancé / Google Sheets",
      "CRM et systèmes de tickets (Zendesk, Salesforce, Kustomer)",
      "Collaboration à distance : Slack, Zoom"
    ]
  },
  professionalStrengths: {
    title: "Atouts professionnels",
    content: [
      "Résolution de problèmes centrée sur l’utilisateur",
      "Collaboration et communication inter-équipes",
      "Organisation de projets et de workflows",
      "Prise de décision basée sur les données",
      "Communication multilingue (EN/FR/ES)"
    ]
  },
  formalEducation: {
    title: "Formation académique",
    content: [
      {
        year: "2011",
        title: "BTS Ventes et productions tourisriques"
      },
      {
        year: "2009",
        title: "Baccalauréat Économique et Social"
      }
    ]
  },
  technicalProfessionalTraining: {
    title: "Formation technique et professionnelle",
    content: [
      {
        year: "2025",
        title: "Algorithmes et Structures de Données en JavaScript",
        institution: "freeCodeCamp",
      },
      {
        year: "2025",
        title: "Formation Développeur Front-End",
        institution: "UOC",
      },
      {
        year: "2025",
        title: "Google Certificat Professionnel: Conception d'expérience utilisateur",
        institution: "Coursera",
        status: "en cours"
      },
      {
        year: "2025",
        title: "Bases de la programmation Python",
        institution: "IDFO"
      },
      {
        year: "2025",
        title: "Web design responsive",
        institution: "freeCodeCamp",
      },
      {
        year: "2021",
        title: "Développement d’applications web et mobiles – AF 4 (IFCD017PO)",
        institution: "Grupo Hedima"
      },
      {
        year: "2020",
        title: "Publicité sur les réseaux sociaux & analyse marketing",
        institution: "ITO"
      }
    ]
  },
  workExperience: {
    title: "Expérience professionnelle",
    content: [
      {
        period: "2022 - 2025",
        title: "Support client (Marché français & objets de collection)",
        company: "Catawiki · Télétravail (depuis Barcelone, Espagne)",
        description: "Traitement de diverses demandes clients, garantissant des solutions rapides et efficaces. Reconnue parmi les meilleurs performeurs de mon équipe."
      },
      {
        period: "2021 - 2022",
        title: "Chef d’équipe service clients",
        company: "Teleperformance Spain & Stripe · Télétravail (depuis Barcelone, Espagne)",
        description: "Gestion d'une équipe de 9 à 13 agents, supervision de la performance et accompagnement/coaching."
      },
      {
        period: "2021",
        title: "Expert support technique pour Stripe (Marché français)",
        company: "Teleperformance Spain & Stripe · Télétravail (depuis Barcelone, Espagne)",
        description: "Traitement et résolution de problèmes techniques complexes, garantissant la satisfaction des clients B2B. Environnement technique : Stripe."
      },
      {
        period: "2020 - 2021",
        title: "Consultante indépendante en marketing digital",
        company: "Télétravail",
        description: "Création de campagnes de génération de leads et conception de landing pages intuitives pour maximiser les conversions. Refonte et mise en œuvre complète du site d'un client, incluant la boutique en ligne. Environnement technique : Facebook & Instagram Ads, Wordpress, HTML, CSS."
      },
      {
        period: "2019 - 2020",
        title: "Consultante en recrutement IT",
        company: "Grupo Norconsulting · Îles Canaries"
      },
      {
        period: "2018 - 2019",
        title: "Animatrice activités otaries (présentiel)",
        company: "Aspro Parks · Îles Canaries"
      },
      {
        period: "2015 - 2018",
        title: "Professionnelle de l’hôtellerie (Resort 5*)",
        company: "Salobre Hotel Resort & Serenity · Îles Canaries"
      },
      {
        period: "2012 - 2014",
        title: "Agent de voyages en ligne",
        company: "eDreams (ODIGEO) · Barcelone, Espagne"
      }
    ]
  },
  certifications: {
    title: "Certifications numériques",
    content: {
      javascript: {
        title: "Algorithmes et Structures de Données en JavaScript",
        info: certifications.javascript
      },
      front: {
        title: "Web design responsive",
        info: certifications.front
      },
      ux5: {
        title: "Créer des conceptions et des prototypes haute fidélité avec Figma",
        info: certifications.ux5
      },
      ux4: {
        title: " Réaliser des recherches UX et tester les premiers concepts",
        info: certifications.ux4
      },
      ux3: {
        title: "Créer des maquettes fonctionnelles et des prototypes basse fidélité",
        info: certifications.ux3
      },
      ux2: {
        title: "Initier le processus de conception UX : empathie, définition et idéation",
        info: certifications.ux2
      },
      ux1: {
        title: "Principes fondamentaux de la conception de l’expérience utilisateur (UX)",
        info: certifications.ux1
      }
    }
  }
};
