import { cn } from "@/lib/utils"

interface ImagePlaceholderProps {
  alt?: string
  className?: string
  label?: string
  aspectRatio?: string
}

export function ImagePlaceholder({
  alt,
  className,
  label,
  aspectRatio,
}: ImagePlaceholderProps) {
  const accessibleName = alt ?? label ?? "Foto"
  const displayLabel = label ?? alt ?? "Foto"
  return (
    <div
      className={cn(
        "photo-slot relative flex flex-col items-center justify-center gap-2 rounded-2xl text-muted-foreground",
        className
      )}
      style={aspectRatio ? { aspectRatio } : undefined}
      role="img"
      aria-label={accessibleName}
    >
      <span
        className="relative z-[1] font-display text-2xl text-primary/40 select-none"
        aria-hidden="true"
      >
        ◦
      </span>
      <span className="relative z-[1] text-xs font-medium tracking-wide uppercase">
        {displayLabel}
      </span>
    </div>
  )
}
