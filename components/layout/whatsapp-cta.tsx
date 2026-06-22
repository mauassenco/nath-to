import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"
import { ExternalLink } from "@/components/shared/external-link"

const WA_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/5511994310592"

export function WhatsAppCTA() {
  return (
    <ExternalLink
      href={WA_URL}
      aria-label="Fale pelo WhatsApp (abre em nova aba)"
      className="glass-whatsapp fixed right-6 bottom-6 z-50 flex size-14 items-center justify-center rounded-full hover:scale-105 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
    >
      <WhatsappLogo size={28} weight="fill" aria-hidden="true" />
    </ExternalLink>
  )
}
