import type { Metadata } from 'next';
import ApiAccessLanding from '@/components/ApiAccessLanding';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'API GiroCode – Acceso Anticipado | Regístrate',
  description:
    'Obtén acceso anticipado a la API GiroCode. Apúntate a la lista de espera y recibe una notificación cuando la API esté disponible.',
  alternates: {
    canonical: `${SITE_URL}/es/api-access`,
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

export default function ApiAccessEsPage() {
  return <ApiAccessLanding locale="es" />;
}
