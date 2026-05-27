import { NextResponse } from 'next/server';

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function getRateLimit(ip: string): { allowed: boolean } {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 Stunde
  const maxRequests = 3;

  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return { allowed: true };
  }

  if (record.count >= maxRequests) {
    return { allowed: false };
  }

  record.count += 1;
  return { allowed: true };
}

export async function POST(req: Request) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    '127.0.0.1';

  const { allowed } = getRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: 'Zu viele Anfragen. Bitte versuche es später erneut.' },
      { status: 429 }
    );
  }

  const { email, name } = await req.json();

  if (!email) {
    return NextResponse.json(
      { error: 'E-Mail ist Pflichtfeld' },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: 'Ungültige E-Mail Adresse' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        email,
        attributes: { FIRSTNAME: name || '' },
        listIds: [3],
        updateEnabled: true,
      }),
    });

    console.log('Status:', response.status);

    const responseText = await response.text();
    console.log('Response:', responseText);

    if (response.status === 204 || response.status === 201) {
      return NextResponse.json({ success: true });
    }

    if (!response.ok) {
      let errorData: { code?: string; message?: string };
      try {
        errorData = JSON.parse(responseText);
      } catch {
        errorData = { message: responseText };
      }

      if (errorData.code === 'duplicate_parameter') {
        return NextResponse.json({ success: true, existing: true });
      }

      return NextResponse.json(
        { error: errorData.message || responseText },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Newsletter Error:', err);
    return NextResponse.json(
      { error: String(err) },
      { status: 500 }
    );
  }
}
