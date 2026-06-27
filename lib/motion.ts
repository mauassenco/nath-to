export const viewportDefault = { once: true, margin: "-80px" } as const
export const viewportTight = { once: true, margin: "-60px" } as const

export const springReveal = {
	type: "spring" as const,
	stiffness: 120,
	damping: 22,
	mass: 0.9,
}

export const springSoft = {
	type: "spring" as const,
	stiffness: 90,
	damping: 20,
	mass: 1,
}

export const springNav = {
	type: "spring" as const,
	stiffness: 380,
	damping: 32,
	mass: 0.85,
}

export type RevealVariant =
	| "fade-up"
	| "fade-down"
	| "fade-left"
	| "fade-right"
	| "fade"
	| "scale"

export function getRevealVariants(variant: RevealVariant) {
	const base = { opacity: 1, x: 0, y: 0, scale: 1 }

	switch (variant) {
		case "fade-up":
			return {
				hidden: { opacity: 0, y: 24 },
				visible: base,
			}
		case "fade-down":
			return {
				hidden: { opacity: 0, y: -20 },
				visible: base,
			}
		case "fade-left":
			return {
				hidden: { opacity: 0, x: -24 },
				visible: base,
			}
		case "fade-right":
			return {
				hidden: { opacity: 0, x: 24 },
				visible: base,
			}
		case "fade":
			return {
				hidden: { opacity: 0 },
				visible: { opacity: 1 },
			}
		case "scale":
			return {
				hidden: { opacity: 0, scale: 0.97, y: 12 },
				visible: base,
			}
	}
}
