import type { Metadata } from 'next';
import ApiAccessLanding from '@/components/ApiAccessLanding';

export const metadata: Metadata = {
  title: 'GiroCode API – Early Access | Sign Up Now',
  description:
    'Get early access to the GiroCode API. Join the waitlist and be notified when the API becomes available.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/en/api-access',
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

export default function ApiAccessEnPage() {
  return <ApiAccessLanding locale="en" />;
}
