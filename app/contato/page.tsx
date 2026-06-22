import type { Metadata } from "next"
import { ContatoHero } from "@/components/contato/contato-hero"
import { ContatoIntro } from "@/components/contato/contato-intro"
import { ContatoMain } from "@/components/contato/contato-main"
import { ContatoCta } from "@/components/contato/contato-cta"

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com Nathália Catharino Zaccaria para agendar uma conversa inicial sobre Terapia Ocupacional em Poços de Caldas, MG. WhatsApp, e-mail e formulário disponíveis.",
  alternates: { canonical: "/contato" },
}

export default function ContatoPage() {
  return (
    <>
      <ContatoHero />
      <ContatoIntro />
      <ContatoMain />
      <ContatoCta />
    </>
  )
}
