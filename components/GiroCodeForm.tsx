'use client';

import React, { useState } from 'react';
import { track } from '@vercel/analytics';
import { buildEPC, ibanIsValid } from '../lib/girocode';
import { takeScanHandoff } from '../lib/scanHandoff';
import { QRPreview, QRStatusType } from './QRPreview';
import { en } from '../lib/translations/en';
import { fr } from '../lib/translations/fr';
import { es } from '../lib/translations/es';
import { it } from '../lib/translations/it';

type Locale = 'de' | 'en' | 'fr' | 'es' | 'it';

interface GiroCodeFormState {
  name: string;
  iban: string;
  bic: string;
  amount: string;
  purpose: string;
}

interface GiroCodeFormProps {
  locale: Locale;
  onQrDataUrlChange?: (dataUrl: string | null) => void;
}

function formatIBAN(raw: string): string {
  const cleaned = raw.toUpperCase().replace(/[^A-Z0-9]/g, '');
  return cleaned.replace(/(.{4})/g, '$1 ').trim();
}

function getTexts(locale: Locale) {
  if (locale === 'en') {
    return {
      badge: en.hero.badge,
      title: en.hero.title,
      description:
        'Generate a SEPA-compliant GiroCode (EPC QR) directly in your browser. Ideal for invoices, donations or payment forms.',
      nameLabel: 'Recipient (Name)',
      namePlaceholder: 'Max Mustermann',
      nameCounter: (len: number) => `${len}/70`,
      ibanLabel: 'IBAN',
      bicLabel: 'BIC (optional)',
      amountLabel: 'Amount (EUR)',
      amountPlaceholder: 'Optional',
      amountHint: 'Optional – leave blank for a free amount (e.g. donations)',
      purposeLabel: 'Payment reference (max. 140 characters)',
      purposePlaceholder: 'Invoice 2024-001',
      purposeCounter: (len: number) => `${len}/140 characters`,
      generateButton: 'Generate GiroCode',
      requiredError: 'Please fill in name and IBAN.',
      ibanInvalid: en.form.ibanInvalid,
      ibanValid: 'IBAN valid',
      generateSuccess: en.qr.success,
      generateError: 'Error while generating the GiroCode. Please check your entries.',
      ibanPlaceholder: 'DE00 0000 0000 0000 0000 00',
      bicPlaceholder: 'BANKDEFFXXX',
      privacyNote: '🔒 All data stays in your browser',
    };
  }

  if (locale === 'fr') {
    return {
      badge: fr.hero.badge,
      title: fr.hero.title,
      description:
        'Générez un GiroCode compatible SEPA (EPC-QR) directement dans votre navigateur. Idéal pour les factures, dons ou formulaires de paiement.',
      nameLabel: 'Bénéficiaire (Nom)',
      namePlaceholder: 'Jean Dupont',
      nameCounter: (len: number) => `${len}/70`,
      ibanLabel: 'IBAN',
      bicLabel: 'BIC (optionnel)',
      amountLabel: 'Montant (EUR)',
      amountPlaceholder: 'Facultatif',
      amountHint: 'Facultatif – laissez vide pour un montant libre (ex. dons)',
      purposeLabel: 'Référence de paiement (max. 140 caractères)',
      purposePlaceholder: 'Facture 2024-001',
      purposeCounter: (len: number) => `${len}/140 caractères`,
      generateButton: 'Générer GiroCode',
      requiredError: "Veuillez renseigner le nom et l'IBAN.",
      ibanInvalid: fr.form.ibanInvalid,
      ibanValid: 'IBAN valide',
      generateSuccess: fr.qr.success,
      generateError:
        'Erreur lors de la génération du GiroCode. Veuillez vérifier les données saisies.',
      ibanPlaceholder: 'FR76 1234 5678 9012 3456 7890 185',
      bicPlaceholder: 'BANKFRPPXXX',
      privacyNote: '🔒 Toutes les données restent dans votre navigateur',
    };
  }

  if (locale === 'es') {
    return {
      badge: es.hero.badge,
      title: es.hero.title,
      description:
        'Genera un GiroCode compatible SEPA (EPC-QR) directamente en tu navegador. Ideal para facturas, donaciones o formularios de pago.',
      nameLabel: 'Beneficiario (Nombre)',
      namePlaceholder: 'Juan García',
      nameCounter: (len: number) => `${len}/70`,
      ibanLabel: 'IBAN',
      bicLabel: 'BIC (opcional)',
      amountLabel: 'Importe (EUR)',
      amountPlaceholder: 'Opcional',
      amountHint: 'Opcional – déjalo vacío para un importe libre (p. ej. donaciones)',
      purposeLabel: 'Concepto de pago (máx. 140 caracteres)',
      purposePlaceholder: 'Factura 2024-001',
      purposeCounter: (len: number) => `${len}/140 caracteres`,
      generateButton: 'Generar GiroCode',
      requiredError: 'Introduce nombre e IBAN.',
      ibanInvalid: es.form.ibanInvalid,
      ibanValid: 'IBAN válido',
      generateSuccess: es.qr.success,
      generateError:
        'Error al generar el GiroCode. Por favor, comprueba los datos introducidos.',
      ibanPlaceholder: 'ES12 3456 7890 1234 5678 9012',
      bicPlaceholder: 'BANKESMMXXX',
      privacyNote: '🔒 Todos los datos permanecen en tu navegador',
    };
  }

  if (locale === 'it') {
    return {
      badge: it.hero.badge,
      title: it.hero.title,
      description:
        'Genera un GiroCode conforme SEPA (EPC-QR) direttamente nel browser. Ideale per fatture, donazioni o moduli di pagamento.',
      nameLabel: 'Beneficiario (Nome)',
      namePlaceholder: 'Mario Rossi',
      nameCounter: (len: number) => `${len}/70`,
      ibanLabel: 'IBAN',
      bicLabel: 'BIC (opzionale)',
      amountLabel: 'Importo (EUR)',
      amountPlaceholder: 'Facoltativo',
      amountHint: 'Facoltativo – lascia vuoto per un importo libero (es. donazioni)',
      purposeLabel: 'Causale (max. 140 caratteri)',
      purposePlaceholder: 'Fattura 2024-001',
      purposeCounter: (len: number) => `${len}/140 caratteri`,
      generateButton: 'Genera GiroCode',
      requiredError: 'Inserisci nome e IBAN.',
      ibanInvalid: it.form.ibanInvalid,
      ibanValid: 'IBAN valido',
      generateSuccess: it.qr.success,
      generateError: 'Errore durante la generazione del GiroCode. Controlla i dati inseriti.',
      ibanPlaceholder: 'IT60 X054 2811 1010 0000 0123 456',
      bicPlaceholder: 'BANKITMMXXX',
      privacyNote: '🔒 Tutti i dati rimangono nel tuo browser',
    };
  }

  // Deutsch (Standard)
  return {
    badge: '100% client-seitig · keine Uploads',
    title: 'GiroCode / EPC-Generator',
    description:
      'Erzeuge einen SEPA-konformen GiroCode (EPC-QR) direkt im Browser. Ideal für Rechnungen, Spenden oder Überweisungsformulare.',
    nameLabel: 'Empfängername / Kontoinhaber',
    namePlaceholder: 'Max Mustermann',
    nameCounter: (len: number) => `${len}/70`,
    ibanLabel: 'IBAN',
    bicLabel: 'BIC (optional)',
    amountLabel: 'Betrag (EUR)',
    amountPlaceholder: 'Optional',
    amountHint: 'Optional – leer lassen für freie Betragswahl (z.B. Spenden)',
    purposeLabel: 'Verwendungszweck (max. 140 Zeichen)',
    purposePlaceholder: 'Rechnung 2024-001',
    purposeCounter: (len: number) => `${len}/140 Zeichen`,
    generateButton: 'GiroCode generieren',
    requiredError: 'Bitte Name und IBAN ausfüllen.',
    ibanInvalid: 'IBAN ist ungültig (Mod-97-Prüfung fehlgeschlagen).',
    ibanValid: 'IBAN gültig',
    generateSuccess: 'GiroCode erfolgreich erzeugt.',
    generateError: 'Fehler beim Erzeugen des GiroCodes. Bitte Eingaben prüfen.',
    ibanPlaceholder: 'DE00 0000 0000 0000 0000 00',
    bicPlaceholder: 'BANKDEFFXXX',
    privacyNote: '🔒 Alle Daten bleiben in Ihrem Browser',
  };
}

export const GiroCodeForm: React.FC<GiroCodeFormProps> = ({
  locale,
  onQrDataUrlChange,
}) => {
  const t = getTexts(locale);
  const [form, setForm] = useState<GiroCodeFormState>({
    name: '',
    iban: '',
    bic: '',
    amount: '',
    purpose: '',
  });

  // Vom Scanner übergebene Daten einmalig übernehmen. Die Übergabe läuft über
  // sessionStorage statt über Query-Parameter, damit Zahldaten nicht in
  // History, Referer oder Zugriffslogs auftauchen.
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const scanned = takeScanHandoff();
    if (!scanned) return;
    setForm((prev) => ({
      ...prev,
      ...(scanned.name ? { name: scanned.name } : {}),
      ...(scanned.iban ? { iban: formatIBAN(scanned.iban) } : {}),
      ...(scanned.bic ? { bic: scanned.bic } : {}),
      ...(scanned.amount ? { amount: scanned.amount } : {}),
      ...(scanned.purpose ? { purpose: scanned.purpose } : {}),
    }));
  }, []);

  const [epcPayload, setEpcPayload] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<QRStatusType>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Real-time IBAN validation state
  const ibanTrimmed = form.iban.trim();
  const ibanHasInput = ibanTrimmed.length > 0;
  const ibanCurrentlyValid = ibanHasInput && ibanIsValid(ibanTrimmed);
  const ibanCurrentlyInvalid = ibanHasInput && !ibanCurrentlyValid;

  const handleChange = (field: keyof GiroCodeFormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (field === 'purpose') {
      setForm((prev) => ({ ...prev, [field]: e.target.value.slice(0, 140) }));
      return;
    }
    if (field === 'name') {
      setForm((prev) => ({ ...prev, [field]: e.target.value.slice(0, 70) }));
      return;
    }
    if (field === 'iban') {
      setForm((prev) => ({ ...prev, iban: formatIBAN(e.target.value) }));
      return;
    }
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = form.name.trim();
    const trimmedIban = form.iban.trim();
    const trimmedAmount = form.amount.trim();

    if (!trimmedName || !trimmedIban) {
      setStatusType('error');
      setStatusMessage(t.requiredError);
      setEpcPayload(null);
      return;
    }

    if (!ibanIsValid(trimmedIban)) {
      setStatusType('error');
      setStatusMessage(t.ibanInvalid);
      setEpcPayload(null);
      return;
    }

    try {
      const payload = buildEPC({
        name: trimmedName,
        iban: trimmedIban,
        bic: form.bic,
        amount: trimmedAmount || undefined,
        purpose: form.purpose,
      });

      setEpcPayload(payload);
      setStatusType('success');
      setStatusMessage(t.generateSuccess);
      track('girocode_generated', {
        has_amount: !!trimmedAmount,
        has_purpose: !!form.purpose.trim(),
        has_bic: !!form.bic.trim(),
        locale,
      });
    } catch (err) {
      setStatusType('error');
      setStatusMessage(t.generateError);
      setEpcPayload(null);
    }
  };

  const handleReset = () => {
    setForm({
      name: '',
      iban: '',
      bic: '',
      amount: '',
      purpose: '',
    });
    setEpcPayload(null);
    if (onQrDataUrlChange) {
      onQrDataUrlChange(null);
    }
    setStatusType(null);
    setStatusMessage(null);
  };

  const inputBase =
    'mt-1 w-full rounded-lg border bg-[#141720] px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-[#8b90a0] focus:ring-2 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.12)]';
  const inputNeutral = `${inputBase} border-[#3a4055] focus:border-emerald-500 focus:ring-emerald-500/20`;
  const inputValid = `${inputBase} border-emerald-500/60 focus:border-emerald-500 focus:ring-emerald-500/20`;
  const inputInvalid = `${inputBase} border-red-500/60 focus:border-red-500 focus:ring-red-500/20`;

  return (
    <section
      aria-labelledby="girocode-generator-heading"
      className="flex flex-col gap-6 rounded-3xl border border-white/5 bg-[#121318]/80 p-6 shadow-2xl shadow-black/50 backdrop-blur"
    >
      <div className="flex flex-col gap-1">
        <h2
          id="girocode-generator-heading"
          className="text-lg font-semibold tracking-tight text-slate-50"
        >
          {t.title}
        </h2>
        <p className="text-sm text-slate-400">{t.description}</p>
      </div>

      <form
        onSubmit={handleGenerate}
        className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
        noValidate
      >
        <div className="flex flex-col gap-4">
          <div className="grid gap-3">
            {/* Name */}
            <label className="text-xs font-medium text-slate-200">
              <div className="flex items-center justify-between">
                <span>{t.nameLabel}</span>
                <span
                  className={`text-[10px] tabular-nums ${
                    form.name.length >= 60 ? 'text-amber-400' : 'text-slate-500'
                  }`}
                >
                  {t.nameCounter(form.name.length)}
                </span>
              </div>
              <input
                type="text"
                className={`${inputNeutral} mt-1`}
                value={form.name}
                onChange={handleChange('name')}
                placeholder={t.namePlaceholder}
                maxLength={70}
                required
                aria-required="true"
              />
            </label>

            {/* IBAN */}
            <label className="text-xs font-medium text-slate-200">
              {t.ibanLabel}
              <div className="relative mt-1">
                <input
                  type="text"
                  inputMode="text"
                  autoCapitalize="characters"
                  autoComplete="off"
                  spellCheck={false}
                  className={
                    ibanCurrentlyValid
                      ? inputValid
                      : ibanCurrentlyInvalid
                      ? inputInvalid
                      : inputNeutral
                  }
                  value={form.iban}
                  onChange={handleChange('iban')}
                  placeholder={t.ibanPlaceholder}
                  required
                  aria-required="true"
                  aria-invalid={ibanCurrentlyInvalid ? 'true' : undefined}
                  aria-describedby={ibanCurrentlyInvalid ? 'iban-error' : undefined}
                />
                {/* Inline validity icon */}
                {ibanHasInput && (
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                    {ibanCurrentlyValid ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4 text-emerald-400"
                        aria-hidden
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4 text-red-400"
                        aria-hidden
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </span>
                )}
              </div>
              {ibanCurrentlyValid && (
                <p className="mt-1 text-[11px] text-emerald-400">{t.ibanValid} ✓</p>
              )}
              {ibanCurrentlyInvalid && (
                <p id="iban-error" className="mt-1 text-[11px] text-red-400" role="alert">
                  {t.ibanInvalid}
                </p>
              )}
            </label>

            <div className="grid grid-cols-2 gap-3">
              {/* BIC */}
              <label className="text-xs font-medium text-slate-200">
                {t.bicLabel}
                <input
                  type="text"
                  inputMode="text"
                  autoCapitalize="characters"
                  className={`${inputNeutral} mt-1`}
                  value={form.bic}
                  onChange={handleChange('bic')}
                  placeholder={t.bicPlaceholder}
                />
              </label>

              {/* Amount */}
              <label className="text-xs font-medium text-slate-200">
                {t.amountLabel}
                <input
                  type="text"
                  inputMode="decimal"
                  pattern="[0-9]*[.,]?[0-9]{0,2}"
                  className={`${inputNeutral} mt-1`}
                  value={form.amount}
                  onChange={handleChange('amount')}
                  placeholder={t.amountPlaceholder}
                  autoComplete="off"
                />
                <span className="mt-1 block text-[10px] text-slate-500">{t.amountHint}</span>
              </label>
            </div>

            {/* Purpose */}
            <label className="text-xs font-medium text-slate-200">
              {t.purposeLabel}
              <textarea
                className="mt-1 min-h-[72px] w-full resize-y rounded-lg border border-[#3a4055] bg-[#141720] px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-[#8b90a0] focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.12)]"
                value={form.purpose}
                onChange={handleChange('purpose')}
                placeholder={t.purposePlaceholder}
                maxLength={140}
              />
              <div className="mt-1 text-right text-[10px] text-slate-500">
                {t.purposeCounter(form.purpose.length)}
              </div>
            </label>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:hover:translate-y-0"
            >
              {t.generateButton}
            </button>
            <span className="text-[10px] text-slate-500">{t.privacyNote}</span>
          </div>
        </div>

        <QRPreview
          locale={locale}
          epcPayload={epcPayload}
          statusType={statusType}
          statusMessage={statusMessage}
          onReset={handleReset}
          onQrRendered={onQrDataUrlChange}
        />
      </form>
    </section>
  );
};
