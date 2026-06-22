"use client"

import { motion } from "motion/react"

export function ServicosIntro() {
  return (
    <section className="section-gradient px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <h2 className="font-display text-2xl sm:text-3xl font-medium text-foreground mb-4">
            O que a Terapia Ocupacional pode transformar
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A Terapia Ocupacional ajuda a pessoa a retomar, manter ou adaptar
            atividades do dia a dia com mais segurança, participação e
            independência. Em vez de tratar apenas um sintoma, o trabalho olha
            para a rotina, o contexto e as necessidades concretas de cada
            paciente.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
