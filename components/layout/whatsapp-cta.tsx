import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

const WA_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL!

export function WhatsAppCTA() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 active:scale-95 transition-transform"
    >
      <WhatsappLogo size={28} weight="fill" aria-hidden="true" />
    </a>
  )
}
