import type { Metadata } from 'next';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'generador-qr-transferencia-sepa';

export const metadata: Metadata = {
  title: 'Generador QR Transferencia SEPA Gratis – En Línea 2026',
  description:
    'Genera un código QR para transferencia SEPA (EPC069-12) gratis online. Introduce IBAN y beneficiario, genera al instante, descarga en PNG.',
  alternates: seoAlternates(SLUG, 'es'),
};

export default function GeneradorQrTransferenciaSepaPage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        locale: 'es',
        breadcrumbLabel: 'Generador QR Transferencia SEPA',
        badge: 'SEPA · EPC069-12 · Instantáneo',
        h1: 'Generador QR Transferencia SEPA – Gratis & Al Instante',
        shortAnswer:
          'Genera un código QR para transferencia SEPA gratis online. Introduce el IBAN y el nombre del beneficiario, añade opcionalmente el importe, haz clic en generar – tu código QR SEPA (estándar EPC) está listo para descargar o incluir en tu factura PDF.',
        stats: [
          { value: '10 seg.', label: 'Generación' },
          { value: 'Gratis', label: 'Sin registro' },
          { value: 'EPC069-12', label: 'Estándar SEPA' },
          { value: '100%', label: 'Local' },
        ],
        body: (
          <>
            <h2>Generador QR Transferencia SEPA</h2>
            <p>
              El código QR de transferencia SEPA permite a tus clientes pagar escaneando con su app
              bancaria – IBAN, importe y referencia rellenados automáticamente.
            </p>
          </>
        ),
        howTo: {
          name: 'Generar QR transferencia SEPA',
          headline: 'Cómo Generar un QR de Transferencia SEPA',
          steps: [
            { title: 'Introduce IBAN y beneficiario', description: 'Nombre e IBAN de la cuenta SEPA.' },
            { title: 'Añade importe y referencia', description: 'Importe EUR y referencia de factura.' },
            { title: 'Genera y descarga', description: 'Descarga el código QR en PNG.' },
          ],
        },
        faqs: [
          {
            q: '¿Cómo generar un QR de transferencia SEPA?',
            a: 'En girocodegenerator.com/es: introduce IBAN y beneficiario, haz clic en Generar, descarga el PNG. Gratis.',
          },
          {
            q: '¿Es lo mismo QR SEPA y QR EPC?',
            a: 'Sí. Ambos siguen el estándar EPC069-12. En Alemania se llama GiroCode.',
          },
        ],
        ctas: [{ href: '/es', label: 'Generar QR Transferencia SEPA →' }],
        relatedLinks: [
          { href: '/es/crear-codigo-qr-epc', label: 'Crear Código QR EPC' },
          { href: '/es/codigo-qr-sepa-gratis', label: 'Código QR SEPA Gratis' },
        ],
      }}
    />
  );
}
