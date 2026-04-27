'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface ScannerTexts {
  badge: string;
  h1: string;
  subtitle: string;
  startButton: string;
  stopButton: string;
  successTitle: string;
  recipientLabel: string;
  ibanLabel: string;
  bicLabel: string;
  amountLabel: string;
  purposeLabel: string;
  notSpecified: string;
  takeoverButton: string;
  rescanButton: string;
  fileUploadLabel: string;
  fileUploadButton: string;
  invalidCode: string;
  cameraError: string;
  scanning: string;
  generatorPrefix: string;
}

export const deTexts: ScannerTexts = {
  badge: '100% lokal · keine Datenweitergabe',
  h1: 'GiroCode Scanner',
  subtitle: 'Scanne einen GiroCode mit deiner Kamera und lese die enthaltenen Zahlungsdaten aus.',
  startButton: 'Kamera starten →',
  stopButton: 'Kamera stoppen',
  successTitle: '✅ GiroCode erfolgreich gescannt!',
  recipientLabel: 'Empfänger',
  ibanLabel: 'IBAN',
  bicLabel: 'BIC',
  amountLabel: 'Betrag',
  purposeLabel: 'Verwendungszweck',
  notSpecified: 'nicht angegeben',
  takeoverButton: 'In Generator übernehmen →',
  rescanButton: 'Erneut scannen',
  fileUploadLabel: 'Oder QR-Code als Bild hochladen',
  fileUploadButton: 'Bild auswählen',
  invalidCode: 'Kein gültiger GiroCode erkannt.',
  cameraError: 'Kamera konnte nicht gestartet werden. Bitte Kamera-Berechtigung prüfen.',
  scanning: 'Kamera aktiv – QR-Code in den Rahmen halten',
  generatorPrefix: '/',
};

export const enTexts: ScannerTexts = {
  badge: '100% local · no data sharing',
  h1: 'GiroCode Scanner',
  subtitle: 'Scan a GiroCode with your camera and read the payment data.',
  startButton: 'Start Camera →',
  stopButton: 'Stop Camera',
  successTitle: '✅ GiroCode successfully scanned!',
  recipientLabel: 'Recipient',
  ibanLabel: 'IBAN',
  bicLabel: 'BIC',
  amountLabel: 'Amount',
  purposeLabel: 'Payment reference',
  notSpecified: 'not specified',
  takeoverButton: 'Transfer to Generator →',
  rescanButton: 'Scan again',
  fileUploadLabel: 'Or upload QR code as image',
  fileUploadButton: 'Choose image',
  invalidCode: 'No valid GiroCode detected.',
  cameraError: 'Camera could not be started. Please check camera permissions.',
  scanning: 'Camera active – hold QR code in frame',
  generatorPrefix: '/en/',
};

export const frTexts: ScannerTexts = {
  badge: '100% local · aucun partage de données',
  h1: 'Scanner GiroCode',
  subtitle: 'Scannez un GiroCode avec votre caméra et lisez les données de paiement.',
  startButton: 'Démarrer la caméra →',
  stopButton: 'Arrêter la caméra',
  successTitle: '✅ GiroCode scanné avec succès!',
  recipientLabel: 'Destinataire',
  ibanLabel: 'IBAN',
  bicLabel: 'BIC',
  amountLabel: 'Montant',
  purposeLabel: 'Référence de paiement',
  notSpecified: 'non spécifié',
  takeoverButton: 'Transférer au générateur →',
  rescanButton: 'Scanner à nouveau',
  fileUploadLabel: 'Ou télécharger le QR code comme image',
  fileUploadButton: 'Choisir une image',
  invalidCode: 'Aucun GiroCode valide détecté.',
  cameraError: 'La caméra n\'a pas pu démarrer. Vérifiez les autorisations de caméra.',
  scanning: 'Caméra active – tenez le QR code dans le cadre',
  generatorPrefix: '/fr/',
};

export const esTexts: ScannerTexts = {
  badge: '100% local · sin compartir datos',
  h1: 'Escáner GiroCode',
  subtitle: 'Escanea un GiroCode con tu cámara y lee los datos de pago.',
  startButton: 'Iniciar cámara →',
  stopButton: 'Detener cámara',
  successTitle: '✅ ¡GiroCode escaneado con éxito!',
  recipientLabel: 'Destinatario',
  ibanLabel: 'IBAN',
  bicLabel: 'BIC',
  amountLabel: 'Importe',
  purposeLabel: 'Referencia de pago',
  notSpecified: 'no especificado',
  takeoverButton: 'Transferir al generador →',
  rescanButton: 'Escanear de nuevo',
  fileUploadLabel: 'O subir código QR como imagen',
  fileUploadButton: 'Elegir imagen',
  invalidCode: 'No se detectó ningún GiroCode válido.',
  cameraError: 'No se pudo iniciar la cámara. Por favor, verifica los permisos de cámara.',
  scanning: 'Cámara activa – sostén el código QR en el marco',
  generatorPrefix: '/es/',
};

interface ScanResult {
  name: string;
  iban: string;
  bic: string;
  amount: string;
  purpose: string;
}

function parseEPCPayload(text: string): ScanResult | null {
  const lines = text.trim().split('\n');
  if (lines.length < 7 || lines[0] !== 'BCD') return null;

  const rawAmount = (lines[7] || '').trim();
  let amount = '';
  if (rawAmount.startsWith('EUR')) {
    const val = rawAmount.slice(3);
    amount = val === '0.00' || val === '0' || val === '' ? '' : val;
  }

  return {
    bic: (lines[4] || '').trim(),
    name: (lines[5] || '').trim(),
    iban: (lines[6] || '').trim(),
    amount,
    purpose: (lines[10] || '').trim(),
  };
}

function formatIBAN(iban: string): string {
  const clean = iban.replace(/\s/g, '');
  return clean.replace(/(.{4})/g, '$1 ').trim();
}

const localeTextsMap: Record<string, ScannerTexts> = {
  de: deTexts,
  en: enTexts,
  fr: frTexts,
  es: esTexts,
};

function detectLocale(pathname: string): string {
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/fr')) return 'fr';
  if (pathname.startsWith('/es')) return 'es';
  return 'de';
}

interface Props {
  texts: ScannerTexts;
}

export function ScannerClient({ texts: textsProp }: Props) {
  const pathname = usePathname();
  const texts = localeTextsMap[detectLocale(pathname)] ?? textsProp;
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scannerRef = useRef<{ stop: () => Promise<void> } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const stopCamera = useCallback(async () => {
    if (scannerRef.current) {
      try {
        await scannerRef.current.stop();
      } catch {
        // ignore
      }
      scannerRef.current = null;
    }
    setScanning(false);
  }, []);

  useEffect(() => {
    return () => {
      if (scannerRef.current) {
        scannerRef.current.stop().catch(() => {});
        scannerRef.current = null;
      }
    };
  }, []);

  const startCamera = async () => {
    setError(null);
    setResult(null);

    try {
      const { Html5Qrcode } = await import('html5-qrcode');
      const qr = new Html5Qrcode('qr-reader');
      scannerRef.current = qr;

      await qr.start(
        { facingMode: 'environment' },
        { fps: 10, qrbox: { width: 240, height: 240 } },
        (decodedText) => {
          const parsed = parseEPCPayload(decodedText);
          if (parsed) {
            setResult(parsed);
            stopCamera();
          } else {
            setError(texts.invalidCode);
            stopCamera();
          }
        },
        () => {
          // per-frame error – ignore
        },
      );
      setScanning(true);
    } catch {
      setError(texts.cameraError);
      setScanning(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileError(null);
    setResult(null);
    setError(null);

    // Stop camera if running
    if (scanning) await stopCamera();

    try {
      const { Html5Qrcode } = await import('html5-qrcode');
      const qr = new Html5Qrcode('qr-file-reader');
      const decodedText = await qr.scanFile(file, false);
      const parsed = parseEPCPayload(decodedText);
      if (parsed) {
        setResult(parsed);
      } else {
        setFileError(texts.invalidCode);
      }
    } catch {
      setFileError(texts.invalidCode);
    }

    // Reset file input
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const buildGeneratorUrl = (res: ScanResult) => {
    const params = new URLSearchParams();
    if (res.name) params.set('name', res.name);
    if (res.iban) params.set('iban', res.iban);
    if (res.bic) params.set('bic', res.bic);
    if (res.amount) params.set('betrag', res.amount);
    if (res.purpose) params.set('zweck', res.purpose);
    return `${texts.generatorPrefix}?${params.toString()}`;
  };

  const handleRescan = async () => {
    setResult(null);
    setError(null);
    setFileError(null);
  };

  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      {/* Hero */}
      <header
        className="animate-card-in relative overflow-hidden px-4 pb-16 pt-20 text-center"
        style={{ animationDelay: '0s' }}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {texts.badge}
          </p>

          <h1
            className="font-bold tracking-tight text-slate-50"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.1 }}
          >
            {texts.h1}
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-slate-400 md:text-lg">
            {texts.subtitle}
          </p>
        </div>
      </header>

      <div className="mx-auto flex max-w-2xl flex-col gap-8 px-4 pb-16">
        {/* Scanner-Bereich */}
        {!result && (
          <section
            className="animate-card-in flex flex-col items-center gap-6"
            style={{ animationDelay: '0.1s' }}
          >
            {/* Start-Button */}
            {!scanning && (
              <button
                type="button"
                onClick={startCamera}
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-xl motion-reduce:hover:translate-y-0"
                style={{
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  boxShadow: '0 0 24px rgba(34,197,94,0.35)',
                }}
              >
                📷 {texts.startButton}
              </button>
            )}

            {/* Kamera-Box */}
            <div
              className={[
                'relative w-full max-w-sm overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/60',
                scanning ? 'block' : 'hidden',
              ].join(' ')}
              style={{ aspectRatio: '1 / 1' }}
            >
              {/* html5-qrcode rendert hier die Kamera */}
              <div
                id="qr-reader"
                className="h-full w-full"
                style={{ minHeight: '300px' }}
              />

              {/* Scan-Overlay */}
              {scanning && (
                <div className="pointer-events-none absolute inset-0">
                  {/* Grüne Ecken */}
                  <div className="absolute left-6 top-6 h-8 w-8 border-l-2 border-t-2 border-emerald-400" />
                  <div className="absolute right-6 top-6 h-8 w-8 border-r-2 border-t-2 border-emerald-400" />
                  <div className="absolute bottom-6 left-6 h-8 w-8 border-b-2 border-l-2 border-emerald-400" />
                  <div className="absolute bottom-6 right-6 h-8 w-8 border-b-2 border-r-2 border-emerald-400" />

                  {/* Animierter Scan-Balken */}
                  <div
                    className="absolute left-6 right-6 h-0.5 rounded-full bg-emerald-400/80"
                    style={{
                      animation: 'scan-line 2s ease-in-out infinite',
                      boxShadow: '0 0 8px rgba(34,197,94,0.8)',
                    }}
                  />
                </div>
              )}
            </div>

            {/* Scanning-Hinweis */}
            {scanning && (
              <div className="flex flex-col items-center gap-3">
                <p className="text-sm text-emerald-400">{texts.scanning}</p>
                <button
                  type="button"
                  onClick={stopCamera}
                  className="rounded-full border border-slate-600 px-5 py-2 text-xs text-slate-300 transition hover:border-slate-400 hover:text-slate-100"
                >
                  {texts.stopButton}
                </button>
              </div>
            )}

            {/* Fehler-Meldung */}
            {error && (
              <div className="w-full rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}
          </section>
        )}

        {/* Ergebnis-Bereich */}
        {result && (
          <section
            className="animate-card-in flex flex-col gap-4"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="rounded-2xl border border-emerald-500/30 bg-slate-900/60 p-6">
              <p className="mb-5 text-base font-bold text-emerald-400">{texts.successTitle}</p>

              <dl className="flex flex-col gap-3">
                {[
                  { label: texts.recipientLabel, value: result.name || texts.notSpecified },
                  {
                    label: texts.ibanLabel,
                    value: result.iban ? formatIBAN(result.iban) : texts.notSpecified,
                    mono: true,
                  },
                  { label: texts.bicLabel, value: result.bic || texts.notSpecified },
                  {
                    label: texts.amountLabel,
                    value: result.amount ? `${result.amount} EUR` : texts.notSpecified,
                  },
                  {
                    label: texts.purposeLabel,
                    value: result.purpose || texts.notSpecified,
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col gap-0.5 rounded-xl border border-slate-800/80 bg-[#121318] px-4 py-3"
                  >
                    <dt className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
                      {row.label}
                    </dt>
                    <dd
                      className={[
                        'text-sm font-medium text-slate-100 break-all',
                        row.mono ? 'font-mono' : '',
                      ].join(' ')}
                    >
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={buildGeneratorUrl(result)}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg motion-reduce:hover:translate-y-0"
                  style={{
                    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                    boxShadow: '0 0 18px rgba(34,197,94,0.3)',
                  }}
                >
                  {texts.takeoverButton}
                </Link>
                <button
                  type="button"
                  onClick={handleRescan}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-300 transition hover:border-slate-500 hover:text-slate-100"
                >
                  🔄 {texts.rescanButton}
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Datei-Upload */}
        {!scanning && (
          <section
            className="animate-card-in"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6">
              <p className="mb-4 text-sm font-medium text-slate-300">{texts.fileUploadLabel}</p>

              <label className="flex cursor-pointer items-center justify-center gap-3 rounded-xl border border-dashed border-slate-600 bg-slate-900/60 px-4 py-5 text-sm text-slate-400 transition hover:border-emerald-500/50 hover:text-emerald-400">
                <span>📁</span>
                <span>{texts.fileUploadButton}</span>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="sr-only"
                />
              </label>

              {fileError && (
                <div className="mt-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {fileError}
                </div>
              )}
            </div>
          </section>
        )}
      </div>

      {/* Verstecktes Element für html5-qrcode Datei-Scan */}
      <div id="qr-file-reader" style={{ display: 'none' }} />

      <style>{`
        @keyframes scan-line {
          0%   { top: 24px; }
          50%  { top: calc(100% - 24px); }
          100% { top: 24px; }
        }
        #qr-reader video {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          border-radius: 0 !important;
        }
        #qr-reader img {
          display: none !important;
        }
        #qr-reader > div:last-child {
          display: none !important;
        }
        #qr-reader__dashboard {
          display: none !important;
        }
      `}</style>
    </main>
  );
}
