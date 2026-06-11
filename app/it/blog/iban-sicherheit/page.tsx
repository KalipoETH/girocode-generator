import type { Metadata } from 'next';
import Link from 'next/link';
import { AuthorBox, AuthorBoxEnd } from '../../../../components/AuthorBox';

export const metadata: Metadata = {
  title: 'Sicurezza IBAN: cosa sapere sui bonifici',
  description:
    'È sicuro condividere l\'IBAN? Cosa può fare qualcuno con il tuo IBAN? Tutto sulla sicurezza IBAN, la privacy del GiroCode e i bonifici sicuri.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/it/blog/iban-sicherheit',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/blog/iban-sicherheit',
      de: 'https://www.girocodegenerator.com/blog/iban-sicherheit',
      en: 'https://www.girocodegenerator.com/en/blog/iban-sicherheit',
      fr: 'https://www.girocodegenerator.com/fr/blog/iban-sicherheit',
      es: 'https://www.girocodegenerator.com/es/blog/iban-sicherheit',
      it: 'https://www.girocodegenerator.com/it/blog/iban-sicherheit',
    },
  },
};

export default function IbanSicurezzaItPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <nav className="mb-8 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/it" className="hover:text-slate-300">Home</Link>
          <span>/</span>
          <Link href="/it/blog" className="hover:text-slate-300">Blog</Link>
          <span>/</span>
          <span className="text-slate-400">Sicurezza IBAN</span>
        </nav>

        <header className="mb-10 space-y-4">
          <time dateTime="2026-04-01" className="text-xs text-slate-500">1 aprile 2026</time>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl lg:text-4xl">
            Sicurezza IBAN: cosa sapere sui bonifici
          </h1>
          <p className="text-base leading-relaxed text-slate-400 md:text-lg">
            Molte persone esitano prima di condividere il proprio IBAN. Cosa può fare
            realmente qualcuno con il tuo IBAN – e cosa non può fare?
          </p>
        </header>

        <AuthorBox locale="it" publishedDate="1 aprile 2026" updatedDate="1 aprile 2026" />

        <article className="space-y-10 text-sm leading-relaxed text-slate-300 md:text-base">

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Cosa può fare qualcuno con il mio IBAN?
            </h2>
            <p>
              La risposta breve: non molto che possa danneggiarti – almeno non senza la tua
              conoscenza. L&apos;IBAN (International Bank Account Number) identifica il tuo conto
              bancario in modo univoco, proprio come un indirizzo postale identifica la tua
              abitazione. E come con un indirizzo: chiunque voglia inviarti denaro ne ha bisogno.
            </p>
            <p className="mt-3">Cosa può fare qualcuno con il tuo IBAN:</p>
            <ul className="mt-3 space-y-2">
              {[
                { label: 'Inviarti denaro', safe: true, text: 'Chiunque può effettuare un bonifico sul tuo conto – questo è lo scopo dell\'IBAN e non rappresenta un problema di sicurezza.' },
                { label: 'Avviare un addebito diretto SEPA (con limitazioni)', safe: false, text: 'Per un addebito diretto SEPA è necessaria un\'autorizzazione scritta (mandato). Senza questo mandato, un addebito non è possibile – e se avviene comunque, la banca deve stornarlo.' },
                { label: 'Creare un GiroCode', safe: true, text: 'Qualcuno potrebbe creare un GiroCode con il tuo IBAN – ma questo significa solo che può richiederti un pagamento, non prelevare denaro dal tuo conto.' },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3 list-none rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                  <span className={`mt-0.5 flex-shrink-0 font-bold ${item.safe ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {item.safe ? '✓' : '⚠'}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-100">{item.label}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Bonifico vs. addebito diretto – la differenza
            </h2>
            <p>
              Questa distinzione è fondamentale e spesso fraintesa:
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-800/50 bg-emerald-900/10 p-5">
                <h3 className="font-semibold text-emerald-300">Bonifico SEPA</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">→</span>
                    Avviato attivamente dal pagatore
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">→</span>
                    Il beneficiario non ha controllo sull&apos;operazione
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">→</span>
                    Serve solo l&apos;IBAN del beneficiario
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">→</span>
                    Sicuro e standardizzato
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-amber-800/50 bg-amber-900/10 p-5">
                <h3 className="font-semibold text-amber-300">Addebito diretto SEPA</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">→</span>
                    Prelevato dal creditore
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">→</span>
                    Richiede un mandato scritto
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">→</span>
                    Servono IBAN, mandato e ID creditore
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">→</span>
                    Rimborsabile entro 8 settimane
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-4">
              Un addebito diretto SEPA senza mandato valido è un caso di storno e può essere
              sanzionato. La banca deve stornare un addebito non autorizzato entro 8 settimane
              (13 mesi in assenza di mandato). In pratica, il rischio di un addebito non
              autorizzato è quindi molto basso.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Il GiroCode è sicuro?
            </h2>
            <p>Sì – un GiroCode è sicuro per diversi motivi:</p>
            <div className="mt-4 space-y-3">
              {[
                { title: 'Nessun addebito possibile', text: 'Un GiroCode è una richiesta di pagamento, non un mandato di addebito diretto. Non contiene informazioni che consentirebbero un prelievo dal conto.' },
                { title: 'Conferma richiesta dal pagatore', text: 'Anche se qualcuno scansiona un GiroCode, deve confermare attivamente il bonifico con TAN, Face ID o impronta digitale. Nessun addebito automatico è possibile.' },
                { title: 'Nessun dato segreto nel codice', text: 'Un GiroCode contiene solo dati che pubblichi comunque su una fattura: nome, IBAN, importo, causale. Niente PIN, niente password.' },
                { title: 'Standard EPC con correzione errori', text: 'Il codice QR utilizza il livello di correzione errori M, il che significa che resta leggibile in modo affidabile anche con piccoli danni.' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                  <h3 className="font-semibold text-slate-100">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Phishing tramite codice QR (Quishing) – come riconoscerlo
            </h2>
            <p>
              Esiste tuttavia una minaccia reale: il cosiddetto Quishing (QR-code phishing).
              In questi casi, i truffatori sostituiscono codici QR legittimi con codici
              manipolati che reindirizzano a siti di phishing o a beneficiari falsi.
            </p>
            <p className="mt-3">Come proteggersi dal Quishing:</p>
            <ul className="mt-3 space-y-3">
              {[
                { icon: '🔍', tip: 'Verificare i dati del beneficiario', text: 'Dopo la scansione, controlla sempre il nome e l\'IBAN del beneficiario precompilati nell\'app bancaria prima di confermare.' },
                { icon: '📌', tip: 'Diffidare degli adesivi fisici', text: 'I codici QR che sembrano adesivi incollati sopra altri codici potrebbero essere stati manomessi. Verifica se il codice è stampato direttamente o applicato successivamente.' },
                { icon: '🏦', tip: 'Aprire direttamente l\'app bancaria', text: 'Apri sempre la tua app bancaria direttamente – mai tramite un link in un\'e-mail o SMS. Scansiona il GiroCode solo dall\'interno dell\'app.' },
                { icon: '📧', tip: 'Verificare le fatture via e-mail', text: 'Per le fatture via e-mail: controlla che mittente e contenuto corrispondano alla fattura attesa. In caso di dubbio, contatta il mittente per telefono.' },
              ].map((item) => (
                <li key={item.tip} className="flex items-start gap-3 list-none">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-slate-100">{item.tip}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Privacy nel generatore GiroCode
            </h2>
            <p>
              Chi usa il GiroCode Generator su girocodegenerator.com può stare tranquillo: tutti
              i dati inseriti – IBAN, importo, nome, causale – vengono elaborati esclusivamente
              in locale nel browser. Non avviene alcuna trasmissione ai server, nessun logging,
              nessuna memorizzazione dei dati.
            </p>
            <div className="mt-4 rounded-xl border border-emerald-800/50 bg-emerald-900/10 p-5">
              <h3 className="font-semibold text-emerald-300">Come funziona l&apos;elaborazione locale</h3>
              <p className="mt-2 text-sm text-slate-300">
                Il codice QR viene generato interamente nel browser tramite una libreria
                JavaScript. Ciò significa: anche senza connessione di rete (modalità offline),
                il generatore continua a funzionare. I tuoi dati bancari non lasciano mai il tuo
                computer o dispositivo.
              </p>
            </div>
            <p className="mt-4">
              Questa architettura non è solo rispettosa della privacy, ma è anche conforme al
              GDPR: poiché non vengono elaborati o memorizzati dati personali sui server, i
              requisiti più stringenti del regolamento non si applicano nemmeno.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Consigli per bonifici sicuri
            </h2>
            <div className="space-y-3">
              {[
                { nr: '1', title: 'Verificare l\'IBAN prima del bonifico', text: 'Confronta le prime e le ultime quattro cifre dell\'IBAN con il documento originale. I truffatori spesso modificano solo poche cifre.' },
                { nr: '2', title: 'Controllare le modifiche all\'importo', text: 'Le app bancarie mostrano l\'importo precompilato. Modificalo solo consapevolmente – e verifica che corrisponda all\'importo della fattura.' },
                { nr: '3', title: 'Segnalare richieste di pagamento sospette', text: 'Se ricevi un codice QR che ti chiede un pagamento inaspettato, segnalalo alla tua banca e presenta denuncia.' },
                { nr: '4', title: 'Attivare l\'autenticazione a due fattori', text: 'Assicurati che il tuo home banking sia protetto con app TAN o conferma biometrica. Così nessuno può bonificare senza il tuo intervento.' },
                { nr: '5', title: 'Attivare le notifiche sulle transazioni', text: 'Abilita le notifiche push per ogni movimento sul conto. Così rilevi subito eventuali addebiti non autorizzati.' },
              ].map((item) => (
                <div key={item.nr} className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-bold text-emerald-300">
                    {item.nr}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-100">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">Conclusione</h2>
            <p>
              Condividere l&apos;IBAN è molto più sicuro di quanto molti pensino. Per un
              bonifico regolare verso di te è necessario – e non consente alcun addebito senza
              il tuo mandato. Un GiroCode con il tuo IBAN è uno strumento pratico e sicuro per
              la fatturazione moderna.
            </p>
            <p className="mt-3">
              L&apos;unico pericolo reale proviene dai codici QR manipolati (Quishing) – e può
              essere ridotto con semplici precauzioni: verificare i dati del beneficiario,
              aprire l&apos;app bancaria direttamente e restare scettici di fronte a richieste
              di pagamento inaspettate.
            </p>
            <div className="mt-6">
              <Link
                href="/it"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
              >
                Crea un GiroCode sicuro ora →
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
