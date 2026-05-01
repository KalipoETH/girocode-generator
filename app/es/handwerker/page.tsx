import type { Metadata } from 'next';
import { UseCaseLanding } from '../../../components/UseCaseLanding';

const SLUG = 'handwerker';

export const metadata: Metadata = {
  title: 'GiroCode para Talleres – Facturas pagadas más rápido',
  description:
    'Facturas de taller pagadas inmediatamente: GiroCode en la factura = cobro en el lugar, menos recordatorios, sin escribir IBAN. Gratis & sin registro.',
  keywords:
    'girocode taller, factura taller qr code, sepa qr taller, factura pagada inmediatamente',
  alternates: {
    canonical: `https://www.girocodegenerator.com/es/${SLUG}`,
    languages: {
      'x-default': `https://www.girocodegenerator.com/${SLUG}`,
      de: `https://www.girocodegenerator.com/${SLUG}`,
      en: `https://www.girocodegenerator.com/en/${SLUG}`,
      fr: `https://www.girocodegenerator.com/fr/${SLUG}`,
      es: `https://www.girocodegenerator.com/es/${SLUG}`,
    },
  },
};

export default function HandwerkerEsPage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'es',
        generatorHref: '/es',
        homeHref: '/es',
        homeLabel: 'Inicio',
        breadcrumbLabel: 'Talleres',
        badge: 'Para Talleres & Empresas',
        h1: 'Facturas de taller pagadas inmediatamente',
        subtitle:
          'Imprime el GiroCode directamente en el albarán o factura PDF – tu cliente escanea con el móvil y paga antes de que te vayas. Se acabó esperar el dinero.',
        problemHeadline: 'El problema: el dinero llega semanas después',
        problemIntro:
          'En el sector del taller, la liquidez lo es todo. Y aquí es donde fallan muchos negocios:',
        painPoints: [
          'Pago semanas después – pero material y salarios hay que pagarlos ya',
          'Facturas en papel perdidas – el cliente simplemente se olvida',
          'Preguntas por IBAN incorrecto – embarazoso y costoso en tiempo',
        ],
        solutionHeadline: 'La solución: cobrar antes de subir a la furgoneta',
        solutionIntro:
          'Con un GiroCode en la factura cierras el trabajo y cobras al instante. Tu cliente escanea con la app bancaria – listo.',
        benefits: [
          {
            icon: '📍',
            title: 'Cobrar en el lugar',
            description:
              'El cliente escanea al terminar el trabajo – te vas con la factura ya cobrada.',
          },
          {
            icon: '⏱️',
            title: 'Factura PDF en 2 minutos',
            description:
              'Datos obligatorios, logo, GiroCode, IVA – todo en una factura A4 lista para imprimir o enviar.',
          },
          {
            icon: '📱',
            title: 'Cliente paga por móvil al instante',
            description:
              'Abre la app bancaria, escanea, confirma – el dinero está en camino antes de que arranques el motor.',
          },
        ],
        stepsHeadline: 'Tu factura con GiroCode en 3 pasos',
        steps: [
          {
            title: 'Introduce los datos del trabajo',
            description:
              'IBAN, beneficiario, importe y concepto (p. ej. "Reparación calefacción 2026/123") en el generador.',
          },
          {
            title: 'Crea el PDF con GiroCode',
            description:
              'Sube tu logo, guarda tus datos una sola vez – el generador crea la factura PDF con el QR integrado.',
          },
          {
            title: 'Entrega & deja que escanee',
            description:
              'Imprime el PDF o envíalo por email. El cliente escanea con la app bancaria y confirma la transferencia en dos clics.',
          },
        ],
        faqHeadline: 'Preguntas frecuentes para talleres',
        faq: [
          {
            question: '¿Puedo imprimir el GiroCode también en albaranes?',
            answer:
              'Sí. Descarga el QR como PNG y pégalo o imprímelo en cualquier documento – albarán, recibo, parte de mantenimiento. Importante: tamaño mínimo 2x2 cm.',
          },
          {
            question: '¿La factura PDF cumple los requisitos legales?',
            answer:
              'Sí. Con dirección, NIF, número de factura, fecha, descripción del servicio y totales base/IVA/total puedes generar una factura completamente conforme. El GiroCode se imprime adicionalmente.',
          },
          {
            question: '¿Y si el cliente no puede escanear el GiroCode?',
            answer:
              'Todos los datos (IBAN, importe, concepto) también figuran en texto en la factura. El cliente puede iniciar la transferencia manualmente – el QR es siempre una ayuda extra.',
          },
          {
            question: '¿Funciona también para clientes B2B / empresariales?',
            answer:
              'Sí. El GiroCode es conforme EPC y reconocido por todos los bancos SEPA – tanto particulares como empresas. Los departamentos de contabilidad agradecen los datos sin errores.',
          },
          {
            question: '¿Son seguros los datos de cliente y trabajo?',
            answer:
              'Sí. Todo se procesa solo en tu navegador. Ni el IBAN, ni el logo, ni los datos de factura salen de tu dispositivo – y nada se almacena.',
          },
        ],
        ctaHeadline: '¿Listo para facturas pagadas al momento?',
        ctaText:
          'Crea tu primera factura de taller con GiroCode en 2 minutos – gratis, sin registro, local en tu navegador.',
        ctaButton: 'Crear GiroCode gratis →',
      }}
    />
  );
}
