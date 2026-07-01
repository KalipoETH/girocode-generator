import type { Metadata } from 'next';
import Link from 'next/link';
import { SeoContentLanding } from '@/components/SeoContentLanding';
import { SITE_URL } from '@/lib/siteConfig';

const SLUG = 'factura-electronica-qr-obligatorio';

const alternateUrls = {
  de: `${SITE_URL}/sepa-qr-pflicht`,
  en: `${SITE_URL}/en/mandatory-sepa-qr-invoice`,
  es: `${SITE_URL}/es/${SLUG}`,
  fr: `${SITE_URL}/fr/facture-electronique-qr-obligatoire`,
};

export const metadata: Metadata = {
  title: '¿Es obligatorio el código QR SEPA? La situación real (2026)',
  description:
    '¿Es obligatorio por ley el código QR SEPA/EPC en las facturas? La situación real sobre ViDA, Eslovenia y la obligación alemana de factura electrónica – explicado con honestidad.',
  alternates: {
    canonical: alternateUrls.es,
    languages: {
      'x-default': alternateUrls.es,
      ...alternateUrls,
    },
  },
};

export default function FacturaElectronicaQrObligatorioPage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        locale: 'es',
        breadcrumbLabel: 'QR SEPA obligatorio – Verificación',
        badge: 'Verificación de hechos · ViDA y QR SEPA',
        h1: '¿Es obligatorio el código QR SEPA en las facturas? La situación real (2026)',
        shortAnswer:
          'No. Ni ViDA ni ninguna otra norma de la UE obliga actualmente a incluir un código QR de pago (SEPA-QR/EPC-QR) en las facturas. Lo que sí existe: una adopción voluntaria cada vez mayor, además de una obligación real pero completamente distinta en Alemania: la obligación de factura electrónica para el propio formato de la factura (XRechnung/ZUGFeRD, 2025-2028).',
        stats: [
          { value: 'Ninguna conocida', label: 'Leyes de la UE que obliguen al QR de pago' },
          { value: '2016', label: 'Eslovenia: ZDavPR (fiscalización, no QR)' },
          { value: '2030', label: 'Plazo ViDA de factura electrónica (XML, no QR)' },
          { value: 'Voluntario', label: 'Uso actual del QR SEPA/GiroCode' },
        ],
        body: (
          <>
            <h2>Lo que se afirma a menudo – y lo que realmente aplica</h2>
            <div className="not-prose overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#1f2431] text-left text-slate-300">
                    <th className="py-3 pr-4 font-semibold">Se afirma a menudo</th>
                    <th className="py-3 font-semibold">Lo que realmente aplica</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-[#1f2431]">
                    <td className="py-3 pr-4 font-medium text-slate-300">
                      «ViDA obliga a incluir códigos QR SEPA en las facturas en toda la UE»
                    </td>
                    <td className="py-3">
                      ViDA exige facturas electrónicas estructuradas (XML según EN&nbsp;16931)
                      para operaciones B2B transfronterizas a partir del 1.7.2030. La
                      normativa no menciona en ningún punto un código QR de pago.
                    </td>
                  </tr>
                  <tr className="border-b border-[#1f2431]">
                    <td className="py-3 pr-4 font-medium text-slate-300">
                      «Eslovenia exige el QR SEPA desde 2024»
                    </td>
                    <td className="py-3">
                      La norma eslovena real es la ZDavPR, vigente ya desde 2016, y regula
                      la comunicación fiscal (fiscalización) de facturas – no una obligación
                      de código QR de pago.
                    </td>
                  </tr>
                  <tr className="border-b border-[#1f2431]">
                    <td className="py-3 pr-4 font-medium text-slate-300">
                      «Alemania y Francia introducirán el QR SEPA obligatorio entre
                      2026 y 2030»
                    </td>
                    <td className="py-3">
                      No conocemos ninguna base legal para una obligación de código QR de
                      pago. Alemania y Francia sí tienen una obligación real, pero distinta:
                      Alemania exige la{' '}
                      <Link
                        href="/wissen/rechnung"
                        className="text-sky-400 underline hover:text-sky-300"
                      >
                        obligación de factura electrónica para el formato de la factura
                      </Link>{' '}
                      (XRechnung/ZUGFeRD, 2025-2028, guía en alemán). Francia introduce desde
                      septiembre de 2026 la obligación de recepción de facturas electrónicas
                      para todas las empresas, con obligación de emisión para grandes y
                      medianas empresas (formato Factur-X, UBL 2.1 o CII, conforme a
                      EN 16931) – ampliándose a pymes y microempresas desde septiembre de
                      2027 (art. 153 Loi de Finances 2020, DGFiP).
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-300">
                      «Todos los países de la UE deben adoptar el QR SEPA antes de 2030»
                    </td>
                    <td className="py-3">
                      El plazo de 2030 de ViDA se refiere al <em>formato</em> de la factura
                      electrónica (XML), no a los códigos QR de pago.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Incluso sin obligación legal, los códigos QR SEPA (GiroCodes) ahorran tiempo:
              quien recibe la factura escanea el código con su app bancaria en lugar de
              teclear el IBAN y el importe. Por eso cada vez más emisores de facturas los
              adoptan de forma voluntaria, al margen de cualquier obligación legal.
            </p>
          </>
        ),
        faqs: [
          {
            q: '¿Será obligatorio el QR SEPA en las facturas?',
            a: 'Según la situación actual, no. La iniciativa ViDA de la UE regula los formatos de factura electrónica estructurados (XML según EN 16931), no los códigos QR de pago. La afirmación, muy citada, de que Eslovenia lo exige «desde 2024» se refiere en realidad a otra ley (ZDavPR, fiscalización), no a una obligación de código QR.',
          },
          {
            q: '¿Y qué pasa con la obligación alemana de factura electrónica?',
            a: 'Es un tema real, pero distinto: desde 2025-2028 Alemania exige de forma progresiva facturas electrónicas estructuradas en formato XRechnung o ZUGFeRD. Eso afecta al formato de la factura, no a un código QR de pago. Más detalles en nuestra guía en alemán «GiroCode auf Rechnungen».',
          },
          {
            q: '¿Cómo creo un código QR EPC conforme?',
            a: 'Usa girocodegenerator.com/es: introduce IBAN, nombre, importe y referencia – gratis, sin registro, 100% local en el navegador.',
          },
        ],
        ctas: [{ href: '/es', label: 'Crear un código QR SEPA gratis →' }],
        relatedLinks: [
          { href: '/es/codigo-qr-epc-facturas', label: 'Código QR EPC en Facturas' },
          { href: '/sepa-qr-pflicht', label: 'Deutsche Version' },
          { href: '/en/mandatory-sepa-qr-invoice', label: 'English version' },
          { href: '/fr/facture-electronique-qr-obligatoire', label: 'Version française' },
        ],
      }}
    />
  );
}
