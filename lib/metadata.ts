import type { Metadata } from "next"

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nathaliacatharino.com.br"

export function buildMetadata(overrides: Partial<Metadata>): Metadata {
  return {
    metadataBase: new URL(BASE_URL),
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: "Nathália Catharino Zaccaria — Terapeuta Ocupacional",
      url: BASE_URL,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Nathália Catharino Zaccaria — Terapeuta Ocupacional, Poços de Caldas, MG",
        },
      ],
      ...((overrides.openGraph as object) ?? {}),
    },
    twitter: {
      card: "summary_large_image",
    },
    ...overrides,
  }
}
