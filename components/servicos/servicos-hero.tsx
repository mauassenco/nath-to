"use client"

import { Reveal } from "@/components/shared/reveal"

export function ServicosHero() {
	return (
		<section
			className="bg-background px-6 pt-32 pb-16"
			aria-labelledby="servicos-title"
		>
			<div className="mx-auto max-w-3xl">
				<Reveal>
					<p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
						Áreas de atuação
					</p>
					<h1
						id="servicos-title"
						className="font-display mb-6 text-4xl font-medium text-balance text-foreground sm:text-5xl lg:text-6xl"
					>
						Serviços de Terapia Ocupacional pensados para fortalecer autonomia,
						funcionalidade e qualidade de vida.
					</h1>
					<p className="text-lg leading-relaxed text-muted-foreground">
						O atendimento é direcionado a adultos e idosos que precisam de um
						cuidado técnico, individualizado e alinhado à rotina real.
					</p>
				</Reveal>
			</div>
		</section>
	)
}
