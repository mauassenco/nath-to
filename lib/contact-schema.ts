import { z } from "zod"

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Informe seu nome completo.")
    .max(100),
  phone: z
    .string()
    .min(10, "Informe um número de telefone ou WhatsApp válido.")
    .max(20)
    .regex(/^[\d\s()\-+]+$/, "Apenas números e caracteres válidos."),
  email: z
    .string()
    .email("Informe um e-mail válido.")
    .max(200),
  message: z
    .string()
    .min(10, "Escreva uma mensagem com pelo menos 10 caracteres.")
    .max(2000),
  preference: z.enum(["whatsapp", "email", "ligacao"], {
    error: "Selecione uma preferência de contato.",
  }),
})

export type ContactFormData = z.infer<typeof contactSchema>
