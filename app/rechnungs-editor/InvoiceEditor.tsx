'use client';

import React, { useEffect, useRef, useState } from 'react';
import { track } from '@vercel/analytics';

type Locale = 'de' | 'en' | 'fr' | 'es' | 'it';

const labels: Record<Locale, { title: string; subtitle: string; badge: string; reset: string; download: string; generating: string }> = {
  de: {
    title: 'Rechnungs-Editor',
    subtitle: 'Gestalte deine Rechnung individuell – Drag & Drop, eigenes Logo, freie Gestaltung.',
    badge: 'Neu · Visueller Editor',
    reset: 'Vorlage zurücksetzen',
    download: 'PDF herunterladen ↓',
    generating: 'PDF wird erstellt …',
  },
  en: {
    title: 'Invoice Editor',
    subtitle: 'Design your invoice individually – drag & drop, your own logo, free layout.',
    badge: 'New · Visual Editor',
    reset: 'Reset template',
    download: 'Download PDF ↓',
    generating: 'Generating PDF …',
  },
  fr: {
    title: 'Éditeur de facture',
    subtitle: 'Concevez votre facture individuellement – glisser-déposer, logo personnel, mise en page libre.',
    badge: 'Nouveau · Éditeur visuel',
    reset: 'Réinitialiser le modèle',
    download: 'Télécharger PDF ↓',
    generating: 'Génération du PDF…',
  },
  es: {
    title: 'Editor de facturas',
    subtitle: 'Diseña tu factura individualmente – arrastrar y soltar, logo propio, diseño libre.',
    badge: 'Nuevo · Editor visual',
    reset: 'Restablecer plantilla',
    download: 'Descargar PDF ↓',
    generating: 'Generando PDF…',
  },
  it: {
    title: 'Editor Fatture con GiroCode',
    subtitle:
      'Progetta la tua fattura individualmente – Drag & Drop, logo personalizzato, GiroCode integrato.',
    badge: '✨ Nuovo · Editor Visuale',
    reset: 'Reimposta modello',
    download: 'Scarica PDF ↓',
    generating: 'Generazione PDF…',
  },
};

const invoiceTemplate = {
  basePdf: { width: 210, height: 297, padding: [10, 10, 10, 10] as [number, number, number, number] },
  schemas: [
    [
      {
        name: 'title',
        type: 'text',
        position: { x: 10, y: 10 },
        width: 80,
        height: 15,
        fontSize: 24,
        fontColor: '#000000',
        content: 'Rechnung',
      },
      {
        name: 'invoiceNumber',
        type: 'text',
        position: { x: 10, y: 28 },
        width: 80,
        height: 8,
        fontSize: 10,
        fontColor: '#666666',
        content: 'Nr.: 2026-001',
      },
      {
        name: 'date',
        type: 'text',
        position: { x: 10, y: 38 },
        width: 80,
        height: 8,
        fontSize: 10,
        fontColor: '#666666',
        content: `Datum: ${new Date().toLocaleDateString('de-DE')}`,
      },
      {
        name: 'logo',
        type: 'image',
        position: { x: 150, y: 10 },
        width: 50,
        height: 30,
      },
      {
        name: 'divider',
        type: 'line',
        position: { x: 10, y: 55 },
        width: 190,
        height: 0.5,
        color: '#cccccc',
      },
      {
        name: 'sender',
        type: 'text',
        position: { x: 10, y: 60 },
        width: 90,
        height: 40,
        fontSize: 9,
        fontColor: '#000000',
        content: 'Absender\nMax Mustermann\nMusterstraße 1\n12345 Musterstadt',
      },
      {
        name: 'recipient',
        type: 'text',
        position: { x: 110, y: 60 },
        width: 90,
        height: 40,
        fontSize: 9,
        fontColor: '#000000',
        content: 'Empfänger\nKunde GmbH\nKundenstraße 2\n54321 Kundenstadt',
      },
      {
        name: 'description',
        type: 'text',
        position: { x: 10, y: 115 },
        width: 190,
        height: 50,
        fontSize: 9,
        fontColor: '#000000',
        content: 'Leistungsbeschreibung\nWebdesign & Entwicklung',
      },
      {
        name: 'amountBox',
        type: 'rectangle',
        position: { x: 10, y: 175 },
        width: 90,
        height: 35,
        borderColor: '#cccccc',
        borderWidth: 0.5,
        color: '#f5f5f5',
      },
      {
        name: 'amounts',
        type: 'text',
        position: { x: 12, y: 177 },
        width: 86,
        height: 31,
        fontSize: 9,
        fontColor: '#000000',
        content: 'Netto          200,00 €\nUSt (19,00 %)   38,00 €\nBrutto gesamt  238,00 €',
      },
      {
        name: 'qrCode',
        type: 'image',
        position: { x: 115, y: 175 },
        width: 40,
        height: 40,
      },
      {
        name: 'qrLabel',
        type: 'text',
        position: { x: 115, y: 217 },
        width: 80,
        height: 6,
        fontSize: 7,
        fontColor: '#999999',
        content: 'GiroCode – per Banking-App scannen',
      },
      {
        name: 'footer',
        type: 'text',
        position: { x: 10, y: 285 },
        width: 190,
        height: 6,
        fontSize: 7,
        fontColor: '#999999',
        alignment: 'center',
        content: 'Erstellt lokal im Browser · keine Datenübertragung',
      },
    ],
  ],
};

interface Props {
  locale: Locale;
}

export function InvoiceEditor({ locale }: Props) {
  const t = labels[locale];
  const containerRef = useRef<HTMLDivElement & { _designer?: unknown }>(null);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    let designer: { destroy: () => void; getTemplate: () => typeof invoiceTemplate } | undefined;

    (async () => {
      try {
        const { Designer } = await import('@pdfme/ui');
        const { text, image, line, rectangle } = await import('@pdfme/schemas');

        designer = new Designer({
          domContainer: containerRef.current!,
          template: invoiceTemplate,
          plugins: { text, image, line, rectangle },
          options: {
            lang: locale === 'fr' ? 'fr' : locale === 'es' ? 'es' : locale === 'en' ? 'en' : 'de',
            theme: {
              token: {
                colorPrimary: '#22c55e',
              },
            },
          },
        }) as unknown as typeof designer;

        (containerRef.current as NonNullable<typeof containerRef.current>)._designer = designer;
        setReady(true);
      } catch (e) {
        console.error('Designer konnte nicht geladen werden:', e);
        setError('Editor konnte nicht geladen werden. Bitte Seite neu laden.');
      }
    })();

    return () => {
      designer?.destroy?.();
    };
  }, [locale]);

  const handleReset = () => {
    const d = containerRef.current?._designer as { updateTemplate?: (t: unknown) => void } | undefined;
    d?.updateTemplate?.(invoiceTemplate);
  };

  const handleGeneratePDF = async () => {
    const d = containerRef.current?._designer as { getTemplate?: () => unknown } | undefined;
    if (!d?.getTemplate) return;

    setGenerating(true);
    setError(null);
    try {
      const { generate } = await import('@pdfme/generator');
      const { text, image, line, rectangle } = await import('@pdfme/schemas');

      const template = d.getTemplate();
      const pdf = await generate({
        template: template as Parameters<typeof generate>[0]['template'],
        inputs: [{}],
        plugins: { text, image, line, rectangle },
      });

      const blob = new Blob([pdf], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Rechnung.pdf';
      link.click();
      URL.revokeObjectURL(url);
      track('invoice_editor_pdf_generated', { locale });
    } catch (e) {
      console.error('PDF-Generierung fehlgeschlagen:', e);
      setError('PDF konnte nicht erstellt werden.');
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#0b0c10] text-slate-100">
      {/* Hero */}
      <div className="mx-auto w-full max-w-7xl px-4 pt-8 pb-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-xs font-medium text-emerald-400">
              {t.badge}
            </span>
            <h1 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl">
              {t.title}
            </h1>
            <p className="text-sm text-slate-400">{t.subtitle}</p>
          </div>

          {/* Buttons */}
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={handleReset}
              disabled={!ready}
              className="rounded-full border border-slate-600/60 bg-slate-800/70 px-4 py-2 text-xs font-medium text-slate-300 transition hover:border-slate-500 hover:bg-slate-700/70 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {t.reset}
            </button>
            <button
              type="button"
              onClick={handleGeneratePDF}
              disabled={generating || !ready}
              className="rounded-full bg-emerald-500 px-5 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {generating ? t.generating : t.download}
            </button>
          </div>
        </div>

        {error && (
          <p className="mt-2 text-xs text-red-400">{error}</p>
        )}
      </div>

      {/* Designer Container */}
      <div className="flex-1 px-4 pb-6">
        {!ready && !error && (
          <div className="flex h-64 items-center justify-center rounded-xl border border-[#1f2431] bg-[#121318] text-sm text-slate-400">
            Editor wird geladen …
          </div>
        )}
        <div
          ref={containerRef}
          className="rounded-xl border border-[#1f2431] overflow-hidden"
          style={{ height: 'calc(100vh - 200px)', display: ready ? 'block' : 'none' }}
        />
      </div>
    </div>
  );
}
