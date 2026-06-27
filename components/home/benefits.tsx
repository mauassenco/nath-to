"use client"

import { Check } from "@phosphor-icons/react"
import { Reveal } from "@/components/shared/reveal"

const BENEFITS = [
	"Mais autonomia nas atividades do dia a dia.",
	"Mais segurança para executar tarefas essenciais.",
	"Mais clareza sobre como adaptar a rotina.",
	"Mais estímulo para funções cognitivas importantes.",
	"Mais apoio para a família e para os cuidadores.",
	"Mais qualidade de vida em um cuidado individualizado.",
]

export function Benefits() {
	return (
		<section
			className="bg-background px-6 py-20"
			aria-labelledby="benefits-title"
		>
			<div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
				<Reveal>
					<p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
						Resultados concretos
					</p>
					<h2
						id="benefits-title"
						className="font-display mb-6 text-3xl font-medium text-foreground sm:text-4xl"
					>
						O que o acompanhamento pode transformar
					</h2>
					<p className="leading-relaxed text-muted-foreground">
						A Terapia Ocupacional atua diretamente na funcionalidade e na
						autonomia, com intervenções pensadas para o que é possível e
						significativo na vida de cada pessoa.
					</p>
				</Reveal>

				<ul className="flex flex-col gap-4">
					{BENEFITS.map((benefit, i) => (
						<li key={benefit}>
							<Reveal
								variant="fade-right"
								delay={i * 0.08}
								viewport="tight"
								className="flex items-start gap-3"
							>
								<span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
									<Check size={14} className="text-primary" aria-hidden="true" />
								</span>
								<span className="text-foreground">{benefit}</span>
							</Reveal>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
