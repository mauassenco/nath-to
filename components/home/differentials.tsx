"use client"

import { motion } from "motion/react"

const ITEMS = [
  "15 anos de experiência clínica em Terapia Ocupacional.",
  "Atuação consistente com adultos e idosos.",
  "Vivência em saúde mental, neurologia, reabilitação e envelhecimento.",
  "Atendimento clínico e domiciliar.",
  "Abordagem individualizada, com escuta e plano de cuidado realista.",
  "Experiência em articulação com rede de atenção e equipe multiprofissional.",
]

export function Differentials() {
  return (
    <section
      className="relative overflow-hidden bg-primary py-20 px-6 text-primary-foreground"
      aria-labelledby="differentials-title"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{ background: "var(--gradient-botanical-soft)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-10"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary-foreground/60 mb-4">Diferenciais</p>
          <h2
            id="differentials-title"
            className="font-display text-3xl sm:text-4xl font-medium max-w-xl"
          >
            O que torna o atendimento diferente
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
              className="glass-dark rounded-lg p-5"
            >
              <p className="text-primary-foreground/90 leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
