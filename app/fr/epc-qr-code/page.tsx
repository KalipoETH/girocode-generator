import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Générateur QR Code EPC – Standard EPC069-12 Gratuit 2026',
  description:
    'Créer un QR Code EPC selon la norme EPC069-12 gratuitement. Implémentation techniquement correcte pour développeurs et entreprises. Sans inscription.',
  alternates: {
    canonical: `${SITE_URL}/fr/epc-qr-code`,
    languages: {
      'x-default': `${SITE_URL}/epc-qr-code`,
      de: `${SITE_URL}/epc-qr-code`,
      en: `${SITE_URL}/en/epc-qr-code`,
      fr: `${SITE_URL}/fr/epc-qr-code`,
      es: `${SITE_URL}/es/epc-qr-code`,
    },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre EPC QR Code, GiroCode et SEPA QR Code ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Tous désignent la même chose : EPC QR Code est le nom technique, GiroCode la marque allemande, SEPA QR Code le terme fonctionnel. La norme sous-jacente est EPC069-12.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle version de la norme EPC069-12 dois-je utiliser ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Version 002 (BIC optionnel), car les banques récentes n'exigent plus de BIC. La version 002 est rétrocompatible et supportée par toutes les applications bancaires modernes.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le montant maximum dans un EPC QR Code ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Il n'y a pas de limite technique dans la norme EPC069-12 elle-même. Cependant, les virements SEPA ont un maximum de 999.999.999,99 EUR.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment intégrer le générateur EPC QR Code dans mon site web ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Via l'API sous /api/generate ou via l'approche par paramètres URL. Tous les détails se trouvent dans la documentation API sous /api-docs.",
      },
    },
  ],
};

export default function EpcQrCodeFrPage() {
  const stats = [
    { value: 'EPC069-12', label: 'Norme officielle' },
    { value: '11', label: 'Lignes dans le payload' },
    { value: 'V001/V002', label: 'Versions' },
    { value: 'Level M', label: 'Correction d\'erreurs (recommandé)' },
  ];

  const faqs = [
    {
      q: 'Quelle est la différence entre EPC QR Code, GiroCode et SEPA QR Code ?',
      a: "Tous désignent la même chose : EPC QR Code est le nom technique, GiroCode la marque allemande, SEPA QR Code le terme fonctionnel. La norme sous-jacente est EPC069-12.",
    },
    {
      q: 'Quelle version de la norme EPC069-12 dois-je utiliser ?',
      a: "Version 002 (BIC optionnel), car les banques récentes n'exigent plus de BIC. La version 002 est rétrocompatible et supportée par toutes les applications bancaires modernes.",
    },
    {
      q: 'Quel est le montant maximum dans un EPC QR Code ?',
      a: "Il n'y a pas de limite technique dans la norme EPC069-12 elle-même. Cependant, les virements SEPA ont un maximum de 999.999.999,99 EUR.",
    },
    {
      q: 'Comment intégrer le générateur EPC QR Code dans mon site web ?',
      a: "Via l'API sous /api/generate ou via l'approche par paramètres URL. Tous les détails se trouvent dans la documentation API sous /api-docs.",
    },
  ];

  const related = [
    { href: '/fr/api-docs', label: 'Documentation API' },
    { href: '/fr/fuer-entwickler', label: 'GiroCode pour développeurs' },
    { href: '/fr/wissen/epc-standard', label: 'Explication norme EPC' },
    { href: '/fr/sepa-qr-code', label: 'Générateur QR Code SEPA' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/fr" className="text-sky-400 hover:text-sky-300">
                  Accueil
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">Générateur EPC QR Code</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Technique · Norme EPC069-12
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              Générateur EPC QR Code – Selon la norme EPC069-12
            </h1>
          </header>

          <div
            className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3"
            role="note"
          >
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">
              💡 Réponse courte
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Un EPC QR Code (European Payments Council QR Code) est la désignation technique du
              GiroCode. La norme EPC069-12 définit la structure exacte du payload : 11 lignes avec
              service tag, version, encodage, identification SCT, BIC, nom du bénéficiaire, IBAN,
              montant et référence de paiement.
            </p>
          </div>

          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-lg border border-[#1f2431] bg-[#0f1117] p-4 text-center"
              >
                <p className="text-2xl font-bold text-[#22c55e]">{s.value}</p>
                <p className="mt-1 text-xs leading-snug text-[#8b90a0]">{s.label}</p>
              </div>
            ))}
          </div>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2>Structure du payload EPC069-12</h2>
            <p>
              Le payload EPC069-12 est un format texte basé sur des lignes avec exactement 11 lignes.
              Chaque ligne a une signification fixe – les lignes vides sont autorisées pour les champs
              optionnels :
            </p>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-xs text-slate-200 sm:text-sm">
              <code>{`BCD                      ← Service Tag
002                      ← Version
1                        ← Jeu de caractères (1=UTF-8)
SCT                      ← Code d'identification (SEPA Credit Transfer)
                         ← BIC (optionnel, laisser vide)
Max Mustermann           ← Nom (max 70 caractères)
DE89370400440532013000   ← IBAN
EUR99.99                 ← Montant (EUR + montant, ex. EUR99.99)
                         ← Purpose Code (laisser vide)
                         ← Remittance Info (structuré, laisser vide)
Facture 2026-001         ← Référence de paiement (max 140 caractères)`}</code>
            </pre>

            <h2>Versions 001 vs. 002</h2>
            <p>
              La version 001 exige un BIC, la version 002 rend le BIC optionnel. Recommandé :
              version 002 pour les nouvelles implémentations. La plupart des applications bancaires
              acceptent les deux versions. Avec la version 002, la ligne BIC peut rester vide, car le
              réseau SEPA identifie la banque à partir de l&apos;IBAN.
            </p>

            <h2>Niveau de correction d&apos;erreurs</h2>
            <p>
              EPC069-12 recommande le niveau M (15 % de récupération) pour l&apos;affichage numérique
              sur écran. Pour l&apos;impression sur factures ou affiches, le niveau H (30 % de
              récupération) est recommandé pour une meilleure lisibilité – même si le QR Code est
              légèrement endommagé ou sale.
            </p>

            <h2>Exemple d&apos;implémentation JavaScript</h2>
            <p>
              Cette fonction génère un payload EPC069-12 valide, qui peut être rendu directement avec
              une bibliothèque QR Code (ex. <code>qrcode</code> ou <code>qr-code-styling</code>) :
            </p>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-xs text-slate-200 sm:text-sm">
              <code>{`function buildEPCPayload({ name, iban, bic = '', amount, purpose = '' }) {
  const amountStr = amount ? 'EUR' + Number(amount).toFixed(2) : '';
  return [
    'BCD',       // Service Tag
    '002',       // Version
    '1',         // Jeu de caractères (UTF-8)
    'SCT',       // SEPA Credit Transfer
    bic.trim(),  // BIC (optionnel)
    name.trim().slice(0, 70),
    iban.replace(/\\s+/g, '').toUpperCase(),
    amountStr,   // EUR + montant ou vide
    '',          // Purpose Code (vide)
    '',          // Remittance Info structurée (vide)
    purpose.trim().slice(0, 140)
  ].join('\\n');
}`}</code>
            </pre>

            <div className="not-prose my-8">
              <Link
                href="/fr"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#16a34a 0%,#15803d 100%)' }}
              >
                Créer EPC QR Code →
              </Link>
              <Link
                href="/fr/api-docs"
                className="ml-4 inline-flex items-center gap-2 rounded-xl border border-[#1f2431] px-6 py-3 text-sm font-medium text-slate-300 transition duration-200 hover:border-emerald-500/30 hover:text-white"
              >
                Documentation API →
              </Link>
            </div>

            <h2>Questions fréquentes sur l&apos;EPC QR Code</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-sm font-semibold text-slate-50">{faq.q}</h3>
                  <p className="text-sm text-slate-300">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="not-prose mt-10 rounded-2xl border border-[#1f2431] bg-[#0f1117] p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl" aria-hidden>
                  📚
                </span>
                <h2 className="text-base font-bold text-[#e8eaf0]">Articles connexes</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {related.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/30 hover:text-[#e8eaf0] hover:-translate-y-0.5"
                  >
                    <span>{a.label}</span>
                    <span className="ml-3 shrink-0 text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
