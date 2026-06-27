"use client"

import { type ElementType } from "react"
import { Reveal } from "@/components/shared/reveal"

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
		<Reveal delay={(index % 2) * 0.1} viewport="tight">
			<article
				className="group glass-card glass-card-interactive rounded-xl p-8"
				aria-labelledby={`service-${index}-title`}
			>
				<div className="mb-5 flex items-start gap-5">
					<span className="card-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/8">
						<Icon size={24} className="text-primary" aria-hidden="true" />
					</span>
					<div>
						<h2
							id={`service-${index}-title`}
							className="font-display mb-1 text-xl leading-snug font-medium text-foreground"
						>
							{title}
						</h2>
						<p className="text-sm font-medium text-accent">{subtitle}</p>
					</div>
				</div>
				{body.map((paragraph, i) => (
					<p
						key={i}
						className="mb-3 leading-relaxed text-muted-foreground last:mb-0"
					>
						{paragraph}
					</p>
				))}
			</article>
		</Reveal>
	)
}
