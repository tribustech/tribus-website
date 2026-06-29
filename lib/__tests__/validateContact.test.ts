import { describe, it, expect } from "vitest";
import { validateContact } from "@/lib/validateContact";

const valid = {
  name: "Andrew",
  email: "andrew@wearetribus.com",
  message: "We would like to build a mobile app.",
};

describe("validateContact", () => {
  it("accepts a well-formed submission", () => {
    const r = validateContact(valid);
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.data.email).toBe("andrew@wearetribus.com");
  });

  it("trims whitespace on accepted fields", () => {
    const r = validateContact({ ...valid, name: "  Andrew  " });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.data.name).toBe("Andrew");
  });

  it("rejects a missing/short name", () => {
    expect(validateContact({ ...valid, name: "" })).toMatchObject({
      ok: false,
      error: "invalid_name",
    });
  });

  it("rejects a malformed email", () => {
    expect(validateContact({ ...valid, email: "nope" })).toMatchObject({
      ok: false,
      error: "invalid_email",
    });
  });

  it("rejects a too-short message", () => {
    expect(validateContact({ ...valid, message: "hi" })).toMatchObject({
      ok: false,
      error: "invalid_message",
    });
  });

  it("rejects when the honeypot is filled", () => {
    expect(validateContact({ ...valid, website: "http://spam" })).toMatchObject(
      { ok: false, error: "spam_detected" },
    );
  });
});
