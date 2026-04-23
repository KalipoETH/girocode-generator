'use client';

import React, { useCallback, useRef, useState } from 'react';
import Papa from 'papaparse';
import QRCode from 'qrcode';
import JSZip from 'jszip';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

type Locale = 'de' | 'en' | 'fr' | 'es';

interface BulkTexts {
  badge: string;
  heading: string;
  subtitle: string;
  step1Title: string;
  csvStructureLabel: string;
  downloadTemplateBtn: string;
  step2Title: string;
  dropzoneLabel: string;
  dropzoneHint: string;
  previewTitle: string;
  colName: string;
  colIban: string;
  colBic: string;
  colBetrag: string;
  colZweck: string;
  colStatus: string;
  step3Title: string;
  generateBtn: string;
  generatingProgress: (cur: number, total: number) => string;
  step4Title: string;
  downloadZipBtn: string;
  downloadPdfBtn: string;
  limitWarning: string;
  noValidRows: string;
}

const texts: Record<Locale, BulkTexts> = {
  de: {
    badge: 'Neu – Bulk Generator',
    heading: 'Bulk GiroCode Generator',
    subtitle: 'Erstelle mehrere GiroCodes auf einmal durch Upload einer CSV-Datei.',
    step1Title: 'Schritt 1 – CSV Vorlage',
    csvStructureLabel: 'Erwartete CSV-Struktur:',
    downloadTemplateBtn: 'CSV-Vorlage herunterladen',
    step2Title: 'Schritt 2 – CSV hochladen',
    dropzoneLabel: 'CSV-Datei hier ablegen oder klicken',
    dropzoneHint: 'Nur .csv-Dateien · max. 50 Zeilen kostenlos',
    previewTitle: 'Erkannte Daten',
    colName: 'Name',
    colIban: 'IBAN',
    colBic: 'BIC',
    colBetrag: 'Betrag',
    colZweck: 'Zweck',
    colStatus: 'Status',
    step3Title: 'Schritt 3 – Generieren',
    generateBtn: 'Alle GiroCodes generieren',
    generatingProgress: (c, t) => `Generiere ${c}/${t} QR-Codes...`,
    step4Title: 'Schritt 4 – Herunterladen',
    downloadZipBtn: 'Als ZIP herunterladen',
    downloadPdfBtn: 'Als PDF herunterladen',
    limitWarning: 'Mehr als 50 Zeilen erkannt. Nur die ersten 50 werden verarbeitet.',
    noValidRows: 'Keine validen Zeilen zum Generieren vorhanden.',
  },
  en: {
    badge: 'New – Bulk Generator',
    heading: 'Bulk GiroCode Generator',
    subtitle: 'Create multiple GiroCodes at once by uploading a CSV file.',
    step1Title: 'Step 1 – CSV Template',
    csvStructureLabel: 'Expected CSV structure:',
    downloadTemplateBtn: 'Download CSV template',
    step2Title: 'Step 2 – Upload CSV',
    dropzoneLabel: 'Drop CSV file here or click',
    dropzoneHint: 'Only .csv files · max. 50 rows for free',
    previewTitle: 'Detected data',
    colName: 'Name',
    colIban: 'IBAN',
    colBic: 'BIC',
    colBetrag: 'Amount',
    colZweck: 'Reference',
    colStatus: 'Status',
    step3Title: 'Step 3 – Generate',
    generateBtn: 'Generate all GiroCodes',
    generatingProgress: (c, t) => `Generating ${c}/${t} QR codes...`,
    step4Title: 'Step 4 – Download',
    downloadZipBtn: 'Download as ZIP',
    downloadPdfBtn: 'Download as PDF',
    limitWarning: 'More than 50 rows detected. Only the first 50 will be processed.',
    noValidRows: 'No valid rows available to generate.',
  },
  fr: {
    badge: 'Nouveau – Générateur en lot',
    heading: 'Générateur GiroCode en lot',
    subtitle: 'Créez plusieurs GiroCodes en une fois en téléchargeant un fichier CSV.',
    step1Title: 'Étape 1 – Modèle CSV',
    csvStructureLabel: 'Structure CSV attendue :',
    downloadTemplateBtn: 'Télécharger le modèle CSV',
    step2Title: 'Étape 2 – Importer le CSV',
    dropzoneLabel: 'Déposez le fichier CSV ici ou cliquez',
    dropzoneHint: 'Fichiers .csv uniquement · max. 50 lignes gratuitement',
    previewTitle: 'Données détectées',
    colName: 'Nom',
    colIban: 'IBAN',
    colBic: 'BIC',
    colBetrag: 'Montant',
    colZweck: 'Référence',
    colStatus: 'Statut',
    step3Title: 'Étape 3 – Générer',
    generateBtn: 'Générer tous les GiroCodes',
    generatingProgress: (c, t) => `Génération ${c}/${t} codes QR...`,
    step4Title: 'Étape 4 – Télécharger',
    downloadZipBtn: 'Télécharger en ZIP',
    downloadPdfBtn: 'Télécharger en PDF',
    limitWarning: 'Plus de 50 lignes détectées. Seules les 50 premières seront traitées.',
    noValidRows: 'Aucune ligne valide à générer.',
  },
  es: {
    badge: 'Nuevo – Generador masivo',
    heading: 'Generador masivo de GiroCode',
    subtitle: 'Crea múltiples GiroCodes a la vez subiendo un archivo CSV.',
    step1Title: 'Paso 1 – Plantilla CSV',
    csvStructureLabel: 'Estructura CSV esperada:',
    downloadTemplateBtn: 'Descargar plantilla CSV',
    step2Title: 'Paso 2 – Subir CSV',
    dropzoneLabel: 'Suelta el archivo CSV aquí o haz clic',
    dropzoneHint: 'Solo archivos .csv · máx. 50 filas gratis',
    previewTitle: 'Datos detectados',
    colName: 'Nombre',
    colIban: 'IBAN',
    colBic: 'BIC',
    colBetrag: 'Importe',
    colZweck: 'Concepto',
    colStatus: 'Estado',
    step3Title: 'Paso 3 – Generar',
    generateBtn: 'Generar todos los GiroCodes',
    generatingProgress: (c, t) => `Generando ${c}/${t} códigos QR...`,
    step4Title: 'Paso 4 – Descargar',
    downloadZipBtn: 'Descargar como ZIP',
    downloadPdfBtn: 'Descargar como PDF',
    limitWarning: 'Se detectaron más de 50 filas. Solo se procesarán las primeras 50.',
    noValidRows: 'No hay filas válidas para generar.',
  },
};

const CSV_TEMPLATE = `name,iban,bic,betrag,zweck
Max Mustermann,DE89370400440532013000,,49.90,Rechnung 001
Firma GmbH,DE89370400440532013000,COBADEFFXXX,99.00,Rechnung 002`;

function validateIban(iban: string): boolean {
  const clean = iban.replace(/\s+/g, '').toUpperCase();
  if (clean.length < 5) return false;
  const rearranged = clean.slice(4) + clean.slice(0, 4);
  const numeric = rearranged.replace(/[A-Z]/g, (ch) =>
    (ch.charCodeAt(0) - 55).toString()
  );
  let remainder = 0;
  for (const digit of numeric) {
    remainder = (remainder * 10 + parseInt(digit)) % 97;
  }
  return remainder === 1;
}

function buildEpcPayload(
  name: string,
  iban: string,
  bic: string,
  betrag: string,
  zweck: string
): string {
  const amountStr = betrag ? 'EUR' + parseFloat(betrag).toFixed(2) : '';
  return [
    'BCD', '001', '1', 'SCT',
    bic.trim(),
    name.trim().slice(0, 70),
    iban.replace(/\s+/g, '').toUpperCase(),
    amountStr,
    '', '',
    zweck.trim().slice(0, 140),
  ].join('\n');
}

interface CsvRow {
  name: string;
  iban: string;
  bic: string;
  betrag: string;
  zweck: string;
  valid: boolean;
}

interface GeneratedQR {
  row: CsvRow;
  dataUrl: string;
  index: number;
}

export default function BulkClient({ locale }: { locale: Locale }) {
  const t = texts[locale];
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [rows, setRows] = useState<CsvRow[]>([]);
  const [showLimitWarning, setShowLimitWarning] = useState(false);
  const [generated, setGenerated] = useState<GeneratedQR[]>([]);
  const [progress, setProgress] = useState<{ cur: number; total: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const downloadTemplate = () => {
    const blob = new Blob([CSV_TEMPLATE], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'girocode_vorlage.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const parseFile = (file: File) => {
    Papa.parse<Record<string, string>>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        let data = result.data;
        const limited = data.length > 50;
        if (limited) {
          setShowLimitWarning(true);
          data = data.slice(0, 50);
        } else {
          setShowLimitWarning(false);
        }
        const parsed: CsvRow[] = data.map((r) => {
          const iban = (r.iban || r.IBAN || '').trim();
          return {
            name: (r.name || r.Name || '').trim(),
            iban,
            bic: (r.bic || r.BIC || '').trim(),
            betrag: (r.betrag || r.Betrag || '').trim(),
            zweck: (r.zweck || r.Zweck || '').trim(),
            valid: validateIban(iban),
          };
        });
        setRows(parsed);
        setGenerated([]);
      },
    });
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) parseFile(file);
  };

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.name.endsWith('.csv')) parseFile(file);
  }, []);

  const generateAll = async () => {
    const validRows = rows.filter((r) => r.valid && r.name && r.iban);
    if (!validRows.length) return;
    setGenerated([]);
    setProgress({ cur: 0, total: validRows.length });

    const results: GeneratedQR[] = [];
    for (let i = 0; i < validRows.length; i++) {
      const row = validRows[i];
      const payload = buildEpcPayload(row.name, row.iban, row.bic, row.betrag, row.zweck);
      const dataUrl = await QRCode.toDataURL(payload, {
        errorCorrectionLevel: 'M',
        width: 300,
        margin: 2,
      });
      results.push({ row, dataUrl, index: i + 1 });
      setProgress({ cur: i + 1, total: validRows.length });
    }
    setGenerated(results);
    setProgress(null);
  };

  const downloadZip = async () => {
    const zip = new JSZip();
    for (const item of generated) {
      const base64 = item.dataUrl.split(',')[1];
      const safeName = item.row.name.replace(/[^a-zA-Z0-9_\-]/g, '_').slice(0, 40);
      const filename = `girocode_${String(item.index).padStart(2, '0')}_${safeName}.png`;
      zip.file(filename, base64, { base64: true });
    }
    const blob = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'girocodes.zip';
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadPdf = async () => {
    const pdfDoc = await PDFDocument.create();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const perRow = 3;
    const perPage = 9;
    const pageWidth = 595;
    const pageHeight = 842;
    const margin = 40;
    const cellW = (pageWidth - margin * 2) / perRow;
    const cellH = (pageHeight - margin * 2) / (perPage / perRow);

    let page = pdfDoc.addPage([pageWidth, pageHeight]);

    for (let i = 0; i < generated.length; i++) {
      if (i > 0 && i % perPage === 0) {
        page = pdfDoc.addPage([pageWidth, pageHeight]);
      }
      const pos = i % perPage;
      const col = pos % perRow;
      const row = Math.floor(pos / perRow);

      const x = margin + col * cellW;
      const y = pageHeight - margin - (row + 1) * cellH;

      const item = generated[i];
      const imgBytes = await fetch(item.dataUrl).then((r) => r.arrayBuffer());
      const img = await pdfDoc.embedPng(imgBytes);

      const qrSize = Math.min(cellW, cellH) - 50;
      const imgX = x + (cellW - qrSize) / 2;
      const imgY = y + 30;

      page.drawImage(img, { x: imgX, y: imgY, width: qrSize, height: qrSize });

      page.drawText(item.row.name.slice(0, 30), {
        x: x + 4,
        y: y + 16,
        size: 8,
        font: boldFont,
        color: rgb(0.1, 0.1, 0.1),
      });
      page.drawText(item.row.iban, {
        x: x + 4,
        y: y + 5,
        size: 7,
        font,
        color: rgb(0.4, 0.4, 0.4),
      });
    }

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'girocodes.pdf';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">

        {/* Hero */}
        <header className="mb-10 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/30">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {t.badge}
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
            {t.heading}
          </h1>
          <p className="max-w-2xl text-sm text-slate-400 md:text-base">{t.subtitle}</p>
        </header>

        <div className="space-y-8">
          {/* Schritt 1 – CSV Vorlage */}
          <section className="rounded-2xl border border-white/5 bg-[#121318]/80 p-6">
            <h2 className="mb-4 text-base font-semibold text-slate-50">
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-300">1</span>
              {t.step1Title}
            </h2>
            <p className="mb-3 text-xs text-slate-400">{t.csvStructureLabel}</p>
            <pre className="mb-4 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-emerald-300">
              <code>{CSV_TEMPLATE}</code>
            </pre>
            <button
              type="button"
              onClick={downloadTemplate}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-700"
            >
              ↓ {t.downloadTemplateBtn}
            </button>
          </section>

          {/* Schritt 2 – CSV Upload */}
          <section className="rounded-2xl border border-white/5 bg-[#121318]/80 p-6">
            <h2 className="mb-4 text-base font-semibold text-slate-50">
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-300">2</span>
              {t.step2Title}
            </h2>

            {/* Dropzone */}
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={onDrop}
              onClick={() => fileInputRef.current?.click()}
              className={[
                'flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-8 text-center transition',
                isDragging
                  ? 'border-emerald-400 bg-emerald-500/5'
                  : 'border-slate-700 hover:border-slate-500 hover:bg-slate-900/30',
              ].join(' ')}
            >
              <svg className="h-10 w-10 text-slate-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              <p className="text-sm text-slate-300">{t.dropzoneLabel}</p>
              <p className="text-xs text-slate-500">{t.dropzoneHint}</p>
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv"
                className="hidden"
                onChange={onFileChange}
              />
            </div>

            {showLimitWarning && (
              <div className="mt-4 flex items-start gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-300">
                <span>⚠️</span>
                <span>{t.limitWarning}</span>
              </div>
            )}

            {/* Vorschau-Tabelle */}
            {rows.length > 0 && (
              <div className="mt-5">
                <p className="mb-2 text-sm font-medium text-slate-300">{t.previewTitle} ({rows.length})</p>
                <div className="overflow-x-auto rounded-xl border border-slate-800">
                  <table className="w-full text-xs text-slate-300">
                    <thead>
                      <tr className="border-b border-slate-800 bg-slate-900/80">
                        <th className="px-3 py-2 text-left">{t.colName}</th>
                        <th className="px-3 py-2 text-left">{t.colIban}</th>
                        <th className="px-3 py-2 text-left">{t.colBic}</th>
                        <th className="px-3 py-2 text-left">{t.colBetrag}</th>
                        <th className="px-3 py-2 text-left">{t.colZweck}</th>
                        <th className="px-3 py-2 text-center">{t.colStatus}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {rows.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-900/40">
                          <td className="px-3 py-2">{row.name || '–'}</td>
                          <td className="px-3 py-2 font-mono">{row.iban || '–'}</td>
                          <td className="px-3 py-2">{row.bic || '–'}</td>
                          <td className="px-3 py-2">{row.betrag || '–'}</td>
                          <td className="px-3 py-2">{row.zweck || '–'}</td>
                          <td className="px-3 py-2 text-center">
                            {row.valid && row.name ? (
                              <span title="Gültig">✅</span>
                            ) : (
                              <span title="Ungültig">❌</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </section>

          {/* Schritt 3 – Generieren */}
          {rows.length > 0 && (
            <section className="rounded-2xl border border-white/5 bg-[#121318]/80 p-6">
              <h2 className="mb-4 text-base font-semibold text-slate-50">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-300">3</span>
                {t.step3Title}
              </h2>

              <button
                type="button"
                onClick={generateAll}
                disabled={!!progress}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-900/30 transition hover:from-emerald-400 hover:to-teal-400 disabled:opacity-60"
              >
                {progress ? t.generatingProgress(progress.cur, progress.total) : t.generateBtn}
              </button>

              {progress && (
                <div className="mt-4">
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300"
                      style={{ width: `${(progress.cur / progress.total) * 100}%` }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    {t.generatingProgress(progress.cur, progress.total)}
                  </p>
                </div>
              )}
            </section>
          )}

          {/* Schritt 4 – Download */}
          {generated.length > 0 && (
            <section className="rounded-2xl border border-white/5 bg-[#121318]/80 p-6">
              <h2 className="mb-4 text-base font-semibold text-slate-50">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-300">4</span>
                {t.step4Title}
              </h2>

              {/* QR-Code Vorschau */}
              <div className="mb-5 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
                {generated.slice(0, 10).map((item) => (
                  <div key={item.index} className="flex flex-col items-center gap-1 rounded-lg border border-slate-800 bg-slate-900/50 p-2">
                    <img src={item.dataUrl} alt={item.row.name} className="h-16 w-16 rounded" />
                    <p className="w-full truncate text-center text-[10px] text-slate-400">{item.row.name}</p>
                  </div>
                ))}
                {generated.length > 10 && (
                  <div className="flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50 p-2">
                    <p className="text-xs text-slate-400">+{generated.length - 10} mehr</p>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={downloadZip}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-900/30 transition hover:from-emerald-400 hover:to-teal-400"
                >
                  📦 {t.downloadZipBtn}
                </button>
                <button
                  type="button"
                  onClick={downloadPdf}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-slate-700"
                >
                  📄 {t.downloadPdfBtn}
                </button>
              </div>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
