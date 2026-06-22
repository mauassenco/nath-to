"use client"

import { motion } from "motion/react"
import { SectionCta } from "@/components/shared/section-cta"

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" },
    viewport: { once: true, margin: "-80px" },
  } as const
}

export function SobreCta() {
  return (
    <section
      className="py-20 px-6 bg-primary text-primary-foreground"
      aria-labelledby="values-title"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.div {...fadeUp()}>
          <h2
            id="values-title"
            className="font-display text-3xl sm:text-4xl font-medium mb-6"
          >
            Técnica, escuta e compromisso com o que faz diferença
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed mb-4 text-lg">
            Meu compromisso é oferecer um cuidado ético, acolhedor e
            individualizado, sempre com foco no que realmente importa para o
            paciente e sua família.
          </p>
          <p className="text-primary-foreground/80 leading-relaxed mb-8">
            A Terapia Ocupacional, para mim, é uma forma de transformar
            dificuldades em possibilidades concretas de participação, autonomia e
            bem-estar.
          </p>
          <p className="font-display text-xl sm:text-2xl font-medium text-primary-foreground mb-2">
            Quer conversar sobre o cuidado mais adequado para o seu momento?
          </p>
          <p className="text-primary-foreground/80 leading-relaxed mb-10">
            Se você busca um atendimento terapêutico técnico, humano e
            individualizado, entre em contato para entender como posso ajudar.
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
