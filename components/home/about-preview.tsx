"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight } from "@phosphor-icons/react"
import { buttonVariants } from "@/components/ui/button"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { cn } from "@/lib/utils"

export function AboutPreview() {
  return (
    <section
      className="section-gradient px-6 py-20"
      aria-labelledby="about-preview-title"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <ImagePlaceholder
            className="w-full"
            aspectRatio="3/4"
            label="Foto da Nathália"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="mb-4 text-sm font-semibold tracking-widest text-accent uppercase">
            Sobre a profissional
          </p>
          <h2
            id="about-preview-title"
            className="font-display mb-6 text-3xl font-medium text-foreground sm:text-4xl"
          >
            Nathália Catharino Zaccaria
          </h2>
          <p className="mb-4 text-base leading-relaxed text-muted-foreground">
            Terapeuta ocupacional com atuação voltada para adultos e idosos,
            com experiência em reabilitação neurológica, saúde mental,
            estimulação cognitiva e atendimento domiciliar.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Prática sólida em avaliação funcional, estratégias personalizadas e
            articulação com diferentes frentes de cuidado — sempre atenta à
            realidade de cada pessoa e de sua família.
          </p>
          <div className="mt-8">
            <Link
              href="/sobre"
              className={cn(
                buttonVariants({ size: "lg", variant: "glass" }),
                "group"
              )}
            >
              Conheça mais sobre a profissional
              <ArrowRight
                className="ml-1 transition-transform group-hover:translate-x-1"
                size={18}
                aria-hidden="true"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
