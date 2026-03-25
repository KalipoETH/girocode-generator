import type { Metadata } from 'next';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';

export const metadata: Metadata = {
  title: 'Importe y concepto de pago en GiroCode – Guía completa',
  description:
    'Cómo introducir correctamente el importe y el concepto de pago en un GiroCode: formato, límites, buenas prácticas y ejemplos.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/es/wissen/betrag-und-zweck',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/betrag-und-zweck',
      'de': 'https://www.girocodegenerator.com/wissen/betrag-und-zweck',
      'en': 'https://www.girocodegenerator.com/en/wissen/betrag-und-zweck',
      'fr': 'https://www.girocodegenerator.com/fr/wissen/betrag-und-zweck',
      'es': 'https://www.girocodegenerator.com/es/wissen/betrag-und-zweck',
    },
  },
};

export default function WissenBetragUndZweckPageEs() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="Importe y concepto de pago"
      badge="Práctica · Importe y concepto"
      title="Importe y concepto de pago en GiroCode – Guía completa"
      lead="El importe y el concepto de pago son los dos campos variables más importantes de un GiroCode. Cómo los configures determina si la conciliación de pagos será sencilla o un dolor de cabeza. En esta guía encontrarás el formato exacto, los límites técnicos, las mejores prácticas para cada sector y ejemplos concretos."
      relatedArticles={[
        { href: '/es/wissen/girocode', label: '¿Qué es un GiroCode? – Todo lo que necesitas saber' },
        { href: '/es/wissen/epc-standard', label: 'Norma EPC & SEPA-QR – Estructura técnica' },
        { href: '/es/wissen/iban-bic', label: 'IBAN & BIC para GiroCode' },
        { href: '/es/wissen/rechnung', label: 'GiroCode en facturas – La guía completa' },
        { href: '/es/wissen/banking-apps', label: 'Apps bancarias compatibles con GiroCode' },
      ]}
      locale="es"
    >
      <section aria-labelledby="importe-girocode">
        <h2 id="importe-girocode">El importe en GiroCode</h2>
        <p>
          El importe es uno de los dos campos variables más importantes de un GiroCode,
          junto con el concepto de pago. Su correcta configuración garantiza que el
          cliente pague exactamente la cantidad correcta y que la conciliación contable
          sea automática.
        </p>

        <h3>Formato: EUR12.34</h3>
        <p>
          El estándar EPC define un formato muy preciso para el importe:
        </p>
        <ul>
          <li>
            Siempre comienza con el código de moneda ISO 4217: <strong><code>EUR</code></strong>
            (en mayúsculas, sin espacio).
          </li>
          <li>
            Seguido directamente del importe numérico con <strong>punto como separador
            decimal</strong> (no coma).
          </li>
          <li>
            El importe debe tener exactamente <strong>dos decimales</strong>.
          </li>
        </ul>
        <p>Ejemplos válidos:</p>
        <div className="not-prose rounded-xl border border-slate-700 bg-slate-900 p-4 font-mono text-sm">
          <p className="text-emerald-400">EUR0.01    ← importe mínimo (1 céntimo)</p>
          <p className="text-emerald-400">EUR19.99   ← importe típico</p>
          <p className="text-emerald-400">EUR1250.00 ← importe sin decimales (siempre .00)</p>
          <p className="text-emerald-400">EUR999999999.99 ← importe máximo teórico</p>
        </div>
        <p>Ejemplos inválidos:</p>
        <div className="not-prose rounded-xl border border-slate-700 bg-slate-900 p-4 font-mono text-sm">
          <p className="text-red-400">EUR 19.99  ← espacio entre EUR y el número</p>
          <p className="text-red-400">EUR19,99   ← coma en lugar de punto</p>
          <p className="text-red-400">eur19.99   ← EUR en minúsculas</p>
          <p className="text-red-400">19.99      ← sin código de moneda</p>
        </div>

        <h3>¿Es obligatorio el importe? No, es opcional</h3>
        <p>
          Una característica importante del GiroCode es que el importe es un campo
          <strong> completamente opcional</strong>. Si el campo se deja vacío, la app
          bancaria rellenará automáticamente el beneficiario, el IBAN y el concepto, pero
          el campo de importe quedará vacío y el pagador deberá introducirlo manualmente.
        </p>
        <p>
          Esto tiene ventajas e inconvenientes según el caso de uso, que analizamos en la
          siguiente sección.
        </p>

        <h3>¿Qué ocurre sin importe?</h3>
        <p>
          Cuando el GiroCode no incluye importe:
        </p>
        <ol>
          <li>
            La app bancaria escanea el código y rellena el formulario de transferencia con
            el nombre del beneficiario, IBAN (y BIC si está incluido) y el concepto.
          </li>
          <li>
            El campo de importe aparece vacío o con cero. El pagador debe introducir
            la cantidad manualmente antes de confirmar.
          </li>
          <li>
            La transferencia se ejecuta con el importe que el pagador haya introducido,
            independientemente del importe real de la factura.
          </li>
        </ol>

        <h3>Importe máximo según el estándar EPC</h3>
        <p>
          El estándar EPC define un importe máximo teórico de <strong>EUR 999.999.999,99</strong>
          (aproximadamente 999 millones de euros). Sin embargo, en la práctica, los límites
          máximos de transferencia están determinados por el banco del pagador y los acuerdos
          de su contrato bancario, no por el GiroCode en sí. La mayoría de los bancos tienen
          límites diarios de transferencia muy por debajo de ese máximo teórico.
        </p>
      </section>

      <section aria-labelledby="ventajas-sin-importe" className="mt-10">
        <h2 id="ventajas-sin-importe">Ventajas e inconvenientes según si se incluye el importe</h2>

        <div className="not-prose overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="py-2 pr-4 font-semibold text-slate-200">Aspecto</th>
                <th className="py-2 pr-4 font-semibold text-emerald-300">Con importe fijo</th>
                <th className="py-2 font-semibold text-yellow-300">Sin importe</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              <tr>
                <td className="py-2 pr-4">Riesgo de pago incorrecto</td>
                <td className="py-2 pr-4 text-emerald-400">Muy bajo</td>
                <td className="py-2 text-yellow-400">Más alto</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Facilidad para el pagador</td>
                <td className="py-2 pr-4 text-emerald-400">Máxima (no introduce nada)</td>
                <td className="py-2 text-yellow-400">Debe introducir importe</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Uso en facturas con total fijo</td>
                <td className="py-2 pr-4 text-emerald-400">Ideal</td>
                <td className="py-2 text-red-400">No recomendado</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Uso en donaciones</td>
                <td className="py-2 pr-4 text-red-400">Restrictivo</td>
                <td className="py-2 text-emerald-400">Ideal</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Uso en pagos voluntarios</td>
                <td className="py-2 pr-4 text-yellow-400">Puede limitarse</td>
                <td className="py-2 text-emerald-400">Ideal</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Conciliación contable automática</td>
                <td className="py-2 pr-4 text-emerald-400">Fácil</td>
                <td className="py-2 text-yellow-400">Más manual</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4">
          Como regla general: incluye siempre el importe en facturas profesionales con
          total definido. Deja el importe vacío únicamente en situaciones donde el pagador
          debe elegir la cantidad libremente, como donaciones o aportaciones voluntarias.
        </p>
      </section>

      <section aria-labelledby="concepto-pago" className="mt-10">
        <h2 id="concepto-pago">El concepto de pago en GiroCode</h2>
        <p>
          El concepto de pago (también llamado referencia de pago o «Verwendungszweck»
          en alemán) es el texto que aparece en el extracto bancario del pagador y en el
          movimiento de la cuenta del beneficiario. Es el campo clave para identificar
          de qué factura o transacción se trata.
        </p>

        <h3>Longitud máxima: 140 caracteres</h3>
        <p>
          El estándar EPC limita el concepto de pago a un máximo de
          <strong> 140 caracteres</strong>. Este límite coincide con el límite del campo
          de referencia en las transferencias SEPA estándar. Los caracteres adicionales
          serán truncados o provocarán un error en la generación del código.
        </p>
        <p>
          140 caracteres son suficientes para incluir toda la información relevante de
          forma concisa. Sin embargo, hay que elegir bien qué incluir para no desperdiciar
          espacio con información redundante.
        </p>

        <h3>Caracteres permitidos (UTF-8)</h3>
        <p>
          El estándar EPC versión 002 especifica la codificación UTF-8, que incluye
          prácticamente todos los caracteres del alfabeto latino y muchos caracteres
          especiales europeos. Sin embargo, para máxima compatibilidad con todas las
          apps bancarias, se recomienda usar solo caracteres del siguiente conjunto:
        </p>
        <ul>
          <li>Letras: A-Z, a-z, incluyendo vocales acentuadas (á, é, í, ó, ú, ü, ö, ä) y ñ</li>
          <li>Dígitos: 0-9</li>
          <li>Caracteres especiales básicos: espacio, punto, coma, guion, barra inclinada, paréntesis</li>
          <li>Evitar: emojis, caracteres de control, comillas tipográficas, saltos de línea</li>
        </ul>

        <h3>¿Qué incluir en el concepto?</h3>
        <p>
          La elección de qué incluir en el concepto depende del caso de uso. En general,
          el concepto debe contener la información mínima necesaria para que tanto el
          pagador como el beneficiario puedan identificar de qué pago se trata. En el
          contexto de facturas profesionales, los elementos más importantes son:
        </p>
        <ul>
          <li><strong>Número de factura</strong> (elemento más importante)</li>
          <li>Nombre del cliente o número de cliente (si hay múltiples clientes)</li>
          <li>Fecha o período de la factura (mes, trimestre)</li>
          <li>Descripción breve del servicio o producto</li>
          <li>Nombre del proyecto (en facturas de proyectos)</li>
        </ul>
      </section>

      <section aria-labelledby="buenas-practicas-conceptos" className="mt-10">
        <h2 id="buenas-practicas-conceptos">Buenas prácticas para los conceptos de pago</h2>

        <h3>1. Incluir siempre el número de factura</h3>
        <p>
          El número de factura es el identificador más importante en el contexto de la
          facturación profesional. Debe aparecer siempre en el concepto, preferiblemente
          al inicio. Formato recomendado:
        </p>
        <div className="not-prose rounded-xl border border-slate-700 bg-slate-900 p-4 font-mono text-sm text-emerald-400">
          <p>FA-2024-015</p>
          <p>Factura FA-2024-015</p>
          <p>Factura 2024-015 | Cliente 4521</p>
        </div>

        <h3>2. Fecha o período cuando sea relevante</h3>
        <p>
          Para servicios recurrentes (suscripciones, cuotas mensuales, honorarios
          periódicos), incluir el período al que corresponde el pago facilita enormemente
          la conciliación:
        </p>
        <div className="not-prose rounded-xl border border-slate-700 bg-slate-900 p-4 font-mono text-sm text-emerald-400">
          <p>Honorarios enero 2025 FA-2025-001</p>
          <p>Cuota mensual febrero 2025 socio 1234</p>
          <p>Servicio mantenimiento Q1 2025 FA-2025-005</p>
        </div>

        <h3>3. Nombre del proyecto para facturas de proyectos</h3>
        <p>
          En el trabajo por proyectos (agencias, consultorías, desarrollo web…), incluir
          el nombre o código del proyecto ayuda al pagador a identificar fácilmente de
          qué se trata:
        </p>
        <div className="not-prose rounded-xl border border-slate-700 bg-slate-900 p-4 font-mono text-sm text-emerald-400">
          <p>Proyecto Web-Tienda FA-2025-012</p>
          <p>Diseño logo Proyecto ALPHA FA-2025-007</p>
        </div>

        <h3>4. Para asociaciones: cuota + número de socio</h3>
        <p>
          En el caso de asociaciones deportivas, culturales o profesionales, el concepto
          debe incluir el tipo de cuota y el número de socio para facilitar la
          administración:
        </p>
        <div className="not-prose rounded-xl border border-slate-700 bg-slate-900 p-4 font-mono text-sm text-emerald-400">
          <p>Cuota anual 2025 socio 4521</p>
          <p>Cuota mensual marzo 2025 miembro 0089</p>
          <p>Cuota familiar 2025 familia Martinez socio 3312</p>
        </div>

        <h3>5. Mantén el concepto breve y estructurado</h3>
        <p>
          Aunque dispones de 140 caracteres, no es necesario usarlos todos. Un concepto
          de 30-50 caracteres bien estructurado es más legible y útil que un bloque
          largo de texto. Las notas internas o detalles adicionales deben quedarse en
          tus propios sistemas (ERP, CRM, software de contabilidad), no en el concepto
          del GiroCode.
        </p>
      </section>

      <section aria-labelledby="errores-conceptos" className="mt-10">
        <h2 id="errores-conceptos">Errores comunes con los conceptos</h2>
        <p>
          Estos son los errores más frecuentes al configurar el concepto de pago en
          un GiroCode:
        </p>
        <ul>
          <li>
            <strong>Sin número de factura:</strong> Usar conceptos genéricos como «Pago»,
            «Servicio» o «Gracias» hace imposible la conciliación automática. Siempre incluye
            un identificador único.
          </li>
          <li>
            <strong>Demasiado largo:</strong> Intentar incluir todos los detalles de la factura
            en el concepto puede llevar a superar el límite de 140 caracteres y que el texto
            se trunque, perdiendo información importante.
          </li>
          <li>
            <strong>Caracteres especiales problemáticos:</strong> Emojis, comillas tipográficas
            («») o caracteres de control pueden causar errores en algunas apps bancarias.
          </li>
          <li>
            <strong>Saltos de línea en el concepto:</strong> El concepto debe ser una sola
            línea de texto. Los saltos de línea no están permitidos y pueden causar errores
            en la generación o lectura del código.
          </li>
          <li>
            <strong>Datos confidenciales en el concepto:</strong> El concepto de pago es
            visible tanto al pagador como en los extractos bancarios de ambas partes. No
            incluyas información confidencial como datos médicos, de salud o personales.
          </li>
          <li>
            <strong>Copiar texto de Word o PDF sin limpiar:</strong> Al copiar texto de
            documentos, pueden incluirse caracteres invisibles o comillas especiales que
            causan problemas. Usa siempre texto plano.
          </li>
        </ul>
      </section>

      <section aria-labelledby="conceptos-sectores" className="mt-10">
        <h2 id="conceptos-sectores">Conceptos de pago para diferentes sectores</h2>

        <h3>Freelances y agencias creativas</h3>
        <p>
          Los freelances y agencias trabajan normalmente por proyectos con entregas
          parciales o fases. El concepto debe reflejar claramente la fase o entrega:
        </p>
        <div className="not-prose space-y-2">
          <div className="rounded-lg border border-slate-700 bg-slate-900 p-3">
            <p className="mb-1 text-xs text-slate-500">Diseño gráfico – primera entrega</p>
            <code className="text-sm text-emerald-400">Diseño identidad visual fase 1 FA-2025-003</code>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-900 p-3">
            <p className="mb-1 text-xs text-slate-500">Desarrollo web – mes de mantenimiento</p>
            <code className="text-sm text-emerald-400">Mantenimiento web enero 2025 cliente 2201 FA-2025-009</code>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-900 p-3">
            <p className="mb-1 text-xs text-slate-500">Consultoría – horas facturadas</p>
            <code className="text-sm text-emerald-400">Consultoría estratégica Q1-2025 8h FA-2025-011</code>
          </div>
        </div>

        <h3>Artesanos y profesionales de servicios</h3>
        <p>
          Para fontaneros, electricistas, pintores y otros profesionales del sector
          servicios, el concepto debe identificar el trabajo realizado y, si procede,
          la dirección de la obra:
        </p>
        <div className="not-prose space-y-2">
          <div className="rounded-lg border border-slate-700 bg-slate-900 p-3">
            <code className="text-sm text-emerald-400">Instalación calefacción Calle Mayor 5 FA-2025-022</code>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-900 p-3">
            <code className="text-sm text-emerald-400">Reparación fontaneria urgente 15-01-2025 FA-2025-018</code>
          </div>
        </div>

        <h3>Asociaciones deportivas y culturales</h3>
        <p>
          Las asociaciones emiten muchos GiroCodes iguales (o casi iguales) para las cuotas
          de socios. La clave es diferenciar cada pago con el número de socio:
        </p>
        <div className="not-prose space-y-2">
          <div className="rounded-lg border border-slate-700 bg-slate-900 p-3">
            <code className="text-sm text-emerald-400">Cuota anual 2025 Club Atletismo socio 0847</code>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-900 p-3">
            <code className="text-sm text-emerald-400">Inscripcion torneo verano 2025 miembro 1123</code>
          </div>
        </div>

        <h3>Tiendas online y comercio electrónico</h3>
        <p>
          Las tiendas online que ofrecen transferencia bancaria como método de pago
          pueden usar GiroCodes para facilitar el proceso. El concepto debe incluir
          siempre el número de pedido:
        </p>
        <div className="not-prose space-y-2">
          <div className="rounded-lg border border-slate-700 bg-slate-900 p-3">
            <code className="text-sm text-emerald-400">Pedido 45231 tienda-ejemplo.es</code>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-900 p-3">
            <code className="text-sm text-emerald-400">Order #45231 shop example</code>
          </div>
        </div>

        <h3>Profesionales de la salud (médicos, fisioterapeutas)</h3>
        <p>
          En el sector sanitario es especialmente importante evitar incluir diagnósticos
          o información médica en el concepto (visible en extractos bancarios). Usar solo
          el número de factura o de paciente:
        </p>
        <div className="not-prose space-y-2">
          <div className="rounded-lg border border-slate-700 bg-slate-900 p-3">
            <code className="text-sm text-emerald-400">Honorarios medicos FA-2025-034 paciente 5521</code>
          </div>
        </div>
      </section>
    </KnowledgeLayout>
  );
}
