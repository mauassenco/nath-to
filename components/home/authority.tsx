"use client"

import { Check } from "@phosphor-icons/react"
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal"

const STATS = [
	{ value: "15+", label: "anos de experiência clínica" },
	{ value: "Adultos", label: "e idosos como foco" },
	{ value: "Clínico", label: "e atendimento domiciliar" },
]

const HIGHLIGHTS = [
	"Mais autonomia nas atividades do dia a dia",
	"Mais segurança para tarefas essenciais",
	"Apoio para família e cuidadores",
	"Plano terapêutico individualizado",
]

export function Authority() {
	return (
		<section
			className="section-gradient px-6 py-20"
			aria-labelledby="authority-title"
		>
			<div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-14 lg:grid-cols-2">
				<Reveal>
					<p className="mb-4 text-sm font-semibold tracking-widest text-accent uppercase">
						Por que confiar
					</p>
					<h2
						id="authority-title"
						className="font-display mb-5 text-3xl font-medium text-foreground sm:text-4xl"
					>
						Experiência clínica com olhar humano
					</h2>
					<p className="text-base leading-relaxed text-muted-foreground">
						Com 15 anos de atuação em Terapia Ocupacional, Nathália acompanha
						pessoas em diferentes momentos da vida com foco na funcionalidade,
						autonomia e participação nas atividades cotidianas.
					</p>
					<p className="mt-4 text-base leading-relaxed text-muted-foreground">
						Trajetória em saúde mental, neurologia, envelhecimento, quadros
						demenciais, atendimento domiciliar e trabalho multidisciplinar em
						serviços públicos e privados.
					</p>

					<ul className="mt-8 flex flex-col gap-3">
						{HIGHLIGHTS.map((item) => (
							<li key={item} className="flex items-start gap-3">
								<span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/12">
									<Check size={14} className="text-primary" aria-hidden="true" />
								</span>
								<span className="text-foreground">{item}</span>
							</li>
						))}
					</ul>
				</Reveal>

				<RevealGroup
					className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-5"
					stagger={0.1}
				>
					{STATS.map(({ value, label }) => (
						<RevealItem
							key={value}
							className="glass-card glass-card-interactive rounded-2xl p-6"
						>
							<span className="font-display text-3xl font-semibold text-primary sm:text-4xl">
								{value}
							</span>
							<span className="mt-1 block text-sm leading-snug text-muted-foreground">
								{label}
							</span>
						</RevealItem>
					))}
				</RevealGroup>
			</div>
		</section>
	)
}
