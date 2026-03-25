import type { Metadata } from 'next';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';

export const metadata: Metadata = {
  title: 'IBAN & BIC para GiroCode – Guía completa',
  description:
    'IBAN y BIC para GiroCode: formato, cuándo se requiere el BIC y cómo funciona la validación del IBAN. Todo explicado de forma sencilla.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/wissen/iban-bic',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/iban-bic',
      'de': 'https://www.girocodegenerator.com/wissen/iban-bic',
      'en': 'https://www.girocodegenerator.com/en/wissen/iban-bic',
      'fr': 'https://www.girocodegenerator.com/fr/wissen/iban-bic',
      'es': 'https://www.girocodegenerator.com/es/wissen/iban-bic',
    },
  },
};

export default function WissenIbanBicPageEs() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="IBAN & BIC"
      badge="Bases · IBAN & BIC"
      title="IBAN & BIC para GiroCode – Guía completa"
      lead="El IBAN es el elemento central de cualquier GiroCode. En esta guía completa explicamos su estructura, cómo se valida, cuándo sigue siendo necesario el BIC, y todo lo que necesitas saber sobre estos identificadores bancarios en el contexto de los pagos SEPA."
      relatedArticles={[
        { href: '/es/wissen/girocode', label: '¿Qué es un GiroCode? – Todo lo que necesitas saber' },
        { href: '/es/wissen/epc-standard', label: 'Norma EPC & SEPA-QR – Estructura técnica explicada' },
        { href: '/es/wissen/betrag-und-zweck', label: 'Importe y concepto de pago en GiroCode' },
        { href: '/es/wissen/rechnung', label: 'GiroCode en facturas – La guía completa' },
        { href: '/es/wissen/scannen', label: 'Cómo escanear un GiroCode' },
      ]}
      locale="es"
    >
      <section aria-labelledby="que-es-iban">
        <h2 id="que-es-iban">¿Qué es un IBAN?</h2>
        <p>
          El <strong>IBAN</strong> (International Bank Account Number, en español Número
          Internacional de Cuenta Bancaria) es un estándar internacional para identificar
          cuentas bancarias de forma única en todo el mundo. Fue creado por el Comité
          Europeo de Normalización Bancaria (ECBS) y adoptado como norma ISO bajo la
          referencia <strong>ISO 13616</strong>.
        </p>
        <p>
          El objetivo del IBAN es reemplazar los diferentes formatos nacionales de números
          de cuenta y códigos bancarios con un identificador único y uniforme que pueda
          utilizarse en transferencias internacionales sin ambigüedades ni confusiones. En
          la zona SEPA, el IBAN es el identificador estándar y obligatorio para cualquier
          transferencia bancaria.
        </p>

        <h3>¿Cuándo y por qué se creó el IBAN?</h3>
        <p>
          El IBAN fue desarrollado en los años 1990 para facilitar el procesamiento
          automatizado de transferencias internacionales. Antes del IBAN, cada país tenía
          su propio formato de número de cuenta, lo que hacía muy difícil procesar pagos
          transfronterizos de forma automática. El IBAN unificó estos formatos en un
          estándar reconocido globalmente. En Europa, su uso se volvió obligatorio con la
          implantación del área SEPA, a partir de 2008 para pagos entre empresas y 2014
          para todos los pagos.
        </p>

        <h3>Estructura del IBAN alemán</h3>
        <p>
          El IBAN alemán tiene exactamente <strong>22 caracteres</strong> y está estructurado
          de la siguiente forma:
        </p>
        <div className="not-prose rounded-xl border border-slate-700 bg-slate-900 p-4 font-mono text-sm">
          <p className="text-emerald-400">DE89 3704 0044 0532 0130 00</p>
          <div className="mt-3 grid grid-cols-4 gap-2 text-xs text-slate-400">
            <div><span className="text-sky-300">DE</span> = Código de país</div>
            <div><span className="text-yellow-300">89</span> = Dígitos de control</div>
            <div><span className="text-purple-300">37040044</span> = Código bancario (BLZ)</div>
            <div><span className="text-emerald-300">0532013000</span> = Número de cuenta</div>
          </div>
        </div>

        <h3>Estructura del IBAN español</h3>
        <p>
          El IBAN español tiene <strong>24 caracteres</strong>:
        </p>
        <div className="not-prose rounded-xl border border-slate-700 bg-slate-900 p-4 font-mono text-sm">
          <p className="text-emerald-400">ES91 2100 0418 4502 0005 1332</p>
          <div className="mt-3 grid grid-cols-4 gap-2 text-xs text-slate-400">
            <div><span className="text-sky-300">ES</span> = España</div>
            <div><span className="text-yellow-300">91</span> = Dígitos de control</div>
            <div><span className="text-purple-300">2100</span> = Código del banco</div>
            <div><span className="text-emerald-300">0418 4502 0005 1332</span> = Sucursal + cuenta</div>
          </div>
        </div>

        <h3>Formatos IBAN internacionales</h3>
        <p>
          La longitud del IBAN varía según el país. Los países con IBAN más cortos tienen
          sistemas bancarios más simples, mientras que los países con muchos bancos y
          sucursales tienden a tener IBANs más largos. Los IBANs pueden tener entre 15
          y 34 caracteres.
        </p>
      </section>

      <section aria-labelledby="iban-explicado" className="mt-10">
        <h2 id="iban-explicado">El IBAN explicado paso a paso</h2>

        <h3>1. Código de país (2 letras)</h3>
        <p>
          Los dos primeros caracteres del IBAN son siempre el código ISO 3166-1 alpha-2
          del país donde está domiciliada la cuenta. Por ejemplo: <code>DE</code> para
          Alemania, <code>ES</code> para España, <code>AT</code> para Austria,
          <code>FR</code> para Francia, <code>IT</code> para Italia.
        </p>

        <h3>2. Dígitos de control (2 cifras)</h3>
        <p>
          Los dos caracteres siguientes son los dígitos de control, calculados mediante el
          <strong> algoritmo Mod-97</strong>. Su función es detectar errores tipográficos:
          si alguien introduce mal un dígito del IBAN, los dígitos de control no coincidirán
          con el IBAN completo y la validación fallará. Esto permite detectar la gran mayoría
          de errores antes de enviar la transferencia.
        </p>

        <h3>3. Código bancario (BBAN)</h3>
        <p>
          El resto del IBAN es el <strong>BBAN</strong> (Basic Bank Account Number), que
          varía según el país. En Alemania, el BBAN incluye el código bancario (Bankleitzahl,
          8 dígitos) y el número de cuenta (10 dígitos). En España incluye el código del
          banco (4 dígitos), el código de la sucursal (4 dígitos), los dígitos de control
          nacionales (2 dígitos) y el número de cuenta (10 dígitos).
        </p>

        <h3>Ejemplo de IBAN analizado: DE89370400440532013000</h3>
        <ul>
          <li><strong>DE</strong> → Alemania</li>
          <li><strong>89</strong> → Dígitos de control (calculados según Mod-97)</li>
          <li><strong>37040044</strong> → Código bancario (Commerzbank Frankfurt)</li>
          <li><strong>0532013000</strong> → Número de cuenta</li>
        </ul>
      </section>

      <section aria-labelledby="que-es-bic" className="mt-10">
        <h2 id="que-es-bic">¿Qué es un BIC?</h2>
        <p>
          El <strong>BIC</strong> (Bank Identifier Code), también conocido como código SWIFT,
          es un código estandarizado (norma ISO 9362) que identifica de forma única a una
          institución financiera en el sistema financiero internacional. El BIC es utilizado
          principalmente para enrutar transferencias internacionales entre bancos.
        </p>

        <h3>Estructura del BIC (8 u 11 caracteres)</h3>
        <p>
          El BIC tiene la siguiente estructura:
        </p>
        <ul>
          <li>
            <strong>Código del banco (4 letras):</strong> Identifica el banco.
            Ejemplo: <code>DEUT</code> para Deutsche Bank, <code>COBA</code> para
            Commerzbank.
          </li>
          <li>
            <strong>Código de país (2 letras):</strong> El país del banco según ISO 3166.
            Ejemplo: <code>DE</code> para Alemania, <code>ES</code> para España.
          </li>
          <li>
            <strong>Código de ubicación (2 caracteres):</strong> Identifica la oficina
            principal o un centro de procesamiento. Puede ser alfanumérico.
          </li>
          <li>
            <strong>Código de sucursal (3 caracteres, opcional):</strong> Identifica una
            sucursal específica. Si se omite, se reemplaza por <code>XXX</code> para indicar
            la oficina principal.
          </li>
        </ul>
        <p>
          Ejemplos de BIC: <code>DEUTDEDB</code> (Deutsche Bank, versión de 8 caracteres),
          <code>SSKMDEMMXXX</code> (Sparkasse München, versión de 11 caracteres).
        </p>

        <h3>¿Dónde encontrar tu BIC?</h3>
        <p>
          El BIC aparece habitualmente en:
        </p>
        <ul>
          <li>El extracto bancario (normalmente junto al IBAN)</li>
          <li>La aplicación móvil de tu banco, en la sección «datos de cuenta»</li>
          <li>La tarjeta de débito o crédito (en algunos bancos)</li>
          <li>El portal web de tu banco, en la sección de perfil o ajustes de cuenta</li>
          <li>La carta de bienvenida o contrato de apertura de cuenta</li>
        </ul>
      </section>

      <section aria-labelledby="bic-obligatorio" className="mt-10">
        <h2 id="bic-obligatorio">¿Es obligatorio el BIC para GiroCode?</h2>
        <p>
          La respuesta corta es: <strong>no, el BIC es opcional en la versión 002 del
          estándar EPC</strong>, que es la versión recomendada actualmente para todos los
          GiroCodes nuevos.
        </p>

        <h3>La migración SEPA de 2016</h3>
        <p>
          Hasta 2016, el BIC era obligatorio para las transferencias SEPA porque los
          sistemas bancarios lo necesitaban para enrutar correctamente los pagos. Sin
          embargo, a partir del 1 de febrero de 2016, la normativa europea (Reglamento UE
          260/2012) eliminó la obligatoriedad del BIC para los pagos SEPA nacionales y,
          posteriormente, para los pagos SEPA transfronterizos dentro de la zona SEPA.
          Desde entonces, los bancos pueden derivar el BIC a partir del IBAN usando tablas
          de enrutamiento internas.
        </p>

        <h3>¿Cuándo sigue siendo necesario el BIC?</h3>
        <p>
          Aunque técnicamente opcional, hay algunas situaciones en las que incluir el BIC
          en el GiroCode puede ser aconsejable:
        </p>
        <ul>
          <li>
            <strong>Transferencias a países fuera de la zona SEPA:</strong> Para pagos
            internacionales fuera del área SEPA (por ejemplo a Suiza, para cuentas no
            SEPA), el BIC puede seguir siendo necesario.
          </li>
          <li>
            <strong>Bancos con sistemas heredados:</strong> Algunos bancos más pequeños o
            con sistemas informáticos antiguos pueden no haber actualizado completamente
            sus tablas de enrutamiento y pueden requerir el BIC.
          </li>
          <li>
            <strong>Máxima compatibilidad:</strong> Si quieres garantizar la máxima
            compatibilidad con todas las apps bancarias, incluyendo las menos actualizadas,
            puedes incluir el BIC aunque sea opcional.
          </li>
        </ul>

        <h3>Transferencias nacionales vs. internacionales</h3>
        <p>
          Para transferencias dentro del mismo país SEPA (por ejemplo, de un banco alemán
          a otro banco alemán, o de un banco español a otro banco español), el BIC nunca
          es necesario hoy en día. Para transferencias entre países SEPA (por ejemplo, de
          Alemania a España), el BIC tampoco es necesario desde 2016. La única excepción
          son los pagos a instituciones bancarias que operan exclusivamente fuera del área
          SEPA.
        </p>
      </section>

      <section aria-labelledby="validacion-iban" className="mt-10">
        <h2 id="validacion-iban">Validación del IBAN explicada</h2>
        <p>
          La validación del IBAN mediante el <strong>algoritmo Mod-97</strong> permite
          detectar la mayoría de los errores tipográficos antes de que se ejecute una
          transferencia. Es un proceso matemático relativamente sencillo que cualquier
          aplicación puede implementar.
        </p>

        <h3>El algoritmo Mod-97 paso a paso</h3>
        <ol>
          <li>
            <strong>Reubicar los 4 primeros caracteres al final:</strong> Tomar el IBAN
            y mover los 4 primeros caracteres (código de país + dígitos de control) al
            final. Por ejemplo, <code>DE89370400440532013000</code> se convierte en
            <code>370400440532013000DE89</code>.
          </li>
          <li>
            <strong>Convertir letras a números:</strong> Reemplazar cada letra por su
            valor numérico según la tabla A=10, B=11, C=12, …, Z=35.
            <code>DE89</code> se convierte en <code>1314 89</code>.
            La cadena <code>370400440532013000DE89</code> se convierte en
            <code>3704004405320130001314 89</code>.
          </li>
          <li>
            <strong>Calcular el módulo 97:</strong> Dividir el número resultante por 97 y
            comprobar si el resto es igual a 1. Si el resto es 1, el IBAN es válido.
            Si no es 1, el IBAN contiene un error.
          </li>
        </ol>

        <h3>Por qué es importante la validación</h3>
        <p>
          La validación del IBAN antes de crear el GiroCode tiene varias ventajas
          importantes:
        </p>
        <ul>
          <li>
            <strong>Evita transferencias a cuentas incorrectas:</strong> Un IBAN con un
            dígito incorrecto puede corresponder a una cuenta real de otra persona, en cuyo
            caso el dinero se enviaría a la cuenta equivocada. Recuperar un pago enviado
            a la cuenta errónea puede ser un proceso largo y no siempre exitoso.
          </li>
          <li>
            <strong>Evita rechazos por error de formato:</strong> Un IBAN con dígitos de
            control incorrectos será rechazado automáticamente por el sistema bancario,
            causando un retraso en el pago.
          </li>
          <li>
            <strong>Mejora la experiencia del usuario:</strong> Detectar el error en el
            momento de introducir el IBAN, antes de crear el GiroCode, es mucho mejor que
            descubrirlo después de enviar la factura al cliente.
          </li>
        </ul>

        <h3>Errores comunes al introducir el IBAN</h3>
        <ul>
          <li>Confundir el 0 con la letra O</li>
          <li>Confundir el 1 con la letra I o la letra L</li>
          <li>Omitir el código de país (por ejemplo escribir solo los dígitos sin «DE» o «ES»)</li>
          <li>Introducir el IBAN con espacios (debe usarse sin espacios en el GiroCode)</li>
          <li>Transponer dos dígitos consecutivos (error muy frecuente)</li>
        </ul>

        <h3>Ejemplo de código de validación</h3>
        <div className="not-prose rounded-xl border border-slate-700 bg-slate-900 p-5">
          <p className="mb-3 text-xs text-slate-500">JavaScript: validación IBAN con Mod-97</p>
          <pre className="overflow-x-auto text-sm text-emerald-400">
{`function validateIBAN(iban) {
  // Eliminar espacios y convertir a mayúsculas
  const cleaned = iban.replace(/\\s/g, '').toUpperCase();

  // Verificar longitud mínima y caracteres válidos
  if (!/^[A-Z]{2}[0-9]{2}[A-Z0-9]+$/.test(cleaned)) {
    return false;
  }

  // Reubicar los 4 primeros caracteres al final
  const rearranged = cleaned.slice(4) + cleaned.slice(0, 4);

  // Convertir letras a números (A=10, B=11, ..., Z=35)
  const numeric = rearranged.replace(/[A-Z]/g, (char) =>
    (char.charCodeAt(0) - 55).toString()
  );

  // Calcular Mod-97 (para números grandes, se procesa en bloques)
  let remainder = 0;
  for (let i = 0; i < numeric.length; i += 7) {
    const chunk = remainder.toString() + numeric.slice(i, i + 7);
    remainder = parseInt(chunk, 10) % 97;
  }

  return remainder === 1;
}

// Ejemplo:
console.log(validateIBAN('DE89370400440532013000')); // true
console.log(validateIBAN('DE89370400440532013001')); // false`}
          </pre>
        </div>
      </section>

      <section aria-labelledby="formatos-paises" className="mt-10">
        <h2 id="formatos-paises">Formatos IBAN por país</h2>
        <p>
          La siguiente tabla muestra los formatos IBAN de los países de la zona SEPA más
          relevantes, con sus longitudes y estructura:
        </p>
        <div className="not-prose overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="py-2 pr-4 font-semibold text-slate-200">País</th>
                <th className="py-2 pr-4 font-semibold text-slate-200">Código</th>
                <th className="py-2 pr-4 font-semibold text-slate-200">Long.</th>
                <th className="py-2 font-semibold text-slate-200">Ejemplo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300 text-xs">
              <tr>
                <td className="py-2 pr-4">Alemania</td>
                <td className="py-2 pr-4 font-mono">DE</td>
                <td className="py-2 pr-4">22</td>
                <td className="py-2 font-mono">DE89370400440532013000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Austria</td>
                <td className="py-2 pr-4 font-mono">AT</td>
                <td className="py-2 pr-4">20</td>
                <td className="py-2 font-mono">AT611904300234573201</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Suiza</td>
                <td className="py-2 pr-4 font-mono">CH</td>
                <td className="py-2 pr-4">21</td>
                <td className="py-2 font-mono">CH9300762011623852957</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Francia</td>
                <td className="py-2 pr-4 font-mono">FR</td>
                <td className="py-2 pr-4">27</td>
                <td className="py-2 font-mono">FR7630006000011234567890189</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">España</td>
                <td className="py-2 pr-4 font-mono">ES</td>
                <td className="py-2 pr-4">24</td>
                <td className="py-2 font-mono">ES9121000418450200051332</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Italia</td>
                <td className="py-2 pr-4 font-mono">IT</td>
                <td className="py-2 pr-4">27</td>
                <td className="py-2 font-mono">IT60X0542811101000000123456</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Países Bajos</td>
                <td className="py-2 pr-4 font-mono">NL</td>
                <td className="py-2 pr-4">18</td>
                <td className="py-2 font-mono">NL91ABNA0417164300</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Bélgica</td>
                <td className="py-2 pr-4 font-mono">BE</td>
                <td className="py-2 pr-4">16</td>
                <td className="py-2 font-mono">BE71096123456769</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="seguridad-iban" className="mt-10">
        <h2 id="seguridad-iban">Seguridad del IBAN</h2>

        <h3>¿Es seguro compartir tu IBAN?</h3>
        <p>
          Esta es una pregunta muy frecuente. La respuesta es: <strong>sí, en general es
          seguro compartir tu IBAN con personas o empresas que van a pagarte</strong>. El
          IBAN por sí solo solo permite realizar transferencias <em>hacia</em> tu cuenta,
          no retirar dinero de ella. Para recibir una transferencia, necesariamente la otra
          parte tiene que saber tu IBAN.
        </p>
        <p>
          Sin embargo, en el caso de la <strong>domiciliación bancaria SEPA</strong>
          (SEPA Direct Debit), la situación es diferente: un mandato de domiciliación
          autoriza a una empresa a cobrar de tu cuenta. En este caso, debes ser más
          cuidadoso con quién compartes tu IBAN y solo otorgar mandatos de domiciliación
          a empresas en las que confías plenamente.
        </p>

        <h3>IBAN para domiciliación vs. transferencia</h3>
        <p>
          Es importante entender la diferencia:
        </p>
        <ul>
          <li>
            <strong>Transferencia SEPA (SCT):</strong> El dinero fluye desde la cuenta del
            pagador hacia la cuenta del beneficiario, siempre con iniciativa y autorización
            del pagador. Compartir tu IBAN solo permite que otros te transfieran dinero.
          </li>
          <li>
            <strong>Domiciliación SEPA (SDD):</strong> El acreedor inicia el cobro con un
            mandato previamente firmado. Aquí sí es necesario ser cuidadoso: un mandato de
            domiciliación firmado autoriza cargos en tu cuenta. Solo debes firmarlo con
            empresas de confianza y verificadas.
          </li>
        </ul>

        <h3>Privacidad con GiroCode</h3>
        <p>
          Un GiroCode contiene el IBAN, nombre y otros datos del <em>beneficiario</em>
          (el que recibe el pago), no del pagador. Esto significa que:
        </p>
        <ul>
          <li>
            El emisor de la factura (que crea el GiroCode) comparte su IBAN con el cliente,
            lo cual es completamente normal y necesario para recibir pagos.
          </li>
          <li>
            El cliente (que escanea el GiroCode) no comparte ningún dato bancario propio
            con el creador del código.
          </li>
          <li>
            Nuestro generador de GiroCode procesa todos los datos localmente en el navegador,
            sin enviarlos a ningún servidor, garantizando la máxima privacidad.
          </li>
        </ul>
      </section>
    </KnowledgeLayout>
  );
}
