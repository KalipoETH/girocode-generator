'use client';

import React, { useState } from 'react';
import { buildEPC, ibanIsValid } from '../lib/girocode';
import { QRPreview, QRStatusType } from './QRPreview';
import { en } from '../lib/translations/en';
import { fr } from '../lib/translations/fr';
import { es } from '../lib/translations/es';

type Locale = 'de' | 'en' | 'fr' | 'es';

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

function getTexts(locale: Locale) {
  if (locale === 'en') {
    return {
      badge: en.hero.badge,
      title: en.hero.title,
      description:
        'Generate a SEPA-compliant GiroCode (EPC QR) directly in your browser. Ideal for invoices, donations or payment forms.',
      nameLabel: 'Recipient (Name)',
      ibanLabel: 'IBAN',
      bicLabel: 'BIC (optional)',
      amountLabel: 'Amount (EUR)',
      purposeLabel: 'Payment reference (max. 140 characters)',
      purposeCounter: (len: number) => `${len}/140 characters`,
      generateButton: 'Generate GiroCode',
      requiredError: 'Please fill in name, IBAN and amount.',
      ibanInvalid: en.form.ibanInvalid,
      generateSuccess: en.qr.success,
      generateError: 'Error while generating the GiroCode. Please check your entries.',
      ibanPlaceholder: 'DE00 0000 0000 0000 0000 00',
      bicPlaceholder: 'BANKDEFFXXX',
    };
  }

  if (locale === 'fr') {
    return {
      badge: fr.hero.badge,
      title: fr.hero.title,
      description:
        'Générez un GiroCode compatible SEPA (EPC-QR) directement dans votre navigateur. Idéal pour les factures, dons ou formulaires de paiement.',
      nameLabel: 'Bénéficiaire (Nom)',
      ibanLabel: 'IBAN',
      bicLabel: 'BIC (optionnel)',
      amountLabel: 'Montant (EUR)',
      purposeLabel: 'Référence de paiement (max. 140 caractères)',
      purposeCounter: (len: number) => `${len}/140 caractères`,
      generateButton: 'Générer GiroCode',
      requiredError: 'Veuillez renseigner le nom, l’IBAN et le montant.',
      ibanInvalid: fr.form.ibanInvalid,
      generateSuccess: fr.qr.success,
      generateError:
        'Erreur lors de la génération du GiroCode. Veuillez vérifier les données saisies.',
      ibanPlaceholder: 'FR76 1234 5678 9012 3456 7890 185',
      bicPlaceholder: 'BANKFRPPXXX',
    };
  }

  if (locale === 'es') {
    return {
      badge: es.hero.badge,
      title: es.hero.title,
      description:
        'Genera un GiroCode compatible SEPA (EPC-QR) directamente en tu navegador. Ideal para facturas, donaciones o formularios de pago.',
      nameLabel: 'Beneficiario (Nombre)',
      ibanLabel: 'IBAN',
      bicLabel: 'BIC (opcional)',
      amountLabel: 'Importe (EUR)',
      purposeLabel: 'Concepto de pago (máx. 140 caracteres)',
      purposeCounter: (len: number) => `${len}/140 caracteres`,
      generateButton: 'Generar GiroCode',
      requiredError: 'Introduce nombre, IBAN e importe.',
      ibanInvalid: es.form.ibanInvalid,
      generateSuccess: es.qr.success,
      generateError:
        'Error al generar el GiroCode. Por favor, comprueba los datos introducidos.',
      ibanPlaceholder: 'ES12 3456 7890 1234 5678 9012',
      bicPlaceholder: 'BANKESMMXXX',
    };
  }

  // Deutsch (Standard)
  return {
    badge: '100% client-seitig · keine Uploads',
    title: 'GiroCode / EPC-Generator',
    description:
      'Erzeuge einen SEPA-konformen GiroCode (EPC-QR) direkt im Browser. Ideal für Rechnungen, Spenden oder Überweisungsformulare.',
    nameLabel: 'Empfängername / Kontoinhaber',
    ibanLabel: 'IBAN',
    bicLabel: 'BIC (optional)',
    amountLabel: 'Betrag (EUR)',
    purposeLabel: 'Verwendungszweck (max. 140 Zeichen)',
    purposeCounter: (len: number) => `${len}/140 Zeichen`,
    generateButton: 'GiroCode generieren',
    requiredError: 'Bitte Name, IBAN und Betrag ausfüllen.',
    ibanInvalid: 'IBAN ist ungültig (Mod-97-Prüfung fehlgeschlagen).',
    generateSuccess: 'GiroCode erfolgreich erzeugt.',
    generateError: 'Fehler beim Erzeugen des GiroCodes. Bitte Eingaben prüfen.',
    ibanPlaceholder: 'DE00 0000 0000 0000 0000 00',
    bicPlaceholder: 'BANKDEFFXXX',
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

  // URL-Parameter automatisch einlesen (vom Scanner)
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const iban = params.get('iban');
    const bic = params.get('bic');
    const betrag = params.get('betrag');
    const zweck = params.get('zweck');
    if (name || iban || bic || betrag || zweck) {
      setForm((prev) => ({
        ...prev,
        ...(name ? { name } : {}),
        ...(iban ? { iban } : {}),
        ...(bic ? { bic } : {}),
        ...(betrag ? { amount: betrag } : {}),
        ...(zweck ? { purpose: zweck.slice(0, 140) } : {}),
      }));
    }
  }, []);

  const [epcPayload, setEpcPayload] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<QRStatusType>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (field: keyof GiroCodeFormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = field === 'purpose' ? e.target.value.slice(0, 140) : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = form.name.trim();
    const trimmedIban = form.iban.trim();
    const trimmedAmount = form.amount.trim();

    if (!trimmedName || !trimmedIban || !trimmedAmount) {
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
        amount: trimmedAmount,
        purpose: form.purpose,
      });

      setEpcPayload(payload);
      setStatusType('success');
      setStatusMessage(t.generateSuccess);
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
      >
        <div className="flex flex-col gap-4">
          <div className="grid gap-3">
            <label className="text-xs font-medium text-slate-200">
              {t.nameLabel}
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-[#3a4055] bg-[#141720] px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-[#8b90a0] focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.12)]"
                value={form.name}
                onChange={handleChange('name')}
                required
              />
            </label>

            <label className="text-xs font-medium text-slate-200">
              {t.ibanLabel}
              <input
                type="text"
                inputMode="text"
                autoCapitalize="characters"
                className="mt-1 w-full rounded-lg border border-[#3a4055] bg-[#141720] px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-[#8b90a0] focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.12)]"
                value={form.iban}
                onChange={handleChange('iban')}
                placeholder={t.ibanPlaceholder}
                required
              />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className="text-xs font-medium text-slate-200">
                {t.bicLabel}
                <input
                  type="text"
                  inputMode="text"
                  autoCapitalize="characters"
                  className="mt-1 w-full rounded-lg border border-[#3a4055] bg-[#141720] px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-[#8b90a0] focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.12)]"
                  value={form.bic}
                  onChange={handleChange('bic')}
                  placeholder={t.bicPlaceholder}
                />
              </label>

              <label className="text-xs font-medium text-slate-200">
                {t.amountLabel}
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="mt-1 w-full rounded-lg border border-[#3a4055] bg-[#141720] px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-[#8b90a0] focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.12)]"
                  value={form.amount}
                  onChange={handleChange('amount')}
                  required
                />
              </label>
            </div>

            <label className="text-xs font-medium text-slate-200">
              {t.purposeLabel}
              <textarea
                className="mt-1 min-h-[72px] w-full resize-y rounded-lg border border-[#3a4055] bg-[#141720] px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-[#8b90a0] focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.12)]"
                value={form.purpose}
                onChange={handleChange('purpose')}
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

