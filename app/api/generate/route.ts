import { NextResponse } from 'next/server';
import QRCode from 'qrcode';

// ── In-Memory Rate Limiting ────────────────────────────────────────────────
const rateLimit = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 Minute
  const maxRequests = 30;

  const current = rateLimit.get(ip);

  if (!current || now > current.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (current.count >= maxRequests) {
    return false;
  }

  current.count++;
  return true;
}

// ── XSS Prevention ────────────────────────────────────────────────────────
function sanitize(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// ── Route Handler ─────────────────────────────────────────────────────────
export async function GET(req: Request) {
  // IP ermitteln
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    '127.0.0.1';

  // Rate Limit prüfen
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Zu viele Anfragen. Bitte warte eine Minute.' },
      { status: 429, headers: { 'Retry-After': '60' } }
    );
  }

  const { searchParams } = new URL(req.url);

  const name = searchParams.get('name') ?? '';
  const iban = (searchParams.get('iban') ?? '').replace(/\s+/g, '').toUpperCase();
  const bic = searchParams.get('bic') ?? '';
  const betrag = searchParams.get('betrag') ?? '';
  const zweck = searchParams.get('zweck') ?? '';

  // Pflichtfelder
  if (!name || !iban) {
    return NextResponse.json(
      { error: 'name und iban sind Pflichtfelder' },
      { status: 400 }
    );
  }

  // Maximale Längen
  if (name.length > 70) {
    return NextResponse.json(
      { error: 'Name darf maximal 70 Zeichen haben' },
      { status: 400 }
    );
  }

  if (iban.length > 34) {
    return NextResponse.json(
      { error: 'Ungültige IBAN' },
      { status: 400 }
    );
  }

  if (zweck && zweck.length > 140) {
    return NextResponse.json(
      { error: 'Verwendungszweck darf maximal 140 Zeichen haben' },
      { status: 400 }
    );
  }

  if (betrag && !/^\d+(\.\d{1,2})?$/.test(betrag)) {
    return NextResponse.json(
      { error: 'Ungültiges Betragsformat (Beispiel: 49.90)' },
      { status: 400 }
    );
  }

  // IBAN Mod-97 Validierung
  const ibanClean = iban.replace(/\s+/g, '');
  const rearranged = ibanClean.slice(4) + ibanClean.slice(0, 4);
  const numeric = rearranged.replace(/[A-Z]/g, (ch) =>
    (ch.charCodeAt(0) - 55).toString()
  );
  let remainder = 0;
  for (const digit of numeric) {
    remainder = (remainder * 10 + parseInt(digit)) % 97;
  }
  if (remainder !== 1) {
    return NextResponse.json(
      { error: 'Ungültige IBAN (Mod-97 Prüfung fehlgeschlagen)' },
      { status: 400 }
    );
  }

  // Eingaben sanitizen
  const safeName = sanitize(name.trim());
  const safeZweck = zweck ? sanitize(zweck.trim()) : '';

  // EPC Payload generieren
  const amountStr = betrag ? 'EUR' + parseFloat(betrag).toFixed(2) : '';
  const epcPayload = [
    'BCD',
    '001',
    '1',
    'SCT',
    bic.trim(),
    safeName.slice(0, 70),
    ibanClean,
    amountStr,
    '',
    '',
    safeZweck.slice(0, 140),
  ].join('\n');

  // QR-Code als Base64 generieren
  const qrBase64 = await QRCode.toDataURL(epcPayload, {
    errorCorrectionLevel: 'M',
    width: 300,
    margin: 2,
  });

  return NextResponse.json({
    success: true,
    qr_base64: qrBase64,
    epc_payload: epcPayload,
    data: {
      name: safeName,
      iban: ibanClean,
      bic: bic || null,
      betrag: betrag || null,
      zweck: safeZweck || null,
    },
  });
}
