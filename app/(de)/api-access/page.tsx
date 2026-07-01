import type { Metadata } from 'next';
import ApiAccessLanding from '@/components/ApiAccessLanding';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'GiroCode API – Frühzeitiger Zugang | Jetzt anmelden',
  description:
    'Erhalte frühzeitigen Zugang zur GiroCode API. Trage dich in die Warteliste ein und werde benachrichtigt wenn die API verfügbar ist.',
  alternates: { canonical: `${SITE_URL}/api-access` },
};

export default function ApiAccessPage() {
  return <ApiAccessLanding locale="de" />;
}
