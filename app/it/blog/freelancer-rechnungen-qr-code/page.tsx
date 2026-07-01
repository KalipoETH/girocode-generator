import type { Metadata } from 'next';
import Link from 'next/link';
import { AuthorBox, AuthorBoxEnd } from '../../../../components/AuthorBox';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Fatture da freelance: GiroCode per pagamenti più veloci',
  description:
    'Come i freelance incassano più rapidamente con i GiroCode sulle fatture. Guida pratica con consigli su obblighi fiscali italiani, regime forfettario e generatore PDF gratuito.',
  alternates: {
    canonical: `${SITE_URL}/it/blog/freelancer-rechnungen-qr-code`,
    languages: {
      'x-default': `${SITE_URL}/blog/freelancer-rechnungen-qr-code`,
      de: `${SITE_URL}/blog/freelancer-rechnungen-qr-code`,
      en: `${SITE_URL}/en/blog/freelancer-rechnungen-qr-code`,
      fr: `${SITE_URL}/fr/blog/freelancer-rechnungen-qr-code`,
      es: `${SITE_URL}/es/blog/freelancer-rechnungen-qr-code`,
      it: `${SITE_URL}/it/blog/freelancer-rechnungen-qr-code`,
    },
  },
};

export default function FreelancerFattureItPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <nav className="mb-8 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/it" className="hover:text-slate-300">Home</Link>
          <span>/</span>
          <Link href="/it/blog" className="hover:text-slate-300">Blog</Link>
          <span>/</span>
          <span className="text-slate-400">GiroCode per freelance</span>
        </nav>

        <header className="mb-10 space-y-4">
          <time dateTime="2026-03-01" className="text-xs text-slate-500">1 marzo 2026</time>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl lg:text-4xl">
            Fatture da freelance: GiroCode per pagamenti più veloci
          </h1>
          <p className="text-base leading-relaxed text-slate-400 md:text-lg">
            Termini di pagamento troppo lunghi, bonifici dimenticati, IBAN digitato male –
            i freelance conoscono bene il problema. Un GiroCode sulla fattura può cambiare tutto.
          </p>
        </header>

        <AuthorBox locale="it" publishedDate="1 marzo 2026" updatedDate="1 marzo 2026" />

        <article className="space-y-10 text-sm leading-relaxed text-slate-300 md:text-base">

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Perché i freelance aspettano troppo i pagamenti
            </h2>
            <p>
              In Italia, i lavoratori autonomi e i freelance attendono in media più di 30 giorni
              per l&apos;incasso di una fattura – spesso superando i termini concordati. La ragione
              raramente è la cattiva volontà: i clienti aprono la fattura, faticano a inserire
              correttamente l&apos;IBAN nell&apos;app bancaria, o rimandano il bonifico perché passare
              all&apos;applicazione della banca gli sembra troppo scomodo.
            </p>
            <p className="mt-3">
              Il risultato è prevedibile: solleciti, telefonate, e-mail di follow-up e ore
              perse che avrebbero dovuto essere dedicate ai progetti. Un semplice codice QR sulla
              fattura può accelerare notevolmente questo processo, riducendo l&apos;attrito tra
              emissione della fattura e accredito sul conto.
            </p>
            <p className="mt-3">
              Chi lavora in partita IVA sa quanto sia frustrante inseguire i pagamenti. Ogni
              giorno di ritardo incide sulla liquidità, sulle scadenze fiscali e sulla serenità
              del lavoro autonomo. La digitalizzazione dei pagamenti non risolve tutti i problemi,
              ma elimina una delle barriere più banali e più frequenti: la difficoltà di pagare
              in modo rapido e senza errori.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Cos&apos;è un GiroCode e come aiuta i freelance
            </h2>
            <p>
              Il GiroCode – ufficialmente un codice EPC-QR secondo lo standard del European
              Payments Council – è un codice QR che contiene tutti i dati rilevanti per il
              bonifico: nome del beneficiario, IBAN, BIC (opzionale), importo e causale del
              pagamento. Chi paga deve solo scansionare il codice con l&apos;app della propria
              banca e confermare il bonifico con un tocco. Niente digitazione, niente errori
              di trascrizione.
            </p>
            <p className="mt-3">
              Per i freelance questo significa concretamente: il cliente apre la fattura, scansiona
              il codice QR e trasferisce subito. La soglia psicologica al pagamento crolla perché
              l&apos;operazione richiede pochi secondi. Non serve copiare un IBAN di 27 caratteri,
              non serve ricontrollare l&apos;importo, non serve ricordarsi la causale.
            </p>
            <p className="mt-3">
              Le app bancarie dei principali istituti europei – incluse quelle usate in Italia
              per i bonifici SEPA – supportano la scansione dei codici EPC-QR. Anche se il nome
              «GiroCode» è nato in Germania, lo standard tecnico sottostante è europeo e
              interoperabile. Chi emette fatture verso clienti in area SEPA può quindi offrire
              un metodo di pagamento moderno e universalmente riconosciuto.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Aggiungere un GiroCode alla fattura – Passo per passo
            </h2>
            <ol className="space-y-4 pl-5">
              <li className="list-decimal">
                <strong className="text-slate-100">Aprire il generatore GiroCode:</strong>{' '}
                Visita{' '}
                <Link href="/it" className="text-emerald-400 underline hover:text-emerald-300">
                  girocodegenerator.com
                </Link>{' '}
                – gratuito, senza registrazione.
              </li>
              <li className="list-decimal">
                <strong className="text-slate-100">Inserire i tuoi dati:</strong>{' '}
                Inserisci il tuo nome o la ragione sociale, il tuo IBAN, l&apos;importo della
                fattura e la causale (es. «Fattura 2026-042»). Il BIC è opzionale.
              </li>
              <li className="list-decimal">
                <strong className="text-slate-100">Generare il codice QR:</strong>{' '}
                Con un clic su «Crea GiroCode», il codice QR viene generato istantaneamente nel
                browser – in locale, senza trasmissione al server.
              </li>
              <li className="list-decimal">
                <strong className="text-slate-100">Creare la fattura PDF:</strong>{' '}
                Usa l&apos;{' '}
                <Link href="/it/rechnungs-editor" className="text-emerald-400 underline hover:text-emerald-300">
                  editor fatture
                </Link>{' '}
                integrato per generare una fattura PDF con GiroCode incorporato e scaricarla
                direttamente.
              </li>
              <li className="list-decimal">
                <strong className="text-slate-100">Inviare la fattura:</strong>{' '}
                Invia il PDF via e-mail al cliente o stampalo. Fatto.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Indicazioni obbligatorie sulle fatture in Italia
            </h2>
            <p>
              Per essere fiscalmente valida, una fattura emessa in Italia deve contenere
              determinati elementi obbligatori previsti dal D.P.R. 633/1972 e dalle successive
              normative. Il GiroCode non è tra questi, ma conoscere gli obblighi è fondamentale
              per ogni freelance:
            </p>
            <ul className="mt-3 space-y-2 pl-5">
              {[
                'Numero progressivo e data di emissione',
                'Dati completi del cedente/prestatore (ragione sociale o nome, indirizzo, partita IVA o codice fiscale)',
                'Dati completi del cessionario/committente (ragione sociale o nome, indirizzo, partita IVA o codice fiscale)',
                'Descrizione della prestazione o dei beni ceduti, con quantità e prezzo unitario',
                'Aliquota IVA applicata e relativo imponibile, oppure indicazione del regime speciale',
                'Totale da pagare e termini di pagamento',
                'Eventuale bollo virtuale (per fatture sopra 77,47 € se non si usa la fatturazione elettronica)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 list-none">
                  <span className="mt-1 flex-shrink-0 text-emerald-400">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Dal 2019 la fatturazione elettronica tramite Sistema di Interscambio (SdI) è
              obbligatoria per le operazioni tra soggetti residenti o stabiliti in Italia.
              Il GiroCode si integra perfettamente come elemento aggiuntivo sulla copia PDF
              inviata al cliente: non sostituisce gli obblighi fiscali, ma rende il pagamento
              più semplice una volta che la fattura è stata emessa correttamente.
            </p>
            <p className="mt-3">
              Il GiroCode non è un campo obbligatorio per legge, ma è un segno di
              professionalità che riduce i ritardi nei pagamenti e rafforza l&apos;immagine di
              un professionista moderno e attento all&apos;esperienza del cliente.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Regime Forfettario: cosa considerare in fattura
            </h2>
            <p>
              Molti freelance in Italia operano in regime forfettario – un regime agevolato
              con aliquota fissa e senza applicazione dell&apos;IVA sulle fatture. Anche in
              questo caso valgono regole specifiche che vanno rispettate:
            </p>
            <ul className="mt-3 space-y-2 pl-5">
              <li className="flex items-start gap-2 list-none">
                <span className="mt-1 flex-shrink-0 text-sky-400">→</span>
                <span>
                  <strong className="text-slate-100">Nessuna IVA in fattura:</strong> I
                  forfettari non applicano l&apos;IVA. In fattura va indicata la dicitura
                  «Operazione effettuata ai sensi dell&apos;art. 1, commi da 54 a 89, della
                  Legge n. 190/2014» oppure, in forma abbreviata, «Regime forfettario».
                </span>
              </li>
              <li className="flex items-start gap-2 list-none">
                <span className="mt-1 flex-shrink-0 text-sky-400">→</span>
                <span>
                  <strong className="text-slate-100">Nessuna ritenuta d&apos;acconto:</strong>{' '}
                  I forfettari non sono soggetti a ritenuta d&apos;acconto da parte dei
                  committenti. Il totale in fattura corrisponde all&apos;importo netto da
                  incassare.
                </span>
              </li>
              <li className="flex items-start gap-2 list-none">
                <span className="mt-1 flex-shrink-0 text-sky-400">→</span>
                <span>
                  <strong className="text-slate-100">GiroCode utile anche senza IVA:</strong>{' '}
                  Anche in regime forfettario il GiroCode ha pieno senso: l&apos;importo nel
                  codice QR corrisponde al totale da pagare, senza complicazioni aggiuntive.
                </span>
              </li>
            </ul>
            <p className="mt-4">
              Chi è in regime forfettario spesso gestisce da solo fatturazione e incassi. Un
              GiroCode sulla fattura riduce il tempo speso a ricordare ai clienti come pagare
              e a verificare che l&apos;importo sia corretto – tempo che in un regime con margini
              contenuti ha un valore ancora maggiore.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Consigli pratici: come incassare più velocemente
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: '1. Fatturare subito dopo la consegna del lavoro',
                  text: 'Ogni giorno di ritardo nell\'emissione della fattura allunga il tempo fino all\'incasso. Idealmente invia la fattura lo stesso giorno o entro 24 ore dalla consegna.',
                },
                {
                  title: '2. Impostare termini di pagamento brevi',
                  text: 'Invece di «pagabile entro 30 giorni», prova con 7 o 14 giorni. Con un GiroCode non è un problema per il cliente – il pagamento richiede pochi secondi.',
                },
                {
                  title: '3. Indicare sempre una causale di pagamento',
                  text: 'Il GiroCode precompila la causale – ad esempio «Fattura 2026-042». Questo facilita la riconciliazione contabile e riduce le richieste di chiarimento.',
                },
                {
                  title: '4. Sollecito gentile dopo 7 giorni',
                  text: 'Scaduto il termine, invia un promemoria cortese con la fattura in allegato – GiroCode incluso. Spesso il cliente ha semplicemente dimenticato.',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                  <h3 className="font-semibold text-slate-100">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">Conclusione</h2>
            <p>
              Il GiroCode è uno degli strumenti più semplici ed efficaci che un freelance può
              aggiungere alle proprie fatture. Riduce drasticamente la barriera al pagamento,
              elimina gli errori di IBAN e accelera l&apos;incasso – senza costi aggiuntivi né
              competenze tecniche particolari.
            </p>
            <p className="mt-3">
              Con il generatore gratuito su girocodegenerator.com e l&apos;editor fatture integrato,
              puoi creare il tuo primo GiroCode in meno di un minuto – inclusa la fattura PDF
              pronta da inviare via e-mail.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/it/rechnungs-editor"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
              >
                Crea la tua fattura con GiroCode →
              </Link>
              <Link
                href="/it"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-emerald-500/40 hover:text-emerald-300"
              >
                Al generatore GiroCode →
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
