import { jsPDF } from "jspdf"
import { getCollection } from "astro:content"
import { cvProjects, getContent, profile, skills } from "@/data/portfolio"
import { useTranslations } from "@/i18n/utils"
import type { Lang } from "@/i18n/ui"

/** Generated at build time so downloading needs neither JavaScript nor a print dialog. */
export async function resumePdf(lang: Lang): Promise<Response> {
  const c = getContent(lang)
  const t = useTranslations(lang)
  const doc = new jsPDF({ format: "a4", unit: "mm" })
  const left = 15
  const width = 180
  let y = 20
  doc.setProperties({ title: `${profile.name} - ${t("cv.title")}`, author: profile.name })

  function room(height: number) {
    if (y + height > 282) { doc.addPage(); y = 20 }
  }
  function text(value: string, size = 10, bold = false) {
    doc.setFont("helvetica", bold ? "bold" : "normal").setFontSize(size)
    const lines: string[] = doc.splitTextToSize(value, width)
    const leading = size * 0.48
    for (const line of lines) {
      room(leading)
      doc.text(line, left, y)
      y += leading
    }
  }
  function section(title: string) {
    room(23)
    y += 4
    text(title, 11, true)
    doc.setDrawColor(160).setLineWidth(0.2).line(left, y - 3, left + width, y - 3)
    y += 2
  }
  function links(items: { label: string; url: string }[], size = 9) {
    doc.setFont("helvetica", "normal").setFontSize(size)
    room(5)
    let x = left
    items.forEach((item, index) => {
      if (index) { doc.text(" · ", x, y); x += doc.getTextWidth(" · ") }
      doc.textWithLink(item.label, x, y, { url: item.url })
      x += doc.getTextWidth(item.label)
    })
    y += 4.5
  }

  text(profile.name, 20, true)
  text(c.role, 12)
  y += 2
  text(profile.location, 9)
  links([{ label: profile.email, url: `mailto:${profile.email}` }, { label: profile.phone, url: `tel:${profile.phoneHref}` }])
  links([profile.linkedin, profile.github].map(url => ({ label: url.replace("https://", ""), url })), 8)
  y += 3
  text(c.summary)

  section(t("cv.experience"))
  c.experience.forEach((item, index) => {
    if (index) y += 3
    room(20)
    doc.setFont("helvetica", "normal").setFontSize(9)
    doc.text(item.date, left + width, y, { align: "right" })
    text(item.title, 10, true)
    text(item.company)
    if (item.description) { y += 1; text(item.description) }
  })
  section(t("cv.education"))
  text(t("cv.degree"), 10, true)
  text(t("cv.institution"))
  text(t("cv.educationStatus"))
  section(t("cv.skills"))
  text(skills.join(", "))
  section(t("cv.projects"))
  for (const project of cvProjects) {
    room(5)
    doc.setFont("helvetica", "bold").setFontSize(10)
    const label = `${project.name}: `
    doc.text(label, left, y)
    const x = left + doc.getTextWidth(label)
    doc.setFont("helvetica", "normal")
    doc.textWithLink(project.url.replace("https://", ""), x, y, { url: project.url })
    y += 4.8
  }
  section(t("cv.certifications"))
  const certifications = (await getCollection("certifications")).sort((a, b) => a.data.title.localeCompare(b.data.title))
  for (const { data } of certifications) {
    const title = lang === "en" ? (data.titleEn ?? data.title) : data.title
    const hours = lang === "en" ? data.hoursEn : data.hours
    text(`${title} — ${hours}`)
  }
  return new Response(doc.output("arraybuffer"), {
    headers: { "Content-Type": "application/pdf" },
  })
}
