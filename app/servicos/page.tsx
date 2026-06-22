import type { Metadata } from "next"
import { ServicosHero } from "@/components/servicos/servicos-hero"
import { ServicosIntro } from "@/components/servicos/servicos-intro"
import { ServicosGrid } from "@/components/servicos/servicos-grid"
import { ServicosSignals } from "@/components/servicos/servicos-signals"
import { ServicosCta } from "@/components/servicos/servicos-cta"

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Serviços de Terapia Ocupacional para adultos e idosos: reabilitação neurológica, pós-AVC, ortopédica, estimulação cognitiva, saúde mental e atendimento domiciliar em Poços de Caldas, MG.",
  alternates: { canonical: "/servicos" },
}

export default function ServicosPage() {
  return (
    <>
      <ServicosHero />
      <ServicosIntro />
      <ServicosGrid />
      <ServicosSignals />
      <ServicosCta />
    </>
  )
}
