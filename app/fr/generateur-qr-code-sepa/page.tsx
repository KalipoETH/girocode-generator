import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Générateur QR Code SEPA – Gratuit & Instantané 2026',
  description:
    'Créez des QR codes SEPA (EPC/GiroCode) gratuitement. Compatible avec toutes les apps bancaires européennes. Sans inscription.',
  alternates: {
    canonical: `${SITE_URL}/fr/generateur-qr-code-sepa`,
    languages: {
      'x-default': `${SITE_URL}/sepa-qr-code`,
      de: `${SITE_URL}/sepa-qr-code`,
      fr: `${SITE_URL}/fr/generateur-qr-code-sepa`,
    },
  },
};

const faqs = [
  {
    q: "Qu'est-ce qu'un QR code SEPA ?",
    a: "Un QR code SEPA est un code QR standardisé pour les virements SEPA selon la norme EPC069-12. Il contient l'IBAN, le nom du bénéficiaire, le montant et la référence de paiement en format lisible par les apps bancaires.",
  },
  {
    q: 'Est-ce que le QR code SEPA est le même que GiroCode ?',
    a: 'Oui. QR code SEPA, GiroCode et code QR EPC désignent tous la même norme EPC069-12. GiroCode est le nom allemand, QR code SEPA est le terme fonctionnel en français.',
  },
  {
    q: 'Quelles apps bancaires supportent le QR code SEPA ?',
    a: 'Toutes les principales apps bancaires européennes : BNP Paribas, Crédit Agricole, Société Générale, Revolut, N26, ING et des centaines d\'autres dans les 36 pays SEPA.',
  },
  {
    q: 'Le générateur QR code SEPA est-il gratuit ?',
    a: 'Oui, entièrement gratuit. Sans inscription, sans frais cachés. Toutes les données sont traitées localement dans votre navigateur.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const stats = [
  { value: '36', label: 'Pays SEPA' },
  { value: 'EPC069-12', label: 'Norme officielle' },
  { value: '10 sec.', label: 'Temps de création' },
  { value: '100%', label: 'Gratuit' },
];

const relatedLinks = [
  { href: '/fr/qr-code-virement-bancaire', label: 'QR Code Virement Bancaire' },
  { href: '/fr/sepa-qr-code', label: 'Générateur SEPA QR Code' },
  { href: '/fr/wissen/girocode', label: "Qu'est-ce qu'un GiroCode ?" },
  { href: '/fr/wissen/epc-standard', label: 'Norme EPC expliquée' },
];

export default function GenerateurQrCodeSepaFrPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/fr" className="text-sky-400 hover:text-sky-300">
                  Accueil
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">Générateur QR Code SEPA</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              EPC069-12 · Virement SEPA
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              Générateur QR Code SEPA Gratuit
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
              Un QR code SEPA est un code QR standardisé pour les virements bancaires dans la zone
              SEPA. Il pré-remplit automatiquement le formulaire de virement dans votre app
              bancaire – IBAN, nom, montant et référence inclus.
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
            <h2>Qu&apos;est-ce qu&apos;un QR code SEPA ?</h2>
            <p>
              Un <strong>QR code SEPA</strong> est un code QR qui contient toutes les informations
              nécessaires pour un virement SEPA : IBAN, nom du bénéficiaire, montant et référence
              de paiement. Il suit la norme <strong>EPC069-12</strong> du Conseil européen des
              paiements et est reconnu par toutes les apps bancaires de la zone SEPA.
            </p>

            <h2>QR code SEPA vs. GiroCode – même standard, noms différents</h2>
            <p>
              En France, on parle de <strong>QR code SEPA</strong> ou de <strong>code QR
              EPC</strong>. En Allemagne, le même standard s&apos;appelle <strong>GiroCode</strong>.
              En Autriche, <strong>Stuzza QR Code</strong>. Tous produisent des codes QR
              identiques selon EPC069-12.
            </p>

            <h2>Comment créer un QR code SEPA</h2>
            <ol>
              <li>Saisissez l&apos;IBAN et le nom du bénéficiaire</li>
              <li>Ajoutez optionnellement le montant et la référence</li>
              <li>Cliquez sur Générer – le QR code apparaît instantanément</li>
              <li>Téléchargez en PNG ou intégrez-le à votre facture PDF</li>
            </ol>

            <div className="not-prose my-8">
              <Link
                href="/fr"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
              >
                Créer un QR code SEPA maintenant →
              </Link>
            </div>

            <h2>FAQ</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-base font-semibold text-[#e8eaf0]">{faq.q}</h3>
                  <p className="mt-1 text-sm text-slate-300">{faq.a}</p>
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
                {relatedLinks.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/30 hover:text-[#e8eaf0] hover:-translate-y-0.5"
                  >
                    <span className="leading-snug">{a.label}</span>
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
