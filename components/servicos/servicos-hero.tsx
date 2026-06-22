"use client"

import { motion } from "motion/react"

export function ServicosHero() {
  return (
    <section
      className="pt-32 pb-16 px-6 bg-background"
      aria-labelledby="servicos-title"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            Áreas de atuação
          </p>
          <h1
            id="servicos-title"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground text-balance mb-6"
          >
            Serviços de Terapia Ocupacional pensados para fortalecer autonomia,
            funcionalidade e qualidade de vida.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O atendimento é direcionado a adultos e idosos que precisam de um
            cuidado técnico, individualizado e alinhado à rotina real.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
