import type { Metadata } from 'next';
import { UseCaseLanding } from '../../../components/UseCaseLanding';

const SLUG = 'verein';

export const metadata: Metadata = {
  title: 'GiroCode para Asociaciones – Cobrar cuotas fácilmente',
  description:
    'Las asociaciones usan GiroCodes para cuotas, donaciones y eventos. Gratis, local, sin registro.',
  keywords:
    'girocode asociacion, cuota qr code, sepa qr club, donacion asociacion qr',
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

export default function VereinEsPage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'es',
        generatorHref: '/es',
        homeHref: '/es',
        homeLabel: 'Inicio',
        breadcrumbLabel: 'Asociaciones',
        badge: 'Para Asociaciones & Organizaciones',
        h1: 'Cobrar cuotas & donaciones fácilmente',
        subtitle:
          'Con un GiroCode en cartas a socios, folletos de donación e invitaciones a eventos, los miembros pagan a tiempo – sin errores, sin trabajo extra para el tesorero.',
        problemHeadline: 'El problema: gestionar cuotas consume tiempo',
        problemIntro:
          'Ser tesorero voluntario ya es un trabajo a tiempo completo. Estas tres tareas son las que más tiempo consumen:',
        painPoints: [
          'Escribir recordatorios lleva tiempo – cada cuota debe seguirse manualmente',
          'Referencias de pago incorrectas – difícil asignar los ingresos',
          'Contabilidad compleja para cuotas, donaciones y eventos',
        ],
        solutionHeadline: 'La solución: GiroCode para pagos de asociación',
        solutionIntro:
          'Imprime el GiroCode en cartas a socios, folletos o carteles. Miembros y donantes escanean, pagan – y la referencia correcta queda automáticamente registrada.',
        benefits: [
          {
            icon: '⚡',
            title: 'Escaneo & pago en 10 segundos',
            description:
              'Los miembros pagan justo después de escanear – sin buscar datos bancarios, sin escritura manual.',
          },
          {
            icon: '🏷️',
            title: 'Referencia automática',
            description:
              '"Cuota 2026", "Donación fiesta de verano" – la referencia queda codificada en el QR y se transfiere sin errores.',
          },
          {
            icon: '📊',
            title: 'Asignación más fácil',
            description:
              'Conceptos claros en el extracto bancario – la contabilidad casi se hace sola.',
          },
        ],
        stepsHeadline: 'Tu GiroCode asociativo en 3 pasos',
        steps: [
          {
            title: 'Introducir la cuenta de la asociación',
            description:
              'Añade nombre de la asociación, IBAN y – si lo sabes – un importe (p. ej. cuota anual) en el generador.',
          },
          {
            title: 'Definir el concepto',
            description:
              'Establece una referencia clara como "Cuota 2026" o "Donación fiesta de verano" directamente en el código.',
          },
          {
            title: 'Imprimir & compartir el código',
            description:
              'Pon el GiroCode en cartas, folletos o carteles. Los socios lo escanean con su app bancaria y completan la transferencia.',
          },
        ],
        faqHeadline: 'Preguntas frecuentes para asociaciones',
        faq: [
          {
            question: '¿Podemos usar el GiroCode sin importe fijo?',
            answer:
              'Sí. Deja el campo de importe vacío – los miembros o donantes pueden introducir el importe ellos mismos. Ideal para campañas de donación.',
          },
          {
            question: '¿Sirve el GiroCode para recibos de donación?',
            answer:
              'Sí. Puedes poner el GiroCode en folletos, carteles o cartas. Los certificados de donación se emiten como siempre – el GiroCode solo facilita la transferencia.',
          },
          {
            question: '¿Hay que registrarse o pagar suscripción?',
            answer:
              'No. El generador es 100% gratuito y sin registro. No hay costes ocultos – ni siquiera con muchos QR.',
          },
          {
            question: '¿Están seguros los datos de la asociación?',
            answer:
              'Sí. Todos los datos se procesan exclusivamente de forma local en tu navegador. Vuestro IBAN, datos y importes nunca salen del dispositivo.',
          },
          {
            question: '¿Podemos usar el mismo código para varios miembros?',
            answer:
              'Sí, si la cuota es igual para todos. Si necesitas referencia personalizada (ej. número de socio), genera un QR distinto por miembro.',
          },
        ],
        ctaHeadline: '¿Listos para pagos asociativos sin estrés?',
        ctaText:
          'Crea en pocos clics GiroCodes para cuotas, donaciones o eventos – gratis y sin registro.',
        ctaButton: 'Crear GiroCode gratis →',
      }}
    />
  );
}
