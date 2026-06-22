"use client"

import { motion } from "motion/react"

const CAREER = [
  "CAPS.",
  "AME Psiquiatria.",
  "Centro de Referência do Idoso.",
  "Atenção Básica do SUS.",
  "Atendimento domiciliar privado.",
  "Trabalho em contextos de reabilitação, saúde mental e envelhecimento.",
]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" },
    viewport: { once: true, margin: "-80px" },
  } as const
}

export function SobreTrajetoria() {
  return (
    <section
      className="py-16 px-6 bg-background"
      aria-labelledby="career-title"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div {...fadeUp()}>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            Trajetória
          </p>
          <h2
            id="career-title"
            className="font-display text-3xl sm:text-4xl font-medium text-foreground mb-4"
          >
            Experiência que fortalece o cuidado
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A atuação profissional de Nathália inclui serviços como:
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Essa vivência amplia a compreensão sobre os desafios reais das
            pessoas e das famílias, fortalecendo uma abordagem prática,
            sensível e bem conectada ao cotidiano.
          </p>
        </motion.div>

        <ul className="space-y-3 pt-2 lg:pt-12">
          {CAREER.map((item, i) => (
            <motion.li
              key={item}
              {...fadeUp(i * 0.07)}
              className="flex items-center gap-3 text-foreground"
            >
              <span
                className="h-1 w-1 rounded-full bg-primary shrink-0"
                aria-hidden="true"
              />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
