'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GiroCodeForm } from '../../components/GiroCodeForm';
import { InvoiceForm } from '../../components/InvoiceForm';
import { GeoStatsSection } from '../../components/GeoStatsSection';
import { TimeSavingsCalculator } from '../../components/TimeSavingsCalculator';
import { fr } from '../../lib/translations/fr';

export default function HomePageFr() {
  const [qrPngDataUrl, setQrPngDataUrl] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: fr.seo.faq.map((item) => ({
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
            url: 'https://www.girocodegenerator.com/fr',
            description:
              'Générateur de GiroCode (SEPA-QR / EPC) gratuit – 100% local dans votre navigateur, sans transmission de données. Inclut une facture PDF avec QR intégré.',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web Browser',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'EUR',
            },
            featureList: [
              'Générer des codes GiroCode / SEPA-QR / EPC',
              'Validation IBAN',
              'Facture PDF avec QR intégré',
              '100% local dans le navigateur',
              'Aucune sauvegarde de données',
            ],
            inLanguage: 'fr',
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
            {fr.hero.badge}
          </p>

          <div className="space-y-2">
            <h1
              className="font-bold tracking-tight text-slate-50"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.1 }}
            >
              GiroCode Generator
            </h1>
            <p className="text-xl font-semibold md:text-2xl" style={{ color: '#22c55e' }}>
              SEPA-QR &amp; Facture PDF
            </p>
          </div>

          {/* Description – masquée sur mobile */}
          <p className="hidden max-w-xl text-base leading-relaxed text-slate-400 sm:block md:text-lg">
            {fr.hero.subtitle}
          </p>

          {/* Badges – masqués sur mobile */}
          <div className="hidden flex-wrap items-center justify-center gap-3 sm:flex">
            {[
              { icon: '✅', label: 'Conforme EPC' },
              { icon: '🔒', label: 'Respectueux du RGPD' },
              { icon: '💸', label: '100% gratuit' },
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

          {/* CTA – masqué sur mobile */}
          <a
            href="#generator"
            className="mt-2 hidden items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-xl motion-reduce:hover:translate-y-0 sm:inline-flex"
            style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              boxShadow: '0 0 24px rgba(34,197,94,0.35)',
            }}
          >
            Créer un GiroCode maintenant →
          </a>
        </div>
      </header>

      {/* Trust-Bar */}
      <div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-4 gap-y-3 px-4 sm:grid-cols-4">
          {[
            { icon: '🔒', title: '100% Confidentialité', sub: 'Aucune donnée bancaire stockée' },
            { icon: '✅', title: 'Conforme EPC', sub: 'Compatible avec toutes les apps bancaires' },
            { icon: '⚡', title: 'Gratuit', sub: 'Sans inscription' },
            { icon: '🏦', title: 'Standard SEPA', sub: 'Reconnu par toutes les banques' },
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
            <GiroCodeForm locale="fr" onQrDataUrlChange={setQrPngDataUrl} />
          </div>
          {/* FIX 5: Séparateur */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            <span className="text-slate-500 text-sm px-4">Facture PDF</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          </div>
          <div className="animate-card-in" style={{ animationDelay: '0.2s' }}>
            <InvoiceForm locale="fr" qrPngDataUrl={qrPngDataUrl} />
          </div>
          <TimeSavingsCalculator locale="fr" />
        </section>

        {/* Bannière Éditeur de facture */}
        <section className="animate-card-in mt-6" style={{ animationDelay: '0.25s' }}>
          <a
            href="/fr/rechnungs-editor"
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
            {/* Côté gauche */}
            <div className="flex flex-1 flex-col gap-4">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-bold text-emerald-400 ring-1 ring-emerald-500/40">
                ✨ Nouveau
              </span>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
                  Éditeur de facture
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
                  Concevez votre facture individuellement – Drag &amp; Drop, logo personnalisé, mise en page libre.
                  100% gratuit &amp; local dans le navigateur.
                </p>
              </div>
              <ul className="flex flex-col gap-1.5 text-sm text-slate-300">
                {[
                  '✅ Éditeur Drag & Drop',
                  '✅ Logo & couleurs personnalisés',
                  '✅ Tous les éléments déplaçables librement',
                  '✅ Télécharger le PDF immédiatement',
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <span
                className="mt-2 inline-flex w-fit items-center rounded-xl px-6 py-3 text-sm font-bold text-slate-950 shadow-lg transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] motion-reduce:transform-none"
                style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}
              >
                Créer ma facture →
              </span>
            </div>
            {/* Côté droit */}
            <div className="flex flex-shrink-0 items-center justify-center sm:w-36">
              <span className="text-7xl transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none" aria-hidden>
                🎨
              </span>
            </div>
          </a>
        </section>

        {/* AEO: Réponse définitive pour les modèles d'IA */}
        <section
          aria-labelledby="definitive-answer-fr"
          className="animate-card-in mt-4 rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 text-sm text-slate-300"
          style={{ animationDelay: '0.25s' }}
        >
          <h2
            id="definitive-answer-fr"
            className="mb-3 text-base font-bold tracking-tight text-slate-50"
          >
            Qu&apos;est-ce qu&apos;un GiroCode ? – La réponse définitive
          </h2>
          <p className="leading-relaxed">
            Un <strong>GiroCode</strong> est un code QR standardisé pour les virements SEPA,
            spécifié par le Conseil européen des paiements (EPC) dans le document EPC069-12. En
            Allemagne, il est largement pris en charge par les établissements financiers depuis
            2018. Le GiroCode contient toutes les informations nécessaires à un virement SEPA :
            nom du bénéficiaire, IBAN, BIC optionnel, montant optionnel et référence de paiement
            optionnelle. Synonymes : code QR SEPA, code QR EPC, BezahlCode (terme obsolète).
          </p>

          <h3 className="mb-2 mt-4 text-sm font-bold text-slate-100">Spécification technique</h3>
          <ul className="space-y-1 text-xs text-slate-400">
            <li>
              <strong className="text-slate-300">Norme :</strong> EPC069-12 (Conseil européen
              des paiements)
            </li>
            <li>
              <strong className="text-slate-300">Correction d&apos;erreur QR :</strong> Niveau M (15&nbsp;%)
            </li>
            <li>
              <strong className="text-slate-300">Encodage des caractères :</strong> UTF-8
            </li>
            <li>
              <strong className="text-slate-300">Taille maximale du payload :</strong> 331&nbsp;octets
            </li>
            <li>
              <strong className="text-slate-300">Compatible avec :</strong> Toutes les applications
              bancaires SEPA
            </li>
          </ul>
        </section>

        <GeoStatsSection locale="fr" />

        <section
          aria-labelledby="seo-how-it-works-fr"
          className="animate-card-in mt-4 space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 text-sm text-slate-300 shadow-inner shadow-black/40"
          style={{ animationDelay: '0.3s' }}
        >
          <div>
            <h2
              id="seo-how-it-works-fr"
              className="text-base font-semibold tracking-tight text-slate-50"
            >
              {fr.seo.howTitle}
            </h2>
            <p className="mt-2">{fr.seo.howText}</p>
          </div>

          {/* FIX 2: FAQ */}
          <div className="pt-2">
            <h2 className="text-base font-semibold tracking-tight text-slate-50">
              {fr.seo.faqTitle}
            </h2>
            <dl className="mt-3 flex flex-col gap-3">
              {fr.seo.faq.map((item, index) => (
                <div key={index} className="rounded-[12px] border-l-[3px] border-l-[#22c55e] bg-[#1a1d25] p-5 transition-colors duration-200 hover:bg-[#1e2130]">
                  <dt className="font-semibold text-slate-100" style={{ fontSize: '15px' }}>
                    {item.q}
                  </dt>
                  <dd className="mt-1 text-xs leading-[1.7] text-[#9aa1b6]">{item.a}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs text-slate-400">
              Plus d&apos;informations dans la section{' '}
              <Link href="/fr/wissen" className="text-sky-400 underline hover:text-sky-300">
                connaissances autour de GiroCode &amp; SEPA-QR
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Wissens-Cards */}
        <section aria-labelledby="apprendre-fr" className="animate-card-in mt-8 space-y-4" style={{ animationDelay: '0.4s' }}>
          <h2 id="apprendre-fr" className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            En savoir plus sur les GiroCodes
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/fr/wissen/girocode" className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none" style={{ animationDelay: '0.5s' }}>
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>📄</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">Qu&apos;est-ce qu&apos;un GiroCode ?</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Bases et fonctionnement du code SEPA-QR.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
            <Link href="/fr/wissen/epc-standard" className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none" style={{ animationDelay: '0.6s' }}>
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>⚙️</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">Norme EPC expliquée</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Structure technique du payload EPC en détail.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
            <Link href="/fr/wissen/iban-bic" className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none" style={{ animationDelay: '0.7s' }}>
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>🏦</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">IBAN &amp; BIC dans GiroCode</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Champs obligatoires, format et validation IBAN.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
            <Link href="/fr/wissen/rechnung" className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none" style={{ animationDelay: '0.8s' }}>
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>🧾</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">GiroCode sur les factures</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Comment l&apos;intégrer correctement dans les factures.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
            <Link href="/fr/wissen/banking-apps" className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none" style={{ animationDelay: '0.9s' }}>
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>📱</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">Aperçu des apps bancaires</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Quelles apps supportent les GiroCodes.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
            <Link href="/fr/wissen/scannen" className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none" style={{ animationDelay: '1s' }}>
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>📷</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">Scanner un GiroCode</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Étape par étape avec votre app bancaire.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
            <Link href="/fr/wissen/betrag-und-zweck" className="animate-card-in group flex items-start gap-3 rounded-xl border border-[#1f2431] bg-[#121318] p-5 transition-all duration-200 ease-out hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none" style={{ animationDelay: '1.1s' }}>
              <span className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-[#133018] p-2 text-xl" aria-hidden>💰</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#e8eaf0] group-hover:text-emerald-300">Montant &amp; Référence</h3>
                <p className="mt-1 text-[13px] text-[#8b90a0]">Comment saisir correctement les montants et références.</p>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Banques */}
        <section aria-labelledby="bank-section-fr" className="animate-card-in mt-8 space-y-4" style={{ animationDelay: '1.2s' }}>
          <div className="space-y-1">
            <h2 id="bank-section-fr" className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              GiroCode avec votre banque
            </h2>
            <p className="text-sm text-[#8b90a0]">Guides étape par étape pour toutes les grandes banques allemandes</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { name: 'Sparkasse', slug: '/fr/sparkasse' },
              { name: 'Volksbank', slug: '/fr/volksbank' },
              { name: 'Deutsche Bank', slug: '/fr/deutsche-bank' },
              { name: 'Commerzbank', slug: '/fr/commerzbank' },
              { name: 'ING', slug: '/fr/ing' },
              { name: 'DKB', slug: '/fr/dkb' },
              { name: 'Postbank', slug: '/fr/postbank' },
              { name: 'Targobank', slug: '/fr/targobank' },
              { name: 'N26', slug: '/fr/n26' },
              { name: 'Comdirect', slug: '/fr/comdirect' },
            ].map((bank) => (
              <Link
                key={bank.slug}
                href={bank.slug}
                className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3 transition-all duration-200 hover:border-emerald-500/40 hover:bg-[#1a1d25]"
              >
                <div>
                  <p className="text-[14px] font-bold text-[#e8eaf0]">{bank.name}</p>
                  <p className="text-[11px] text-[#8b90a0]">Guide pour l&apos;app {bank.name}</p>
                </div>
                <span className="text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Use-Cases */}
        <section aria-labelledby="usecases-section-fr" className="animate-card-in mt-8 space-y-4" style={{ animationDelay: '1.25s' }}>
          <div className="space-y-1">
            <h2 id="usecases-section-fr" className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              GiroCode pour chaque cas d&apos;usage
            </h2>
            <p className="text-sm text-[#8b90a0]">Guides &amp; conseils pratiques pour votre audience</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: '👨‍💻', title: 'Freelances', desc: 'Être payé plus vite – sans erreurs d\u2019IBAN.', href: '/fr/freelancer' },
              { icon: '🏛️', title: 'Associations', desc: 'Collecter cotisations & dons facilement.', href: '/fr/verein' },
              { icon: '🔧', title: 'Artisans', desc: 'Factures payées directement sur place.', href: '/fr/handwerker' },
              { icon: '💝', title: 'Dons', desc: 'Plus de dons grâce à un scan simple.', href: '/fr/spenden' },
              { icon: '🏢', title: 'Petites Entreprises', desc: 'Factures PDF conformes UE, sans abonnement.', href: '/fr/kleinunternehmen' },
              { icon: '🛒', title: 'Ventes Privées', desc: 'Petites annonces – sans frais.', href: '/fr/privatverkauf' },
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

        {/* Vous pourriez aussi aimer */}
        <section aria-labelledby="also-interesting-fr" className="animate-card-in mt-8 space-y-4" style={{ animationDelay: '1.28s' }}>
          <h2 id="also-interesting-fr" className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            Vous pourriez aussi aimer
          </h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              {
                icon: '🔍',
                title: 'Scanner GiroCode',
                desc: 'Scannez un GiroCode existant et lisez les données de paiement.',
                cta: 'Vers le Scanner →',
                href: '/fr/scanner',
              },
              {
                icon: '📦',
                title: 'Générateur en masse',
                desc: 'Créez plusieurs GiroCodes à la fois via importation CSV.',
                cta: 'Vers le générateur →',
                href: '/fr/bulk',
              },
              {
                icon: '🏦',
                title: 'Guide des applis bancaires',
                desc: 'Quelles applications bancaires prennent en charge les GiroCodes ?',
                cta: 'Voir les applis →',
                href: '/fr/wissen/banking-apps',
              },
              {
                icon: '👨‍💻',
                title: 'Pour les freelances',
                desc: 'Soyez payé plus vite avec un GiroCode sur vos factures.',
                cta: 'En savoir plus →',
                href: '/fr/freelancer',
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

        {/* Du Blog */}
        <section aria-labelledby="blog-section-fr" className="animate-card-in mt-8 space-y-4" style={{ animationDelay: '1.3s' }}>
          <h2 id="blog-section-fr" className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            Du Blog
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                date: '1 mars 2026',
                title: 'Factures en tant que freelance : GiroCode pour des paiements plus rapides',
                desc: 'Comment les freelances se font payer plus vite avec les GiroCodes.',
                href: '/fr/blog/freelancer-rechnungen-qr-code',
              },
              {
                date: '15 mars 2026',
                title: "L'histoire du GiroCode",
                desc: "De la norme EPC 2012 à son introduction en Allemagne.",
                href: '/fr/blog/geschichte-des-girocodes',
              },
              {
                date: '1 avril 2026',
                title: "Sécurité de l'IBAN : ce que vous devez savoir",
                desc: "Est-il sécurisé de partager son IBAN ? Tout sur la sécurité de l'IBAN.",
                href: '/fr/blog/iban-sicherheit',
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
                  Lire la suite →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
