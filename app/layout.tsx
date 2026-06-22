import type { Metadata } from "next"
import { cormorant, dmSans } from "@/lib/fonts"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppCTA } from "@/components/layout/whatsapp-cta"
import { CookieConsent } from "@/components/shared/cookie-consent"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default:
      "Nathália Catharino Zaccaria — Terapeuta Ocupacional | Poços de Caldas, MG",
    template:
      "%s | Nathália Catharino Zaccaria — Terapeuta Ocupacional",
  },
  description:
    "Terapia Ocupacional especializada para adultos e idosos. Reabilitação neurológica, pós-AVC, ortopédica, estimulação cognitiva, saúde mental e atendimento domiciliar em Poços de Caldas, MG.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://nathaliacatharino.com.br"
  ),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <body className="font-sans antialiased min-h-full flex flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppCTA />
        <CookieConsent />
      </body>
    </html>
  )
}
