export default function ImpressumPageEn() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="mb-4 text-2xl font-semibold tracking-tight text-slate-50">
          Imprint
        </h1>
        <section className="space-y-4 text-sm text-slate-300">
          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">Service provider</h2>
            <p>
              Kaleb Jahnke
              <br />
              Koppelstraße 6a
              <br />
              27711 Osterholz-Scharmbeck
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">Contact</h2>
            <p>
              Email:{' '}
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
              Responsible according to German law (§ 18 Abs. 2 MStV)
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
            <h2 className="mb-1 text-base font-semibold text-slate-50">Liability for content</h2>
            <p>
              As a service provider we are responsible for our own content on these pages in
              accordance with § 7 Abs. 1 TMG under general law. According to §§ 8 to 10 TMG, we are
              however not obliged to monitor transmitted or stored third-party information or to
              investigate circumstances indicating unlawful activity.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">Liability for links</h2>
            <p>
              Our offer may contain links to external websites of third parties, whose content we
              cannot influence. The respective provider or operator of the pages is always
              responsible for the content of the linked pages.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">Copyright</h2>
            <p>
              The content and works created by the site operator on these pages are subject to
              German copyright law. Contributions by third parties are marked as such.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

