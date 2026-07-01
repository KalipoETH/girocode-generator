import type { Metadata } from 'next';
import ApiDocsBetaPage from '@/components/ApiDocsBetaPage';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'API GiroCode – Documentation | Accès Bêta',
  description:
    "La documentation API GiroCode est actuellement en bêta. Inscrivez-vous pour un accès anticipé à l'API REST.",
  alternates: {
    canonical: `${SITE_URL}/fr/api-docs`,
    languages: {
      'x-default': `${SITE_URL}/api-docs`,
      de: `${SITE_URL}/api-docs`,
      en: `${SITE_URL}/en/api-docs`,
      fr: `${SITE_URL}/fr/api-docs`,
      es: `${SITE_URL}/es/api-docs`,
      it: `${SITE_URL}/it/api-docs`,
    },
  },
};

export default function ApiDocsFrPage() {
  return <ApiDocsBetaPage locale="fr" />;
}
