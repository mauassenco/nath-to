"use client"

import { useActionState, useEffect, useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema, type ContactFormData } from "@/lib/contact-schema"
import {
  submitContact,
  type ContactActionResult,
} from "@/app/actions/contact"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "@phosphor-icons/react"

export function ContactForm() {
  const [state, action, isServerPending] = useActionState<
    ContactActionResult | null,
    FormData
  >(submitContact, null)

  const [isTransitionPending, startTransition] = useTransition()

  const isPending = isServerPending || isTransitionPending

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData()
    Object.entries(data).forEach(([key, val]) => {
      if (val !== undefined) formData.append(key, String(val))
    })
    startTransition(() => {
      action(formData)
    })
  })

  useEffect(() => {
    if (state?.success === false && state.errors) {
      Object.entries(state.errors).forEach(([field, message]) => {
        setError(field as keyof ContactFormData, {
          type: "server",
          message: String(message),
        })
      })
    }
  }, [state, setError])

  if (state?.success) {
    return (
      <div className="flex flex-col items-center text-center py-12 gap-4">
        <CheckCircle
          size={48}
          className="text-primary"
          aria-hidden="true"
        />
        <h3 className="font-display text-2xl font-medium text-foreground">
          Mensagem enviada!
        </h3>
        <p className="text-muted-foreground">
          Obrigada pelo contato. Nathália retornará em breve pelo canal de sua
          preferência.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label htmlFor="name">Nome completo *</Label>
          <Input
            id="name"
            {...register("name")}
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p
              id="name-error"
              role="alert"
              className="text-sm text-destructive"
            >
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="phone">Telefone / WhatsApp</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p
              id="phone-error"
              role="alert"
              className="text-sm text-destructive"
            >
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">E-mail *</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p
            id="email-error"
            role="alert"
            className="text-sm text-destructive"
          >
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="preference">Preferência de contato *</Label>
        <select
          id="preference"
          {...register("preference")}
          aria-invalid={!!errors.preference}
          aria-describedby={
            errors.preference ? "preference-error" : undefined
          }
          className="flex h-9 w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:bg-input/30"
        >
          <option value="">Selecione...</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="email">E-mail</option>
          <option value="ligacao">Ligação</option>
        </select>
        {errors.preference && (
          <p
            id="preference-error"
            role="alert"
            className="text-sm text-destructive"
          >
            {errors.preference.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Mensagem *</Label>
        <Textarea
          id="message"
          {...register("message")}
          rows={5}
          placeholder="Conte brevemente o que está buscando..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p
            id="message-error"
            role="alert"
            className="text-sm text-destructive"
          >
            {errors.message.message}
          </p>
        )}
      </div>

      {state?.success === false && (
        <p role="alert" className="text-sm text-destructive">
          Verifique os campos acima e tente novamente.
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={isPending}
        className="w-full sm:w-auto"
      >
        {isPending ? "Enviando..." : "Enviar mensagem"}
      </Button>
    </form>
  )
}
