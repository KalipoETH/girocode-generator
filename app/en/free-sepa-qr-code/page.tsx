import type { Metadata } from 'next';
import { SeoContentLanding, seoAlternates } from '../../../components/SeoContentLanding';

const SLUG = 'free-sepa-qr-code';

export const metadata: Metadata = {
  title: 'Free SEPA QR Code – Create Without Registration 2026',
  description:
    'Free SEPA QR code creator: No registration, no subscription, no data sharing. Create EPC QR codes directly in your browser and download instantly.',
  alternates: seoAlternates(SLUG),
};

export default function FreeSepaQrCodePage() {
  return (
    <SeoContentLanding
      content={{
        slug: SLUG,
        breadcrumbLabel: 'Free SEPA QR Code',
        badge: '100% Free · No Signup',
        h1: 'Free SEPA QR Code – No Registration Required',
        shortAnswer:
          'Create SEPA QR codes completely free – no registration, no subscription, no data sharing. All processing happens locally in your browser. Download unlimited QR codes as PNG or embed them in invoice PDFs.',
        stats: [
          { value: '0 €', label: 'Forever free' },
          { value: '0', label: 'Registration required' },
          { value: '100%', label: 'Local privacy' },
          { value: '∞', label: 'Unlimited QR codes' },
        ],
        body: (
          <>
            <h2>Why Our SEPA QR Code is Truly Free</h2>
            <ul>
              <li>No subscription fees</li>
              <li>No account required</li>
              <li>No ads</li>
              <li>No data sharing</li>
              <li>Unlimited QR codes</li>
            </ul>

            <h2>Comparison with Competitors</h2>
            <div className="not-prose overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#1f2431] text-left text-slate-300">
                    <th className="py-3 pr-4 font-semibold" />
                    <th className="py-3 pr-4 font-semibold text-emerald-400">girocodegenerator.com</th>
                    <th className="py-3 pr-4 font-semibold">qr-code-generator.com</th>
                    <th className="py-3 font-semibold">qrstuff.com</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-[#1f2431]">
                    <td className="py-3 pr-4 font-medium text-slate-300">Free</td>
                    <td className="py-3 pr-4">✅ Always</td>
                    <td className="py-3 pr-4">⚠️ Limited</td>
                    <td className="py-3">⚠️ Basic only</td>
                  </tr>
                  <tr className="border-b border-[#1f2431]">
                    <td className="py-3 pr-4 font-medium text-slate-300">No registration</td>
                    <td className="py-3 pr-4">✅</td>
                    <td className="py-3 pr-4">⚠️</td>
                    <td className="py-3">✅</td>
                  </tr>
                  <tr className="border-b border-[#1f2431]">
                    <td className="py-3 pr-4 font-medium text-slate-300">Invoice PDF</td>
                    <td className="py-3 pr-4">✅</td>
                    <td className="py-3 pr-4">❌</td>
                    <td className="py-3">❌</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-300">Privacy</td>
                    <td className="py-3 pr-4">✅ 100% local</td>
                    <td className="py-3 pr-4">❌ Server</td>
                    <td className="py-3">❌ Server</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ),
        faqs: [
          {
            q: 'Is the SEPA QR code generator really free?',
            a: 'Yes. girocodegenerator.com is completely free – no subscription, no hidden fees, no registration required.',
          },
          {
            q: 'Do I need to create an account?',
            a: 'No. You can create unlimited SEPA QR codes without any account or signup.',
          },
          {
            q: 'Is my banking data shared?',
            a: 'No. All data is processed 100% locally in your browser. Nothing is sent to our servers.',
          },
        ],
        ctas: [{ href: '/en', label: 'Create Free SEPA QR Code →' }],
        relatedLinks: [
          { href: '/en/create-epc-qr-code', label: 'Create EPC QR Code' },
          { href: '/en/sepa-qr-code-generator-online', label: 'SEPA QR Generator Online' },
        ],
      }}
    />
  );
}
