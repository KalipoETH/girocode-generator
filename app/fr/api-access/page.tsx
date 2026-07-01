import type { Metadata } from 'next';
import ApiAccessLanding from '@/components/ApiAccessLanding';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'API GiroCode – Accès Anticipé | Inscrivez-vous',
  description:
    "Obtenez un accès anticipé à l'API GiroCode. Inscrivez-vous sur la liste d'attente et soyez notifié dès que l'API sera disponible.",
  alternates: {
    canonical: `${SITE_URL}/fr/api-access`,
    languages: {
      'x-default': `${SITE_URL}/api-access`,
      de: `${SITE_URL}/api-access`,
      en: `${SITE_URL}/en/api-access`,
      fr: `${SITE_URL}/fr/api-access`,
      es: `${SITE_URL}/es/api-access`,
      it: `${SITE_URL}/it/api-access`,
    },
  },
};

export default function ApiAccessFrPage() {
  return <ApiAccessLanding locale="fr" />;
}
