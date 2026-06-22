"use client"

import { motion } from "motion/react"
import { ContatoInfo } from "@/components/contato/contato-info"
import { ContactForm } from "@/components/contato/contact-form"

export function ContatoMain() {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16">
        <ContatoInfo />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
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
