import type { Metadata } from 'next';
import ApiAccessLanding from '@/components/ApiAccessLanding';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode API – Early Access | Sign Up Now',
  description:
    'Get early access to the GiroCode API. Join the waitlist and be notified when the API becomes available.',
  alternates: {
    canonical: `${SITE_URL}/en/api-access`,
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

export default function ApiAccessEnPage() {
  return <ApiAccessLanding locale="en" />;
}
