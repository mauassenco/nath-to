"use client"

import { motion } from "motion/react"
import { Check } from "@phosphor-icons/react"

const BENEFITS = [
  "Mais autonomia nas atividades do dia a dia.",
  "Mais segurança para executar tarefas essenciais.",
  "Mais clareza sobre como adaptar a rotina.",
  "Mais estímulo para funções cognitivas importantes.",
  "Mais apoio para a família e para os cuidadores.",
  "Mais qualidade de vida em um cuidado individualizado.",
]

export function Benefits() {
  return (
    <section className="py-20 px-6 bg-background" aria-labelledby="benefits-title">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Resultados concretos</p>
          <h2
            id="benefits-title"
            className="font-display text-3xl sm:text-4xl font-medium text-foreground mb-6"
          >
            O que o acompanhamento pode transformar
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A Terapia Ocupacional atua diretamente na funcionalidade e na autonomia, com intervenções pensadas para o que é possível e significativo na vida de cada pessoa.
          </p>
        </motion.div>

        <ul className="flex flex-col gap-4">
          {BENEFITS.map((benefit, i) => (
            <motion.li
              key={benefit}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
              className="flex items-start gap-3"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Check size={14} className="text-primary" aria-hidden="true" />
              </span>
              <span className="text-foreground">{benefit}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
