import type { Metadata } from 'next';
import Link from 'next/link';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';

export const metadata: Metadata = {
  title: 'GiroCode on Invoices – Complete Guide & PDF Generator',
  description:
    'Add GiroCodes to invoices: legal requirements, optimal placement and free PDF generator. ✅ Professional invoices in 2 minutes. No registration needed.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/en/wissen/rechnung',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/rechnung',
      'de': 'https://www.girocodegenerator.com/wissen/rechnung',
      'en': 'https://www.girocodegenerator.com/en/wissen/rechnung',
      'fr': 'https://www.girocodegenerator.com/fr/wissen/rechnung',
      'es': 'https://www.girocodegenerator.com/es/wissen/rechnung',
    },
  },
};

export default function WissenRechnungPageEn() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="GiroCode on invoices"
      badge="Practice · GiroCode on invoices"
      title="GiroCode on Invoices – The Complete Guide"
      lead="Adding a GiroCode to your invoices is one of the simplest ways to speed up your cash flow, reduce payment errors and impress clients with a modern, professional touch. This guide covers everything from legal requirements to placement, invoicing software and step-by-step instructions."
      relatedArticles={[
        { href: '/en/wissen/girocode', label: 'What is a GiroCode? – Everything You Need to Know' },
        { href: '/en/wissen/betrag-und-zweck', label: 'Amount & Payment Reference in GiroCode' },
        { href: '/en/wissen/banking-apps', label: 'Banking Apps Supporting GiroCode' },
        { href: '/en/wissen/scannen', label: 'How to Scan a GiroCode' },
        { href: '/en/wissen/iban-bic', label: 'IBAN & BIC for GiroCode – Complete Guide' },
        { href: '/en/wissen/epc-standard', label: 'EPC Standard & SEPA-QR Explained' },
      ]}
      locale="en"
    >
      <section aria-labelledby="why-girocode-invoices">
        <h2 id="why-girocode-invoices">Why Use GiroCode on Invoices?</h2>
        <p>
          Every invoice you send without a GiroCode forces your client to manually type
          your IBAN, the exact amount and the payment reference – each of those characters
          is an opportunity for a typo. According to studies by European banking associations,
          around <strong>1 in 20 manual IBAN entries contains at least one error</strong>.
        </p>

        <h3>Statistics: How long does an average bank transfer take?</h3>
        <ul>
          <li>Invoices without a payment QR code are paid on average <strong>3–5 days later</strong> than invoices with a QR code</li>
          <li>The average invoice-to-payment cycle in Germany is <strong>14–21 days</strong> for invoices without scan-to-pay</li>
          <li>With GiroCode, clients who scan immediately pay within <strong>1–3 days</strong> of receiving the invoice</li>
          <li>Late payment rates drop by up to <strong>30%</strong> when invoices include a GiroCode</li>
        </ul>

        <h3>Benefits for invoice senders</h3>
        <ul>
          <li><strong>Faster cash flow:</strong> Earlier payments improve liquidity</li>
          <li><strong>Fewer errors:</strong> No mistyped IBANs or wrong amounts</li>
          <li><strong>Less chasing:</strong> Fewer follow-up calls and emails about payment status</li>
          <li><strong>Automatic reconciliation:</strong> Pre-filled payment reference enables automatic invoice matching</li>
          <li><strong>Professional image:</strong> Positions you as a modern, tech-forward business</li>
          <li><strong>No additional cost:</strong> Unlike payment processors, GiroCode incurs no per-transaction fees</li>
        </ul>

        <h3>Benefits for payers (customers)</h3>
        <ul>
          <li><strong>Fast and convenient:</strong> Scan, verify, confirm – done in under 30 seconds</li>
          <li><strong>Error-free:</strong> No manual data entry, no risk of typos</li>
          <li><strong>Works with any bank:</strong> All major German banking apps support GiroCode scanning</li>
          <li><strong>No third-party account needed:</strong> Unlike PayPal, no additional registration required</li>
        </ul>
      </section>

      <section aria-labelledby="legal-requirements" className="mt-10">
        <h2 id="legal-requirements">Legal Requirements for Invoices (EU/Germany)</h2>
        <p>
          A GiroCode is a payment convenience feature – it does not change or replace the
          legal requirements for invoices. German VAT law and the EU VAT Directive specify
          which information must appear on every invoice:
        </p>
        <ul>
          <li><strong>Full name and address</strong> of both the supplier and the customer</li>
          <li><strong>VAT identification number (USt-IdNr.)</strong> of the supplier</li>
          <li><strong>Invoice date</strong></li>
          <li><strong>Consecutive invoice number</strong> – must be unique and sequential</li>
          <li><strong>Quantity and description</strong> of the goods or services provided</li>
          <li><strong>Date of supply or service</strong> (if different from invoice date)</li>
          <li><strong>Net amount</strong> per line item and total</li>
          <li><strong>Applicable VAT rate(s)</strong> and <strong>VAT amount</strong></li>
          <li><strong>Gross amount</strong> (total including VAT)</li>
          <li><strong>Bank details</strong> (IBAN, optionally BIC) for payment</li>
          <li><strong>Payment terms</strong> (payment deadline)</li>
        </ul>
        <p>
          The GiroCode encodes the bank details in machine-readable form as a convenience.
          The same information should also appear in human-readable form on the invoice.
        </p>

        <h3>Small business exemption (Kleinunternehmerregelung)</h3>
        <p>
          In Germany, businesses whose annual turnover is below EUR 22,000 can apply for the
          small business exemption under § 19 UStG. Under this scheme, you do not charge VAT,
          and your invoices must include the following disclaimer:
        </p>
        <p className="rounded-md border border-slate-700 bg-slate-900/40 p-3 text-sm italic text-slate-300">
          &ldquo;Pursuant to § 19 UStG (small business regulation), this invoice does not
          include VAT.&rdquo;
        </p>
        <p>
          GiroCodes work identically for small business invoices.
        </p>
      </section>

      <section aria-labelledby="placement" className="mt-10">
        <h2 id="placement">Where to Place the GiroCode on an Invoice</h2>

        <h3>Bottom right (recommended)</h3>
        <p>
          The <strong>bottom-right corner</strong> of the invoice is the most universally
          recognised and expected location for a GiroCode. This placement mirrors the
          position of traditional payment slips in Germany and Austria.
        </p>
        <p>
          The GiroCode should be placed <strong>near the bank details section</strong> of the
          invoice, typically below or beside the IBAN, BIC and account holder name.
        </p>

        <h3>Minimum size (2×2 cm recommended)</h3>
        <p>
          For <strong>printed invoices</strong>, the GiroCode should have a minimum size of{' '}
          <strong>2 × 2 cm</strong>. A size of <strong>3 × 3 cm</strong> is recommended for
          better scan reliability.
        </p>
        <p>
          For <strong>digital invoices (PDF)</strong>, the QR code should be at least
          200 × 200 pixels. A size of 300–400 pixels is more comfortable for scanning from
          a screen.
        </p>

        <h3>Distance from edges and contrast</h3>
        <p>
          The QR code must have a <strong>quiet zone</strong> – a clear white border – of at
          least 4 QR code modules on all four sides. Print the QR code in{' '}
          <strong>black on white background</strong>.
        </p>
      </section>

      <section aria-labelledby="invoicing-programs" className="mt-10">
        <h2 id="invoicing-programs">GiroCode in Different Invoicing Programs</h2>

        <h3>sevDesk – Automatic GiroCode Generation</h3>
        <p>
          <strong>sevDesk</strong> is a cloud-based accounting platform for freelancers,
          self-employed professionals and small businesses. It natively generates GiroCodes
          for every invoice:
        </p>
        <ul>
          <li>Automatic GiroCode generation based on your stored bank account</li>
          <li>Correct EPC payload formatting (amount, reference, IBAN)</li>
          <li>Professional invoice templates with GiroCode placement</li>
          <li>Bank account sync via PSD2 for automatic payment matching</li>
          <li>DATEV export for tax advisors</li>
          <li>GoBD-compliant document storage</li>
        </ul>
        <p>
          <a
            href="https://www.awin1.com/cread.php?awinmid=15944&awinaffid=2793610"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="font-medium text-sky-400 underline hover:text-sky-300"
          >
            Try sevDesk free for 14 days *
          </a>
        </p>

        <h3>FastBill – GiroCode Integration</h3>
        <p>
          <strong>FastBill</strong> is an intuitive invoicing solution particularly popular
          with freelancers and creative professionals:
        </p>
        <ul>
          <li>GiroCode automatically embedded in every invoice PDF</li>
          <li>Clean, professional invoice templates</li>
          <li>Bank account sync for payment monitoring</li>
          <li>Automatic payment reminder emails</li>
          <li>DATEV and Lexware integration</li>
        </ul>
        <p>
          <a
            href="https://www.awin1.com/cread.php?awinmid=20766&awinaffid=2793610"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="font-medium text-sky-400 underline hover:text-sky-300"
          >
            Try FastBill free for 14 days *
          </a>
        </p>

        <h3>GiroCode Generator (our solution) – Free &amp; Privacy-Friendly</h3>
        <p>
          Our free <strong>GiroCode Generator</strong> is the ideal solution for beginners
          and occasional users:
        </p>
        <ul>
          <li>Completely free, no registration required</li>
          <li>All processing happens locally in your browser – no data sent to servers</li>
          <li>Generates GiroCode QR code as PNG for embedding in your own invoice template</li>
          <li>Optional invoice PDF generation with embedded GiroCode</li>
          <li>Ideal for freelancers who create invoices manually or in Word/Excel</li>
        </ul>
      </section>

      <section aria-labelledby="step-by-step" className="mt-10">
        <h2 id="step-by-step">Step-by-Step: Create Invoice with GiroCode</h2>
        <ol>
          <li>
            <strong>Enter payment details:</strong> Open our{' '}
            <Link href="/en" className="text-sky-400 underline hover:text-sky-300">
              GiroCode Generator
            </Link>{' '}
            and fill in your recipient name, IBAN, optionally BIC, invoice amount and
            payment reference (e.g. &ldquo;Invoice 2024-0042&rdquo;).
          </li>
          <li>
            <strong>Generate GiroCode:</strong> Click &ldquo;Generate GiroCode&rdquo;. The
            tool creates an EPC-compliant QR code instantly in your browser.
          </li>
          <li>
            <strong>Fill in invoice details:</strong> In the invoice tab, enter your business
            name, address, client details, line items, VAT and other required fields.
          </li>
          <li>
            <strong>Preview the invoice:</strong> The tool shows a live preview with the
            GiroCode embedded in the bottom-right corner.
          </li>
          <li>
            <strong>Download PDF:</strong> Click &ldquo;Download Invoice PDF&rdquo; to save
            the completed invoice with embedded GiroCode to your device.
          </li>
          <li>
            <strong>Send to customer:</strong> Email the PDF to your customer, or print and
            mail it. The GiroCode is embedded and ready to scan.
          </li>
        </ol>
        <p>
          The entire process takes less than 3 minutes. All data is processed locally in your
          browser – your IBAN and invoice details never leave your device.
        </p>
      </section>

      <section aria-labelledby="faq-invoices" className="mt-10">
        <h2 id="faq-invoices">Frequently Asked Questions</h2>
        <div className="not-prose space-y-5">
          {[
            {
              q: 'Does adding a GiroCode to an invoice have any legal implications?',
              a: 'No. A GiroCode is a payment convenience feature with no legal implications. The same payment details encoded in the QR code must also appear in human-readable form on the invoice.',
            },
            {
              q: 'Can I add a GiroCode to Word or Excel invoices?',
              a: 'Yes. Generate the GiroCode as a PNG using our free tool, then insert the image into your Word or Excel invoice template. Position it in the bottom-right area near your bank details. Make sure the image is at least 2 × 2 cm when printed.',
            },
            {
              q: "What happens if my client's banking app cannot scan GiroCodes?",
              a: 'All major German banking apps support GiroCode scanning. For clients using an older or unsupported app, the payment details are still clearly visible on the invoice in human-readable form, so they can make the transfer manually.',
            },
            {
              q: 'Should I include both IBAN text and GiroCode on the invoice?',
              a: 'Yes, always. Include your IBAN, BIC, bank name and payment reference in human-readable text on the invoice, and also include the GiroCode QR code.',
            },
            {
              q: 'Is a GiroCode on invoices required by law?',
              a: 'No. Including a GiroCode on invoices is entirely voluntary. There is no legal obligation to include one. However, the business benefits make it a strongly recommended practice.',
            },
            {
              q: 'What is the correct size for a GiroCode on a printed invoice?',
              a: 'The minimum recommended size is 2 × 2 cm for print. Our recommendation is 3 × 3 cm for reliable scanning by all camera types. Print at 300 DPI or higher.',
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
