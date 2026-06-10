import type { Metadata } from 'next';
import Link from 'next/link';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'codigo-qr-sepa-autonomos';
const LOCALE = 'es' as const;

export const metadata: Metadata = {
  title: 'Código QR SEPA para Autónomos – Facturas Pagadas Más Rápido',
  description:
    'Los autónomos usan códigos QR EPC en facturas para cobrar más rápido. Clientes escanean y pagan en segundos. Gratis.',
  alternates: seoAlternates(SLUG, LOCALE),
};

export default function CodigoQrSepaAutonomosPage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        locale: LOCALE,
        breadcrumbLabel: 'Código QR SEPA para autónomos',
        badge: 'Autónomos · Freelancers · SEPA',
        h1: 'Código QR EPC para Autónomos – Cobros Más Rápidos',
        shortAnswer:
          'Los autónomos añaden un código QR EPC a sus facturas para que los clientes paguen escaneando con su app bancaria. El IBAN, importe y referencia se rellenan automáticamente – se acabaron los errores de IBAN, los retrasos de pago y las referencias incorrectas.',
        stats: [
          { value: '10 seg.', label: 'Tiempo de pago del cliente' },
          { value: '0 €', label: 'Comisiones para ti y el cliente' },
          { value: 'EPC069-12', label: 'Estándar oficial' },
          { value: '100%', label: 'Local – sin compartir datos' },
        ],
        body: (
          <>
            <h2>El problema de los cobros para autónomos</h2>
            <p>
              Todo autónomo conoce la frustración: el trabajo está hecho, la factura enviada – pero
              el cobro tarda semanas. Tres problemas frecuentes:
            </p>
            <div className="not-prose my-6 space-y-3">
              {[
                {
                  title: 'Los clientes escriben mal tu IBAN',
                  desc: 'La introducción manual del IBAN provoca transferencias fallidas. Pierdes tiempo investigando y reenviando datos bancarios.',
                },
                {
                  title: 'Los pagos llegan tarde',
                  desc: 'Introducir los datos bancarios parece un esfuerzo. Los clientes posponen el pago – y acabas enviando recordatorios.',
                },
                {
                  title: 'Referencias de pago incorrectas',
                  desc: 'Sin el número de factura correcto en la referencia, no puedes conciliar los pagos en tu contabilidad.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-xl border border-rose-500/20 bg-rose-500/5 p-4"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/15 text-rose-300"
                  >
                    ✕
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#e8eaf0]">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2>La solución: código QR EPC en cada factura</h2>
            <p>
              Un <strong>código QR EPC</strong> en tu factura resuelve estos tres problemas. Tu
              cliente abre su app bancaria, escanea el QR, y el formulario de transferencia se
              rellena con tu IBAN, el importe exacto y el número de factura. Verifica y confirma –
              pago hecho en menos de 10 segundos.
            </p>

            <h2>Facturas profesionales con QR integrado</h2>
            <p>
              Usa nuestro{' '}
              <Link href="/es/rechnungs-editor">generador de factura PDF</Link> para crear
              facturas profesionales con un código QR EPC integrado en la esquina inferior
              derecha. Envía el PDF por email – tu cliente paga al instante.
            </p>
          </>
        ),
        howTo: {
          name: 'Añadir un código QR EPC a una factura de autónomo',
          headline: 'Cobra más rápido en 3 pasos',
          steps: [
            {
              title: 'Introducir IBAN y datos de factura',
              description:
                'Introduce tu IBAN, nombre, importe y número de factura como referencia de pago.',
            },
            {
              title: 'Generar QR o factura PDF',
              description:
                'Crea el QR en PNG o usa el generador PDF para una factura lista para enviar.',
            },
            {
              title: 'Enviar al cliente y cobrar',
              description:
                'Envía la factura PDF. El cliente escanea el QR y paga en segundos – sin errores de IBAN.',
            },
          ],
        },
        faqs: [
          {
            q: '¿Funciona el código QR EPC para clientes internacionales?',
            a: 'Sí, en los 36 países SEPA: España, Alemania, Francia, Bélgica y todos los demás miembros SEPA.',
          },
          {
            q: '¿El generador es gratuito para autónomos?',
            a: 'Sí, completamente gratuito. Sin registro, sin suscripción, sin comisiones por transacción.',
          },
          {
            q: '¿Puedo incluir el número de factura en el QR?',
            a: 'Sí. Introduce el número de factura en el campo referencia de pago – se rellenará al escanear.',
          },
        ],
        ctas: [
          { href: '/es', label: 'Crear código QR EPC →' },
          { href: '/es/rechnungs-editor', label: 'Crear factura PDF →', primary: false },
        ],
        relatedLinks: [
          { href: '/es/freelancer', label: 'GiroCode para autónomos' },
          { href: '/es/codigo-qr-epc-facturas', label: 'Código QR EPC en facturas' },
          { href: '/es/codigo-qr-epc-espana', label: 'Código QR EPC España' },
        ],
      }}
    />
  );
}
