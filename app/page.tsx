import { Hero } from "@/components/home/hero"
import { Authority } from "@/components/home/authority"
import { AboutPreview } from "@/components/home/about-preview"
import { ServicesPreview } from "@/components/home/services-preview"
import { Benefits } from "@/components/home/benefits"
import { Differentials } from "@/components/home/differentials"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Authority />
      <AboutPreview />
      <ServicesPreview />
      <Benefits />
      <Differentials />
    </>
  )
}
