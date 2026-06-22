"use client"

import { motion } from "motion/react"

export function ContatoIntro() {
  return (
    <section className="py-8 px-6 bg-muted">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <h2 className="font-display text-2xl font-medium text-foreground mb-3">
            O primeiro passo é uma conversa
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            O contato inicial serve para entender a necessidade, esclarecer
            dúvidas e indicar o melhor caminho de atendimento. A partir dessa
            escuta, é possível alinhar se o acompanhamento será presencial ou
            domiciliar, de acordo com a realidade de cada pessoa.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
