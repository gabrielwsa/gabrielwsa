import { defaultLang, routes, ui, type Lang } from "./ui"

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/")
  if (lang in ui) return lang as Lang
  return defaultLang
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key]
  }
}

/** Prefixes a path with the language segment. Spanish is the root locale. */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : `/${path}`
  return lang === defaultLang ? clean : `/${lang}${clean === "/" ? "" : clean}`
}

/** Section anchors are translated per language, so links stay readable. */
export function sectionId(key: keyof (typeof routes)[typeof defaultLang], lang: Lang): string {
  return routes[lang][key]
}

export function sectionHref(
  key: keyof (typeof routes)[typeof defaultLang],
  lang: Lang
): string {
  return `${localizePath("/", lang)}#${sectionId(key, lang)}`
}

/** Same page in the other language, used by the language switcher. */
export function alternatePath(url: URL, target: Lang): string {
  const segments = url.pathname.split("/").filter(Boolean)
  if (segments[0] in ui) segments.shift()
  return localizePath(`/${segments.join("/")}`, target)
}
