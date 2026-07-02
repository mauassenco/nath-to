import type { Metadata } from "next"
import { SEO, CAREER_COPY } from "@/lib/site"
import { SobreHero } from "@/components/sobre/sobre-hero"
import { SobreQuem } from "@/components/sobre/sobre-quem"
import { SobreAbordagem } from "@/components/sobre/sobre-abordagem"
import { SobreAreas } from "@/components/sobre/sobre-areas"
import { SobreTrajetoria } from "@/components/sobre/sobre-trajetoria"
import { SobreFormacao } from "@/components/sobre/sobre-formacao"
import { SobreCta } from "@/components/sobre/sobre-cta"

export const metadata: Metadata = {
  title: { absolute: SEO.sobreTitle },
  description: CAREER_COPY.seoSobre,
  alternates: { canonical: "/sobre" },
}

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nathália Catharino Zaccaria",
  jobTitle: "Terapeuta Ocupacional",
  description: CAREER_COPY.schema,
  url: "https://nathaliacatharino.com.br/sobre",
  sameAs: ["https://www.linkedin.com/in/nathaliacatharinozaccaria"],
  worksFor: {
    "@type": "Organization",
    name: "Nathália Catharino Zaccaria — Terapia Ocupacional",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Centro Universitário São Camilo",
  },
}

export default function SobrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <SobreHero />
      <SobreQuem />
      <SobreAbordagem />
      <SobreAreas />
      <SobreTrajetoria />
      <SobreFormacao />
      <SobreCta />
    </>
  )
}
