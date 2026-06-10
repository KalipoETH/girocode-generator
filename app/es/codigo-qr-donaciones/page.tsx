import type { Metadata } from 'next';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'codigo-qr-donaciones';
const LOCALE = 'es' as const;

export const metadata: Metadata = {
  title: 'Código QR SEPA para Donaciones – Recaudar Fondos Gratis 2026',
  description:
    'Crea códigos QR EPC para donaciones SEPA. Donantes escanean y donan sin comisiones. Sin PayPal necesario.',
  alternates: seoAlternates(SLUG, LOCALE),
};

export default function CodigoQrDonacionesPage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        locale: LOCALE,
        breadcrumbLabel: 'Código QR EPC para donaciones',
        badge: 'Donaciones · Recaudación · SEPA',
        h1: 'Código QR EPC para Donaciones y Recaudación de Fondos',
        shortAnswer:
          'Un código QR EPC para donaciones permite a los simpatizantes contribuir mediante transferencia SEPA escaneando un QR con su app bancaria. A diferencia de PayPal, no hay comisiones. El importe puede dejarse vacío para que el donante elija su contribución.',
        stats: [
          { value: '0 €', label: 'Comisiones de transacción' },
          { value: 'EPC069-12', label: 'Estándar oficial' },
          { value: 'Libre', label: 'Importe opcional' },
          { value: '36', label: 'Países zona SEPA' },
        ],
        body: (
          <>
            <h2>¿Por qué usar un código QR EPC para donaciones?</h2>
            <p>
              Los métodos de donación tradicionales suelen tener comisiones o barreras. PayPal cobra
              entre 1,9 y 3,4 % por transacción. Las transferencias manuales son gratuitas pero
              poco prácticas – los donantes se equivocan de IBAN o abandonan.
            </p>
            <p>
              Un <strong>código QR EPC para donaciones</strong> combina cero comisiones (transferencia
              SEPA directa) y máxima comodidad (escanea y paga en segundos). Imprime el QR en
              carteles, folletos o tu sitio web.
            </p>

            <h2>QR EPC vs PayPal para donaciones</h2>
            <div className="not-prose my-6 overflow-x-auto rounded-xl border border-[#1f2431]">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#1f2431] bg-[#121318]">
                    <th className="px-4 py-3 font-bold text-[#e8eaf0]">Criterio</th>
                    <th className="px-4 py-3 font-bold text-emerald-400">QR EPC</th>
                    <th className="px-4 py-3 font-bold text-slate-400">PayPal</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-[#1f2431]">
                    <td className="px-4 py-3 font-medium">Comisiones</td>
                    <td className="px-4 py-3 text-emerald-400">Gratis, transferencia directa</td>
                    <td className="px-4 py-3">1,9–3,4 % de comisiones</td>
                  </tr>
                  <tr className="border-b border-[#1f2431]">
                    <td className="px-4 py-3 font-medium">Cuenta requerida</td>
                    <td className="px-4 py-3 text-emerald-400">No – cualquier cuenta bancaria</td>
                    <td className="px-4 py-3">Cuenta PayPal requerida</td>
                  </tr>
                  <tr className="border-b border-[#1f2431]">
                    <td className="px-4 py-3 font-medium">Sin conexión</td>
                    <td className="px-4 py-3 text-emerald-400">Sí – imprimible en carteles</td>
                    <td className="px-4 py-3">Solo pago online</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Importe libre</td>
                    <td className="px-4 py-3 text-emerald-400">Sí – dejar importe vacío</td>
                    <td className="px-4 py-3">Solo importes fijos</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Configurar un QR de donación</h2>
            <p>
              Introduce el IBAN y nombre de tu asociación o campaña, deja el importe vacío para
              donaciones libres, añade una referencia como « Donación » y genera el código QR.
            </p>
          </>
        ),
        howTo: {
          name: 'Crear un código QR EPC para donaciones',
          headline: 'Crea tu QR de donación en 3 pasos',
          steps: [
            {
              title: 'Introducir IBAN y nombre de la organización',
              description:
                'Introduce el IBAN y nombre de tu asociación, ONG o campaña de recaudación.',
            },
            {
              title: 'Dejar importe vacío para donaciones libres',
              description:
                'Deja el campo importe vacío para que los donantes elijan su contribución.',
            },
            {
              title: 'Imprimir o compartir el QR',
              description:
                'Descarga el PNG y añádelo a folletos, carteles o tu sitio web.',
            },
          ],
        },
        faqs: [
          {
            q: '¿Los códigos QR EPC para donaciones son gratuitos?',
            a: 'Sí. La creación es gratuita y las transferencias SEPA no tienen comisiones para el beneficiario, a diferencia de PayPal.',
          },
          {
            q: '¿Los donantes pueden elegir su importe?',
            a: 'Sí. Deja el campo importe vacío. El donante introduce su importe en su app bancaria tras escanear.',
          },
          {
            q: '¿Es mejor el QR EPC que PayPal para donaciones?',
            a: 'Para donaciones SEPA, sí: cero comisiones, sin cuenta PayPal, funciona en materiales impresos y llega a cualquier persona con cuenta bancaria europea.',
          },
        ],
        ctas: [{ href: '/es', label: 'Crear código QR EPC para donaciones →' }],
        relatedLinks: [
          { href: '/es/spenden', label: 'GiroCode para donaciones' },
          { href: '/es/girocode-vs-paypal', label: 'GiroCode vs PayPal' },
          { href: '/es/verein', label: 'GiroCode para asociaciones' },
        ],
      }}
    />
  );
}
