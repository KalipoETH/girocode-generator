'use client';

import { Analytics } from '@vercel/analytics/next';
import { redactQueryParams } from '@/lib/analyticsRedaction';

// Sicherheitsnetz: hält Query-Parameter aus Pageviews UND Custom Events heraus,
// falls doch einmal sensible Daten in einer URL landen. Die eigentliche
// Vermeidung passiert an der Quelle (siehe lib/scanHandoff.ts).
export function AnalyticsRedacted() {
  return <Analytics beforeSend={redactQueryParams} />;
}
