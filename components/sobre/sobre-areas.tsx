"use client"

import { motion } from "motion/react"

const AREAS = [
  "Saúde mental de adultos e idosos.",
  "Reabilitação neurológica.",
  "Reabilitação pós-AVC.",
  "Reabilitação ortopédica.",
  "Estimulação cognitiva.",
  "Atendimento domiciliar.",
  "Apoio a familiares e cuidadores.",
  "Articulação com rede de saúde e equipe multiprofissional.",
]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" },
    viewport: { once: true, margin: "-80px" },
  } as const
}

export function SobreAreas() {
  return (
    <section
      className="section-gradient px-6 py-16"
      aria-labelledby="areas-title"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div {...fadeUp()}>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            Especialidades
          </p>
          <h2
            id="areas-title"
            className="font-display text-3xl sm:text-4xl font-medium text-foreground mb-4"
          >
            Onde minha atuação é mais forte
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Essas frentes refletem a prática construída ao longo de anos de
            atendimento clínico, avaliação funcional e acompanhamento de pessoas
            com diferentes níveis de complexidade e necessidade de cuidado.
          </p>
        </motion.div>

        <ul className="space-y-3">
          {AREAS.map((area, i) => (
            <motion.li
              key={area}
              {...fadeUp(i * 0.06)}
              className="flex items-center gap-3 text-foreground"
            >
              <span
                className="h-px w-6 bg-accent shrink-0"
                aria-hidden="true"
              />
              {area}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
