"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { List, X } from "@phosphor-icons/react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
]

const WA_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL!

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display text-lg font-medium tracking-wide text-foreground"
          aria-label="Nathália Catharino Zaccaria – página inicial"
        >
          Nathália Catharino
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
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
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "sm" }), "ml-4")}
          >
            Fale pelo WhatsApp
          </a>
        </nav>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden text-foreground p-2"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={24} /> : <List size={24} />}
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-background pt-12">
            <nav
              className="flex flex-col gap-6 px-6"
              aria-label="Menu mobile"
            >
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
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
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants(), "mt-4 w-full justify-center")}
              >
                Fale pelo WhatsApp
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
