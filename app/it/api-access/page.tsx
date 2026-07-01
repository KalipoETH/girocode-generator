import type { Metadata } from 'next';
import ApiAccessLanding from '@/components/ApiAccessLanding';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'API GiroCode – Accesso Anticipato | Lista d\'Attesa',
  description:
    'Ottieni accesso anticipato all\'API GiroCode. Iscriviti alla lista d\'attesa e ricevi una notifica quando l\'API sarà disponibile.',
  alternates: {
    canonical: `${SITE_URL}/it/api-access`,
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

export default function ApiAccessItPage() {
  return <ApiAccessLanding locale="it" />;
}
