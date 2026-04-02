import type { Metadata } from 'next';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';

export const metadata: Metadata = {
  title: 'Apps bancarias compatibles con GiroCode 2026 – Lista completa',
  description:
    '¿Qué apps bancarias escanean GiroCodes? Sparkasse ✅ ING ✅ DKB ✅ Volksbank ✅ N26 ✅ y 8 más. Guía paso a paso para cada app.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/wissen/banking-apps',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/banking-apps',
      'de': 'https://www.girocodegenerator.com/wissen/banking-apps',
      'en': 'https://www.girocodegenerator.com/en/wissen/banking-apps',
      'fr': 'https://www.girocodegenerator.com/fr/wissen/banking-apps',
      'es': 'https://www.girocodegenerator.com/es/wissen/banking-apps',
    },
  },
};

export default function WissenBankingAppsPageEs() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="Apps bancarias con GiroCode"
      badge="Práctica · Apps bancarias"
      title="Apps bancarias compatibles con GiroCode – Resumen completo 2025"
      lead="Para pagar con un GiroCode, el cliente necesita una app bancaria que soporte el estándar SEPA-QR. En esta guía encontrarás qué apps lo soportan, cómo activar la función de escaneo en cada una de ellas, y qué hacer si tu app no tiene esta funcionalidad."
      relatedArticles={[
        { href: '/es/wissen/scannen', label: 'Cómo escanear un GiroCode – Guía para iPhone y Android' },
        { href: '/es/wissen/girocode', label: '¿Qué es un GiroCode? – Todo lo que necesitas saber' },
        { href: '/es/wissen/rechnung', label: 'GiroCode en facturas – La guía completa' },
        { href: '/es/wissen/epc-standard', label: 'Norma EPC & SEPA-QR – Estructura técnica' },
        { href: '/es/wissen/iban-bic', label: 'IBAN & BIC para GiroCode' },
      ]}
      locale="es"
    >
      <section aria-labelledby="apps-compatibles">
        <h2 id="apps-compatibles">¿Qué apps bancarias soportan GiroCodes?</h2>
        <p>
          La mayoría de las apps bancarias de los grandes bancos alemanes y de otros países
          de la zona SEPA soportan la lectura de GiroCodes (SEPA-QR). La función suele
          encontrarse en la sección de «Transferencias» o «Pagos», identificada con un
          icono de cámara o código QR.
        </p>
        <p>
          A continuación se muestra un resumen de las principales apps bancarias y su
          compatibilidad con GiroCodes:
        </p>
        <div className="not-prose overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="py-2 pr-3 font-semibold text-slate-200">App bancaria</th>
                <th className="py-2 pr-3 font-semibold text-slate-200">País</th>
                <th className="py-2 pr-3 font-semibold text-slate-200">GiroCode</th>
                <th className="py-2 font-semibold text-slate-200">Notas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300 text-xs">
              <tr>
                <td className="py-2 pr-3 font-medium">Sparkasse App</td>
                <td className="py-2 pr-3">DE</td>
                <td className="py-2 pr-3 text-emerald-400">✅ Sí</td>
                <td className="py-2">Función «Überweisen per QR» en transferencias</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-medium">VR-Banking / Volksbank</td>
                <td className="py-2 pr-3">DE</td>
                <td className="py-2 pr-3 text-emerald-400">✅ Sí</td>
                <td className="py-2">Icono de cámara en formulario de transferencia</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-medium">ING Banking to go</td>
                <td className="py-2 pr-3">DE</td>
                <td className="py-2 pr-3 text-emerald-400">✅ Sí</td>
                <td className="py-2">Opción «QR-Code scannen» en transferencias</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-medium">DKB Banking</td>
                <td className="py-2 pr-3">DE</td>
                <td className="py-2 pr-3 text-emerald-400">✅ Sí</td>
                <td className="py-2">Soporte integrado en nueva app DKB</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-medium">Commerzbank</td>
                <td className="py-2 pr-3">DE</td>
                <td className="py-2 pr-3 text-emerald-400">✅ Sí</td>
                <td className="py-2">Icono QR en sección de pagos</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-medium">Deutsche Bank</td>
                <td className="py-2 pr-3">DE</td>
                <td className="py-2 pr-3 text-emerald-400">✅ Sí</td>
                <td className="py-2">Disponible en app actualizada</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-medium">N26</td>
                <td className="py-2 pr-3">DE/EU</td>
                <td className="py-2 pr-3 text-yellow-400">⚠️ Parcial</td>
                <td className="py-2">Soporte limitado; verificar versión actual</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-medium">Revolut</td>
                <td className="py-2 pr-3">EU</td>
                <td className="py-2 pr-3 text-yellow-400">⚠️ Parcial</td>
                <td className="py-2">No es banco SEPA nativo; soporte variable</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-medium">Raiffeisen (AT)</td>
                <td className="py-2 pr-3">AT</td>
                <td className="py-2 pr-3 text-emerald-400">✅ Sí</td>
                <td className="py-2">Formato Stuzza-QR compatible</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-medium">Bank Austria</td>
                <td className="py-2 pr-3">AT</td>
                <td className="py-2 pr-3 text-emerald-400">✅ Sí</td>
                <td className="py-2">App George/Bank Austria</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-medium">ING (NL/BE)</td>
                <td className="py-2 pr-3">NL/BE</td>
                <td className="py-2 pr-3 text-emerald-400">✅ Sí</td>
                <td className="py-2">Integrado en app de pagos</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-medium">CaixaBank</td>
                <td className="py-2 pr-3">ES</td>
                <td className="py-2 pr-3 text-yellow-400">⚠️ En desarrollo</td>
                <td className="py-2">Soporte QR para pagos Bizum; SEPA-QR limitado</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-medium">BBVA</td>
                <td className="py-2 pr-3">ES</td>
                <td className="py-2 pr-3 text-yellow-400">⚠️ En desarrollo</td>
                <td className="py-2">QR disponible para pagos propios; SEPA-QR parcial</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-medium">Santander</td>
                <td className="py-2 pr-3">ES</td>
                <td className="py-2 pr-3 text-yellow-400">⚠️ Verificar</td>
                <td className="py-2">Consultar versión actual de la app</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Nota: El soporte puede variar según la versión de la app. Verifica siempre en
          la app actualizada de tu banco. Información válida a fecha de 2025.
        </p>
      </section>

      <section aria-labelledby="paso-a-paso-escaneo" className="mt-10">
        <h2 id="paso-a-paso-escaneo">Paso a paso: escanear un GiroCode</h2>
        <p>
          Independientemente de la app bancaria concreta, el proceso general para escanear
          un GiroCode y realizar la transferencia sigue siempre estos pasos:
        </p>
        <ol>
          <li>
            <strong>Abre tu app bancaria</strong> y asegúrate de estar en la sección
            de transferencias o pagos.
          </li>
          <li>
            <strong>Busca el icono de cámara o QR</strong> en el formulario de
            transferencia. Normalmente aparece junto al campo del IBAN o como botón
            separado con el texto «Escanear QR», «Pagar con QR» o «Überweisen per QR».
          </li>
          <li>
            <strong>Activa la cámara</strong> y acepta el permiso de acceso a la cámara
            si la app lo solicita.
          </li>
          <li>
            <strong>Apunta al código QR</strong> de la factura o pantalla. Mantén el
            móvil estable y asegúrate de que el código esté bien iluminado y completamente
            dentro del recuadro de la cámara.
          </li>
          <li>
            <strong>Revisa los datos cargados:</strong> La app rellenará automáticamente
            el nombre del beneficiario, el IBAN, el importe y el concepto. Comprueba que
            todos los datos son correctos antes de continuar.
          </li>
          <li>
            <strong>Confirma la transferencia</strong> con tu PIN, huella dactilar o
            reconocimiento facial. El pago se ejecuta normalmente en segundos
            (transferencia SEPA normal) o de forma instantánea si ambos bancos soportan
            SEPA Instant.
          </li>
        </ol>
      </section>

      <section aria-labelledby="sparkasse-app" className="mt-10">
        <h2 id="sparkasse-app">Escanear con Sparkasse App</h2>
        <p>
          La Sparkasse App es la aplicación bancaria más utilizada en Alemania y tiene
          un soporte excelente para GiroCodes. El proceso es el siguiente:
        </p>
        <ol>
          <li>Abre la app de Sparkasse y navega a <strong>«Überweisen»</strong> (Transferir).</li>
          <li>
            En el formulario de transferencia, toca el <strong>icono de cámara</strong>
            que aparece en la esquina superior derecha o junto al campo del IBAN.
          </li>
          <li>
            La app abrirá la cámara con el lector de QR integrado. Apunta al GiroCode
            impreso en la factura o en la pantalla.
          </li>
          <li>
            Los campos se rellenan automáticamente con los datos del código. Verifica el
            nombre del beneficiario, el IBAN, el importe y el concepto.
          </li>
          <li>
            Si todo es correcto, toca <strong>«Weiter»</strong> (Siguiente) y confirma
            con tu PIN o biometría.
          </li>
        </ol>
        <p>
          La Sparkasse App también permite escanear GiroCodes desde la galería de fotos
          del móvil. Si tienes un PDF en el móvil, puedes hacer una captura de pantalla
          del código y luego seleccionar la imagen desde la galería al activar el escáner.
        </p>
      </section>

      <section aria-labelledby="vr-banking" className="mt-10">
        <h2 id="vr-banking">Escanear con VR-Banking (Volksbank/Raiffeisenbank)</h2>
        <p>
          Las cooperativas bancarias Volksbank y Raiffeisenbank utilizan la app VR-Banking,
          que también tiene soporte completo para GiroCodes:
        </p>
        <ol>
          <li>Abre VR-Banking y ve a <strong>«Überweisung»</strong> o <strong>«Zahlung»</strong>.</li>
          <li>
            Toca el <strong>icono de cámara</strong> en el campo del receptor/IBAN.
          </li>
          <li>Apunta la cámara al GiroCode. El lector detecta el código automáticamente.</li>
          <li>Comprueba los datos y confirma con ChipTAN, SmartTAN o biometría.</li>
        </ol>
      </section>

      <section aria-labelledby="ing-banking" className="mt-10">
        <h2 id="ing-banking">Escanear con ING Banking to go</h2>
        <p>
          ING Alemania ofrece una app moderna con soporte para GiroCodes integrado de
          forma muy accesible:
        </p>
        <ol>
          <li>Abre ING Banking to go y selecciona <strong>«Überweisung»</strong>.</li>
          <li>
            En la pantalla del formulario de transferencia, verás la opción
            <strong> «QR-Code scannen»</strong> o un icono de cámara.
          </li>
          <li>Escanea el GiroCode. Los datos se cargan automáticamente.</li>
          <li>Revisa y confirma con tu PIN o Touch ID/Face ID.</li>
        </ol>
        <p>
          ING también soporta la lectura de códigos QR desde imágenes guardadas en el
          dispositivo, lo cual es útil para facturas en PDF recibidas por correo.
        </p>
      </section>

      <section aria-labelledby="dkb-banking" className="mt-10">
        <h2 id="dkb-banking">Escanear con DKB Banking</h2>
        <p>
          El Deutsche Kreditbank (DKB) ha renovado su app completamente y ahora ofrece
          soporte para GiroCodes en su nueva versión:
        </p>
        <ol>
          <li>Abre la app DKB y ve a <strong>«Überweisen»</strong>.</li>
          <li>
            Busca el icono de QR o cámara en el campo del IBAN o en la barra superior.
          </li>
          <li>Activa el escáner y apunta al código de la factura.</li>
          <li>Verifica todos los datos y confirma el pago.</li>
        </ol>
        <p>
          Si tienes la versión antigua de la app DKB, puede que el soporte sea limitado.
          Asegúrate de tener la versión más reciente instalada.
        </p>
      </section>

      <section aria-labelledby="sin-escaner" className="mt-10">
        <h2 id="sin-escaner">¿Qué hacer si la app no tiene escáner QR?</h2>
        <p>
          Si la app de tu banco no tiene función de escaneo de GiroCodes, tienes varias
          alternativas:
        </p>
        <ul>
          <li>
            <strong>Actualizar la app:</strong> Muchos bancos han añadido soporte para
            GiroCodes en actualizaciones recientes. Asegúrate de tener la versión más
            nueva de la app.
          </li>
          <li>
            <strong>Usar el portal web bancario:</strong> Algunos bancos ofrecen la función
            de escaneo QR también en su versión web. Comprueba si tu banco la tiene en la
            sección de transferencias de la banca online.
          </li>
          <li>
            <strong>App de terceros compatible:</strong> Existen aplicaciones independientes
            que pueden leer GiroCodes y mostrar los datos para que los introduzcas
            manualmente en tu app bancaria. Son útiles como puente si tu banco no soporta
            el formato directamente.
          </li>
          <li>
            <strong>Introducir datos manualmente:</strong> Como último recurso, los datos
            del GiroCode (IBAN, importe, concepto) también están disponibles en texto en la
            factura, por lo que puedes copiarlos manualmente.
          </li>
          <li>
            <strong>Contactar al banco:</strong> Si tu banco no soporta GiroCodes y crees
            que debería, puedes solicitarlo directamente a través del servicio de atención
            al cliente. La demanda de los usuarios es uno de los factores que impulsa la
            adopción de estas funcionalidades.
          </li>
        </ul>
      </section>

      <section aria-labelledby="seguridad-escaneo" className="mt-10">
        <h2 id="seguridad-escaneo">Seguridad al escanear GiroCodes</h2>
        <p>
          Aunque el GiroCode es un método de pago seguro, como con cualquier operación
          bancaria, es importante tomar ciertas precauciones:
        </p>

        <h3>Siempre verificar datos antes de confirmar</h3>
        <p>
          El paso más importante en el proceso de pago con GiroCode es la
          <strong> revisión de los datos antes de confirmar</strong>. La app bancaria
          muestra todos los datos cargados desde el código (beneficiario, IBAN, importe,
          concepto) antes de ejecutar la transferencia. Nunca confirmes sin haber
          verificado:
        </p>
        <ul>
          <li>El nombre del beneficiario coincide con quien esperas pagar.</li>
          <li>El IBAN parece correcto (al menos los primeros 4-6 caracteres).</li>
          <li>El importe es el correcto según la factura.</li>
          <li>El concepto incluye el número de factura esperado.</li>
        </ul>

        <h3>Reconocer códigos QR manipulados</h3>
        <p>
          Un riesgo teórico con los GiroCodes impresos en papel es que alguien pegue
          una etiqueta con un código QR diferente encima del original. Esto es más
          relevante en contextos públicos (carteles, folletos) que en facturas personales.
          Si tienes dudas sobre la autenticidad de un GiroCode impreso:
        </p>
        <ul>
          <li>Compara los datos cargados por la app con los datos de texto de la factura.</li>
          <li>Verifica que el IBAN del código coincide con el IBAN que aparece en el texto de la factura.</li>
          <li>En caso de duda, introduce los datos manualmente desde el texto de la factura.</li>
        </ul>

        <h3>Quishing: phishing por código QR</h3>
        <p>
          El <strong>Quishing</strong> (QR + Phishing) es una técnica de fraude en la que
          los estafadores crean códigos QR fraudulentos que llevan a páginas web falsas
          o que contienen datos bancarios de cuentas de estafa. En el contexto de los
          GiroCodes, el quishing podría manifestarse como:
        </p>
        <ul>
          <li>
            <strong>Facturas falsas con GiroCode:</strong> Alguien envía una factura
            falsa con un GiroCode que lleva el dinero a una cuenta fraudulenta. Siempre
            verifica la autenticidad de las facturas que recibes.
          </li>
          <li>
            <strong>Carteles con QR alterados:</strong> En lugares públicos, códigos QR
            pegados encima de los originales. En el contexto bancario, siempre confirma
            los datos en la app antes de ejecutar.
          </li>
        </ul>
        <p>
          La mejor protección contra el quishing es siempre revisar cuidadosamente los
          datos mostrados por la app bancaria antes de confirmar cualquier pago.
        </p>
      </section>
    </KnowledgeLayout>
  );
}
