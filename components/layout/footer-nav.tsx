"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
]

export function FooterNav() {
  const pathname = usePathname()

  return (
    <nav aria-label="Links do rodapé">
      <p className="mb-4 text-sm font-semibold text-primary-foreground">
        Navegação
      </p>
      <ul className="flex flex-col gap-2 text-sm">
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className="transition-colors hover:text-primary-foreground"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
