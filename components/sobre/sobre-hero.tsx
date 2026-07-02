"use client"

import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { Reveal } from "@/components/shared/reveal"
import { CAREER_COPY } from "@/lib/site"

export function SobreHero() {
	return (
		<section
			className="bg-background px-6 pt-32 pb-16"
			aria-labelledby="sobre-title"
		>
			<div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
				<Reveal>
					<p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
						Sobre a profissional
					</p>
					<h1
						id="sobre-title"
						className="font-display mb-6 text-4xl font-medium text-balance text-foreground sm:text-5xl lg:text-6xl"
					>
						Conheça a profissional por trás do cuidado
					</h1>
					<p className="text-lg leading-relaxed text-muted-foreground">
						Nathália Catharino Zaccaria é terapeuta ocupacional{" "}
						{CAREER_COPY.sinceInline}, dedicada ao cuidado de adultos e idosos
						com foco em autonomia, funcionalidade, saúde mental, reabilitação
						neurológica, pós-AVC e estimulação cognitiva.
					</p>
				</Reveal>

				<Reveal delay={0.15} variant="fade-left">
					<ImagePlaceholder
						className="w-full"
						aspectRatio="4/5"
						alt="Foto de Nathália Catharino Zaccaria"
						label="Foto de Nathália Catharino Zaccaria"
					/>
				</Reveal>
			</div>
		</section>
	)
}
