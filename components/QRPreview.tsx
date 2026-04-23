'use client';

import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { en } from '../lib/translations/en';
import { fr } from '../lib/translations/fr';
import { es } from '../lib/translations/es';

export type QRStatusType = 'success' | 'error' | null;

type Locale = 'de' | 'en' | 'fr' | 'es';

export interface QRPreviewProps {
  locale: Locale;
  epcPayload: string | null;
  statusType: QRStatusType;
  statusMessage: string | null;
  onReset: () => void;
  onQrRendered?: (dataUrl: string | null) => void;
}

interface QRTexts {
  heading: string;
  helper: string;
  fallbackLabel: string;
  fallbackWarning: string;
  emptyText: string;
  reset: string;
  externalAlt: string;
  download: string;
  downloadHint: string;
  sealTitle: string;
  sealSubtitle: string;
}

function getTexts(locale: Locale): QRTexts {
  if (locale === 'en') {
    return {
      heading: en.qr.title,
      helper: en.qr.tip,
      fallbackLabel: en.qr.fallback,
      fallbackWarning: 'Warning: payment data is transmitted to the external service.',
      emptyText: 'No GiroCode generated yet. Please fill in the payment data and click "Generate GiroCode".',
      reset: 'Reset',
      externalAlt: 'GiroCode via external QR service',
      download: 'Download QR Code \u2193',
      downloadHint: 'PNG format \u00b7 optimized for print & digital',
      sealTitle: 'Safe-Pay verified',
      sealSubtitle: 'IBAN checked \u00b7 EPC-compliant \u00b7 Locally generated',
    };
  }

  if (locale === 'fr') {
    return {
      heading: fr.qr.title,
      helper: fr.qr.tip,
      fallbackLabel: fr.qr.fallback,
      fallbackWarning: 'Attention\u00a0: les donn\u00e9es de paiement sont transmises au service externe.',
      emptyText: 'Aucun GiroCode g\u00e9n\u00e9r\u00e9 pour le moment. Veuillez saisir les donn\u00e9es de paiement et cliquer sur \u00ab\u00a0G\u00e9n\u00e9rer GiroCode\u00a0\u00bb.',
      reset: 'R\u00e9initialiser',
      externalAlt: 'GiroCode via service QR externe',
      download: 'T\u00e9l\u00e9charger le QR Code \u2193',
      downloadHint: 'Format PNG \u00b7 optimis\u00e9 pour impression & num\u00e9rique',
      sealTitle: 'Safe-Pay v\u00e9rifi\u00e9',
      sealSubtitle: 'IBAN v\u00e9rifi\u00e9 \u00b7 Conforme EPC \u00b7 G\u00e9n\u00e9r\u00e9 localement',
    };
  }

  if (locale === 'es') {
    return {
      heading: es.qr.title,
      helper: es.qr.tip,
      fallbackLabel: es.qr.fallback,
      fallbackWarning: 'Atenci\u00f3n: los datos de pago se env\u00edan al servicio externo.',
      emptyText: 'Todav\u00eda no se ha generado ning\u00fan GiroCode. Rellena los datos de pago y haz clic en \u00abGenerar GiroCode\u00bb.',
      reset: 'Restablecer',
      externalAlt: 'GiroCode mediante servicio QR externo',
      download: 'Descargar QR Code \u2193',
      downloadHint: 'Formato PNG \u00b7 optimizado para impresi\u00f3n & digital',
      sealTitle: 'Safe-Pay verificado',
      sealSubtitle: 'IBAN verificado \u00b7 Conforme EPC \u00b7 Generado localmente',
    };
  }

  return {
    heading: 'GiroCode-Vorschau',
    helper: 'QR wird ausschlie\u00dflich im Browser erzeugt. Optionaler Fallback sendet Daten an einen externen Dienst.',
    fallbackLabel: 'Externer QR-Fallback (api.qrserver.com) \u2013 Achtung: Zahlungsdaten werden an einen externen Dienst \u00fcbertragen.',
    fallbackWarning: '',
    emptyText: 'Noch kein GiroCode erzeugt. Bitte Zahlungsdaten ausf\u00fcllen und auf \u201eGiroCode generieren\u201c klicken.',
    reset: 'Zur\u00fccksetzen',
    externalAlt: 'GiroCode \u00fcber externen QR-Dienst',
    download: 'QR-Code herunterladen \u2193',
    downloadHint: 'PNG-Format \u00b7 optimiert f\u00fcr Druck & Digital',
    sealTitle: 'Safe-Pay verifiziert',
    sealSubtitle: 'IBAN gepr\u00fcft \u00b7 EPC-konform \u00b7 Lokal generiert',
  };
}

export const QRPreview: React.FC<QRPreviewProps> = ({
  locale,
  epcPayload,
  statusType,
  statusMessage,
  onReset,
  onQrRendered,
}) => {
  const t = getTexts(locale);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [useExternal, setUseExternal] = useState(false);
  const [qrRenderedSuccess, setQrRenderedSuccess] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) {
      if (!epcPayload && onQrRendered) {
        onQrRendered(null);
      }
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Immer Canvas leeren, bevor neu gezeichnet wird
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!epcPayload || useExternal) {
      setQrRenderedSuccess(false);
      if (onQrRendered) {
        onQrRendered(null);
      }
      return;
    }

    QRCode.toCanvas(canvas, epcPayload, {
      width: 200,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#ffffff',
      },
    })
      .then(() => {
        setQrRenderedSuccess(true);
        if (onQrRendered && canvasRef.current) {
          try {
            const dataUrl = canvasRef.current.toDataURL('image/png');
            onQrRendered(dataUrl);
          } catch {
            onQrRendered(null);
          }
        }
      })
      .catch(() => {
        setQrRenderedSuccess(false);
        if (onQrRendered) {
          onQrRendered(null);
        }
      });
  }, [epcPayload, useExternal, onQrRendered]);

  const downloadQR = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'girocode.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const handleReset = () => {
    setUseExternal(false);
    setQrRenderedSuccess(false);
    onReset();
    if (onQrRendered) {
      onQrRendered(null);
    }
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    }
  };

  const externalUrl =
    epcPayload && `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(epcPayload)}`;

  const hasStatus = statusType && statusMessage;

  // Safe-Pay Siegel anzeigen wenn: IBAN valide (success status), EPC-Payload vorhanden, QR gezeichnet
  const showSeal = statusType === 'success' && !!epcPayload && qrRenderedSuccess && !useExternal;

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#121318]/80 p-4 shadow-lg shadow-black/40 backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-medium text-slate-100">{t.heading}</h3>
          <p className="text-xs text-slate-400">{t.helper}</p>
        </div>
        {hasStatus && (
          <span
            className={[
              'animate-status-appear inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
              statusType === 'success'
                ? 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/40'
                : 'bg-red-500/15 text-red-400 ring-1 ring-red-500/40',
            ].join(' ')}
          >
            {statusMessage}
          </span>
        )}
      </div>

      <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-white/10 bg-black/20 p-4">
        {epcPayload ? (
          <>
            {!useExternal && (
              <canvas
                ref={canvasRef}
                width={220}
                height={220}
                className="animate-qr-appear rounded-lg bg-white shadow-md shadow-black/40"
              />
            )}

            {useExternal && externalUrl && (
              <img
                src={externalUrl}
                alt={t.externalAlt}
                className="h-56 w-56 rounded-lg bg-white object-contain shadow-md shadow-black/40"
              />
            )}

            <label className="flex items-start gap-2 text-xs text-slate-300">
              <input
                type="checkbox"
                className="mt-0.5 h-3.5 w-3.5 rounded border-slate-500 bg-slate-900 text-emerald-500 focus:ring-emerald-500"
                checked={useExternal}
                onChange={(e) => setUseExternal(e.target.checked)}
              />
              <span>{t.fallbackLabel}</span>
            </label>
          </>
        ) : (
          <div className="flex flex-col items-center gap-3 py-4 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-16 w-16 text-emerald-500/40"
              aria-hidden
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="5" y="5" width="3" height="3" fill="currentColor" stroke="none" />
              <rect x="16" y="5" width="3" height="3" fill="currentColor" stroke="none" />
              <rect x="5" y="16" width="3" height="3" fill="currentColor" stroke="none" />
              <path d="M14 14h3v3h-3z" fill="currentColor" stroke="none" />
              <path d="M17 17h4" />
              <path d="M17 14v4" />
            </svg>
            <p className="max-w-[180px] text-xs leading-relaxed text-slate-400">
              {t.emptyText}
            </p>
          </div>
        )}
      </div>

      {/* Safe-Pay Siegel */}
      {showSeal && (
        <div
          className="safe-pay-seal flex items-center gap-3 rounded-lg px-3 py-2"
          style={{
            background: '#133018',
            border: '1px solid #22c55e40',
            borderRadius: '8px',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 flex-shrink-0 text-emerald-400"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <p className="text-xs font-semibold text-emerald-300">{t.sealTitle}</p>
            <p className="text-[11px] text-emerald-500/80">{t.sealSubtitle}</p>
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-1.5 text-xs font-medium text-slate-200 shadow-sm shadow-black/30 transition hover:border-slate-500 hover:bg-slate-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
          {t.reset}
        </button>
      </div>

      {epcPayload && !useExternal && (
        <div className="flex flex-col gap-1.5">
          <button
            type="button"
            onClick={downloadQR}
            style={{ marginTop: '12px', width: '100%', fontWeight: 700 }}
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2.5 text-sm text-white shadow-md shadow-emerald-900/30 transition hover:from-emerald-400 hover:to-teal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            {t.download}
          </button>
          <p style={{ fontSize: '12px', color: '#8b90a0', textAlign: 'center' }}>
            {t.downloadHint}
          </p>
        </div>
      )}
    </div>
  );
};
