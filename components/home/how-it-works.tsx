"use client"

import { motion } from "motion/react"

const STEPS = [
  {
    number: "01",
    title: "Primeiro contato",
    description:
      "Uma conversa inicial para entender a necessidade, o contexto e os objetivos de cada pessoa.",
  },
  {
    number: "02",
    title: "Avaliação funcional",
    description:
      "Avaliação terapêutica completa com entendimento da rotina e do nível funcional atual.",
  },
  {
    number: "03",
    title: "Definição de objetivos",
    description:
      "Construção de um plano terapêutico personalizado, focado no que é possível e significativo.",
  },
  {
    number: "04",
    title: "Acompanhamento",
    description:
      "Sessões regulares com ajustes contínuos conforme a evolução e as necessidades da pessoa.",
  },
]

export function HowItWorks() {
  return (
    <section
      className="section-gradient px-6 py-20"
      aria-labelledby="how-title"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold tracking-widest text-accent uppercase">
            Como funciona
          </p>
          <h2
            id="how-title"
            className="font-display text-3xl font-medium text-foreground sm:text-4xl"
          >
            Um processo claro, acolhedor e objetivo
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Tudo começa com uma escuta inicial para entender a necessidade, o
            contexto e os objetivos de cada pessoa.
          </p>
        </motion.div>

        <ol className="process-timeline relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STEPS.map(({ number, title, description }, i) => (
            <motion.li
              key={number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
              className="glass-card relative rounded-2xl p-5"
            >
              <span className="relative z-10 inline-flex size-11 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-[var(--shadow-btn)]">
                {number}
              </span>
              <h3 className="relative z-10 mt-4 mb-2 font-semibold text-foreground">
                {title}
              </h3>
              <p className="relative z-10 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
