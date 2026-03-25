export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="mb-4 text-2xl font-semibold tracking-tight text-slate-50">
          Datenschutzerklärung
        </h1>
        <section className="space-y-4 text-sm text-slate-300">
          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              1. Verantwortlicher
            </h2>
            <p>
              Kaleb Jahnke, Koppelstraße 6a, 27711 Osterholz-Scharmbeck
              <br />
              E-Mail:{" "}
              <a
                href="mailto:jahnke.kaleb@gmail.com"
                className="text-sky-400 hover:text-sky-300 underline decoration-sky-500/60"
              >
                jahnke.kaleb@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              2. Grundprinzip der Anwendung
            </h2>
            <p>
              Die Web-App generiert GiroCodes (SEPA-QR) und Rechnungs-PDFs lokal im Browser. Die
              Eingaben werden nicht an unseren Server übertragen oder gespeichert.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              3. Hosting &amp; Server-Logs
            </h2>
            <p>
              Die Website wird über Vercel (Vercel Inc., USA) gehostet. Übermittlungen erfolgen auf
              Basis der EU-Standardvertragsklauseln. Beim Aufruf werden technisch notwendige
              Verbindungsdaten (z. B. IP-Adresse, Datum/Uhrzeit, angeforderte URL, User-Agent,
              Referer) in Server-Logs verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              4. Externe Ressourcen (CDNs)
            </h2>
            <p>
              Zur Auslieferung von Bibliotheken können CDNs eingesetzt werden. Beim Laden dieser
              Dateien kann die IP-Adresse an die CDN-Anbieter übermittelt werden. Rechtsgrundlage:
              Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              5. Optionaler externer QR-Fallback
            </h2>
            <p>
              Aktivieren Sie die Option „Externer QR-Fallback", wird der EPC-Text an den externen
              QR-Dienst{" "}
              <span className="font-mono text-xs text-slate-400">api.qrserver.com</span>{" "}
              übertragen. Dies kann Zahldaten (Empfänger, IBAN, Betrag, Verwendungszweck)
              enthalten. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Ohne
              Aktivierung findet keine Übertragung statt.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">6. Kommunikation</h2>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung
              der Anfrage (Art. 6 Abs. 1 lit. b/f DSGVO).
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">7. Ihre Rechte</h2>
            <p>
              Sie haben folgende Rechte:
              <br />- Auskunft, Berichtigung, Löschung, Einschränkung (Art. 15–18 DSGVO)
              <br />- Datenübertragbarkeit (Art. 20 DSGVO)
              <br />- Widerspruch gegen Verarbeitungen (Art. 21 DSGVO)
              <br />- Beschwerderecht bei einer Aufsichtsbehörde
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              8. Drittlandübermittlungen
            </h2>
            <p>
              Vercel Inc. hat seinen Sitz in den USA. Die Übermittlung erfolgt auf Basis der
              EU-Standardvertragsklauseln.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              9. Cookies / Tracking
            </h2>
            <p>Die App setzt keine Cookies zu Analyse- oder Marketingzwecken.</p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">10. Änderungen</h2>
            <p>
              Wir passen diese Datenschutzerklärung an, wenn sich Funktionalitäten oder
              Rechtslagen ändern.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

