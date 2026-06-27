"use client"

import { Reveal } from "@/components/shared/reveal"

export function SobreQuem() {
	return (
		<section className="section-gradient px-6 py-16">
			<div className="mx-auto max-w-3xl">
				<Reveal>
					<h2 className="font-display mb-6 text-3xl font-medium text-foreground sm:text-4xl">
						Quem é Nathália
					</h2>
					<div className="space-y-4 leading-relaxed text-muted-foreground">
						<p>
							Nathália construiu sua trajetória na Terapia Ocupacional atuando
							com pessoas que precisam de apoio para reorganizar a rotina,
							recuperar participação e viver com mais segurança e independência.
						</p>
						<p>
							Sua experiência reúne atendimento em saúde mental, neurologia,
							envelhecimento saudável, quadros demenciais, reabilitação
							ortopédica, cuidado domiciliar e atuação em equipe multidisciplinar
							em contextos públicos e privados.
						</p>
						<p>
							Ao longo da carreira, também desenvolveu atuação em ensino e
							formação de profissionais da Atenção Básica do SUS, contribuindo
							com temas como avaliação geriátrica, promoção de saúde e cuidado
							integral à pessoa idosa.
						</p>
					</div>
				</Reveal>
			</div>
		</section>
	)
}
