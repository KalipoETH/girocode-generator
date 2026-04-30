import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Facturas como autónomo: GiroCode para pagos más rápidos',
  description:
    'Cómo los autónomos cobran más rápido con GiroCodes en sus facturas. Guía práctica con consejos sobre requisitos legales y generador de PDF gratuito.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/blog/freelancer-rechnungen-qr-code',
    languages: {
      de: 'https://www.girocodegenerator.com/blog/freelancer-rechnungen-qr-code',
      en: 'https://www.girocodegenerator.com/en/blog/freelancer-rechnungen-qr-code',
      fr: 'https://www.girocodegenerator.com/fr/blog/freelancer-rechnungen-qr-code',
      es: 'https://www.girocodegenerator.com/es/blog/freelancer-rechnungen-qr-code',
    },
  },
};

export default function FreelancerFacturasEsPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <nav className="mb-8 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/es" className="hover:text-slate-300">Inicio</Link>
          <span>/</span>
          <Link href="/es/blog" className="hover:text-slate-300">Blog</Link>
          <span>/</span>
          <span className="text-slate-400">GiroCode para autónomos</span>
        </nav>

        <header className="mb-10 space-y-4">
          <time dateTime="2026-03-01" className="text-xs text-slate-500">1 de marzo de 2026</time>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl lg:text-4xl">
            Facturas como autónomo: GiroCode para pagos más rápidos
          </h1>
          <p className="text-base leading-relaxed text-slate-400 md:text-lg">
            Plazos de pago demasiado largos, transferencias olvidadas, IBAN mal introducido –
            los autónomos conocen bien el problema. Un GiroCode en la factura puede cambiarlo todo.
          </p>
        </header>

        <article className="space-y-10 text-sm leading-relaxed text-slate-300 md:text-base">

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              ¿Por qué los autónomos esperan demasiado sus pagos?
            </h2>
            <p>
              Los trabajadores autónomos esperan de media más de 30 días para el cobro de una
              factura, a menudo superando los plazos acordados. La razón rara vez es mala fe:
              los clientes abren la factura, tienen dificultades para introducir correctamente
              el IBAN, o aplazan la transferencia porque cambiar a su aplicación bancaria les
              parece demasiado engorroso.
            </p>
            <p className="mt-3">
              El resultado: los autónomos persiguen los pagos, envían recordatorios y pierden
              tiempo valioso que debería ir a sus proyectos. Un simple código QR en la factura
              puede acelerar considerablemente este proceso.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              ¿Qué es un GiroCode y cómo ayuda a los autónomos?
            </h2>
            <p>
              El GiroCode – oficialmente un código EPC-QR según la norma del Consejo Europeo
              de Pagos – es un código QR que contiene todos los datos relevantes de la
              transferencia: nombre del beneficiario, IBAN, BIC (opcional), importe y
              concepto de pago. El pagador solo tiene que escanear el código con su aplicación
              bancaria y confirmar la transferencia con un toque. Sin teclear, sin errores.
            </p>
            <p className="mt-3">
              Para los autónomos, esto significa: el cliente abre la factura, escanea el
              código QR y transfiere inmediatamente. La barrera para el pago cae drásticamente
              porque el esfuerzo se reduce a unos pocos segundos.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Añadir un GiroCode a tu factura – Paso a paso
            </h2>
            <ol className="space-y-4 pl-5">
              <li className="list-decimal">
                <strong className="text-slate-100">Abrir el generador GiroCode:</strong>{' '}
                Visita{' '}
                <Link href="/es" className="text-emerald-400 underline hover:text-emerald-300">
                  girocodegenerator.com
                </Link>{' '}
                – gratuito, sin registro.
              </li>
              <li className="list-decimal">
                <strong className="text-slate-100">Introducir tus datos:</strong>{' '}
                Escribe tu nombre o el nombre de tu empresa, tu IBAN, el importe de la factura
                y el concepto (p. ej. «Factura 2026-042»). El BIC es opcional.
              </li>
              <li className="list-decimal">
                <strong className="text-slate-100">Generar el código QR:</strong>{' '}
                Con un clic en «Crear GiroCode», el código QR se genera instantáneamente en
                tu navegador – localmente, sin transmisión al servidor.
              </li>
              <li className="list-decimal">
                <strong className="text-slate-100">Crear factura PDF:</strong>{' '}
                Usa la función de facturación integrada para generar una factura PDF con
                GiroCode incorporado y descargarla directamente.
              </li>
              <li className="list-decimal">
                <strong className="text-slate-100">Enviar la factura:</strong>{' '}
                Envía el PDF por correo electrónico a tu cliente o imprímelo. Listo.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Consejos prácticos: cómo cobrar más rápido
            </h2>
            <div className="space-y-4">
              {[
                { title: '1. Facturar inmediatamente tras entregar el trabajo', text: 'Cada día que esperas para enviar la factura alarga el tiempo hasta el cobro. Idealmente envía la factura el mismo día o en las 24 horas siguientes.' },
                { title: '2. Fijar plazos de pago cortos', text: 'En lugar de «pagadero en 30 días», prueba 7 o 14 días. Con un GiroCode esto no es ningún problema para el cliente.' },
                { title: '3. Indicar siempre un concepto de pago', text: 'El GiroCode rellena previamente el concepto – p. ej. «Factura 2026-042». Esto facilita la conciliación contable en tu lado.' },
                { title: '4. Recordatorio amable después de 7 días', text: 'Una vez vencido el plazo, envía un recordatorio amable con la factura adjunta – GiroCode incluido. A menudo el cliente simplemente lo ha olvidado.' },
                { title: '5. Ofrecer descuento por pronto pago', text: 'Un pequeño descuento (p. ej. 2% por pago en 7 días) puede incentivar a los clientes a pagar antes. El GiroCode hace la transferencia tan sencilla que la mayoría aprovechará la oferta.' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                  <h3 className="font-semibold text-slate-100">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">Conclusión</h2>
            <p>
              El GiroCode es una de las herramientas más sencillas y efectivas que un autónomo
              puede añadir a sus facturas. Reduce drásticamente la barrera para el pago,
              elimina errores de IBAN y acelera el cobro – sin coste adicional ni esfuerzo técnico.
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
