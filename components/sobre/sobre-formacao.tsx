"use client"

import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal"

interface EducationEntry {
	degree: string
	institution: string
	period: string
	note?: string
}

const CORE_EDUCATION: EducationEntry[] = [
	{
		degree: "Bacharelado em Terapia Ocupacional",
		institution: "Centro Universitário São Camilo",
		period: "2007–2010",
	},
	{
		degree: "Especialização em Saúde Mental",
		institution: "CAPS Prof. Luis da Rocha Cerqueira",
		period: "2012–2013",
		note: "Base formal para a atuação em saúde mental de adultos e idosos.",
	},
	{
		degree: "Especialização em Ciências Médicas",
		institution: "Faculdade Israelita Albert Einstein",
		period: "2018–2019",
		note: "Aprofundamento durante atuação em avaliação geriátrica e cuidado integral ao idoso.",
	},
]

const SUPPLEMENTARY_EDUCATION: EducationEntry[] = [
	{
		degree: "Especialização em Oncologia Pediátrica",
		institution: "Universidade Federal de São Paulo",
		period: "2011–2012",
		note: "Formação no início da carreira; foco clínico atual em adultos e idosos.",
	},
	{
		degree: "Office Administration – Health Services",
		institution: "Sheridan College",
		period: "2022–2023",
		note: "Formação complementar em gestão de serviços de saúde.",
	},
]

function EducationList({ items }: { items: EducationEntry[] }) {
	return (
		<RevealGroup className="space-y-4" stagger={0.08}>
			{items.map(({ degree, institution, period, note }) => (
				<RevealItem
					key={degree}
					className="border-l-2 border-accent py-1 pl-6"
				>
					<p className="font-medium text-foreground">{degree}</p>
					<p className="text-sm text-muted-foreground">
						{institution} · {period}
					</p>
					{note ? (
						<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
							{note}
						</p>
					) : null}
				</RevealItem>
			))}
		</RevealGroup>
	)
}

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
						São Camilo e possui especialização lato sensu em Saúde Mental.
						Também concluiu especialização em Ciências Médicas, em linha com sua
						atuação em avaliação geriátrica e promoção da saúde do idoso no
						PROADI do Hospital Israelita Albert Einstein.
					</p>
					<p className="mt-4 leading-relaxed text-muted-foreground">
						Reabilitação neurológica, ortopédica, pós-AVC e estimulação
						cognitiva são frentes sustentadas pela experiência clínica em
						serviços como Centro de Referência do Idoso, AME Psiquiatria, CAPS
						e atendimento domiciliar — com aprimoramento profissional contínuo
						nessas áreas.
					</p>
				</Reveal>

				<Reveal className="mb-8">
					<h3 className="mb-4 text-sm font-semibold tracking-widest text-accent uppercase">
						Formação acadêmica principal
					</h3>
					<EducationList items={CORE_EDUCATION} />
				</Reveal>

				<Reveal delay={0.1}>
					<h3 className="mb-4 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
						Formação complementar
					</h3>
					<EducationList items={SUPPLEMENTARY_EDUCATION} />
				</Reveal>
			</div>
		</section>
	)
}
