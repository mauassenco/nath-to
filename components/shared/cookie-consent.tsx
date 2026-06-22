"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "@phosphor-icons/react"

const STORAGE_KEY = "cookie-consent"

export function CookieConsent() {
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && !localStorage.getItem(STORAGE_KEY)
  )

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-50 bg-foreground text-background/90 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg"
    >
      <p className="text-sm leading-relaxed max-w-xl">
        Este site usa cookies para melhorar sua experiência. Ao continuar navegando, você concorda com o uso de cookies conforme nossa política de privacidade.
      </p>
      <div className="flex items-center gap-3 shrink-0">
        <Button
          size="sm"
          variant="secondary"
          onClick={accept}
          className="bg-background text-foreground hover:bg-background/90"
        >
          Aceitar
        </Button>
        <button
          onClick={accept}
          aria-label="Fechar aviso de cookies"
          className="text-background/60 hover:text-background transition-colors"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  )
}
