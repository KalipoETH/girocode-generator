import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre nosotros – GiroCode Generator',
  description:
    'Quién está detrás de GiroCode Generator: el proyecto de Kaleb Jahnke en Osterholz-Scharmbeck – gratuito, local y respetuoso con la privacidad.',
  alternates: { canonical: 'https://www.girocodegenerator.com/es/ueber-uns' },
};

export default function SobreNosotrosPageEs() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-12">
        <header className="mb-10 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Sobre este proyecto
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Sobre GiroCode Generator
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              GiroCode Generator es una herramienta en línea gratuita que he desarrollado yo, Kaleb
              Jahnke, desde Osterholz-Scharmbeck. La idea surge de una necesidad sencilla: ofrecer a
              autónomos y pequeños negocios una forma fácil y respetuosa con la privacidad de crear
              códigos SEPA-QR para sus facturas – sin registro, sin envío de datos, sin coste.
            </p>
          </div>
        </header>

        <section className="mb-10 space-y-4">
          <h2 className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            Qué hace especial a esta herramienta
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 shadow-sm shadow-black/30">
              <div className="mb-2 text-2xl" aria-hidden="true">
                💻
              </div>
              <h3 className="mb-1 text-sm font-semibold text-slate-50">100 % local</h3>
              <p className="text-xs text-slate-300">
                Todos los cálculos se realizan directamente en tu navegador. Tus datos bancarios y
                de facturación nunca se envían a un servidor.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 shadow-sm shadow-black/30">
              <div className="mb-2 text-2xl" aria-hidden="true">
                🔓
              </div>
              <h3 className="mb-1 text-sm font-semibold text-slate-50">
                Gratis y sin registro
              </h3>
              <p className="text-xs text-slate-300">
                Sin cuenta, sin suscripción y sin costes ocultos. Simplemente abre la web y empieza.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 shadow-sm shadow-black/30">
              <div className="mb-2 text-2xl" aria-hidden="true">
                ✅
              </div>
              <h3 className="mb-1 text-sm font-semibold text-slate-50">Compatible con EPC/SEPA</h3>
              <p className="text-xs text-slate-300">
                El generador crea códigos GiroCode ajustados al estándar EPC, compatibles con la
                mayoría de apps bancarias.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            ¿Para quién es GiroCode Generator?
          </h2>
          <p className="text-sm text-slate-300 md:text-base">
            GiroCode Generator está pensado para cualquiera que quiera simplificar los pagos y
            reducir errores sin desarrollar su propia solución técnica.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300 md:text-base">
            <li>autónomos que envían facturas con código QR,</li>
            <li>pequeñas empresas,</li>
            <li>asociaciones que cobran cuotas,</li>
            <li>personas particulares que quieren solicitar pagos.</li>
          </ul>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            Contacto
          </h2>
          <p className="text-sm text-slate-300 md:text-base">
            ¿Tienes preguntas, comentarios o has encontrado un error? Escríbeme a{' '}
            <a
              href="mailto:jahnke.kaleb@gmail.com"
              className="text-sky-400 underline decoration-sky-500/70 underline-offset-2 hover:text-sky-300"
            >
              jahnke.kaleb@gmail.com
            </a>
            .
          </p>
        </section>

        <p className="text-xs text-slate-500">
          Este proyecto evoluciona de forma continua. Las sugerencias de mejora son bienvenidas.
        </p>
      </div>
    </main>
  );
}

