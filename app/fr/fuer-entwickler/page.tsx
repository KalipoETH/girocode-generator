import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode pour développeurs & agences – Intégration',
  description:
    'Intégrer la génération de GiroCode dans vos projets : structure du payload EPC, exemples de code et conseils pour développeurs.',
};

export default function DevelopersPageFr() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-12">
        <header className="mb-10 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Intégration &amp; API
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              GiroCode pour développeurs &amp; agences
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Cette page s’adresse aux développeurs qui souhaitent intégrer des GiroCodes dans leurs
              projets, logiciels de facturation ou sites web.
            </p>
          </div>
        </header>

        <article className="space-y-10">
          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Générer le payload EPC
            </h2>
            <p className="mb-4 text-sm text-slate-300 md:text-base">
              Le payload EPC est un texte structuré ligne par ligne. L’exemple suivant illustre
              comment le générer en JavaScript/TypeScript :
            </p>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-xs text-slate-200 sm:text-sm">
              <code>{`function buildEPC({ name, iban, bic = '', amount, purpose = '' }) {
  const amountStr = amount ? 'EUR' + Number(amount).toFixed(2) : '';
  return [
    'BCD', '001', '1', 'SCT',
    bic.trim(),
    name.trim().slice(0, 70),
    iban.replace(/\\s+/g, '').toUpperCase(),
    amountStr,
    '', '',
    purpose.trim().slice(0, 140)
  ].join('\\n');
}`}</code>
            </pre>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Générer un code QR à partir du payload
            </h2>
            <p className="mb-4 text-sm text-slate-300 md:text-base">
              Avec le paquet{' '}
              <code className="rounded bg-slate-800 px-1.5 py-0.5 text-slate-200">qrcode</code> (npm)
              vous pouvez dessiner le code QR :
            </p>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-xs text-slate-200 sm:text-sm">
              <code>{`import QRCode from 'qrcode';

const payload = buildEPC({
  name: 'Max Mustermann',
  iban: 'DE89370400440532013000',
  amount: 99.99,
  purpose: 'Facture 2025-001'
});

QRCode.toCanvas(canvas, payload, {
  errorCorrectionLevel: 'M',
  width: 220
});`}</code>
            </pre>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Utiliser ce générateur
            </h2>
            <p className="text-sm text-slate-300 md:text-base">
              Vous pouvez créer un lien vers ce générateur ou l’utiliser comme implémentation de
              référence. Le code source complet est consultable publiquement.
            </p>
            <p className="mt-3">
              <Link
                href="/fr"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
              >
                Ouvrir le GiroCode Generator
                <span aria-hidden>→</span>
              </Link>
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
              Contact pour des coopérations
            </h2>
            <p className="text-sm text-slate-300 md:text-base">
              Vous êtes une agence ou un éditeur de logiciel et souhaitez coopérer ? N’hésitez pas
              à m’écrire&nbsp;:{' '}
              <a
                href="mailto:jahnke.kaleb@gmail.com"
                className="text-sky-400 underline decoration-sky-500/70 underline-offset-2 hover:text-sky-300"
              >
                jahnke.kaleb@gmail.com
              </a>
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}

