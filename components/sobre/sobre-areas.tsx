"use client"

import { Reveal } from "@/components/shared/reveal"

const AREAS = [
	"Saúde mental de adultos e idosos.",
	"Reabilitação neurológica.",
	"Reabilitação pós-AVC.",
	"Reabilitação ortopédica.",
	"Estimulação cognitiva.",
	"Atendimento domiciliar.",
	"Apoio a familiares e cuidadores.",
	"Articulação com rede de saúde e equipe multiprofissional.",
]

export function SobreAreas() {
	return (
		<section
			className="section-gradient px-6 py-16"
			aria-labelledby="areas-title"
		>
			<div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-2">
				<Reveal>
					<p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
						Especialidades
					</p>
					<h2
						id="areas-title"
						className="font-display mb-4 text-3xl font-medium text-foreground sm:text-4xl"
					>
						Onde minha atuação é mais forte
					</h2>
					<p className="leading-relaxed text-muted-foreground">
						Essas frentes refletem a prática construída ao longo de anos de
						atendimento clínico, avaliação funcional e acompanhamento de pessoas
						com diferentes níveis de complexidade e necessidade de cuidado.
					</p>
				</Reveal>

				<ul className="space-y-3">
					{AREAS.map((area, i) => (
						<li key={area}>
							<Reveal
								variant="fade-right"
								delay={i * 0.06}
								viewport="tight"
								className="flex items-center gap-3 text-foreground"
							>
								<span
									className="h-px w-6 shrink-0 bg-accent"
									aria-hidden="true"
								/>
								{area}
							</Reveal>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
