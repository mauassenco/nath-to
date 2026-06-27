"use client"

import { Reveal } from "@/components/shared/reveal"

export function ServicosIntro() {
	return (
		<section className="section-gradient px-6 py-12">
			<div className="mx-auto max-w-3xl">
				<Reveal viewport="tight">
					<h2 className="font-display mb-4 text-2xl font-medium text-foreground sm:text-3xl">
						O que a Terapia Ocupacional pode transformar
					</h2>
					<p className="leading-relaxed text-muted-foreground">
						A Terapia Ocupacional ajuda a pessoa a retomar, manter ou adaptar
						atividades do dia a dia com mais segurança, participação e
						independência. Em vez de tratar apenas um sintoma, o trabalho olha
						para a rotina, o contexto e as necessidades concretas de cada
						paciente.
					</p>
				</Reveal>
			</div>
		</section>
	)
}
