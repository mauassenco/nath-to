"use client"

import { motion } from "motion/react"

const STATS = [
  { value: "15+", label: "anos de experiência" },
  { value: "SUS", label: "e atendimento privado" },
  { value: "TO", label: "centrada na pessoa" },
]

export function Authority() {
  return (
    <section className="bg-muted py-16 px-6" aria-labelledby="authority-title">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2
            id="authority-title"
            className="font-display text-3xl sm:text-4xl font-medium text-foreground mb-4"
          >
            Experiência clínica, olhar humano e foco no que realmente importa no dia a dia.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Com 15 anos de atuação em Terapia Ocupacional, Nathália acompanha pessoas em diferentes momentos da vida com uma abordagem centrada na funcionalidade, na autonomia e na participação nas atividades cotidianas.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Sua trajetória inclui experiência em saúde mental, neurologia, envelhecimento saudável, quadros demenciais, atendimento domiciliar e trabalho em equipe multidisciplinar em serviços públicos e privados.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-6">
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm"
            >
              <span className="font-display text-4xl font-semibold text-primary">{value}</span>
              <span className="text-sm text-muted-foreground mt-1">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
