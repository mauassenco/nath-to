"use client"

import { SectionCta } from "@/components/shared/section-cta"
import { Reveal } from "@/components/shared/reveal"

export function SobreCta() {
	return (
		<section
			className="bg-primary px-6 py-20 text-primary-foreground"
			aria-labelledby="values-title"
		>
			<div className="mx-auto max-w-3xl text-center">
				<Reveal>
					<h2
						id="values-title"
						className="font-display mb-6 text-3xl font-medium sm:text-4xl"
					>
						Técnica, escuta e compromisso com o que faz diferença
					</h2>
					<p className="mb-4 text-lg leading-relaxed text-primary-foreground/80">
						Meu compromisso é oferecer um cuidado ético, acolhedor e
						individualizado, sempre com foco no que realmente importa para o
						paciente e sua família.
					</p>
					<p className="mb-8 leading-relaxed text-primary-foreground/80">
						A Terapia Ocupacional, para mim, é uma forma de transformar
						dificuldades em possibilidades concretas de participação, autonomia e
						bem-estar.
					</p>
					<p className="font-display mb-2 text-xl font-medium text-primary-foreground sm:text-2xl">
						Quer conversar sobre o cuidado mais adequado para o seu momento?
					</p>
					<p className="mb-10 leading-relaxed text-primary-foreground/80">
						Se você busca um atendimento terapêutico técnico, humano e
						individualizado, entre em contato para entender como posso ajudar.
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
