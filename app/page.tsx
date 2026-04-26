'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GiroCodeForm } from '../components/GiroCodeForm';
import { InvoiceForm } from '../components/InvoiceForm';

export default function HomePage() {
  const [qrPngDataUrl, setQrPngDataUrl] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'GiroCode Generator',
            url: 'https://www.girocodegenerator.com',
            description:
              'Kostenloser GiroCode (SEPA-QR / EPC) Generator – komplett lokal im Browser, keine Datenweitergabe. Mit Rechnungs-PDF.',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web Browser',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'EUR',
            },
            featureList: [
              'GiroCode / SEPA-QR / EPC QR-Code erstellen',
              'IBAN-Validierung',
              'Rechnungs-PDF mit eingebettetem QR-Code',
              '100% lokal im Browser',
              'Keine Datenspeicherung',
            ],
            inLanguage: 'de',
            author: {
              '@type': 'Person',
              name: 'Kaleb Jahnke',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Ist der GiroCode Generator wirklich kostenlos?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ja. Du kannst den Generator dauerhaft kostenlos nutzen – es fallen nur die üblichen Gebühren deiner Bank für SEPA-Überweisungen an, sofern diese nicht ohnehin kostenfrei sind.',
                },
              },
              {
                '@type': 'Question',
                name: 'Werden meine Daten gespeichert?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Nein. Alle Eingaben werden ausschließlich in deinem Browser verarbeitet. Es findet keine serverseitige Speicherung oder Auswertung statt.',
                },
              },
              {
                '@type': 'Question',
                name: 'Welche Banking-Apps können den GiroCode scannen?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Viele Apps im deutschsprachigen Raum unterstützen SEPA-QR / GiroCode, darunter Sparkasse, Volks- und Raiffeisenbanken, ING, DKB, Comdirect, Deutsche Bank, N26 und weitere.',
                },
              },
              {
                '@type': 'Question',
                name: 'Muss ich einen Betrag angeben?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Nein. Du kannst den Betrag frei lassen – dann trägt der Zahler den gewünschten Betrag selbst ein. Für klassische Rechnungen empfiehlt sich jedoch ein fest hinterlegter Betrag.',
                },
              },
              {
                '@type': 'Question',
                name: 'Kann ich den GiroCode direkt in eine Rechnung einbinden?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ja. Mit der integrierten Rechnungsfunktion erzeugst du eine PDF-Rechnung mit eingebettetem GiroCode, die sich ideal für den Versand per E-Mail oder zum Ausdrucken eignet.',
                },
              },
              {
                '@type': 'Question',
                name: 'Ist das Erstellen eines GiroCodes sicher?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ja. Alle Daten werden ausschließlich lokal in deinem Browser verarbeitet. Deine IBAN, der Betrag und der Verwendungszweck verlassen nie deinen Computer. Es findet keine Übertragung an unsere Server statt.',
                },
              },
              {
                '@type': 'Question',
                name: 'Welche Daten sind in einem GiroCode gespeichert?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ein GiroCode enthält: Name des Empfängers, IBAN, optional BIC, optional Betrag (z.B. EUR49.90) und optional einen Verwendungszweck (max. 140 Zeichen). Keine persönlichen Daten des Zahlers werden gespeichert.',
                },
              },
              {
                '@type': 'Question',
                name: 'Warum erkennt meine Banking-App den GiroCode nicht?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Häufige Ursachen: Der Code ist zu klein gedruckt (Mindestgröße 2x2 cm), schlechte Beleuchtung, Reflexionen auf dem Bildschirm oder die Banking-App unterstützt den EPC-Standard nicht. Tipp: Helligkeit erhöhen und Abstand von 15-30 cm einhalten.',
                },
              },
              {
                '@type': 'Question',
                name: 'Kann ich einen GiroCode ohne Betrag erstellen?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ja, der Betrag ist optional. Lässt du ihn weg, kann der Zahler selbst einen Betrag eingeben. Das ist besonders praktisch für Spendenaufrufe oder variable Preise.',
                },
              },
              {
                '@type': 'Question',
                name: 'Ist ein GiroCode dasselbe wie ein EPC-QR-Code?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ja. GiroCode ist der deutsche Markenname für den EPC-QR-Code (European Payments Council). In Österreich heißt er Stuzza-QR, in der Schweiz QR-Bill. Alle basieren auf demselben Standard.',
                },
              },
              {
                '@type': 'Question',
                name: 'Wie lange ist ein GiroCode gültig?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ein GiroCode hat kein Ablaufdatum. Er ist dauerhaft gültig, solange die enthaltenen Kontodaten (IBAN, Empfängername) noch aktuell sind.',
                },
              },
              {
                '@type': 'Question',
                name: 'Kann jemand mit meinem GiroCode Geld von mir abbuchen?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Nein. Ein GiroCode ist eine Zahlungsaufforderung, kein Lastschriftmandat. Nur der Zahler kann aktiv eine Überweisung auslösen und muss diese mit TAN oder Biometrie bestätigen. Deine IBAN zu kennen ermöglicht es niemandem, Geld abzubuchen.',
                },
              },
            ],
          }),
        }}
      />
      {/* Hero */}
      <header
        className="animate-card-in relative overflow-hidden px-4 pb-20 pt-10 text-center sm:pt-20"
        style={{ animationDelay: '0s' }}
      >
        {/* Dezenter Glow-Hintergrund */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6">
          {/* Badge */}
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            100% client-seitig · keine Uploads
          </p>

          {/* Titel */}
          <div className="space-y-2">
            <h1
              className="font-bold tracking-tight text-slate-50"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.1 }}
            >
              GiroCode Generator
            </h1>
            <p className="text-xl font-semibold md:text-2xl" style={{ color: '#22c55e' }}>
              SEPA-QR &amp; Rechnungs-PDF
            </p>
          </div>

          {/* Beschreibung – auf Mobile ausgeblendet */}
          <p className="hidden max-w-xl text-base leading-relaxed text-slate-400 sm:block md:text-lg">
            Erzeuge SEPA-EPC/GiroCodes und eine DIN-konforme Rechnungs-PDF – komplett lokal im
            Browser. Ideal für Freelancer, Vereine und kleine Unternehmen.
          </p>

          {/* Trust-Badges – auf Mobile ausgeblendet */}
          <div className="hidden flex-wrap items-center justify-center gap-3 sm:flex">
            {[
              { icon: '✅', label: 'EPC-konform' },
              { icon: '🔒', label: 'DSGVO-freundlich' },
              { icon: '💸', label: '100% kostenlos' },
            ].map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-200"
              >
                <span>{badge.icon}</span>
                {badge.label}
              </span>
            ))}
          </div>

          {/* CTA – auf Mobile ausgeblendet */}
          <a
            href="#generator"
            className="mt-2 hidden items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-xl motion-reduce:hover:translate-y-0 sm:inline-flex"
            style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              boxShadow: '0 0 24px rgba(34,197,94,0.35)',
            }}
          >
            Jetzt GiroCode erstellen →
          </a>
        </div>
      </header>

      {/* Trust-Bar */}
      <div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-4 gap-y-3 px-4 sm:grid-cols-4">
          {[
            { icon: '🔒', title: '100% Datenschutz', sub: 'Keine Speicherung Ihrer Bankdaten' },
            { icon: '✅', title: 'EPC-konform', sub: 'Kompatibel mit allen Banking-Apps' },
            { icon: '⚡', title: 'Kostenlos', sub: 'Ohne Anmeldung nutzbar' },
            { icon: '🏦', title: 'SEPA-Standard', sub: 'Von deutschen Banken anerkannt' },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3 rounded-lg px-2 py-1 transition-colors hover:bg-[#141820]"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="text-[14px] font-bold text-[#e8eaf0]">{item.title}</p>
                <p className="text-[12px] text-[#8b90a0]">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-12">

        {/* Generator */}
        <section id="generator" className="flex flex-col gap-6">
          <div className="animate-card-in" style={{ animationDelay: '0.1s' }}>
            <GiroCodeForm locale="de" onQrDataUrlChange={setQrPngDataUrl} />
          </div>
          {/* FIX 5: Visueller Trenner */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            <span className="text-slate-500 text-sm px-4">Rechnungs-PDF</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          </div>
          <div className="animate-card-in" style={{ animationDelay: '0.2s' }}>
            <InvoiceForm locale="de" qrPngDataUrl={qrPngDataUrl} />
          </div>
        </section>

        {/* FIX 4: Trust-Sektion */}
        <section
          aria-label="Vertrauen & Sicherheit"
          className="animate-card-in grid gap-4 sm:grid-cols-3"
          style={{ animationDelay: '0.25s' }}
        >
          {[
            {
              icon: '🔒',
              title: 'Keine Datenweitergabe',
              sub: 'Deine IBAN verlässt nie deinen Browser',
            },
            {
              icon: '⚡',
              title: 'Sofort einsatzbereit',
              sub: 'Kein Account, keine Installation',
            },
            {
              icon: '🌍',
              title: '4 Sprachen',
              sub: 'DE, EN, FR, ES',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-2 rounded-2xl border border-slate-800/80 border-t-2 border-t-emerald-500/20 bg-slate-900/50 p-7 transition-all duration-200 hover:bg-[#1a1d25] hover:border-t-emerald-500"
            >
              <span className="text-3xl">{card.icon}</span>
              <p className="font-bold text-slate-100" style={{ fontSize: '18px' }}>{card.title}</p>
              <p className="text-[14px] text-[#8b90a0]">{card.sub}</p>
            </div>
          ))}
        </section>

        <section
          aria-labelledby="seo-how-it-works"
          className="animate-card-in mt-4 space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 text-sm text-slate-300 shadow-inner shadow-black/40"
          style={{ animationDelay: '0.3s' }}
        >
          <div>
            <h2
              id="seo-how-it-works"
              className="text-base font-semibold tracking-tight text-slate-50"
            >
              GiroCode kostenlos erstellen – so funktioniert&apos;s
            </h2>
            <p className="mt-2">
              Ein GiroCode ist ein standardisierter <strong>SEPA-QR- bzw. EPC-Code</strong>, der alle
              wichtigen Überweisungsdaten wie Empfänger, IBAN, Betrag und Verwendungszweck enthält.
              Statt Zahlenkolonnen abzutippen, scannst du den Code einfach mit deiner Banking-App und
              übernimmst die Daten mit wenigen Klicks.
            </p>
            <p className="mt-2">
              Unser Generator arbeitet <strong>100% lokal im Browser</strong>: Deine Eingaben werden
              weder gespeichert noch an einen Server gesendet. Auf Wunsch erzeugst du zusätzlich eine
              <strong> Rechnungs-PDF mit eingebettetem GiroCode</strong>, die du direkt per E-Mail
              verschicken oder ausdrucken kannst.
            </p>
            <p className="mt-2">
              Der GiroCode eignet sich ideal für <strong>Selbstständige, Vereine und
              Privatpersonen</strong> – überall dort, wo Zahlungen schnell, fehlerfrei und bequem
              abgewickelt werden sollen.
            </p>
          </div>

          {/* FIX 2: FAQ-Box */}
          <div className="pt-2">
            <h2 className="text-base font-semibold tracking-tight text-slate-50">
              Häufige Fragen zum GiroCode Generator
            </h2>
            <dl className="mt-3 flex flex-col gap-3">
              <div className="rounded-[12px] border-l-[3px] border-l-[#22c55e] bg-[#1a1d25] p-5 transition-colors duration-200 hover:bg-[#1e2130]">
                <dt className="font-semibold text-slate-100" style={{ fontSize: '15px' }}>
                  Ist der GiroCode Generator wirklich kostenlos?
                </dt>
                <dd className="mt-1 text-xs leading-[1.7] text-[#9aa1b6]">
                  Ja. Du kannst den Generator dauerhaft kostenlos nutzen – es fallen nur die üblichen
                  Gebühren deiner Bank für SEPA-Überweisungen an, sofern diese nicht ohnehin
                  kostenfrei sind.
                </dd>
              </div>
              <div className="rounded-[12px] border-l-[3px] border-l-[#22c55e] bg-[#1a1d25] p-5 transition-colors duration-200 hover:bg-[#1e2130]">
                <dt className="font-semibold text-slate-100" style={{ fontSize: '15px' }}>
                  Werden meine Daten gespeichert?
                </dt>
                <dd className="mt-1 text-xs leading-[1.7] text-[#9aa1b6]">
                  Nein. Alle Eingaben werden ausschließlich in deinem Browser verarbeitet. Es findet
                  keine serverseitige Speicherung oder Auswertung statt.
                </dd>
              </div>
              <div className="rounded-[12px] border-l-[3px] border-l-[#22c55e] bg-[#1a1d25] p-5 transition-colors duration-200 hover:bg-[#1e2130]">
                <dt className="font-semibold text-slate-100" style={{ fontSize: '15px' }}>
                  Welche Banking-Apps können den GiroCode scannen?
                </dt>
                <dd className="mt-1 text-xs leading-[1.7] text-[#9aa1b6]">
                  Viele Apps im deutschsprachigen Raum unterstützen SEPA-QR / GiroCode, darunter
                  Sparkasse, Volks- und Raiffeisenbanken, ING, DKB, Comdirect, Deutsche Bank, N26 und
                  weitere. Details findest du im Wissensbereich unter „Banking-Apps mit GiroCode".
                </dd>
              </div>
              <div className="rounded-[12px] border-l-[3px] border-l-[#22c55e] bg-[#1a1d25] p-5 transition-colors duration-200 hover:bg-[#1e2130]">
                <dt className="font-semibold text-slate-100" style={{ fontSize: '15px' }}>
                  Muss ich einen Betrag angeben?
                </dt>
                <dd className="mt-1 text-xs leading-[1.7] text-[#9aa1b6]">
                  Nein. Du kannst den Betrag frei lassen – dann trägt der Zahler den gewünschten Betrag
                  selbst ein. Für klassische Rechnungen empfiehlt sich jedoch ein fest hinterlegter
                  Betrag.
                </dd>
              </div>
              <div className="rounded-[12px] border-l-[3px] border-l-[#22c55e] bg-[#1a1d25] p-5 transition-colors duration-200 hover:bg-[#1e2130]">
                <dt className="font-semibold text-slate-100" style={{ fontSize: '15px' }}>
                  Kann ich den GiroCode direkt in eine Rechnung einbinden?
                </dt>
                <dd className="mt-1 text-xs leading-[1.7] text-[#9aa1b6]">
                  Ja. Mit der integrierten Rechnungsfunktion erzeugst du eine <strong>
                    PDF-Rechnung mit eingebettetem GiroCode
                  </strong>
                  , die sich ideal für den Versand per E-Mail oder zum Ausdrucken eignet.
                </dd>
              </div>
              <div className="rounded-[12px] border-l-[3px] border-l-[#22c55e] bg-[#1a1d25] p-5 transition-colors duration-200 hover:bg-[#1e2130]">
                <dt className="font-semibold text-slate-100" style={{ fontSize: '15px' }}>
                  Ist das Erstellen eines GiroCodes sicher?
                </dt>
                <dd className="mt-1 text-xs leading-[1.7] text-[#9aa1b6]">
                  Ja. Alle Daten werden ausschließlich lokal in deinem Browser verarbeitet. Deine IBAN, der Betrag und der Verwendungszweck verlassen nie deinen Computer. Es findet keine Übertragung an unsere Server statt.
                </dd>
              </div>
              <div className="rounded-[12px] border-l-[3px] border-l-[#22c55e] bg-[#1a1d25] p-5 transition-colors duration-200 hover:bg-[#1e2130]">
                <dt className="font-semibold text-slate-100" style={{ fontSize: '15px' }}>
                  Welche Daten sind in einem GiroCode gespeichert?
                </dt>
                <dd className="mt-1 text-xs leading-[1.7] text-[#9aa1b6]">
                  Ein GiroCode enthält: Name des Empfängers, IBAN, optional BIC, optional Betrag (z.B. EUR49.90) und optional einen Verwendungszweck (max. 140 Zeichen). Keine persönlichen Daten des Zahlers werden gespeichert.
                </dd>
              </div>
              <div className="rounded-[12px] border-l-[3px] border-l-[#22c55e] bg-[#1a1d25] p-5 transition-colors duration-200 hover:bg-[#1e2130]">
                <dt className="font-semibold text-slate-100" style={{ fontSize: '15px' }}>
                  Warum erkennt meine Banking-App den GiroCode nicht?
                </dt>
                <dd className="mt-1 text-xs leading-[1.7] text-[#9aa1b6]">
                  Häufige Ursachen: Der Code ist zu klein gedruckt (Mindestgröße 2x2 cm), schlechte Beleuchtung, Reflexionen auf dem Bildschirm oder die Banking-App unterstützt den EPC-Standard nicht. Tipp: Helligkeit erhöhen und Abstand von 15–30 cm einhalten.
                </dd>
              </div>
              <div className="rounded-[12px] border-l-[3px] border-l-[#22c55e] bg-[#1a1d25] p-5 transition-colors duration-200 hover:bg-[#1e2130]">
                <dt className="font-semibold text-slate-100" style={{ fontSize: '15px' }}>
                  Ist ein GiroCode dasselbe wie ein EPC-QR-Code?
                </dt>
                <dd className="mt-1 text-xs leading-[1.7] text-[#9aa1b6]">
                  Ja. GiroCode ist der deutsche Markenname für den EPC-QR-Code (European Payments Council). In Österreich heißt er Stuzza-QR, in der Schweiz QR-Bill. Alle basieren auf demselben Standard.
                </dd>
              </div>
              <div className="rounded-[12px] border-l-[3px] border-l-[#22c55e] bg-[#1a1d25] p-5 transition-colors duration-200 hover:bg-[#1e2130]">
                <dt className="font-semibold text-slate-100" style={{ fontSize: '15px' }}>
                  Wie lange ist ein GiroCode gültig?
                </dt>
                <dd className="mt-1 text-xs leading-[1.7] text-[#9aa1b6]">
                  Ein GiroCode hat kein Ablaufdatum. Er ist dauerhaft gültig, solange die enthaltenen Kontodaten (IBAN, Empfängername) noch aktuell sind.
                </dd>
              </div>
              <div className="rounded-[12px] border-l-[3px] border-l-[#22c55e] bg-[#1a1d25] p-5 transition-colors duration-200 hover:bg-[#1e2130]">
                <dt className="font-semibold text-slate-100" style={{ fontSize: '15px' }}>
                  Kann jemand mit meinem GiroCode Geld von mir abbuchen?
                </dt>
                <dd className="mt-1 text-xs leading-[1.7] text-[#9aa1b6]">
                  Nein. Ein GiroCode ist eine Zahlungsaufforderung, kein Lastschriftmandat. Nur der Zahler kann aktiv eine Überweisung auslösen und muss diese mit TAN oder Biometrie bestätigen. Deine IBAN zu kennen ermöglicht es niemandem, Geld abzubuchen.
                </dd>
              </div>
            </dl>
            <p className="mt-3 text-xs text-slate-400">
              Noch mehr Hintergrundwissen findest du im{' '}
              <Link href="/wissen" className="text-sky-400 hover:text-sky-300 underline">
                Wissensbereich rund um GiroCode &amp; SEPA-QR
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FIX 3: Wissens-Cards */}
        <section aria-labelledby="mehr-wissen" className="animate-card-in mt-8 space-y-4" style={{ animationDelay: '0.4s' }}>
          <h2 id="mehr-wissen" className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            Mehr über GiroCodes erfahren
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/wissen/girocode"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none"
              style={{ animationDelay: '0.5s' }}
            >
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>📄</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">Was ist ein GiroCode?</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Grundlagen und Funktionsweise des SEPA-QR-Codes.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
            <Link
              href="/wissen/epc-standard"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none"
              style={{ animationDelay: '0.6s' }}
            >
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>⚙️</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">EPC-Standard erklärt</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Technischer Aufbau des EPC-Payloads im Detail.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
            <Link
              href="/wissen/iban-bic"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none"
              style={{ animationDelay: '0.7s' }}
            >
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>🏦</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">IBAN &amp; BIC im GiroCode</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Pflichtangaben, Format und IBAN-Prüfung.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
            <Link
              href="/wissen/rechnung"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none"
              style={{ animationDelay: '0.8s' }}
            >
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>🧾</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">GiroCode auf Rechnungen</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Rechtssicher integrieren und PDF-Rechnungen erstellen.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
            <Link
              href="/wissen/banking-apps"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none"
              style={{ animationDelay: '0.9s' }}
            >
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>📱</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">Banking-Apps Übersicht</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Welche Apps GiroCodes scannen können.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
            <Link
              href="/wissen/scannen"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none"
              style={{ animationDelay: '1s' }}
            >
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>📷</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">GiroCode scannen</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Schritt-für-Schritt mit der Banking-App scannen.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
