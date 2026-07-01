import type { Metadata } from 'next';
import Link from 'next/link';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';
import { SITE_URL } from '@/lib/siteConfig';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Perché l'app non riconosce il GiroCode?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cause più comuni: codice troppo piccolo (min 2×2 cm), scarsa illuminazione, riflessi o app non aggiornata.',
      },
    },
    {
      '@type': 'Question',
      name: 'Funziona su iPhone e Android?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sì. Su iPhone e Android devi usare la funzione di scansione QR integrata nella tua app bancaria, non la fotocamera generica del telefono.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto tempo richiede il processo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dalla scansione alla conferma servono in media meno di 30 secondi. Il bonifico SEPA standard arriva di solito entro 1-2 giorni lavorativi.',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'Come scansionare un GiroCode – Guida passo-passo 2026',
  description:
    'Scansiona un GiroCode con la tua app bancaria: Intesa, UniCredit, Fineco e altre. Guida facile per iPhone e Android. ✅ Paga in 30 secondi.',
  alternates: {
    canonical: `${SITE_URL}/it/wissen/scannen`,
    languages: {
      'x-default': `${SITE_URL}/wissen/scannen`,
      de: `${SITE_URL}/wissen/scannen`,
      en: `${SITE_URL}/en/wissen/scannen`,
      fr: `${SITE_URL}/fr/wissen/scannen`,
      es: `${SITE_URL}/es/wissen/scannen`,
      it: `${SITE_URL}/it/wissen/scannen`,
    },
  },
};

export default function WissenScannenPageIt() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <KnowledgeLayout
        breadcrumbCurrent="Come scansionare un GiroCode"
        badge="Pratica · Scansione GiroCode"
        title="Come scansionare un GiroCode – Guida completa iPhone e Android"
        lead="Per scansionare un GiroCode: Apri app bancaria → 'Bonifico' → icona scanner QR → scansiona → verifica dati → TAN → conferma. Durata totale: meno di 30 secondi."
        relatedArticles={[
          { href: '/it/wissen/banking-apps', label: 'App bancarie compatibili con GiroCode – Panoramica 2026' },
          { href: '/it/wissen/girocode', label: "Cos'è un GiroCode? – Tutto quello che devi sapere" },
          { href: '/it/wissen/rechnung', label: 'GiroCode in fattura – La guida completa' },
          { href: '/it/wissen/epc-standard', label: 'Standard EPC & SEPA-QR – Struttura tecnica' },
          { href: '/it/wissen/iban-bic', label: 'IBAN & BIC per GiroCode' },
          { href: '/it/wissen/betrag-und-zweck', label: 'Importo e causale nel GiroCode' },
        ]}
        locale="it"
        lastUpdated="2026-06-01"
        shortAnswer="Per scansionare un GiroCode: Apri app bancaria → 'Bonifico' → icona scanner QR → scansiona → verifica dati → TAN → conferma. Durata totale: meno di 30 secondi."
        statsData={[
          { value: '15–30 cm', label: 'Distanza ottimale di scansione' },
          { value: '2×2 cm', label: 'Dimensione minima per scansione affidabile' },
          { value: '300 DPI', label: 'Qualità minima di stampa' },
          { value: '30 sec.', label: 'Durata totale scansione fino al pagamento' },
        ]}
      >
        <section aria-labelledby="come-funziona">
          <h2 id="come-funziona">Scansionare un GiroCode – Come funziona</h2>
          <p>
            Un GiroCode è un codice QR standard con contenuto speciale: il payload EPC con i
            dati del bonifico SEPA. Per scansionarlo e pagare,{' '}
            <strong>devi usare la funzione di scansione integrata nella tua app bancaria</strong> –
            è l&apos;unica che interpreta il GiroCode come ordine di bonifico e compila
            automaticamente il modulo di pagamento.
          </p>
          <p>
            Il pagamento <strong>non avviene automaticamente</strong>: devi sempre verificare i
            dati e confermare con PIN, impronta o Face ID.
          </p>
        </section>

        <section aria-labelledby="sette-passi" className="mt-10">
          <h2 id="sette-passi">I 7 passi per scansionare un GiroCode</h2>
          <ol>
            <li>
              <strong>Apri la tua app bancaria</strong> (Intesa Sanpaolo, UniCredit, Fineco, ING
              Italia, ecc.) e accedi al conto.
            </li>
            <li>
              <strong>Vai alla sezione «Bonifico»</strong> o «Pagamenti» – di solito nel menu
              principale o nella schermata del conto.
            </li>
            <li>
              <strong>Cerca l&apos;icona dello scanner QR</strong> – appare come fotocamera o
              quadrato QR, accanto al campo IBAN o in alto nel modulo.
            </li>
            <li>
              <strong>Autorizza l&apos;accesso alla fotocamera</strong> se richiesto alla prima
              utilizzo.
            </li>
            <li>
              <strong>Inquadra il GiroCode</strong> sulla fattura o sullo schermo. Tieni il
              telefono stabile a 15–30 cm, con buona illuminazione.
            </li>
            <li>
              <strong>Verifica tutti i dati caricati:</strong> nome beneficiario, IBAN, importo e
              causale devono corrispondere alla fattura.
            </li>
            <li>
              <strong>Conferma il bonifico</strong> con PIN, impronta digitale o Face ID. Il
              pagamento viene eseguito in pochi secondi.
            </li>
          </ol>
        </section>

        <section aria-labelledby="iphone-android" className="mt-10">
          <h2 id="iphone-android">iPhone e Android – Note specifiche</h2>
          <p>
            Su <strong>iPhone</strong>, usa sempre l&apos;app bancaria: la fotocamera iOS mostra
            solo il testo grezzo del payload, senza avviare il pagamento. Molte app (Intesa,
            UniCredit) permettono anche di scansionare da galleria per PDF ricevuti via email.
          </p>
          <p>
            Su <strong>Android</strong>, il processo è identico tramite app bancaria. Google Lens
            o la fotocamera di sistema possono leggere il QR ma non eseguire il bonifico – per
            pagare serve sempre l&apos;app della banca.
          </p>
        </section>

        <section aria-labelledby="problemi-comuni" className="mt-10">
          <h2 id="problemi-comuni">Problemi comuni e soluzioni</h2>
          <div className="not-prose space-y-3">
            <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
              <p className="font-semibold text-slate-200">La fotocamera non rileva il codice</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>→ Migliora l&apos;illuminazione ed evita ombre sul codice.</li>
                <li>→ Avvicina o allontana il telefono (15–30 cm).</li>
                <li>→ Pulisci l&apos;obiettivo della fotocamera.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
              <p className="font-semibold text-slate-200">Il codice è troppo piccolo</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>→ Usa il PDF digitale e scansiona dallo schermo.</li>
                <li>→ Il GiroCode deve misurare almeno 2 × 2 cm in stampa.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
              <p className="font-semibold text-slate-200">L&apos;app non ha scanner QR</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                <li>→ Aggiorna l&apos;app all&apos;ultima versione.</li>
                <li>→ Inserisci IBAN, importo e causale manualmente dalla fattura.</li>
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="cta-scanner" className="mt-10">
          <div className="not-prose rounded-2xl border border-emerald-500/30 bg-[#133018]/40 p-6">
            <h2
              id="cta-scanner"
              className="mb-2 text-lg font-bold text-[#e8eaf0]"
            >
              Prova il nostro scanner GiroCode
            </h2>
            <p className="mb-4 text-sm text-slate-300">
              Vuoi verificare il contenuto di un GiroCode prima di pagare? Usa il nostro scanner
              gratuito – funziona direttamente nel browser.
            </p>
            <Link
              href="/it/scanner"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,197,94,0.4)]"
              style={{
                background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
                color: '#ffffff',
              }}
            >
              Apri lo scanner GiroCode →
            </Link>
          </div>
        </section>
      </KnowledgeLayout>
    </>
  );
}
