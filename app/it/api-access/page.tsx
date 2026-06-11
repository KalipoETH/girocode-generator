import type { Metadata } from 'next';
import ApiAccessLanding from '@/components/ApiAccessLanding';

export const metadata: Metadata = {
  title: 'API GiroCode – Accesso Anticipato | Lista d\'Attesa',
  description:
    'Ottieni accesso anticipato all\'API GiroCode. Iscriviti alla lista d\'attesa e ricevi una notifica quando l\'API sarà disponibile.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/it/api-access',
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

export default function ApiAccessItPage() {
  return <ApiAccessLanding locale="it" />;
}
