import type { Metadata } from 'next';
import Link from 'next/link';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'È obbligatorio inserire un GiroCode nelle fatture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No, il GiroCode è completamente facoltativo. Non esiste alcuna normativa che lo imponga. È un miglioramento che semplifica il pagamento per il cliente e accelera l'incasso per l'emittente.",
      },
    },
    {
      '@type': 'Question',
      name: 'Dove posizionare il GiroCode sulla fattura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La posizione consigliata è l'angolo in basso a destra, accanto ai dati bancari (IBAN). Il codice deve misurare almeno 2×2 cm, su sfondo bianco con margine di silenzio intorno.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quali sono i campi obbligatori di una fattura italiana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Numero progressivo, data emissione, dati emittente (ragione sociale, P.IVA, indirizzo), dati cliente, descrizione beni/servizi, imponibile, aliquota IVA, imposta IVA, totale e termini di pagamento. Il GiroCode è un complemento, non sostituisce questi elementi.',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'GiroCode in fattura – Guida completa & editor PDF',
  description:
    'Aggiungi GiroCode alle tue fatture: requisiti legali italiani, posizione ottimale e editor fatture gratuito. ✅ Fatture professionali in 2 minuti.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/it/wissen/rechnung',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/rechnung',
      de: 'https://www.girocodegenerator.com/wissen/rechnung',
      en: 'https://www.girocodegenerator.com/en/wissen/rechnung',
      fr: 'https://www.girocodegenerator.com/fr/wissen/rechnung',
      es: 'https://www.girocodegenerator.com/es/wissen/rechnung',
      it: 'https://www.girocodegenerator.com/it/wissen/rechnung',
    },
  },
};

export default function WissenRechnungPageIt() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <KnowledgeLayout
        breadcrumbCurrent="GiroCode in fattura"
        badge="Pratica · GiroCode in fattura"
        title="GiroCode in fattura – La guida completa"
        lead="Un GiroCode in fattura permette al destinatario di pagare scansionando con la propria app bancaria. Secondo le raccomandazioni EPC, il GiroCode deve misurare almeno 2×2 cm e posizionarsi in basso a destra."
        relatedArticles={[
          { href: '/it/wissen/girocode', label: "Cos'è un GiroCode? – Tutto quello che devi sapere" },
          { href: '/it/wissen/betrag-und-zweck', label: 'Importo e causale nel GiroCode' },
          { href: '/it/wissen/iban-bic', label: 'IBAN & BIC per GiroCode' },
          { href: '/it/wissen/banking-apps', label: 'App bancarie compatibili con GiroCode' },
          { href: '/it/wissen/scannen', label: 'Come scansionare un GiroCode' },
        ]}
        locale="it"
        lastUpdated="2026-06-01"
        shortAnswer="Un GiroCode in fattura permette al destinatario di pagare scansionando con la propria app bancaria. Secondo le raccomandazioni EPC, il GiroCode deve misurare almeno 2×2 cm e posizionarsi in basso a destra."
        statsData={[
          { value: '2×2 cm', label: 'Dimensione minima QR consigliata EPC' },
          { value: '30 sec.', label: 'Tempo medio pagamento con GiroCode' },
          { value: '14 giorni', label: 'Termine di pagamento abituale' },
          { value: '300 DPI', label: 'Risoluzione stampa consigliata' },
        ]}
      >
        <section aria-labelledby="perche-girocode-fattura">
          <h2 id="perche-girocode-fattura">Perché usare il GiroCode in fattura?</h2>
          <p>
            Senza GiroCode, il cliente deve copiare manualmente IBAN, importo e causale – con
            rischio di errori e ritardi. Con il GiroCode, basta scansionare: tutti i dati si
            compilano automaticamente. Il cliente conferma e il pagamento è fatto in circa 30
            secondi.
          </p>
          <ul>
            <li>
              <strong>Pagamenti più rapidi</strong> – meno attrito nel processo di pagamento.
            </li>
            <li>
              <strong>Meno errori</strong> – niente errori di digitazione su IBAN e importo.
            </li>
            <li>
              <strong>Riconciliazione automatica</strong> – il numero fattura arriva nella causale
              esatta.
            </li>
            <li>
              <strong>Zero commissioni</strong> – a differenza di PayPal o carte.
            </li>
          </ul>
        </section>

        <section aria-labelledby="campi-obbligatori" className="mt-10">
          <h2 id="campi-obbligatori">Campi obbligatori di una fattura italiana</h2>
          <p>
            Il GiroCode è un complemento alla fattura, non sostituisce gli elementi legali
            obbligatori secondo il D.P.R. 633/1972 e le norme IVA italiane:
          </p>
          <ul>
            <li>
              <strong>Numero progressivo della fattura</strong> (progressivo e univoco)
            </li>
            <li>
              <strong>Data di emissione</strong>
            </li>
            <li>
              <strong>Dati emittente:</strong> ragione sociale o nome e cognome, indirizzo, Partita
              IVA / Codice Fiscale
            </li>
            <li>
              <strong>Dati cliente:</strong> ragione sociale o nome, indirizzo, P.IVA/CF (per B2B)
            </li>
            <li>
              <strong>Descrizione beni o servizi</strong> con quantità e prezzo unitario
            </li>
            <li>
              <strong>Imponibile</strong> (importo senza IVA)
            </li>
            <li>
              <strong>Aliquota IVA</strong> applicata (22%, 10%, 4% o 0%)
            </li>
            <li>
              <strong>Imposta IVA</strong> in euro
            </li>
            <li>
              <strong>Totale documento</strong> (imponibile + IVA)
            </li>
            <li>
              <strong>Termini di pagamento</strong> e coordinate bancarie (IBAN)
            </li>
          </ul>
          <p className="text-sm text-slate-400">
            Per regimi speciali (forfettario, esenzione IVA) sono richieste menzioni specifiche.
            Consulta il tuo commercialista per la tua situazione.
          </p>
        </section>

        <section aria-labelledby="dove-posizionare" className="mt-10">
          <h2 id="dove-posizionare">Dove posizionare il GiroCode</h2>
          <p>
            Posizione consigliata: <strong>angolo in basso a destra</strong>, accanto ai dati
            bancari. Dimensione minima: <strong>2 × 2 cm</strong> (3 × 3 cm più sicuro). Stampa a
            almeno <strong>300 DPI</strong> su sfondo bianco con buon contrasto.
          </p>
        </section>

        <section aria-labelledby="cta-editor" className="mt-10">
          <h2 id="cta-editor">Crea la tua fattura con GiroCode</h2>
          <p>
            Con il nostro editor fatture gratuito puoi creare fatture professionali con GiroCode
            integrato in pochi minuti – senza software complesso.
          </p>
          <div className="not-prose my-6">
            <Link
              href="/it/rechnungs-editor"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,197,94,0.4)]"
              style={{
                background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
                color: '#ffffff',
              }}
            >
              Crea fattura con GiroCode →
            </Link>
          </div>
        </section>
      </KnowledgeLayout>
    </>
  );
}
