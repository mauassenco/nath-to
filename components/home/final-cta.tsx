"use client"

import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { CtaArrow } from "@/components/shared/cta-arrow"
import { ExternalLink } from "@/components/shared/external-link"
import { Reveal } from "@/components/shared/reveal"
import { cn } from "@/lib/utils"

const WA_URL =
	process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/5511994310592"

export function FinalCta() {
	return (
		<section
			className="section-gradient relative overflow-hidden px-6 py-24"
			aria-labelledby="final-cta-title"
		>
			<div
				className="pointer-events-none absolute -top-16 -right-20 size-80 rounded-full bg-primary/10 blur-3xl"
				aria-hidden="true"
			/>
			<div
				className="pointer-events-none absolute -bottom-20 -left-16 size-72 rounded-full bg-accent/12 blur-3xl"
				aria-hidden="true"
			/>

			<div className="relative mx-auto max-w-4xl">
				<Reveal variant="scale">
					<div className="glass-panel rounded-3xl px-8 py-14 text-center sm:px-14 sm:py-16">
						<p className="mb-4 text-sm font-semibold tracking-widest text-accent uppercase">
							Próximo passo
						</p>
						<h2
							id="final-cta-title"
							className="font-display mb-5 text-3xl font-medium text-balance text-foreground sm:text-4xl lg:text-5xl"
						>
							Vamos conversar sobre o cuidado certo para o seu momento?
						</h2>
						<p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
							Atendimento técnico, humano e individualizado para adultos ou
							idosos. Entre em contato e entenda como a Terapia Ocupacional pode
							ajudar.
						</p>
						<div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
							<Link
								href="/contato"
								className={cn(
									buttonVariants({ size: "xl" }),
									"group w-full sm:w-auto"
								)}
							>
								Agende uma conversa inicial
								<CtaArrow size={20} />
							</Link>
							<ExternalLink
								href={WA_URL}
								className={cn(
									buttonVariants({ size: "lg", variant: "glass" }),
									"w-full sm:w-auto"
								)}
							>
								Fale pelo WhatsApp
							</ExternalLink>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	)
}
