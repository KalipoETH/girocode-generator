import type { Metadata } from 'next';
import { SeoContentLanding, seoAlternates } from '../../components/SeoContentLanding';

const SLUG = 'sepa-qr-pflicht';

export const metadata: Metadata = {
  title: 'SEPA QR Code Pflicht auf Rechnungen – ViDA 2026-2030',
  description:
    'SEPA QR Codes werden EU-weit Pflicht auf Rechnungen. Slowenien: bereits Pflicht. Deutschland/Frankreich: 2026-2028. Alle EU-Länder bis 2030. Jetzt kostenlos vorbereiten.',
  alternates: seoAlternates(SLUG, 'de'),
};

export default function SepaQrPflichtPage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        locale: 'de',
        breadcrumbLabel: 'SEPA QR Pflicht',
        badge: 'ViDA · EU-Verordnung · 2026',
        h1: 'SEPA QR Code wird Pflicht – Was du jetzt wissen musst',
        shortAnswer:
          'Die EU-Initiative ViDA (Mehrwertsteuer im digitalen Zeitalter) macht SEPA QR Codes auf Geschäftsrechnungen EU-weit Pflicht. Slowenien hat die Pflicht bereits eingeführt. Deutschland und Frankreich folgen 2026-2028. Alle anderen EU-Länder bis 2030. Einen konformen EPC QR Code erstellen ist kostenlos und dauert 10 Sekunden.',
        stats: [
          { value: '2024', label: 'Slowenien: bereits Pflicht' },
          { value: '2026-28', label: 'Deutschland & Frankreich' },
          { value: '2030', label: 'Alle EU-Länder (ViDA)' },
          { value: 'Kostenlos', label: 'EPC QR erstellen' },
        ],
        body: (
          <>
            <h2>Welche Länder – wann?</h2>
            <div className="not-prose overflow-x-auto">
              <table className="w-full min-w-[400px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#1f2431] text-left text-slate-300">
                    <th className="py-3 pr-4 font-semibold">Land</th>
                    <th className="py-3 pr-4 font-semibold">Pflicht ab</th>
                    <th className="py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-[#1f2431]">
                    <td className="py-3 pr-4 font-medium text-slate-300">Slowenien</td>
                    <td className="py-3 pr-4">2024</td>
                    <td className="py-3">✅ Bereits Pflicht</td>
                  </tr>
                  <tr className="border-b border-[#1f2431]">
                    <td className="py-3 pr-4 font-medium text-slate-300">Deutschland</td>
                    <td className="py-3 pr-4">2026-2028</td>
                    <td className="py-3">🔜 Demnächst</td>
                  </tr>
                  <tr className="border-b border-[#1f2431]">
                    <td className="py-3 pr-4 font-medium text-slate-300">Frankreich</td>
                    <td className="py-3 pr-4">2026-2028</td>
                    <td className="py-3">🔜 Demnächst</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-300">Alle EU-Länder</td>
                    <td className="py-3 pr-4">2030</td>
                    <td className="py-3">📅 ViDA-Frist</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Bereite dich jetzt vor: Füge EPC QR Codes (GiroCodes) auf deinen Rechnungen hinzu.
              Unser kostenloser Generator erstellt konforme EPC069-12 Codes in Sekunden.
            </p>
          </>
        ),
        faqs: [
          {
            q: 'Wird der SEPA QR Code auf Rechnungen Pflicht?',
            a: 'Ja, durch die EU-Initiative ViDA. Slowenien hat die Pflicht bereits. Deutschland und Frankreich folgen 2026-2028. Alle EU-Länder bis 2030.',
          },
          {
            q: 'Wann wird der GiroCode in Deutschland Pflicht?',
            a: 'Deutschland wird voraussichtlich zwischen 2026 und 2028 SEPA QR Codes auf Geschäftsrechnungen verpflichtend einführen.',
          },
          {
            q: 'Wie erstelle ich einen konformen EPC QR Code?',
            a: 'Nutze girocodegenerator.com: IBAN, Name, Betrag und Verwendungszweck eingeben – kostenlos, ohne Anmeldung, 100% lokal im Browser.',
          },
        ],
        ctas: [{ href: '/', label: 'Konformen EPC QR Code jetzt erstellen →' }],
        relatedLinks: [
          { href: '/wissen/rechnung', label: 'GiroCode auf Rechnungen' },
          { href: '/en/mandatory-sepa-qr-invoice', label: 'Mandatory SEPA QR (EN)' },
        ],
      }}
    />
  );
}
