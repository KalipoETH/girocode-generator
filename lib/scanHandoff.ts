// Übergabe der Scan-Ergebnisse vom Scanner an den Generator.
//
// Bewusst sessionStorage statt Query-Parametern: In der URL würden Zahldaten
// (Name, IBAN, BIC, Betrag, Verwendungszweck) in Browser-History,
// Referer-Header, Server-/Edge-Zugriffslogs und Analytics-Pageviews landen.

const KEY = 'scannedGiroCodeData';

export interface ScanHandoff {
  name: string;
  iban: string;
  bic: string;
  amount: string;
  purpose: string;
}

export function storeScanHandoff(data: ScanHandoff): void {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    // sessionStorage kann blockiert sein (z.B. manche Private-Modi).
    // Der Generator zeigt dann ein leeres Formular.
  }
}

// Liest die Übergabe und löscht sie im selben Zug: einmalige Verwendung.
export function takeScanHandoff(): ScanHandoff | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return null;
    sessionStorage.removeItem(KEY);

    const parsed = JSON.parse(raw) as Partial<ScanHandoff>;
    const str = (value: unknown) => (typeof value === 'string' ? value : '');

    return {
      name: str(parsed.name),
      iban: str(parsed.iban),
      bic: str(parsed.bic),
      amount: str(parsed.amount),
      purpose: str(parsed.purpose).slice(0, 140),
    };
  } catch {
    return null;
  }
}
