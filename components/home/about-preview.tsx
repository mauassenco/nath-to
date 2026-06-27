"use client"

import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { CtaArrow } from "@/components/shared/cta-arrow"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { Reveal } from "@/components/shared/reveal"
import { cn } from "@/lib/utils"

export function AboutPreview() {
	return (
		<section
			className="section-gradient px-6 py-20"
			aria-labelledby="about-preview-title"
		>
			<div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
				<Reveal variant="fade-left">
					<ImagePlaceholder
						className="w-full"
						aspectRatio="3/4"
						label="Foto da Nathália"
					/>
				</Reveal>

				<Reveal>
					<p className="mb-4 text-sm font-semibold tracking-widest text-accent uppercase">
						Sobre a profissional
					</p>
					<h2
						id="about-preview-title"
						className="font-display mb-6 text-3xl font-medium text-foreground sm:text-4xl"
					>
						Nathália Catharino Zaccaria
					</h2>
					<p className="mb-4 text-base leading-relaxed text-muted-foreground">
						Terapeuta ocupacional com atuação voltada para adultos e idosos,
						com experiência em reabilitação neurológica, saúde mental,
						estimulação cognitiva e atendimento domiciliar.
					</p>
					<p className="text-base leading-relaxed text-muted-foreground">
						Prática sólida em avaliação funcional, estratégias personalizadas e
						articulação com diferentes frentes de cuidado — sempre atenta à
						realidade de cada pessoa e de sua família.
					</p>
					<div className="mt-8">
						<Link
							href="/sobre"
							className={cn(
								buttonVariants({ size: "lg", variant: "glass" }),
								"group"
							)}
						>
							Conheça mais sobre a profissional
							<CtaArrow />
						</Link>
					</div>
				</Reveal>
			</div>
		</section>
	)
}
