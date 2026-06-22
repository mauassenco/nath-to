"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { List, X, WhatsappLogo } from "@phosphor-icons/react"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { buttonVariants } from "@/components/ui/button"
import { ExternalLink } from "@/components/shared/external-link"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
]

const WA_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/5511994310592"

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled ? "glass-nav-scrolled" : "glass-nav"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-wide text-foreground"
          aria-label="Nathália Catharino Zaccaria – página inicial"
        >
          Nathália Catharino
        </Link>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {label}
            </Link>
          ))}
          <ExternalLink
            href={WA_URL}
            className={cn(
              buttonVariants({ size: "sm", variant: "whatsapp" }),
              "ml-1"
            )}
          >
            <WhatsappLogo size={16} weight="fill" aria-hidden="true" />
            WhatsApp
          </ExternalLink>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="flex min-h-11 min-w-11 items-center justify-center text-foreground md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={24} /> : <List size={24} />}
          </SheetTrigger>
          <SheetContent side="right" className="glass-strong w-72 pt-12">
            <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
            <nav
              className="flex flex-col gap-6 px-6"
              aria-label="Menu mobile"
            >
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  aria-current={pathname === href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === href
                      ? "text-primary"
                      : "text-foreground"
                  )}
                >
                  {label}
                </Link>
              ))}
              <ExternalLink
                href={WA_URL}
                className={cn(
                  buttonVariants({ variant: "whatsapp" }),
                  "mt-4 w-full justify-center"
                )}
              >
                <WhatsappLogo size={18} weight="fill" aria-hidden="true" />
                Fale pelo WhatsApp
              </ExternalLink>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
