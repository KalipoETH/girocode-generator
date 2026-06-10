'use client';

import React, { useEffect, useState } from 'react';
import { PdfButton } from './PdfButton';
import { en } from '../lib/translations/en';
import { fr } from '../lib/translations/fr';
import { es } from '../lib/translations/es';
import { it } from '../lib/translations/it';

type Locale = 'de' | 'en' | 'fr' | 'es' | 'it';

export interface InvoiceFormProps {
  locale: Locale;
  qrPngDataUrl: string | null;
}

interface InvoiceFormState {
  invoiceNumber: string;
  invoiceDate: string;
  sender: string;
  recipient: string;
  description: string;
  netAmount: string;
  vatRate: string;
}

function getTexts(locale: Locale) {
  if (locale === 'en') {
    return {
      title: en.invoice.title,
      description:
        'Create a compliant invoice with embedded GiroCode QR code – fully local in your browser.',
      invoiceNo: en.invoice.invoiceNo,
      invoiceDate: en.invoice.invoiceDate,
      seller: en.invoice.seller,
      buyer: en.invoice.buyer,
      logo: en.invoice.logo,
      serviceDescription: en.invoice.description,
      net: en.invoice.net,
      vat: en.invoice.vat,
      vatSummaryLabel: (rate: string) => `VAT (${rate || '0'} %)`,
      vatAmount: en.invoice.vatAmount,
      gross: en.invoice.gross,
      summaryNet: 'Net',
      summaryGross: 'Gross',
      logoErrorType: 'Please select a PNG or JPG file.',
      logoErrorRead: 'Logo could not be read.',
      infoUsesQr:
        'The invoice PDF uses the currently generated GiroCode QR code and places it in the bottom right corner.',
      infoNoQr:
        'Note: no QR code is available yet. Please first generate a QR code in the GiroCode generator.',
      currencySuffix: (v: number) => `${v.toFixed(2)} €`,
    };
  }

  if (locale === 'fr') {
    return {
      title: fr.invoice.title,
      description:
        'Créez une facture avec code QR GiroCode intégré – entièrement localement dans votre navigateur.',
      invoiceNo: fr.invoice.invoiceNo,
      invoiceDate: fr.invoice.invoiceDate,
      seller: fr.invoice.seller,
      buyer: fr.invoice.buyer,
      logo: fr.invoice.logo,
      serviceDescription: fr.invoice.description,
      net: fr.invoice.net,
      vat: fr.invoice.vat,
      vatSummaryLabel: (rate: string) => `TVA (${rate || '0'} %)`,
      vatAmount: fr.invoice.vatAmount,
      gross: fr.invoice.gross,
      summaryNet: 'Net',
      summaryGross: 'TTC',
      logoErrorType: 'Veuillez sélectionner un fichier PNG ou JPG.',
      logoErrorRead: "Le logo n'a pas pu être lu.",
      infoUsesQr:
        'La facture PDF utilise le code QR GiroCode actuellement généré et l’intègre en bas à droite.',
      infoNoQr:
        'Remarque : aucun code QR n’est encore disponible. Veuillez d’abord générer un code dans le générateur GiroCode.',
      currencySuffix: (v: number) => `${v.toFixed(2)} €`,
    };
  }

  if (locale === 'es') {
    return {
      title: es.invoice.title,
      description:
        'Crea una factura con código QR GiroCode integrado – completamente local en tu navegador.',
      invoiceNo: es.invoice.invoiceNo,
      invoiceDate: es.invoice.invoiceDate,
      seller: es.invoice.seller,
      buyer: es.invoice.buyer,
      logo: es.invoice.logo,
      serviceDescription: es.invoice.description,
      net: es.invoice.net,
      vat: es.invoice.vat,
      vatSummaryLabel: (rate: string) => `IVA (${rate || '0'} %)`,
      vatAmount: es.invoice.vatAmount,
      gross: es.invoice.gross,
      summaryNet: 'Neto',
      summaryGross: 'Bruto',
      logoErrorType: 'Selecciona un archivo PNG o JPG.',
      logoErrorRead: 'No se ha podido leer el logo.',
      infoUsesQr:
        'El PDF de la factura utiliza el código QR GiroCode generado y lo coloca en la esquina inferior derecha.',
      infoNoQr:
        'Nota: todavía no hay ningún código QR disponible. Primero genera un código en el generador GiroCode.',
      currencySuffix: (v: number) => `${v.toFixed(2)} €`,
    };
  }

  if (locale === 'it') {
    return {
      title: it.invoice.title,
      description:
        'Crea una fattura con codice QR GiroCode incorporato – completamente locale nel browser.',
      invoiceNo: it.invoice.invoiceNo,
      invoiceDate: it.invoice.invoiceDate,
      seller: it.invoice.seller,
      buyer: it.invoice.buyer,
      logo: it.invoice.logo,
      serviceDescription: it.invoice.description,
      net: it.invoice.net,
      vat: it.invoice.vat,
      vatSummaryLabel: (rate: string) => `IVA (${rate || '0'} %)`,
      vatAmount: it.invoice.vatAmount,
      gross: it.invoice.gross,
      summaryNet: 'Netto',
      summaryGross: 'Lordo',
      logoErrorType: 'Seleziona un file PNG o JPG.',
      logoErrorRead: 'Impossibile leggere il logo.',
      infoUsesQr:
        'Il PDF della fattura utilizza il codice QR GiroCode generato e lo posiziona in basso a destra.',
      infoNoQr:
        'Nota: nessun codice QR disponibile. Genera prima un codice nel generatore GiroCode.',
      currencySuffix: (v: number) => `${v.toFixed(2)} €`,
    };
  }

  // Deutsch
  return {
    title: 'Rechnungs-PDF',
    description:
      'Erstelle eine DIN-konforme Rechnung mit eingebettetem GiroCode-QR-Code – vollständig lokal im Browser.',
    invoiceNo: 'Rechnungs-Nr.',
    invoiceDate: 'Rechnungsdatum',
    seller: 'Absender / Firmendaten',
    buyer: 'Kundendaten / Empfängeradresse',
    logo: 'Logo (PNG/JPG, optional)',
    serviceDescription: 'Leistungsbeschreibung',
    net: 'Nettobetrag (EUR)',
    vat: 'USt-Satz (%)',
    vatSummaryLabel: (rate: string) => `USt (${rate || '0'} %)`,
    vatAmount: 'Umsatzsteuer-Betrag',
    gross: 'Bruttobetrag',
    summaryNet: 'Netto',
    summaryGross: 'Brutto',
    logoErrorType: 'Bitte eine PNG- oder JPG-Datei auswählen.',
    logoErrorRead: 'Logo konnte nicht gelesen werden.',
    infoUsesQr:
      'Die Rechnungs-PDF nutzt den aktuell erzeugten GiroCode-QR-Code und bettet ihn unten rechts ein.',
    infoNoQr:
      'Hinweis: Aktuell ist noch kein QR-Code vorhanden. Bitte zuerst im GiroCode-Generator einen QR-Code erzeugen.',
    currencySuffix: (v: number) => `${v.toFixed(2).replace('.', ',')} €`,
  };
}

export const InvoiceForm: React.FC<InvoiceFormProps> = ({ locale, qrPngDataUrl }) => {
  const t = getTexts(locale);
  const [form, setForm] = useState<InvoiceFormState>({
    invoiceNumber: '',
    invoiceDate: '',
    sender: '',
    recipient: '',
    description: '',
    netAmount: '',
    vatRate: '19',
  });

  const [logoBytes, setLogoBytes] = useState<Uint8Array | null>(null);
  const [logoMimeType, setLogoMimeType] = useState<'image/png' | 'image/jpeg' | undefined>(
    undefined,
  );
  const [logoError, setLogoError] = useState<string | null>(null);

  useEffect(() => {
    // Default: heutiges Datum im Format YYYY-MM-DD
    const today = new Date();
    const iso = today.toISOString().slice(0, 10);
    setForm((prev) => ({ ...prev, invoiceDate: iso }));
  }, []);

  const handleChange =
    (field: keyof InvoiceFormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const parseNumber = (value: string): number => {
    const normalized = value.replace(',', '.');
    const parsed = parseFloat(normalized);
    return isFinite(parsed) && parsed >= 0 ? parsed : 0;
  };

  const net = parseNumber(form.netAmount);
  const vatRateNum = parseNumber(form.vatRate);
  const vatAmount = (net * vatRateNum) / 100;
  const gross = net + vatAmount;

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setLogoBytes(null);
      setLogoMimeType(undefined);
      setLogoError(null);
      return;
    }

    if (!['image/png', 'image/jpeg'].includes(file.type)) {
      setLogoError(t.logoErrorType);
      setLogoBytes(null);
      setLogoMimeType(undefined);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (result instanceof ArrayBuffer) {
        setLogoBytes(new Uint8Array(result));
        setLogoMimeType(file.type as 'image/png' | 'image/jpeg');
        setLogoError(null);
      }
    };
    reader.onerror = () => {
      setLogoError(t.logoErrorRead);
      setLogoBytes(null);
      setLogoMimeType(undefined);
    };

    reader.readAsArrayBuffer(file);
  };

  const formatAmount = (value: number) =>
    t.currencySuffix(value);

  return (
    <section
      aria-labelledby="invoice-generator-heading"
      className="flex flex-col gap-6 rounded-3xl border border-white/5 bg-[#121318]/80 p-6 shadow-2xl shadow-black/50 backdrop-blur"
    >
      <div className="flex flex-col gap-2">
        <h2
          id="invoice-generator-heading"
          className="text-lg font-semibold tracking-tight text-slate-50"
        >
          {t.title}
        </h2>
        <p className="text-sm text-slate-400">
          {t.description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="flex flex-col gap-4">
          <div className="grid gap-3">
            <div className="grid grid-cols-2 gap-3">
              <label className="text-xs font-medium text-slate-200">
                {t.invoiceNo}
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-[#3a4055] bg-[#141720] px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-[#8b90a0] focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.12)]"
                  value={form.invoiceNumber}
                  onChange={handleChange('invoiceNumber')}
                />
              </label>

              <label className="text-xs font-medium text-slate-200">
                {t.invoiceDate}
                <input
                  type="date"
                  className="mt-1 w-full rounded-lg border border-[#3a4055] bg-[#141720] px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-[#8b90a0] focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.12)]"
                  value={form.invoiceDate}
                  onChange={handleChange('invoiceDate')}
                />
              </label>
            </div>

            <label className="text-xs font-medium text-slate-200">
              {t.seller}
              <textarea
                className="mt-1 min-h-[80px] w-full resize-y rounded-lg border border-[#3a4055] bg-[#141720] px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-[#8b90a0] focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.12)]"
                value={form.sender}
                onChange={handleChange('sender')}
              />
            </label>

            <label className="text-xs font-medium text-slate-200">
              {t.buyer}
              <textarea
                className="mt-1 min-h-[80px] w-full resize-y rounded-lg border border-[#3a4055] bg-[#141720] px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-[#8b90a0] focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.12)]"
                value={form.recipient}
                onChange={handleChange('recipient')}
              />
            </label>

            <label className="text-xs font-medium text-slate-200">
              {t.logo}
              <input
                type="file"
                accept="image/png,image/jpeg"
                onChange={handleLogoChange}
                className="mt-1 block w-full text-xs text-slate-300 file:mr-3 file:rounded-full file:border-0 file:bg-slate-800 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-slate-100 hover:file:bg-slate-700"
              />
              {logoError && (
                <p className="mt-1 text-[11px] text-red-400">
                  {logoError}
                </p>
              )}
            </label>

            <label className="text-xs font-medium text-slate-200">
              {t.serviceDescription}
              <textarea
                className="mt-1 min-h-[96px] w-full resize-y rounded-lg border border-[#3a4055] bg-[#141720] px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-[#8b90a0] focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.12)]"
                value={form.description}
                onChange={handleChange('description')}
              />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className="text-xs font-medium text-slate-200">
                {t.net}
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="mt-1 w-full rounded-lg border border-[#3a4055] bg-[#141720] px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-[#8b90a0] focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.12)]"
                  value={form.netAmount}
                  onChange={handleChange('netAmount')}
                />
              </label>

              <label className="text-xs font-medium text-slate-200">
                {t.vat}
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  className="mt-1 w-full rounded-lg border border-[#3a4055] bg-[#141720] px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-[#8b90a0] focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.12)]"
                  value={form.vatRate}
                  onChange={handleChange('vatRate')}
                />
              </label>
            </div>

            <div className="mt-2 grid grid-cols-3 gap-3 rounded-xl border border-slate-800/80 bg-slate-950/50 p-3 text-[11px] text-slate-200">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-medium text-slate-400">
                  {t.summaryNet}
                </span>
                <span className="font-semibold">
                  {formatAmount(net)}
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-medium text-slate-400">
                  {t.vatSummaryLabel(form.vatRate)}
                </span>
                <span className="font-semibold">
                  {formatAmount(vatAmount)}
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-medium text-emerald-300">
                  {t.summaryGross}
                </span>
                <span className="font-semibold text-emerald-300">
                  {formatAmount(gross)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 rounded-2xl border border-white/5 bg-black/20 p-4">
          <div className="space-y-2 text-xs text-slate-300">
            <p>
              {t.infoUsesQr}
            </p>
            {!qrPngDataUrl && (
              <p className="mt-1 flex items-center gap-1.5 text-[13px] leading-snug text-[#8b90a0]">
                <span className="flex-shrink-0" aria-hidden>ℹ️</span>
                <span>{t.infoNoQr}</span>
              </p>
            )}
          </div>

          <PdfButton
            locale={locale}
            invoiceData={{
              invoiceNumber: form.invoiceNumber,
              invoiceDate: form.invoiceDate,
              sender: form.sender,
              recipient: form.recipient,
              description: form.description,
              netAmount: net,
              vatRate: vatRateNum,
            }}
            qrPngDataUrl={qrPngDataUrl}
            logoBytes={logoBytes}
            logoMimeType={logoMimeType}
          />
        </div>
      </div>
    </section>
  );
};

