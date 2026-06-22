"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Brain, Bone, Sparkle, Heart, House, Users, ArrowRight } from "@phosphor-icons/react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Icon } from "@phosphor-icons/react"

const SERVICES: { icon: Icon; title: string; description: string }[] = [
  {
    icon: Brain,
    title: "Reabilitação neurológica",
    description: "Cuidado para adultos e idosos com condições neurológicas que impactam rotina, movimento, cognição e independência.",
  },
  {
    icon: Sparkle,
    title: "Reabilitação pós-AVC",
    description: "Apoio terapêutico para reconstrução de rotina, retomada de habilidades e fortalecimento da autonomia após AVC.",
  },
  {
    icon: Bone,
    title: "Reabilitação ortopédica",
    description: "Intervenções voltadas a reduzir limitações funcionais, adaptar tarefas e favorecer o retorno às atividades do dia a dia.",
  },
  {
    icon: Brain,
    title: "Estimulação cognitiva",
    description: "Trabalho para atenção, memória, organização e manutenção da participação em atividades significativas.",
  },
  {
    icon: Heart,
    title: "Saúde mental",
    description: "Acompanhamento terapêutico para reorganizar a rotina, fortalecer a autonomia e apoiar o bem-estar emocional.",
  },
  {
    icon: House,
    title: "Atendimento domiciliar",
    description: "Cuidado no ambiente da própria pessoa, quando isso favorece melhor compreensão da rotina e das necessidades reais.",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 px-6 bg-muted" aria-labelledby="services-title">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Áreas de atendimento</p>
          <h2 id="services-title" className="font-display text-3xl sm:text-4xl font-medium text-foreground max-w-xl">
            Áreas de atendimento
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {SERVICES.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Icon size={28} className="text-primary mb-4" aria-hidden="true" />
              <h3 className="font-medium text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>

        <Link
          href="/servicos"
          className={cn(buttonVariants({ size: "lg", variant: "outline" }), "group")}
        >
          Ver todos os serviços
          <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
