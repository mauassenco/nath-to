"use client"

import { motion } from "motion/react"
import { WhatsappLogo } from "@phosphor-icons/react"
import { ExternalLink } from "@/components/shared/external-link"

const WA_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "#"

export function ContatoCta() {
  return (
    <section className="py-16 px-6 bg-primary text-primary-foreground text-center">
      <div className="mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="font-display text-2xl sm:text-3xl font-medium mb-4">
            Atendimento humano, claro e individualizado
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed mb-8">
            Cada contato é o começo de uma escuta cuidadosa, pensada para
            entender a realidade da pessoa e indicar o melhor caminho de
            cuidado.
          </p>
          <ExternalLink
            href={WA_URL}
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-medium px-8 py-3 rounded-full hover:bg-primary-foreground/90 transition-colors"
          >
            <WhatsappLogo size={20} aria-hidden="true" />
            Fale pelo WhatsApp
          </ExternalLink>
        </motion.div>
      </div>
    </section>
  )
}
