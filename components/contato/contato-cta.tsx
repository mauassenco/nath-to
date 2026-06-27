"use client"

import { WhatsappLogo } from "@phosphor-icons/react"
import { ExternalLink } from "@/components/shared/external-link"
import { Reveal } from "@/components/shared/reveal"

const WA_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "#"

export function ContatoCta() {
	return (
		<section className="bg-primary px-6 py-16 text-center text-primary-foreground">
			<div className="mx-auto max-w-xl">
				<Reveal>
					<h2 className="font-display mb-4 text-2xl font-medium sm:text-3xl">
						Atendimento humano, claro e individualizado
					</h2>
					<p className="mb-8 leading-relaxed text-primary-foreground/80">
						Cada contato é o começo de uma escuta cuidadosa, pensada para
						entender a realidade da pessoa e indicar o melhor caminho de
						cuidado.
					</p>
					<ExternalLink
						href={WA_URL}
						className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-3 font-medium text-primary transition-[background-color,transform] duration-200 ease-out hover:bg-primary-foreground/90 active:scale-[0.98]"
					>
						<WhatsappLogo size={20} aria-hidden="true" />
						Fale pelo WhatsApp
					</ExternalLink>
				</Reveal>
			</div>
		</section>
	)
}
