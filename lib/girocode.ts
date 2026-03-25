export function sanitizeIBAN(raw: string): string {
  return raw.toUpperCase().replace(/\s+/g, '');
}

export function ibanIsValid(iban: string): boolean {
  iban = sanitizeIBAN(iban);
  if (iban.length < 15 || iban.length > 34) return false;
  const r = iban.slice(4) + iban.slice(0, 4);
  const ex = r.replace(/[A-Z]/g, (ch) => (ch.charCodeAt(0) - 55).toString());
  let rem = 0;
  for (const d of ex) {
    rem = (rem * 10 + +d) % 97;
  }
  return rem === 1;
}

/**
 * Formatiert einen Betrag als EUR-String mit genau zwei Dezimalstellen.
 * Beispiele:
 *  - 12        -> "12.00"
 *  - 12.5      -> "12.50"
 *  - "12,50"   -> "12.50"
 *  - " 012.5 " -> "12.50"
 */
export function toAmountEUR(value: number | string): string {
  if (typeof value === 'string') {
    const trimmed = value.trim().replace(',', '.');
    const parsed = Number(trimmed);
    if (!isFinite(parsed) || parsed < 0) {
      throw new Error('Ungültiger Betrag');
    }
    return parsed.toFixed(2);
  }

  if (!isFinite(value) || value < 0) {
    throw new Error('Ungültiger Betrag');
  }

  return value.toFixed(2);
}

export interface GiroCodeParams {
  name: string;
  iban: string;
  amount: number | string;
  purpose?: string;
  bic?: string;
}

/**
 * Erzeugt den EPC-/GiroCode-Payload.
 *
 * Zeilen:
 * 1: BCD
 * 2: 001
 * 3: 1
 * 4: SCT
 * 5: BIC (optional, sonst leer)
 * 6: Name
 * 7: IBAN
 * 8: EUR{betrag}
 * 9: (leer)
 * 10: (leer)
 * 11: Verwendungszweck
 */
export function buildEPC(params: GiroCodeParams): string {
  const ibanSanitized = sanitizeIBAN(params.iban);

  if (!ibanIsValid(ibanSanitized)) {
    throw new Error('Ungültige IBAN');
  }

  const amountStr = toAmountEUR(params.amount);
  const bic = (params.bic ?? '').trim().toUpperCase();
  const name = params.name.trim();
  const purpose = (params.purpose ?? '').trim().slice(0, 140);

  const lines = [
    'BCD',
    '001',
    '1',
    'SCT',
    bic,
    name,
    ibanSanitized,
    `EUR${amountStr}`,
    '',
    '',
    purpose,
  ];

  return lines.join('\n');
}

