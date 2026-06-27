"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutGroup, motion } from "motion/react"
import { WhatsappLogo } from "@phosphor-icons/react"
import { buttonVariants } from "@/components/ui/button"
import { ExternalLink } from "@/components/shared/external-link"
import { springNav } from "@/lib/motion"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
	{ href: "/", label: "Início" },
	{ href: "/sobre", label: "Sobre" },
	{ href: "/servicos", label: "Serviços" },
	{ href: "/contato", label: "Contato" },
]

const WA_URL =
	process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/5511994310592"

export function DesktopNav() {
	const pathname = usePathname()

	return (
		<LayoutGroup id="main-nav">
			<nav
				className="hidden items-center gap-7 md:flex"
				aria-label="Navegação principal"
			>
				{NAV_LINKS.map(({ href, label }) => {
					const isActive = pathname === href

					return (
						<Link
							key={href}
							href={href}
							aria-current={isActive ? "page" : undefined}
							className={cn(
								"relative py-1 text-sm font-medium transition-colors hover:text-primary",
								isActive ? "text-primary" : "text-muted-foreground"
							)}
						>
							{label}
							{isActive && (
								<motion.span
									layoutId="nav-active-indicator"
									className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary"
									transition={springNav}
								/>
							)}
						</Link>
					)
				})}
				<ExternalLink
					href={WA_URL}
					className={cn(
						buttonVariants({ size: "sm", variant: "whatsapp" }),
						"ml-1"
					)}
				>
					<WhatsappLogo size={16} weight="fill" aria-hidden="true" />
					WhatsApp
				</ExternalLink>
			</nav>
		</LayoutGroup>
	)
}
