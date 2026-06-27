"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal"

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
	{
		number: "01",
		title: "Primeiro contato",
		description:
			"Uma conversa inicial para entender a necessidade, o contexto e os objetivos de cada pessoa.",
	},
	{
		number: "02",
		title: "Avaliação funcional",
		description:
			"Avaliação terapêutica completa com entendimento da rotina e do nível funcional atual.",
	},
	{
		number: "03",
		title: "Definição de objetivos",
		description:
			"Construção de um plano terapêutico personalizado, focado no que é possível e significativo.",
	},
	{
		number: "04",
		title: "Acompanhamento",
		description:
			"Sessões regulares com ajustes contínuos conforme a evolução e as necessidades da pessoa.",
	},
]

export function HowItWorks() {
	const sectionRef = useRef<HTMLElement>(null)

	useGSAP(
		() => {
			const line = sectionRef.current?.querySelector(".process-timeline-line")
			if (!line) return

			const prefersReduced = window.matchMedia(
				"(prefers-reduced-motion: reduce)"
			).matches
			if (prefersReduced) {
				gsap.set(line, { scaleX: 1 })
				return
			}

			gsap.fromTo(
				line,
				{ scaleX: 0 },
				{
					scaleX: 1,
					ease: "power2.inOut",
					scrollTrigger: {
						trigger: sectionRef.current,
						start: "top 70%",
						end: "top 35%",
						scrub: 0.6,
					},
				}
			)
		},
		{ scope: sectionRef }
	)

	return (
		<section
			ref={sectionRef}
			className="section-gradient px-6 py-20"
			aria-labelledby="how-title"
		>
			<div className="mx-auto max-w-6xl">
				<Reveal className="mb-14 max-w-2xl">
					<p className="mb-4 text-sm font-semibold tracking-widest text-accent uppercase">
						Como funciona
					</p>
					<h2
						id="how-title"
						className="font-display text-3xl font-medium text-foreground sm:text-4xl"
					>
						Um processo claro, acolhedor e objetivo
					</h2>
					<p className="mt-4 text-base leading-relaxed text-muted-foreground">
						Tudo começa com uma escuta inicial para entender a necessidade, o
						contexto e os objetivos de cada pessoa.
					</p>
				</Reveal>

				<div className="process-timeline relative">
					<div className="process-timeline-line" aria-hidden="true" />
					<RevealGroup
						stagger={0.1}
						className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
					>
						{STEPS.map(({ number, title, description }) => (
							<RevealItem
								key={number}
								className="glass-card glass-card-interactive relative rounded-2xl p-5"
							>
								<span className="relative z-10 inline-flex size-11 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-[var(--shadow-btn)]">
									{number}
								</span>
								<h3 className="relative z-10 mt-4 mb-2 font-semibold text-foreground">
									{title}
								</h3>
								<p className="relative z-10 text-sm leading-relaxed text-muted-foreground">
									{description}
								</p>
							</RevealItem>
						))}
					</RevealGroup>
				</div>
			</div>
		</section>
	)
}
