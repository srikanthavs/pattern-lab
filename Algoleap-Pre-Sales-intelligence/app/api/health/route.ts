import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function GET() {
  const key = process.env.OPENAI_API_KEY;

  if (!key || key === "your-openai-api-key-here" || key.trim() === "") {
    return NextResponse.json({ status: "missing", message: "OPENAI_API_KEY is not set in .env.local" });
  }

  try {
    const client = new OpenAI({ apiKey: key });
    // Cheapest possible call: list models (no tokens consumed)
    await client.models.list();
    return NextResponse.json({ status: "ok", message: "API key is valid and connected" });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    const isAuthError =
      msg.includes("401") ||
      msg.includes("Incorrect API key") ||
      msg.includes("invalid_api_key");

    return NextResponse.json({
      status: isAuthError ? "invalid" : "error",
      message: isAuthError
        ? "API key is set but rejected by OpenAI (check for typos or revoked keys)"
        : `Connection error: ${msg}`,
    });
  }
}
