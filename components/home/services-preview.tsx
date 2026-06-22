"use client"

import Link from "next/link"
import { motion } from "motion/react"
import {
  Brain,
  Bone,
  Heart,
  House,
  Lightning,
  PersonSimpleWalk,
  ArrowRight,
} from "@phosphor-icons/react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Icon } from "@phosphor-icons/react"

const SERVICES: { icon: Icon; title: string; description: string }[] = [
  {
    icon: Brain,
    title: "Reabilitação neurológica",
    description:
      "Cuidado para adultos e idosos com condições neurológicas que impactam rotina, movimento, cognição e independência.",
  },
  {
    icon: PersonSimpleWalk,
    title: "Reabilitação pós-AVC",
    description:
      "Apoio terapêutico para reconstrução de rotina, retomada de habilidades e fortalecimento da autonomia após AVC.",
  },
  {
    icon: Bone,
    title: "Reabilitação ortopédica",
    description:
      "Intervenções voltadas a reduzir limitações funcionais, adaptar tarefas e favorecer o retorno às atividades do dia a dia.",
  },
  {
    icon: Lightning,
    title: "Estimulação cognitiva",
    description:
      "Trabalho para atenção, memória, organização e manutenção da participação em atividades significativas.",
  },
  {
    icon: Heart,
    title: "Saúde mental",
    description:
      "Acompanhamento terapêutico para reorganizar a rotina, fortalecer a autonomia e apoiar o bem-estar emocional.",
  },
  {
    icon: House,
    title: "Atendimento domiciliar",
    description:
      "Cuidado no ambiente da própria pessoa, quando isso favorece melhor compreensão da rotina e das necessidades reais.",
  },
]

export function ServicesPreview() {
  return (
    <section
      className="section-gradient px-6 py-20"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold tracking-widest text-accent uppercase">
            Linhas de cuidado
          </p>
          <h2
            id="services-title"
            className="font-display text-3xl font-medium text-foreground sm:text-4xl"
          >
            Para quem e para quê
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Cada linha de atendimento parte da rotina real da pessoa — com
            objetivos claros e plano terapêutico individualizado.
          </p>
        </motion.div>

        <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
              className="glass-card rounded-2xl p-6"
            >
              <span className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-primary/10">
                <Icon size={24} className="text-primary" aria-hidden="true" />
              </span>
              <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </motion.div>
          ))}
        </div>

        <Link
          href="/servicos"
          className={cn(
            buttonVariants({ size: "lg", variant: "glass" }),
            "group"
          )}
        >
          Ver todos os serviços
          <ArrowRight
            className="ml-1 transition-transform group-hover:translate-x-1"
            size={18}
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  )
}
