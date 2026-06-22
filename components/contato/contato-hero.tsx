"use client"

import { motion } from "motion/react"

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" },
    viewport: { once: true },
  } as const
}

export function ContatoHero() {
  return (
    <section className="pt-32 pb-16 px-6 bg-background" aria-labelledby="contato-title">
      <div className="mx-auto max-w-3xl">
        <motion.div {...fadeUp()}>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            Fale com a Nathália
          </p>
          <h1
            id="contato-title"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground text-balance mb-6"
          >
            Vamos conversar sobre o cuidado que faz sentido para o seu momento
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Se você procura um atendimento terapêutico técnico, humano e
            individualizado para adultos ou idosos, entre em contato para
            entender como a Terapia Ocupacional pode ajudar.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
