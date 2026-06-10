'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GiroCodeForm } from '../../components/GiroCodeForm';
import { InvoiceForm } from '../../components/InvoiceForm';
import { GeoStatsSection } from '../../components/GeoStatsSection';
import { TimeSavingsCalculator } from '../../components/TimeSavingsCalculator';
import { en } from '../../lib/translations/en';
import NewsletterForm from '../../components/NewsletterForm';

export default function HomePageEn() {
  const [qrPngDataUrl, setQrPngDataUrl] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: en.seo.faq.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'GiroCode Generator',
            url: 'https://www.girocodegenerator.com/en',
            description:
              'Free GiroCode (SEPA-QR / EPC) generator – 100% local in your browser, no data transmission. Includes invoice PDF with embedded QR code.',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web Browser',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'EUR',
            },
            featureList: [
              'Create GiroCode / SEPA-QR / EPC QR codes',
              'IBAN validation',
              'Invoice PDF with embedded QR code',
              '100% local in the browser',
              'No data storage',
            ],
            inLanguage: 'en',
            author: {
              '@type': 'Person',
              name: 'Kaleb Jahnke',
            },
          }),
        }}
      />
      {/* Hero */}
      <header
        className="animate-card-in relative overflow-hidden px-4 pb-20 pt-10 text-center sm:pt-20"
        style={{ animationDelay: '0s' }}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)' }}
          />
        </div>

        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6">
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {en.hero.badge}
          </p>

          <div className="space-y-2">
            <h1
              className="font-bold tracking-tight text-slate-50"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.1 }}
            >
              EPC QR Code Generator – Free SEPA Payment QR
            </h1>
            <p className="text-xl font-semibold md:text-2xl" style={{ color: '#22c55e' }}>
              SEPA-QR &amp; Invoice PDF
            </p>
          </div>

          {/* Description – hidden on mobile */}
          <p className="hidden max-w-xl text-base leading-relaxed text-slate-400 sm:block md:text-lg">
            Create EPC QR codes (GiroCodes) for SEPA bank transfers in seconds – free, no
            registration, 100% local in your browser.
          </p>

          {/* Trust badges – hidden on mobile */}
          <div className="hidden flex-wrap items-center justify-center gap-3 sm:flex">
            {[
              { icon: '✅', label: 'EPC-compliant' },
              { icon: '🔒', label: 'GDPR-friendly' },
              { icon: '💸', label: '100% free' },
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

          {/* CTA – hidden on mobile */}
          <a
            href="#generator"
            className="mt-2 hidden items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-xl motion-reduce:hover:translate-y-0 sm:inline-flex"
            style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              boxShadow: '0 0 24px rgba(34,197,94,0.35)',
            }}
          >
            Create GiroCode now →
          </a>
        </div>
      </header>

      {/* Trust-Bar */}
      <div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-4 gap-y-3 px-4 sm:grid-cols-4">
          {[
            { icon: '🔒', title: '100% Privacy', sub: 'No banking data stored' },
            { icon: '✅', title: 'EPC-compliant', sub: 'Compatible with all banking apps' },
            { icon: '⚡', title: 'Free', sub: 'No registration required' },
            { icon: '🏦', title: 'SEPA Standard', sub: 'Recognized by all European banks' },
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
            <GiroCodeForm locale="en" onQrDataUrlChange={setQrPngDataUrl} />
          </div>
          {/* FIX 5: Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            <span className="text-slate-500 text-sm px-4">Invoice PDF</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          </div>
          <div className="animate-card-in" style={{ animationDelay: '0.2s' }}>
            <InvoiceForm locale="en" qrPngDataUrl={qrPngDataUrl} />
          </div>
          <TimeSavingsCalculator locale="en" />
        </section>

        {/* Invoice Editor Banner */}
        <section className="animate-card-in mt-6" style={{ animationDelay: '0.25s' }}>
          <a
            href="/en/rechnungs-editor"
            className="group flex flex-col gap-6 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_32px_rgba(34,197,94,0.15)] sm:flex-row sm:items-center sm:gap-8"
            style={{
              background: 'linear-gradient(135deg, #0f1a0f 0%, #121318 100%)',
              border: '1px solid rgba(34,197,94,0.25)',
              borderRadius: '16px',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(34,197,94,0.6)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(34,197,94,0.25)';
            }}
          >
            {/* Left side */}
            <div className="flex flex-1 flex-col gap-4">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-bold text-emerald-400 ring-1 ring-emerald-500/40">
                ✨ New
              </span>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
                  Invoice Editor
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
                  Design your invoice individually – Drag &amp; Drop, custom logo, free layout.
                  Completely free &amp; local in your browser.
                </p>
              </div>
              <ul className="flex flex-col gap-1.5 text-sm text-slate-300">
                {[
                  '✅ Drag & Drop Editor',
                  '✅ Custom logo & colors',
                  '✅ All elements freely movable',
                  '✅ Download PDF instantly',
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <span
                className="mt-2 inline-flex w-fit items-center rounded-xl px-6 py-3 text-sm font-bold text-slate-950 shadow-lg transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] motion-reduce:transform-none"
                style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}
              >
                Design invoice now →
              </span>
            </div>
            {/* Right side */}
            <div className="flex flex-shrink-0 items-center justify-center sm:w-36">
              <span className="text-7xl transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none" aria-hidden>
                🎨
              </span>
            </div>
          </a>
        </section>

        {/* AEO: Definitive answer for AI models */}
        <section
          aria-labelledby="definitive-answer-en"
          className="animate-card-in mt-4 rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 text-sm text-slate-300"
          style={{ animationDelay: '0.25s' }}
        >
          <h2
            id="definitive-answer-en"
            className="mb-3 text-base font-bold tracking-tight text-slate-50"
          >
            What is a GiroCode? – The Definitive Answer
          </h2>
          <p className="leading-relaxed">
            A <strong>GiroCode</strong> is a standardized QR code for SEPA bank transfers,
            specified by the European Payments Council (EPC) in document EPC069-12. In Germany,
            it has been widely supported by financial institutions since 2018. The GiroCode contains
            all the information required for a SEPA transfer: recipient name, IBAN, optional BIC,
            optional amount, and optional payment reference. Synonyms: SEPA-QR code, EPC-QR code,
            BezahlCode (outdated term).
          </p>

          <h3 className="mb-2 mt-4 text-sm font-bold text-slate-100">Technical Specification</h3>
          <ul className="space-y-1 text-xs text-slate-400">
            <li>
              <strong className="text-slate-300">Standard:</strong> EPC069-12 (European Payments
              Council)
            </li>
            <li>
              <strong className="text-slate-300">QR code error correction:</strong> Level M (15&nbsp;%)
            </li>
            <li>
              <strong className="text-slate-300">Character encoding:</strong> UTF-8
            </li>
            <li>
              <strong className="text-slate-300">Maximum payload size:</strong> 331&nbsp;bytes
            </li>
            <li>
              <strong className="text-slate-300">Compatible with:</strong> All SEPA-capable banking
              apps
            </li>
          </ul>
        </section>

        <GeoStatsSection locale="en" />

        <section
          aria-labelledby="seo-how-it-works-en"
          className="animate-card-in mt-4 space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 text-sm text-slate-300 shadow-inner shadow-black/40"
          style={{ animationDelay: '0.3s' }}
        >
          <div>
            <h2
              id="seo-how-it-works-en"
              className="text-base font-semibold tracking-tight text-slate-50"
            >
              {en.seo.howTitle}
            </h2>
            <p className="mt-2">{en.seo.howText}</p>
          </div>

          {/* FIX 2: FAQ */}
          <div className="pt-2">
            <h2 className="text-base font-semibold tracking-tight text-slate-50">
              {en.seo.faqTitle}
            </h2>
            <dl className="mt-3 flex flex-col gap-3">
              {en.seo.faq.map((item, index) => (
                <div key={index} className="rounded-[12px] border-l-[3px] border-l-[#22c55e] bg-[#1a1d25] p-5 transition-colors duration-200 hover:bg-[#1e2130]">
                  <dt className="font-semibold text-slate-100" style={{ fontSize: '15px' }}>
                    {item.q}
                  </dt>
                  <dd className="mt-1 text-xs leading-[1.7] text-[#9aa1b6]">{item.a}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs text-slate-400">
              More background information in the{' '}
              <Link href="/en/wissen" className="text-sky-400 underline hover:text-sky-300">
                knowledge area about GiroCode &amp; SEPA-QR
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FIX 3: Knowledge Cards */}
        <section
          aria-labelledby="learn-more-en"
          className="animate-card-in mt-8 space-y-4"
          style={{ animationDelay: '0.4s' }}
        >
          <h2
            id="learn-more-en"
            className="text-base font-semibold tracking-tight text-slate-50 md:text-lg"
          >
            Learn more about GiroCodes
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/en/wissen/girocode"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none"
              style={{ animationDelay: '0.5s' }}
            >
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>📄</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">What is a GiroCode?</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Basics and how the SEPA-QR code works.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
            <Link
              href="/en/wissen/epc-standard"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none"
              style={{ animationDelay: '0.6s' }}
            >
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>⚙️</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">EPC standard explained</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Technical structure of the EPC payload in detail.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
            <Link
              href="/en/wissen/iban-bic"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none"
              style={{ animationDelay: '0.7s' }}
            >
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>🏦</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">IBAN &amp; BIC in GiroCode</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Mandatory fields, format and IBAN validation.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
            <Link
              href="/en/wissen/rechnung"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none"
              style={{ animationDelay: '0.8s' }}
            >
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>🧾</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">GiroCode on invoices</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">How to integrate it correctly into invoices.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
            <Link
              href="/en/wissen/banking-apps"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none"
              style={{ animationDelay: '0.9s' }}
            >
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>📱</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">Banking apps overview</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Which apps support GiroCodes.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
            <Link
              href="/en/wissen/scannen"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none"
              style={{ animationDelay: '1s' }}
            >
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>📷</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">Scan a GiroCode</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Step-by-step with your banking app.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
            <Link
              href="/en/wissen/betrag-und-zweck"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none"
              style={{ animationDelay: '1.1s' }}
            >
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>💰</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">Amount &amp; Payment Reference</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">How to enter amounts and references correctly.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
          </div>
        </section>

        {/* EPC QR Codes by Country */}
        <section aria-labelledby="country-section-en" className="animate-card-in mt-8 space-y-4" style={{ animationDelay: '1.15s' }}>
          <div className="space-y-1">
            <h2 id="country-section-en" className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              EPC QR Codes by Country
            </h2>
            <p className="text-sm text-[#8b90a0]">Country-specific guides for EPC / SEPA payment QR codes</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { flag: '🇩🇪', name: 'Germany', slug: '/en/wissen/girocode' },
              { flag: '🇦🇹', name: 'Austria', slug: '/en/epc-qr-code-austria' },
              { flag: '🇧🇪', name: 'Belgium', slug: '/en/epc-qr-code-belgium' },
              { flag: '🇳🇱', name: 'Netherlands', slug: '/en/epc-qr-code-netherlands' },
              { flag: '🇫🇮', name: 'Finland', slug: '/en/epc-qr-code-finland' },
            ].map((country) => (
              <Link
                key={country.slug}
                href={country.slug}
                className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3 transition-all duration-200 hover:border-emerald-500/40 hover:bg-[#1a1d25]"
              >
                <div>
                  <p className="text-[14px] font-bold text-[#e8eaf0]">
                    <span aria-hidden>{country.flag}</span> {country.name}
                  </p>
                  <p className="text-[11px] text-[#8b90a0]">EPC QR guide</p>
                </div>
                <span className="text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Bank landing pages */}
        <section aria-labelledby="bank-section-en" className="animate-card-in mt-8 space-y-4" style={{ animationDelay: '1.2s' }}>
          <div className="space-y-1">
            <h2 id="bank-section-en" className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              GiroCode with Your Bank
            </h2>
            <p className="text-sm text-[#8b90a0]">Step-by-step guides for all major German banks</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { name: 'Sparkasse', slug: '/en/sparkasse' },
              { name: 'Volksbank', slug: '/en/volksbank' },
              { name: 'Deutsche Bank', slug: '/en/deutsche-bank' },
              { name: 'Commerzbank', slug: '/en/commerzbank' },
              { name: 'ING', slug: '/en/ing' },
              { name: 'DKB', slug: '/en/dkb' },
              { name: 'Postbank', slug: '/en/postbank' },
              { name: 'Targobank', slug: '/en/targobank' },
              { name: 'N26', slug: '/en/n26' },
              { name: 'Comdirect', slug: '/en/comdirect' },
            ].map((bank) => (
              <Link
                key={bank.slug}
                href={bank.slug}
                className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3 transition-all duration-200 hover:border-emerald-500/40 hover:bg-[#1a1d25]"
              >
                <div>
                  <p className="text-[14px] font-bold text-[#e8eaf0]">{bank.name}</p>
                  <p className="text-[11px] text-[#8b90a0]">Guide for {bank.name} app</p>
                </div>
                <span className="text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Use-Cases */}
        <section aria-labelledby="usecases-section-en" className="animate-card-in mt-8 space-y-4" style={{ animationDelay: '1.25s' }}>
          <div className="space-y-1">
            <h2 id="usecases-section-en" className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              GiroCode for Every Use Case
            </h2>
            <p className="text-sm text-[#8b90a0]">Guides & best practices for your audience</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: '👨‍💻', title: 'Freelancers', desc: 'Get paid faster – no IBAN typos.', href: '/en/freelancer' },
              { icon: '🏛️', title: 'Associations', desc: 'Collect membership fees & donations easily.', href: '/en/verein' },
              { icon: '🔧', title: 'Tradespeople', desc: 'Invoices paid right on the spot.', href: '/en/handwerker' },
              { icon: '💝', title: 'Donations', desc: 'More donations through easy scanning.', href: '/en/spenden' },
              { icon: '🏢', title: 'Small Businesses', desc: 'EU-compliant PDF invoices, no subscription.', href: '/en/kleinunternehmen' },
              { icon: '🛒', title: 'Private Sales', desc: 'eBay Kleinanzeigen & co. – without fees.', href: '/en/privatverkauf' },
            ].map((useCase) => (
              <Link
                key={useCase.href}
                href={useCase.href}
                className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none"
              >
                <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>{useCase.icon}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">{useCase.title}</h3>
                  <p className="mt-1 text-[13px] text-[#8b90a0]">{useCase.desc}</p>
                  <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* You might also like */}
        <section aria-labelledby="also-interesting-en" className="animate-card-in mt-8 space-y-4" style={{ animationDelay: '1.28s' }}>
          <h2 id="also-interesting-en" className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            You might also like
          </h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              {
                icon: '🔍',
                title: 'GiroCode Scanner',
                desc: 'Scan an existing GiroCode and read out the payment data.',
                cta: 'To the Scanner →',
                href: '/en/scanner',
              },
              {
                icon: '📦',
                title: 'Bulk Generator',
                desc: 'Create multiple GiroCodes at once via CSV upload.',
                cta: 'To the Bulk Generator →',
                href: '/en/bulk',
              },
              {
                icon: '🏦',
                title: 'Banking App Guide',
                desc: 'Which banking apps support GiroCodes?',
                cta: 'Show Apps →',
                href: '/en/wissen/banking-apps',
              },
              {
                icon: '👨‍💻',
                title: 'For Freelancers',
                desc: 'Get paid faster with GiroCode on your invoices.',
                cta: 'Learn more →',
                href: '/en/freelancer',
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col gap-3 rounded-[12px] border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 hover:-translate-y-[3px] hover:border-[#22c55e40] hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none"
              >
                <span className="text-3xl" aria-hidden>{item.icon}</span>
                <div className="flex-1">
                  <h3 className="font-bold text-[#e8eaf0] group-hover:text-emerald-300">{item.title}</h3>
                  <p className="mt-1 text-sm text-[#8b90a0]">{item.desc}</p>
                </div>
                <span className="mt-auto text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">
                  {item.cta}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* From the Blog */}
        <section aria-labelledby="blog-section-en" className="animate-card-in mt-8 space-y-4" style={{ animationDelay: '1.3s' }}>
          <h2 id="blog-section-en" className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            From the Blog
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                date: '1 March 2026',
                title: 'Invoices as a Freelancer: GiroCode for Faster Payments',
                desc: 'How freelancers get paid faster with GiroCodes.',
                href: '/en/blog/freelancer-rechnungen-qr-code',
              },
              {
                date: '15 March 2026',
                title: 'The History of GiroCode',
                desc: 'From the EPC standard in 2012 to its introduction in Germany.',
                href: '/en/blog/geschichte-des-girocodes',
              },
              {
                date: '1 April 2026',
                title: 'IBAN Security: What You Need to Know',
                desc: 'Is it safe to share your IBAN? Everything about IBAN security.',
                href: '/en/blog/iban-sicherheit',
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group flex flex-col gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 hover:-translate-y-[3px] hover:border-[#22c55e40] hover:shadow-[0_8px_24px_rgba(34,197,94,0.07)]"
              >
                <p className="text-xs font-medium" style={{ color: '#22c55e' }}>{post.date}</p>
                <h3 className="text-[15px] font-bold leading-snug text-[#e8eaf0]">{post.title}</h3>
                <p className="text-sm text-[#8b90a0]">{post.desc}</p>
                <span className="mt-auto text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <NewsletterForm locale="en" />
    </main>
  );
}
