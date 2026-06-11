import type { Metadata } from 'next';
import ApiAccessLanding from '@/components/ApiAccessLanding';

export const metadata: Metadata = {
  title: 'API GiroCode – Acceso Anticipado | Regístrate',
  description:
    'Obtén acceso anticipado a la API GiroCode. Apúntate a la lista de espera y recibe una notificación cuando la API esté disponible.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/api-access',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/api-access',
      de: 'https://www.girocodegenerator.com/api-access',
      en: 'https://www.girocodegenerator.com/en/api-access',
      fr: 'https://www.girocodegenerator.com/fr/api-access',
      es: 'https://www.girocodegenerator.com/es/api-access',
      it: 'https://www.girocodegenerator.com/it/api-access',
    },
  },
};

export default function ApiAccessEsPage() {
  return <ApiAccessLanding locale="es" />;
}
