import { NextResponse } from "next/server";
import { validateContact } from "@/lib/validateContact";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 },
    );
  }

  const result = validateContact(body as Record<string, unknown>);
  if (!result.ok) {
    // Honeypot: pretend success so bots don't learn anything.
    if (result.error === "spam_detected") {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(result, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "andrew.radulescu@wearetribus.com";

  // Graceful no-op when email isn't configured yet.
  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY not set — message received but not emailed:",
      result.data,
    );
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Tribus Website <onboarding@resend.dev>",
        to: [to],
        reply_to: result.data.email,
        subject: `New enquiry from ${result.data.name}`,
        text: `From: ${result.data.name} <${result.data.email}>\n\n${result.data.message}`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[contact] Resend error:", res.status, detail);
      return NextResponse.json(
        { ok: false, error: "send_failed" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "send_failed" },
      { status: 500 },
    );
  }
}
