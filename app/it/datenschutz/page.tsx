import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Informativa sulla Privacy – GiroCode Generator',
  description:
    'Informativa sulla privacy del GiroCode Generator: come trattiamo i tuoi dati (spoiler: quasi nessuno).',
  alternates: { canonical: 'https://www.girocodegenerator.com/it/datenschutz' },
};

export default function PrivacyPageIt() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="mb-4 text-2xl font-semibold tracking-tight text-slate-50">
          Informativa sulla Privacy
        </h1>
        <p className="mb-6 text-sm text-slate-400">
          Il GiroCode Generator elabora tutti i dati localmente nel tuo browser. Nessun dato
          bancario viene trasmesso ai nostri server.
        </p>
        <section className="space-y-4 text-sm text-slate-300">
          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">1. Titolare del trattamento</h2>
            <p>
              Kaleb Jahnke, Koppelstraße 6a, 27711 Osterholz-Scharmbeck
              <br />
              E-mail:{' '}
              <a
                href="mailto:jahnke.kaleb@gmail.com"
                className="text-sky-400 underline decoration-sky-500/60 hover:text-sky-300"
              >
                jahnke.kaleb@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              2. Principio di funzionamento dell&apos;applicazione
            </h2>
            <p>
              L&apos;applicazione web genera GiroCodes (SEPA-QR) e fatture PDF localmente nel tuo
              browser. I dati inseriti non vengono trasmessi al nostro server né archiviati da noi.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              3. Hosting &amp; log del server
            </h2>
            <p>
              Il sito è ospitato su Vercel (Vercel Inc., USA). I trasferimenti avvengono sulla base
              delle clausole contrattuali standard UE. Durante l&apos;accesso vengono elaborati dati
              tecnici necessari (es. indirizzo IP, data/ora, URL richiesto, user agent, referrer)
              nei log del server. Base giuridica: art. 6 (1) lett. f GDPR.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              4. Dati elaborati localmente
            </h2>
            <p>
              IBAN, importi, causali e dati di fatturazione restano esclusivamente nel tuo browser.
              Non raccogliamo né memorizziamo dati bancari o di pagamento sui nostri server.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              5. Risorse esterne (CDN)
            </h2>
            <p>
              Per la distribuzione di librerie possono essere utilizzati CDN. Durante il caricamento
              di tali file, l&apos;indirizzo IP può essere trasmesso ai fornitori CDN. Base
              giuridica: art. 6 (1) lett. f GDPR.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              6. Fallback QR esterno (opzionale)
            </h2>
            <p>
              Se attivi l&apos;opzione &quot;Fallback QR esterno&quot;, il testo EPC viene trasmesso
              al servizio esterno{' '}
              <span className="font-mono text-xs text-slate-400">api.qrserver.com</span>. Ciò può
              includere dati di pagamento (beneficiario, IBAN, importo, causale). Base giuridica:
              art. 6 (1) lett. a GDPR (consenso). Senza attivazione, non avviene alcun trasferimento.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">7. Comunicazione</h2>
            <p>
              Se ci contatti via e-mail, trattiamo i tuoi dati per gestire la richiesta (art. 6 (1)
              lett. b/f GDPR).
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">8. Newsletter</h2>
            <p>
              Se ti iscrivi alla nostra newsletter, trattiamo il tuo indirizzo e-mail tramite il
              servizio Brevo (Sendinblue SAS, Francia) per l&apos;invio di e-mail. Base giuridica:
              art. 6 (1) lett. a GDPR (consenso). Puoi cancellarti in qualsiasi momento.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">9. Diritti degli utenti</h2>
            <p>
              Hai i seguenti diritti:
              <br />- accesso, rettifica, cancellazione, limitazione (art. 15–18 GDPR)
              <br />- portabilità dei dati (art. 20 GDPR)
              <br />- opposizione al trattamento (art. 21 GDPR)
              <br />- diritto di reclamo presso un&apos;autorità di controllo
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              10. Trasferimenti verso paesi terzi
            </h2>
            <p>
              Vercel Inc. ha sede negli USA. I trasferimenti avvengono sulla base delle clausole
              contrattuali standard UE.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">11. Cookie / tracking</h2>
            <p>L&apos;app non utilizza cookie per analisi o marketing.</p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">12. Modifiche</h2>
            <p>
              Possiamo aggiornare questa informativa sulla privacy se cambiano funzionalità o
              requisiti legali.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
