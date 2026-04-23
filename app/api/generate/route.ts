import { NextResponse } from 'next/server';
import QRCode from 'qrcode';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const name = searchParams.get('name');
  const iban = searchParams.get('iban')?.replace(/\s+/g, '').toUpperCase();
  const bic = searchParams.get('bic') || '';
  const betrag = searchParams.get('betrag') || '';
  const zweck = searchParams.get('zweck') || '';

  if (!name || !iban) {
    return NextResponse.json(
      { error: 'name und iban sind Pflichtfelder' },
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

  // EPC Payload generieren
  const amountStr = betrag ? 'EUR' + parseFloat(betrag).toFixed(2) : '';
  const epcPayload = [
    'BCD',
    '001',
    '1',
    'SCT',
    bic.trim(),
    name.trim().slice(0, 70),
    ibanClean,
    amountStr,
    '',
    '',
    zweck.trim().slice(0, 140),
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
      name,
      iban: ibanClean,
      bic: bic || null,
      betrag: betrag || null,
      zweck: zweck || null,
    },
  });
}
