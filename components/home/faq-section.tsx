"use client"

import Link from "next/link"
import {
	CaretDown,
	ChatCircleDots,
	House,
	Users,
	Heart,
} from "@phosphor-icons/react"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { buttonVariants } from "@/components/ui/button"
import { CtaArrow } from "@/components/shared/cta-arrow"
import { Reveal } from "@/components/shared/reveal"
import { cn } from "@/lib/utils"
import type { Icon } from "@phosphor-icons/react"

const FAQS: {
	value: string
	q: string
	a: string
	icon: Icon
}[] = [
	{
		value: "faq-0",
		icon: Users,
		q: "Para quem o atendimento é indicado?",
		a: "Principalmente para adultos e idosos que precisam de apoio em reabilitação neurológica, pós-AVC, reabilitação ortopédica, estimulação cognitiva, saúde mental ou adaptação da rotina.",
	},
	{
		value: "faq-1",
		icon: House,
		q: "O atendimento pode ser domiciliar?",
		a: "Sim. Quando a mobilidade, a condição clínica ou o contexto da pessoa favorecem esse formato, o atendimento domiciliar pode ser a melhor opção.",
	},
	{
		value: "faq-2",
		icon: ChatCircleDots,
		q: "Como a Terapia Ocupacional ajuda na prática?",
		a: "Ela ajuda a pessoa a ampliar autonomia, organizar a rotina, manter participação nas atividades e encontrar estratégias mais funcionais para viver melhor.",
	},
	{
		value: "faq-3",
		icon: Heart,
		q: "O atendimento inclui família e cuidadores?",
		a: "Quando necessário, sim. A orientação para familiares e cuidadores faz parte de um cuidado mais completo e efetivo.",
	},
]

export function FaqSection() {
	return (
		<section
			className="faq-section section-gradient relative overflow-hidden px-6 py-20"
			aria-labelledby="faq-title"
		>
			<div
				className="pointer-events-none absolute -top-24 -right-24 z-0 size-72 rounded-full bg-primary/6 blur-3xl"
				aria-hidden="true"
			/>
			<div
				className="pointer-events-none absolute -bottom-16 -left-16 z-0 size-56 rounded-full bg-accent/8 blur-3xl"
				aria-hidden="true"
			/>

			<div className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
				<Reveal className="lg:sticky lg:top-28 lg:col-span-4">
					<p className="mb-4 text-sm font-semibold tracking-widest text-accent uppercase">
						Dúvidas frequentes
					</p>
					<h2
						id="faq-title"
						className="font-display text-3xl font-medium text-foreground sm:text-4xl"
					>
						Perguntas frequentes
					</h2>
					<p className="mt-4 text-base leading-relaxed text-muted-foreground">
						Respostas objetivas para as dúvidas mais comuns sobre o
						atendimento, modalidades e como a Terapia Ocupacional pode ajudar
						no dia a dia.
					</p>

					<div className="glass-card glass-card-interactive mt-8 rounded-2xl p-5">
						<p className="text-sm font-semibold text-foreground">
							Ainda ficou alguma dúvida?
						</p>
						<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
							Entre em contato para conversar sobre o seu momento ou o de quem
							você cuida.
						</p>
						<Link
							href="/contato"
							className={cn(
								buttonVariants({ size: "lg", variant: "glass" }),
								"group mt-4 w-full sm:w-auto"
							)}
						>
							Fale com a Nathália
							<CtaArrow />
						</Link>
					</div>
				</Reveal>

				<Reveal delay={0.08} className="lg:col-span-8">
					<Accordion className="faq-accordion flex w-full flex-col gap-3">
						{FAQS.map(({ value, q, a, icon: Icon }) => (
							<AccordionItem
								key={value}
								value={value}
								className="not-last:border-b-0"
							>
								<div className="faq-item glass-card glass-card-interactive overflow-hidden rounded-2xl">
									<AccordionTrigger className="faq-trigger w-full gap-4 rounded-none bg-transparent px-5 py-5 text-left text-base font-semibold text-foreground hover:no-underline sm:px-6">
										<span className="card-icon inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
											<Icon size={20} weight="duotone" aria-hidden="true" />
										</span>
										<span className="flex-1 pr-2 leading-snug">{q}</span>
										<span
											className="faq-chevron glass-pill inline-flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground"
											aria-hidden="true"
										>
											<CaretDown size={14} weight="bold" />
										</span>
									</AccordionTrigger>
									<AccordionContent className="px-5 pb-5 text-base leading-relaxed text-muted-foreground sm:px-6 sm:pb-6">
										<div className="faq-answer border-t border-primary/10 pt-4 sm:ml-14">
											{a}
										</div>
									</AccordionContent>
								</div>
							</AccordionItem>
						))}
					</Accordion>
				</Reveal>
			</div>
		</section>
	)
}
