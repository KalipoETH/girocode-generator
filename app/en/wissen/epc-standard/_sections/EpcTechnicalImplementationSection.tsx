import { LazyCodeBlock } from '../../../../../components/LazyCodeBlock';

const JS_CODE = `function generateEpcPayload({
  name,       // Recipient name (max 70 chars)
  iban,       // Recipient IBAN
  bic = '',   // BIC (optional)
  amount = 0, // Amount in EUR (0 = no amount)
  reference = '', // Payment reference (max 140 chars)
  version = '002',
}) {
  const amountStr = amount > 0
    ? 'EUR' + amount.toFixed(2)
    : '';

  const lines = [
    'BCD',         // Service tag
    version,       // Version
    '1',           // UTF-8 encoding
    'SCT',         // SEPA Credit Transfer
    bic,           // BIC (optional)
    name.slice(0, 70),   // Recipient name
    iban,          // IBAN
    amountStr,     // Amount (optional)
    '',            // Purpose type (leave empty)
    '',            // Creditor reference (leave empty)
    reference.slice(0, 140), // Payment reference
  ];

  return lines.join('\\n');
}`;

export function EpcTechnicalImplementationSection() {
  return (
    <section
      aria-labelledby="technical-implementation"
      className="mt-10"
      style={{ contentVisibility: 'auto', containIntrinsicHeight: 'auto 360px' }}
    >
      <h2 id="technical-implementation">Technical Implementation</h2>
      <p>
        Here is a JavaScript example showing how to generate a valid EPC payload from
        payment data:
      </p>
      <LazyCodeBlock
        code={JS_CODE}
        className="whitespace-pre-wrap rounded-md bg-slate-900/70 p-4 text-xs text-slate-200"
        estimatedHeight="360px"
      />
      <p>
        To generate the actual QR code image from this payload in JavaScript, you can use
        libraries like <code>qrcode</code> (npm) or <code>qr-code-styling</code>. Our
        GiroCode Generator uses a similar approach, running entirely in the browser without
        sending any data to a server.
      </p>
    </section>
  );
}
