"use client"

import { motion } from "motion/react"

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" },
    viewport: { once: true, margin: "-80px" },
  } as const
}

export function SobreQuem() {
  return (
    <section className="py-16 px-6 bg-muted">
      <div className="mx-auto max-w-3xl">
        <motion.div {...fadeUp()}>
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground mb-6">
            Quem é Nathália
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Nathália construiu sua trajetória na Terapia Ocupacional atuando
              com pessoas que precisam de apoio para reorganizar a rotina,
              recuperar participação e viver com mais segurança e independência.
            </p>
            <p>
              Sua experiência reúne atendimento em saúde mental, neurologia,
              envelhecimento saudável, quadros demenciais, reabilitação
              ortopédica, cuidado domiciliar e atuação em equipe multidisciplinar
              em contextos públicos e privados.
            </p>
            <p>
              Ao longo da carreira, também desenvolveu atuação em ensino e
              formação de profissionais da Atenção Básica do SUS, contribuindo
              com temas como avaliação geriátrica, promoção de saúde e cuidado
              integral à pessoa idosa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
