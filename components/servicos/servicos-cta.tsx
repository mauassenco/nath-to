"use client"

import { motion } from "motion/react"
import { SectionCta } from "@/components/shared/section-cta"

export function ServicosCta() {
  return (
    <section className="py-20 px-6 bg-primary text-primary-foreground text-center">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-medium mb-6">
            Quer entender qual serviço faz mais sentido para o seu momento?
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed mb-8">
            Se você procura um atendimento técnico, humano e individualizado
            para adultos ou idosos, entre em contato para conversar sobre a
            melhor forma de cuidado.
          </p>
          <SectionCta
            primary={{ label: "Agende uma conversa inicial", href: "/contato" }}
            secondary={{ label: "Fale pelo WhatsApp", href: "#", external: true }}
          />
        </motion.div>
      </div>
    </section>
  )
}
