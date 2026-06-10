import type { Metadata } from 'next';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'factura-electronica-qr-obligatorio';

export const metadata: Metadata = {
  title: 'Factura Electrónica QR Obligatorio España 2026-2030',
  description:
    'España debe implementar QR SEPA en facturas según la iniciativa ViDA de la UE hasta 2030. Crea códigos QR conformes gratis ahora.',
  alternates: seoAlternates(SLUG, 'es'),
};

export default function FacturaElectronicaQrObligatorioPage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        locale: 'es',
        breadcrumbLabel: 'QR Obligatorio en Facturas',
        badge: 'ViDA · España · 2026-2030',
        h1: 'QR Code EPC en Facturas – Próximamente Obligatorio en España',
        shortAnswer:
          'La iniciativa ViDA de la UE hará obligatorios los códigos QR SEPA en las facturas profesionales. España debe implementarlos antes de 2030. Eslovenia ya los exige. Crear un código QR EPC conforme es gratis y tarda 10 segundos.',
        stats: [
          { value: '2024', label: 'Eslovenia: ya obligatorio' },
          { value: '2026-28', label: 'Francia y Alemania' },
          { value: '2030', label: 'Todos los países UE (ViDA)' },
          { value: 'Gratis', label: 'Coste de cumplimiento' },
        ],
        body: (
          <>
            <h2>Prepárate para la Factura Electrónica con QR SEPA</h2>
            <p>
              España implementará progresivamente los códigos QR SEPA en facturas profesionales
              en el marco de la iniciativa ViDA de la UE. Anticípate ahora añadiendo códigos QR
              EPC conformes a tus facturas.
            </p>
          </>
        ),
        faqs: [
          {
            q: '¿Será obligatorio el QR SEPA en facturas en España?',
            a: 'Sí, en el marco de ViDA. España debe cumplir antes de 2030.',
          },
          {
            q: '¿Cómo crear un código QR EPC conforme?',
            a: 'Usa girocodegenerator.com/es: introduce IBAN, nombre, importe y referencia – gratis, sin registro.',
          },
        ],
        ctas: [{ href: '/es', label: 'Crear código QR EPC conforme →' }],
        relatedLinks: [
          { href: '/es/codigo-qr-epc-facturas', label: 'Código QR EPC en Facturas' },
          { href: '/en/mandatory-sepa-qr-invoice', label: 'Mandatory SEPA QR (EN)' },
        ],
      }}
    />
  );
}
