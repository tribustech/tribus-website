export interface ContactInput {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  /** Honeypot — must be empty for a real submission. */
  website?: unknown;
}

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

export type ValidationResult =
  | { ok: true; data: ContactData }
  | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(input: ContactInput): ValidationResult {
  // Honeypot filled → treat as spam.
  if (typeof input.website === "string" && input.website.trim() !== "") {
    return { ok: false, error: "spam_detected" };
  }

  const name = typeof input.name === "string" ? input.name.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim() : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";

  if (name.length < 2) return { ok: false, error: "invalid_name" };
  if (!EMAIL_RE.test(email)) return { ok: false, error: "invalid_email" };
  if (message.length < 10) return { ok: false, error: "invalid_message" };

  return { ok: true, data: { name, email, message } };
}
