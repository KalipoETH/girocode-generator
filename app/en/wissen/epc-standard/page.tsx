import type { Metadata } from 'next';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';

export const metadata: Metadata = {
  title: 'EPC Standard & SEPA-QR – Technical Structure Explained',
  description:
    'The EPC standard for GiroCodes explained: structure, fields, versions and rules of the SEPA QR code in plain English.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/en/wissen/epc-standard',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/epc-standard',
      'de': 'https://www.girocodegenerator.com/wissen/epc-standard',
      'en': 'https://www.girocodegenerator.com/en/wissen/epc-standard',
      'fr': 'https://www.girocodegenerator.com/fr/wissen/epc-standard',
      'es': 'https://www.girocodegenerator.com/es/wissen/epc-standard',
    },
  },
};

export default function WissenEpcStandardPageEn() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="EPC Standard & SEPA-QR"
      badge="Technical · EPC Standard & SEPA-QR"
      title="EPC Standard & SEPA-QR – Technical Structure Explained"
      lead="Every GiroCode is built on a precisely defined text format specified by the European Payments Council (EPC). This complete technical guide explains the EPC payload structure, all fields, versioning, error correction and common implementation mistakes."
      relatedArticles={[
        { href: '/en/wissen/girocode', label: 'What is a GiroCode? – Everything You Need to Know' },
        { href: '/en/wissen/iban-bic', label: 'IBAN & BIC for GiroCode – Complete Guide' },
        { href: '/en/wissen/betrag-und-zweck', label: 'Amount & Payment Reference in GiroCode' },
        { href: '/en/wissen/rechnung', label: 'GiroCode on Invoices – The Complete Guide' },
        { href: '/en/wissen/banking-apps', label: 'Banking Apps Supporting GiroCode' },
        { href: '/en/wissen/scannen', label: 'How to Scan a GiroCode' },
      ]}
      locale="en"
    >
      <section aria-labelledby="what-is-epc">
        <h2 id="what-is-epc">What is the EPC Standard?</h2>
        <p>
          The <strong>European Payments Council (EPC)</strong> is the decision-making and
          coordination body of the European banking industry for payment schemes. Established
          in 2002, it develops and maintains the rules and standards for SEPA (Single Euro
          Payments Area) payments, which cover all 36 SEPA countries.
        </p>
        <p>
          Among its many standards, the EPC published the{' '}
          <strong>EPC069-12 SEPA Credit Transfer QR Code Guideline</strong> – the technical
          specification that defines exactly how a SEPA bank transfer is encoded in a QR code.
          This is the standard behind GiroCode, SEPA-QR and EPC-QR. The current version of
          the guideline is version 3.0, published in 2022.
        </p>

        <h3>History and development</h3>
        <ul>
          <li><strong>2012:</strong> First EPC QR Code Guideline published</li>
          <li><strong>2016:</strong> BIC made optional for domestic SEPA transfers</li>
          <li><strong>2018:</strong> GiroCode launched in Germany by Deutsche Kreditwirtschaft</li>
          <li><strong>2020:</strong> Widespread adoption across European banking apps</li>
          <li><strong>2022:</strong> Updated guideline (version 3.0) with clarifications</li>
        </ul>

        <h3>Why was the EPC standard introduced?</h3>
        <p>
          Before the EPC standard, payment QR codes in Europe were fragmented. Germany had its
          own BezahlCode format, Austria had Stuzza QR, Belgium had its own variant and so on.
          None of these were cross-compatible. The EPC standard was designed to provide a
          single, unified format that any bank in any SEPA country could implement, enabling
          true interoperability across borders.
        </p>

        <h3>Adoption across Europe</h3>
        <p>
          As of 2024, the EPC QR standard has been adopted by banking institutions in Germany,
          Austria, Belgium, the Netherlands, Finland, Luxembourg, Estonia, Latvia, Lithuania
          and several other SEPA countries. Germany and Belgium have the highest adoption rates.
        </p>
      </section>

      <section aria-labelledby="epc-payload-structure" className="mt-10">
        <h2 id="epc-payload-structure">The Technical Structure of the EPC Payload</h2>
        <p>
          The EPC payload is a plain-text string with fields separated by newline characters.
          Each line contains exactly one field. The order of the fields is fixed and mandatory.
          Here is a complete example:
        </p>
        <pre className="whitespace-pre rounded-md bg-slate-900/70 p-4 text-xs text-slate-200">
{`BCD
002
1
SCT
SSKMDEMMXXX
Max Mustermann GmbH
DE02120300000000202051
EUR1250.00

Invoice 2024-0042`}
        </pre>
        <p>Now let&apos;s examine each line in detail:</p>

        <h3>Line 1: Service Tag (BCD)</h3>
        <p>
          The first line always contains exactly the string <code>BCD</code> (Bank Customer
          Data). This is a fixed identifier that tells any QR code reader that this payload
          follows the EPC bank transfer standard.
        </p>

        <h3>Line 2: Version (001 or 002)</h3>
        <p>
          The second line specifies the version of the EPC standard used. Currently, two
          versions are in active use: <code>001</code> and <code>002</code>. Version 001 was
          the original specification; version 002 introduced minor changes and clarifications.
          If in doubt, use <code>002</code> as it is the more recent standard.
        </p>

        <h3>Line 3: Character Set Encoding (1–8)</h3>
        <p>
          The third line specifies the character encoding. The value <code>1</code> indicates{' '}
          <strong>UTF-8</strong>, which supports the full Unicode character set including
          umlauts and accented characters. UTF-8 (value 1) is the recommended choice for
          modern implementations.
        </p>

        <h3>Line 4: Identification Code (SCT)</h3>
        <p>
          The fourth line contains the payment scheme identification. For SEPA Credit
          Transfers, this is always <code>SCT</code> (SEPA Credit Transfer).
        </p>

        <h3>Line 5: BIC (optional since 2016)</h3>
        <p>
          The fifth line contains the BIC (Bank Identifier Code) of the recipient&apos;s
          bank. Since the completion of the SEPA migration in 2016, the BIC is no longer
          mandatory for domestic transfers within SEPA countries. Leaving this line empty
          is valid and widely supported.
        </p>

        <h3>Line 6: Recipient Name (max. 70 characters)</h3>
        <p>
          The sixth line contains the full name of the payment recipient. The maximum length
          is <strong>70 characters</strong>. This field is mandatory.
        </p>

        <h3>Line 7: IBAN</h3>
        <p>
          The seventh line contains the full IBAN of the payment recipient. This field is
          mandatory. No spaces should be included – e.g. <code>DE02120300000000202051</code>.
        </p>

        <h3>Line 8: Amount (format EUR12.34)</h3>
        <p>
          The eighth line contains the transfer amount in the format{' '}
          <code>EURx.xx</code> – the ISO 4217 currency code followed immediately by the
          amount with a period as decimal separator. Examples:{' '}
          <code>EUR12.34</code>, <code>EUR1250.00</code>, <code>EUR0.50</code>. This field
          is optional.
        </p>

        <h3>Line 9: Purpose Type (usually empty)</h3>
        <p>
          The ninth line can contain a purpose type code from the ISO 20022 External Code
          List. In practice, this field is almost always left empty for standard invoice
          payments.
        </p>

        <h3>Line 10: Creditor Reference (usually empty)</h3>
        <p>
          The tenth line can contain a structured creditor reference (ISO 11649 RF reference).
          This is used in some countries (particularly Finland and Belgium) for automated
          payment reconciliation. In Germany, the free-text reference on line 11 is preferred.
        </p>

        <h3>Line 11: Payment Reference (max. 140 characters)</h3>
        <p>
          The eleventh line contains the free-text payment reference. This is the text that
          will appear on bank statements. The maximum length is <strong>140 characters</strong>.
          Best practice is to include the invoice number here – e.g.{' '}
          <code>Invoice 2024-0042 dated 2024-03-15</code>.
        </p>
      </section>

      <section aria-labelledby="epc-versions" className="mt-10">
        <h2 id="epc-versions">EPC Versions Compared</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="py-2 pr-4 text-left text-slate-300">Aspect</th>
                <th className="py-2 pr-4 text-left text-slate-300">Version 001</th>
                <th className="py-2 text-left text-slate-300">Version 002</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-400">
              <tr>
                <td className="py-2 pr-4 font-medium text-slate-300">Year introduced</td>
                <td className="py-2 pr-4">2012</td>
                <td className="py-2">2018</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-slate-300">BIC required</td>
                <td className="py-2 pr-4">Yes (mandatory)</td>
                <td className="py-2">No (optional)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-slate-300">Max payload size</td>
                <td className="py-2 pr-4">331 bytes</td>
                <td className="py-2">331 bytes</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-slate-300">Recommended for</td>
                <td className="py-2 pr-4">Legacy systems</td>
                <td className="py-2">New implementations</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-slate-300">Character encoding</td>
                <td className="py-2 pr-4">UTF-8 or ISO 8859</td>
                <td className="py-2">UTF-8 recommended</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          For new implementations, version 002 with UTF-8 encoding is the recommended choice.
          It is forward-compatible with version 001 readers and does not require a BIC.
        </p>
      </section>

      <section aria-labelledby="error-correction" className="mt-10">
        <h2 id="error-correction">Error Correction and QR Code Quality</h2>

        <h3>Error correction level M (15%)</h3>
        <p>
          QR codes support four error correction levels: L (7%), M (15%), Q (25%) and H (30%).
          The EPC standard specifies <strong>error correction level M</strong> for GiroCodes.
          This means up to 15% of the QR code&apos;s data cells can be damaged or covered
          while the code remains fully readable.
        </p>

        <h3>Impact on scannability</h3>
        <ul>
          <li><strong>Print quality:</strong> At least 300 DPI is recommended for printed codes</li>
          <li><strong>Minimum size:</strong> At least 2 × 2 cm for printed invoices; 200 × 200 px for digital</li>
          <li><strong>Quiet zone:</strong> White border of at least 4 modules on all sides</li>
          <li><strong>Contrast:</strong> Black modules on white background; avoid grey or coloured backgrounds</li>
          <li><strong>Undistorted:</strong> QR codes must not be stretched, rotated or skewed</li>
          <li><strong>Payload length:</strong> Shorter payloads produce less dense QR codes that scan more reliably</li>
        </ul>
      </section>

      <section aria-labelledby="technical-implementation" className="mt-10">
        <h2 id="technical-implementation">Technical Implementation</h2>
        <p>
          Here is a JavaScript example showing how to generate a valid EPC payload from
          payment data:
        </p>
        <pre className="whitespace-pre-wrap rounded-md bg-slate-900/70 p-4 text-xs text-slate-200">
{`function generateEpcPayload({
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
}`}
        </pre>
        <p>
          To generate the actual QR code image from this payload in JavaScript, you can use
          libraries like <code>qrcode</code> (npm) or <code>qr-code-styling</code>. Our
          GiroCode Generator uses a similar approach, running entirely in the browser without
          sending any data to a server.
        </p>
      </section>

      <section aria-labelledby="common-mistakes" className="mt-10">
        <h2 id="common-mistakes">Common Mistakes with the EPC Standard</h2>

        <h3>Wrong character encoding</h3>
        <p>
          If the payload is encoded in a character set other than what is specified in line 3,
          special characters will be garbled. Always ensure that the encoding declared in
          line 3 matches the actual encoding used. For UTF-8 (value 1), ensure your string
          handling library encodes the payload as UTF-8 bytes.
        </p>

        <h3>Payment reference too long</h3>
        <p>
          The payment reference (line 11) has a strict maximum of <strong>140 characters</strong>.
          If you exceed this limit, the QR code may be rejected or the reference silently
          truncated. Always validate the reference length before encoding.
        </p>

        <h3>Wrong amount format</h3>
        <p>
          The amount must use a period (.) as the decimal separator, not a comma. Wrong:{' '}
          <code>EUR1.250,00</code>. Correct: <code>EUR1250.00</code> (period as decimal, no
          thousands separator). The amount must have exactly two decimal places.
        </p>

        <h3>Invalid IBAN</h3>
        <p>
          Using an IBAN that fails the Mod-97 check digit validation will cause banking apps
          to reject the payment. Always validate the IBAN before embedding it in a GiroCode.
        </p>

        <h3>Missing newlines between fields</h3>
        <p>
          The EPC payload uses Unix-style line breaks (<code>\n</code>, LF) to separate
          fields. Using Windows-style line breaks (<code>\r\n</code>, CRLF) or mixing line
          break styles will cause parsing errors in some banking apps.
        </p>

        <h3>Exceeding the maximum payload size</h3>
        <p>
          The total payload must not exceed <strong>331 bytes</strong> when encoded in UTF-8.
          Exceeding this limit may produce a QR code that is too dense to scan reliably at
          small sizes.
        </p>
      </section>
    </KnowledgeLayout>
  );
}
