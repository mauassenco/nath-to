"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight } from "@phosphor-icons/react"
import { buttonVariants } from "@/components/ui/button"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { cn } from "@/lib/utils"

export function AboutPreview() {
  return (
    <section className="py-20 px-6 bg-background" aria-labelledby="about-preview-title">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <ImagePlaceholder className="w-full" aspectRatio="3/4" label="Foto da Nathália" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Sobre a profissional</p>
          <h2
            id="about-preview-title"
            className="font-display text-3xl sm:text-4xl font-medium text-foreground mb-6"
          >
            Sobre Nathália Catharino Zaccaria
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nathália Catharino Zaccaria é terapeuta ocupacional com atuação voltada principalmente para adultos e idosos, com experiência em reabilitação neurológica, saúde mental, estimulação cognitiva e atendimento domiciliar.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Ao longo da carreira, desenvolveu prática sólida em avaliação funcional, construção de estratégias personalizadas e articulação com diferentes frentes de cuidado, sempre com atenção à realidade de cada pessoa e de sua família.
          </p>
          <div className="mt-8">
            <Link
              href="/sobre"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }), "group")}
            >
              Conheça mais sobre a profissional
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
