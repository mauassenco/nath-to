"use client"

import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal"

const EDUCATION = [
	{
		degree: "Bacharelado em Terapia Ocupacional",
		institution: "Centro Universitário São Camilo",
	},
	{
		degree: "Especialização em Saúde Mental",
		institution: "CAPS Prof. Luis da Rocha Cerqueira",
	},
	{
		degree: "Especialização em Ciências Médicas",
		institution: "Faculdade Israelita Albert Einstein",
	},
	{
		degree: "Especialização em Oncologia Pediátrica",
		institution: "Universidade Federal de São Paulo",
	},
	{
		degree: "Office Administration – Health Services",
		institution: "Sheridan College",
	},
]

export function SobreFormacao() {
	return (
		<section
			className="section-gradient px-6 py-16"
			aria-labelledby="education-title"
		>
			<div className="mx-auto max-w-3xl">
				<Reveal className="mb-10">
					<p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
						Formação
					</p>
					<h2
						id="education-title"
						className="font-display text-3xl font-medium text-foreground sm:text-4xl"
					>
						Base técnica e atualização contínua
					</h2>
					<p className="mt-4 leading-relaxed text-muted-foreground">
						Nathália é bacharel em Terapia Ocupacional pelo Centro Universitário
						São Camilo e possui especializações em Saúde Mental, Ciências Médicas
						e Oncologia Pediátrica.
					</p>
					<p className="mt-2 leading-relaxed text-muted-foreground">
						Também possui formação complementar em Office Administration – Health
						Services, o que reforça sua visão integrada sobre cuidado,
						organização e experiência em serviços de saúde.
					</p>
				</Reveal>

				<RevealGroup className="space-y-4" stagger={0.08}>
					{EDUCATION.map(({ degree, institution }) => (
						<RevealItem
							key={degree}
							className="border-l-2 border-accent py-1 pl-6"
						>
							<p className="font-medium text-foreground">{degree}</p>
							<p className="text-sm text-muted-foreground">{institution}</p>
						</RevealItem>
					))}
				</RevealGroup>
			</div>
		</section>
	)
}
