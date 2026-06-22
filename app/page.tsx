import { Hero } from "@/components/home/hero"
import { Authority } from "@/components/home/authority"
import { AboutPreview } from "@/components/home/about-preview"
import { ServicesPreview } from "@/components/home/services-preview"
import { Benefits } from "@/components/home/benefits"
import { Differentials } from "@/components/home/differentials"
import { HowItWorks } from "@/components/home/how-it-works"
import { FaqSection } from "@/components/home/faq-section"
import { FinalCta } from "@/components/home/final-cta"
import { ContactFooter } from "@/components/home/contact-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nathália Catharino Zaccaria — Terapeuta Ocupacional | Poços de Caldas, MG",
  description:
    "Terapia Ocupacional especializada para adultos e idosos. Reabilitação neurológica, pós-AVC, ortopédica, estimulação cognitiva e saúde mental em Poços de Caldas, MG.",
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Authority />
      <AboutPreview />
      <ServicesPreview />
      <Benefits />
      <Differentials />
      <HowItWorks />
      <FaqSection />
      <FinalCta />
      <ContactFooter />
    </>
  )
}
