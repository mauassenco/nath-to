"use client"

import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal"
import { CAREER_COPY } from "@/lib/site"

const ITEMS = [
	CAREER_COPY.decades,
	"Atuação consistente com adultos e idosos.",
	"Vivência em saúde mental, neurologia, reabilitação e envelhecimento.",
	"Atendimento clínico e domiciliar.",
	"Abordagem individualizada, com escuta e plano de cuidado realista.",
	"Experiência em articulação com rede de atenção e equipe multiprofissional.",
]

export function Differentials() {
	return (
		<section
			className="relative overflow-hidden bg-primary px-6 py-20 text-primary-foreground"
			aria-labelledby="differentials-title"
		>
			<div
				className="pointer-events-none absolute inset-0 opacity-20"
				style={{ background: "var(--gradient-botanical-soft)" }}
				aria-hidden="true"
			/>
			<div className="relative mx-auto max-w-6xl">
				<Reveal className="mb-10">
					<p className="mb-4 text-sm font-medium tracking-widest text-primary-foreground/60 uppercase">
						Diferenciais
					</p>
					<h2
						id="differentials-title"
						className="font-display max-w-xl text-3xl font-medium sm:text-4xl"
					>
						O que torna o atendimento diferente
					</h2>
				</Reveal>

				<RevealGroup
					className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
					stagger={0.07}
					viewport="tight"
				>
					{ITEMS.map((item) => (
						<RevealItem
							key={item}
							variant="scale"
							className="glass-dark rounded-lg p-5"
						>
							<p className="leading-relaxed text-primary-foreground/90">
								{item}
							</p>
						</RevealItem>
					))}
				</RevealGroup>
			</div>
		</section>
	)
}
