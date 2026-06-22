"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight } from "@phosphor-icons/react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const WA_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "#"

export function FinalCta() {
  return (
    <section className="py-24 px-6 bg-background" aria-labelledby="final-cta-title">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2
            id="final-cta-title"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance"
          >
            Vamos conversar sobre o cuidado que faz sentido para o seu momento?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 text-pretty">
            Se você procura um atendimento técnico, humano e individualizado para adultos ou idosos, entre em contato e entenda como a Terapia Ocupacional pode ajudar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className={cn(buttonVariants({ size: "lg" }), "group text-base px-8")}
            >
              Agende uma conversa inicial
              <ArrowRight
                className="ml-2 transition-transform group-hover:translate-x-1"
                size={18}
                aria-hidden="true"
              />
            </Link>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }), "text-base px-8")}
            >
              Fale pelo WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
