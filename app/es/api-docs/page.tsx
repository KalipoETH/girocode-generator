import type { Metadata } from 'next';
import ApiDocsBetaPage from '@/components/ApiDocsBetaPage';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'API GiroCode – Documentación | Acceso Beta',
  description:
    'La documentación API de GiroCode está actualmente en beta. Regístrate para acceso anticipado a la API REST.',
  alternates: {
    canonical: `${SITE_URL}/es/api-docs`,
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

export default function ApiDocsEsPage() {
  return <ApiDocsBetaPage locale="es" />;
}
