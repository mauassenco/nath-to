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
  const displayLabel = label ?? alt ?? "Foto"
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg bg-muted text-muted-foreground text-sm",
        className
      )}
      style={aspectRatio ? { aspectRatio } : undefined}
      role="img"
      aria-label={alt}
    >
      {displayLabel}
    </div>
  )
}
