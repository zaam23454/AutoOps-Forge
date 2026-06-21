import type { ValidContactSubmission } from "./contactSchema";

export async function sendToGoogleSheets(
  submission: ValidContactSubmission,
  userAgent: string
) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn("GOOGLE_SHEETS_WEBHOOK_URL is not configured. Skipping Sheets capture.");
    return { ok: false, skipped: true, target: "google-sheets" as const };
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...submission,
      userAgent,
      source: "AutoOps Forge Website"
    })
  });

  if (!response.ok) {
    throw new Error(`Google Sheets webhook failed with status ${response.status}`);
  }

  return { ok: true, skipped: false, target: "google-sheets" as const };
}
