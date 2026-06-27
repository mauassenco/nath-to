import { ArrowRight } from "@phosphor-icons/react/dist/ssr"
import { cn } from "@/lib/utils"

interface CtaArrowProps {
	className?: string
	size?: number
}

export function CtaArrow({ className, size = 18 }: CtaArrowProps) {
	return (
		<ArrowRight
			className={cn("cta-arrow", className)}
			size={size}
			aria-hidden="true"
		/>
	)
}
