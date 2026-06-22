"use client"

import { motion } from "motion/react"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" },
    viewport: { once: true, margin: "-80px" },
  } as const
}

export function SobreHero() {
  return (
    <section
      className="pt-32 pb-16 px-6 bg-background"
      aria-labelledby="sobre-title"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeUp()}>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            Sobre a profissional
          </p>
          <h1
            id="sobre-title"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground text-balance mb-6"
          >
            Conheça a profissional por trás do cuidado
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nathália Catharino Zaccaria é terapeuta ocupacional com 15 anos de
            experiência, dedicada ao cuidado de adultos e idosos com foco em
            autonomia, funcionalidade, saúde mental, reabilitação neurológica,
            pós-AVC e estimulação cognitiva.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.15)}>
          <ImagePlaceholder
            className="w-full"
            aspectRatio="4/5"
            alt="Foto de Nathália Catharino Zaccaria"
            label="Foto de Nathália Catharino Zaccaria"
          />
        </motion.div>
      </div>
    </section>
  )
}
