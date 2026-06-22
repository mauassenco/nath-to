import Link from "next/link"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SectionCtaProps {
  primary: { label: string; href: string }
  secondary?: { label: string; href: string; external?: boolean }
}

export function SectionCta({ primary, secondary }: SectionCtaProps) {
  const WA_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL!
  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-8">
      <Link
        href={primary.href}
        className={cn(buttonVariants({ size: "lg" }), "group")}
      >
        {primary.label}
        <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} aria-hidden="true" />
      </Link>
      {secondary && (
        secondary.external ? (
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            {secondary.label}
          </a>
        ) : (
          <Link
            href={secondary.href}
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            {secondary.label}
          </Link>
        )
      )}
    </div>
  )
}
