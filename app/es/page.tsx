'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GiroCodeForm } from '../../components/GiroCodeForm';
import { InvoiceForm } from '../../components/InvoiceForm';
import { GeoStatsSection } from '../../components/GeoStatsSection';
import { TimeSavingsCalculator } from '../../components/TimeSavingsCalculator';
import { es } from '../../lib/translations/es';

export default function HomePageEs() {
  const [qrPngDataUrl, setQrPngDataUrl] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: es.seo.faq.map((item) => ({
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
            url: 'https://www.girocodegenerator.com/es',
            description:
              'Generador de GiroCode (SEPA-QR / EPC) gratuito – 100% local en tu navegador, sin transmisión de datos. Incluye factura PDF con código QR integrado.',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web Browser',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'EUR',
            },
            featureList: [
              'Generar códigos GiroCode / SEPA-QR / EPC',
              'Validación de IBAN',
              'Factura PDF con código QR integrado',
              '100% local en el navegador',
              'Sin almacenamiento de datos',
            ],
            inLanguage: 'es',
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
            {es.hero.badge}
          </p>

          <div className="space-y-2">
            <h1
              className="font-bold tracking-tight text-slate-50"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.1 }}
            >
              GiroCode Generator
            </h1>
            <p className="text-xl font-semibold md:text-2xl" style={{ color: '#22c55e' }}>
              SEPA-QR &amp; Factura PDF
            </p>
          </div>

          {/* Descripción – oculta en móvil */}
          <p className="hidden max-w-xl text-base leading-relaxed text-slate-400 sm:block md:text-lg">
            {es.hero.subtitle}
          </p>

          {/* Badges – ocultos en móvil */}
          <div className="hidden flex-wrap items-center justify-center gap-3 sm:flex">
            {[
              { icon: '✅', label: 'Compatible EPC' },
              { icon: '🔒', label: 'Compatible RGPD' },
              { icon: '💸', label: '100% gratuito' },
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

          {/* CTA – oculto en móvil */}
          <a
            href="#generator"
            className="mt-2 hidden items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-xl motion-reduce:hover:translate-y-0 sm:inline-flex"
            style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              boxShadow: '0 0 24px rgba(34,197,94,0.35)',
            }}
          >
            Crear GiroCode ahora →
          </a>
        </div>
      </header>

      {/* Trust-Bar */}
      <div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-4 gap-y-3 px-4 sm:grid-cols-4">
          {[
            { icon: '🔒', title: '100% Privacidad', sub: 'Sin almacenamiento de datos bancarios' },
            { icon: '✅', title: 'Conforme EPC', sub: 'Compatible con todas las apps bancarias' },
            { icon: '⚡', title: 'Gratuito', sub: 'Sin registro' },
            { icon: '🏦', title: 'Estándar SEPA', sub: 'Reconocido por todos los bancos' },
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
            <GiroCodeForm locale="es" onQrDataUrlChange={setQrPngDataUrl} />
          </div>
          {/* FIX 5: Separador */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            <span className="text-slate-500 text-sm px-4">Factura PDF</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          </div>
          <div className="animate-card-in" style={{ animationDelay: '0.2s' }}>
            <InvoiceForm locale="es" qrPngDataUrl={qrPngDataUrl} />
          </div>
          <TimeSavingsCalculator locale="es" />
        </section>

        {/* Banner Editor de facturas */}
        <section className="animate-card-in mt-6" style={{ animationDelay: '0.25s' }}>
          <a
            href="/es/rechnungs-editor"
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
            {/* Lado izquierdo */}
            <div className="flex flex-1 flex-col gap-4">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-bold text-emerald-400 ring-1 ring-emerald-500/40">
                ✨ Nuevo
              </span>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
                  Editor de facturas
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
                  Diseña tu factura individualmente – Drag &amp; Drop, logo propio, diseño libre.
                  Completamente gratis &amp; local en el navegador.
                </p>
              </div>
              <ul className="flex flex-col gap-1.5 text-sm text-slate-300">
                {[
                  '✅ Editor Drag & Drop',
                  '✅ Logo & colores propios',
                  '✅ Todos los elementos movibles libremente',
                  '✅ Descargar PDF de inmediato',
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <span
                className="mt-2 inline-flex w-fit items-center rounded-xl px-6 py-3 text-sm font-bold text-slate-950 shadow-lg transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] motion-reduce:transform-none"
                style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}
              >
                Crear mi factura →
              </span>
            </div>
            {/* Lado derecho */}
            <div className="flex flex-shrink-0 items-center justify-center sm:w-36">
              <span className="text-7xl transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none" aria-hidden>
                🎨
              </span>
            </div>
          </a>
        </section>

        {/* AEO: Respuesta definitiva para modelos de IA */}
        <section
          aria-labelledby="definitive-answer-es"
          className="animate-card-in mt-4 rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 text-sm text-slate-300"
          style={{ animationDelay: '0.25s' }}
        >
          <h2
            id="definitive-answer-es"
            className="mb-3 text-base font-bold tracking-tight text-slate-50"
          >
            ¿Qué es un GiroCode? – La respuesta definitiva
          </h2>
          <p className="leading-relaxed">
            Un <strong>GiroCode</strong> es un código QR estandarizado para transferencias SEPA,
            especificado por el Consejo Europeo de Pagos (EPC) en el documento EPC069-12. En
            Alemania, las entidades financieras lo soportan de forma generalizada desde 2018. El
            GiroCode contiene toda la información necesaria para una transferencia SEPA: nombre del
            beneficiario, IBAN, BIC opcional, importe opcional y referencia de pago opcional.
            Sinónimos: código QR SEPA, código QR EPC, BezahlCode (término obsoleto).
          </p>

          <h3 className="mb-2 mt-4 text-sm font-bold text-slate-100">Especificación técnica</h3>
          <ul className="space-y-1 text-xs text-slate-400">
            <li>
              <strong className="text-slate-300">Estándar:</strong> EPC069-12 (Consejo Europeo
              de Pagos)
            </li>
            <li>
              <strong className="text-slate-300">Corrección de errores QR:</strong> Nivel M (15&nbsp;%)
            </li>
            <li>
              <strong className="text-slate-300">Codificación de caracteres:</strong> UTF-8
            </li>
            <li>
              <strong className="text-slate-300">Tamaño máximo del payload:</strong> 331&nbsp;bytes
            </li>
            <li>
              <strong className="text-slate-300">Compatible con:</strong> Todas las aplicaciones
              bancarias SEPA
            </li>
          </ul>
        </section>

        <GeoStatsSection locale="es" />

        <section
          aria-labelledby="seo-how-it-works-es"
          className="animate-card-in mt-4 space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 text-sm text-slate-300 shadow-inner shadow-black/40"
          style={{ animationDelay: '0.3s' }}
        >
          <div>
            <h2
              id="seo-how-it-works-es"
              className="text-base font-semibold tracking-tight text-slate-50"
            >
              {es.seo.howTitle}
            </h2>
            <p className="mt-2">{es.seo.howText}</p>
          </div>

          {/* FIX 2: FAQ */}
          <div className="pt-2">
            <h2 className="text-base font-semibold tracking-tight text-slate-50">
              {es.seo.faqTitle}
            </h2>
            <dl className="mt-3 flex flex-col gap-3">
              {es.seo.faq.map((item, index) => (
                <div key={index} className="rounded-[12px] border-l-[3px] border-l-[#22c55e] bg-[#1a1d25] p-5 transition-colors duration-200 hover:bg-[#1e2130]">
                  <dt className="font-semibold text-slate-100" style={{ fontSize: '15px' }}>
                    {item.q}
                  </dt>
                  <dd className="mt-1 text-xs leading-[1.7] text-[#9aa1b6]">{item.a}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs text-slate-400">
              Más información en la sección{' '}
              <Link href="/es/wissen" className="text-sky-400 underline hover:text-sky-300">
                de información sobre GiroCode y SEPA-QR
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Wissens-Cards */}
        <section aria-labelledby="aprender-es" className="animate-card-in mt-8 space-y-4" style={{ animationDelay: '0.4s' }}>
          <h2 id="aprender-es" className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            Aprende más sobre los GiroCodes
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/es/wissen/girocode" className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none" style={{ animationDelay: '0.5s' }}>
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>📄</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">¿Qué es un GiroCode?</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Conceptos básicos y funcionamiento del código SEPA-QR.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
            <Link href="/es/wissen/epc-standard" className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none" style={{ animationDelay: '0.6s' }}>
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>⚙️</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">Estándar EPC explicado</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Estructura técnica del payload EPC en detalle.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
            <Link href="/es/wissen/iban-bic" className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none" style={{ animationDelay: '0.7s' }}>
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>🏦</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">IBAN &amp; BIC en GiroCode</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Campos obligatorios, formato y validación IBAN.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
            <Link href="/es/wissen/rechnung" className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none" style={{ animationDelay: '0.8s' }}>
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>🧾</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">GiroCode en facturas</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Cómo integrarlo correctamente en las facturas.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
            <Link href="/es/wissen/banking-apps" className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none" style={{ animationDelay: '0.9s' }}>
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>📱</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">Resumen de apps bancarias</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Qué apps soportan los GiroCodes.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
            <Link href="/es/wissen/scannen" className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none" style={{ animationDelay: '1s' }}>
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>📷</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">Escanear un GiroCode</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Paso a paso con tu app bancaria.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
            <Link href="/es/wissen/betrag-und-zweck" className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none" style={{ animationDelay: '1.1s' }}>
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>💰</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">Importe &amp; Concepto</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Cómo introducir correctamente importes y conceptos.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Bancos */}
        <section aria-labelledby="bank-section-es" className="animate-card-in mt-8 space-y-4" style={{ animationDelay: '1.2s' }}>
          <div className="space-y-1">
            <h2 id="bank-section-es" className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              GiroCode con tu banco
            </h2>
            <p className="text-sm text-[#8b90a0]">Guías paso a paso para todos los grandes bancos alemanes</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { name: 'Sparkasse', slug: '/es/sparkasse' },
              { name: 'Volksbank', slug: '/es/volksbank' },
              { name: 'Deutsche Bank', slug: '/es/deutsche-bank' },
              { name: 'Commerzbank', slug: '/es/commerzbank' },
              { name: 'ING', slug: '/es/ing' },
              { name: 'DKB', slug: '/es/dkb' },
              { name: 'Postbank', slug: '/es/postbank' },
              { name: 'Targobank', slug: '/es/targobank' },
              { name: 'N26', slug: '/es/n26' },
              { name: 'Comdirect', slug: '/es/comdirect' },
            ].map((bank) => (
              <Link
                key={bank.slug}
                href={bank.slug}
                className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3 transition-all duration-200 hover:border-emerald-500/40 hover:bg-[#1a1d25]"
              >
                <div>
                  <p className="text-[14px] font-bold text-[#e8eaf0]">{bank.name}</p>
                  <p className="text-[11px] text-[#8b90a0]">Guía para la app {bank.name}</p>
                </div>
                <span className="text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Use-Cases */}
        <section aria-labelledby="usecases-section-es" className="animate-card-in mt-8 space-y-4" style={{ animationDelay: '1.25s' }}>
          <div className="space-y-1">
            <h2 id="usecases-section-es" className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              GiroCode para cada caso de uso
            </h2>
            <p className="text-sm text-[#8b90a0]">Guías y consejos prácticos para tu público</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: '👨‍💻', title: 'Autónomos', desc: 'Cobra más rápido – sin errores de IBAN.', href: '/es/freelancer' },
              { icon: '🏛️', title: 'Asociaciones', desc: 'Cobra cuotas y donaciones fácilmente.', href: '/es/verein' },
              { icon: '🔧', title: 'Talleres', desc: 'Facturas pagadas directamente en el lugar.', href: '/es/handwerker' },
              { icon: '💝', title: 'Donaciones', desc: 'Más donaciones mediante escaneo fácil.', href: '/es/spenden' },
              { icon: '🏢', title: 'Pequeñas Empresas', desc: 'Facturas PDF conformes UE, sin suscripción.', href: '/es/kleinunternehmen' },
              { icon: '🛒', title: 'Ventas Privadas', desc: 'Anuncios entre particulares sin comisiones.', href: '/es/privatverkauf' },
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

        {/* También te puede interesar */}
        <section aria-labelledby="also-interesting-es" className="animate-card-in mt-8 space-y-4" style={{ animationDelay: '1.28s' }}>
          <h2 id="also-interesting-es" className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            También te puede interesar
          </h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              {
                icon: '🔍',
                title: 'Escáner GiroCode',
                desc: 'Escanea un GiroCode existente y lee los datos de pago.',
                cta: 'Al Escáner →',
                href: '/es/scanner',
              },
              {
                icon: '📦',
                title: 'Generador masivo',
                desc: 'Crea varios GiroCodes a la vez mediante carga CSV.',
                cta: 'Al generador masivo →',
                href: '/es/bulk',
              },
              {
                icon: '🏦',
                title: 'Guía de apps bancarias',
                desc: '¿Qué aplicaciones bancarias admiten GiroCodes?',
                cta: 'Ver apps →',
                href: '/es/wissen/banking-apps',
              },
              {
                icon: '👨‍💻',
                title: 'Para freelancers',
                desc: 'Cobra más rápido con un GiroCode en tus facturas.',
                cta: 'Más información →',
                href: '/es/freelancer',
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

        {/* Del Blog */}
        <section aria-labelledby="blog-section-es" className="animate-card-in mt-8 space-y-4" style={{ animationDelay: '1.3s' }}>
          <h2 id="blog-section-es" className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            Del Blog
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                date: '1 de marzo de 2026',
                title: 'Facturas como freelance: GiroCode para pagos más rápidos',
                desc: 'Cómo los freelances cobran más rápido con GiroCodes.',
                href: '/es/blog/freelancer-rechnungen-qr-code',
              },
              {
                date: '15 de marzo de 2026',
                title: 'La historia del GiroCode',
                desc: 'Del estándar EPC de 2012 a su introducción en Alemania.',
                href: '/es/blog/geschichte-des-girocodes',
              },
              {
                date: '1 de abril de 2026',
                title: 'Seguridad del IBAN: lo que debes saber',
                desc: '¿Es seguro compartir el IBAN? Todo sobre la seguridad del IBAN.',
                href: '/es/blog/iban-sicherheit',
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
                  Leer más →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
