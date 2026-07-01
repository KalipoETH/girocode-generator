import type { Metadata } from 'next';
import ApiDocsBetaPage from '@/components/ApiDocsBetaPage';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode API – Documentation | Beta Access',
  description:
    'The GiroCode API documentation is currently in beta. Sign up for early access to the REST API.',
  alternates: {
    canonical: `${SITE_URL}/en/api-docs`,
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

export default function ApiDocsEnPage() {
  return <ApiDocsBetaPage locale="en" />;
}
