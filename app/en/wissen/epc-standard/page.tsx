import type { Metadata } from 'next';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';
import { LazyCodeBlock } from '../../../../components/LazyCodeBlock';
import { EpcVersionsSection } from './_sections/EpcVersionsSection';
import { EpcErrorCorrectionSection } from './_sections/EpcErrorCorrectionSection';
import { EpcTechnicalImplementationSection } from './_sections/EpcTechnicalImplementationSection';
import { EpcCommonMistakesSection } from './_sections/EpcCommonMistakesSection';

export const metadata: Metadata = {
  title: 'EPC Standard Explained – SEPA QR Code Structure 2026',
  description:
    'The EPC standard for GiroCodes: payload structure line by line, versions 001/002, error correction and JavaScript code example. Technically precise.',
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

const EPC_PAYLOAD_EXAMPLE = `BCD
002
1
SCT
SSKMDEMMXXX
Max Mustermann GmbH
DE02120300000000202051
EUR1250.00

Invoice 2024-0042`;

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
      shortAnswer="The EPC standard (EPC069-12) defines the structure of SEPA QR codes. A valid payload consists of 11 lines: Service Tag (BCD), Version, Encoding, Identification (SCT), BIC, Recipient name, IBAN, Amount, and Payment reference."
    >
      {/* ─── SECTION 1: Above the fold ─── */}
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

      {/* ─── SECTION 2: Payload structure (above fold, LazyCodeBlock for pre) ─── */}
      <section aria-labelledby="epc-payload-structure" className="mt-10">
        <h2 id="epc-payload-structure">The Technical Structure of the EPC Payload</h2>
        <p>
          The EPC payload is a plain-text string with fields separated by newline characters.
          Each line contains exactly one field. The order of the fields is fixed and mandatory.
          Here is a complete example:
        </p>
        <LazyCodeBlock
          code={EPC_PAYLOAD_EXAMPLE}
          className="whitespace-pre rounded-md bg-slate-900/70 p-4 text-xs text-slate-200"
          estimatedHeight="160px"
        />
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

      {/* ─── SECTIONS 3–6: Below the fold – lazy-loaded components ─── */}
      <EpcVersionsSection />
      <EpcErrorCorrectionSection />
      <EpcTechnicalImplementationSection />
      <EpcCommonMistakesSection />
    </KnowledgeLayout>
  );
}
