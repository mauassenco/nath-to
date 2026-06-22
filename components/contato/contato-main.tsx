"use client"

import { motion } from "motion/react"
import { ContatoInfo } from "@/components/contato/contato-info"
import { ContactForm } from "@/components/contato/contact-form"

export function ContatoMain() {
  return (
    <section
      id="contato-formulario"
      className="section-gradient scroll-mt-28 px-6 py-16"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
        <ContatoInfo />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="glass-card rounded-2xl p-8"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-medium text-foreground mb-8">
            Envie sua mensagem
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Conte brevemente sua necessidade e, se possível, explique o tipo de
            apoio que está buscando. Isso ajuda a tornar o primeiro contato
            mais objetivo, acolhedor e assertivo.
          </p>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}
