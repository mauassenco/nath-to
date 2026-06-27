import Image from "next/image"
import Link from "next/link"
import { getLogoSrc, getLogoToneForBackground, type LogoTone } from "@/lib/brand"
import { cn } from "@/lib/utils"

interface SiteLogoProps {
  className?: string
  variant?: "header" | "footer"
  tone?: LogoTone
}

export function SiteLogo({
  className,
  variant = "header",
  tone,
}: SiteLogoProps) {
  const isHeader = variant === "header"
  const logoTone =
    tone ??
    getLogoToneForBackground(variant === "footer" ? "primary" : "default")

  const logo = (
    <Image
      src={getLogoSrc(logoTone)}
      alt=""
      width={1024}
      height={1024}
      className={cn("h-16 w-16 shrink-0 object-contain")}
      priority={isHeader}
      aria-hidden
    />
  )

  const inner = (
    <>
      {logo}
      {isHeader ? (
        <span className="flex h-14 flex-col justify-center gap-px font-display">
          <span className="text-xl leading-none font-semibold tracking-wide text-foreground">
            Nathália
          </span>
          <span className="text-base leading-none font-medium tracking-wide text-foreground/90">
            Catharino
          </span>
          <span className="text-base leading-none font-medium tracking-wide text-foreground/75">
            Zaccaria
          </span>
        </span>
      ) : (
        <span className="font-display text-lg font-medium tracking-wide text-primary-foreground">
          Nathália Catharino Zaccaria
        </span>
      )}
    </>
  )

  const classes = cn(
    "flex items-center",
    isHeader ? "gap-3" : "gap-2.5",
    className,
  )

  if (isHeader) {
    return (
      <Link
        href="/"
        className={classes}
        aria-label="Nathália Catharino Zaccaria – página inicial"
      >
        {inner}
      </Link>
    )
  }

  return <div className={classes}>{inner}</div>
}
