import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.girocodegenerator.com/es/impressum' },
};

export default function ImpressumPageEs() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="mb-4 text-2xl font-semibold tracking-tight text-slate-50">
          Aviso legal
        </h1>
        <section className="space-y-4 text-sm text-slate-300">
          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">Responsable del sitio</h2>
            <p>
              Kaleb Jahnke
              <br />
              Koppelstraße 6a
              <br />
              27711 Osterholz-Scharmbeck
              <br />
              Alemania
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">Contacto</h2>
            <p>
              Correo electrónico:{' '}
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
              Responsable según la legislación alemana (§ 18 Abs. 2 MStV)
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
            <h2 className="mb-1 text-base font-semibold text-slate-50">Responsabilidad por contenidos</h2>
            <p>
              Como proveedor de servicios, somos responsables de nuestros propios contenidos en estas
              páginas conforme al § 7 Abs. 1 TMG. Según §§ 8 a 10 TMG, no estamos obligados a
              supervisar la información de terceros transmitida o almacenada ni a investigar hechos
              que indiquen una actividad ilegal.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">Enlaces externos</h2>
            <p>
              Nuestra oferta puede contener enlaces a sitios web externos de terceros, cuyo contenido
              no controlamos. El responsable del contenido de las páginas enlazadas es siempre el
              proveedor u operador correspondiente.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">Derechos de autor</h2>
            <p>
              Los contenidos y obras creados por el operador del sitio en estas páginas están
              sujetos a la legislación alemana sobre derechos de autor. Las contribuciones de
              terceros se identifican como tales.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

