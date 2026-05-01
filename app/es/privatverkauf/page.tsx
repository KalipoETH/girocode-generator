import type { Metadata } from 'next';
import { UseCaseLanding } from '../../../components/UseCaseLanding';

const SLUG = 'privatverkauf';

export const metadata: Metadata = {
  title: 'GiroCode para Ventas Privadas – Anuncios & más',
  description:
    'Gestiona ventas privadas de forma segura: GiroCode en lugar de comisiones PayPal – el comprador escanea con su app bancaria, recibes una transferencia SEPA garantizada. Gratis & sin registro.',
  keywords:
    'girocode venta privada, wallapop qr code, sepa qr particular, anuncios pago seguro',
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

export default function PrivatverkaufEsPage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'es',
        generatorHref: '/es',
        homeHref: '/es',
        homeLabel: 'Inicio',
        breadcrumbLabel: 'Ventas Privadas',
        badge: 'Para Ventas Privadas & Anuncios',
        h1: 'Gestionar ventas privadas de forma segura y fácil',
        subtitle:
          'Sin comisiones de PayPal ni estrés de efectivo: envía un GiroCode al comprador. Escanea, transfiere – y ves el dinero en tu cuenta antes de que salga por la puerta.',
        problemHeadline: 'El problema: los métodos de pago son injustos o inseguros',
        problemIntro:
          'En anuncios clasificados pierdes dinero o nervios. Estos tres puntos hacen frustrantes las ventas privadas:',
        painPoints: [
          'PayPal cobra comisiones – y la opción "Amigos" excluye la protección al comprador',
          'Los compradores dudan al introducir el IBAN – errores y retrasos',
          'Sin sistema de pago común – cada uno quiere pagar por un servicio distinto',
        ],
        solutionHeadline: 'La solución: una transferencia SEPA – pero inteligente',
        solutionIntro:
          'Envía al comprador un GiroCode. Escanea con la app bancaria que prefiera, tú recibes una transferencia SEPA real – sin terceros, sin comisiones.',
        benefits: [
          {
            icon: '💰',
            title: 'Sin comisiones como PayPal',
            description:
              '¿2,9% + 35 ct? Aquí no. Las transferencias SEPA en la eurozona son gratuitas – recibes exactamente el importe acordado.',
          },
          {
            icon: '🛡️',
            title: 'Transferencia SEPA segura',
            description:
              'La transferencia va directa entre bancos. Sin terceros, sin cuentas congeladas, sin chargebacks.',
          },
          {
            icon: '📲',
            title: 'Comprador escanea con app bancaria',
            description:
              'No importa el banco: Sparkasse, ING, Volksbank, DKB, N26 y otros escanean el GiroCode con su propia app.',
          },
        ],
        stepsHeadline: 'Tu venta privada segura en 3 pasos',
        steps: [
          {
            title: 'Introduce los datos',
            description:
              'Tu IBAN, tu nombre (beneficiario), precio de venta y concepto (p. ej. "Venta bicicleta azul") en el generador.',
          },
          {
            title: 'Envía el GiroCode al comprador',
            description:
              'Descarga el QR como PNG y envíalo por mensajería o email – o imprímelo para la entrega en mano.',
          },
          {
            title: 'Verifica la transferencia & entrega',
            description:
              'El comprador escanea con su app bancaria y transfiere al instante. Entrega el artículo solo cuando veas el ingreso en tu cuenta – no un simple SMS.',
          },
        ],
        faqHeadline: 'Preguntas frecuentes para vendedores particulares',
        faq: [
          {
            question: '¿Es realmente segura una transferencia SEPA para el vendedor?',
            answer:
              'Sí. Una transferencia SEPA ejecutada no puede ser anulada unilateralmente por el comprador – a diferencia de la protección PayPal. Pero espera siempre a ver el ingreso en tu cuenta antes de entregar el artículo, no solo un SMS o una captura.',
          },
          {
            question: '¿Cuánto tarda una transferencia SEPA en una venta privada?',
            answer:
              'Desde 2025, SEPA Instant es obligatorio para la mayoría de bancos europeos – el dinero llega en 10 segundos. En transferencias SEPA normales, 1 día hábil.',
          },
          {
            question: '¿Qué pasa si el comprador transfiere datos incorrectos?',
            answer:
              'Con el GiroCode el comprador no puede introducir datos erróneos – IBAN, beneficiario e importe se toman del QR. Adiós a los errores de escritura.',
          },
          {
            question: '¿El comprador obtiene todos mis datos bancarios?',
            answer:
              'Sí, tu nombre e IBAN se codifican en el QR – es necesario para cualquier transferencia. Solo con estos datos nadie puede sacar dinero de tu cuenta.',
          },
          {
            question: '¿Puedo poner el GiroCode directamente en el anuncio?',
            answer:
              'Técnicamente sí – pero recomendamos enviarlo solo tras confirmar la compra. Así tu IBAN no queda visible públicamente en la plataforma.',
          },
        ],
        ctaHeadline: '¿Listo para ventas privadas justas?',
        ctaText:
          'Crea en 60 segundos un GiroCode para tu próxima venta – gratis, sin registro, sin comisiones.',
        ctaButton: 'Crear GiroCode gratis →',
      }}
    />
  );
}
