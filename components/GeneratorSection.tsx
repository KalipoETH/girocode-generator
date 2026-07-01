'use client';

import { useState } from 'react';
import { GiroCodeForm } from './GiroCodeForm';
import { InvoiceForm } from './InvoiceForm';
import { TimeSavingsCalculator } from './TimeSavingsCalculator';

type Locale = 'de' | 'en' | 'fr' | 'es' | 'it';

interface Props {
  locale?: Locale;
  dividerLabel?: string;
}

export function GeneratorSection({ locale = 'de', dividerLabel = 'Rechnungs-PDF' }: Props) {
  const [qrPngDataUrl, setQrPngDataUrl] = useState<string | null>(null);

  return (
    <section id="generator" className="flex flex-col gap-6">
      <div className="animate-card-in" style={{ animationDelay: '0.1s' }}>
        <GiroCodeForm locale={locale} onQrDataUrlChange={setQrPngDataUrl} />
      </div>
      <div className="flex items-center gap-4 my-8">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        <span className="text-slate-500 text-sm px-4">{dividerLabel}</span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </div>
      <div className="animate-card-in" style={{ animationDelay: '0.2s' }}>
        <InvoiceForm locale={locale} qrPngDataUrl={qrPngDataUrl} />
      </div>
      <TimeSavingsCalculator locale={locale} />
    </section>
  );
}
