import type { Metadata } from 'next';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';

export const metadata: Metadata = {
  title: 'Cómo escanear un GiroCode – Guía completa para iPhone y Android',
  description:
    'Escanea un GiroCode con tu app bancaria: guía paso a paso para iPhone y Android, solución de problemas y consejos de seguridad.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/wissen/scannen',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/scannen',
      'de': 'https://www.girocodegenerator.com/wissen/scannen',
      'en': 'https://www.girocodegenerator.com/en/wissen/scannen',
      'fr': 'https://www.girocodegenerator.com/fr/wissen/scannen',
      'es': 'https://www.girocodegenerator.com/es/wissen/scannen',
    },
  },
};

export default function WissenScannenPageEs() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="Cómo escanear un GiroCode"
      badge="Práctica · Escanear GiroCode"
      title="Cómo escanear un GiroCode – Guía completa para iPhone y Android"
      lead="Escanear un GiroCode para pagar una factura es rápido y sencillo, pero el proceso exacto varía según el sistema operativo y la app bancaria. En esta guía completa te explicamos cómo hacerlo en iPhone (iOS) y en Android, qué hacer si el escaneo falla, y cómo escanear GiroCodes en documentos digitales sin imprimirlos."
      relatedArticles={[
        { href: '/es/wissen/banking-apps', label: 'Apps bancarias compatibles con GiroCode – Resumen completo 2025' },
        { href: '/es/wissen/girocode', label: '¿Qué es un GiroCode? – Todo lo que necesitas saber' },
        { href: '/es/wissen/rechnung', label: 'GiroCode en facturas – La guía completa' },
        { href: '/es/wissen/epc-standard', label: 'Norma EPC & SEPA-QR – Estructura técnica' },
        { href: '/es/wissen/iban-bic', label: 'IBAN & BIC para GiroCode' },
        { href: '/es/wissen/betrag-und-zweck', label: 'Importe y concepto de pago en GiroCode' },
      ]}
      locale="es"
    >
      <section aria-labelledby="como-funciona-escaneo">
        <h2 id="como-funciona-escaneo">Escanear un GiroCode – Cómo funciona</h2>
        <p>
          Un GiroCode es un código QR estándar con un contenido especial: el payload EPC
          con los datos de la transferencia SEPA. Para escanearlo y realizar el pago, no
          usas la cámara del sistema operativo ni una app genérica de lectura de QR.
          <strong> Debes usar la función de escaneo integrada en tu app bancaria</strong>,
          ya que es la única que puede interpretar el contenido del GiroCode como una orden
          de transferencia y rellenar automáticamente el formulario de pago.
        </p>
        <p>
          El proceso completo tiene tres fases:
        </p>
        <ol>
          <li>
            <strong>Abrir la función de escaneo en la app bancaria:</strong> La mayoría
            de las apps lo tienen en la sección de transferencias, bajo «nueva transferencia»
            o con un icono de cámara/QR.
          </li>
          <li>
            <strong>Apuntar al GiroCode:</strong> La cámara del móvil detecta el código
            automáticamente. No es necesario hacer clic; el reconocimiento es automático
            en cuanto el código está enfocado.
          </li>
          <li>
            <strong>Revisar y confirmar:</strong> La app muestra los datos cargados. El
            usuario los verifica y confirma el pago.
          </li>
        </ol>
        <p>
          El proceso completo dura normalmente entre 10 y 30 segundos, dependiendo de la
          velocidad de la cámara y la calidad del código impreso.
        </p>
      </section>

      <section aria-labelledby="escaneo-iphone" className="mt-10">
        <h2 id="escaneo-iphone">Escanear en iPhone (iOS) – Paso a paso</h2>
        <p>
          Los usuarios de iPhone tienen varias opciones para escanear GiroCodes,
          dependiendo de su banco:
        </p>

        <h3>Método principal: función de escaneo en la app bancaria</h3>
        <ol>
          <li>
            <strong>Abre la app bancaria</strong> en tu iPhone (p. ej. Sparkasse, ING,
            DKB, Commerzbank, Volksbank/VR-Banking, etc.).
          </li>
          <li>
            Navega a la sección <strong>«Transferencias»</strong> o «Nueva transferencia»
            o «Überweisen».
          </li>
          <li>
            Busca el <strong>icono de cámara o código QR</strong>. Suele aparecer:
            <ul>
              <li>En la barra superior de la pantalla de transferencias</li>
              <li>Como botón junto al campo del IBAN</li>
              <li>Como opción en un menú de «opciones de pago»</li>
            </ul>
          </li>
          <li>
            Al tocar el icono, la app te pedirá <strong>permiso para acceder a la
            cámara</strong> si es la primera vez. Concede el permiso.
          </li>
          <li>
            Apunta la cámara al GiroCode. Asegúrate de que:
            <ul>
              <li>El código esté completamente dentro del recuadro de la cámara</li>
              <li>La iluminación sea suficiente (evitar sombras sobre el código)</li>
              <li>El código esté enfocado (mantén el móvil estable a unos 15-25 cm)</li>
            </ul>
          </li>
          <li>
            La app detecta el código automáticamente y <strong>rellena el formulario</strong>
            con los datos: nombre del beneficiario, IBAN, importe y concepto.
          </li>
          <li>
            <strong>Verifica los datos</strong> y toca «Continuar» o «Weiter».
          </li>
          <li>
            Confirma el pago con tu <strong>Face ID, Touch ID o PIN</strong>.
          </li>
        </ol>

        <h3>Método alternativo para iPhone: escanear desde la galería de fotos</h3>
        <p>
          Si el GiroCode está en un PDF o en una imagen en tu iPhone y no quieres o no
          puedes imprimir el documento, muchas apps bancarias permiten escanear desde
          la galería de fotos:
        </p>
        <ol>
          <li>
            Abre el PDF o la imagen con el GiroCode y haz una <strong>captura de
            pantalla</strong> del código (botón lateral + volumen arriba en iPhones modernos).
          </li>
          <li>
            En la app bancaria, activa la función de escaneo QR.
          </li>
          <li>
            Busca la opción <strong>«Desde galería»</strong> o «Foto» (disponible en
            algunas apps como Sparkasse o ING).
          </li>
          <li>
            Selecciona la captura de pantalla con el GiroCode.
          </li>
          <li>
            La app procesa la imagen y extrae los datos del GiroCode.
          </li>
        </ol>
        <p>
          Nota: No todas las apps bancarias permiten escanear desde la galería. Si la
          tuya no lo permite, tendrás que imprimir el documento o acercar la pantalla
          del ordenador a la cámara del iPhone.
        </p>
      </section>

      <section aria-labelledby="escaneo-android" className="mt-10">
        <h2 id="escaneo-android">Escanear en Android – Paso a paso</h2>
        <p>
          El proceso en Android es similar al de iPhone, pero con algunas diferencias
          específicas del sistema operativo y de los fabricantes de dispositivos.
        </p>

        <h3>Método principal: app bancaria</h3>
        <ol>
          <li>
            <strong>Abre tu app bancaria</strong> (Sparkasse, VR-Banking, ING, DKB,
            Commerzbank, etc.).
          </li>
          <li>
            Ve a la sección de <strong>transferencias</strong>.
          </li>
          <li>
            Toca el <strong>icono de cámara o QR</strong> en el formulario de
            transferencia.
          </li>
          <li>
            Si la app pide permiso de acceso a la cámara por primera vez, concédelo.
            En Android, los permisos se gestionan desde Ajustes → Aplicaciones →
            [Nombre de la app] → Permisos → Cámara.
          </li>
          <li>
            <strong>Apunta al GiroCode.</strong> Mantén el dispositivo estable. La
            mayoría de las apps de Android reconocen el código en menos de 2 segundos
            si está bien iluminado y dentro del área de enfoque.
          </li>
          <li>
            Los datos se cargan automáticamente. <strong>Compruébalos</strong> antes
            de continuar.
          </li>
          <li>
            Confirma el pago con tu <strong>PIN de la app, huella dactilar o
            reconocimiento facial</strong> (según la configuración de seguridad de
            tu app bancaria).
          </li>
        </ol>

        <h3>Método alternativo Android: Google Lens o cámara del sistema</h3>
        <p>
          En algunos teléfonos Android, la cámara del sistema o Google Lens pueden
          reconocer códigos QR y, en el caso de GiroCodes, mostrar los datos de la
          transferencia. Sin embargo, <strong>no pueden ejecutar la transferencia
          directamente</strong>; solo muestran el contenido. Para pagar, debes abrir
          la app bancaria de todos modos.
        </p>
        <p>
          Esta opción puede ser útil como método de verificación: si quieres comprobar
          qué datos contiene un GiroCode antes de pagarlo, puedes usar la cámara del
          sistema para ver el contenido del código.
        </p>

        <h3>Diferencias entre fabricantes Android</h3>
        <p>
          Los dispositivos Android de distintos fabricantes pueden tener la función de
          cámara integrada con diferentes capacidades:
        </p>
        <ul>
          <li>
            <strong>Samsung:</strong> La cámara Samsung detecta códigos QR automáticamente
            en el modo cámara estándar, pero para GiroCodes de pago debe usarse la app
            bancaria.
          </li>
          <li>
            <strong>Pixel (Google):</strong> Google Lens integrado puede leer GiroCodes
            y mostrar los datos, pero la ejecución del pago requiere la app bancaria.
          </li>
          <li>
            <strong>Xiaomi/MIUI:</strong> La cámara tiene lector QR integrado. Similar
            al caso de Samsung.
          </li>
        </ul>
        <p>
          En todos los casos: para <em>pagar</em> con un GiroCode, usa siempre la función
          de escaneo de tu app bancaria, no la cámara del sistema.
        </p>
      </section>

      <section aria-labelledby="solucion-problemas" className="mt-10">
        <h2 id="solucion-problemas">Solución de problemas – Problemas comunes y soluciones</h2>
        <p>
          Si la app bancaria no puede leer el GiroCode, aquí tienes las causas más
          frecuentes y cómo solucionarlas:
        </p>

        <div className="not-prose space-y-3 mt-4">
          <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
            <p className="font-semibold text-slate-200">Problema: La cámara no detecta el código</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-300">
              <li>→ Asegúrate de que el código esté completamente iluminado y sin sombras.</li>
              <li>→ Acerca o aleja el móvil (distancia ideal: 15-25 cm).</li>
              <li>→ Limpia el objetivo de la cámara del móvil.</li>
              <li>→ Mantén el móvil completamente quieto durante el escaneo.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
            <p className="font-semibold text-slate-200">Problema: El código se lee pero los datos son incorrectos</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-300">
              <li>→ El GiroCode puede contener un error en la generación.</li>
              <li>→ Verifica que el IBAN, importe y concepto en la app coinciden con la factura.</li>
              <li>→ Si el IBAN está truncado o mal formateado, el código fue generado incorrectamente.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
            <p className="font-semibold text-slate-200">Problema: La app bancaria no tiene función de escaneo QR</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-300">
              <li>→ Actualiza la app a la versión más reciente.</li>
              <li>→ Consulta la web del banco si hay una función QR en la banca online.</li>
              <li>→ Como alternativa, introduce los datos manualmente desde el texto de la factura.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
            <p className="font-semibold text-slate-200">Problema: El código impreso está borroso o tiene muy bajo contraste</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-300">
              <li>→ Reimprimir el documento con una impresora de mejor calidad o con el tóner/cartucho lleno.</li>
              <li>→ En documentos PDF, aumentar el zoom en pantalla y escanear desde la pantalla del ordenador.</li>
              <li>→ Pedir al emisor que reenvíe la factura en formato digital de alta resolución.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
            <p className="font-semibold text-slate-200">Problema: El código es demasiado pequeño en la factura impresa</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-300">
              <li>→ Usar el PDF digital en lugar del impreso para escanear desde pantalla.</li>
              <li>→ Informar al emisor de que el GiroCode debe tener al menos 2 × 2 cm.</li>
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="calidad-girocode" className="mt-10">
        <h2 id="calidad-girocode">Requisitos de calidad para GiroCodes legibles</h2>
        <p>
          La legibilidad de un GiroCode depende principalmente de cuatro factores:
          tamaño, contraste, corrección de errores y contenido del código.
        </p>

        <h3>Tamaño mínimo</h3>
        <p>
          El GiroCode debe tener al menos <strong>2 × 2 cm</strong> en versión impresa.
          Para documentos de uso habitual (facturas A4), se recomienda un tamaño de
          <strong> 3 × 3 cm</strong> para mayor robustez. En documentos de pequeño formato
          (tarjetas de visita, facturas simplificadas), asegúrate de que el código no
          quede por debajo del mínimo absoluto de 2 cm por lado.
        </p>

        <h3>Contraste</h3>
        <p>
          La diferencia de contraste entre los módulos oscuros del código y el fondo
          claro debe ser máxima. El código en negro sobre fondo blanco es el estándar.
          Evita:
        </p>
        <ul>
          <li>Fondos de color (incluso colores claros como amarillo o beige reducen la legibilidad)</li>
          <li>Fondos con imágenes o texturas</li>
          <li>Módulos de color gris oscuro en lugar de negro</li>
          <li>Inversión de colores (blanco sobre negro) sin verificar la compatibilidad con la app</li>
        </ul>

        <h3>Nivel de corrección de errores</h3>
        <p>
          El estándar EPC especifica el nivel M (15 % de recuperación de datos dañados).
          Este nivel permite que el código siga siendo legible aunque tenga pequeñas
          manchas de tinta, arañazos o marcas de plegado. Sin embargo, para garantizar
          la máxima legibilidad, evita doblar la factura exactamente sobre el código QR.
        </p>

        <h3>Longitud del contenido</h3>
        <p>
          Un GiroCode con un concepto muy largo (cerca de los 140 caracteres) o un nombre
          de beneficiario largo (cerca de los 70 caracteres) genera un código QR con más
          módulos y, por tanto, más denso. Un código más denso requiere un tamaño mayor
          para ser legible. Si usas conceptos cortos (30-50 caracteres), el código será
          más simple y fácil de leer incluso a tamaños pequeños.
        </p>
      </section>

      <section aria-labelledby="escaneo-digital" className="mt-10">
        <h2 id="escaneo-digital">Escanear GiroCodes digitalmente (desde una pantalla)</h2>
        <p>
          Cada vez más facturas se envían y reciben en formato digital (PDF por correo
          electrónico). En este caso, no es necesario imprimir la factura para escanear
          el GiroCode. Hay varias formas de hacerlo directamente desde la pantalla:
        </p>

        <h3>Método 1: Escanear la pantalla del ordenador con el móvil</h3>
        <p>
          La forma más directa es abrir el PDF en el ordenador, hacer zoom en el GiroCode
          hasta que ocupe al menos 5-6 cm de pantalla, y escanear con la función QR de
          la app bancaria del móvil apuntando a la pantalla del ordenador. La pantalla del
          ordenador emite luz propia, lo que generalmente facilita el escaneo.
        </p>

        <h3>Método 2: Captura de pantalla y escaneo desde galería</h3>
        <p>
          Si el GiroCode está en el móvil (PDF en el móvil o imagen recibida por
          WhatsApp/correo):
        </p>
        <ol>
          <li>Abre el PDF o imagen y haz una captura de pantalla del código.</li>
          <li>Abre la app bancaria y activa la función de escaneo QR.</li>
          <li>Si la app permite escanear desde galería, selecciona la captura de pantalla.</li>
          <li>La app procesa la imagen y extrae los datos del GiroCode.</li>
        </ol>

        <h3>Método 3: Dos dispositivos</h3>
        <p>
          Si tu app bancaria no permite escanear desde galería, puedes usar dos
          dispositivos: mostrar el GiroCode en la pantalla de un dispositivo (ordenador
          o tablet) y escanearlo con la cámara del segundo dispositivo (el móvil con la
          app bancaria).
        </p>

        <h3>Consideraciones para pantallas OLED</h3>
        <p>
          Las pantallas OLED de algunos smartphones muestran el negro verdadero como
          ausencia de luz, lo que puede crear un contraste muy alto. Esto es positivo
          para la legibilidad del GiroCode. Las pantallas LED/LCD estándar también
          funcionan perfectamente para mostrar códigos QR destinados al escaneo.
        </p>
      </section>

      <section aria-labelledby="consejos-seguridad-scan" className="mt-10">
        <h2 id="consejos-seguridad-scan">Consejos de seguridad al escanear</h2>
        <p>
          El GiroCode es un método de pago seguro, pero como con cualquier operación
          financiera, es importante seguir buenas prácticas de seguridad:
        </p>
        <ul>
          <li>
            <strong>Verifica siempre el nombre del beneficiario:</strong> El nombre del
            receptor debe coincidir exactamente con quien esperas pagar. Es el primer dato
            que debes comprobar.
          </li>
          <li>
            <strong>Revisa el IBAN:</strong> Aunque no memorices el IBAN completo, al
            menos verifica los primeros 6-8 caracteres (código de país + dígitos de control
            + inicio del código bancario).
          </li>
          <li>
            <strong>Confirma el importe:</strong> Que sea exactamente el que aparece en
            la factura. Si hay discrepancia, algo ha fallado en la generación del código.
          </li>
          <li>
            <strong>No escanees códigos de fuentes desconocidas:</strong> Si recibes una
            factura inesperada con un GiroCode, verifica la legitimidad del emisor antes
            de escanear y pagar.
          </li>
          <li>
            <strong>Cuidado con carteles públicos:</strong> En contextos públicos (puntos
            de donación, eventos), verifica visualmente que el código QR no sea una
            etiqueta pegada encima del código original.
          </li>
          <li>
            <strong>Usa siempre tu app bancaria oficial:</strong> Descarga la app solo
            desde las tiendas oficiales (App Store, Google Play). Nunca uses apps de
            terceros no verificadas para realizar transferencias bancarias.
          </li>
        </ul>
      </section>

      <section aria-labelledby="faq-scannen" className="mt-10">
        <h2 id="faq-scannen">Preguntas frecuentes</h2>

        <h3>1. ¿Puedo pagar un GiroCode con la cámara normal del móvil?</h3>
        <p>
          No directamente. La cámara del sistema puede leer el contenido del GiroCode
          (mostrará el texto del payload EPC), pero no puede iniciar una transferencia
          bancaria. Para pagar, debes usar la función de escaneo integrada en tu app
          bancaria.
        </p>

        <h3>2. ¿Funciona el escáner QR de la app bancaria con todos los GiroCodes?</h3>
        <p>
          Sí, siempre que el GiroCode haya sido generado correctamente según el estándar
          EPC. Un GiroCode generado con nuestro generador o con software de facturación
          conocido (sevDesk, FastBill, DATEV, etc.) será compatible con todas las apps
          bancarias que soportan el estándar SEPA-QR.
        </p>

        <h3>3. ¿Qué pasa si escaneo un GiroCode y los datos son incorrectos?</h3>
        <p>
          Puedes editar los datos manualmente en el formulario de transferencia antes de
          confirmar. Si el IBAN, el nombre o el importe son incorrectos, modifícalos
          directamente en la app. Si el error es sistemático (el emisor generó el código
          mal), informa al emisor para que corrija el código.
        </p>

        <h3>4. ¿El pago mediante GiroCode es instantáneo?</h3>
        <p>
          Depende del banco. Si ambos bancos (el del pagador y el del beneficiario)
          soportan SEPA Instant (transferencia SEPA instantánea), el pago puede llegar
          en segundos. Si no, se procesa como una transferencia SEPA estándar, que puede
          tardar entre unos minutos y un día hábil según la hora y el banco.
        </p>

        <h3>5. ¿Puedo cancelar un pago ya confirmado mediante GiroCode?</h3>
        <p>
          Una vez confirmada la transferencia, es difícil cancelarla. Las transferencias
          SEPA pueden solicitarse como «recall» (revocación) a través del banco, pero no
          hay garantía de éxito, especialmente si el dinero ya ha llegado al beneficiario.
          Por ello es fundamental verificar los datos antes de confirmar.
        </p>

        <h3>6. ¿Es seguro escanear un GiroCode en un establecimiento público?</h3>
        <p>
          Sí, con precauciones. Siempre verifica que el código QR del establecimiento
          es original (no una etiqueta pegada encima) y comprueba los datos mostrados
          por la app antes de confirmar. El nombre del beneficiario debe coincidir con
          el establecimiento donde estás.
        </p>

        <h3>7. ¿Puedo escanear un GiroCode recibido por WhatsApp?</h3>
        <p>
          Sí, si tienes la imagen del GiroCode en tu galería, muchas apps bancarias
          permiten seleccionarla desde la galería para extraer los datos. Alternativamente,
          puedes mostrar la imagen en la pantalla del móvil y escanear con otro dispositivo,
          o imprimir la imagen y escanearla físicamente.
        </p>

        <h3>8. ¿Qué hago si mi banco no soporta GiroCodes?</h3>
        <p>
          Puedes usar una app de terceros para leer el contenido del GiroCode (ver los
          datos de la transferencia) e introducirlos manualmente en la app de tu banco.
          También puedes solicitarle a tu banco que añada soporte para GiroCodes, ya que
          el estándar es oficial y cada vez más extendido. Si cambias de banco, considera
          uno que lo soporte.
        </p>
      </section>
    </KnowledgeLayout>
  );
}
