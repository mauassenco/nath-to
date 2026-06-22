"use client"

import { type ElementType } from "react"
import { motion } from "motion/react"

interface ServiceBlockProps {
  icon: ElementType
  title: string
  subtitle: string
  body: string[]
  index: number
}

export function ServiceBlock({
  icon: Icon,
  title,
  subtitle,
  body,
  index,
}: ServiceBlockProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-60px" }}
      className="group glass-card rounded-xl p-8 transition-shadow"
      aria-labelledby={`service-${index}-title`}
    >
      <div className="flex items-start gap-5 mb-5">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/8 group-hover:bg-primary/12 transition-colors">
          <Icon size={24} className="text-primary" aria-hidden="true" />
        </span>
        <div>
          <h2
            id={`service-${index}-title`}
            className="font-display text-xl font-medium text-foreground leading-snug mb-1"
          >
            {title}
          </h2>
          <p className="text-sm font-medium text-accent">{subtitle}</p>
        </div>
      </div>
      {body.map((paragraph, i) => (
        <p
          key={i}
          className="text-muted-foreground leading-relaxed mb-3 last:mb-0"
        >
          {paragraph}
        </p>
      ))}
    </motion.article>
  )
}
