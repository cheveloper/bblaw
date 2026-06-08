import { NextResponse } from "next/server";

export const runtime = "nodejs";

type BookingPayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  date?: string;
  time?: string;
  comment?: string;
  lang?: "ru" | "en";
};

const NOTARY_EMAIL = process.env.NOTARY_EMAIL || "toyganbaeva760@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Notary Website <onboarding@resend.dev>";

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildEmailHtml(b: Required<Pick<BookingPayload, "name" | "phone">> & BookingPayload): string {
  const row = (label: string, value?: string) =>
    value
      ? `<tr>
           <td style="padding:10px 0;color:#6B6358;font-size:13px;width:160px;vertical-align:top;font-family:Arial,sans-serif;">${escapeHtml(label)}</td>
           <td style="padding:10px 0;color:#1A1814;font-size:15px;font-weight:600;font-family:Arial,sans-serif;">${escapeHtml(value)}</td>
         </tr>`
      : "";

  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#F7F4EE;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F7F4EE;padding:32px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #E4DBCB;max-width:600px;width:100%;">
            <tr>
              <td style="background:#1A1814;padding:28px 32px;">
                <div style="color:#C9A961;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-family:Arial,sans-serif;">Новая заявка · New booking request</div>
                <div style="color:#F7F4EE;font-size:22px;font-weight:700;margin-top:6px;font-family:Georgia,serif;">Запись на приём к нотариусу</div>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${row("Имя / Name", b.name)}
                  ${row("Телефон / Phone", b.phone)}
                  ${row("Email", b.email)}
                  ${row("Услуга / Service", b.service)}
                  ${row("Дата / Date", b.date)}
                  ${row("Время / Time", b.time)}
                  ${row("Комментарий / Comment", b.comment)}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 28px;">
                <a href="tel:${escapeHtml(b.phone)}" style="display:inline-block;background:#1A1814;color:#F7F4EE;text-decoration:none;padding:12px 22px;border-radius:999px;font-size:14px;font-family:Arial,sans-serif;">Позвонить клиенту</a>
                ${
                  b.phone
                    ? `<a href="https://wa.me/${escapeHtml(b.phone.replace(/[^0-9]/g, ""))}" style="display:inline-block;background:#1F7A4D;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:999px;font-size:14px;margin-left:8px;font-family:Arial,sans-serif;">WhatsApp</a>`
                    : ""
                }
              </td>
            </tr>
            <tr>
              <td style="background:#F7F4EE;padding:18px 32px;border-top:1px solid #E4DBCB;">
                <div style="color:#6B6358;font-size:12px;font-family:Arial,sans-serif;">Заявка отправлена с сайта нотариуса · Sent from the notary website</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function POST(request: Request) {
  let body: BookingPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim();
  const email = (body.email || "").trim();
  const service = (body.service || "").trim();

  // Server-side validation
  if (!name) return NextResponse.json({ ok: false, error: "name" }, { status: 422 });
  if (!phone || phone.replace(/[^0-9]/g, "").length < 7)
    return NextResponse.json({ ok: false, error: "phone" }, { status: 422 });
  if (email && !isValidEmail(email))
    return NextResponse.json({ ok: false, error: "email" }, { status: 422 });

  const apiKey = process.env.RESEND_API_KEY;

  // Graceful fallback: if email isn't configured yet, don't fail the lead.
  // The client still has the WhatsApp path; we report a soft success so the
  // booking experience never breaks in dev/preview without keys.
  if (!apiKey) {
    console.warn("[booking] RESEND_API_KEY not set — skipping email send.");
    return NextResponse.json({ ok: true, emailed: false });
  }

  const html = buildEmailHtml({ name, phone, email, service, date: body.date, time: body.time, comment: body.comment });
  const subject = `Новая заявка: ${name}${service ? ` — ${service}` : ""}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [NOTARY_EMAIL],
        reply_to: email || undefined,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[booking] Resend error:", res.status, detail);
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, emailed: true });
  } catch (err) {
    console.error("[booking] Network error:", err);
    return NextResponse.json({ ok: false, error: "network" }, { status: 502 });
  }
}
