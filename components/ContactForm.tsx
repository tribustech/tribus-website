"use client";

import { useState } from "react";
import { site } from "@/content/site";

type Status = "idle" | "submitting" | "success" | "error";

const ERROR_COPY: Record<string, string> = {
  invalid_name: "Please enter your name.",
  invalid_email: "That email address looks off.",
  invalid_message: "Tell us a little more (at least a sentence).",
  not_configured:
    "Thanks! Email isn't wired up yet — please reach us directly at " +
    site.email +
    ".",
  send_failed: "Something went wrong sending that. Please email us directly.",
  network: "Network hiccup — please try again.",
};

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (json.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(json.error ?? "send_failed");
      }
    } catch {
      setStatus("error");
      setError("network");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[var(--radius-xl2)] border border-teal/30 bg-teal/10 p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal text-2xl text-white">
          ✓
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-ink">
          Message sent — thank you!
        </h3>
        <p className="mt-2 text-ink-soft">
          We&apos;ll get back to you shortly. Talk soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <Field label="Your name" htmlFor="name">
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="input"
          placeholder="Jane Doe"
        />
      </Field>

      <Field label="Email" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="input"
          placeholder="jane@company.com"
        />
      </Field>

      <Field label="What are you building?" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="input resize-none"
          placeholder="Tell us about your project, timeline and goals…"
        />
      </Field>

      {status === "error" && error && (
        <p
          className="rounded-xl bg-coral/10 px-4 py-3 text-sm font-medium text-coral"
          role="alert"
        >
          {ERROR_COPY[error] ?? ERROR_COPY.send_failed}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-full bg-ink px-7 py-4 text-base font-semibold text-paper transition-all hover:bg-teal-ink disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.9rem;
          border: 1px solid color-mix(in oklab, var(--color-ink) 14%, transparent);
          background: #fff;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          color: var(--color-ink);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input::placeholder { color: color-mix(in oklab, var(--color-ink) 38%, transparent); }
        .input:focus {
          outline: none;
          border-color: var(--color-teal);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-teal) 22%, transparent);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-semibold text-ink"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
