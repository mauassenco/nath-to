"use client"

import { Reveal } from "@/components/shared/reveal"

const CAREER = [
	"CAPS.",
	"AME Psiquiatria.",
	"Centro de Referência do Idoso.",
	"Atenção Básica do SUS.",
	"Atendimento domiciliar privado.",
	"Trabalho em contextos de reabilitação, saúde mental e envelhecimento.",
]

export function SobreTrajetoria() {
	return (
		<section
			className="bg-background px-6 py-16"
			aria-labelledby="career-title"
		>
			<div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-2">
				<Reveal>
					<p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
						Trajetória
					</p>
					<h2
						id="career-title"
						className="font-display mb-4 text-3xl font-medium text-foreground sm:text-4xl"
					>
						Experiência que fortalece o cuidado
					</h2>
					<p className="leading-relaxed text-muted-foreground">
						A atuação profissional de Nathália inclui serviços como:
					</p>
					<p className="mt-4 leading-relaxed text-muted-foreground">
						Essa vivência amplia a compreensão sobre os desafios reais das
						pessoas e das famílias, fortalecendo uma abordagem prática,
						sensível e bem conectada ao cotidiano.
					</p>
				</Reveal>

				<ul className="space-y-3 pt-2 lg:pt-12">
					{CAREER.map((item, i) => (
						<li key={item}>
							<Reveal
								variant="fade-right"
								delay={i * 0.07}
								viewport="tight"
								className="flex items-center gap-3 text-foreground"
							>
								<span
									className="h-1 w-1 shrink-0 rounded-full bg-primary"
									aria-hidden="true"
								/>
								{item}
							</Reveal>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
