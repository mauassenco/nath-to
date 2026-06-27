"use client"

import {
	motion,
	type HTMLMotionProps,
	type Variants,
} from "motion/react"
import { cn } from "@/lib/utils"
import {
	getRevealVariants,
	springReveal,
	viewportDefault,
	viewportTight,
	type RevealVariant,
} from "@/lib/motion"

interface RevealProps extends Omit<HTMLMotionProps<"div">, "variants" | "viewport"> {
	variant?: RevealVariant
	delay?: number
	viewport?: "default" | "tight"
}

export function Reveal({
	variant = "fade-up",
	delay = 0,
	viewport = "default",
	className,
	children,
	...props
}: RevealProps) {
	const variants = getRevealVariants(variant)

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={viewport === "tight" ? viewportTight : viewportDefault}
			variants={variants}
			transition={{ ...springReveal, delay }}
			className={className}
			{...props}
		>
			{children}
		</motion.div>
	)
}

interface RevealGroupProps extends Omit<HTMLMotionProps<"div">, "variants" | "viewport"> {
	stagger?: number
	viewport?: "default" | "tight"
}

const groupVariants: Variants = {
	hidden: {},
	visible: {},
}

export function RevealGroup({
	className,
	stagger = 0.07,
	viewport = "default",
	children,
	...props
}: RevealGroupProps) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={viewport === "tight" ? viewportTight : viewportDefault}
			variants={{
				...groupVariants,
				visible: { transition: { staggerChildren: stagger } },
			}}
			className={className}
			{...props}
		>
			{children}
		</motion.div>
	)
}

interface RevealItemProps extends Omit<HTMLMotionProps<"div">, "variants" | "viewport"> {
	variant?: RevealVariant
}

export function RevealItem({
	variant = "fade-up",
	className,
	children,
	...props
}: RevealItemProps) {
	const variants = getRevealVariants(variant)

	return (
		<motion.div
			variants={variants}
			transition={springReveal}
			className={className}
			{...props}
		>
			{children}
		</motion.div>
	)
}

interface InteractiveCardProps {
	className?: string
	children: React.ReactNode
}

export function InteractiveCard({ className, children }: InteractiveCardProps) {
	return (
		<div className={cn("glass-card glass-card-interactive", className)}>
			{children}
		</div>
	)
}
