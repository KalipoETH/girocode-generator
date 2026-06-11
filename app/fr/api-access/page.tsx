import type { Metadata } from 'next';
import ApiAccessLanding from '@/components/ApiAccessLanding';

export const metadata: Metadata = {
  title: 'API GiroCode – Accès Anticipé | Inscrivez-vous',
  description:
    "Obtenez un accès anticipé à l'API GiroCode. Inscrivez-vous sur la liste d'attente et soyez notifié dès que l'API sera disponible.",
  alternates: {
    canonical: 'https://www.girocodegenerator.com/fr/api-access',
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

export default function ApiAccessFrPage() {
  return <ApiAccessLanding locale="fr" />;
}
