import type { Metadata } from 'next';
import ApiDocsBetaPage from '@/components/ApiDocsBetaPage';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode API – Dokumentation | Beta-Zugang',
  description:
    'Die GiroCode API-Dokumentation ist derzeit in der Beta-Phase. Melde dich an für frühzeitigen Zugang zur REST API.',
  alternates: { canonical: `${SITE_URL}/api-docs` },
};

export default function ApiDocsPage() {
  return <ApiDocsBetaPage locale="de" />;
}
