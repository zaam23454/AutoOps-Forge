import { NextResponse } from "next/server";
import { deliverContactSubmission } from "@/lib/contactSubmit";
import { validateContactPayload } from "@/lib/contactSchema";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request payload." },
      { status: 400 }
    );
  }

  const validation = validateContactPayload(payload);

  if (!validation.ok) {
    return NextResponse.json(
      {
        ok: false,
        message: validation.spam
          ? "Submission rejected."
          : "Please review the highlighted fields.",
        errors: validation.errors
      },
      { status: validation.spam ? 400 : 422 }
    );
  }

  const delivery = await deliverContactSubmission(
    validation.data,
    request.headers.get("user-agent") || "unknown"
  );

  if (!delivery.ok) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Something went wrong while submitting your request. Please try again or contact us directly via WhatsApp or email."
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Thanks - your request has been submitted successfully. I'll get back to you soon."
  });
}
