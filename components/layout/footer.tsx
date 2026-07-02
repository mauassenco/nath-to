import { MapPin, Envelope, Phone } from "@phosphor-icons/react/dist/ssr"
import { ExternalLink } from "@/components/shared/external-link"
import { FooterNav } from "@/components/layout/footer-nav"
import { SiteLogo } from "@/components/shared/site-logo"
import { SITE, CAREER_COPY } from "@/lib/site"

export function Footer() {
  return (
    <footer className="bg-primary pt-14 pb-8 text-primary-foreground/85">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-3">
        <div>
          <SiteLogo variant="footer" className="mb-2" />
          <p className="text-sm leading-relaxed">
            {CAREER_COPY.footer}
          </p>
        </div>

        <FooterNav />

        <div>
          <p className="mb-4 text-sm font-semibold text-primary-foreground">
            Contato
          </p>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
              <span>
                <a
                  href={`tel:${SITE.phone.tel}`}
                  className="transition-colors hover:text-primary-foreground"
                >
                  {SITE.phone.display}
                </a>
                <span className="mt-0.5 block text-xs text-primary-foreground/60">
                  {SITE.phone.note}
                </span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} aria-hidden="true" />
              <ExternalLink
                href={SITE.whatsappUrl}
                className="transition-colors hover:text-primary-foreground"
              >
                WhatsApp
              </ExternalLink>
            </li>
            <li className="flex items-center gap-2">
              <Envelope size={14} aria-hidden="true" />
              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors hover:text-primary-foreground"
              >
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin
                size={14}
                className="mt-0.5 shrink-0"
                aria-hidden="true"
              />
              <span>
                {SITE.location.city}
                <br />
                {SITE.location.modality}
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
