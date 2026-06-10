import type { Metadata } from 'next';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'codigo-qr-sepa-gratis';

export const metadata: Metadata = {
  title: 'Código QR SEPA Gratis – Sin Registro 2026',
  description:
    'Código QR SEPA (EPC) gratis: Sin registro, sin suscripción, sin compartir datos. Crea códigos QR EPC directamente en tu navegador.',
  alternates: seoAlternates(SLUG, 'es'),
};

export default function CodigoQrSepaGratisPage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        locale: 'es',
        breadcrumbLabel: 'Código QR SEPA Gratis',
        badge: '100% Gratis · Sin Registro',
        h1: 'Código QR SEPA Gratis – Sin Registro',
        shortAnswer:
          'Crea códigos QR SEPA completamente gratis – sin registro, sin suscripción, sin compartir datos. Todo el procesamiento ocurre localmente en tu navegador.',
        stats: [
          { value: '0 €', label: 'Siempre gratis' },
          { value: '0', label: 'Registro requerido' },
          { value: '100%', label: 'Privacidad local' },
          { value: '∞', label: 'QR ilimitados' },
        ],
        body: (
          <>
            <h2>Por Qué Nuestro Código QR SEPA es Realmente Gratis</h2>
            <ul>
              <li>Sin cuotas de suscripción</li>
              <li>Sin cuenta requerida</li>
              <li>Sin publicidad</li>
              <li>Sin compartir datos</li>
              <li>Códigos QR ilimitados</li>
            </ul>
          </>
        ),
        faqs: [
          {
            q: '¿El generador QR SEPA es realmente gratis?',
            a: 'Sí, completamente gratis – sin suscripción, sin costes ocultos, sin registro.',
          },
          {
            q: '¿Se comparten mis datos bancarios?',
            a: 'No. Todo se procesa 100% localmente en tu navegador.',
          },
        ],
        ctas: [{ href: '/es', label: 'Crear Código QR SEPA Gratis →' }],
        relatedLinks: [
          { href: '/es/crear-codigo-qr-epc', label: 'Crear Código QR EPC' },
          { href: '/es/factura-electronica-qr-obligatorio', label: 'QR Obligatorio en Facturas' },
        ],
      }}
    />
  );
}
