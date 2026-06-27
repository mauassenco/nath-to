"use client"

import { ContatoInfo } from "@/components/contato/contato-info"
import { ContactForm } from "@/components/contato/contact-form"
import { Reveal } from "@/components/shared/reveal"

export function ContatoMain() {
	return (
		<section
			id="contato-formulario"
			className="section-gradient scroll-mt-28 px-6 py-16"
		>
			<div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
				<ContatoInfo />

				<Reveal delay={0.15}>
					<div className="glass-card glass-card-interactive rounded-2xl p-8">
						<h2 className="font-display mb-8 text-2xl font-medium text-foreground sm:text-3xl">
							Envie sua mensagem
						</h2>
						<p className="mb-6 leading-relaxed text-muted-foreground">
							Conte brevemente sua necessidade e, se possível, explique o tipo de
							apoio que está buscando. Isso ajuda a tornar o primeiro contato
							mais objetivo, acolhedor e assertivo.
						</p>
						<ContactForm />
					</div>
				</Reveal>
			</div>
		</section>
	)
}
