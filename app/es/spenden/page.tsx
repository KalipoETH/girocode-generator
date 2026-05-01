import type { Metadata } from 'next';
import { UseCaseLanding } from '../../../components/UseCaseLanding';

const SLUG = 'spenden';

export const metadata: Metadata = {
  title: 'GiroCode para Donaciones – Código QR SEPA para recaudación',
  description:
    'Más donaciones mediante escaneo fácil: un GiroCode en folletos, carteles y webs deja donar en 10 segundos – sin escribir IBAN, sin abandonos.',
  keywords:
    'girocode donacion, codigo qr donacion, sepa qr recaudacion, ong qr code, fundraising qr',
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

export default function SpendenEsPage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'es',
        generatorHref: '/es',
        homeHref: '/es',
        homeLabel: 'Inicio',
        breadcrumbLabel: 'Donaciones',
        badge: 'Para Recaudación & ONGs',
        h1: 'Más donaciones mediante escaneo fácil',
        subtitle:
          'Imprime un GiroCode en folletos, carteles o tu página de donación. "Donaré después" se convierte en "Dono ahora" – en diez segundos.',
        problemHeadline: 'El problema: las buenas intenciones se desvanecen',
        problemIntro:
          'Los estudios lo demuestran: más del 70% de quienes quieren donar abandonan el proceso. Estas tres barreras son las principales:',
        painPoints: [
          'Donantes quieren donar – pero el camino es demasiado complicado',
          'Muchos abandonan en cuanto tienen que escribir el IBAN',
          'La referencia se olvida – la donación no se puede asignar',
        ],
        solutionHeadline: 'La solución: GiroCode reduce drásticamente la barrera',
        solutionIntro:
          'Un único código QR es suficiente. Los donantes abren la app bancaria, escanean, confirman – y el importe llega a vuestra cuenta con la referencia correcta.',
        benefits: [
          {
            icon: '⚡',
            title: 'Escanear & donar en 10 segundos',
            description:
              'Sin búsqueda de IBAN ni escritura: un escaneo, un importe, listo.',
          },
          {
            icon: '💸',
            title: 'Sin importe – donantes eligen',
            description:
              'Deja el importe vacío. Los donantes introducen la cantidad que quieran en la app bancaria.',
          },
          {
            icon: '📰',
            title: 'En folletos & carteles',
            description:
              'Descarga el PNG y úsalo en material impreso, web, emails o publicaciones en redes sociales.',
          },
        ],
        stepsHeadline: 'Tu GiroCode de donación en 3 pasos',
        steps: [
          {
            title: 'Introduce la cuenta de donación',
            description:
              'IBAN, beneficiario (asociación/ONG) y concepto (p. ej. "Donación campaña 2026") en el generador.',
          },
          {
            title: 'Deja el importe abierto o sugiérelo',
            description:
              'Deja el campo vacío para donaciones libres – o establece un importe sugerido (p. ej. 25 €) para campañas con suma fija.',
          },
          {
            title: 'Comparte & usa el QR',
            description:
              'Pon el código en cartel, folleto, web, mailing o gráfico de redes. Los donantes escanean con su app bancaria.',
          },
        ],
        faqHeadline: 'Preguntas frecuentes sobre GiroCode para donaciones',
        faq: [
          {
            question: '¿Necesitamos un QR distinto por cada donación?',
            answer:
              'No. Un único QR sirve para toda una campaña – con o sin importe fijo. Para diferenciar campañas, crea un código por campaña con su propio concepto.',
          },
          {
            question: '¿Pueden donar sin importe fijo?',
            answer:
              'Sí. Si dejas el importe vacío, la app bancaria del donante le pedirá el importe. Ideal para donaciones libres.',
          },
          {
            question: '¿Las donaciones por GiroCode son deducibles fiscalmente?',
            answer:
              'Sí, siempre que vuestra organización tenga reconocido carácter no lucrativo. La donación es una transferencia SEPA normal – aparece en el certificado como cualquier otra.',
          },
          {
            question: '¿Funciona en carteles y grandes formatos?',
            answer:
              'Sí. Importante: mantener al menos 2x2 cm y buen contraste. En carteles imprime más grande (5\u201310 cm) para que se pueda escanear desde varios metros.',
          },
          {
            question: '¿Se almacenan datos del donante?',
            answer:
              'No. El generador funciona totalmente en local en tu navegador – no vemos ni tus datos ni los del donante. Los datos del donante solo los gestiona su banco.',
          },
        ],
        ctaHeadline: '¿Listo para más donaciones?',
        ctaText:
          'Crea en 2 minutos el GiroCode de tu próxima campaña – gratis, sin registro, listo para folleto, cartel y web.',
        ctaButton: 'Crear GiroCode gratis →',
      }}
    />
  );
}
