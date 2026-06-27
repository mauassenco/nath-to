"use client"

import { SectionCta } from "@/components/shared/section-cta"
import { Reveal } from "@/components/shared/reveal"

export function ServicosCta() {
	return (
		<section className="bg-primary px-6 py-20 text-center text-primary-foreground">
			<div className="mx-auto max-w-2xl">
				<Reveal>
					<h2 className="font-display mb-6 text-3xl font-medium sm:text-4xl">
						Quer entender qual serviço faz mais sentido para o seu momento?
					</h2>
					<p className="mb-8 leading-relaxed text-primary-foreground/85">
						Se você procura um atendimento técnico, humano e individualizado
						para adultos ou idosos, entre em contato para conversar sobre a
						melhor forma de cuidado.
					</p>
					<SectionCta
						onDark
						primary={{ label: "Agende uma conversa inicial", href: "/contato" }}
						secondary={{
							label: "Fale pelo WhatsApp",
							href: "#",
							external: true,
						}}
					/>
				</Reveal>
			</div>
		</section>
	)
}
