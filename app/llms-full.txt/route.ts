import { buildLlmsFullTxt } from "@/lib/llms";

// Served at /llms-full.txt — full site content inlined for AI ingestion.
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsFullTxt(), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
