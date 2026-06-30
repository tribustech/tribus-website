import { buildLlmsTxt } from "@/lib/llms";

// Served at /llms.txt — concise, link-first index for AI agents (llmstxt.org).
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
