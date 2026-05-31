import { NextResponse } from "next/server";
import { BUSINESS } from "@/lib/constants";
import { validateQuote, type QuoteFields } from "@/lib/quote";

export const runtime = "nodejs";

/** Escape user input before embedding in the notification HTML email. */
function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Partial<QuoteFields>;
  try {
    body = (await request.json()) as Partial<QuoteFields>;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  // Honeypot: a real user never fills this. Silently accept and drop bots.
  if (body.company && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const data: QuoteFields = {
    name: (body.name ?? "").trim(),
    phone: (body.phone ?? "").trim(),
    email: (body.email ?? "").trim(),
    projectType: (body.projectType ?? "").trim(),
    message: (body.message ?? "").trim(),
  };

  const errors = validateQuote(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, message: "Please fix the highlighted fields.", errors },
      { status: 400 },
    );
  }

  const notifyTo = process.env.QUOTE_NOTIFY_EMAIL || BUSINESS.notifyEmail;
  const fromAddress = process.env.QUOTE_FROM_EMAIL || "onboarding@resend.dev";
  const apiKey = process.env.RESEND_API_KEY;

  const subject = `New quote request: ${data.projectType} — ${data.name}`;
  const html = `
    <h2>New free-estimate request</h2>
    <p><strong>Name:</strong> ${esc(data.name)}</p>
    <p><strong>Phone:</strong> ${esc(data.phone)}</p>
    <p><strong>Email:</strong> ${esc(data.email)}</p>
    <p><strong>Project type:</strong> ${esc(data.projectType)}</p>
    <p><strong>Message:</strong><br/>${esc(data.message).replace(/\n/g, "<br/>")}</p>
    <hr/>
    <p style="color:#64748b;font-size:12px">Sent from burdettcustomconcrete.com</p>
  `;
  const text = `New free-estimate request

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Project type: ${data.projectType}

Message:
${data.message}`;

  // If Resend isn't configured yet, log and succeed so the form works
  // before the API key is added (and the static build keeps passing).
  if (!apiKey) {
    console.info(
      "[quote] RESEND_API_KEY not set — submission received but not emailed:",
      { ...data, notifyTo },
    );
    return NextResponse.json({ ok: true });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `Burdett Quote Form <${fromAddress}>`,
      to: [notifyTo],
      replyTo: data.email,
      subject,
      html,
      text,
    });
    if (error) {
      console.error("[quote] Resend error:", error);
      return NextResponse.json(
        {
          ok: false,
          message:
            "We couldn't send your request automatically. Please call us instead.",
        },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[quote] Unexpected error:", err);
    return NextResponse.json(
      {
        ok: false,
        message:
          "Something went wrong. Please call us at " + BUSINESS.phone + ".",
      },
      { status: 500 },
    );
  }
}

/* ------------------------------------------------------------------------
 * Web3Forms fallback (if Resend setup is a hassle):
 * Replace the Resend block above with a POST to Web3Forms. Add your access
 * key as WEB3FORMS_ACCESS_KEY and uncomment:
 *
 * const res = await fetch("https://api.web3forms.com/submit", {
 *   method: "POST",
 *   headers: { "Content-Type": "application/json", Accept: "application/json" },
 *   body: JSON.stringify({
 *     access_key: process.env.WEB3FORMS_ACCESS_KEY,
 *     subject,
 *     from_name: "Burdett Quote Form",
 *     name: data.name, phone: data.phone, email: data.email,
 *     project_type: data.projectType, message: data.message,
 *   }),
 * });
 * if (!res.ok) { ...handle error... }
 * ---------------------------------------------------------------------- */
