import type { Metadata } from 'next';
import Link from 'next/link';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';

export const metadata: Metadata = {
  title: 'GiroCode en facturas – Guía completa & generador PDF',
  description:
    'Añade GiroCodes a tus facturas: requisitos legales, ubicación óptima y generador PDF gratuito. ✅ Facturas profesionales en 2 minutos.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/wissen/rechnung',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/rechnung',
      'de': 'https://www.girocodegenerator.com/wissen/rechnung',
      'en': 'https://www.girocodegenerator.com/en/wissen/rechnung',
      'fr': 'https://www.girocodegenerator.com/fr/wissen/rechnung',
      'es': 'https://www.girocodegenerator.com/es/wissen/rechnung',
    },
  },
};

export default function WissenRechnungPageEs() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="GiroCode en facturas"
      badge="Práctica · GiroCode en facturas"
      title="GiroCode en facturas – La guía completa"
      lead="Incluir un GiroCode en tus facturas es una de las mejoras más sencillas y efectivas que puedes hacer para acelerar el cobro y reducir errores. En esta guía completa te explicamos los requisitos legales de una factura en España y la UE, dónde y cómo colocar el GiroCode, qué herramientas usar y cómo responder a las preguntas más frecuentes de tus clientes."
      relatedArticles={[
        { href: '/es/wissen/girocode', label: '¿Qué es un GiroCode? – Todo lo que necesitas saber' },
        { href: '/es/wissen/betrag-und-zweck', label: 'Importe y concepto de pago en GiroCode' },
        { href: '/es/wissen/iban-bic', label: 'IBAN & BIC para GiroCode' },
        { href: '/es/wissen/banking-apps', label: 'Apps bancarias compatibles con GiroCode' },
        { href: '/es/wissen/scannen', label: 'Cómo escanear un GiroCode' },
      ]}
      locale="es"
    >
      <section aria-labelledby="por-que-girocode-factura">
        <h2 id="por-que-girocode-factura">¿Por qué usar GiroCode en facturas?</h2>
        <p>
          Cada vez que envías una factura sin GiroCode, estás transfiriendo a tu cliente
          la responsabilidad de copiar correctamente tu IBAN, el importe exacto y el
          concepto de pago. Cualquier error en este proceso puede significar semanas de
          retraso: el pago llega incompleto, con el concepto equivocado o simplemente no
          llega porque el IBAN se copió mal.
        </p>
        <p>
          Con un GiroCode en la factura, estos problemas desaparecen. El cliente escanea
          el código con su app bancaria y todos los datos se rellenan automáticamente.
          Solo tiene que confirmar. Este sencillo cambio tiene efectos medibles:
        </p>
        <ul>
          <li>
            <strong>Pagos más rápidos:</strong> La fricción del proceso de pago se reduce
            al mínimo, lo que aumenta la proporción de pagos realizados a tiempo.
          </li>
          <li>
            <strong>Menos errores:</strong> Sin introducción manual de datos, desaparecen
            los errores tipográficos en IBAN, importe y concepto.
          </li>
          <li>
            <strong>Conciliación automática:</strong> El número de factura llega siempre
            en el concepto exactamente como tú lo has configurado, facilitando la
            identificación del pago en tu contabilidad.
          </li>
          <li>
            <strong>Imagen profesional:</strong> Una factura con GiroCode transmite
            modernidad, organización y preocupación por la comodidad del cliente.
          </li>
          <li>
            <strong>Sin costes adicionales:</strong> A diferencia de PayPal o Stripe,
            el GiroCode no tiene comisiones. El dinero llega íntegro.
          </li>
        </ul>
      </section>

      <section aria-labelledby="menciones-legales" className="mt-10">
        <h2 id="menciones-legales">Menciones legales obligatorias en una factura (España/UE)</h2>
        <p>
          Antes de hablar del GiroCode, es fundamental recordar qué elementos debe
          contener obligatoriamente una factura en España y en la Unión Europea. El
          GiroCode es un complemento al contenido de la factura, pero no sustituye ningún
          elemento legal obligatorio.
        </p>
        <p>
          Según la Ley del IVA española y la Directiva 2006/112/CE de la UE, una factura
          completa debe incluir:
        </p>
        <ul>
          <li><strong>Número de factura:</strong> Correlativo y único. No puede haber dos facturas con el mismo número.</li>
          <li><strong>Fecha de expedición:</strong> La fecha en que se emite la factura.</li>
          <li><strong>Fecha de operación:</strong> Si difiere de la fecha de expedición (cuando se prestó el servicio o entregó el bien).</li>
          <li><strong>Nombre y apellidos o razón social del emisor:</strong> Nombre completo o nombre de la empresa.</li>
          <li><strong>Domicilio del emisor:</strong> Dirección fiscal o de la sede social.</li>
          <li><strong>NIF del emisor:</strong> Número de Identificación Fiscal (DNI, NIE o CIF).</li>
          <li><strong>Datos del destinatario:</strong> Nombre, dirección y NIF del cliente (en facturas B2B o cuando el cliente lo solicite).</li>
          <li><strong>Descripción de la operación:</strong> Descripción de los bienes entregados o servicios prestados.</li>
          <li><strong>Base imponible:</strong> El importe sin IVA.</li>
          <li><strong>Tipo impositivo de IVA:</strong> El porcentaje de IVA aplicado (21%, 10%, 4% o 0%).</li>
          <li><strong>Cuota tributaria:</strong> El importe del IVA en euros.</li>
          <li><strong>Importe total:</strong> La suma de la base imponible más el IVA.</li>
        </ul>

        <h3>Número de IVA (NIF-IVA)</h3>
        <p>
          Para facturas a clientes de otros países de la UE (operaciones intracomunitarias),
          debe incluirse el número de IVA intracomunitario (NIF-IVA), que en España tiene
          el formato «ES» seguido del NIF. Por ejemplo: <code>ESB12345678</code>.
        </p>

        <h3>Autónomos y pequeñas empresas: régimen de recargo de equivalencia y exención</h3>
        <p>
          Algunos autónomos y pequeñas empresas están acogidos a regímenes especiales de
          IVA. En estos casos, la factura debe incluir una mención específica:
        </p>
        <div className="not-prose rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm text-slate-300">
          <p className="font-semibold text-slate-200 mb-2">Texto de ejemplo para exención de IVA (art. 20 Ley IVA):</p>
          <p className="italic text-slate-400">
            «Operación exenta de IVA según el artículo 20.1.X de la Ley 37/1992, de 28 de
            diciembre, del Impuesto sobre el Valor Añadido.»
          </p>
        </div>
        <p className="mt-3">
          Nota: Consulta siempre con un asesor fiscal para asegurarte de que tus facturas
          cumplen la normativa aplicable a tu actividad específica.
        </p>
      </section>

      <section aria-labelledby="donde-colocar" className="mt-10">
        <h2 id="donde-colocar">¿Dónde colocar el GiroCode en una factura?</h2>
        <p>
          La posición del GiroCode en la factura afecta directamente a su usabilidad. Un
          código mal colocado puede pasar desapercibido o resultar difícil de escanear.
        </p>

        <h3>Posición recomendada: abajo a la derecha</h3>
        <p>
          La práctica estándar y más extendida es colocar el GiroCode en la
          <strong> esquina inferior derecha</strong> de la factura, junto a los datos
          bancarios (IBAN, nombre del banco). Esta posición tiene varias ventajas:
        </p>
        <ul>
          <li>Es la zona donde el cliente normalmente busca los datos de pago.</li>
          <li>Queda separada del cuerpo principal de la factura (líneas, importes, etc.).</li>
          <li>No interfiere con el número de factura ni con otros elementos legales importantes.</li>
          <li>Es fácilmente accesible para escanear con el móvil.</li>
        </ul>
        <p>
          También es posible colocarlo en la parte inferior central o junto al bloque de
          datos bancarios en cualquier posición de la factura, siempre que esté claramente
          visible y no quede comprimido.
        </p>

        <h3>Tamaño mínimo recomendado: 2 × 2 cm</h3>
        <p>
          El GiroCode debe tener al menos <strong>2 × 2 centímetros</strong> en la versión
          impresa para garantizar que las cámaras de smartphones de gama media puedan
          leerlo correctamente. Un tamaño de <strong>3 × 3 cm</strong> es más seguro y
          sigue siendo discreto en una factura estándar A4.
        </p>
        <p>
          En documentos digitales (PDF enviado por correo), el tamaño mínimo es menos
          crítico porque el destinatario puede hacer zoom en el documento antes de
          escanear. Sin embargo, en impresión física, el tamaño mínimo es fundamental.
        </p>

        <h3>Contraste y calidad de impresión</h3>
        <p>
          Para que el GiroCode sea legible:
        </p>
        <ul>
          <li>
            <strong>Módulos oscuros sobre fondo claro:</strong> La combinación estándar
            es negro sobre blanco. Evitar módulos grises o con poco contraste.
          </li>
          <li>
            <strong>No imprimir sobre fondos de color o imágenes:</strong> El código debe
            estar sobre un fondo completamente blanco o muy claro.
          </li>
          <li>
            <strong>Zona de silencio:</strong> Dejar un margen mínimo de 4 módulos
            alrededor del código, sin texto ni elementos gráficos.
          </li>
          <li>
            <strong>Impresora de calidad:</strong> Las impresoras de baja calidad o con
            tóner agotado pueden producir módulos borrosos que dificulten la lectura.
          </li>
        </ul>
      </section>

      <section aria-labelledby="paso-a-paso-factura" className="mt-10">
        <h2 id="paso-a-paso-factura">Paso a paso: crear una factura con GiroCode</h2>
        <p>
          Si usas nuestro generador gratuito junto con tu herramienta de facturación
          habitual, el proceso es el siguiente:
        </p>
        <ol>
          <li>
            <strong>Crea tu factura</strong> con tu herramienta habitual (Word, LibreOffice,
            Google Docs, Canva, etc.) con todos los elementos legales obligatorios.
            Deja un espacio en la esquina inferior derecha para el código QR (aprox. 3 × 3 cm).
          </li>
          <li>
            <strong>Ve al generador de GiroCode</strong> en{' '}
            <Link href="/es" className="text-sky-400 underline underline-offset-2 hover:text-sky-300">
              nuestra página de inicio
            </Link>{' '}
            e introduce:
            <ul>
              <li>Nombre del beneficiario (tu nombre o el de tu empresa)</li>
              <li>Tu IBAN</li>
              <li>El importe total de la factura (con IVA)</li>
              <li>El número de factura como concepto</li>
            </ul>
          </li>
          <li>
            <strong>Genera el código QR</strong> haciendo clic en el botón de generación.
            El código aparece en pantalla de forma instantánea.
          </li>
          <li>
            <strong>Descarga el código</strong> como PNG (para Word/LibreOffice) o SVG
            (para herramientas vectoriales como Canva o Illustrator).
          </li>
          <li>
            <strong>Inserta el código</strong> en tu factura en la posición reservada.
            Asegúrate de que tenga al menos 2 × 2 cm de tamaño y un margen blanco alrededor.
          </li>
          <li>
            <strong>Exporta a PDF</strong> y envía la factura a tu cliente.
          </li>
        </ol>
      </section>

      <section aria-labelledby="faq-rechnung" className="mt-10">
        <h2 id="faq-rechnung">Preguntas frecuentes</h2>

        <h3>1. ¿Es obligatorio incluir un GiroCode en las facturas?</h3>
        <p>
          No, el GiroCode es completamente opcional. No existe ninguna normativa legal que
          obligue a incluirlo en las facturas. Es simplemente una mejora que facilita el
          proceso de pago para el cliente y el cobro para el emisor.
        </p>

        <h3>2. ¿El GiroCode sustituye a los datos bancarios en la factura?</h3>
        <p>
          No. El GiroCode complementa los datos bancarios pero no los sustituye. Es buena
          práctica incluir tanto el GiroCode como los datos bancarios en texto (IBAN, nombre
          del banco), para que los clientes que no tengan una app compatible también puedan
          realizar la transferencia manualmente.
        </p>

        <h3>3. ¿Puedo usar el mismo GiroCode para todas mis facturas?</h3>
        <p>
          No es recomendable. Cada factura debe tener su propio GiroCode con el importe
          correcto y el número de factura en el concepto. Si usas el mismo código para
          todas las facturas, el concepto no identificará cada pago individualmente,
          dificultando la conciliación contable.
        </p>

        <h3>4. ¿Qué pasa si el cliente paga un importe diferente al del GiroCode?</h3>
        <p>
          Los datos del GiroCode son sugerencias iniciales. El cliente puede modificar el
          importe antes de confirmar la transferencia. Si un cliente paga menos de lo
          indicado, habrá un pago parcial y deberás gestionar la diferencia manualmente.
          Si paga más, tendrás un exceso que debes devolver.
        </p>

        <h3>5. ¿El GiroCode funciona para facturas internacionales dentro de la UE?</h3>
        <p>
          Sí, siempre que el cliente tenga una cuenta bancaria en un país de la zona SEPA
          y su app bancaria soporte el estándar EPC/SEPA-QR. Para clientes fuera de la
          zona SEPA, el GiroCode no es aplicable y deberás usar otros métodos de pago.
        </p>

        <h3>6. ¿Puedo incluir el GiroCode en facturas electrónicas (e-factura)?</h3>
        <p>
          Sí. En la mayoría de los formatos de factura electrónica (XML, PDF/A, ZUGFeRD,
          Factur-X), es posible incluir una representación visual del GiroCode. Algunos
          formatos de e-factura incluso permiten incluir los datos de pago en campos
          estructurados que equivalen al contenido del GiroCode.
        </p>

        <h3>7. ¿Se puede usar el GiroCode para el cobro de cuotas de asociación?</h3>
        <p>
          Absolutamente sí, y es uno de los usos más populares. Las asociaciones usan
          GiroCodes para facilitar el pago de cuotas anuales o mensuales. Se puede crear
          un GiroCode diferente para cada socio (con el número de socio en el concepto)
          o un GiroCode genérico sin importe para donaciones y cuotas de importe libre.
        </p>

        <h3>8. ¿Puedo enviar el GiroCode por correo electrónico sin imprimirlo?</h3>
        <p>
          Sí. El GiroCode puede incluirse en el cuerpo de un correo electrónico o en
          un PDF adjunto. El cliente puede escanear el código desde la pantalla de su
          ordenador o móvil usando la función de escaneo QR de su app bancaria. La
          mayoría de las apps permiten escanear desde la galería de fotos del móvil,
          por lo que el cliente puede hacer una captura de pantalla y escanearla.
        </p>
      </section>
    </KnowledgeLayout>
  );
}
