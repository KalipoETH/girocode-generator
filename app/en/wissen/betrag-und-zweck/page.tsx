import type { Metadata } from 'next';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';

export const metadata: Metadata = {
  title: 'Amount & Payment Reference in GiroCode – Complete Guide',
  description:
    'How to correctly enter amount and payment reference in a GiroCode: format, limits, best practices and examples.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/en/wissen/betrag-und-zweck',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/betrag-und-zweck',
      'de': 'https://www.girocodegenerator.com/wissen/betrag-und-zweck',
      'en': 'https://www.girocodegenerator.com/en/wissen/betrag-und-zweck',
      'fr': 'https://www.girocodegenerator.com/fr/wissen/betrag-und-zweck',
      'es': 'https://www.girocodegenerator.com/es/wissen/betrag-und-zweck',
    },
  },
};

export default function WissenBetragUndZweckPageEn() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="Amount & Payment Reference"
      badge="Practice · Amount & Payment Reference"
      title="Amount & Payment Reference in GiroCode – Complete Guide"
      lead="Two of the most important fields in a GiroCode are the transfer amount and the payment reference. Getting these right is essential for error-free payment processing and reliable invoice matching. This guide explains everything from formatting rules to industry-specific best practices."
      relatedArticles={[
        { href: '/en/wissen/girocode', label: 'What is a GiroCode? – Everything You Need to Know' },
        { href: '/en/wissen/iban-bic', label: 'IBAN & BIC for GiroCode – Complete Guide' },
        { href: '/en/wissen/rechnung', label: 'GiroCode on Invoices – The Complete Guide' },
        { href: '/en/wissen/epc-standard', label: 'EPC Standard & SEPA-QR Explained' },
        { href: '/en/wissen/banking-apps', label: 'Banking Apps Supporting GiroCode' },
        { href: '/en/wissen/scannen', label: 'How to Scan a GiroCode' },
      ]}
      locale="en"
    >
      <section aria-labelledby="amount-in-girocode">
        <h2 id="amount-in-girocode">The Amount in GiroCode</h2>
        <p>
          The amount field in a GiroCode encodes the transfer amount in a standardised format
          defined by the EPC standard. When a banking app scans the code, the amount is
          automatically pre-filled in the transfer form.
        </p>

        <h3>Format: EUR12.34 (period as decimal separator)</h3>
        <p>
          The EPC standard requires amounts to be formatted as the ISO 4217 currency code
          followed immediately by the decimal amount, using a <strong>period (.) as the
          decimal separator</strong> – not a comma. In a GiroCode, the format is always:
        </p>
        <pre className="rounded-md bg-slate-900/70 p-3 text-xs text-slate-200">
{`EUR12.34     ✓ Correct
EUR1250.00   ✓ Correct
EUR0.50      ✓ Correct
EUR1.250,00  ✗ Wrong (comma as decimal + period as thousands separator)
EUR1250      ✗ Wrong (no decimal places)
EUR12,34     ✗ Wrong (comma as decimal separator)`}
        </pre>
        <p>
          The amount must always have <strong>exactly two decimal places</strong>. Always use{' '}
          <code>EUR12.50</code> instead of <code>EUR12.5</code>.
        </p>

        <h3>Is amount required? (No, optional)</h3>
        <p>
          The amount field is <strong>optional</strong> in the EPC standard. If the amount
          is not specified, the banking app will show an empty amount field in the pre-filled
          transfer form. The payer can then enter any amount they wish before confirming.
        </p>

        <h3>Maximum amount</h3>
        <p>
          The EPC standard specifies a maximum amount of <strong>EUR 999,999,999.99</strong>.
          SEPA Instant Credit Transfers have a maximum of EUR 100,000 per transaction (as of
          2024), though this limit is being raised progressively by the EU.
        </p>

        <h3>Rounding rules</h3>
        <p>
          Amounts in GiroCodes must be exact. If your invoice total is EUR 1,250.50, encode
          exactly <code>EUR1250.50</code>. Do not round to the nearest whole number unless
          your invoice genuinely shows a whole number amount.
        </p>
      </section>

      <section aria-labelledby="pros-cons-amount" className="mt-10">
        <h2 id="pros-cons-amount">Pros and Cons of Omitting the Amount</h2>

        <h3>When omitting the amount is useful</h3>
        <ul>
          <li>
            <strong>Donations and charitable giving:</strong> Donors typically want to choose
            their own contribution amount.
          </li>
          <li>
            <strong>Variable-price offers:</strong> For bespoke services, tip-based payments,
            or custom orders where the final price varies.
          </li>
          <li>
            <strong>Membership with tiered fees:</strong> Associations that offer different
            membership tiers can use a single GiroCode without amount.
          </li>
        </ul>

        <h3>When including the amount is better</h3>
        <ul>
          <li>
            <strong>Standard invoices:</strong> For regular business invoices with a fixed
            total, always include the exact amount.
          </li>
          <li>
            <strong>Recurring fixed fees:</strong> Annual membership fees, monthly retainer
            fees, subscription renewals.
          </li>
          <li>
            <strong>Automated payment matching:</strong> When the amount is pre-filled, your
            accounting software can more reliably match incoming payments to outstanding
            invoices.
          </li>
        </ul>

        <h3>Practical examples</h3>
        <ul>
          <li>Charity donation box → GiroCode without amount (donor chooses)</li>
          <li>Freelance invoice for EUR 2,450.00 → GiroCode with EUR2450.00</li>
          <li>Club membership, annual fee EUR 120 → GiroCode with EUR120.00</li>
          <li>Restaurant table QR code for tipping → GiroCode without amount</li>
        </ul>
      </section>

      <section aria-labelledby="payment-reference" className="mt-10">
        <h2 id="payment-reference">The Payment Reference in GiroCode</h2>
        <p>
          The payment reference (Verwendungszweck in German) is the text that appears on
          both the sender&apos;s and recipient&apos;s bank statement. It is the primary
          mechanism by which invoice issuers identify which invoice an incoming payment is for.
        </p>

        <h3>Maximum length: 140 characters</h3>
        <p>
          The EPC standard allows a maximum of <strong>140 characters</strong> (in UTF-8
          encoding) for the payment reference. However, banking apps often display only the
          first 35 or 70 characters on the transfer confirmation screen, so the most important
          information should come first.
        </p>

        <h3>Allowed characters (UTF-8)</h3>
        <p>
          The EPC standard permits UTF-8 encoded text, which supports standard ASCII characters
          as well as European special characters. In practice, sticking to plain ASCII
          characters (A-Z, a-z, 0-9, spaces, hyphens, slashes, dots) ensures maximum
          compatibility.
        </p>
        <p>
          Characters to <strong>avoid</strong> in payment references:
        </p>
        <ul>
          <li>Control characters (tabs, newlines within the reference)</li>
          <li>Emojis and non-Latin scripts</li>
          <li>Quotation marks (may cause parsing issues in some systems)</li>
          <li>Ampersands (&amp;) and angle brackets (&lt;&gt;) – may interfere with XML processing</li>
        </ul>

        <h3>What belongs in the payment reference?</h3>
        <ul>
          <li><strong>Invoice number:</strong> The unique identifier for the invoice</li>
          <li><strong>Customer/client number:</strong> If applicable, helps with multi-client accounting</li>
          <li><strong>Date or period:</strong> Invoice date or service period</li>
          <li><strong>Project name or description:</strong> Brief description of what is being paid for</li>
        </ul>
        <p>A well-structured payment reference might look like this:</p>
        <pre className="rounded-md bg-slate-900/70 p-3 text-xs text-slate-200">
{`Invoice 2024-0042 / Client 1234 / Web Development March 2024`}
        </pre>
      </section>

      <section aria-labelledby="best-practices-reference" className="mt-10">
        <h2 id="best-practices-reference">Best Practices for Payment References</h2>

        <h3>Always include the invoice number</h3>
        <p>
          The invoice number is the most important element of any payment reference for
          business invoices. Use a consistent numbering format (e.g. <code>2024-0042</code>
          or <code>INV-2024-042</code>) that sorts chronologically.
        </p>

        <h3>Include the date or service period</h3>
        <p>Example: <code>Invoice 2024-0042 / March 2024</code></p>

        <h3>For associations: membership fee + member number</h3>
        <p>Example: <code>Membership fee 2024 / Member 4711</code></p>

        <h3>For private individuals: short description</h3>
        <p>Examples: <code>Birthday dinner share</code> / <code>Rent April 2024</code> / <code>Concert tickets refund</code></p>
      </section>

      <section aria-labelledby="common-mistakes-reference" className="mt-10">
        <h2 id="common-mistakes-reference">Common Mistakes with Payment References</h2>

        <h3>Text too long (gets cut off)</h3>
        <p>
          Exceeding the 140-character limit means the reference will be truncated. Always put
          the most critical information (invoice number) at the beginning, not the end.
        </p>

        <h3>Missing invoice number</h3>
        <p>
          Without the invoice number in the payment reference, matching incoming payments to
          invoices requires manual comparison of amounts and dates – time-consuming and
          error-prone. Never send an invoice without a payment reference that includes the
          invoice number.
        </p>

        <h3>Unclear descriptions</h3>
        <p>
          Vague references like &ldquo;Thank you&rdquo;, &ldquo;Payment&rdquo; or
          &ldquo;Services&rdquo; are useless for accounting purposes. Always be specific and
          include unique identifiers.
        </p>

        <h3>Different reference in QR code and invoice text</h3>
        <p>
          Ensure the payment reference encoded in the GiroCode exactly matches the payment
          reference printed on the invoice in human-readable form.
        </p>
      </section>

      <section aria-labelledby="references-by-industry" className="mt-10">
        <h2 id="references-by-industry">Payment References for Different Industries</h2>

        <h3>Freelancers &amp; agencies</h3>
        <p>Example: <code>INV-2024-0042 / CLIENT-ACME / Logo Design</code></p>

        <h3>Tradespeople</h3>
        <p>Example: <code>Job 4711 / Mueller / Kitchen installation</code></p>

        <h3>Associations</h3>
        <p>Example: <code>Membership 2024 / Member 1234 / Smith</code></p>

        <h3>Online shops</h3>
        <p>Example: <code>Order 2024-18450 / shop.example.com</code></p>

        <h3>Service providers</h3>
        <p>Example: <code>Coaching March 2024 / INV-2024-03 / Johnson</code></p>
      </section>
    </KnowledgeLayout>
  );
}
