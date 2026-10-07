import type { Lang } from "@/i18n/ui"

export const cvProjects = [
  { name: "TraderBot", url: "https://github.com/gabrielwsa/TraderBot" },
  { name: "ticketera", url: "https://github.com/gabrielwsa/ticketera" },
] as const

/** Language-independent facts: links, contact details, counters. */
export const profile = {
  name: "Gabriel W. Silva de Araujo",
  email: "gabrielsilvadearaujo45@gmail.com",
  phone: "+595 991 795 279",
  /** Digits only, for the tel: link. */
  phoneHref: "+595991795279",
  location: "12 de Junio, Fernando de la Mora — Asunción",
  linkedin: "https://linkedin.com/in/gabriel-william-039b97306",
  github: "https://github.com/gabrielwsa",
  certificationCount: 6,
} as const

/** First day of the first job, used to keep the years-of-experience stat current. */
export const careerStart = new Date(2024, 8, 1)

/** Years since `careerStart`, rounded to the nearest — shown as "N+" in the hero. */
export function yearsOfExperience(now = new Date()): number {
  const years = (now.getTime() - careerStart.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
  return Math.max(1, Math.round(years))
}

export const skills = [
  "PHP",
  "JavaScript",
  "React",
  "Laravel",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Docker",
  "Git",
  "HTML",
  "CSS",
] as const

type ExperienceItem = {
  date: string
  title: string
  company: string
  /** Empty while the role is still being written up; the UI omits it. */
  description?: string
}

type ProjectItem = {
  title: string
  eyebrow: string
  description: string
  link: string
  github: string
  image: string
  tags: readonly "React"[]
}

type AboutParagraph = {
  text: string
  strong: string
  rest: string
}

type Content = {
  role: string
  tagline: string
  summary: string
  cvSummary: string
  heroNote: string
  nowText: string
  aboutParagraphs: readonly AboutParagraph[]
  experience: readonly ExperienceItem[]
  projects: readonly ProjectItem[]
  focusAreas: readonly string[]
  strengths: readonly string[]
  stats: readonly string[]
}

const es: Content = {
  role: "Desarrollador Full Stack",
  tagline: "Construyo experiencias web claras, modernas y listas para producción.",
  summary:
    "Estudiante de Análisis de Sistemas Informáticos con experiencia práctica en mantenimiento, mejora y despliegue de sistemas empresariales.",
  cvSummary:
    "Perfil orientado a resultados, con experiencia en mantenimiento de sistemas web, despliegues por terminal y desarrollo full stack con foco en calidad, continuidad operativa y mejora constante.",
  heroNote:
    "Trabajo con una mentalidad orientada a resultados: interfaces más limpias, código útil y soluciones que realmente ayuden a operar mejor un producto web.",
  nowText:
    "Mejorando sistemas internos en producción, colaborando con despliegues vía terminal y reforzando mi stack full stack con foco en calidad y continuidad operativa.",
  aboutParagraphs: [
    {
      text: "Me llamo Gabriel W. Silva de Araujo y actualmente estoy ",
      strong: "cursando Análisis de Sistemas Informáticos mientras desarrollo mi perfil full stack",
      rest: " con experiencia real en sistemas empresariales.",
    },
    {
      text: "Me defino por una forma de trabajo ",
      strong: "persistente, proactiva y orientada al aprendizaje continuo",
      rest: ". Busco entender bien los problemas, priorizar lo importante y entregar soluciones claras, mantenibles y útiles.",
    },
    {
      text: "Valoro la ",
      strong: "colaboración, la responsabilidad y la mejora constante",
      rest: ". Mi objetivo es seguir creciendo dentro del área IT, aportando criterio técnico y una ejecución confiable en cada proyecto.",
    },
  ],
  experience: [
    {
      date: "05/2025 - Actualmente",
      title: "Desarrollador Full Stack",
      company: "Inmobiliaria del Este (IDESA)",
      description: "",
    },
    {
      date: "09/2024 - 05/2025",
      title: "Desarrollador Full Stack y DevOps",
      company: "EPEM Emergencias Médicas",
      description:
        "Gestioné los servidores de la empresa, realizando despliegues y tareas de mantenimiento mediante acceso SSH y comandos de terminal. Trabajé además en el desarrollo del sistema web con PHP y JavaScript, y en el soporte técnico, corrigiendo errores y garantizando el correcto funcionamiento del sistema en producción.",
    },
  ],
  projects: [
    {
      title: "API de Pokémon",
      eyebrow: "Proyecto frontend",
      description:
        "Integración de la API de Pokémon para obtener datos y mostrarlos en una página web.",
      link: "https://pokemon-api-with-react.vercel.app/",
      github: "https://github.com/gabrielwsa/PokemonAPI-with-React",
      image: "/projects/ProyectoPokemon.png",
      tags: ["React"],
    },
    {
      title: "API Giphy",
      eyebrow: "Proyecto frontend",
      description:
        "Integración de la API de Giphy para obtener gifs y mostrarlos en una página web.",
      link: "https://gif-api-react.vercel.app/",
      github: "https://github.com/gabrielwsa/gif-api-React",
      image: "/projects/GifExpertApp.png",
      tags: ["React"],
    },
  ],
  focusAreas: [
    "Mantenimiento y evolución de sistemas web reales",
    "Despliegues, terminal y soporte en producción",
    "Frontend limpio, backend funcional y enfoque práctico",
  ],
  strengths: [
    "Aprendizaje continuo y mejora constante",
    "Responsabilidad, detalle y foco en calidad",
    "Trabajo en equipo, adaptabilidad y empatía",
    "Orientación a resultados y resolución de problemas",
  ],
  stats: ["años de experiencia", "proyectos públicos destacados", "certificados técnicos"],
}

const en: Content = {
  role: "Full Stack Developer",
  tagline: "I build web experiences that are clear, modern and production-ready.",
  summary:
    "Computer Systems Analysis student with hands-on experience maintaining, improving and deploying enterprise systems.",
  cvSummary:
    "Results-driven profile with experience in web systems maintenance, terminal-based deployments and full stack development, focused on quality, operational continuity and constant improvement.",
  heroNote:
    "I work with a results-driven mindset: cleaner interfaces, useful code and solutions that genuinely help a web product run better.",
  nowText:
    "Improving internal systems in production, supporting deployments via terminal and strengthening my full stack skills with a focus on quality and operational continuity.",
  aboutParagraphs: [
    {
      text: "My name is Gabriel W. Silva de Araujo and I'm currently ",
      strong: "studying Computer Systems Analysis while building my full stack profile",
      rest: ", with real experience in enterprise systems.",
    },
    {
      text: "I'd describe my way of working as ",
      strong: "persistent, proactive and driven by continuous learning",
      rest: ". I aim to understand problems properly, prioritize what matters and deliver clear, maintainable and useful solutions.",
    },
    {
      text: "I value ",
      strong: "collaboration, accountability and constant improvement",
      rest: ". My goal is to keep growing in IT, bringing technical judgement and reliable execution to every project.",
    },
  ],
  experience: [
    {
      date: "05/2025 - Present",
      title: "Full Stack Developer",
      company: "Inmobiliaria del Este (IDESA)",
      description: "",
    },
    {
      date: "09/2024 - 05/2025",
      title: "Full Stack & DevOps Developer",
      company: "EPEM Emergencias Médicas",
      description:
        "Managed the company's servers, handling deployments and maintenance over SSH and through terminal commands. I also worked on the web system's development with PHP and JavaScript, and on technical support, fixing bugs and keeping the system running correctly in production.",
    },
  ],
  projects: [
    {
      title: "Pokémon API",
      eyebrow: "Frontend project",
      description: "Integration with the Pokémon API to fetch data and display it on a web page.",
      link: "https://pokemon-api-with-react.vercel.app/",
      github: "https://github.com/gabrielwsa/PokemonAPI-with-React",
      image: "/projects/ProyectoPokemon.png",
      tags: ["React"],
    },
    {
      title: "Giphy API",
      eyebrow: "Frontend project",
      description: "Integration with the Giphy API to fetch gifs and display them on a web page.",
      link: "https://gif-api-react.vercel.app/",
      github: "https://github.com/gabrielwsa/gif-api-React",
      image: "/projects/GifExpertApp.png",
      tags: ["React"],
    },
  ],
  focusAreas: [
    "Maintaining and evolving real-world web systems",
    "Deployments, terminal work and production support",
    "Clean frontend, functional backend, practical approach",
  ],
  strengths: [
    "Continuous learning and constant improvement",
    "Accountability, attention to detail and focus on quality",
    "Teamwork, adaptability and empathy",
    "Results-oriented and strong problem solving",
  ],
  stats: ["years of experience", "featured public projects", "technical certificates"],
}

const content = { es, en } as const

export function getContent(lang: Lang): Content {
  return content[lang]
}
