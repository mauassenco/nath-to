"use client"

import { motion } from "motion/react"

export function ContatoIntro() {
  return (
    <section className="section-gradient border-t border-border/40 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
          className="glass-card mx-auto max-w-3xl rounded-2xl px-6 py-8 text-center sm:px-10"
        >
          <h2 className="font-display mb-3 text-2xl font-medium text-foreground">
            O primeiro passo é uma conversa
          </h2>
          <p className="text-muted-foreground leading-relaxed text-pretty">
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
