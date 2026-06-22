"use client"

import { motion } from "motion/react"

const STEPS = [
  {
    number: "01",
    title: "Primeiro contato",
    description: "Uma conversa inicial para entender a necessidade, o contexto e os objetivos de cada pessoa.",
  },
  {
    number: "02",
    title: "Avaliação funcional",
    description: "Avaliação terapêutica completa com entendimento da rotina e do nível funcional atual.",
  },
  {
    number: "03",
    title: "Definição de objetivos",
    description: "Construção de um plano terapêutico personalizado, focado no que é possível e significativo.",
  },
  {
    number: "04",
    title: "Acompanhamento",
    description: "Sessões regulares com ajustes contínuos conforme a evolução e as necessidades da pessoa.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-background" aria-labelledby="how-title">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Como funciona</p>
          <h2 id="how-title" className="font-display text-3xl sm:text-4xl font-medium text-foreground max-w-xl">
            Um processo claro, acolhedor e objetivo
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            Tudo começa com uma escuta inicial para entender a necessidade, o contexto e os objetivos de cada pessoa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map(({ number, title, description }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
              className="relative"
            >
              <span className="font-display text-6xl font-semibold text-border leading-none select-none">
                {number}
              </span>
              <h3 className="font-medium text-foreground mt-2 mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
