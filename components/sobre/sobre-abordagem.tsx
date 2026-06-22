"use client"

import { motion } from "motion/react"

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" },
    viewport: { once: true, margin: "-80px" },
  } as const
}

export function SobreAbordagem() {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="mx-auto max-w-3xl">
        <motion.div {...fadeUp()}>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            Abordagem
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground mb-6">
            Um olhar centrado na pessoa, não apenas na condição
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Cada atendimento começa pela escuta e pela compreensão da realidade
              de quem chega. A partir disso, é construída uma avaliação funcional
              e um plano terapêutico personalizado, pensado para o que é
              possível, necessário e significativo na vida daquela pessoa.
            </p>
            <p>
              O objetivo não é apenas intervir sobre uma dificuldade, mas apoiar
              o paciente na construção de uma rotina mais funcional, com mais
              autonomia, mais participação e mais qualidade de vida.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
