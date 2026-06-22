"use client"

import { motion } from "motion/react"
import { Check } from "@phosphor-icons/react"

const SIGNALS = [
  "Dificuldade para realizar tarefas do dia a dia.",
  "Mudanças após AVC ou outra condição neurológica.",
  "Perda de autonomia ou independência funcional.",
  "Necessidade de adaptar a rotina.",
  "Alterações cognitivas que afetam a vida prática.",
  "Demandas de saúde mental que impactam organização e participação.",
  "Necessidade de atendimento no domicílio.",
]

export function ServicosSignals() {
  return (
    <section
      className="section-gradient px-6 py-16"
      aria-labelledby="signals-title"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2
            id="signals-title"
            className="font-display text-3xl sm:text-4xl font-medium text-foreground mb-4"
          >
            Sinais de que a Terapia Ocupacional pode ajudar
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Se algum desses cenários é familiar, pode ser o momento de entrar em
            contato e conversar sobre o cuidado mais adequado.
          </p>
        </motion.div>

        <ul className="space-y-3">
          {SIGNALS.map((signal, i) => (
            <motion.li
              key={signal}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
              className="flex items-start gap-3"
            >
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Check size={12} className="text-primary" aria-hidden="true" />
              </span>
              <span className="text-foreground">{signal}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
