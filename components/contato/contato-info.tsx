"use client"

import { motion } from "motion/react"
import {
  WhatsappLogo,
  Envelope,
  MapPin,
} from "@phosphor-icons/react"
import { ExternalLink } from "@/components/shared/external-link"

const WA_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "#"

const WHEN_TO_CONTACT = [
  "Adultos e idosos com demandas de reabilitação neurológica.",
  "Pessoas em acompanhamento pós-AVC.",
  "Pessoas com necessidades de reabilitação ortopédica.",
  "Pessoas com alterações cognitivas ou demandas de estimulação cognitiva.",
  "Pessoas que precisam de apoio em saúde mental e rotina.",
  "Famílias e cuidadores que buscam orientação terapêutica.",
]

export function ContatoInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <h2 className="font-display text-2xl sm:text-3xl font-medium text-foreground mb-8">
        Fale com a Nathália
      </h2>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 shrink-0"
            aria-hidden="true"
          >
            <WhatsappLogo size={20} className="text-primary" />
          </span>
          <div>
            <p className="font-medium text-foreground mb-1">WhatsApp</p>
            <ExternalLink
              href={WA_URL}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              (11) 99431-0592
            </ExternalLink>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 shrink-0"
            aria-hidden="true"
          >
            <Envelope size={20} className="text-primary" />
          </span>
          <div>
            <p className="font-medium text-foreground mb-1">E-mail</p>
            <a
              href="mailto:nat_zacc@hotmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              nat_zacc@hotmail.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 shrink-0"
            aria-hidden="true"
          >
            <MapPin size={20} className="text-primary" />
          </span>
          <div>
            <p className="font-medium text-foreground mb-1">
              Local de atendimento
            </p>
            <p className="text-muted-foreground">Poços de Caldas, MG</p>
            <p className="text-sm text-muted-foreground mt-1">
              Atendimento presencial e domiciliar, conforme avaliação da
              necessidade.
            </p>
          </div>
        </div>
      </div>

      <div className="glass-card mt-10 rounded-xl p-6">
        <h3 className="font-medium text-foreground mb-3">
          Quando este contato é indicado
        </h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {WHEN_TO_CONTACT.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span
                className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
