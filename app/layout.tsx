import type { Metadata } from "next"
import { BRAND } from "@/lib/brand"
import { SEO } from "@/lib/site"
import { cormorant, dmSans } from "@/lib/fonts"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppCTA } from "@/components/layout/whatsapp-cta"
import { CookieConsent } from "@/components/shared/cookie-consent"
import { MotionProvider } from "@/components/shared/motion-provider"
import "./globals.css"

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nathaliacatharino.com.br"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO.homeTitle,
    template: "%s | Terapeuta Ocupacional Poços de Caldas",
  },
  description:
    "Terapia Ocupacional especializada para adultos e idosos. Reabilitação neurológica, pós-AVC, ortopédica, estimulação cognitiva, saúde mental e atendimento domiciliar em Poços de Caldas, MG.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Nathália Catharino Zaccaria — Terapeuta Ocupacional",
    url: SITE_URL,
  },
  twitter: {
    card: "summary",
  },
  icons: {
    icon: [{ url: BRAND.favicon, sizes: "96x96", type: "image/png" }],
    apple: BRAND.appleIcon,
  },
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lg focus:outline-none focus:ring-3 focus:ring-ring/40"
        >
          Pular para o conteúdo
        </a>
        <MotionProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppCTA />
          <CookieConsent />
        </MotionProvider>
      </body>
    </html>
  )
}
