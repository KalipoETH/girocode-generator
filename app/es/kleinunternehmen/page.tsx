import type { Metadata } from 'next';
import { UseCaseLanding } from '../../../components/UseCaseLanding';

const SLUG = 'kleinunternehmen';

export const metadata: Metadata = {
  title: 'GiroCode para Pequeñas Empresas – Facturas profesionales',
  description:
    'Facturas profesionales para tu pyme: GiroCode + factura PDF conforme UE en 2 minutos. Sin suscripción, sin software – gratis y seguro.',
  keywords:
    'girocode pyme, factura pyme qr code, sepa qr sl, software facturacion gratis',
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

export default function KleinunternehmenEsPage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'es',
        generatorHref: '/es',
        homeHref: '/es',
        homeLabel: 'Inicio',
        breadcrumbLabel: 'Pequeñas Empresas',
        badge: 'Para Pymes & SLs',
        h1: 'Facturas profesionales para tu pequeña empresa',
        subtitle:
          'Datos obligatorios conformes, diseño PDF limpio, GiroCode integrado – sin software de contabilidad caro ni suscripciones mensuales.',
        problemHeadline: 'El problema: facturar cuesta tiempo y dinero',
        problemIntro:
          'Las pymes necesitan facturas a diario – pero la industria las empuja a suscripciones de software caras. Muchos autónomos y empresarios sufren:',
        painPoints: [
          'Software de facturación caro – suscripciones mensuales para funciones que nunca usas',
          'Miedo a menciones obligatorias incorrectas – el asesor tiene que revisarlo todo',
          'Horas redactando facturas – copiar y pegar desde plantillas Word',
        ],
        solutionHeadline: 'La solución: conforme, rápida y gratuita',
        solutionIntro:
          'Nuestro generador crea una factura PDF conforme UE con logo, GiroCode y todas las menciones obligatorias – en 2 minutos y sin suscripción.',
        benefits: [
          {
            icon: '🆓',
            title: 'Gratis – sin suscripción',
            description:
              'Sin costes ocultos, sin niveles premium, sin límites – simplemente facturas profesionales.',
          },
          {
            icon: '📋',
            title: 'Facturas conformes UE',
            description:
              'Dirección, NIF, número de factura, fecha, descripción del servicio, totales base/IVA/total – todo incluido.',
          },
          {
            icon: '⏱️',
            title: 'Factura en 2 minutos',
            description:
              'Introduce los datos, sube el logo, el GiroCode se integra automáticamente – descarga el PDF y envíalo.',
          },
        ],
        stepsHeadline: 'Tu factura en 3 pasos',
        steps: [
          {
            title: 'Guarda tus datos una sola vez',
            description:
              'Nombre de empresa, dirección, NIF, IBAN, logo – todo se guarda localmente en tu navegador.',
          },
          {
            title: 'Introduce los datos del trabajo',
            description:
              'Beneficiario, descripción, importe base e IVA. El generador calcula el total y crea el GiroCode.',
          },
          {
            title: 'Generar PDF & enviar',
            description:
              'Descarga la factura A4 con GiroCode integrado y envíala directamente al cliente por email.',
          },
        ],
        faqHeadline: 'Preguntas frecuentes para pymes',
        faq: [
          {
            question: '¿La factura cumple los requisitos obligatorios?',
            answer:
              'Sí, siempre que rellenes todos los campos obligatorios: nombre y dirección de emisor y destinatario, NIF o CIF, fecha, número de factura, descripción del servicio, base imponible, tipo e importe de IVA (o aviso de exención si aplica), total.',
          },
          {
            question: '¿Funciona también con régimen especial de IVA / recargo?',
            answer:
              'Sí. Pon el tipo de IVA a 0% y añade en la descripción el aviso de exención (p. ej. "Exento de IVA según art. 20 Ley 37/1992"). Puedes guardarlo como aviso por defecto.',
          },
          {
            question: '¿Dónde se almacenan mis datos de facturación?',
            answer:
              'En ningún sitio de nuestros servidores. Los datos se quedan exclusivamente en tu navegador. Si quieres conservarlos, guarda el PDF localmente o en tu nube.',
          },
          {
            question: '¿Puedo usar numeración correlativa?',
            answer:
              'Sí. Puedes asignar el número de factura libremente (p. ej. "2026-001"). Solo asegúrate de que la numeración sea continua – es obligatorio.',
          },
          {
            question: '¿La factura es válida para conservación legal?',
            answer:
              'El PDF generado es inalterable y, por tanto, apto para conservación. La gestión completa del archivo (sistema, documentación de procedimientos) recae en ti, como con cualquier software de facturación.',
          },
        ],
        ctaHeadline: '¿Listo para facturas sin estrés?',
        ctaText:
          'Crea tu primera factura con GiroCode en 2 minutos – gratis, sin suscripción, sin registro. Local en tu navegador.',
        ctaButton: 'Crear GiroCode gratis →',
      }}
    />
  );
}
