"use client"

import Link from "next/link"
import {
	WhatsappLogo,
	Envelope,
	MapPin,
	ArrowDown,
	type Icon,
} from "@phosphor-icons/react"
import { ExternalLink } from "@/components/shared/external-link"
import { buttonVariants } from "@/components/ui/button"
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

interface ContactChannel {
	icon: Icon
	label: string
	value: string
	hint: string
	href?: string
	external?: boolean
}

const CONTACT_CHANNELS: ContactChannel[] = [
	{
		icon: WhatsappLogo,
		label: "WhatsApp",
		value: SITE.phone.display,
		hint: SITE.phone.note,
		href: SITE.whatsappUrl,
		external: true,
	},
	{
		icon: Envelope,
		label: "E-mail",
		value: SITE.email,
		hint: "Para mensagens detalhadas",
		href: `mailto:${SITE.email}`,
	},
	{
		icon: MapPin,
		label: "Local de atendimento",
		value: SITE.location.city,
		hint: "Presencial e domiciliar",
	},
]

function ContactChannelCard({ channel }: { channel: ContactChannel }) {
	const IconComponent = channel.icon
	const content = (
		<>
			<span
				className="card-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10"
				aria-hidden="true"
			>
				<IconComponent size={22} className="text-primary" />
			</span>
			<div className="min-w-0 flex-1">
				<p className="text-xs font-semibold tracking-widest text-accent uppercase">
					{channel.label}
				</p>
				<p className="mt-1 font-medium text-foreground">{channel.value}</p>
				<p className="mt-0.5 text-sm text-muted-foreground">{channel.hint}</p>
			</div>
		</>
	)

	return (
		<RevealItem
			variant="fade-right"
			className="glass-card glass-card-interactive rounded-2xl p-5"
		>
			{channel.href ? (
				channel.external ? (
					<ExternalLink
						href={channel.href}
						className="flex items-start gap-4 hover:text-primary"
					>
						{content}
					</ExternalLink>
				) : (
					<a
						href={channel.href}
						className="flex items-start gap-4 hover:text-primary"
					>
						{content}
					</a>
				)
			) : (
				<div className="flex items-start gap-4">{content}</div>
			)}
		</RevealItem>
	)
}

export function ContatoHero() {
	return (
		<section
			className="hero-glow relative overflow-hidden px-6 pt-32 pb-16"
			aria-labelledby="contato-title"
		>
			<div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
				<Reveal>
					<p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
						Fale com a Nathália
					</p>
					<h1
						id="contato-title"
						className="font-display mb-6 text-4xl font-medium text-balance text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]"
					>
						Vamos conversar sobre o cuidado que faz sentido para o seu momento
					</h1>
					<p className="mb-8 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
						Se você procura um atendimento terapêutico técnico, humano e
						individualizado para adultos ou idosos, entre em contato para
						entender como a Terapia Ocupacional pode ajudar.
					</p>

					<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
						<ExternalLink
							href={SITE.whatsappUrl}
							className={cn(buttonVariants({ size: "xl", variant: "whatsapp" }))}
						>
							<WhatsappLogo size={20} aria-hidden="true" />
							Fale pelo WhatsApp
						</ExternalLink>
						<Link
							href="#contato-formulario"
							className={cn(
								buttonVariants({ size: "lg", variant: "outline" }),
								"group"
							)}
						>
							Enviar mensagem
							<ArrowDown
								size={18}
								className="ml-1 transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out-expo)] group-hover:translate-y-0.5"
								aria-hidden="true"
							/>
						</Link>
					</div>

					<p className="mt-8 text-sm text-muted-foreground">
						Atendimento presencial e domiciliar em Poços de Caldas, conforme a
						necessidade de cada pessoa.
					</p>
				</Reveal>

				<div className="space-y-4" aria-label="Canais de contato">
					<RevealGroup stagger={0.08}>
						{CONTACT_CHANNELS.map((channel) => (
							<ContactChannelCard key={channel.label} channel={channel} />
						))}
					</RevealGroup>
				</div>
			</div>
		</section>
	)
}
