"use client"

import {
	WhatsappLogo,
	Envelope,
	MapPin,
} from "@phosphor-icons/react"
import { ExternalLink } from "@/components/shared/external-link"
import { Reveal } from "@/components/shared/reveal"

const WA_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "#"

const WHEN_TO_CONTACT = [
	"Adultos e idosos com demandas de reabilitação neurológica.",
	"Pessoas em acompanhamento pós-AVC.",
	"Pessoas com necessidades de reabilitação ortopédica.",
	"Pessoas com alterações cognitivas ou demandas de estimulação cognitiva.",
	"Pessoas que precisam de apoio em saúde mental e rotina.",
	"Famílias e cuidadores que buscam orientação terapêutica.",
]

export function ContatoInfo() {
	return (
		<Reveal>
			<h2 className="font-display mb-8 text-2xl font-medium text-foreground sm:text-3xl">
				Fale com a Nathália
			</h2>

			<div className="space-y-6">
				<div className="flex items-start gap-4">
					<span
						className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10"
						aria-hidden="true"
					>
						<WhatsappLogo size={20} className="text-primary" />
					</span>
					<div>
						<p className="mb-1 font-medium text-foreground">WhatsApp</p>
						<ExternalLink
							href={WA_URL}
							className="text-muted-foreground transition-colors hover:text-primary"
						>
							(11) 99431-0592
						</ExternalLink>
					</div>
				</div>

				<div className="flex items-start gap-4">
					<span
						className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10"
						aria-hidden="true"
					>
						<Envelope size={20} className="text-primary" />
					</span>
					<div>
						<p className="mb-1 font-medium text-foreground">E-mail</p>
						<a
							href="mailto:nat_zacc@hotmail.com"
							className="text-muted-foreground transition-colors hover:text-primary"
						>
							nat_zacc@hotmail.com
						</a>
					</div>
				</div>

				<div className="flex items-start gap-4">
					<span
						className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10"
						aria-hidden="true"
					>
						<MapPin size={20} className="text-primary" />
					</span>
					<div>
						<p className="mb-1 font-medium text-foreground">
							Local de atendimento
						</p>
						<p className="text-muted-foreground">Poços de Caldas, MG</p>
						<p className="mt-1 text-sm text-muted-foreground">
							Atendimento presencial e domiciliar, conforme avaliação da
							necessidade.
						</p>
					</div>
				</div>
			</div>

			<div className="glass-card glass-card-interactive mt-10 rounded-xl p-6">
				<h3 className="mb-3 font-medium text-foreground">
					Quando este contato é indicado
				</h3>
				<ul className="space-y-2 text-sm text-muted-foreground">
					{WHEN_TO_CONTACT.map((item) => (
						<li key={item} className="flex items-start gap-2">
							<span
								className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent"
								aria-hidden="true"
							/>
							{item}
						</li>
					))}
				</ul>
			</div>
		</Reveal>
	)
}
