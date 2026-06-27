import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding font-semibold whitespace-nowrap transition-[color,background-color,box-shadow,border-color,transform] duration-200 ease-out outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40 active:not-aria-[haspopup]:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[var(--shadow-btn)] hover:bg-primary/90 hover:shadow-lg",
        outline:
          "border-border bg-background text-foreground hover:bg-muted hover:border-primary/25",
        glass:
          "glass-pill border-border/40 text-foreground hover:border-primary/30",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_6%)]",
        ghost:
          "text-foreground hover:bg-muted/80",
        whatsapp:
          "border-[#25D366]/35 bg-[#25D366]/10 text-[#128C42] hover:bg-[#25D366]/18 hover:border-[#25D366]/50",
        inverse:
          "bg-background text-foreground shadow-md hover:bg-background/92",
        inverseOutline:
          "border-primary-foreground/35 text-primary-foreground hover:bg-primary-foreground/10",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
        link: "text-primary underline-offset-4 hover:underline font-medium",
      },
      size: {
        default: "h-11 gap-2 rounded-full px-6 text-sm",
        xs: "h-8 gap-1.5 rounded-full px-3.5 text-xs",
        sm: "h-10 gap-1.5 rounded-full px-5 text-sm",
        lg: "h-12 gap-2 rounded-full px-7 text-[0.9375rem]",
        xl: "h-14 gap-2.5 rounded-full px-9 text-base",
        icon: "size-11 rounded-full",
        "icon-sm": "size-10 rounded-full",
        "icon-lg": "size-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
