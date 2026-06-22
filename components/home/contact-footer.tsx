import { Phone, Envelope, MapPin } from "@phosphor-icons/react/dist/ssr"
import { ExternalLink } from "@/components/shared/external-link"

const WA_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "#"
const PHONE = "+5511994310592"

export function ContactFooter() {
  return (
    <section
      className="section-gradient border-t border-border/60 px-6 py-14"
      aria-label="Informações de contato"
    >
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
        <a
          href={`tel:${PHONE}`}
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <Phone size={16} aria-hidden="true" />
          <span>(11) 99431-0592</span>
        </a>
        <ExternalLink
          href={WA_URL}
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <Phone size={16} aria-hidden="true" />
          <span>WhatsApp</span>
        </ExternalLink>
        <a
          href="mailto:nat_zacc@hotmail.com"
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <Envelope size={16} aria-hidden="true" />
          <span>nat_zacc@hotmail.com</span>
        </a>
        <span className="flex items-center gap-2">
          <MapPin size={16} aria-hidden="true" />
          <span>Poços de Caldas, MG · Atendimento presencial e domiciliar</span>
        </span>
      </div>
    </section>
  )
}
