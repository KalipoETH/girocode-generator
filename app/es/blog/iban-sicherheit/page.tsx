import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Seguridad IBAN: lo que necesitas saber sobre las transferencias',
  description:
    '¿Es seguro compartir el IBAN? ¿Qué puede hacer alguien con tu IBAN? Todo sobre la seguridad IBAN, la privacidad del GiroCode y las transferencias seguras.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/blog/iban-sicherheit',
    languages: {
      de: 'https://www.girocodegenerator.com/blog/iban-sicherheit',
      en: 'https://www.girocodegenerator.com/en/blog/iban-sicherheit',
      fr: 'https://www.girocodegenerator.com/fr/blog/iban-sicherheit',
      es: 'https://www.girocodegenerator.com/es/blog/iban-sicherheit',
    },
  },
};

export default function IbanSeguridadEsPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <nav className="mb-8 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/es" className="hover:text-slate-300">Inicio</Link>
          <span>/</span>
          <Link href="/es/blog" className="hover:text-slate-300">Blog</Link>
          <span>/</span>
          <span className="text-slate-400">Seguridad IBAN</span>
        </nav>

        <header className="mb-10 space-y-4">
          <time dateTime="2026-04-01" className="text-xs text-slate-500">1 de abril de 2026</time>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl lg:text-4xl">
            Seguridad IBAN: lo que necesitas saber sobre las transferencias
          </h1>
          <p className="text-base leading-relaxed text-slate-400 md:text-lg">
            Muchas personas dudan antes de compartir su IBAN. ¿Qué puede hacer realmente
            alguien con tu IBAN – y qué no puede hacer?
          </p>
        </header>

        <article className="space-y-10 text-sm leading-relaxed text-slate-300 md:text-base">

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              ¿Qué puede hacer alguien con mi IBAN?
            </h2>
            <p>
              La respuesta corta: no mucho que pueda perjudicarte – al menos no sin tu
              conocimiento. El IBAN (International Bank Account Number) identifica tu cuenta
              bancaria de forma única, igual que una dirección postal identifica tu domicilio.
              Y al igual que con una dirección: cualquiera que quiera enviarte dinero la
              necesita.
            </p>
            <ul className="mt-3 space-y-2">
              {[
                { label: 'Transferirte dinero', safe: true, text: 'Cualquiera puede hacerte una transferencia – ese es el propósito del IBAN y no es ningún problema de seguridad.' },
                { label: 'Iniciar un adeudo directo SEPA (con restricciones)', safe: false, text: 'Un adeudo directo SEPA requiere adicionalmente una autorización escrita. Sin esta autorización, un cargo no es posible – y si ocurre de todos modos, el banco debe revertirlo.' },
                { label: 'Crear un GiroCode', safe: true, text: 'Alguien podría crear un GiroCode con tu IBAN – pero esto solo significa que puede solicitarte un pago.' },
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
              ¿Es seguro un GiroCode?
            </h2>
            <div className="mt-4 space-y-3">
              {[
                { title: 'Ningún cargo posible', text: 'Un GiroCode es una solicitud de pago, no una autorización de adeudo. No contiene información que permita realizar un cargo.' },
                { title: 'Confirmación requerida por el pagador', text: 'Aunque alguien escanee un GiroCode, debe confirmar activamente la transferencia con un TAN, Face ID o huella dactilar. No es posible ningún cargo automático.' },
                { title: 'No hay datos secretos en el código', text: 'Un GiroCode solo contiene datos que ya publicas en una factura: nombre, IBAN, importe, concepto. Sin PIN, sin contraseñas.' },
                { title: 'Norma EPC con corrección de errores', text: 'El código QR utiliza el nivel de corrección de errores M, lo que significa que sigue siendo legible de forma fiable incluso con pequeños daños.' },
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
              Phishing por código QR (Quishing) – cómo detectarlo
            </h2>
            <ul className="mt-3 space-y-3">
              {[
                { icon: '🔍', tip: 'Verificar los datos del beneficiario', text: 'Tras escanear, comprueba siempre el nombre e IBAN del beneficiario prellenados en tu aplicación bancaria antes de confirmar.' },
                { icon: '📌', tip: 'Desconfiar de las pegatinas físicas', text: 'Los códigos QR que parecen ser pegatinas pegadas sobre otros códigos pueden haber sido manipulados. Comprueba si el código está impreso directamente o pegado encima.' },
                { icon: '🏦', tip: 'Abrir directamente la aplicación bancaria', text: 'Abre siempre tu aplicación bancaria directamente – nunca a través de un enlace en un correo electrónico o SMS. Escanea el GiroCode solo desde la aplicación.' },
                { icon: '📧', tip: 'Verificar las facturas por correo electrónico', text: 'Para facturas por correo electrónico: comprueba que el remitente y el contenido correspondan a la factura esperada. En caso de duda, contacta al remitente por teléfono.' },
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
            <h2 className="mb-4 text-xl font-semibold text-slate-50">Conclusión</h2>
            <p>
              Compartir el IBAN es mucho más seguro de lo que muchos creen. Para una
              transferencia regular hacia ti es necesario – y no permite ningún cargo sin tu
              autorización. Un GiroCode con tu IBAN es una herramienta práctica y segura para
              la facturación moderna.
            </p>
            <div className="mt-6">
              <Link
                href="/es"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
              >
                Crear un GiroCode seguro ahora →
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
