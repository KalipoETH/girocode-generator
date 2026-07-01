import type { Metadata } from 'next';
import Link from 'next/link';
import { SeoContentLanding } from '@/components/SeoContentLanding';
import { SITE_URL } from '@/lib/siteConfig';

const SLUG = 'sepa-qr-pflicht';

const alternateUrls = {
  de: `${SITE_URL}/${SLUG}`,
  en: `${SITE_URL}/en/mandatory-sepa-qr-invoice`,
  es: `${SITE_URL}/es/factura-electronica-qr-obligatorio`,
  fr: `${SITE_URL}/fr/facture-electronique-qr-obligatoire`,
};

export const metadata: Metadata = {
  title: 'Wird der SEPA QR Code Pflicht? Der Fakten-Check (2026)',
  description:
    'Wird der SEPA/EPC QR Code auf Rechnungen gesetzlich Pflicht? Der aktuelle Stand zu ViDA, Slowenien und der echten deutschen E-Rechnungspflicht – ehrlich erklärt.',
  alternates: {
    canonical: alternateUrls.de,
    languages: {
      'x-default': alternateUrls.de,
      ...alternateUrls,
    },
  },
};

export default function SepaQrPflichtPage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        locale: 'de',
        breadcrumbLabel: 'SEPA QR Pflicht – Fakten-Check',
        badge: 'Fakten-Check · ViDA & SEPA-QR',
        h1: 'Wird der SEPA QR Code Pflicht? Der aktuelle Stand (2026)',
        shortAnswer:
          'Nein. Weder ViDA noch eine andere EU-Regel schreibt aktuell einen Zahlungs-QR-Code (SEPA-QR/EPC-QR) auf Rechnungen vor. Was es gibt: eine wachsende freiwillige Nutzung – sowie eine echte, aber völlig andere deutsche Pflicht: die E-Rechnungspflicht für das Rechnungsformat (XRechnung/ZUGFeRD, 2025–2028).',
        stats: [
          { value: 'Keine bekannt', label: 'EU-Gesetze zur QR-Zahlungscode-Pflicht' },
          { value: '2016', label: 'Slowenien: ZDavPR (Fiskalisierung, kein QR)' },
          { value: '2030', label: 'ViDA E-Rechnungs-Frist (XML, kein QR)' },
          { value: 'Freiwillig', label: 'SEPA-QR/GiroCode-Nutzung heute' },
        ],
        body: (
          <>
            <h2>Was oft behauptet wird – und was tatsächlich gilt</h2>
            <div className="not-prose overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#1f2431] text-left text-slate-300">
                    <th className="py-3 pr-4 font-semibold">Oft behauptet</th>
                    <th className="py-3 font-semibold">Tatsächlich gilt</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-[#1f2431]">
                    <td className="py-3 pr-4 font-medium text-slate-300">
                      „ViDA macht SEPA-QR-Codes auf Rechnungen EU-weit Pflicht“
                    </td>
                    <td className="py-3">
                      ViDA schreibt strukturierte E-Rechnungen (XML nach EN&nbsp;16931) für
                      grenzüberschreitende B2B-Rechnungen ab 1.7.2030 vor. Einen
                      Zahlungs-QR-Code erwähnt die Verordnung nirgends.
                    </td>
                  </tr>
                  <tr className="border-b border-[#1f2431]">
                    <td className="py-3 pr-4 font-medium text-slate-300">
                      „Slowenien hat die SEPA-QR-Pflicht bereits seit 2024“
                    </td>
                    <td className="py-3">
                      Die slowenische Norm ZDavPR gilt bereits seit 2016 und regelt die
                      steuerliche Meldung (Fiskalisierung) von Rechnungen – nicht die
                      Pflicht zu einem Zahlungs-QR-Code.
                    </td>
                  </tr>
                  <tr className="border-b border-[#1f2431]">
                    <td className="py-3 pr-4 font-medium text-slate-300">
                      „Deutschland und Frankreich führen die SEPA-QR-Pflicht 2026–2028 ein“
                    </td>
                    <td className="py-3">
                      Für eine QR-Zahlungscode-Pflicht ist keine gesetzliche Grundlage
                      bekannt. Deutschland und Frankreich haben allerdings beide eine echte,
                      aber andere Pflicht: Deutschland verlangt die{' '}
                      <Link
                        href="/wissen/rechnung"
                        className="text-sky-400 underline hover:text-sky-300"
                      >
                        E-Rechnungspflicht für das Rechnungsformat
                      </Link>{' '}
                      (XRechnung/ZUGFeRD, 2025–2028). Frankreich führt ab September 2026 die
                      Empfangspflicht für E-Rechnungen für alle Unternehmen ein, mit
                      Ausstellungspflicht für große und mittelgroße Unternehmen (Format
                      Factur-X, UBL 2.1 oder CII, EN&nbsp;16931-konform) – ab September 2027
                      auch für KMU und Kleinstunternehmen (Art. 153 Loi de Finances 2020,
                      DGFiP).
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-300">
                      „Alle EU-Länder müssen SEPA-QR-Codes bis 2030 einführen“
                    </td>
                    <td className="py-3">
                      Die 2030-Frist bei ViDA betrifft das E-Rechnungs<em>format</em> (XML),
                      nicht Zahlungs-QR-Codes.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Auch ohne gesetzliche Pflicht sparen SEPA-QR-Codes (GiroCodes) Zeit: Der
              Empfänger scannt den Code mit der Banking-App, statt IBAN und Betrag
              abzutippen. Deshalb setzen immer mehr Rechnungssteller freiwillig darauf –
              unabhängig von einer Rechtspflicht.
            </p>
          </>
        ),
        faqs: [
          {
            q: 'Wird der SEPA QR Code auf Rechnungen Pflicht?',
            a: 'Nach aktuellem Stand nein. Die EU-Initiative ViDA regelt strukturierte E-Rechnungsformate (XML nach EN 16931), nicht Zahlungs-QR-Codes. Auch die oft zitierte „Pflicht seit 2024" in Slowenien betrifft ein anderes Gesetz (ZDavPR, Fiskalisierung) und keine QR-Code-Vorschrift.',
          },
          {
            q: 'Was ist dann mit der deutschen E-Rechnungspflicht?',
            a: 'Das ist ein separates, echtes Thema: Deutschland verlangt ab 2025-2028 schrittweise strukturierte E-Rechnungen im Format XRechnung oder ZUGFeRD. Das betrifft das Rechnungsformat, nicht einen Zahlungs-QR-Code. Details dazu in unserem Leitfaden „GiroCode auf Rechnungen".',
          },
          {
            q: 'Wie erstelle ich einen konformen EPC QR Code?',
            a: 'Nutze girocodegenerator.com: IBAN, Name, Betrag und Verwendungszweck eingeben – kostenlos, ohne Anmeldung, 100% lokal im Browser.',
          },
        ],
        ctas: [{ href: '/', label: 'SEPA-QR-Code jetzt kostenlos erstellen →' }],
        relatedLinks: [
          { href: '/wissen/rechnung', label: 'GiroCode auf Rechnungen & E-Rechnungspflicht' },
          { href: '/en/mandatory-sepa-qr-invoice', label: 'English version' },
          { href: '/es/factura-electronica-qr-obligatorio', label: 'Versión en español' },
          { href: '/fr/facture-electronique-qr-obligatoire', label: 'Version française' },
        ],
      }}
    />
  );
}
