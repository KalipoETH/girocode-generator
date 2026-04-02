import type { Metadata } from 'next';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';

export const metadata: Metadata = {
  title: '¿Qué es un GiroCode? – Explicado + crear gratis',
  description:
    'GiroCode = código QR SEPA para transferencias. Qué es, cómo funciona y cómo crearlo gratis en segundos. Incluye factura PDF. Sin registro.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/wissen/girocode',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/girocode',
      'de': 'https://www.girocodegenerator.com/wissen/girocode',
      'en': 'https://www.girocodegenerator.com/en/wissen/girocode',
      'fr': 'https://www.girocodegenerator.com/fr/wissen/girocode',
      'es': 'https://www.girocodegenerator.com/es/wissen/girocode',
    },
  },
};

export default function WissenGirocodePageEs() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="¿Qué es un GiroCode?"
      badge="Bases · GiroCode / SEPA-QR"
      title="¿Qué es un GiroCode? – Todo lo que necesitas saber"
      lead="Un GiroCode es un código QR estandarizado para pagos SEPA. Contiene todos los datos necesarios para una transferencia bancaria y elimina la necesidad de introducir el IBAN, el importe y el concepto de forma manual. En esta guía te explicamos todo lo que necesitas saber: qué es, cómo funciona, quién puede usarlo y por qué es la solución de pago más inteligente para autónomos y empresas en Europa."
      relatedArticles={[
        { href: '/es/wissen/epc-standard', label: 'Norma EPC & SEPA-QR – Estructura técnica explicada' },
        { href: '/es/wissen/iban-bic', label: 'IBAN & BIC para GiroCode – Guía completa' },
        { href: '/es/wissen/betrag-und-zweck', label: 'Importe y concepto de pago en GiroCode' },
        { href: '/es/wissen/rechnung', label: 'GiroCode en facturas – La guía completa' },
        { href: '/es/wissen/banking-apps', label: 'Apps bancarias compatibles con GiroCode' },
        { href: '/es/wissen/scannen', label: 'Cómo escanear un GiroCode – Guía para iPhone y Android' },
      ]}
      locale="es"
    >
      <section aria-labelledby="que-es-girocode">
        <h2 id="que-es-girocode">¿Qué es un GiroCode?</h2>
        <p>
          Un <strong>GiroCode</strong> es un código QR estandarizado que contiene todos los
          datos necesarios para ejecutar una transferencia SEPA (Single Euro Payments Area).
          Al escanearlo con la app bancaria, el formulario de transferencia se rellena de forma
          automática con el nombre del beneficiario, el IBAN, el importe y el concepto de pago.
          El pagador solo tiene que revisar los datos y confirmar.
        </p>
        <p>
          Técnicamente, un GiroCode es un <strong>código QR SEPA estandarizado según la
          norma del European Payments Council (EPC)</strong>, motivo por el cual también se le
          conoce como <em>SEPA-QR</em>, <em>EPC-QR</em> o simplemente <em>código QR de pago</em>.
          La norma oficial se denomina «EPC069-12 SEPA Credit Transfer Initiation QR Code» y
          define con exactitud qué información debe contener el código y en qué formato.
        </p>
        <p>
          El término «GiroCode» es el nombre comercial utilizado principalmente en Alemania,
          impulsado por la Asociación Bancaria Alemana (Deutscher Sparkassen- und Giroverband,
          Deutsche Kreditwirtschaft). En otros países de la zona SEPA se usan nombres
          diferentes para el mismo estándar: en Austria se habla de «Stuzza-QR», y en Suiza
          existe un sistema similar pero ligeramente distinto denominado «QR-Bill» (QR-Rechnung).
        </p>

        <h3>Historia: ¿cuándo y por qué se introdujo?</h3>
        <p>
          El GiroCode se introdujo en Alemania de forma amplia a partir de <strong>2018</strong>,
          aunque el estándar EPC en el que se basa fue publicado por primera vez varios años
          antes. El objetivo era modernizar los pagos bancarios en Europa, reducir los errores
          humanos al copiar datos bancarios y acelerar el proceso de pago, especialmente para
          pequeñas empresas y autónomos que emiten muchas facturas.
        </p>
        <p>
          La adopción fue progresiva: primero los grandes bancos alemanes integraron la
          función de escaneo QR en sus apps móviles, y después se extendió gradualmente por
          el resto de Europa. Hoy en día, la mayoría de las aplicaciones bancarias en la zona
          SEPA reconocen y procesan los GiroCodes correctamente.
        </p>

        <h3>¿Quién lo desarrolló? El European Payments Council</h3>
        <p>
          El <strong>European Payments Council (EPC)</strong> es el organismo responsable del
          desarrollo y mantenimiento del estándar EPC para los códigos QR de pago SEPA. El EPC
          es la organización del sector bancario europeo encargada de armonizar los pagos en
          euros dentro de la zona SEPA, que comprende 36 países, incluidos todos los estados
          miembros de la Unión Europea, Suiza, Noruega, Islandia y Liechtenstein.
        </p>
        <p>
          La estandarización por parte del EPC garantiza que un GiroCode generado en España
          pueda ser leído por una app bancaria en Alemania o Francia, siempre que dicha app
          soporte el estándar EPC. Esto hace que el formato sea especialmente valioso para
          negocios con clientes internacionales dentro de Europa.
        </p>

        <h3>Difusión en Europa</h3>
        <p>
          Actualmente, el GiroCode (o SEPA-QR) está ampliamente implantado en Alemania,
          Austria y los países del Benelux. En España y otros países del sur de Europa la
          adopción es más reciente pero crece de forma constante, impulsada por la
          digitalización de las facturas y los pagos empresariales. La Unión Europea, a través
          de sus iniciativas de pagos instantáneos, está promoviendo activamente el uso de
          códigos QR estándar para transferencias SEPA, lo que augura una expansión aún mayor
          en los próximos años.
        </p>
      </section>

      <section aria-labelledby="como-funciona" className="mt-10">
        <h2 id="como-funciona">¿Cómo funciona un GiroCode?</h2>
        <p>
          El proceso es sencillo y puede resumirse en cuatro pasos:
        </p>
        <ol>
          <li>
            <strong>Generación:</strong> El emisor de la factura (autónomo, empresa,
            asociación) introduce en el generador de GiroCode los datos de la transferencia:
            nombre del beneficiario, IBAN, importe y concepto de pago. El generador crea un
            código QR con esos datos codificados según el estándar EPC.
          </li>
          <li>
            <strong>Distribución:</strong> El código QR se imprime en la factura (normalmente
            en la esquina inferior derecha), se incluye en un correo electrónico o se muestra
            directamente en pantalla.
          </li>
          <li>
            <strong>Escaneo:</strong> El pagador abre su app bancaria, activa la función de
            escaneo QR (normalmente en la sección de transferencias) y apunta la cámara al
            código.
          </li>
          <li>
            <strong>Confirmación:</strong> La app rellena automáticamente el formulario de
            transferencia con los datos del código. El pagador revisa los datos y confirma el
            pago con su PIN, huella dactilar o reconocimiento facial.
          </li>
        </ol>

        <h3>¿Qué datos se transfieren?</h3>
        <p>
          Dentro del GiroCode se codifican los siguientes datos en texto plano, estructurados
          línea a línea según la norma EPC:
        </p>
        <ul>
          <li><strong>Nombre del beneficiario</strong> (máximo 70 caracteres)</li>
          <li><strong>IBAN</strong> del beneficiario</li>
          <li><strong>BIC</strong> del banco del beneficiario (opcional desde 2016)</li>
          <li><strong>Importe</strong> en euros (opcional, formato: EUR12.34)</li>
          <li><strong>Concepto de pago</strong> (máximo 140 caracteres)</li>
        </ul>
        <p>
          Es importante destacar que el GiroCode no contiene datos del pagador ni información
          de autenticación. El código solo informa de adónde debe ir el dinero, no autoriza
          ningún cargo.
        </p>

        <h3>Aspectos de seguridad</h3>
        <p>
          Desde el punto de vista de la seguridad, el GiroCode es un método de pago robusto
          por varias razones:
        </p>
        <ul>
          <li>
            <strong>Sin datos sensibles del pagador:</strong> El código QR solo contiene datos
            del beneficiario, nunca del pagador. No hay contraseñas, números de tarjeta ni
            datos de autenticación.
          </li>
          <li>
            <strong>Confirmación explícita requerida:</strong> Ningún pago se ejecuta sin que
            el pagador lo confirme activamente en su app bancaria. El escaneo es solo el primer
            paso; siempre hay una etapa de revisión y confirmación.
          </li>
          <li>
            <strong>Protección bancaria estándar:</strong> El pago se procesa a través de los
            sistemas SEPA habituales, con todas las protecciones y garantías que ofrecen los
            bancos.
          </li>
          <li>
            <strong>Quishing (atención):</strong> Como cualquier código QR, un GiroCode podría
            ser manipulado si alguien reemplaza el código original por uno fraudulento. Por
            ello, siempre es recomendable verificar los datos bancarios antes de confirmar un
            pago.
          </li>
        </ul>
      </section>

      <section aria-labelledby="ventajas" className="mt-10">
        <h2 id="ventajas">Ventajas de un GiroCode</h2>

        <h3>Para el emisor de facturas</h3>
        <p>
          Para autónomos, freelances y pequeñas empresas que emiten facturas con regularidad,
          el GiroCode supone una mejora significativa en el proceso de cobro:
        </p>
        <ul>
          <li>
            <strong>Menos errores de pago:</strong> Los clientes no tienen que copiar el IBAN
            a mano, lo que elimina los errores tipográficos más frecuentes.
          </li>
          <li>
            <strong>Pagos más rápidos:</strong> El proceso de pago se reduce a unos pocos
            segundos para el pagador, lo que se traduce en cobros más rápidos.
          </li>
          <li>
            <strong>Concepto de pago correcto:</strong> Al incluir el número de factura
            directamente en el GiroCode, se garantiza que el concepto llegue correctamente,
            facilitando la contabilidad y la conciliación de pagos.
          </li>
          <li>
            <strong>Imagen profesional:</strong> Una factura con GiroCode transmite modernidad
            y facilita la experiencia del cliente, mejorando la imagen de la empresa.
          </li>
        </ul>

        <h3>Para el pagador</h3>
        <ul>
          <li>
            <strong>Rapidez:</strong> Escanear un código QR y confirmar es mucho más rápido
            que introducir manualmente 22 dígitos de IBAN, el nombre del beneficiario, el
            importe y el concepto.
          </li>
          <li>
            <strong>Sin errores:</strong> Los datos se transfieren de forma automática, sin
            posibilidad de equivocarse al teclear.
          </li>
          <li>
            <strong>Comodidad:</strong> Funciona con cualquier banco que soporte SEPA-QR y
            no requiere registrarse en ninguna plataforma ni compartir datos con terceros.
          </li>
        </ul>

        <h3>GiroCode vs. introducción manual del IBAN</h3>
        <p>
          Introducir un IBAN manualmente es una tarea propensa a errores. Un IBAN alemán
          tiene 22 caracteres; un IBAN español tiene 24. Cada vez que un cliente introduce
          un IBAN a mano, existe el riesgo de un error tipográfico que puede hacer que el
          pago vaya a la cuenta equivocada o simplemente sea rechazado. Con un GiroCode, este
          riesgo desaparece por completo.
        </p>

        <h3>GiroCode vs. PayPal y otros métodos de pago</h3>
        <p>
          Comparado con PayPal u otros servicios de pago digital, el GiroCode tiene varias
          ventajas importantes:
        </p>
        <ul>
          <li>
            <strong>Sin comisiones para el vendedor:</strong> PayPal cobra comisiones que
            pueden superar el 2–3 % por transacción. El GiroCode utiliza la infraestructura
            SEPA estándar, que en la mayoría de los casos es gratuita para transferencias
            entre cuentas del mismo banco o tiene costes mínimos.
          </li>
          <li>
            <strong>Sin intermediarios:</strong> El dinero va directamente de la cuenta del
            pagador a la del beneficiario, sin pasar por plataformas de terceros.
          </li>
          <li>
            <strong>Privacidad:</strong> No se comparten datos con empresas tecnológicas.
          </li>
          <li>
            <strong>Sin cuenta adicional:</strong> El pagador no necesita crearse una cuenta
            en ningún servicio. Solo necesita tener una cuenta bancaria con app.
          </li>
        </ul>
      </section>

      <section aria-labelledby="quien-puede-usar" className="mt-10">
        <h2 id="quien-puede-usar">¿Quién puede usar GiroCodes?</h2>

        <h3>Freelances y autónomos</h3>
        <p>
          Los freelances y autónomos son uno de los grupos que más se benefician del GiroCode.
          Emiten facturas regularmente y necesitan que sus clientes paguen de forma rápida y
          correcta. Con el GiroCode integrado en la factura, el cliente puede pagar en
          segundos con su móvil. Además, al incluir el número de factura en el concepto, la
          contabilidad se simplifica enormemente.
        </p>

        <h3>Pequeñas y medianas empresas</h3>
        <p>
          Para las pymes, el GiroCode es especialmente valioso en dos situaciones: como
          complemento en facturas a clientes finales (B2C) y como herramienta para agilizar
          pagos entre empresas (B2B) en las que el proceso de transferencia debe ser rápido
          y preciso. Las empresas con un alto volumen de facturas se benefician especialmente
          de la reducción de errores y consultas relacionadas con pagos.
        </p>

        <h3>Asociaciones y organizaciones</h3>
        <p>
          Las asociaciones utilizan el GiroCode principalmente para la recogida de cuotas de
          socios y para donaciones. Un código QR con el IBAN de la asociación, el importe
          de la cuota y el número de socio en el concepto facilita enormemente la gestión
          administrativa. Los socios pueden pagar en segundos desde su móvil sin tener que
          recordar los datos bancarios.
        </p>

        <h3>Particulares</h3>
        <p>
          Los particulares también pueden usar GiroCodes para solicitar pagos entre amigos,
          dividir gastos o gestionar pequeños cobros. Un GiroCode generado con nuestro
          generador gratuito y enviado por mensaje o correo electrónico funciona perfectamente
          para este tipo de situaciones informales.
        </p>
      </section>

      <section aria-labelledby="comparativa" className="mt-10">
        <h2 id="comparativa">GiroCode vs. otros métodos de pago</h2>
        <p>
          La siguiente tabla compara el GiroCode con otras alternativas de pago comunes:
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-lg border border-slate-700">
          <table className="compare-table w-full text-sm">
            <thead>
              <tr>
                <th className="px-4 py-3">Característica</th>
                <th className="px-4 py-3">GiroCode</th>
                <th className="px-4 py-3">PayPal</th>
                <th className="px-4 py-3">Stripe</th>
                <th className="px-4 py-3">Domiciliación</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              <tr>
                <td className="px-4 py-3 font-medium text-slate-200">Coste para el vendedor</td>
                <td className="px-4 py-3" style={{color:'#22c55e', fontWeight:600}}>Gratuito</td>
                <td className="px-4 py-3" style={{color:'#ef4444'}}>~2,5–3,5 %</td>
                <td className="px-4 py-3" style={{color:'#ef4444'}}>~1,4–2,9 %</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>Variable</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-3 font-medium text-slate-200">Privacidad del pagador</td>
                <td className="px-4 py-3" style={{color:'#22c55e', fontWeight:600}}>Alta</td>
                <td className="px-4 py-3" style={{color:'#ef4444'}}>Baja</td>
                <td className="px-4 py-3" style={{color:'#f97316'}}>Media</td>
                <td className="px-4 py-3" style={{color:'#22c55e'}}>Alta</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-200">Disponibilidad en SEPA</td>
                <td className="px-4 py-3" style={{color:'#22c55e', fontWeight:600}}>Universal</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>Alta</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>Alta</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>Universal</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-3 font-medium text-slate-200">Simplicidad para el pagador</td>
                <td className="px-4 py-3" style={{color:'#22c55e', fontWeight:600}}>Muy alta</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>Media</td>
                <td className="px-4 py-3" style={{color:'#f97316'}}>Media</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>Media</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-200">Cuenta adicional requerida</td>
                <td className="px-4 py-3" style={{color:'#22c55e', fontWeight:600}}>No</td>
                <td className="px-4 py-3" style={{color:'#ef4444'}}>Sí</td>
                <td className="px-4 py-3" style={{color:'#f97316'}}>Sí (para integrar)</td>
                <td className="px-4 py-3" style={{color:'#f97316'}}>Mandato requerido</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-3 font-medium text-slate-200">Intermediarios</td>
                <td className="px-4 py-3" style={{color:'#22c55e', fontWeight:600}}>Ninguno</td>
                <td className="px-4 py-3" style={{color:'#ef4444'}}>PayPal Inc.</td>
                <td className="px-4 py-3" style={{color:'#f97316'}}>Stripe Inc.</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>Banco emisor</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          Como se puede observar, el GiroCode destaca especialmente en coste, privacidad y
          simplicidad. No requiere ninguna infraestructura adicional: solo un IBAN y el
          generador de GiroCode.
        </p>
      </section>

      <section aria-labelledby="paises-europeos" className="mt-10">
        <h2 id="paises-europeos">GiroCode en diferentes países europeos</h2>
        <p>
          Aunque el estándar EPC es técnicamente el mismo en toda Europa, cada país tiene
          sus propias variantes y nombres:
        </p>

        <h3>Alemania – GiroCode</h3>
        <p>
          En Alemania, el término «GiroCode» está muy extendido y es reconocido ampliamente
          por consumidores y empresas. Casi todas las apps bancarias alemanas (Sparkasse,
          Volksbank, DKB, ING, Commerzbank, Deutsche Bank, etc.) soportan el escaneo de
          GiroCodes. Su uso está muy normalizado en facturas de pequeñas empresas, artesanos
          y autónomos.
        </p>

        <h3>Austria – Stuzza QR</h3>
        <p>
          En Austria, el equivalente se denomina «Stuzza-QR» (promovido por la empresa
          Stuzza, responsable de estándares de pago en Austria). El formato es
          técnicamente idéntico al EPC estándar y es compatible con el GiroCode alemán.
        </p>

        <h3>Bélgica y Países Bajos</h3>
        <p>
          En Bélgica y los Países Bajos, el uso del SEPA-QR es habitual en facturas
          profesionales. Los bancos locales soportan el estándar y muchas aplicaciones
          de contabilidad generan GiroCodes automáticamente en las facturas PDF.
        </p>

        <h3>Suiza – QR-Bill (QR-Rechnung)</h3>
        <p>
          Suiza introdujo en 2020 la «QR-Rechnung» (QR-Bill), que sustituye a los
          antiguos sistemas de pago con código rojo y naranja. Aunque el concepto es
          similar, el formato QR suizo tiene algunas diferencias técnicas respecto al
          estándar EPC, ya que Suiza no forma parte de la zona SEPA y utiliza su propio
          sistema de pagos (SIC). Sin embargo, el objetivo es el mismo: simplificar y
          automatizar los pagos mediante un código QR en la factura.
        </p>

        <h3>España, Francia e Italia</h3>
        <p>
          En España, Francia e Italia, la adopción del GiroCode/SEPA-QR está creciendo
          impulsada por la digitalización de la factura electrónica obligatoria. Aunque
          todavía no está tan extendido como en el norte de Europa, cada vez más software
          de facturación y más bancos lo integran. Con la nueva regulación europea sobre
          factura electrónica (ViDA), se espera que el uso de códigos QR de pago se
          generalice en los próximos años.
        </p>
      </section>

      <section aria-labelledby="faq" className="mt-10">
        <h2 id="faq">Preguntas frecuentes (FAQ)</h2>

        <h3>1. ¿Es gratuito generar un GiroCode?</h3>
        <p>
          Sí, completamente. Nuestro generador de GiroCode en línea es 100 % gratuito y
          no requiere registro. Genera el código directamente en tu navegador, sin enviar
          datos a ningún servidor. Todo el proceso ocurre localmente en tu dispositivo.
        </p>

        <h3>2. ¿Necesito una cuenta bancaria especial para usar GiroCodes?</h3>
        <p>
          No. Cualquier cuenta bancaria con IBAN válido en la zona SEPA puede usar
          GiroCodes. No se requiere ningún contrato especial con el banco. Solo necesitas
          conocer tu IBAN.
        </p>

        <h3>3. ¿Puede usarse el GiroCode en facturas digitales (PDF)?</h3>
        <p>
          Sí, y es uno de los usos más habituales. Puedes incrustar el GiroCode como imagen
          en una factura PDF. Nuestro generador permite descargar el código como PNG o SVG
          para insertarlo en cualquier documento.
        </p>

        <h3>4. ¿Es seguro el GiroCode?</h3>
        <p>
          Sí. El GiroCode no contiene datos sensibles del pagador y ningún pago puede
          ejecutarse sin la confirmación activa del titular de la cuenta. Funciona igual
          que una transferencia bancaria normal, solo que con los datos prerellenados
          automáticamente.
        </p>

        <h3>5. ¿Puede el pagador cambiar el importe o el concepto?</h3>
        <p>
          Sí. Los datos cargados desde el GiroCode son solo sugerencias iniciales. El
          pagador puede modificar cualquier campo (importe, concepto) antes de confirmar
          la transferencia. Esto es especialmente útil en el caso de pagos parciales o
          donaciones libres.
        </p>

        <h3>6. ¿Funcionan los GiroCodes con todas las apps bancarias?</h3>
        <p>
          La mayoría de las apps bancarias de los principales bancos en la zona SEPA
          soportan el estándar EPC/GiroCode. Sin embargo, no todas tienen esta función
          disponible de forma obvia. Consulta la sección de «escanear QR» o
          «transferencia por QR» en tu app. Si tu banco no soporta GiroCodes, puedes
          usar una app de terceros compatible con SEPA-QR.
        </p>

        <h3>7. ¿Cuál es la diferencia entre GiroCode y un código QR normal de una URL?</h3>
        <p>
          Un código QR normal puede contener cualquier tipo de información (URLs, texto,
          contactos…). Un GiroCode es un código QR con un formato específico estandarizado
          por el EPC que solo contiene datos de una transferencia SEPA. La app bancaria
          reconoce este formato especial y lo procesa como una orden de transferencia.
        </p>

        <h3>8. ¿Se puede usar el GiroCode para pagos recurrentes?</h3>
        <p>
          El GiroCode en sí es estático: cada pago necesita un código con el importe y
          concepto correctos (p. ej., el mes correspondiente). Para pagos verdaderamente
          recurrentes y automáticos, la domiciliación bancaria SEPA (SEPA Direct Debit)
          es la alternativa más adecuada. Sin embargo, para cuotas de socios en asociaciones,
          muchas organizaciones usan GiroCodes mensuales enviados por correo electrónico.
        </p>

        <h3>9. ¿Qué pasa si el código QR no se puede escanear?</h3>
        <p>
          Puede deberse a problemas de calidad de impresión (demasiado pequeño, pixelado
          o con bajo contraste), o a que el código contiene caracteres no soportados.
          El GiroCode debe tener al menos 2 × 2 cm en impresión y un contraste nítido
          entre el módulo oscuro y el fondo claro. Nuestro generador utiliza corrección
          de errores nivel M, que permite recuperar hasta un 15 % de información dañada.
        </p>

        <h3>10. ¿El GiroCode expira?</h3>
        <p>
          No, un GiroCode en sí mismo no expira. Sin embargo, si el importe o los datos
          bancarios cambian, deberás generar un nuevo código. Es buena práctica regenerar
          el GiroCode para cada factura individual, incluyendo el número de factura en el
          concepto.
        </p>
      </section>
    </KnowledgeLayout>
  );
}
