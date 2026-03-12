export const profile = {
  name: "Gabriel W. Silva de Araujo",
  role: "Desarrollador Full Stack",
  tagline: "Construyo experiencias web claras, modernas y listas para producción.",
  summary:
    "Estudiante de Análisis de Sistemas Informáticos con experiencia práctica en mantenimiento, mejora y despliegue de sistemas empresariales.",
  cvSummary:
    "Perfil orientado a resultados, con experiencia en mantenimiento de sistemas web, despliegues por terminal y desarrollo full stack con foco en calidad, continuidad operativa y mejora constante.",
  email: "gabrielsilvadearaujo45@gmail.com",
  linkedin: "https://linkedin.com/in/gabriel-william-039b97306",
  github: "https://github.com/gabrielwsa",
  cvRoute: "/cv?print=1",
  certificationCount: 6,
} as const

export const experience = [
  {
    date: "09/2024 - Actualmente...",
    title: "Desarrollador Full Stack",
    company: "EPEM",
    description:
      "Ultilizando PHP con JavaScript para realizar o mantenimento y mejora de un sistema web de la empresa EPEM, y implementando nuevos modulos en el sistema.",
  },
  {
    date: "04/2022 - Actualmente...",
    title: "Desarrollador DevOps",
    company: "EPEM",
    description:
      "Realicé el despliegue de las funcionalidades desarrolladas en el sistema web de la empresa EPEM, accediendo al sistema mediante SSH y utilizando comandos de terminal. Además, ejecuté comandos directamente en producción para resolver incidencias y garantizar el correcto funcionamiento del sistema.",
  },
] as const

export const projects = [
  {
    title: "API de Pokemons",
    eyebrow: "Proyecto frontend",
    description:
      "Integracion de API de Pokemons, con el fin de obtener datos de los Pokemons y mostrarlos en una pagina web.",
    link: "https://pokemon-api-with-react.vercel.app/",
    github: "https://github.com/gabrielwsa/PokemonAPI-with-React",
    image: "/projects/ProyectoPokemon.png",
    tags: ["React"],
  },
  {
    title: "API giphy",
    eyebrow: "Proyecto frontend",
    description:
      "Integracion de API de Giphy, con el fin de obtener datos de los gifs y mostrarlos en una pagina web.",
    link: "https://gif-api-react.vercel.app/",
    github: "https://github.com/gabrielwsa/gif-api-React",
    image: "/projects/GifExpertApp.png",
    tags: ["React"],
  },
] as const

export const focusAreas = [
  "Mantenimiento y evolución de sistemas web reales",
  "Despliegues, terminal y soporte en producción",
  "Frontend limpio, backend funcional y enfoque práctico",
] as const

export const strengths = [
  "Aprendizaje continuo y mejora constante",
  "Responsabilidad, detalle y foco en calidad",
  "Trabajo en equipo, adaptabilidad y empatía",
  "Orientación a resultados y resolución de problemas",
] as const

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
