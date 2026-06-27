"use client"

import Link from "next/link"
import {
	Brain,
	Bone,
	Heart,
	House,
	Lightning,
	PersonSimpleWalk,
} from "@phosphor-icons/react"
import { buttonVariants } from "@/components/ui/button"
import { CtaArrow } from "@/components/shared/cta-arrow"
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal"
import { cn } from "@/lib/utils"
import type { Icon } from "@phosphor-icons/react"

const SERVICES: { icon: Icon; title: string; description: string }[] = [
	{
		icon: Brain,
		title: "Reabilitação neurológica",
		description:
			"Cuidado para adultos e idosos com condições neurológicas que impactam rotina, movimento, cognição e independência.",
	},
	{
		icon: PersonSimpleWalk,
		title: "Reabilitação pós-AVC",
		description:
			"Apoio terapêutico para reconstrução de rotina, retomada de habilidades e fortalecimento da autonomia após AVC.",
	},
	{
		icon: Bone,
		title: "Reabilitação ortopédica",
		description:
			"Intervenções voltadas a reduzir limitações funcionais, adaptar tarefas e favorecer o retorno às atividades do dia a dia.",
	},
	{
		icon: Lightning,
		title: "Estimulação cognitiva",
		description:
			"Trabalho para atenção, memória, organização e manutenção da participação em atividades significativas.",
	},
	{
		icon: Heart,
		title: "Saúde mental",
		description:
			"Acompanhamento terapêutico para reorganizar a rotina, fortalecer a autonomia e apoiar o bem-estar emocional.",
	},
	{
		icon: House,
		title: "Atendimento domiciliar",
		description:
			"Cuidado no ambiente da própria pessoa, quando isso favorece melhor compreensão da rotina e das necessidades reais.",
	},
]

export function ServicesPreview() {
	return (
		<section
			className="section-gradient px-6 py-20"
			aria-labelledby="services-title"
		>
			<div className="mx-auto max-w-6xl">
				<Reveal className="mb-12 max-w-2xl">
					<p className="mb-4 text-sm font-semibold tracking-widest text-accent uppercase">
						Linhas de cuidado
					</p>
					<h2
						id="services-title"
						className="font-display text-3xl font-medium text-foreground sm:text-4xl"
					>
						Para quem e para quê
					</h2>
					<p className="mt-4 text-base leading-relaxed text-muted-foreground">
						Cada linha de atendimento parte da rotina real da pessoa — com
						objetivos claros e plano terapêutico individualizado.
					</p>
				</Reveal>

				<RevealGroup
					className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
					stagger={0.06}
					viewport="tight"
				>
					{SERVICES.map(({ icon: Icon, title, description }) => (
						<RevealItem
							key={title}
							className="glass-card glass-card-interactive rounded-2xl p-6"
						>
							<span className="card-icon mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-primary/10">
								<Icon size={24} className="text-primary" aria-hidden="true" />
							</span>
							<h3 className="mb-2 font-semibold text-foreground">{title}</h3>
							<p className="text-sm leading-relaxed text-muted-foreground">
								{description}
							</p>
						</RevealItem>
					))}
				</RevealGroup>

				<Link
					href="/servicos"
					className={cn(
						buttonVariants({ size: "lg", variant: "glass" }),
						"group"
					)}
				>
					Ver todos os serviços
					<CtaArrow />
				</Link>
			</div>
		</section>
	)
}
