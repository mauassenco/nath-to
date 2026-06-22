import { Phone, Envelope, MapPin } from "@phosphor-icons/react/dist/ssr"

const WA_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "#"

export function ContactFooter() {
  return (
    <section className="py-14 px-6 bg-muted border-t border-border" aria-label="Informações de contato">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <Phone size={16} aria-hidden="true" />
          <span>(11) 99431-0592</span>
        </a>
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
