'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import type { InvoiceData, PdfLocale } from '../lib/pdf';
import { makePDF } from '../lib/pdf';
import { en } from '../lib/translations/en';
import { fr } from '../lib/translations/fr';
import { es } from '../lib/translations/es';

type Locale = PdfLocale;

function getLocaleFromPathname(pathname: string | null): Locale {
  if (!pathname) return 'de';
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
  if (pathname === '/fr' || pathname.startsWith('/fr/')) return 'fr';
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es';
  return 'de';
}

interface PdfButtonProps {
  locale: Locale;
  invoiceData: Omit<InvoiceData, 'qrPngDataUrl' | 'logoBytes' | 'logoMimeType'>;
  qrPngDataUrl: string | null;
  logoBytes?: Uint8Array | null;
  logoMimeType?: 'image/png' | 'image/jpeg';
}

function getTexts(locale: Locale) {
  if (locale === 'en') {
    return {
      generating: 'Generating PDF …',
      download: en.invoice.download,
      errorNoQr: 'Please generate a GiroCode first before creating the PDF.',
      errorGeneric: 'Error while creating the PDF. Please check the input and QR code.',
      filePrefix: 'Invoice',
    };
  }

  if (locale === 'fr') {
    return {
      generating: 'Génération du PDF…',
      download: fr.invoice.download,
      errorNoQr: 'Veuillez d’abord générer un GiroCode avant de créer le PDF.',
      errorGeneric:
        'Erreur lors de la création du PDF. Veuillez vérifier les données et le code QR.',
      filePrefix: 'Facture',
    };
  }

  if (locale === 'es') {
    return {
      generating: 'Generando PDF…',
      download: es.invoice.download,
      errorNoQr: 'Genera primero un GiroCode antes de crear el PDF.',
      errorGeneric:
        'Error al crear el PDF. Comprueba los datos introducidos y el código QR.',
      filePrefix: 'Factura',
    };
  }

  return {
    generating: 'PDF wird erzeugt …',
    download: 'Rechnungs-PDF herunterladen',
    errorNoQr: 'Bitte zuerst einen GiroCode erzeugen, bevor die PDF erstellt wird.',
    errorGeneric:
      'Fehler bei der PDF-Erstellung. Bitte Eingaben und QR-Code prüfen.',
    filePrefix: 'Rechnung',
  };
}

export const PdfButton: React.FC<PdfButtonProps> = ({
  locale: localeProp,
  invoiceData,
  qrPngDataUrl,
  logoBytes,
  logoMimeType,
}) => {
  const pathname = usePathname();
  const locale = pathname ? getLocaleFromPathname(pathname) : (localeProp ?? 'de');
  const t = getTexts(locale);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    if (!qrPngDataUrl) {
      setError(t.errorNoQr);
      return;
    }

    setError(null);
    setIsGenerating(true);
    try {
      const fullData: InvoiceData = {
        ...invoiceData,
        qrPngDataUrl,
        logoBytes: logoBytes ?? undefined,
        logoMimeType: logoMimeType ?? undefined,
      };

      const pdfBytes = await makePDF(fullData, locale);
      const blob = new Blob([pdfBytes as unknown as BlobPart], {
        type: 'application/pdf',
      });

      const fileNameSafe =
        invoiceData.invoiceNumber?.trim() || 'ohne_nummer';
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${t.filePrefix}_${fileNameSafe}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      setError(t.errorGeneric);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={isGenerating}
        className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-emerald-500/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        {isGenerating ? t.generating : t.download}
      </button>
      {error && (
        <p className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};

