import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'La historia del GiroCode – Del papel al escáner QR',
  description:
    'Cómo se creó el GiroCode: desde los inicios del estándar EPC en 2012 hasta su adopción generalizada en Alemania. La historia de la evolución del SEPA-QR.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/blog/geschichte-des-girocodes',
    languages: {
      de: 'https://www.girocodegenerator.com/blog/geschichte-des-girocodes',
      en: 'https://www.girocodegenerator.com/en/blog/geschichte-des-girocodes',
      fr: 'https://www.girocodegenerator.com/fr/blog/geschichte-des-girocodes',
      es: 'https://www.girocodegenerator.com/es/blog/geschichte-des-girocodes',
    },
  },
};

export default function HistoriaGiroCodeEsPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <nav className="mb-8 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/es" className="hover:text-slate-300">Inicio</Link>
          <span>/</span>
          <Link href="/es/blog" className="hover:text-slate-300">Blog</Link>
          <span>/</span>
          <span className="text-slate-400">Historia del GiroCode</span>
        </nav>

        <header className="mb-10 space-y-4">
          <time dateTime="2026-03-15" className="text-xs text-slate-500">15 de marzo de 2026</time>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl lg:text-4xl">
            La historia del GiroCode – Del papel al escáner QR
          </h1>
          <p className="text-base leading-relaxed text-slate-400 md:text-lg">
            El GiroCode aparece hoy como algo natural en facturas y documentos de pago. Sin
            embargo, su camino desde la idea hasta la adopción generalizada tardó más de una
            década.
          </p>
        </header>

        <article className="space-y-10 text-sm leading-relaxed text-slate-300 md:text-base">

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Los orígenes: SEPA y el Consejo Europeo de Pagos
            </h2>
            <p>
              Para entender la historia del GiroCode, hay que examinar primero el contexto más
              amplio: la creación de la Zona Única de Pagos en Euros, SEPA (Single Euro
              Payments Area). Desde principios de los años 2000, los bancos europeos
              trabajaban para hacer las transferencias transfronterizas dentro de Europa tan
              sencillas como las nacionales.
            </p>
            <p className="mt-3">
              En 2002, las asociaciones bancarias europeas fundaron el Consejo Europeo de
              Pagos (EPC), que asumió la coordinación de esta armonización. El EPC desarrolló
              normas comunes para las transferencias SEPA (SCT) y los adeudos directos SEPA
              (SDD). Estas normas crearon la base técnica sobre la que se construiría
              posteriormente el GiroCode.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              2012: El EPC desarrolla la norma QR
            </h2>
            <p>
              En 2012, el Consejo Europeo de Pagos publicó por primera vez el documento
              «Quick Response Code – Guidelines to Enable the Data Capture for the Initiation
              of a SCT». Este documento definía cómo debía estructurarse un código QR para
              transmitir toda la información necesaria para una transferencia SEPA.
            </p>
            <p className="mt-3">
              La especificación técnica era concisa pero precisa: el código QR contiene un
              payload de texto orientado a líneas en formato UTF-8. La primera línea contiene
              siempre «BCD» (Business Contact Details), seguido del número de versión,
              el identificador del juego de caracteres, el identificador de transacción «SCT»,
              el BIC, el nombre del beneficiario, el IBAN, el importe y el concepto de pago.
            </p>
            <p className="mt-3">
              Esta norma – hoy conocida como EPC069-12 – es válida en su forma actual desde
              la versión 2.1 (2019) y ha permanecido estable desde entonces.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              2016–2018: Introducción en Alemania
            </h2>
            <p>
              En Alemania, la introducción práctica del código EPC-QR bajo el nombre de marca
              «GiroCode» comenzó entre 2016 y 2018. El comité bancario alemán coordinó la
              introducción y eligió el nombre «GiroCode» – basado en el término alemán
              «Girokonto» (cuenta corriente), con el que se pretendía subrayar la relevancia
              cotidiana del código.
            </p>
            <p className="mt-3">
              El grupo Sparkasse y las Volksbanken und Raiffeisenbanken fueron de los primeros
              grupos bancarios alemanes en equipar sus aplicaciones para escanear GiroCodes.
              Como estos dos grupos sirven conjuntamente a más de la mitad de todas las cuentas
              corrientes alemanas, la cobertura básica quedó garantizada desde el principio.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              GiroCode vs. otras normas de pago QR en el mundo
            </h2>
            <div className="mt-4 space-y-3">
              {[
                { region: 'Austria – Stuzza-QR', text: 'Austria también utiliza la norma EPC, pero lo llama Stuzza-QR. Técnicamente es totalmente compatible con el GiroCode alemán.' },
                { region: 'Suiza – QR-Bill', text: 'En 2020, Suiza reemplazó los formularios de pago naranja y rojo por la factura QR (QR-Bill), basada en una norma suiza pero estructurada de forma similar al EPC-QR.' },
                { region: 'China – WeChat Pay / Alipay QR', text: 'Los sistemas de superaplicaciones chinos también usan códigos QR, pero estos están vinculados a sistemas propietarios y no son interoperables con las normas bancarias europeas.' },
                { region: 'India – UPI QR', text: 'La Interfaz de Pagos Unificada (UPI) de India es una norma independiente de plataformas con códigos QR, neutral respecto a los bancos, pero limitada al mercado indio.' },
              ].map((item) => (
                <div key={item.region} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                  <h3 className="font-semibold text-slate-100">{item.region}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">Conclusión</h2>
            <p>
              Desde el documento EPC de 2012 hasta la integración en la app de Sparkasse y
              el uso omnipresente en facturas hoy en día – el GiroCode ha recorrido un camino
              notable. Es el ejemplo perfecto de una estandarización europea que realmente
              ha llegado a la vida cotidiana.
            </p>
            <div className="mt-6">
              <Link
                href="/es"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
              >
                Crea tu GiroCode gratis →
              </Link>
            </div>
          </section>
        </article>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <Link href="/es/blog" className="text-sm text-slate-400 hover:text-slate-200">
            ← Volver al blog
          </Link>
        </div>
      </div>
    </main>
  );
}
