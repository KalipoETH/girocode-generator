'use client';

import React, { useState, useEffect, useRef } from 'react';
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
      nlSuccess: '✅ PDF successfully created!',
      nlTeaser: '💡 Want free invoice templates every month?',
      nlPlaceholder: 'your@email.com',
      nlButton: 'Get them now →',
      nlDisclaimer: 'No spam · Unsubscribe anytime',
      nlDone: '🎉 Great! Check your inbox.',
      nlError: 'Error. Please try again.',
    };
  }

  if (locale === 'fr') {
    return {
      generating: 'Génération du PDF…',
      download: fr.invoice.download,
      errorNoQr: "Veuillez d'abord générer un GiroCode avant de créer le PDF.",
      errorGeneric:
        'Erreur lors de la création du PDF. Veuillez vérifier les données et le code QR.',
      filePrefix: 'Facture',
      nlSuccess: '✅ PDF créé avec succès!',
      nlTeaser: '💡 Voulez-vous des modèles de factures gratuits chaque mois?',
      nlPlaceholder: 'votre@email.fr',
      nlButton: 'Les obtenir →',
      nlDisclaimer: 'Sans spam · Désinscription à tout moment',
      nlDone: '🎉 Super! Vérifiez votre boîte mail.',
      nlError: 'Erreur. Veuillez réessayer.',
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
      nlSuccess: '✅ ¡PDF creado con éxito!',
      nlTeaser: '💡 ¿Quieres plantillas de factura gratuitas cada mes?',
      nlPlaceholder: 'tu@email.es',
      nlButton: 'Obtenerlas →',
      nlDisclaimer: 'Sin spam · Cancelar en cualquier momento',
      nlDone: '🎉 ¡Genial! Revisa tu bandeja de entrada.',
      nlError: 'Error. Por favor, inténtalo de nuevo.',
    };
  }

  return {
    generating: 'PDF wird erzeugt …',
    download: 'Rechnungs-PDF herunterladen',
    errorNoQr: 'Bitte zuerst einen GiroCode erzeugen, bevor die PDF erstellt wird.',
    errorGeneric:
      'Fehler bei der PDF-Erstellung. Bitte Eingaben und QR-Code prüfen.',
    filePrefix: 'Rechnung',
    nlSuccess: '✅ PDF erfolgreich erstellt!',
    nlTeaser: '💡 Möchtest du monatlich kostenlose Rechnungsvorlagen?',
    nlPlaceholder: 'deine@email.de',
    nlButton: 'Jetzt erhalten →',
    nlDisclaimer: 'Kein Spam · Jederzeit abmeldbar',
    nlDone: '🎉 Super! Schau in dein Postfach.',
    nlError: 'Fehler. Bitte versuche es erneut.',
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

  const [showNewsletter, setShowNewsletter] = useState(false);
  const [nlEmail, setNlEmail] = useState('');
  const [nlStatus, setNlStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const autoHideRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (autoHideRef.current) clearTimeout(autoHideRef.current);
    };
  }, []);

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

      const alreadyShown = sessionStorage.getItem('newsletter_shown') === 'true';
      if (!alreadyShown) {
        setTimeout(() => setShowNewsletter(true), 1500);
      }
    } catch {
      setError(t.errorGeneric);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleNlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNlStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: nlEmail }),
      });
      if (!res.ok) {
        setNlStatus('error');
        return;
      }
      setNlStatus('success');
      sessionStorage.setItem('newsletter_shown', 'true');
      autoHideRef.current = setTimeout(() => setShowNewsletter(false), 3000);
    } catch {
      setNlStatus('error');
    }
  };

  const handleNlClose = () => {
    sessionStorage.setItem('newsletter_shown', 'true');
    setShowNewsletter(false);
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

      {showNewsletter && (
        <div
          style={{
            background: '#0f1a0f',
            border: '1px solid rgba(34,197,94,0.25)',
            borderRadius: '12px',
            padding: '16px',
            animation: 'nlSlideIn 0.4s ease-out forwards',
          }}
        >
          <style>{`
            @keyframes nlSlideIn {
              from { opacity: 0; transform: translateY(20px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>

          <div className="flex items-start justify-between gap-2">
            <span className="text-sm font-semibold text-emerald-400">
              {t.nlSuccess}
            </span>
            <button
              type="button"
              onClick={handleNlClose}
              aria-label="Schließen"
              className="shrink-0 text-slate-500 hover:text-slate-300 transition-colors text-xs leading-none"
            >
              ✕
            </button>
          </div>

          {nlStatus === 'success' ? (
            <p className="mt-3 text-sm text-emerald-300">{t.nlDone}</p>
          ) : (
            <>
              <hr className="my-2 border-white/10" />
              <p className="mb-3 text-xs text-slate-300">{t.nlTeaser}</p>

              <form onSubmit={handleNlSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={nlEmail}
                  onChange={(e) => setNlEmail(e.target.value)}
                  placeholder={t.nlPlaceholder}
                  className="min-w-0 flex-1 rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-1.5 text-xs text-slate-200 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/30"
                />
                <button
                  type="submit"
                  disabled={nlStatus === 'loading'}
                  className="shrink-0 rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-slate-950 transition hover:bg-emerald-400 disabled:opacity-60"
                >
                  {nlStatus === 'loading' ? '…' : t.nlButton}
                </button>
              </form>

              {nlStatus === 'error' && (
                <p className="mt-2 text-xs text-red-400">{t.nlError}</p>
              )}

              <p className="mt-2 text-[10px] text-slate-600">{t.nlDisclaimer}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};
