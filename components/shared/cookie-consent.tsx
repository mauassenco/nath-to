"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "@phosphor-icons/react"

const STORAGE_KEY = "cookie-consent"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const acceptRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true)
    }
  }, [])

  useEffect(() => {
    if (visible) {
      acceptRef.current?.focus()
    }
  }, [visible])

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted")
    setVisible(false)
  }

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "dismissed")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="glass-primary fixed right-0 bottom-0 left-0 z-50 flex flex-col items-start justify-between gap-4 px-6 py-4 text-primary-foreground sm:flex-row sm:items-center"
    >
      <div className="max-w-xl">
        <p id="cookie-consent-title" className="sr-only">
          Aviso de cookies
        </p>
        <p
          id="cookie-consent-description"
          className="text-sm leading-relaxed"
        >
          Este site usa cookies para melhorar sua experiência. Ao continuar
          navegando, você concorda com o uso de cookies conforme nossa{" "}
          <Link
            href="/contato"
            className="underline underline-offset-2 hover:text-primary-foreground/90"
          >
            política de privacidade
          </Link>
          .
        </p>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <Button
          ref={acceptRef}
          size="sm"
          variant="inverse"
          onClick={accept}
        >
          Aceitar
        </Button>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Fechar aviso de cookies"
          className="flex min-h-11 min-w-11 items-center justify-center text-primary-foreground/60 transition-colors hover:text-primary-foreground"
        >
          <X size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
