export const languages = {
  es: "Español",
  en: "English",
} as const

export const defaultLang = "es"

export type Lang = keyof typeof languages

export const ui = {
  es: {
    "nav.home": "Inicio",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.certifications": "Certificaciones",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "nav.toHome": "Ir al inicio",
    "nav.openMenu": "Abrir menú",

    "hero.available": "Disponible para trabajar",
    "hero.iam": "Soy",
    "hero.cv": "CV en PDF",
    "hero.viewProjects": "Ver proyectos",
    "hero.viewExperience": "Mi experiencia",
    "hero.now": "Ahora mismo",
    "hero.contact": "Contacto",

    "section.experience": "Experiencia laboral",
    "section.projects": "Proyectos",
    "section.certifications": "Certificados",
    "section.about": "Sobre mí",

    "projects.preview": "Vista previa de",
    "projects.website": "Sitio web",

    "cert.view": "Ver certificado",

    "footer.rights": "Portafolio personal.",
    "footer.kicker": "Escribime",

    "cv.title": "CV",
    "cv.back": "Volver al portafolio",
    "cv.save": "Descargar PDF",
    "cv.experience": "Experiencia",
    "cv.education": "Formación académica",
    "cv.degree": "Licenciatura en Análisis de Sistemas Informáticos",
    "cv.institution": "Universidad Americana",
    "cv.educationStatus": "Cursando desde 2025 · Finalización prevista: 2028",
    "cv.projects": "Proyectos",
    "cv.strengths": "Fortalezas",
    "cv.skills": "Tecnologías",
    "cv.certifications": "Certificados",
    "cv.portfolio": "Portafolio",
    "cv.description": "CV en HTML listo para guardar como PDF.",

    "meta.title": "Portafolio de Gabriel W. Silva - Desarrollador Full Stack",
    "meta.description":
      "Gabriel W. Silva - Cursando Análisis de Sistemas Informáticos y Desarrollador Full Stack",
  },
  en: {
    "nav.home": "Home",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.certifications": "Certifications",
    "nav.about": "About me",
    "nav.contact": "Contact",
    "nav.toHome": "Go to home",
    "nav.openMenu": "Open menu",

    "hero.available": "Available for work",
    "hero.iam": "I'm",
    "hero.cv": "CV in PDF",
    "hero.viewProjects": "View projects",
    "hero.viewExperience": "My experience",
    "hero.now": "Right now",
    "hero.contact": "Contact",

    "section.experience": "Work experience",
    "section.projects": "Projects",
    "section.certifications": "Certifications",
    "section.about": "About me",

    "projects.preview": "Preview of",
    "projects.website": "Website",

    "cert.view": "View certificate",

    "footer.rights": "Personal portfolio.",
    "footer.kicker": "Get in touch",

    "cv.title": "Resume",
    "cv.back": "Back to portfolio",
    "cv.save": "Download PDF",
    "cv.experience": "Experience",
    "cv.education": "Education",
    "cv.degree": "Bachelor’s Degree in Computer Systems Analysis",
    "cv.institution": "Universidad Americana",
    "cv.educationStatus": "In progress since 2025 · Expected graduation: 2028",
    "cv.projects": "Projects",
    "cv.strengths": "Strengths",
    "cv.skills": "Technologies",
    "cv.certifications": "Certifications",
    "cv.portfolio": "Portfolio",
    "cv.description": "HTML resume ready to save as PDF.",

    "meta.title": "Gabriel W. Silva's Portfolio - Full Stack Developer",
    "meta.description":
      "Gabriel W. Silva - Computer Systems Analysis student and Full Stack Developer",
  },
} as const

export const routes = {
  es: {
    home: "inicio",
    experience: "experiencia",
    projects: "proyectos",
    certifications: "certificados",
    about: "sobre-mi",
  },
  en: {
    home: "home",
    experience: "experience",
    projects: "projects",
    certifications: "certifications",
    about: "about",
  },
} as const
