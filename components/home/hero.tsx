"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Link from "next/link"
import { ArrowRight } from "@phosphor-icons/react"
import { buttonVariants } from "@/components/ui/button"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"

const WA_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/5511994310592"

export function Hero() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const targets = [".hero-eyebrow", ".hero-title", ".hero-subtitle", ".hero-ctas", ".hero-trust", ".hero-image"]
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
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
        .from(".hero-image", { opacity: 0, scale: 1.03, duration: 0.9 }, "-=0.6")
    },
    { scope: container }
  )

  return (
    <section
      ref={container}
      className="relative min-h-[100dvh] flex items-center bg-background overflow-hidden pt-16"
      aria-labelledby="hero-title"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: "256px 256px",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 py-16 lg:py-24">
        {/* Text column */}
        <div className="flex flex-col justify-center">
          <p className="hero-eyebrow text-sm font-medium tracking-widest uppercase text-accent mb-5">
            Terapeuta Ocupacional · Poços de Caldas, MG
          </p>

          <h1
            id="hero-title"
            className="hero-title font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-balance text-foreground mb-6"
          >
            Terapia ocupacional especializada para adultos e idosos que querem viver com mais autonomia, segurança e qualidade de vida.
          </h1>

          <p className="hero-subtitle text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty mb-8 max-w-lg">
            Atendimento clínico e domiciliar em reabilitação neurológica, pós-AVC, reabilitação ortopédica, estimulação cognitiva e saúde mental, com planos de cuidado personalizados para as necessidades reais da rotina.
          </p>

          <div className="hero-ctas flex flex-col sm:flex-row gap-3">
            <Link
              href="/contato"
              className={buttonVariants({ size: "lg" }) + " group"}
            >
              Agende uma conversa inicial
              <ArrowRight
                className="ml-2 transition-transform group-hover:translate-x-1"
                size={18}
                aria-hidden="true"
              />
            </Link>
            <a
              href={WA_URL}
              className={buttonVariants({ size: "lg", variant: "outline" })}
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale pelo WhatsApp
            </a>
          </div>

          <div className="hero-trust mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <span>✦ 15 anos de experiência</span>
            <span>✦ Atendimento domiciliar</span>
            <span>✦ Plano terapêutico individual</span>
          </div>
        </div>

        {/* Image column */}
        <div className="hero-image hidden lg:flex items-center justify-center">
          <ImagePlaceholder
            className="w-full max-w-md"
            aspectRatio="4/5"
            alt="Foto da profissional"
          />
        </div>
      </div>
    </section>
  )
}
