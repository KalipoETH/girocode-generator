import type { Metadata } from 'next';
import Link from 'next/link';
import { AuthorBox, AuthorBoxEnd } from '../../../../components/AuthorBox';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'La storia del GiroCode – Dal foglio allo scanner QR',
  description:
    'Come è nato il GiroCode: dagli inizi dello standard EPC nel 2012 alla diffusione in Germania. La storia dell\'evoluzione del SEPA-QR.',
  alternates: {
    canonical: `${SITE_URL}/it/blog/geschichte-des-girocodes`,
    languages: {
      'x-default': `${SITE_URL}/blog/geschichte-des-girocodes`,
      de: `${SITE_URL}/blog/geschichte-des-girocodes`,
      en: `${SITE_URL}/en/blog/geschichte-des-girocodes`,
      fr: `${SITE_URL}/fr/blog/geschichte-des-girocodes`,
      es: `${SITE_URL}/es/blog/geschichte-des-girocodes`,
      it: `${SITE_URL}/it/blog/geschichte-des-girocodes`,
    },
  },
};

export default function StoriaGiroCodeItPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <nav className="mb-8 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/it" className="hover:text-slate-300">Home</Link>
          <span>/</span>
          <Link href="/it/blog" className="hover:text-slate-300">Blog</Link>
          <span>/</span>
          <span className="text-slate-400">Storia del GiroCode</span>
        </nav>

        <header className="mb-10 space-y-4">
          <time dateTime="2026-03-15" className="text-xs text-slate-500">15 marzo 2026</time>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl lg:text-4xl">
            La storia del GiroCode – Dal foglio allo scanner QR
          </h1>
          <p className="text-base leading-relaxed text-slate-400 md:text-lg">
            Il GiroCode è nato dallo standard QR dell&apos;EPC pubblicato dal European Payments
            Council nel 2012 ed è stato introdotto in Germania come «GiroCode» dalla Deutsche
            Kreditwirtschaft tra il 2016 e il 2018. Permette di avviare un bonifico SEPA
            scansionando un codice QR, senza digitare IBAN e importo. Dalla prima idea alla
            diffusione di massa è però passato più di un decennio: un percorso che questo
            articolo ripercorre.
          </p>
        </header>

        <AuthorBox locale="it" publishedDate="15 marzo 2026" updatedDate="15 marzo 2026" />

        <article className="space-y-10 text-sm leading-relaxed text-slate-300 md:text-base">

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Gli inizi: SEPA e il European Payments Council
            </h2>
            <p>
              Per capire la storia del GiroCode bisogna prima esaminare il contesto più ampio:
              la creazione dell&apos;area unica dei pagamenti in euro, SEPA (Single Euro Payments
              Area). Fin dai primi anni 2000, le banche europee lavoravano per rendere i
              bonifici transfrontalieri in Europa semplici quanto quelli nazionali.
            </p>
            <p className="mt-3">
              Nel 2002 le associazioni bancarie europee fondarono il European Payments Council
              (EPC), che assunse il coordinamento di questa armonizzazione. L&apos;EPC sviluppò
              standard comuni per i bonifici SEPA (SCT) e gli addebiti diretti SEPA (SDD). Queste
              norme crearono la base tecnica su cui sarebbe stato costruito il GiroCode.
            </p>
            <p className="mt-3">
              L&apos;obiettivo era ambizioso: un cittadino europeo doveva poter effettuare un
              bonifico verso qualsiasi conto nell&apos;area SEPA con la stessa semplicità di un
              bonifico domestico. IBAN, BIC e formati standardizzati furono i mattoni fondamentali.
              Il codice QR sarebbe arrivato qualche anno dopo, come risposta a un problema
              pratico: gli IBAN sono lunghi e facili da digitare male.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              2012: L&apos;EPC sviluppa lo standard QR
            </h2>
            <p>
              Nel 2012 il European Payments Council pubblicò per la prima volta il documento
              «Quick Response Code – Guidelines to Enable the Data Capture for the Initiation
              of a SCT». Questo documento definiva come doveva essere strutturato un codice QR
              per trasmettere tutte le informazioni necessarie a un bonifico SEPA.
            </p>
            <p className="mt-3">
              La specifica tecnica era concisa ma precisa: il codice QR contiene un payload di
              testo orientato a righe in formato UTF-8. La prima riga contiene sempre «BCD»
              (Business Contact Details), seguita dal numero di versione, dall&apos;identificatore
              del set di caratteri, dall&apos;identificatore di transazione «SCT», dal BIC, dal
              nome del beneficiario, dall&apos;IBAN, dall&apos;importo e dalla causale del pagamento.
            </p>
            <p className="mt-3">
              Questo standard – oggi noto come EPC069-12 – è mantenuto dall&apos;European Payments
              Council in una tabella di revisioni: alla prima pubblicazione V1.0 (2012) sono seguite
              V2.0 (2015) e V2.1 (2016), poi V3.0 (2022) e infine la versione attualmente in vigore
              V3.1 (2024). La struttura di base del payload è rimasta stabile nel corso degli anni: a
              differenza di molte innovazioni fintech, il SEPA-QR non è stato sostituito ogni due
              anni, ma ha trovato un equilibrio tra semplicità e funzionalità.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              2016–2018: Introduzione in Germania
            </h2>
            <p>
              In Germania, l&apos;introduzione pratica del codice EPC-QR sotto il marchio
              «GiroCode» iniziò tra il 2016 e il 2018. Il comitato bancario tedesco coordinò
              il lancio e scelse il nome «GiroCode» – ispirato al termine tedesco «Girokonto»
              (conto corrente), per sottolineare la rilevanza quotidiana del codice.
            </p>
            <p className="mt-3">
              Parallelamente, fornitori di software contabile e generatori PDF iniziarono a
              integrare la generazione di GiroCode. Soluzioni come DATEV e Lexoffice offrirono
              presto la possibilità di incorporare GiroCode nelle fatture in uscita, accelerando
              l&apos;adozione tra le PMI tedesche.
            </p>
            <p className="mt-3">
              Il nome «GiroCode» divenne sinonimo del codice EPC-QR in Germania, anche se
              tecnicamente lo stesso standard esiste in altri paesi con nomi diversi. Per i
              professionisti che lavorano con clienti tedeschi o austriaci, conoscere questa
              storia aiuta a capire perché il GiroCode è così diffuso in quei mercati.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Il ruolo di Sparkassen e Volksbanken
            </h2>
            <p>
              La diffusione capillare del GiroCode in Germania è in gran parte merito delle
              Sparkassen e delle Volksbanken. Entrambi i gruppi bancari hanno un interesse
              comune negli standard di pagamento uniformi, poiché operano principalmente nel
              settore regionale e tra i privati – esattamente i target del GiroCode.
            </p>
            <p className="mt-3">
              Lo Sparkassen-Verbund e le Volksbanken und Raiffeisenbanken furono tra i primi
              gruppi bancari tedeschi ad equipaggiare le proprie app per la scansione dei
              GiroCode. Poiché questi due gruppi servono insieme più della metà di tutti i
              conti correnti tedeschi, la copertura di base fu garantita fin dall&apos;inizio.
            </p>
            <p className="mt-3">
              La Sparkasse integrò lo scanner GiroCode fin da subito in modo prominente nella
              sua app «Sparkasse». Oggi lo scanner è disponibile di default nella funzione di
              bonifico ed è attivamente promosso. Allo stesso modo agì la Volks- und
              Raiffeisenbank con la sua app «VR Banking».
            </p>
            <p className="mt-3">
              Questa integrazione precoce da parte delle banche retail più influenti creò un
              effetto rete: chi offriva un GiroCode sulle fatture poteva contare sul fatto che
              la stragrande maggioranza dei clienti potesse usare la tecnologia. Ciò aumentò
              la propensione ad adottare realmente i GiroCode, non solo a conoscerli.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              GiroCode vs. altri standard di pagamento QR nel mondo
            </h2>
            <p>
              Il GiroCode non è l&apos;unico standard di pagamento basato su QR al mondo, ma è
              uno dei pochi fondato su uno standard bancario paneuropeo e non legato a una
              singola piattaforma o azienda.
            </p>
            <div className="mt-4 space-y-3">
              {[
                { region: 'Austria – Stuzza-QR', text: 'L\'Austria utilizza anch\'essa lo standard EPC, ma lo chiama Stuzza-QR. Tecnicamente è pienamente compatibile con il GiroCode tedesco.' },
                { region: 'Svizzera – QR-Bill', text: 'Nel 2020 la Svizzera ha sostituito i bollettini arancioni e rossi con la fattura QR (QR-Bill), basata su uno standard svizzero ma strutturata in modo simile all\'EPC-QR.' },
                { region: 'Cina – WeChat Pay / Alipay QR', text: 'I sistemi di super-app cinesi usano anch\'essi codici QR, ma sono legati a sistemi proprietari e non interoperabili con gli standard bancari europei.' },
                { region: 'India – UPI QR', text: 'L\'Unified Payments Interface (UPI) dell\'India è uno standard multipiattaforma con codici QR, neutrale rispetto alle banche, ma limitato al mercato indiano.' },
              ].map((item) => (
                <div key={item.region} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                  <h3 className="font-semibold text-slate-100">{item.region}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Il futuro: pagamenti QR in Europa
            </h2>
            <p>
              La Commissione Europea e la Banca Centrale Europea (BCE) stanno spingendo
              ulteriormente la digitalizzazione dei pagamenti. Con l&apos;euro digitale – una
              valuta digitale emessa dalla banca centrale (CBDC) – è prevista anche una nuova
              infrastruttura per i pagamenti che potrebbe utilizzare i codici QR come mezzo di
              input.
            </p>
            <p className="mt-3">
              Parallelamente, l&apos;EPC lavora a estensioni dello standard SEPA-QR. Tra le
              discussioni in corso figurano:
            </p>
            <ul className="mt-3 space-y-2 pl-5">
              {[
                'Collegamento diretto ai PDF delle fatture nel codice QR (pagamento basato su proxy)',
                'Integrazione del Request-to-Pay (RTP) – una sorta di richiesta di pagamento digitale',
                'Supporto per i bonifici istantanei (SEPA Instant Credit Transfer)',
                'Migliori meccanismi di sicurezza contro la manipolazione dei codici QR (Quishing)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 list-none">
                  <span className="mt-1 flex-shrink-0 text-emerald-400">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Il GiroCode non è quindi un modello in declino, ma parte di un&apos;infrastruttura
              di pagamento europea in continua evoluzione. Con la crescente diffusione dei
              bonifici istantanei, i GiroCode diventeranno ancora più utili, poiché i pagamenti
              saranno elaborati in secondi anziché in ore o giorni.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">Conclusione</h2>
            <p>
              Dal documento EPC del 2012 all&apos;integrazione nelle app Sparkasse fino
              all&apos;uso onnipresente sulle fatture di oggi – il GiroCode ha percorso una
              strada notevole. È l&apos;esempio perfetto di una standardizzazione europea
              arrivata davvero nella vita quotidiana.
            </p>
            <p className="mt-3">
              Per freelance, associazioni e aziende il GiroCode è oggi uno strumento
              indispensabile che rende i pagamenti più rapidi, senza errori e più comodi. E con
              strumenti gratuiti come il GiroCode Generator, la creazione richiede meno di un
              minuto.
            </p>
            <div className="mt-6">
              <Link
                href="/it"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
              >
                Crea il tuo GiroCode gratis →
              </Link>
            </div>
          </section>
        </article>

        <AuthorBoxEnd locale="it" />

        <div className="mt-12 border-t border-slate-800 pt-8">
          <h2 className="mb-4 text-lg font-bold text-[#e8eaf0]">Provalo ora</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: '⚡', title: 'Generatore GiroCode', desc: 'Crea un GiroCode gratis – in locale nel browser.', cta: 'Al generatore →', href: '/it' },
              { icon: '🔍', title: 'Scanner GiroCode', desc: 'Scansiona un GiroCode e leggi i dati di pagamento.', cta: 'Allo scanner →', href: '/it/scanner' },
              { icon: '📦', title: 'Generatore bulk', desc: 'Crea più GiroCode contemporaneamente tramite upload CSV.', cta: 'Al generatore bulk →', href: '/it/bulk' },
            ].map((item) => (
              <Link key={item.href} href={item.href}
                className="group flex flex-col gap-2 rounded-xl border border-[#1f2431] bg-[#121318] p-4 transition-all duration-200 hover:-translate-y-[3px] hover:border-[#22c55e40] hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none">
                <span className="text-2xl" aria-hidden>{item.icon}</span>
                <h3 className="font-bold text-[#e8eaf0]">{item.title}</h3>
                <p className="text-sm text-[#8b90a0]">{item.desc}</p>
                <span className="mt-auto text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">{item.cta}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Link href="/it/blog" className="text-sm text-slate-400 hover:text-slate-200">
            ← Torna al blog
          </Link>
        </div>
      </div>
    </main>
  );
}
