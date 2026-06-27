export const BRAND = {
	primaryColor: "#285243",
	logoDefault: "/images/logo-285243.png",
	logoOnPrimary: "/images/logo-6d5f55.png",
	favicon: "/favicon-96x96.png",
	appleIcon: "/apple-icon.png",
} as const

export type LogoTone = "default" | "on-primary"

export function getLogoSrc(tone: LogoTone = "default") {
	return tone === "on-primary" ? BRAND.logoOnPrimary : BRAND.logoDefault
}

export function getLogoToneForBackground(background: "default" | "primary") {
	return background === "primary" ? "on-primary" : "default"
}
