const projects = [
  {
    id: 1,
    name: {
      en: "Lavender Shop",
      es: "Lavender Shop",
    },
    type: {
      en: "E-Commerce",
      es: "Tienda Online",
    },
    description: {
      en: "A minimalist fashion e-commerce experience designed around a calm and contemporary brand identity. The project explores how light, transparency, and motion can shape perception, creating an atmosphere that feels refined, peaceful, and effortless. Through subtle animations and a clean visual language, the interface aims to make browsing feel less like navigating a store and more like engaging with the brand itself.",

      es: "Una experiencia de e-commerce de moda minimalista diseñada alrededor de una identidad de marca serena y contemporánea. El proyecto explora cómo la luz, la transparencia y el movimiento pueden influir en la percepción, creando una atmósfera refinada, tranquila y natural. A través de animaciones sutiles y un lenguaje visual limpio, la interfaz busca que navegar se sienta menos como recorrer una tienda y más como interactuar con la propia marca.",
    },

    fullStack: false,

    technologies: ["React", "JavaScript", "Vite", "HTML5", "CSS3"],

    github: "https://github.com/walterbardier/lavender-shop",
    demo: "https://lavender-shop-wb.vercel.app",

    images: [
      "/screenshots/lavender-shop/home-1.png",
      "/screenshots/lavender-shop/shop-1.png",
      "/screenshots/lavender-shop/shop-2.png",
      "/screenshots/lavender-shop/product-1.png",
      "/screenshots/lavender-shop/cart-1.png",
      "/screenshots/lavender-shop/cart-2.png",
      "/screenshots/lavender-shop/home-2.png",
    ],
  },

  {
    id: 2,
    name: {
      en: "iPhone 14 Pro Max | Showcase",
      es: "iPhone 14 Pro Max | Showcase",
    },
    type: {
      en: "Product Experience",
      es: "Experiencia de Producto",
    },
    description: {
      en: "An immersive product showcase inspired by Apple's keynote presentations and design philosophy. The project combines React, Three.js, and modern motion design techniques to create a premium browsing experience centered around the iPhone 14 Pro Max. Through interactive 3D visuals, glassmorphism, layered transparency, and smooth animations, the experience explores depth, storytelling, and the elegance of Apple's visual language.",
  
      es: "Una experiencia inmersiva inspirada en las presentaciones de producto y la filosofía de diseño de Apple. El proyecto combina React, Three.js y técnicas modernas de motion design para crear una experiencia premium centrada en el iPhone 14 Pro Max. A través de visuales 3D interactivos, glassmorphism, transparencias en capas y animaciones fluidas, la experiencia explora la profundidad, la narrativa visual y la elegancia característica del lenguaje de diseño de Apple.",
    },

    fullStack: false,
  
    technologies: [
      "React",
      "Three.js",
      "React Three Fiber",
      "Framer Motion",
      "JavaScript",
      "Vite",
    ],
  
    github: "https://github.com/walterbardier/iphone-showcase",
    demo: "https://iphone-showcase-walterbardier.vercel.app",
  
    images: [
      "/screenshots/iphone-showcase/hero-1.png",
      "/screenshots/iphone-showcase/hero-2.png",
      "/screenshots/iphone-showcase/camera.png",
      "/screenshots/iphone-showcase/battery.png",
      "/screenshots/iphone-showcase/features.png",
      "/screenshots/iphone-showcase/showcase-1.png",
      "/screenshots/iphone-showcase/showcase-2.png",
    ],
  },

  {
    id: 3,
    name: {
      en: "Rentio",
      es: "Rentio",
    },
  
    type: {
      en: "UX/UI & Product Design",
      es: "UX/UI & Product Design",
    },
  
    description: {
      en: "A mobile apartment rental platform designed to simplify how people discover and connect with homes in Montevideo. Rentio combines map and list-based browsing, advanced search filters, and direct messaging with landlords to create a seamless, transparent, and user-friendly rental experience.",
      es: "Una plataforma móvil de alquiler de apartamentos diseñada para simplificar la forma en que las personas encuentran y se conectan con viviendas en Montevideo. Rentio combina exploración mediante mapa y lista, filtros avanzados y mensajería directa con propietarios para ofrecer una experiencia de alquiler fluida, transparente y fácil de usar.",
    },
  
    fullStack: false,
  
    technologies: [
      "Figma",
      "Adobe Illustrator",
      "Wireframing",
      "Prototyping",
      "Design System",
      "Brand Identity",
    ],
  
    // github: "",
    // demo: "",
    caseStudy:
      "https://www.behance.net/gallery/251467273/Rentio-Apartment-Rental-Mobile-App-UXUI-Design",
  
    images: [
      // Renders
      "/screenshots/rentio/mockups.png",
      "/screenshots/rentio/UI.png",

      // Case Study: Img
      "/screenshots/rentio/design_roadmap.png",
      "/screenshots/rentio/empathize.png",
      "/screenshots/rentio/problem.png",
      "/screenshots/rentio/design_process.png",
      "/screenshots/rentio/user_personas.png",
      "/screenshots/rentio/information_arquitecture.png",
      "/screenshots/rentio/end.png",
    ],
  },

  {
    id: 4,
    name: {
      en: "Velv",
      es: "Velv",
    },

    type: {
      en: "UX/UI & Product Design",
      es: "UX/UI & Product Design",
    },

    description: {
      en: "A social recipe-sharing app designed to make cooking more accessible, personalized, and collaborative. Velv combines community-driven content with an AI assistant that learns user preferences, dietary restrictions, and cooking skills to deliver tailored recipe recommendations and automatically generate shopping lists from selected meals.",
      es: "Una aplicación social para compartir recetas, diseñada para hacer que la cocina sea más accesible, personalizada y colaborativa. Velv combina contenido impulsado por la comunidad con un asistente inteligente de IA que aprende las preferencias del usuario, sus restricciones alimentarias y sus habilidades culinarias para ofrecer recomendaciones de recetas a medida y generar automáticamente listas de compras a partir de los platos seleccionados.",
    },

    fullStack: false,

    technologies: ["Figma", "Adobe Illustrator", "Wireframing", "Prototyping"],
    
    // github: "https://github.com/walterbardier/portfolio",
    // demo: "https://x-redesign.vercel.app",
    caseStudy:
      "https://www.behance.net/gallery/250981181/UIUX-Design-for-an-AI-Powered-Social-Cooking-Platform",

    images: [      
      "/screenshots/velv/Velv1.png",
      "/screenshots/velv/Velv2.png",
      "/screenshots/velv/moodboard1.png",
      "/screenshots/velv/moodboard4.png",
      "/screenshots/velv/moodboard2.png",
      "/screenshots/velv/moodboard3.png",
      "/screenshots/velv/moodboard5.png",

      "/screenshots/velv/favorites.jpg",
      "/screenshots/velv/favorites2.jpg",
      "/screenshots/velv/profile.jpg",
      "/screenshots/velv/profile2.jpg",
      "/screenshots/velv/shop.jpg",
      "/screenshots/velv/home.jpg",
      "/screenshots/velv/loading.jpg",
    ],
  },

  {
    id: 5,
    name: {
      en: "Scoops & Co.",
      es: "Scoops & Co.",
    },
    type: {
      en: "UX/UI & Product Design",
      es: "UX/UI & Product Design",
    },
    description: {
      en: "A branding and product design project for an artisanal ice cream brand inspired by Retro Americana culture. The project features a comprehensive case study developing the visual identity and packaging direction to align with the client’s vision, paired with an editorial UX/UI web design concept created in Illustrator and Figma.",
      es: "Un proyecto de branding y diseño de producto para una marca de helados artesanales inspirada en la cultura Retro Americana. El proyecto presenta un caso de estudio integral que desarrolla la identidad visual y la dirección de packaging para alinearse con la visión del cliente, junto con un concepto de diseño web UX/UI de estilo editorial, creado en Illustrator y Figma..",
    },

    fullStack: false,

    technologies: ["Figma", "Adobe Illustrator", "Wireframing", "Prototyping"],
    
    // github: "https://github.com/walterbardier/portfolio",
    // demo: "https://x-redesign.vercel.app",
    caseStudy:
      "https://www.behance.net/gallery/250982467/Scoops-Co-Product-Design-UI-Web-Experience",

    images: [
      "/screenshots/scoops-and-co/website-1.png",
      "/screenshots/scoops-and-co/moodboard-1.png",
      "/screenshots/scoops-and-co/moodboard-3.png",
      "/screenshots/scoops-and-co/moodboard-4.png",
      "/screenshots/scoops-and-co/moodboard-2.png",
      "/screenshots/scoops-and-co/moodboard-5.png",
    ],
  },

  {
    id: 6,
    name: {
      en: "Recoverly",
      es: "Recoverly",
    },
    type: {
      en: "Wellness & Habit Tracker",
      es: "Bienestar & Tracker de Hábitos",
    },
    description: {
      en: "A wellness and self-care experience focused on habit tracking, mindfulness, emotional reflection, and immersive glassmorphism-inspired interactions. Designed for those in recovery when starting therapy or after an unhealthy streak, the app supports this journey through a reactive virtual companion that acts as both a pet to care for and a reflection of the user themselves.",
      es: "Una experiencia de bienestar y cuidado personal centrada en el seguimiento de hábitos, la atención plena (mindfulness), la reflexión emocional e interacciones inmersivas inspiradas en el estilo glassmorphic. Diseñada para quienes están en recuperación al empezar terapia o después de una racha poco sana, la app apoya este proceso a través de un compañero virtual reactivo que funciona tanto como una mascota a la que cuidar como un reflejo de uno mismo.",
    },

    fullStack: false,

    technologies: ["React", "JavaScript", "HTML", "CSS", "Vite", "DnD Kit"],
    
    github: "https://github.com/walterbardier/recoverly",
    demo: "https://recoverly-wb.vercel.app",
    
    images: [
      "/screenshots/recoverly/dashboard-1.png",
      "/screenshots/recoverly/dashboard-2.png",
  
      "/screenshots/recoverly/meditation-1.png",
  
      "/screenshots/recoverly/walk-1.png",
      "/screenshots/recoverly/walk-2.png",
      "/screenshots/recoverly/walk-3.png",
      "/screenshots/recoverly/walk-4.png",
  
      "/screenshots/recoverly/dreams-1.png",
      "/screenshots/recoverly/dreams-2.png",
      "/screenshots/recoverly/dreams-3.png",
      "/screenshots/recoverly/dreams-4.png",
  
      "/screenshots/recoverly/dashboard-3.png",
      "/screenshots/recoverly/dashboard-4.png",
  
      "/screenshots/recoverly/alternative.png",
    ],
  },

  {
    id: 7,
    name: {
      en: "X Redesign Concept",
      es: "X Redesign Concept",
    },
    type: {
      en: "Frontend & UX Reasearch",
      es: "Frontend & UX Reasearch",
    },
    description: {
      en: "A modern X (Twitter) redesign concept focused on clean layouts, smooth transitions and premium UI interactions for a refined user experience.",
      es: "Un concepto de rediseño moderno de X (Twitter) enfocado en diseños limpios, transiciones suaves e interacciones de UI premium para una experiencia de usuario refinada.",
    },

    fullStack: false,

    technologies: ["React", "JavaScript", "Framer Motion", "Lucide Icons", "Figma"],
    
    github: "https://github.com/walterbardier/portfolio",
    demo: "https://x-redesign.vercel.app",
    
    images: [
      "/screenshots/x-redesign/feed-1.png",
      "/screenshots/x-redesign/feed-2.png",
      "/screenshots/x-redesign/messages-1.png",
      "/screenshots/x-redesign/messages-2.png",
      "/screenshots/x-redesign/topics-1.png",
      "/screenshots/x-redesign/topics-2.png",
      "/screenshots/x-redesign/topics-3.png",
      "/screenshots/x-redesign/profile-1.png",
      "/screenshots/x-redesign/profile-2.png",
    ],
  },

  {
    id: 8,
    name: {
      en: "Overwatch 2 UI Concept",
      es: "Overwatch 2 Concepto de UI",
    },
    type: {
      en: "Frontend & UX Reasearch",
      es: "Frontend & UX Reasearch",
    },
    description: {
      en: "A fan-made UX/UI project focused on redesigning the Overwatch 2 website to elevate its digital experience. The project analyzes user flows and interface heuristics to deliver a stronger visual identity, improved content hierarchy, and a fully optimized layout structure designed to enhance player engagement and navigation.",
      es: "Un proyecto de diseño UX/UI fan-made enfocado en el rediseño del sitio web de Overwatch 2 para elevar su experiencia digital. El proyecto analiza los flujos de usuario y las heurísticas de la interfaz para ofrecer una identidad visual más sólida, una mejor jerarquía de contenido y una estructura de layout completamente optimizada, diseñada para mejorar la interacción del jugador y la navegación.",
    },

    fullStack: false,

    technologies: ["HTML", "CSS"],
    
    github: "https://github.com/walterbardier/overwatch2",
    // demo: "#",
    
    images: [
      "/screenshots/overwatch2/home-1.png",
      "/screenshots/overwatch2/heroes-1.png",

      "/screenshots/overwatch2/junker-1.png",
      "/screenshots/overwatch2/junker-2.png",
      "/screenshots/overwatch2/junker-3.png",
      
      "/screenshots/overwatch2/heroes-2.png",
      "/screenshots/overwatch2/heroes-3.png",
      "/screenshots/overwatch2/home-3.png",
      "/screenshots/overwatch2/home-2.png",
      "/screenshots/overwatch2/home-4.png",

      "/screenshots/overwatch2/kiriko-1.png",
      
    ],
  },

  {
    id: 9,
    name: {
      en: "Portfolio UI",
      es: "Portfolio UI",
    },
    type: {
      en: "Frontend & UI Design",
      es: "Frontend & UI Design",
    },
    description: {
      en: "A modern portfolio concept focused on clean layouts, smooth transitions, and premium UI interactions for a refined user experience.",
      es: "Un concepto de portfolio moderno enfocado en diseños limpios, transiciones suaves y interacciones de UI premium para una experiencia de usuario refinada.",
    },

    fullStack: false,

    technologies: ["Figma", "JavaScript", "React"],
    
    github: "https://github.com/walterbardier/portfolio",
    demo: "https://portfolio-walterbardier.vercel.app",
    
    images: [
      "/screenshots/portfolio/home.png",
      "/screenshots/portfolio/projects.png",
      "/screenshots/portfolio/project-detail-1.png",
      "/screenshots/portfolio/project-detail-2.png",
      "/screenshots/portfolio/about.png",
      "/screenshots/portfolio/contact.png",
    ],
  },

  {
    id: 10,
    name: {
      en: "Río Negro Conectado",
      es: "Río Negro Conectado",
    },
    type: {
      en: "Full-Stack Web App",
      es: "Aplicación Web Full-Stack",
    },
    description: {
      en: "A web platform designed to improve organization and management of complaints and suggestions sent to the Intendencia of Río Negro, Uruguay. It allows citizens to submit concerns or notifications, which can be reviewed, responded to, and tracked by the municipality, creating a direct communication channel between citizens and government.",
      es: "Una plataforma web diseñada para mejorar la organización y gestión de quejas y sugerencias enviadas a la Intendencia de Río Negro, Uruguay. Permite a los ciudadanos enviar inquietudes o notificaciones, que pueden ser revisadas, respondidas y rastreadas por la municipalidad, creando un canal de comunicación directo entre ciudadanos y gobierno.",
    },

    fullStack: true,

    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    
    github: "https://github.com/walterbardier/proyecto",
    // demo: "#",
    
    images: [
      "/screenshots/rio-negro-conectado/login-1.png",
      "/screenshots/rio-negro-conectado/login-2.png",
      "/screenshots/rio-negro-conectado/home-user-1.png",
      "/screenshots/rio-negro-conectado/home-user-2.png",
      "/screenshots/rio-negro-conectado/home-user-3.png",
      "/screenshots/rio-negro-conectado/login-admin-1.png",
      "/screenshots/rio-negro-conectado/register-1.png",
      "/screenshots/rio-negro-conectado/home-admin-1.png",
      "/screenshots/rio-negro-conectado/home-admin-2.png",
      "/screenshots/rio-negro-conectado/home-admin-3.png",
      "/screenshots/rio-negro-conectado/home-admin-4.png",
      "/screenshots/rio-negro-conectado/answer-1.png",
      "/screenshots/rio-negro-conectado/answer-2.png",
      "/screenshots/rio-negro-conectado/edit-profile-1.png",
    ],
  },
];

export default projects;