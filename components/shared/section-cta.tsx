import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { CtaArrow } from "@/components/shared/cta-arrow"
import { ExternalLink } from "@/components/shared/external-link"
import { cn } from "@/lib/utils"

interface SectionCtaProps {
	primary: { label: string; href: string }
	secondary?: { label: string; href: string; external?: boolean }
	onDark?: boolean
}

export function SectionCta({
	primary,
	secondary,
	onDark = false,
}: SectionCtaProps) {
	const WA_URL =
		process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/5511994310592"

	const primaryVariant = onDark ? "inverse" : "default"
	const secondaryVariant = onDark ? "inverseOutline" : "whatsapp"

	return (
		<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
			<Link
				href={primary.href}
				className={cn(
					buttonVariants({ size: "xl", variant: primaryVariant }),
					"group w-full sm:w-auto"
				)}
			>
				{primary.label}
				<CtaArrow size={20} />
			</Link>
			{secondary &&
				(secondary.external ? (
					<ExternalLink
						href={WA_URL}
						className={cn(
							buttonVariants({ size: "lg", variant: secondaryVariant }),
							"w-full sm:w-auto",
							onDark &&
								"border-primary-foreground/35 text-primary-foreground hover:bg-primary-foreground/10"
						)}
					>
						{secondary.label}
					</ExternalLink>
				) : (
					<Link
						href={secondary.href}
						className={cn(
							buttonVariants({ size: "lg", variant: "outline" }),
							"w-full sm:w-auto"
						)}
					>
						{secondary.label}
					</Link>
				))}
		</div>
	)
}
