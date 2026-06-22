"use client"

import { motion } from "motion/react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQS = [
  {
    value: "faq-0",
    q: "Para quem o atendimento é indicado?",
    a: "Principalmente para adultos e idosos que precisam de apoio em reabilitação neurológica, pós-AVC, reabilitação ortopédica, estimulação cognitiva, saúde mental ou adaptação da rotina.",
  },
  {
    value: "faq-1",
    q: "O atendimento pode ser domiciliar?",
    a: "Sim. Quando a mobilidade, a condição clínica ou o contexto da pessoa favorecem esse formato, o atendimento domiciliar pode ser a melhor opção.",
  },
  {
    value: "faq-2",
    q: "Como a Terapia Ocupacional ajuda na prática?",
    a: "Ela ajuda a pessoa a ampliar autonomia, organizar a rotina, manter participação nas atividades e encontrar estratégias mais funcionais para viver melhor.",
  },
  {
    value: "faq-3",
    q: "O atendimento inclui família e cuidadores?",
    a: "Quando necessário, sim. A orientação para familiares e cuidadores faz parte de um cuidado mais completo e efetivo.",
  },
]

export function FaqSection() {
  return (
    <section className="py-20 px-6 bg-muted" aria-labelledby="faq-title">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-10"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Dúvidas frequentes</p>
          <h2 id="faq-title" className="font-display text-3xl sm:text-4xl font-medium text-foreground">
            Perguntas frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <Accordion className="w-full">
            {FAQS.map(({ value, q, a }) => (
              <AccordionItem key={value} value={value}>
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
