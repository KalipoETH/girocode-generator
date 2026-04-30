import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// ── In-Memory Rate Limiting ────────────────────────────────────────────────
const contactRateLimit = new Map<string, { count: number; resetTime: number }>();

function checkContactRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 Stunde
  const maxRequests = 5;

  const current = contactRateLimit.get(ip);

  if (!current || now > current.resetTime) {
    contactRateLimit.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (current.count >= maxRequests) {
    return false;
  }

  current.count++;
  return true;
}

// ── Route Handler ─────────────────────────────────────────────────────────
export async function POST(req: Request) {
  // IP ermitteln
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    '127.0.0.1';

  // Rate Limit prüfen
  if (!checkContactRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Zu viele Anfragen. Bitte versuche es in einer Stunde erneut.' },
      { status: 429, headers: { 'Retry-After': '3600' } }
    );
  }

  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Alle Felder sind pflicht.' },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: 'GiroCode Generator <kontakt@girocodegenerator.com>',
      to: 'jahnke.kaleb@gmail.com',
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'E-Mail konnte nicht gesendet werden.' },
      { status: 500 }
    );
  }
}
