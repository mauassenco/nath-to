"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Link from "next/link"
import { ArrowRight } from "@phosphor-icons/react"
import { buttonVariants } from "@/components/ui/button"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { ExternalLink } from "@/components/shared/external-link"
import { cn } from "@/lib/utils"

const WA_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/5511994310592"

export function Hero() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const targets = [
        ".hero-eyebrow",
        ".hero-title",
        ".hero-subtitle",
        ".hero-ctas",
        ".hero-trust",
        ".hero-image",
      ]
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      if (prefersReduced) {
        gsap.set(targets, { opacity: 1, y: 0, scale: 1 })
        return
      }
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.from(".hero-eyebrow", { opacity: 0, y: 12, duration: 0.55 })
        .from(".hero-title", { opacity: 0, y: 36, duration: 0.75 }, "-=0.25")
        .from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.6 }, "-=0.35")
        .from(".hero-ctas", { opacity: 0, y: 16, duration: 0.5 }, "-=0.3")
        .from(".hero-trust", { opacity: 0, duration: 0.45 }, "-=0.15")
        .from(
          ".hero-image",
          { opacity: 0, scale: 1.03, duration: 0.9 },
          "-=0.6"
        )
    },
    { scope: container }
  )

  return (
    <section
      ref={container}
      className="hero-glow relative flex min-h-[100dvh] items-center overflow-hidden bg-background pt-16"
      aria-labelledby="hero-title"
    >
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: "256px 256px",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="flex flex-col justify-center">
          <p className="hero-eyebrow mb-5 text-sm font-semibold tracking-widest text-accent uppercase">
            Terapeuta Ocupacional · Poços de Caldas, MG
          </p>

          <h1
            id="hero-title"
            className="hero-title font-display mb-6 text-4xl leading-[1.12] font-medium text-balance text-foreground sm:text-5xl lg:text-[3.25rem]"
          >
            <span className="text-primary">Mais autonomia</span> no dia a dia
            <span className="mt-2 block text-[0.72em] font-normal text-muted-foreground italic">
              para adultos e idosos em Poços de Caldas
            </span>
          </h1>

          <p className="hero-subtitle mb-8 max-w-lg text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            Reabilitação neurológica, pós-AVC, ortopédica, estimulação cognitiva
            e saúde mental — com planos personalizados para a rotina real de
            cada pessoa.
          </p>

          <div className="hero-ctas flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contato"
              className={cn(buttonVariants({ size: "xl" }), "group")}
            >
              Agende uma conversa inicial
              <ArrowRight
                className="ml-1 transition-transform group-hover:translate-x-1"
                size={20}
                aria-hidden="true"
              />
            </Link>
            <ExternalLink
              href={WA_URL}
              className={buttonVariants({ size: "lg", variant: "whatsapp" })}
            >
              Fale pelo WhatsApp
            </ExternalLink>
          </div>

          <div className="hero-trust mt-10 flex flex-wrap gap-3 text-sm text-muted-foreground">
            {[
              "15 anos de experiência",
              "Atendimento domiciliar",
              "Plano terapêutico individual",
            ].map((item) => (
              <span
                key={item}
                className="glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5"
              >
                <span
                  className="size-1.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-image lg:flex lg:items-center lg:justify-center">
          <ImagePlaceholder
            className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md"
            aspectRatio="4/5"
            alt="Foto de Nathália Catharino Zaccaria"
            label="Foto de Nathália Catharino Zaccaria"
          />
        </div>
      </div>
    </section>
  )
}
