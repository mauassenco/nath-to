import Link from "next/link"
import { MapPin, Envelope, Phone } from "@phosphor-icons/react/dist/ssr"

const WA_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL!

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80 pt-12 pb-8">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="font-display text-lg text-background font-medium mb-2">
            Nathália Catharino Zaccaria
          </p>
          <p className="text-sm leading-relaxed">
            Terapeuta Ocupacional com 15 anos de experiência em reabilitação
            neurológica, saúde mental e atendimento domiciliar.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Links do rodapé">
          <p className="text-sm font-medium text-background mb-4">Navegação</p>
          <ul className="flex flex-col gap-2 text-sm">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-background transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <p className="text-sm font-medium text-background mb-4">Contato</p>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={14} aria-hidden="true" />
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-background transition-colors"
              >
                (11) 99431-0592
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Envelope size={14} aria-hidden="true" />
              <a
                href="mailto:nat_zacc@hotmail.com"
                className="hover:text-background transition-colors"
              >
                nat_zacc@hotmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin
                size={14}
                className="mt-0.5 shrink-0"
                aria-hidden="true"
              />
              <span>
                Poços de Caldas, MG
                <br />
                Atendimento presencial e domiciliar
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 mt-10 pt-6 border-t border-background/20 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-background/50">
        <p>
          © {new Date().getFullYear()} Nathália Catharino Zaccaria. Todos os
          direitos reservados.
        </p>
        <p>CRO-TO (inserir registro profissional)</p>
      </div>
    </footer>
  )
}
