import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface SiteLogoProps {
  className?: string
  variant?: "header" | "footer"
}

export function SiteLogo({ className, variant = "header" }: SiteLogoProps) {
  const isHeader = variant === "header"

  const logo = (
    <Image
      src="/logo-nathalia-catharino-removebg.png"
      alt=""
      width={331}
      height={322}
      className={cn(
        "shrink-0 object-contain h-16 w-16",
      )}
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
