"use client"

import { Reveal } from "@/components/shared/reveal"

const WHEN_TO_CONTACT = [
	"Adultos e idosos com demandas de reabilitação neurológica.",
	"Pessoas em acompanhamento pós-AVC.",
	"Pessoas com necessidades de reabilitação ortopédica.",
	"Pessoas com alterações cognitivas ou demandas de estimulação cognitiva.",
	"Pessoas que precisam de apoio em saúde mental e rotina.",
	"Famílias e cuidadores que buscam orientação terapêutica.",
]

export function ContatoInfo() {
	return (
		<Reveal>
			<h2 className="font-display mb-8 text-2xl font-medium text-foreground sm:text-3xl">
				Quando entrar em contato
			</h2>

			<div className="glass-card glass-card-interactive rounded-xl p-6">
				<h3 className="mb-3 font-medium text-foreground">
					Quando este contato é indicado
				</h3>
				<ul className="space-y-2 text-sm text-muted-foreground">
					{WHEN_TO_CONTACT.map((item) => (
						<li key={item} className="flex items-start gap-2">
							<span
								className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent"
								aria-hidden="true"
							/>
							{item}
						</li>
					))}
				</ul>
			</div>
		</Reveal>
	)
}
