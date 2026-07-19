import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  alternates: { canonical: `${SITE_URL}/es/datenschutz` },
};

export default function PrivacyPageEs() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="mb-4 text-2xl font-semibold tracking-tight text-slate-50">
          Política de privacidad
        </h1>
        <section className="space-y-4 text-sm text-slate-300">
          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">1. Responsable</h2>
            <p>
              Kaleb Jahnke, Koppelstraße 6a, 27711 Osterholz-Scharmbeck
              <br />
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
              2. Principio básico de la aplicación
            </h2>
            <p>
              La aplicación web genera códigos GiroCode (SEPA-QR) y facturas PDF de forma local en tu
              navegador. Los datos introducidos no se transmiten a nuestro servidor ni se almacenan.
              Los datos de uso anonimizados (páginas vistas, rendimiento) se tratan de forma
              independiente conforme al §9.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              3. Alojamiento y registros del servidor
            </h2>
            <p>
              El sitio se aloja con Vercel (Vercel Inc., EE. UU.). Las transmisiones se basan en las
              cláusulas contractuales tipo de la UE. Cuando accedes al sitio, se procesan datos
              técnicos (dirección IP, fecha/hora, URL solicitada, user agent, referrer) en registros
              de servidor. Base jurídica: art. 6 (1) f) RGPD.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              4. Recursos externos (CDN)
            </h2>
            <p>
              Para entregar bibliotecas, pueden utilizarse redes de distribución de contenidos
              (CDN). Al cargar estos archivos, tu dirección IP puede transmitirse a los proveedores
              del CDN. Base jurídica: art. 6 (1) f) RGPD.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              5. Opción de fallback de QR externo
            </h2>
            <p>
              Si activas la opción de «fallback de QR externo», el texto EPC se envía al servicio
              externo{' '}
              <span className="font-mono text-xs text-slate-400">api.qrserver.com</span>. Esto puede
              incluir datos de pago (beneficiario, IBAN, importe, concepto). Base jurídica: art. 6
              (1) a) RGPD (consentimiento). Sin activación, no se realiza ninguna transmisión.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">6. Comunicación</h2>
            <p>
              Si te pones en contacto con nosotros por correo electrónico, procesamos tus datos para
              tramitar la solicitud (art. 6 (1) b/f RGPD).
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">7. Tus derechos</h2>
            <p>
              Tienes, entre otros, los siguientes derechos:
              <br />- acceso, rectificación, supresión y limitación (art. 15–18 RGPD)
              <br />- portabilidad de los datos (art. 20 RGPD)
              <br />- oposición al tratamiento (art. 21 RGPD)
              <br />- derecho a presentar una reclamación ante una autoridad de control
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              8. Transferencias a terceros países
            </h2>
            <p>
              Vercel Inc. tiene su sede en Estados Unidos. Las transferencias se basan en las
              cláusulas contractuales tipo de la UE.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              9. Cookies / seguimiento
            </h2>
            <p>
              La aplicación no utiliza cookies con fines de análisis o marketing.
            </p>
            <p className="mt-2">
              Para la medición de tráfico y el análisis de rendimiento utilizamos Vercel Web
              Analytics y Vercel Speed Insights (Vercel Inc., EE. UU. — véanse también los §3 y §8).
              Ambos servicios funcionan sin cookies: no se instala ninguna cookie ni se identifica a
              los usuarios entre dispositivos o sesiones. Se recopilan datos agregados y anonimizados,
              como las páginas visitadas, los tiempos de carga y las métricas técnicas de rendimiento
              (Core Web Vitals). Los datos sensibles contenidos en parámetros de URL (por ejemplo,
              procedentes de datos de pago escaneados) se eliminan automáticamente antes de enviarse a
              Vercel. Base jurídica: art. 6 (1) f) RGPD (interés legítimo en analizar y mejorar el
              sitio web). Más información sobre el tratamiento de datos por parte de Vercel en
              vercel.com/legal.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">10. Cambios</h2>
            <p>
              Podemos adaptar esta política de privacidad si cambian las funcionalidades o el marco
              legal.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

