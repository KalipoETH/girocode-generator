export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="mb-4 text-2xl font-semibold tracking-tight text-slate-50">
          Impressum
        </h1>
        <section className="space-y-4 text-sm text-slate-300">
          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              Dienstanbieter
            </h2>
            <p>
              Kaleb Jahnke
              <br />
              Koppelstraße 6a
              <br />
              27711 Osterholz-Scharmbeck
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              Kontakt
            </h2>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:jahnke.kaleb@gmail.com"
                className="text-sky-400 hover:text-sky-300 underline decoration-sky-500/60"
              >
                jahnke.kaleb@gmail.com
              </a>
            </p>
            <p className="mt-1">
              Kontaktformular:{" "}
              <a
                href="https://www.girocodegenerator.com/kontakt"
                className="text-sky-400 hover:text-sky-300 underline decoration-sky-500/60"
              >
                https://www.girocodegenerator.com/kontakt
              </a>
            </p>
            <p className="mt-1">
              Wir bemühen uns, Anfragen innerhalb von 48 Stunden zu beantworten.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              Verantwortlich nach § 18 Abs. 2 MStV
            </h2>
            <p>
              Kaleb Jahnke
              <br />
              Koppelstraße 6a
              <br />
              27711 Osterholz-Scharmbeck
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
              diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
              10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte
              oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten
              ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als
              solche gekennzeichnet.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

