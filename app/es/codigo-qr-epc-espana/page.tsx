import type { Metadata } from 'next';
import Link from 'next/link';
import { CountryEpcLanding, countryAlternates } from '../../../components/CountryEpcLanding';

const SLUG = 'codigo-qr-epc-espana';
const LOCALE = 'es' as const;

export const metadata: Metadata = {
  title: 'Generador Código QR EPC España – Transferencia SEPA Gratis 2026',
  description:
    'Crea códigos QR EPC para transferencias SEPA en España gratis. Compatible con apps bancarias españolas: CaixaBank, BBVA, Santander, Sabadell, ING España. Sin registro.',
  alternates: countryAlternates(SLUG, LOCALE),
};

export default function CodigoQrEpcEspanaPage() {
  return (
    <CountryEpcLanding
      content={{
        slug: SLUG,
        locale: LOCALE,
        breadcrumbLabel: 'Código QR EPC España',
        badge: 'España · EPC069-12 · SEPA',
        h1: 'Generador de Código QR EPC para España',
        shortAnswer:
          'España forma parte de la zona SEPA desde 2016 y sus bancos soportan el estándar EPC069-12 para transferencias SEPA mediante código QR. Las principales apps bancarias españolas como CaixaBank, BBVA, Santander y Sabadell permiten escanear códigos QR EPC. Los IBAN españoles comienzan por ES y tienen 24 caracteres.',
        stats: [
          { value: 'ES', label: 'Prefijo IBAN español' },
          { value: '24 dígitos', label: 'Longitud IBAN España' },
          { value: 'EPC069-12', label: 'Estándar oficial' },
          { value: '2016', label: 'Migración SEPA completada' },
        ],
        introSection: {
          title: 'El código QR EPC en España',
          body: (
            <>
              <p>
                España completó la migración SEPA en 2016. Los bancos españoles han integrado el
                escaneo de códigos QR EPC en sus aplicaciones móviles, permitiendo a empresas,
                autónomos y particulares recibir transferencias SEPA escaneando un código QR en
                facturas, sitios web o materiales impresos.
              </p>
              <p>
                Al escanear el código, la app bancaria rellena automáticamente el nombre del
                beneficiario, el IBAN español, el importe y la referencia de pago – reduciendo
                errores y acelerando los cobros.
              </p>
              <h3>Formato IBAN español</h3>
              <p>
                Los IBAN españoles comienzan por <strong>ES</strong>, seguidos de 22 caracteres
                (2 dígitos de control + 20 dígitos de cuenta). Longitud total:{' '}
                <strong>24 caracteres</strong> (ej. <code>ES9121000418450200051332</code>).
              </p>
              <h3>Facturas con código QR EPC en España</h3>
              <p>
                En las facturas españolas, el código QR EPC complementa las menciones obligatorias:
              </p>
              <ul>
                <li>NIF/CIF del emisor y del destinatario</li>
                <li>Número de factura, fecha e IVA desglosado</li>
                <li>Descripción de bienes o servicios e importe total</li>
                <li>IBAN y condiciones de pago</li>
              </ul>
              <p>
                Desde 2024, la <strong>facturación electrónica obligatoria</strong> en España
                exige el envío de facturas en formato estructurado para empresas y autónomos.
                El código QR EPC en el PDF de factura facilita el pago inmediato por transferencia
                SEPA. Colócalo en la <strong>esquina inferior derecha</strong>, tamaño mínimo
                2×2 cm. Usa nuestro{' '}
                <Link href="/es/rechnungs-editor">generador de factura PDF</Link> para integrarlo
                automáticamente.
              </p>
            </>
          ),
        },
        banksHeadline: 'Bancos españoles que soportan el código QR EPC',
        banks: [
          { name: 'CaixaBank', app: 'CaixaBankNow' },
          { name: 'BBVA', app: 'BBVA España' },
          { name: 'Santander', app: 'Santander España' },
          { name: 'Banco Sabadell', app: 'Sabadell App' },
          { name: 'ING España', app: 'ING España App' },
        ],
        howToHeadline: 'Cómo crear un código QR EPC para España',
        howToJsonLdName: 'Crear un código QR EPC para España',
        howToSteps: [
          {
            title: 'Introducir IBAN y nombre del beneficiario',
            description:
              'Abre el generador gratuito e introduce tu IBAN español (comenzando por ES) y el nombre del beneficiario.',
          },
          {
            title: 'Añadir importe y referencia',
            description:
              'Introduce opcionalmente el importe en EUR y una referencia de pago (ej. número de factura).',
          },
          {
            title: 'Generar e integrar en la factura',
            description:
              'Descarga el código QR en PNG o usa el generador PDF para integrarlo en la esquina inferior derecha de tu factura.',
          },
        ],
        faqHeadline: 'Preguntas frecuentes – Código QR EPC en España',
        faqs: [
          {
            q: '¿Las apps bancarias españolas soportan el QR EPC?',
            a: 'Sí. CaixaBankNow, BBVA España, Santander España, Sabadell App e ING España App soportan el escaneo de códigos QR EPC para transferencias SEPA según la norma EPC069-12.',
          },
          {
            q: '¿Cuál es el formato IBAN español?',
            a: 'Los IBAN españoles comienzan por ES, seguidos de 22 caracteres. La longitud total es de 24 caracteres, ej. ES9121000418450200051332.',
          },
          {
            q: '¿Puedo usar un QR EPC en facturas españolas?',
            a: 'Sí. El código QR EPC se usa ampliamente en facturas españolas. Colócalo en la esquina inferior derecha, tamaño mínimo 2×2 cm.',
          },
          {
            q: '¿El código QR EPC es lo mismo que GiroCode?',
            a: 'Sí. GiroCode es el nombre comercial alemán del código QR EPC. En España se llama simplemente código QR EPC o QR SEPA. Todos siguen el estándar EPC069-12.',
          },
          {
            q: '¿Es gratuito crear un código QR EPC?',
            a: 'Sí. La creación en girocodegenerator.com es completamente gratuita. Las transferencias SEPA no tienen comisiones para el beneficiario.',
          },
          {
            q: '¿Qué es la factura electrónica obligatoria en España?',
            a: 'Desde 2024, empresas y autónomos en España deben emitir facturas en formato electrónico estructurado. El código QR EPC en el PDF complementa este proceso facilitando el pago por transferencia SEPA.',
          },
        ],
        ctaText: 'Crear código QR EPC →',
        ctaHref: '/es',
        relatedLinks: [
          { href: '/es/codigo-qr-epc-facturas', label: 'Código QR EPC en facturas' },
          { href: '/es/codigo-qr-sepa-autonomos', label: 'Código QR SEPA para autónomos' },
          { href: '/es/wissen/girocode', label: '¿Qué es un GiroCode?' },
        ],
      }}
    />
  );
}
