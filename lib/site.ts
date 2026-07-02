export const SITE = {
	phone: {
		display: "(11) 99431-0592",
		tel: "+5511994310592",
		note: "WhatsApp com DDD de SP — atendimento em Poços de Caldas",
	},
	email: "nat_zacc@hotmail.com",
	location: {
		city: "Poços de Caldas, MG",
		modality: "Atendimento presencial e domiciliar",
	},
	whatsappUrl:
		process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/5511994310592",
	career: {
		startYear: 2010,
	},
} as const

export const CAREER_COPY = {
	sinceShort: "Atuando desde 2010",
	sinceInline: "atuando desde 2010",
	sinceSentence: "Atuando em Terapia Ocupacional desde 2010",
	decades: "Mais de uma década de atuação clínica em Terapia Ocupacional.",
	footer:
		"Terapeuta Ocupacional atuando desde 2010 em reabilitação neurológica, saúde mental e atendimento domiciliar.",
	seoSobre:
		"Conheça Nathália Catharino Zaccaria, terapeuta ocupacional atuando desde 2010 em reabilitação neurológica, saúde mental e atendimento domiciliar em Poços de Caldas, MG.",
	schema:
		"Terapeuta Ocupacional atuando desde 2010 em reabilitação neurológica, saúde mental e atendimento domiciliar.",
} as const

export const SEO = {
	homeTitle: "Terapeuta Ocupacional em Poços de Caldas | Nathália Zaccaria",
	sobreTitle:
		"Sobre Nathália Zaccaria | Terapeuta Ocupacional Poços de Caldas",
	servicosTitle:
		"Serviços de Terapia Ocupacional | Adultos e Idosos — Poços de Caldas",
	contatoTitle: "Contato | Terapeuta Ocupacional em Poços de Caldas",
} as const
