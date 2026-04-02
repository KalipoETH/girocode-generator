import type { Metadata } from 'next';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';

export const metadata: Metadata = {
  title: 'IBAN & BIC in GiroCode – Format, Required & Validation',
  description:
    'IBAN and BIC for GiroCode: Is BIC required? How does IBAN validation (Mod-97) work? All formats explained with country table.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/en/wissen/iban-bic',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/iban-bic',
      'de': 'https://www.girocodegenerator.com/wissen/iban-bic',
      'en': 'https://www.girocodegenerator.com/en/wissen/iban-bic',
      'fr': 'https://www.girocodegenerator.com/fr/wissen/iban-bic',
      'es': 'https://www.girocodegenerator.com/es/wissen/iban-bic',
    },
  },
};

export default function WissenIbanBicPageEn() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="IBAN & BIC for GiroCode"
      badge="Basics · IBAN & BIC"
      title="IBAN & BIC for GiroCode – Complete Guide"
      lead="IBAN and BIC are the two key banking identifiers used in GiroCodes. This complete guide explains their structure, how to validate an IBAN, when BIC is still needed, and what the security implications are of sharing your IBAN."
      relatedArticles={[
        { href: '/en/wissen/girocode', label: 'What is a GiroCode? – Everything You Need to Know' },
        { href: '/en/wissen/epc-standard', label: 'EPC Standard & SEPA-QR – Technical Structure' },
        { href: '/en/wissen/betrag-und-zweck', label: 'Amount & Payment Reference in GiroCode' },
        { href: '/en/wissen/rechnung', label: 'GiroCode on Invoices – The Complete Guide' },
        { href: '/en/wissen/banking-apps', label: 'Banking Apps Supporting GiroCode' },
        { href: '/en/wissen/scannen', label: 'How to Scan a GiroCode' },
      ]}
      locale="en"
    >
      <section aria-labelledby="what-is-iban">
        <h2 id="what-is-iban">What is an IBAN?</h2>
        <p>
          An <strong>IBAN</strong> (International Bank Account Number) is a standardised
          international format for identifying bank accounts. It was developed by the
          International Organization for Standardization (ISO) and the European Committee for
          Banking Standards (ECBS) and is defined in the ISO 13616 standard.
        </p>
        <p>
          The IBAN combines the country code, check digits and the domestic bank details into
          a single standardised string that can be processed by any bank in the SEPA zone and
          beyond.
        </p>

        <h3>Structure of a German IBAN</h3>
        <p>
          A German IBAN always follows this structure:
        </p>
        <pre className="rounded-md bg-slate-900/70 p-3 text-xs text-slate-200">
{`DE  02  12030000  0000202051
 ↑   ↑      ↑          ↑
 CC  CD   BLZ       Account number
(Country) (Check) (Bank code) (Account)`}
        </pre>
        <ul>
          <li><strong>CC (Country Code):</strong> <code>DE</code> – two-letter ISO 3166-1 country code</li>
          <li><strong>CD (Check Digits):</strong> Two-digit number calculated using the Mod-97 algorithm</li>
          <li><strong>BLZ (Bank Code):</strong> Eight-digit German Bankleitzahl</li>
          <li><strong>Account Number:</strong> Ten-digit German account number (zero-padded)</li>
        </ul>
        <p>
          German IBANs always have exactly <strong>22 characters</strong>. Any IBAN that is
          longer or shorter is immediately invalid for a German account.
        </p>

        <h3>History of IBAN introduction</h3>
        <p>
          The IBAN was made mandatory for all SEPA credit transfers as part of the SEPA
          migration, completed in February 2014 for retail payments. From that date, the old
          national account number formats became officially obsolete for SEPA transfers.
        </p>
      </section>

      <section aria-labelledby="iban-step-by-step" className="mt-10">
        <h2 id="iban-step-by-step">The IBAN Explained Step by Step</h2>

        <h3>Country code</h3>
        <p>
          The first two characters of an IBAN are always the two-letter ISO 3166-1 alpha-2
          country code of the country where the account is held. For Germany this is{' '}
          <code>DE</code>, for Austria <code>AT</code>, for France <code>FR</code>.
        </p>

        <h3>Check digits (Mod-97 algorithm explained)</h3>
        <p>
          Characters 3 and 4 of an IBAN are two decimal check digits, calculated using the
          ISO 7064 Mod-97-10 algorithm. Here is how validation works:
        </p>
        <ol>
          <li>Move the first four characters to the end of the IBAN string</li>
          <li>Replace each letter with its numeric equivalent (A=10, B=11, ..., Z=35)</li>
          <li>Calculate the remainder of dividing the resulting number by 97</li>
          <li>If the result is 1, the IBAN check digits are valid</li>
        </ol>

        <h3>Bank code</h3>
        <p>
          In the German IBAN, characters 5–12 (8 digits) represent the{' '}
          <strong>Bankleitzahl (BLZ)</strong> – the German bank sort code that identifies
          the specific bank. The BLZ is assigned by the Deutsche Bundesbank.
        </p>

        <h3>Account number</h3>
        <p>
          Characters 13–22 of a German IBAN (10 digits) represent the domestic account
          number, zero-padded on the left to fill exactly 10 digits.
        </p>
      </section>

      <section aria-labelledby="what-is-bic" className="mt-10">
        <h2 id="what-is-bic">What is a BIC?</h2>
        <p>
          A <strong>BIC</strong> (Bank Identifier Code), also known as SWIFT code, is an
          international standard (ISO 9362) for identifying banks in international financial
          transactions. A BIC consists of 8 or 11 characters:
        </p>
        <pre className="rounded-md bg-slate-900/70 p-3 text-xs text-slate-200">
{`SSKM  DE  MM  XXX
 ↑     ↑   ↑   ↑
Bank  CC  Loc  Branch
(4)  (2) (2)  (3)`}
        </pre>
        <ul>
          <li><strong>Bank code (4 chars):</strong> Identifies the bank (e.g. <code>SSKM</code> for Stadtsparkasse München)</li>
          <li><strong>Country code (2 chars):</strong> ISO 3166-1 country code (e.g. <code>DE</code>)</li>
          <li><strong>Location code (2 chars):</strong> Identifies the city or region</li>
          <li><strong>Branch code (3 chars, optional):</strong> <code>XXX</code> means the primary office</li>
        </ul>

        <h3>Where to find your BIC</h3>
        <ul>
          <li>Your bank&apos;s website (Contact or Bank details section)</li>
          <li>Your bank statement or account passbook</li>
          <li>Your online banking portal (account details section)</li>
          <li>The Deutsche Bundesbank&apos;s bank sort code directory</li>
        </ul>
      </section>

      <section aria-labelledby="bic-required" className="mt-10">
        <h2 id="bic-required">Is BIC Required for GiroCode?</h2>

        <h3>Optional since SEPA migration 2016</h3>
        <p>
          Since the completion of the SEPA migration in 2016, the BIC is <strong>no longer
          required</strong> for domestic and cross-border SEPA transfers within the SEPA zone.
          The IBAN alone is sufficient to route the payment to the correct bank and account.
        </p>
        <p>
          In the EPC QR standard (version 002), the BIC field (line 5 of the payload) is
          therefore optional. We recommend leaving the BIC empty for simplicity – it keeps
          the payload shorter and the QR code less dense.
        </p>

        <h3>When is BIC still needed?</h3>
        <ul>
          <li>
            <strong>Some legacy banking systems:</strong> Older banking software or payment
            processors may still require a BIC. When in doubt, include the BIC.
          </li>
          <li>
            <strong>Certain EPC version 001 implementations:</strong> Some older banking apps
            that only support EPC version 001 expect a BIC in the payload.
          </li>
          <li>
            <strong>Bank-specific requirements:</strong> A small number of banks in certain
            SEPA countries still require a BIC for incoming transfers.
          </li>
        </ul>
      </section>

      <section aria-labelledby="iban-validation" className="mt-10">
        <h2 id="iban-validation">IBAN Validation Explained</h2>

        <h3>Mod-97 algorithm step by step</h3>
        <p>
          Using the example IBAN <code>DE89370400440532013000</code>:
        </p>
        <ol>
          <li><strong>Move first 4 characters to end:</strong> <code>370400440532013000DE89</code></li>
          <li><strong>Replace letters with numbers</strong> (A=10, B=11, ..., Z=35): D=13, E=14</li>
          <li><strong>Calculate modulo 97</strong> – if the result is 1, the IBAN is valid</li>
        </ol>

        <h3>Code example for IBAN validation in JavaScript</h3>
        <pre className="whitespace-pre-wrap rounded-md bg-slate-900/70 p-4 text-xs text-slate-200">
{`function validateIBAN(iban) {
  iban = iban.replace(/\s/g, '').toUpperCase();
  if (!/^[A-Z]{2}[0-9]{2}[A-Z0-9]+$/.test(iban)) return false;
  const rearranged = iban.slice(4) + iban.slice(0, 4);
  const numericString = rearranged
    .split('')
    .map(ch => isNaN(ch) ? ch.charCodeAt(0) - 55 : ch)
    .join('');
  const remainder = BigInt(numericString) % 97n;
  return remainder === 1n;
}`}
        </pre>

        <h3>Common IBAN input errors</h3>
        <ul>
          <li>Transposing two adjacent digits</li>
          <li>Missing leading zeros in the account number part</li>
          <li>Including spaces (IBANs should have no spaces in data fields)</li>
          <li>Using the wrong IBAN length</li>
          <li>Confusing letters and numbers (e.g. letter O vs digit 0)</li>
        </ul>
      </section>

      <section aria-labelledby="iban-by-country" className="mt-10">
        <h2 id="iban-by-country">IBAN Formats by Country</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="py-2 pr-4 text-left text-slate-300">Country</th>
                <th className="py-2 pr-4 text-left text-slate-300">Code</th>
                <th className="py-2 pr-4 text-left text-slate-300">Length</th>
                <th className="py-2 text-left text-slate-300">Example format</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-400">
              <tr><td className="py-2 pr-4 font-medium text-slate-300">Germany</td><td className="py-2 pr-4">DE</td><td className="py-2 pr-4">22</td><td className="py-2"><code>DEkk bbbb bbbb cccc cccc cc</code></td></tr>
              <tr><td className="py-2 pr-4 font-medium text-slate-300">Austria</td><td className="py-2 pr-4">AT</td><td className="py-2 pr-4">20</td><td className="py-2"><code>ATkk bbbb bccc cccc cccc</code></td></tr>
              <tr><td className="py-2 pr-4 font-medium text-slate-300">Switzerland</td><td className="py-2 pr-4">CH</td><td className="py-2 pr-4">21</td><td className="py-2"><code>CHkk bbbb bccc cccc cccc c</code></td></tr>
              <tr><td className="py-2 pr-4 font-medium text-slate-300">France</td><td className="py-2 pr-4">FR</td><td className="py-2 pr-4">27</td><td className="py-2"><code>FRkk bbbb bggg ggcc cccc cccc cxx</code></td></tr>
              <tr><td className="py-2 pr-4 font-medium text-slate-300">Spain</td><td className="py-2 pr-4">ES</td><td className="py-2 pr-4">24</td><td className="py-2"><code>ESkk bbbb gggg xxcc cccc cccc</code></td></tr>
              <tr><td className="py-2 pr-4 font-medium text-slate-300">Netherlands</td><td className="py-2 pr-4">NL</td><td className="py-2 pr-4">18</td><td className="py-2"><code>NLkk bbbb cccc cccc cc</code></td></tr>
              <tr><td className="py-2 pr-4 font-medium text-slate-300">Belgium</td><td className="py-2 pr-4">BE</td><td className="py-2 pr-4">16</td><td className="py-2"><code>BEkk bbbc cccc ccxx</code></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="iban-security" className="mt-10">
        <h2 id="iban-security">IBAN Security</h2>

        <h3>Is it safe to share your IBAN?</h3>
        <p>
          Sharing your IBAN is generally safe and is necessary for receiving SEPA transfers.
          Your IBAN is like your postal address for money – people need it to send you
          payments. The EPC QR standard (GiroCode) is specifically designed for sharing
          payment details, so embedding your IBAN in a QR code on an invoice is a normal
          and accepted practice.
        </p>

        <h3>What can someone do with your IBAN?</h3>
        <p>
          With only your IBAN, another person can:
        </p>
        <ul>
          <li><strong>Send you money</strong> – the primary intended use</li>
          <li><strong>Set up a SEPA Direct Debit mandate</strong> – this is the main risk</li>
        </ul>
        <p>
          They <strong>cannot</strong> withdraw money from your account or initiate a transfer
          using only your IBAN. SEPA transfers are push payments – only the account holder
          can initiate an outgoing transfer.
        </p>

        <h3>IBAN for direct debit vs. transfer</h3>
        <p>
          The main risk of sharing your IBAN is that a fraudulent actor could use it to set
          up an unauthorised SEPA Direct Debit (SDD) mandate. However, SEPA regulations
          provide strong consumer protection:
        </p>
        <ul>
          <li>Unauthorised direct debits can be reversed within <strong>8 weeks</strong> (with valid mandate) or <strong>13 months</strong> (without valid mandate)</li>
          <li>Banks are obligated to refund reversed direct debits immediately upon request</li>
        </ul>

        <h3>Privacy with GiroCode</h3>
        <p>
          Unlike some other payment methods (e.g. PayPal), SEPA bank transfers via GiroCode
          do not expose your payment data to any third-party payment processor. The
          transaction data flows only between the payer&apos;s bank and your bank.
        </p>
      </section>
    </KnowledgeLayout>
  );
}
