'use client';

import React, { useState } from 'react';

type Locale = 'de' | 'en' | 'fr' | 'es';

const i18n: Record<
  Locale,
  {
    title: string;
    question: string;
    perMonth: string;
    perYear: string;
    workdays: string;
    minutesLabel: string;
    hoursLabel: string;
    daysLabel: string;
    invoicesUnit: string;
  }
> = {
  de: {
    title: 'Wie viel Zeit sparst du mit GiroCode?',
    question: 'Wie viele Rechnungen schreibst du pro Monat?',
    perMonth: 'Zeit gespart / Monat',
    perYear: 'Zeit gespart / Jahr',
    workdays: 'Das entspricht',
    minutesLabel: 'Min.',
    hoursLabel: 'Std.',
    daysLabel: 'Arbeitstag(en)',
    invoicesUnit: 'Rechnungen',
  },
  en: {
    title: 'How much time do you save with GiroCode?',
    question: 'How many invoices do you write per month?',
    perMonth: 'Time saved / month',
    perYear: 'Time saved / year',
    workdays: 'Equivalent to',
    minutesLabel: 'min.',
    hoursLabel: 'hrs.',
    daysLabel: 'working day(s)',
    invoicesUnit: 'invoices',
  },
  fr: {
    title: 'Combien de temps gagnez-vous avec GiroCode?',
    question: 'Combien de factures rédigez-vous par mois?',
    perMonth: 'Temps gagné / mois',
    perYear: 'Temps gagné / an',
    workdays: 'Soit',
    minutesLabel: 'min.',
    hoursLabel: 'h.',
    daysLabel: 'jour(s) ouvrable(s)',
    invoicesUnit: 'factures',
  },
  es: {
    title: '¿Cuánto tiempo ahorras con GiroCode?',
    question: '¿Cuántas facturas emites al mes?',
    perMonth: 'Tiempo ahorrado / mes',
    perYear: 'Tiempo ahorrado / año',
    workdays: 'Equivale a',
    minutesLabel: 'min.',
    hoursLabel: 'h.',
    daysLabel: 'día(s) laborable(s)',
    invoicesUnit: 'facturas',
  },
};

interface TimeSavingsCalculatorProps {
  locale?: Locale;
}

export function TimeSavingsCalculator({ locale = 'de' }: TimeSavingsCalculatorProps) {
  const [count, setCount] = useState(10);
  const t = i18n[locale];

  // 3 min manual vs ~10 sec with GiroCode = ~170 sec = ~2.83 min saved per invoice
  const savedMinutesPerMonth = Math.round(count * (3 - 10 / 60));
  const savedHoursPerYear = Math.round((savedMinutesPerMonth * 12) / 60);
  const savedWorkdays = (savedHoursPerYear / 8).toFixed(1);

  return (
    <section
      aria-labelledby="time-savings-heading"
      className="animate-card-in mt-4 rounded-2xl border border-[#1f2431] bg-[#0f1117] p-5"
    >
      <h2
        id="time-savings-heading"
        className="mb-1 text-base font-semibold tracking-tight text-slate-50"
      >
        {t.title}
      </h2>

      <div className="mt-4 space-y-3">
        <label className="block text-sm text-slate-400">
          {t.question}
          <span className="ml-2 font-bold text-[#22c55e]">
            {count} {t.invoicesUnit}
          </span>
        </label>
        <input
          type="range"
          min={1}
          max={100}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="w-full accent-[#22c55e]"
          aria-label={t.question}
        />
        <div className="flex justify-between text-[11px] text-slate-600">
          <span>1</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-[#22c55e]/20 bg-[#133018]/60 p-3 text-center">
          <p className="text-xl font-bold text-[#22c55e]">
            {savedMinutesPerMonth} {t.minutesLabel}
          </p>
          <p className="mt-1 text-[11px] text-[#8b90a0]">{t.perMonth}</p>
        </div>
        <div className="rounded-xl border border-[#22c55e]/20 bg-[#133018]/60 p-3 text-center">
          <p className="text-xl font-bold text-[#22c55e]">
            {savedHoursPerYear} {t.hoursLabel}
          </p>
          <p className="mt-1 text-[11px] text-[#8b90a0]">{t.perYear}</p>
        </div>
        <div className="rounded-xl border border-[#22c55e]/20 bg-[#133018]/60 p-3 text-center">
          <p className="text-xl font-bold text-[#22c55e]">{savedWorkdays}</p>
          <p className="mt-1 text-[11px] text-[#8b90a0]">
            {t.workdays} {t.daysLabel}
          </p>
        </div>
      </div>
    </section>
  );
}
