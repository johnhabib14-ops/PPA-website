"use server";

/**
 * DEVELOPER / LAUNCH NOTE:
 * This form is NOT operational until delivery is configured. Set ONE of:
 *   1. CONTACT_WEBHOOK_URL  (POSTs the inquiry as JSON), or
 *   2. RESEND_API_KEY + CONTACT_EMAIL_TO + CONTACT_EMAIL_FROM  (emails via Resend,
 *      which requires a signed BAA before transmitting any PHI).
 * With none set, the handler intentionally returns a "not fully configured"
 * message so the UI never implies submissions are being received. See .env.example.
 */

import type { ContactState } from "@/lib/contact-form-state";

function isNonEmpty(s: string): boolean {
  return s.trim().length > 0;
}

function isEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function formatEmailBody(values: Record<string, string>): string {
  return [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "(not provided)"}`,
    `Preferred service: ${values.preferredService}`,
    "",
    "Short message:",
    values.message,
  ].join("\n");
}

const ALLOWED_SERVICE = new Set(["unsure", "assessment", "therapy", "other"]);

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const honeypot = String(formData.get("company") ?? "").trim();
  if (honeypot.length > 0) {
    return { ok: true, message: "Thank you. Our office will contact you soon." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const preferredService = String(formData.get("preferredService") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: Record<string, string> = {};
  if (!isNonEmpty(name)) fieldErrors.name = "Please enter your name.";
  if (!isNonEmpty(email)) fieldErrors.email = "Please enter your email.";
  else if (!isEmail(email)) fieldErrors.email = "Please enter a valid email address.";
  if (!preferredService || !ALLOWED_SERVICE.has(preferredService)) {
    fieldErrors.preferredService = "Please select a preferred service.";
  }
  if (!isNonEmpty(message)) fieldErrors.message = "Please enter a short message.";
  if (message.length > 2000) fieldErrors.message = "Please shorten your message (2,000 characters max).";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      message: "Please correct the errors below.",
      fieldErrors,
    };
  }

  const payload = { name, email, phone, preferredService, message };

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "ppa-website-contact",
          submittedAt: new Date().toISOString(),
          ...payload,
        }),
      });
      if (!res.ok) {
        return {
          ok: false,
          message: "We could not send your message. Please call the office or try again later.",
        };
      }
    } catch {
      return {
        ok: false,
        message: "We could not send your message. Please call the office or try again later.",
      };
    }
    return { ok: true, message: "Thank you. Our office will contact you soon." };
  }

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.CONTACT_EMAIL_FROM;
  if (resendKey && to && from) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject: `Website inquiry: ${name}`,
          text: formatEmailBody({ ...payload, preferredService }),
        }),
      });
      if (!res.ok) {
        return {
          ok: false,
          message: "We could not send your message. Please call the office or try again later.",
        };
      }
    } catch {
      return {
        ok: false,
        message: "We could not send your message. Please call the office or try again later.",
      };
    }
    return { ok: true, message: "Thank you. Our office will contact you soon." };
  }

  return {
    ok: false,
    message:
      "The contact form is not fully configured yet. Please call or email the office using the information on this page.",
  };
}
