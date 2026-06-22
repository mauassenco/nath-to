import { Hero } from "@/components/home/hero"
import { Authority } from "@/components/home/authority"
import { AboutPreview } from "@/components/home/about-preview"
import { ServicesPreview } from "@/components/home/services-preview"
import { HowItWorks } from "@/components/home/how-it-works"
import { FaqSection } from "@/components/home/faq-section"
import { FinalCta } from "@/components/home/final-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nathália Catharino Zaccaria — Terapeuta Ocupacional | Poços de Caldas, MG",
  description:
    "Terapia Ocupacional especializada para adultos e idosos. Reabilitação neurológica, pós-AVC, ortopédica, estimulação cognitiva e saúde mental em Poços de Caldas, MG.",
  alternates: { canonical: "/" },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Para quem o atendimento é indicado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Principalmente para adultos e idosos que precisam de apoio em reabilitação neurológica, pós-AVC, reabilitação ortopédica, estimulação cognitiva, saúde mental ou adaptação da rotina.",
      },
    },
    {
      "@type": "Question",
      name: "O atendimento pode ser domiciliar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Quando a mobilidade, a condição clínica ou o contexto da pessoa favorecem esse formato, o atendimento domiciliar pode ser a melhor opção.",
      },
    },
    {
      "@type": "Question",
      name: "Como a Terapia Ocupacional ajuda na prática?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ela ajuda a pessoa a ampliar autonomia, organizar a rotina, manter participação nas atividades e encontrar estratégias mais funcionais para viver melhor.",
      },
    },
    {
      "@type": "Question",
      name: "O atendimento inclui família e cuidadores?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quando necessário, sim. A orientação para familiares e cuidadores faz parte de um cuidado mais completo e efetivo.",
      },
    },
  ],
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://nathaliacatharino.com.br",
  name: "Nathália Catharino Zaccaria — Terapeuta Ocupacional",
  description:
    "Terapia Ocupacional especializada para adultos e idosos em Poços de Caldas, MG.",
  url: "https://nathaliacatharino.com.br",
  telephone: "+5511994310592",
  email: "nat_zacc@hotmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Poços de Caldas",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -21.7858,
    longitude: -46.5636,
  },
  priceRange: "$$",
  currenciesAccepted: "BRL",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: ["https://www.linkedin.com/in/nathaliacatharinozaccaria"],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <Authority />
      <AboutPreview />
      <ServicesPreview />
      <HowItWorks />
      <FaqSection />
      <FinalCta />
    </>
  )
}
