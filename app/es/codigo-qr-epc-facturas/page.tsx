import type { Metadata } from 'next';
import Link from 'next/link';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'codigo-qr-epc-facturas';
const LOCALE = 'es' as const;

export const metadata: Metadata = {
  title: 'Código QR EPC en Facturas – Cobrar más Rápido 2026',
  description:
    'Añade códigos QR EPC a tus facturas para cobros SEPA instantáneos. Clientes escanean y pagan en segundos. Gratis, incluye generador PDF.',
  alternates: seoAlternates(SLUG, LOCALE),
};

export default function CodigoQrEpcFacturasPage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        locale: LOCALE,
        breadcrumbLabel: 'Código QR EPC en facturas',
        badge: 'Facturas · EPC069-12 · SEPA',
        h1: 'Código QR EPC en Facturas – Cobra Más Rápido',
        shortAnswer:
          'Añadir un código QR EPC a una factura permite a los clientes pagar mediante transferencia SEPA escaneando con su app bancaria. El IBAN, importe y referencia se rellenan automáticamente. Según las recomendaciones EPC, el QR debe colocarse en la esquina inferior derecha de la factura, con un tamaño mínimo de 2×2 cm.',
        stats: [
          { value: '2×2 cm', label: 'Tamaño mínimo del QR' },
          { value: 'EPC069-12', label: 'Estándar oficial' },
          { value: '10 seg.', label: 'Tiempo medio de pago' },
          { value: '0 €', label: 'Comisiones de transacción' },
        ],
        body: (
          <>
            <h2>¿Por qué añadir un código QR EPC a las facturas?</h2>
            <p>
              Las transferencias manuales son lentas y propensas a errores. Los clientes escriben
              mal el IBAN, olvidan la referencia o retrasan el pago. Un{' '}
              <strong>código QR EPC en tu factura</strong> elimina estos problemas: el cliente
              abre su app bancaria, escanea el código, verifica los datos pre-rellenados y confirma
              la transferencia en segundos.
            </p>

            <h2>Menciones obligatorias en facturas españolas</h2>
            <p>El código QR EPC complementa – sin sustituir – las menciones legales obligatorias:</p>
            <ul>
              <li>NIF/CIF del emisor y del destinatario</li>
              <li>Número de factura, fecha e IVA desglosado</li>
              <li>Descripción de bienes o servicios e importe total</li>
              <li>IBAN y condiciones de pago</li>
            </ul>

            <h2>Cómo colocar el QR en una factura</h2>
            <ul>
              <li>
                <strong>Tamaño mínimo:</strong> 2 × 2 cm (3 × 3 cm recomendado para impresión)
              </li>
              <li>
                <strong>Contraste:</strong> QR negro sobre fondo blanco
              </li>
              <li>
                <strong>Etiqueta:</strong> Añade « Escanea para pagar » junto al código
              </li>
            </ul>

            <h2>Generador PDF con QR integrado</h2>
            <p>
              Usa nuestro{' '}
              <Link href="/es/rechnungs-editor">generador de factura PDF</Link> para crear
              facturas profesionales con el código QR EPC integrado automáticamente en la esquina
              inferior derecha.
            </p>
          </>
        ),
        howTo: {
          name: 'Añadir un código QR EPC a una factura',
          headline: 'Paso a paso: código QR EPC en tu factura PDF',
          steps: [
            {
              title: 'Introducir datos de la factura',
              description:
                'Introduce tu IBAN, nombre, importe y referencia de pago (ej. número de factura).',
            },
            {
              title: 'Generar el código QR EPC',
              description:
                'Haz clic en Generar para crear un código QR EPC069-12 validado. Descarga en PNG o usa el generador PDF.',
            },
            {
              title: 'Crear factura PDF con QR integrado',
              description:
                'Usa el editor de facturas para crear un PDF profesional con el QR en la esquina inferior derecha.',
            },
            {
              title: 'Enviar la factura al cliente',
              description:
                'Envía el PDF por email. El cliente escanea el QR con su app bancaria y paga en segundos.',
            },
          ],
        },
        faqs: [
          {
            q: '¿Dónde colocar el código QR EPC en una factura?',
            a: 'En la esquina inferior derecha, cerca de los datos bancarios. Tamaño mínimo: 2×2 cm.',
          },
          {
            q: '¿El QR EPC sustituye al IBAN en la factura?',
            a: 'No. El IBAN debe seguir apareciendo en texto. El QR es un complemento práctico para el pagador.',
          },
          {
            q: '¿Es gratuito añadir un QR EPC a las facturas?',
            a: 'Sí. La creación en girocodegenerator.com es completamente gratuita, sin comisiones SEPA.',
          },
        ],
        ctas: [
          { href: '/es/rechnungs-editor', label: 'Crear factura con QR EPC →' },
          { href: '/es', label: 'Crear código QR EPC →', primary: false },
        ],
        relatedLinks: [
          { href: '/es/codigo-qr-epc-espana', label: 'Código QR EPC España' },
          { href: '/es/codigo-qr-sepa-autonomos', label: 'Código QR SEPA para autónomos' },
          { href: '/es/wissen/rechnung', label: 'GiroCode en facturas – guía completa' },
        ],
      }}
    />
  );
}
