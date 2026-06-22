"use server"

import { contactSchema } from "@/lib/contact-schema"

export type ContactActionResult =
  | { success: true }
  | { success: false; errors: Record<string, string[]> }

export async function submitContact(
  _prev: ContactActionResult | null,
  formData: FormData
): Promise<ContactActionResult> {
  const raw = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    message: formData.get("message"),
    preference: formData.get("preference"),
  }

  const parsed = contactSchema.safeParse(raw)

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    }
  }

  // Wire to an email service (e.g. Resend) by adding RESEND_API_KEY to .env.local
  // and replacing the console.log below with the send call.
  console.log("[Contact form]", parsed.data)

  return { success: true }
}
