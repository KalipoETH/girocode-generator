import type { Metadata } from 'next';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'crear-codigo-qr-epc';

export const metadata: Metadata = {
  title: 'Crear Código QR EPC Gratis – En Línea 2026',
  description:
    'Crea un código QR EPC para transferencias SEPA gratis. Sin registro, 100% local, descarga instantánea. Compatible con todas las apps bancarias europeas.',
  alternates: seoAlternates(SLUG, 'es'),
};

export default function CrearCodigoQrEpcPage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        locale: 'es',
        breadcrumbLabel: 'Crear Código QR EPC',
        badge: 'EPC069-12 · SEPA · Gratis',
        h1: 'Crear Código QR EPC Gratis – En Línea',
        shortAnswer:
          'Crear un código QR EPC tarda menos de 10 segundos: Introduce el nombre del beneficiario y el IBAN, añade opcionalmente importe y referencia, haz clic en generar y descarga tu QR en PNG. Sin registro. Todos los datos permanecen en tu navegador.',
        stats: [
          { value: '10 seg.', label: 'Tiempo de creación' },
          { value: 'Gratis', label: 'Sin suscripción' },
          { value: 'EPC069-12', label: 'Estándar oficial' },
          { value: '36 países', label: 'Cobertura SEPA' },
        ],
        body: (
          <>
            <h2>Crea Códigos QR EPC en Segundos</h2>
            <p>
              El <strong>código QR EPC</strong> es la forma más rápida de recibir transferencias
              SEPA. Ideal para facturas, donaciones y pagos – genera un código conforme EPC069-12
              gratis en tu navegador.
            </p>
          </>
        ),
        howTo: {
          name: 'Crear un código QR EPC',
          headline: 'Cómo Crear un Código QR EPC',
          steps: [
            { title: 'Introduce nombre e IBAN', description: 'Nombre del titular e IBAN exactamente como en el banco.' },
            { title: 'Añade importe y referencia', description: 'Importe en EUR y referencia de pago (opcional).' },
            { title: 'Genera y descarga PNG', description: 'Haz clic en Generar y descarga tu código QR al instante.' },
          ],
        },
        faqs: [
          {
            q: '¿Cómo crear un código QR EPC gratis?',
            a: 'Abre girocodegenerator.com/es, introduce nombre e IBAN, haz clic en Generar y descarga el PNG. Gratis, sin registro.',
          },
          {
            q: '¿Qué información necesito?',
            a: 'Nombre del beneficiario (máx. 70 caracteres) e IBAN. Importe y referencia son opcionales.',
          },
          {
            q: '¿Está seguro mi IBAN?',
            a: 'Sí. Todos los datos se procesan 100% localmente en tu navegador. Nada se envía a nuestros servidores.',
          },
        ],
        ctas: [{ href: '/es', label: 'Crear Código QR EPC →' }],
        relatedLinks: [
          { href: '/es/generador-qr-transferencia-sepa', label: 'Generador QR Transferencia SEPA' },
          { href: '/es/codigo-qr-sepa-gratis', label: 'Código QR SEPA Gratis' },
        ],
      }}
    />
  );
}
