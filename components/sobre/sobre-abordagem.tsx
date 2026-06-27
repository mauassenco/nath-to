"use client"

import { Reveal } from "@/components/shared/reveal"

export function SobreAbordagem() {
	return (
		<section className="bg-background px-6 py-16">
			<div className="mx-auto max-w-3xl">
				<Reveal>
					<p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
						Abordagem
					</p>
					<h2 className="font-display mb-6 text-3xl font-medium text-foreground sm:text-4xl">
						Um olhar centrado na pessoa, não apenas na condição
					</h2>
					<div className="space-y-4 leading-relaxed text-muted-foreground">
						<p>
							Cada atendimento começa pela escuta e pela compreensão da realidade
							de quem chega. A partir disso, é construída uma avaliação funcional
							e um plano terapêutico personalizado, pensado para o que é
							possível, necessário e significativo na vida daquela pessoa.
						</p>
						<p>
							O objetivo não é apenas intervir sobre uma dificuldade, mas apoiar
							o paciente na construção de uma rotina mais funcional, com mais
							autonomia, mais participação e mais qualidade de vida.
						</p>
					</div>
				</Reveal>
			</div>
		</section>
	)
}
