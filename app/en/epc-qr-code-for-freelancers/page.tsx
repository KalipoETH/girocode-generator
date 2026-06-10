import type { Metadata } from 'next';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'epc-qr-code-for-freelancers';

export const metadata: Metadata = {
  title: 'EPC QR Code for Freelancers – Get Paid Faster 2026',
  description:
    'Freelancers use EPC QR codes on invoices to get paid faster. Clients scan and pay in seconds via SEPA. Free generator, no subscription.',
  alternates: seoAlternates(SLUG),
};

export default function EpcQrCodeForFreelancersPage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        breadcrumbLabel: 'EPC QR Code for Freelancers',
        badge: 'Freelancers · Self-Employed · SEPA',
        h1: 'EPC QR Code for Freelancers – Faster Payments',
        shortAnswer:
          'Freelancers add EPC QR codes to invoices so clients can pay by scanning with their banking app. IBAN, amount and payment reference are pre-filled automatically – eliminating typos, late payments and chasing reminders.',
        stats: [
          { value: '10 sec.', label: 'Client payment time' },
          { value: '0 €', label: 'Fees for you and client' },
          { value: 'EPC069-12', label: 'Official standard' },
          { value: '100%', label: 'Local – no data sharing' },
        ],
        body: (
          <>
            <h2>The Freelancer Payment Problem</h2>
            <p>
              Every freelancer knows the frustration: the work is done, the invoice is sent – but
              payment takes weeks. Three common pain points cost freelancers time and money:
            </p>
            <div className="not-prose my-6 space-y-3">
              {[
                {
                  title: 'Clients mistype your IBAN',
                  desc: 'Manual IBAN entry leads to failed transfers. You wait, investigate, and resend payment details – wasting hours on admin.',
                },
                {
                  title: 'Payments arrive late',
                  desc: 'Entering transfer details feels like effort. Clients postpone payment until "later" – and you end up sending reminders.',
                },
                {
                  title: 'Wrong payment references',
                  desc: 'Without the correct invoice number in the reference field, you cannot match payments to invoices in your accounting.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-xl border border-rose-500/20 bg-rose-500/5 p-4"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/15 text-rose-300"
                  >
                    ✕
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#e8eaf0]">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2>The Solution: EPC QR Code on Every Invoice</h2>
            <p>
              An <strong>EPC QR code</strong> on your invoice solves all three problems at once. Your
              client opens their banking app, scans the QR code, and the transfer form is pre-filled
              with your IBAN, the exact invoice amount and the invoice number as payment reference.
              They verify and confirm – payment done in under 10 seconds.
            </p>
            <p>
              EPC QR codes work across all 36 SEPA countries. Whether your client uses ING,
              Sparkasse, Revolut or any other SEPA banking app – the QR code works. No subscription,
              no integration, no transaction fees.
            </p>

            <h2>Professional Invoices with Embedded QR Code</h2>
            <p>
              Use our free invoice PDF generator to create professional invoices with an embedded EPC
              QR code in the bottom-right corner. Enter your details once, generate the PDF, and send
              it to your client by email. They pay immediately – no more waiting weeks for bank
              transfers.
            </p>
          </>
        ),
        howTo: {
          name: 'Add an EPC QR Code to a Freelancer Invoice',
          headline: 'Get Paid Faster in 3 Steps',
          steps: [
            {
              title: 'Enter your IBAN and invoice details',
              description:
                'Open the generator and enter your IBAN, name, invoice amount and invoice number as payment reference.',
            },
            {
              title: 'Generate EPC QR code or invoice PDF',
              description:
                'Create the QR code as PNG or use the invoice PDF feature for a ready-to-send professional invoice with embedded code.',
            },
            {
              title: 'Send to your client and get paid',
              description:
                'Email the invoice PDF. Your client scans the QR code with their banking app and pays in seconds – no IBAN typos, no delays.',
            },
          ],
        },
        faqs: [
          {
            q: 'Do EPC QR codes work for international freelancer clients?',
            a: 'EPC QR codes work across all 36 SEPA countries. Clients in Germany, Austria, Belgium, Netherlands, France, Spain and all other SEPA members can scan and pay.',
          },
          {
            q: 'Is the EPC QR code generator free for freelancers?',
            a: 'Yes, completely free. No registration, no subscription, no per-transaction fees. All processing happens locally in your browser.',
          },
          {
            q: 'Can I include the invoice number in the EPC QR code?',
            a: 'Yes. Enter your invoice number in the payment reference field. It will be pre-filled when your client scans the QR code, making payment reconciliation easy.',
          },
          {
            q: 'Does my client need a special app to scan the QR code?',
            a: 'No. Any SEPA-capable banking app supports EPC QR code scanning – Sparkasse, ING, N26, Revolut, George and hundreds of others.',
          },
        ],
        ctas: [
          { href: '/en', label: 'Create EPC QR Code for Invoice →' },
          { href: '/en/rechnungs-editor', label: 'Create Invoice PDF →', primary: false },
        ],
        relatedLinks: [
          { href: '/en/freelancer', label: 'GiroCode for Freelancers' },
          { href: '/en/epc-qr-code-for-invoices', label: 'EPC QR Code for Invoices' },
          { href: '/en/blog/freelancer-rechnungen-qr-code', label: 'Blog: Freelancer Invoices with QR' },
          { href: '/en/rechnungs-editor', label: 'Invoice PDF Generator' },
        ],
      }}
    />
  );
}
