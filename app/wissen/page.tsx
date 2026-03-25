import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wissen rund um GiroCode & SEPA-QR',
  description:
    'Alles über GiroCodes, EPC-Standard, IBAN, Rechnungen und Banking-Apps – der Wissensbereich von girocodegenerator.com.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/wissen',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen',
      'de': 'https://www.girocodegenerator.com/wissen',
      'en': 'https://www.girocodegenerator.com/en/wissen',
      'fr': 'https://www.girocodegenerator.com/fr/wissen',
      'es': 'https://www.girocodegenerator.com/es/wissen',
    },
  },
};

const knowledgePages = [
  {
    href: '/wissen/girocode',
    title: 'Was ist ein GiroCode?',
    description: 'Grundlagen, Funktionsweise und Vorteile des SEPA-QR-/EPC-Standards.',
  },
  {
    href: '/wissen/epc-standard',
    title: 'EPC-Standard & SEPA-QR',
    description: 'Technischer Aufbau des EPC-Payloads im Detail erklärt.',
  },
  {
    href: '/wissen/iban-bic',
    title: 'IBAN & BIC im GiroCode',
    description: 'Welche Angaben sind Pflicht, wie prüft man die IBAN und was ist optional?',
  },
  {
    href: '/wissen/betrag-und-zweck',
    title: 'Betrag & Verwendungszweck',
    description:
      'Wie du Betrag und Verwendungszweck im GiroCode sinnvoll und korrekt einträgst.',
  },
  {
    href: '/wissen/rechnung',
    title: 'GiroCode auf Rechnungen',
    description: 'So integrierst du den GiroCode rechtssicher in deine Rechnungen.',
  },
  {
    href: '/wissen/banking-apps',
    title: 'Banking-Apps mit GiroCode',
    description:
      'Überblick über Banking-Apps, die SEPA-QR-/GiroCodes unterstützen, plus Praxistipps.',
  },
  {
    href: '/wissen/scannen',
    title: 'GiroCode scannen',
    description:
      'Schritt-für-Schritt-Anleitung zum Scannen und Prüfen des GiroCodes mit deiner Banking-App.',
  },
];

export default function WissenOverviewPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">
        <header className="mb-8 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Wissensbereich · Grundlagen zu GiroCode &amp; SEPA-QR
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Wissen rund um GiroCode &amp; SEPA-QR
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              In diesem Bereich findest du verständlich aufbereitetes Hintergrundwissen zu GiroCodes
              (SEPA-QR / EPC), dem technischen Standard dahinter, IBAN &amp; BIC, Beträgen und
              Verwendungszwecken, Rechnungen sowie Banking-Apps.
            </p>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {knowledgePages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group rounded-xl border border-slate-800 bg-slate-900/40 p-4 transition hover:border-sky-500/60 hover:bg-slate-900/80"
            >
              <h2 className="mb-1 text-base font-semibold text-slate-50 group-hover:text-sky-300">
                {page.title}
              </h2>
              <p className="text-sm text-slate-400">{page.description}</p>
              <span className="mt-3 inline-flex items-center text-xs font-medium text-sky-400">
                Mehr erfahren
                <span className="ml-1 text-[10px]">↗</span>
              </span>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}

