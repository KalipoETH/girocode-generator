import type { Metadata } from 'next';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';

export const metadata: Metadata = {
  title: 'What is a GiroCode? – Everything You Need to Know',
  description:
    'GiroCode explained: What is a SEPA QR code, how does it work, and how do you create one for free? Complete guide with examples.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/en/wissen/girocode',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/girocode',
      'de': 'https://www.girocodegenerator.com/wissen/girocode',
      'en': 'https://www.girocodegenerator.com/en/wissen/girocode',
      'fr': 'https://www.girocodegenerator.com/fr/wissen/girocode',
      'es': 'https://www.girocodegenerator.com/es/wissen/girocode',
    },
  },
};

export default function WissenGirocodePageEn() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="What is a GiroCode?"
      badge="Basics · GiroCode / SEPA-QR"
      title="What is a GiroCode? – Everything You Need to Know"
      lead="The GiroCode – also known as SEPA-QR or EPC QR code – is a standardised QR code for bank transfers in the SEPA area. It eliminates manual data entry, reduces errors and makes payments significantly faster for both payers and recipients. This complete guide explains everything you need to know."
      relatedArticles={[
        { href: '/en/wissen/epc-standard', label: 'EPC Standard & SEPA-QR – Technical Structure Explained' },
        { href: '/en/wissen/iban-bic', label: 'IBAN & BIC for GiroCode – Complete Guide' },
        { href: '/en/wissen/rechnung', label: 'GiroCode on Invoices – The Complete Guide' },
        { href: '/en/wissen/betrag-und-zweck', label: 'Amount & Payment Reference in GiroCode' },
        { href: '/en/wissen/banking-apps', label: 'Banking Apps Supporting GiroCode' },
        { href: '/en/wissen/scannen', label: 'How to Scan a GiroCode' },
      ]}
      locale="en"
    >
      <section aria-labelledby="what-is-girocode">
        <h2 id="what-is-girocode">What is a GiroCode?</h2>
        <p>
          A <strong>GiroCode</strong> is a standardised QR code that encodes all the data
          required for a SEPA bank transfer in a machine-readable format. When a payer scans
          the code with their banking app, the transfer form is filled out automatically –
          including recipient name, IBAN, amount and payment reference. All the payer needs to
          do is verify the pre-filled details and confirm the transaction.
        </p>
        <p>
          Technically, the GiroCode is based on the specification of the{' '}
          <strong>European Payments Council (EPC)</strong>, which is why it is also commonly
          referred to as <strong>SEPA-QR</strong>, <strong>EPC-QR</strong> or{' '}
          <strong>payment QR code</strong>. All these terms refer to the same underlying
          standard – a plain-text payload, encoded as a QR code, that banking apps across
          Europe can interpret in the same way.
        </p>
        <p>
          The GiroCode was officially introduced in Germany in <strong>2018</strong>, following
          the EPC&apos;s publication of the QR Code Guidelines. Since then it has been adopted
          by virtually all major German banks and savings banks, and is increasingly recognised
          by banking apps throughout the SEPA zone. Today it is considered the de-facto
          standard for scan-to-pay bank transfers within Europe.
        </p>

        <h3>Who developed the GiroCode?</h3>
        <p>
          The technical standard behind the GiroCode was developed by the{' '}
          <strong>European Payments Council (EPC)</strong> – the decision-making and
          coordination body of the European banking industry for payment schemes. The EPC
          manages the SEPA Credit Transfer (SCT) scheme, the SEPA Direct Debit (SDD) scheme
          and the SEPA Instant Credit Transfer (SCT Inst) scheme. The QR code guideline that
          defines the GiroCode format is called the{' '}
          <em>EPC069-12 SEPA Credit Transfer QR Code Guideline</em>.
        </p>
        <p>
          In Germany, the Deutsche Kreditwirtschaft (DK) – the umbrella association of German
          banks – adopted the EPC standard and introduced it under the brand name
          &ldquo;GiroCode&rdquo;. The name itself is a portmanteau of &ldquo;Giro&rdquo;
          (German for bank transfer) and &ldquo;code&rdquo; (QR code).
        </p>

        <h3>How widespread is GiroCode in Europe?</h3>
        <p>
          While GiroCode is best known in Germany, the underlying EPC standard is used across
          the entire SEPA zone. Austria uses the closely related{' '}
          <strong>Stuzza QR code</strong> (also based on EPC), Belgium has widely adopted the
          same EPC QR standard for invoice payments, and Switzerland has introduced its own
          variant called the <strong>Swiss QR Code</strong> (QR-Bill) – which shares many
          similarities but includes Swiss-specific fields. In the Netherlands, France, Spain and
          Italy, the EPC QR format is also gaining traction as banks update their apps.
        </p>
        <p>
          As of 2024, virtually every major German retail bank – including Sparkasse, VR-Banken,
          ING, DKB, Deutsche Bank, Commerzbank, Postbank, N26 and Comdirect – supports QR code
          scanning for SEPA transfers.
        </p>
      </section>

      <section aria-labelledby="how-girocode-works" className="mt-10">
        <h2 id="how-girocode-works">How Does a GiroCode Work?</h2>
        <p>
          Understanding how a GiroCode works requires looking at two sides: the{' '}
          <strong>creation side</strong> (how the QR code is generated) and the{' '}
          <strong>scanning side</strong> (how the QR code is read and processed).
        </p>

        <h3>Step-by-step: From creation to payment</h3>
        <ol>
          <li>
            <strong>Enter payment details:</strong> The invoice issuer enters the recipient
            name, IBAN, BIC (optional), amount (optional) and payment reference into a
            GiroCode generator tool like ours.
          </li>
          <li>
            <strong>Generate QR code:</strong> The tool assembles a plain-text EPC payload
            from these fields and encodes it as a QR code using error correction level M.
          </li>
          <li>
            <strong>Embed in invoice:</strong> The QR code image is placed on the invoice –
            typically in the bottom-right corner, near the bank details.
          </li>
          <li>
            <strong>Payer scans code:</strong> The customer opens their banking app, taps the
            QR scanner function and points the camera at the GiroCode.
          </li>
          <li>
            <strong>Transfer form auto-fills:</strong> The app decodes the payload and
            pre-populates the transfer form with all encoded fields.
          </li>
          <li>
            <strong>Payer verifies and confirms:</strong> The customer checks the pre-filled
            data, enters their TAN or uses biometric authentication, and confirms the transfer.
          </li>
        </ol>

        <h3>What data is transferred?</h3>
        <p>
          The EPC payload that is encoded in a GiroCode contains the following fields, each on
          a separate line:
        </p>
        <ul>
          <li><strong>Service tag:</strong> Always &ldquo;BCD&rdquo; – identifies the payload as a bank QR code</li>
          <li><strong>Version:</strong> Either &ldquo;001&rdquo; or &ldquo;002&rdquo;</li>
          <li><strong>Character set encoding:</strong> Typically &ldquo;1&rdquo; for UTF-8</li>
          <li><strong>Identification code:</strong> &ldquo;SCT&rdquo; for SEPA Credit Transfer</li>
          <li><strong>BIC:</strong> Bank Identifier Code of the recipient&apos;s bank (optional since 2016)</li>
          <li><strong>Recipient name:</strong> Full account holder name (max. 70 characters)</li>
          <li><strong>IBAN:</strong> Full IBAN of the recipient</li>
          <li><strong>Amount:</strong> Optional, format &ldquo;EUR12.34&rdquo;</li>
          <li><strong>Purpose type:</strong> Optional category code (usually left empty)</li>
          <li><strong>Creditor reference:</strong> Structured reference (usually left empty)</li>
          <li><strong>Payment reference:</strong> Free-text description (max. 140 characters)</li>
        </ul>

        <h3>Security aspects</h3>
        <p>
          A GiroCode is a <strong>push payment</strong> – the payer actively initiates the
          transfer and must confirm it with their bank&apos;s authentication method (TAN,
          fingerprint, Face ID, etc.). Unlike direct debits, nobody can pull money from your
          account using only a GiroCode. The banking app always shows the pre-filled data
          before any money moves, giving the payer full control.
        </p>
        <p>
          However, as with any QR code, payers should <strong>always verify the
          pre-filled data</strong> before confirming. A manipulated QR code could in theory
          redirect a payment to a different IBAN. Banks and security experts therefore recommend
          always checking the recipient name and IBAN before confirming any scan-to-pay transfer.
        </p>
      </section>

      <section aria-labelledby="advantages-girocode" className="mt-10">
        <h2 id="advantages-girocode">Advantages of a GiroCode</h2>

        <h3>For invoice senders (businesses and freelancers)</h3>
        <ul>
          <li>
            <strong>Fewer payment errors:</strong> Customers no longer type IBAN or payment
            reference manually. Transposition errors, wrong amounts and missing references
            become rare exceptions rather than common problems.
          </li>
          <li>
            <strong>Faster incoming payments:</strong> Studies show that invoices with
            GiroCode are paid on average 2–4 days faster than those without.
          </li>
          <li>
            <strong>Easier reconciliation:</strong> When the payment reference is
            pre-filled correctly, matching incoming payments to invoices in your accounting
            software becomes automatic.
          </li>
          <li>
            <strong>Professional image:</strong> A GiroCode signals that you are
            tech-savvy, customer-focused and up to date with modern payment standards.
          </li>
          <li>
            <strong>No extra costs:</strong> Unlike PayPal or Stripe, there are no
            percentage fees for SEPA bank transfers. The GiroCode itself is free to generate.
          </li>
        </ul>

        <h3>For payers (customers)</h3>
        <ul>
          <li><strong>Simple and fast:</strong> Scan once, review, confirm – payment takes under 30 seconds.</li>
          <li><strong>Error-free:</strong> All data is pre-filled; no risk of typos.</li>
          <li><strong>No app registration required:</strong> Any banking app that supports SEPA QR scanning works immediately, without any additional sign-up.</li>
          <li><strong>Full control:</strong> The payer always sees exactly what is being transferred before confirming.</li>
          <li><strong>Privacy-friendly:</strong> No third-party payment processor sees your transaction data.</li>
        </ul>

        <h3>GiroCode vs. PayPal and other online payment methods</h3>
        <ul>
          <li>PayPal charges fees of 1.5–3.5% per transaction</li>
          <li>PayPal and Stripe require the payer to have an account with the service</li>
          <li>Chargeback risk is much higher with PayPal than with SEPA bank transfers</li>
          <li>SEPA transfers are covered by your bank&apos;s deposit protection; PayPal balances are not</li>
          <li>GiroCode works with any bank in the SEPA zone – no additional infrastructure needed</li>
        </ul>
      </section>

      <section aria-labelledby="who-uses-girocode" className="mt-10">
        <h2 id="who-uses-girocode">Who Can Use GiroCodes?</h2>
        <p>
          In principle, anyone with a SEPA bank account can issue and receive payments via
          GiroCode. The standard is particularly valuable for the following groups:
        </p>

        <h3>Freelancers and self-employed professionals</h3>
        <p>
          For freelancers, consultants, designers, developers and other self-employed
          professionals, GiroCodes are a game-changer. You can generate a unique QR code for
          every invoice in seconds, embed it in your PDF and significantly reduce the time
          customers take to pay. Because you control the payment reference, incoming payments
          are easy to match to specific invoices in your accounting.
        </p>

        <h3>Small and medium businesses (SMEs)</h3>
        <p>
          SMEs that send high volumes of invoices benefit enormously from GiroCodes. Every
          incorrectly transferred payment requires time to investigate and correct. Modern
          accounting software like <strong>sevDesk</strong> and <strong>FastBill</strong> can
          generate GiroCodes automatically as part of the invoicing workflow.
        </p>

        <h3>Associations and non-profit organisations</h3>
        <p>
          Clubs and associations use GiroCodes on membership fee invoices, event tickets and
          donation requests. Donation QR codes without a fixed amount allow donors to choose
          their own contribution.
        </p>

        <h3>Private individuals</h3>
        <p>
          Even private individuals can use GiroCodes for group purchases, shared expenses or
          informal payments. Many banking apps allow users to generate a personal payment QR
          code directly from their account details.
        </p>
      </section>

      <section aria-labelledby="girocode-vs-payment-methods" className="mt-10">
        <h2 id="girocode-vs-payment-methods">GiroCode vs. Other Payment Methods</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-lg border border-slate-700">
          <table className="compare-table w-full text-sm">
            <thead>
              <tr>
                <th className="px-4 py-3">Feature</th>
                <th className="px-4 py-3">GiroCode</th>
                <th className="px-4 py-3">PayPal</th>
                <th className="px-4 py-3">Stripe</th>
                <th className="px-4 py-3">Direct Debit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              <tr>
                <td className="px-4 py-3 font-medium text-slate-200">Transaction cost</td>
                <td className="px-4 py-3" style={{color:'#22c55e', fontWeight:600}}>Free (bank SEPA fee)</td>
                <td className="px-4 py-3" style={{color:'#ef4444'}}>1.5–3.5% + fixed fee</td>
                <td className="px-4 py-3" style={{color:'#ef4444'}}>1.5% + 0.25 € (SEPA)</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>Free or low bank fee</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-3 font-medium text-slate-200">Account required</td>
                <td className="px-4 py-3" style={{color:'#22c55e', fontWeight:600}}>Bank account only</td>
                <td className="px-4 py-3" style={{color:'#f97316'}}>PayPal account</td>
                <td className="px-4 py-3" style={{color:'#f97316'}}>Card or bank account</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>Bank account only</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-200">Privacy</td>
                <td className="px-4 py-3" style={{color:'#22c55e', fontWeight:600}}>High – bank only</td>
                <td className="px-4 py-3" style={{color:'#ef4444'}}>Low – PayPal sees all</td>
                <td className="px-4 py-3" style={{color:'#f97316'}}>Medium – Stripe sees all</td>
                <td className="px-4 py-3" style={{color:'#22c55e'}}>High – bank only</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-3 font-medium text-slate-200">Chargeback risk</td>
                <td className="px-4 py-3" style={{color:'#22c55e', fontWeight:600}}>Very low</td>
                <td className="px-4 py-3" style={{color:'#ef4444'}}>High (buyer protection)</td>
                <td className="px-4 py-3" style={{color:'#f97316'}}>Medium</td>
                <td className="px-4 py-3" style={{color:'#f97316'}}>Medium (8-week reversal)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-200">Setup complexity</td>
                <td className="px-4 py-3" style={{color:'#22c55e', fontWeight:600}}>None</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>Low</td>
                <td className="px-4 py-3" style={{color:'#f97316'}}>Medium</td>
                <td className="px-4 py-3" style={{color:'#f97316'}}>Requires SEPA mandate</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="px-4 py-3 font-medium text-slate-200">SEPA availability</td>
                <td className="px-4 py-3" style={{color:'#22c55e', fontWeight:600}}>All 36 SEPA countries</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>200+ countries</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>40+ countries</td>
                <td className="px-4 py-3" style={{color:'#9aa1b6'}}>All 36 SEPA countries</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="girocode-in-europe" className="mt-10">
        <h2 id="girocode-in-europe">GiroCode in Different European Countries</h2>

        <h3>Germany – GiroCode</h3>
        <p>
          In Germany, the EPC QR standard was introduced under the name &ldquo;GiroCode&rdquo;
          by the Deutsche Kreditwirtschaft in 2018. It is now supported by all major German
          banks and savings banks.
        </p>

        <h3>Austria – Stuzza QR</h3>
        <p>
          Austria uses the <strong>Stuzza QR code</strong>, closely based on the EPC standard.
          German GiroCodes are often readable by Austrian apps due to the high compatibility
          between the two standards.
        </p>

        <h3>Belgium</h3>
        <p>
          Belgium was among the early adopters of the EPC QR standard. Belgian banking apps
          like KBC, ING Belgium and BNP Paribas Fortis support EPC QR scanning.
        </p>

        <h3>Switzerland – QR-Bill</h3>
        <p>
          Switzerland introduced the <strong>Swiss QR-Bill</strong> in 2020. It uses the same
          ISO 20022 data standard but includes Swiss-specific fields (QRR reference number).
          Swiss QR-Bills are not directly compatible with German GiroCodes.
        </p>
      </section>

      <section aria-labelledby="faq-girocode" className="mt-10">
        <h2 id="faq-girocode">Frequently Asked Questions (FAQ)</h2>
        <div className="not-prose space-y-5">
          {[
            {
              q: 'Is a GiroCode only usable in Germany?',
              a: 'No. The GiroCode is based on the EPC SEPA QR standard, which is used throughout the 36-country SEPA zone. Many banking apps in Austria, Belgium, the Netherlands and other SEPA countries can scan and process GiroCodes.',
            },
            {
              q: 'Can I create a GiroCode without specifying an amount?',
              a: 'Yes. The amount field is optional. If you leave it empty, the transfer form will have an empty amount field and the payer can enter their own amount. This is ideal for donation requests.',
            },
            {
              q: 'Which fields are mandatory in a GiroCode?',
              a: 'The minimum required fields are the recipient name and the recipient IBAN. BIC, amount and payment reference are all optional. For invoicing, including both amount and invoice number as reference is strongly recommended.',
            },
            {
              q: 'Is it free to create and use GiroCodes?',
              a: 'Creating a GiroCode with our generator is completely free. The SEPA bank transfer itself may incur your bank\'s standard transfer fee, but there are no per-transaction fees for GiroCode itself.',
            },
            {
              q: 'How large should a GiroCode be on a printed invoice?',
              a: 'The recommended minimum size for a printed GiroCode is 2 × 2 cm. For best scan reliability, 3 × 3 cm or larger is preferred. Print at at least 300 DPI.',
            },
            {
              q: 'Does a GiroCode work on digital invoices too?',
              a: 'Yes. Digital invoices in PDF format can also include a GiroCode. The recipient can scan the QR code directly from their screen or phone.',
            },
            {
              q: 'What is the difference between a GiroCode and a BezahlCode?',
              a: 'The GiroCode follows the EPC SEPA QR standard and is designed specifically for SEPA credit transfers. The BezahlCode is an older German format. Today, GiroCode is the dominant standard for invoice payments in Germany.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="rounded-lg border border-slate-700/50 bg-slate-900/40 p-4">
              <h3 className="mb-1.5 text-sm font-semibold text-slate-100">{q}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </KnowledgeLayout>
  );
}
