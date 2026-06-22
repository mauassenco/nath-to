"use client"

import { motion } from "motion/react"

const EDUCATION = [
  {
    degree: "Bacharelado em Terapia Ocupacional",
    institution: "Centro Universitário São Camilo",
  },
  {
    degree: "Especialização em Saúde Mental",
    institution: "CAPS Prof. Luis da Rocha Cerqueira",
  },
  {
    degree: "Especialização em Ciências Médicas",
    institution: "Faculdade Israelita Albert Einstein",
  },
  {
    degree: "Especialização em Oncologia Pediátrica",
    institution: "Universidade Federal de São Paulo",
  },
  {
    degree: "Office Administration – Health Services",
    institution: "Sheridan College",
  },
]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" },
    viewport: { once: true, margin: "-80px" },
  } as const
}

export function SobreFormacao() {
  return (
    <section
      className="py-16 px-6 bg-muted"
      aria-labelledby="education-title"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div {...fadeUp()} className="mb-10">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            Formação
          </p>
          <h2
            id="education-title"
            className="font-display text-3xl sm:text-4xl font-medium text-foreground"
          >
            Base técnica e atualização contínua
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Nathália é bacharel em Terapia Ocupacional pelo Centro Universitário
            São Camilo e possui especializações em Saúde Mental, Ciências Médicas
            e Oncologia Pediátrica.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-2">
            Também possui formação complementar em Office Administration – Health
            Services, o que reforça sua visão integrada sobre cuidado,
            organização e experiência em serviços de saúde.
          </p>
        </motion.div>

        <div className="space-y-4">
          {EDUCATION.map(({ degree, institution }, i) => (
            <motion.div
              key={degree}
              {...fadeUp(i * 0.08)}
              className="border-l-2 border-accent pl-6 py-1"
            >
              <p className="font-medium text-foreground">{degree}</p>
              <p className="text-sm text-muted-foreground">{institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
