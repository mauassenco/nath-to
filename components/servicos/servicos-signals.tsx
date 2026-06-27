"use client"

import { Check } from "@phosphor-icons/react"
import { Reveal } from "@/components/shared/reveal"

const SIGNALS = [
	"Dificuldade para realizar tarefas do dia a dia.",
	"Mudanças após AVC ou outra condição neurológica.",
	"Perda de autonomia ou independência funcional.",
	"Necessidade de adaptar a rotina.",
	"Alterações cognitivas que afetam a vida prática.",
	"Demandas de saúde mental que impactam organização e participação.",
	"Necessidade de atendimento no domicílio.",
]

export function ServicosSignals() {
	return (
		<section
			className="section-gradient px-6 py-16"
			aria-labelledby="signals-title"
		>
			<div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-2">
				<Reveal>
					<h2
						id="signals-title"
						className="font-display mb-4 text-3xl font-medium text-foreground sm:text-4xl"
					>
						Sinais de que a Terapia Ocupacional pode ajudar
					</h2>
					<p className="leading-relaxed text-muted-foreground">
						Se algum desses cenários é familiar, pode ser o momento de entrar em
						contato e conversar sobre o cuidado mais adequado.
					</p>
				</Reveal>

				<ul className="space-y-3">
					{SIGNALS.map((signal, i) => (
						<li key={signal}>
							<Reveal
								variant="fade-right"
								delay={i * 0.07}
								viewport="tight"
								className="flex items-start gap-3"
							>
								<span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
									<Check size={12} className="text-primary" aria-hidden="true" />
								</span>
								<span className="text-foreground">{signal}</span>
							</Reveal>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
