import { MapPin, Envelope, Phone } from "@phosphor-icons/react/dist/ssr"
import { ExternalLink } from "@/components/shared/external-link"
import { FooterNav } from "@/components/layout/footer-nav"
import { SiteLogo } from "@/components/shared/site-logo"

const WA_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/5511994310592"
const PHONE = "+5511994310592"

export function Footer() {
  return (
    <footer className="bg-primary pt-14 pb-8 text-primary-foreground/85">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-3">
        <div>
          <SiteLogo variant="footer" className="mb-2" />
          <p className="text-sm leading-relaxed">
            Terapeuta Ocupacional com 15 anos de experiência em reabilitação
            neurológica, saúde mental e atendimento domiciliar.
          </p>
        </div>

        <FooterNav />

        <div>
          <p className="mb-4 text-sm font-semibold text-primary-foreground">
            Contato
          </p>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={14} aria-hidden="true" />
              <a
                href={`tel:${PHONE}`}
                className="transition-colors hover:text-primary-foreground"
              >
                (11) 99431-0592
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} aria-hidden="true" />
              <ExternalLink
                href={WA_URL}
                className="transition-colors hover:text-primary-foreground"
              >
                WhatsApp
              </ExternalLink>
            </li>
            <li className="flex items-center gap-2">
              <Envelope size={14} aria-hidden="true" />
              <a
                href="mailto:nat_zacc@hotmail.com"
                className="transition-colors hover:text-primary-foreground"
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

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-primary-foreground/15 px-6 pt-6 text-xs text-primary-foreground/55 sm:flex-row">
        <p>
          © {new Date().getFullYear()} Nathália Catharino Zaccaria. Todos os
          direitos reservados.
        </p>
        <p>CREFITO (inserir registro profissional)</p>
      </div>
    </footer>
  )
}
