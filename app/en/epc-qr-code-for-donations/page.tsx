import type { Metadata } from 'next';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'epc-qr-code-for-donations';

export const metadata: Metadata = {
  title: 'EPC QR Code for Donations – Free SEPA Donation QR 2026',
  description:
    'Create EPC QR codes for donations and fundraising. Donors scan and donate via SEPA bank transfer. No fees, no PayPal account needed.',
  alternates: seoAlternates(SLUG),
};

export default function EpcQrCodeForDonationsPage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        breadcrumbLabel: 'EPC QR Code for Donations',
        badge: 'Donations · Fundraising · SEPA',
        h1: 'EPC QR Code for Donations & Fundraising',
        shortAnswer:
          'An EPC QR code for donations allows supporters to donate via SEPA bank transfer by simply scanning a QR code with their banking app. Unlike PayPal or credit card donations, there are no transaction fees. The amount field can be left empty so donors choose their own contribution.',
        stats: [
          { value: '0 €', label: 'Transaction fees' },
          { value: 'EPC069-12', label: 'Official standard' },
          { value: 'Open', label: 'Amount optional' },
          { value: '36', label: 'SEPA countries' },
        ],
        body: (
          <>
            <h2>Why Use EPC QR Codes for Donations?</h2>
            <p>
              Traditional donation methods often come with fees or barriers. Credit card processors
              charge 1.5–3% per transaction. PayPal takes 1.9–3.4%. Bank transfers via manual IBAN
              entry are free but inconvenient – donors forget, mistype IBANs or give up.
            </p>
            <p>
              An <strong>EPC QR code for donations</strong> combines the best of both worlds: zero
              transaction fees (direct SEPA bank transfer) and maximum convenience (scan and pay in
              seconds). Print the QR code on flyers, event posters, church bulletins or your website.
              Supporters scan it with any SEPA banking app and donate directly to your account.
            </p>

            <h2>EPC QR Donations vs. PayPal</h2>
            <div className="not-prose my-6 overflow-x-auto rounded-xl border border-[#1f2431]">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#1f2431] bg-[#121318]">
                    <th className="px-4 py-3 font-bold text-[#e8eaf0]">Feature</th>
                    <th className="px-4 py-3 font-bold text-emerald-400">EPC QR Donation</th>
                    <th className="px-4 py-3 font-bold text-slate-400">PayPal</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-[#1f2431]">
                    <td className="px-4 py-3 font-medium">Transaction fees</td>
                    <td className="px-4 py-3 text-emerald-400">Free (0%)</td>
                    <td className="px-4 py-3">1.9–3.4% + fixed fee</td>
                  </tr>
                  <tr className="border-b border-[#1f2431]">
                    <td className="px-4 py-3 font-medium">Account required</td>
                    <td className="px-4 py-3 text-emerald-400">No – any bank account</td>
                    <td className="px-4 py-3">PayPal account needed</td>
                  </tr>
                  <tr className="border-b border-[#1f2431]">
                    <td className="px-4 py-3 font-medium">Works offline</td>
                    <td className="px-4 py-3 text-emerald-400">Yes – print on posters</td>
                    <td className="px-4 py-3">Online checkout only</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Open amount</td>
                    <td className="px-4 py-3 text-emerald-400">Yes – leave amount blank</td>
                    <td className="px-4 py-3">Fixed amounts only</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>How to Set Up a Donation QR Code</h2>
            <p>
              Create your donation EPC QR code in three simple steps: enter your organisation&apos;s
              IBAN and name, leave the amount field empty (so donors choose their contribution), add
              an optional reference like &quot;Donation&quot; or your campaign name, and generate the
              QR code. Print it on materials or embed it on your website.
            </p>
            <p>
              For recurring donations or membership fees with fixed amounts, enter the amount in EUR.
              The donor scans and confirms – no manual data entry required.
            </p>
          </>
        ),
        howTo: {
          name: 'Create an EPC QR Code for Donations',
          headline: 'Create Your Donation QR Code in 3 Steps',
          steps: [
            {
              title: 'Enter your organisation IBAN and name',
              description:
                'Open the free generator and enter the IBAN and name of your association, NGO or fundraising campaign.',
            },
            {
              title: 'Leave amount blank for open donations',
              description:
                'Leave the amount field empty so donors can choose their own contribution. Optionally add a reference like "Donation 2026".',
            },
            {
              title: 'Print or share the QR code',
              description:
                'Download the QR code as PNG and add it to flyers, posters, event materials or your website. Donors scan and pay via SEPA bank transfer – no fees.',
            },
          ],
        },
        faqs: [
          {
            q: 'Are EPC QR donation codes free?',
            a: 'Yes. Creating and using EPC QR codes is completely free. SEPA bank transfers have no transaction fees for the recipient, unlike PayPal or credit card donations.',
          },
          {
            q: 'Can donors choose their own donation amount?',
            a: 'Yes. Leave the amount field empty when creating the QR code. The donor enters their chosen amount in their banking app after scanning.',
          },
          {
            q: 'Can I use EPC QR codes for NGO fundraising?',
            a: 'Yes. NGOs, associations, churches and charities across the SEPA zone use EPC QR codes for fundraising. They work on printed materials and digital channels without any integration.',
          },
          {
            q: 'Is EPC QR better than PayPal for donations?',
            a: 'For SEPA donations, yes. EPC QR codes have zero transaction fees, require no PayPal account, work offline on printed materials and reach anyone with a European bank account.',
          },
        ],
        ctas: [{ href: '/en', label: 'Create Donation EPC QR Code →' }],
        relatedLinks: [
          { href: '/en/spenden', label: 'GiroCode for Donations (German)' },
          { href: '/en/girocode-vs-paypal', label: 'GiroCode vs. PayPal Comparison' },
          { href: '/en/verein', label: 'GiroCode for Associations' },
          { href: '/en/epc-qr-code-for-invoices', label: 'EPC QR Code for Invoices' },
        ],
      }}
    />
  );
}
