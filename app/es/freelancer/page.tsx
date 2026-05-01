import type { Metadata } from 'next';
import { UseCaseLanding } from '../../../components/UseCaseLanding';

const SLUG = 'freelancer';

export const metadata: Metadata = {
  title: 'GiroCode para Autónomos – Cobrar más rápido 2026',
  description:
    'Los autónomos cobran más rápido con GiroCode: menos recordatorios, menos errores, más profesionalismo. Gratis & sin registro.',
  keywords:
    'girocode autonomo, factura autonomo qr code, sepa qr autonomo, cobrar mas rapido autonomo',
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

export default function FreelancerEsPage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'es',
        generatorHref: '/es',
        homeHref: '/es',
        homeLabel: 'Inicio',
        breadcrumbLabel: 'Autónomos',
        badge: 'Para Autónomos & Independientes',
        h1: 'Cobra más rápido como autónomo',
        subtitle:
          'Con un GiroCode en tu factura, los clientes pagan en segundos – sin introducir el IBAN manualmente, sin errores de escritura.',
        problemHeadline: 'El problema: los pagos llegan tarde',
        problemIntro:
          'Lo conoces: el trabajo está hecho, la factura enviada – pero el dinero se hace esperar. Estos tres puntos son los que más nervios cuestan a los autónomos:',
        painPoints: [
          'Los clientes escriben mal el IBAN – la transferencia nunca llega',
          'Los pagos siempre llegan tarde – los recordatorios consumen tu tiempo',
          'Apariencia poco profesional – sin opción de pago clara en la factura',
        ],
        solutionHeadline: 'La solución: GiroCode en cada factura',
        solutionIntro:
          'Un único código QR en tu factura lo cambia todo. Tu cliente escanea – y la app bancaria rellena IBAN, importe y concepto automáticamente.',
        benefits: [
          {
            icon: '⚡',
            title: 'Pagos 10x más rápidos',
            description:
              'Los clientes pagan justo al recibir la factura – sin posponer, sin buscar datos bancarios.',
          },
          {
            icon: '✅',
            title: 'Cero errores de escritura',
            description:
              'Sin entrada manual de datos. IBAN, importe y concepto están codificados en el código QR.',
          },
          {
            icon: '💼',
            title: 'Apariencia profesional',
            description:
              'Las facturas modernas con QR transmiten seriedad y muestran que estás al día.',
          },
        ],
        stepsHeadline: 'Tu factura con GiroCode en 3 pasos',
        steps: [
          {
            title: 'Introducir IBAN & datos de factura',
            description:
              'Añade beneficiario, IBAN, importe y concepto en el generador. Todo ocurre localmente en tu navegador.',
          },
          {
            title: 'Generar GiroCode & PDF',
            description:
              'El generador crea al instante el código QR y, opcionalmente, una factura PDF lista para enviar con el código integrado.',
          },
          {
            title: 'Enviar factura – cliente escanea & paga',
            description:
              'Envía el PDF por email. Tu cliente escanea el código con su app bancaria y confirma la transferencia en dos clics.',
          },
        ],
        faqHeadline: 'Preguntas frecuentes para autónomos',
        faq: [
          {
            question: '¿El GiroCode en una factura cumple con la ley?',
            answer:
              'Sí. El GiroCode es un complemento opcional – tu factura sigue necesitando los datos obligatorios por ley (dirección, NIF, número de factura, etc.). El código QR solo facilita el pago a tus clientes.',
          },
          {
            question: '¿Qué apps bancarias pueden escanear mi factura?',
            answer:
              'Prácticamente todas las apps bancarias de la zona SEPA: Sparkasse, Volksbank, ING, DKB, Comdirect, Deutsche Bank, Commerzbank, Postbank, N26 y muchas más soportan el estándar EPC.',
          },
          {
            question: '¿Hay alguna comisión o suscripción?',
            answer:
              'No. El generador GiroCode es 100% gratuito y sin registro. Solo se aplican las comisiones SEPA habituales de tu banco, si las cobra.',
          },
          {
            question: '¿Están seguros mis datos bancarios y de clientes?',
            answer:
              'Sí. Todos los datos se procesan exclusivamente en tu navegador. No hay transmisión a ningún servidor – ni tu IBAN ni los datos de clientes salen de tu dispositivo.',
          },
          {
            question: '¿Puedo crear también facturas recurrentes?',
            answer:
              'Sí. Puedes generar tantas facturas con GiroCode como quieras. Para importes fijos, puedes reutilizar un mismo QR – ideal para iguala mensual o suscripciones.',
          },
        ],
        ctaHeadline: '¿Listo para cobrar más rápido?',
        ctaText:
          'Crea tu primera factura con GiroCode en 2 minutos – gratis, sin registro, 100% local en tu navegador.',
        ctaButton: 'Crear GiroCode gratis →',
      }}
    />
  );
}
