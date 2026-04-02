import type { Metadata } from 'next';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';

export const metadata: Metadata = {
  title: 'Banking Apps Supporting GiroCode 2026 – Full List',
  description:
    'Which banking apps can scan GiroCodes? Sparkasse ✅ ING ✅ DKB ✅ Volksbank ✅ N26 ✅ and 8 more. Step-by-step guide for each app.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/en/wissen/banking-apps',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/banking-apps',
      'de': 'https://www.girocodegenerator.com/wissen/banking-apps',
      'en': 'https://www.girocodegenerator.com/en/wissen/banking-apps',
      'fr': 'https://www.girocodegenerator.com/fr/wissen/banking-apps',
      'es': 'https://www.girocodegenerator.com/es/wissen/banking-apps',
    },
  },
};

export default function WissenBankingAppsPageEn() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="Banking Apps with GiroCode"
      badge="Practice · Banking Apps & GiroCode"
      title="Banking Apps Supporting GiroCode – Complete Overview 2025"
      lead="GiroCode scanning is supported by virtually all major German banking apps in 2025. This guide covers which apps support the standard, how to use the QR scanner feature in the most popular apps, and what to do if your app does not support GiroCode scanning."
      relatedArticles={[
        { href: '/en/wissen/girocode', label: 'What is a GiroCode? – Everything You Need to Know' },
        { href: '/en/wissen/scannen', label: 'How to Scan a GiroCode – Complete Guide' },
        { href: '/en/wissen/rechnung', label: 'GiroCode on Invoices – The Complete Guide' },
        { href: '/en/wissen/epc-standard', label: 'EPC Standard & SEPA-QR – Technical Structure' },
        { href: '/en/wissen/iban-bic', label: 'IBAN & BIC for GiroCode' },
        { href: '/en/wissen/betrag-und-zweck', label: 'Amount & Payment Reference in GiroCode' },
      ]}
      locale="en"
    >
      <section aria-labelledby="which-apps-support">
        <h2 id="which-apps-support">Which Banking Apps Support GiroCodes?</h2>
        <p>
          As of early 2025, GiroCode scanning is supported by all major German banking apps.
          The feature is typically found in the &ldquo;Transfer&rdquo; or &ldquo;Payments&rdquo;
          section of each app, often as a QR code icon or camera button next to the IBAN input
          field. Here is a comprehensive overview:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="py-2 pr-4 text-left text-slate-300">Banking App</th>
                <th className="py-2 pr-4 text-left text-slate-300">Support</th>
                <th className="py-2 text-left text-slate-300">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-400">
              <tr><td className="py-2 pr-4 font-medium text-slate-300">Sparkasse App</td><td className="py-2 pr-4 text-emerald-400">✅ Full support</td><td className="py-2">QR scanner in transfer section; widely tested</td></tr>
              <tr><td className="py-2 pr-4 font-medium text-slate-300">VR-Banking (Volksbank/Raiffeisenbank)</td><td className="py-2 pr-4 text-emerald-400">✅ Full support</td><td className="py-2">QR code button in new transfer form</td></tr>
              <tr><td className="py-2 pr-4 font-medium text-slate-300">ING Banking to go</td><td className="py-2 pr-4 text-emerald-400">✅ Full support</td><td className="py-2">Camera icon in IBAN field during transfers</td></tr>
              <tr><td className="py-2 pr-4 font-medium text-slate-300">DKB Banking</td><td className="py-2 pr-4 text-emerald-400">✅ Full support</td><td className="py-2">Dedicated QR scan button in transfer view</td></tr>
              <tr><td className="py-2 pr-4 font-medium text-slate-300">Comdirect (Commerzbank)</td><td className="py-2 pr-4 text-emerald-400">✅ Full support</td><td className="py-2">QR scan available in &ldquo;New transfer&rdquo;</td></tr>
              <tr><td className="py-2 pr-4 font-medium text-slate-300">Deutsche Bank</td><td className="py-2 pr-4 text-emerald-400">✅ Full support</td><td className="py-2">QR code scan in mobile banking app</td></tr>
              <tr><td className="py-2 pr-4 font-medium text-slate-300">Commerzbank</td><td className="py-2 pr-4 text-emerald-400">✅ Full support</td><td className="py-2">GiroCode support via camera in transfer form</td></tr>
              <tr><td className="py-2 pr-4 font-medium text-slate-300">N26</td><td className="py-2 pr-4 text-yellow-400">⚠️ Partial</td><td className="py-2">QR scan available; BIC sometimes required</td></tr>
              <tr><td className="py-2 pr-4 font-medium text-slate-300">Consorsbank (BNP Paribas)</td><td className="py-2 pr-4 text-emerald-400">✅ Full support</td><td className="py-2">QR scan in transfer section</td></tr>
              <tr><td className="py-2 pr-4 font-medium text-slate-300">Targobank</td><td className="py-2 pr-4 text-emerald-400">✅ Full support</td><td className="py-2">GiroCode scan available in banking app</td></tr>
              <tr><td className="py-2 pr-4 font-medium text-slate-300">HypoVereinsbank (UniCredit)</td><td className="py-2 pr-4 text-emerald-400">✅ Full support</td><td className="py-2">QR scan in mobile transfer view</td></tr>
              <tr><td className="py-2 pr-4 font-medium text-slate-300">Postbank</td><td className="py-2 pr-4 text-emerald-400">✅ Full support</td><td className="py-2">Integrated QR scanner for SEPA transfers</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Note: App versions and features change frequently. If you cannot find the QR scanner
          in your banking app, check for app updates in the App Store or Google Play Store.
        </p>
      </section>

      <section aria-labelledby="general-scanning-guide" className="mt-10">
        <h2 id="general-scanning-guide">Step-by-Step: Scanning a GiroCode</h2>
        <ol>
          <li><strong>Open your banking app:</strong> Launch the app and log in with your PIN, fingerprint or Face ID.</li>
          <li><strong>Navigate to &ldquo;Transfer&rdquo; or &ldquo;Payments&rdquo;:</strong> Find the transfer initiation function.</li>
          <li><strong>Find the QR scanner:</strong> Look for a QR code icon, camera icon or a button labelled &ldquo;Scan QR code&rdquo;.</li>
          <li><strong>Point the camera at the GiroCode:</strong> Allow camera access when prompted. Hold your phone steady.</li>
          <li><strong>Wait for automatic recognition:</strong> The app automatically detects and decodes the QR code.</li>
          <li><strong>Verify the pre-filled data:</strong> <strong>Always carefully check</strong> the recipient name, IBAN, amount and payment reference.</li>
          <li><strong>Enter your TAN or use biometrics</strong> to confirm the transfer.</li>
          <li><strong>Confirm the transfer.</strong> The money typically arrives the next business day or instantly with SEPA Instant.</li>
        </ol>
      </section>

      <section aria-labelledby="sparkasse-guide" className="mt-10">
        <h2 id="sparkasse-guide">Scanning with Sparkasse App – Step by Step</h2>
        <p>
          The Sparkasse app is used by over 10 million people in Germany and was among the
          first German banking apps to support GiroCode scanning.
        </p>
        <ol>
          <li>Open the Sparkasse app and log in with your PIN or fingerprint</li>
          <li>Tap &ldquo;Überweisungen&rdquo; (Transfers) in the bottom navigation</li>
          <li>Tap &ldquo;Neue Überweisung&rdquo; (New Transfer)</li>
          <li>Tap the QR code icon (camera symbol) in the upper area of the transfer form</li>
          <li>Grant camera permission if prompted</li>
          <li>Point the camera at the GiroCode – the app automatically scans it</li>
          <li>Check the pre-filled recipient name, IBAN, amount and reference</li>
          <li>Tap &ldquo;Weiter&rdquo; (Next), then confirm with your TAN</li>
        </ol>
        <p>
          <strong>Tip:</strong> If the QR code is on a dark invoice background, increase the
          screen brightness or move to better lighting.
        </p>
      </section>

      <section aria-labelledby="vr-banking-guide" className="mt-10">
        <h2 id="vr-banking-guide">Scanning with VR-Banking – Step by Step</h2>
        <ol>
          <li>Open the VR-Banking app and authenticate (PIN/fingerprint/Face ID)</li>
          <li>Tap &ldquo;Überweisung&rdquo; (Transfer) in the main menu or home screen</li>
          <li>Select &ldquo;Neue Überweisung&rdquo; (New Transfer)</li>
          <li>In the transfer form, tap the QR code / camera icon next to the recipient IBAN field</li>
          <li>Allow camera access when prompted</li>
          <li>Scan the GiroCode – the form fills automatically</li>
          <li>Review all pre-filled fields carefully</li>
          <li>Complete the transfer with your SecureGo+ TAN or ChipTAN</li>
        </ol>
      </section>

      <section aria-labelledby="ing-guide" className="mt-10">
        <h2 id="ing-guide">Scanning with ING Banking – Step by Step</h2>
        <ol>
          <li>Open the ING Banking to go app and log in</li>
          <li>Tap &ldquo;Überweisen&rdquo; (Transfer) on the home screen</li>
          <li>In the transfer form, look for the camera icon at the right end of the IBAN input field</li>
          <li>Tap the camera icon to activate the QR scanner</li>
          <li>Scan the GiroCode – all fields are filled in automatically</li>
          <li>Verify the data, enter your amount if not pre-filled, and confirm with your ING TAN</li>
        </ol>
      </section>

      <section aria-labelledby="dkb-guide" className="mt-10">
        <h2 id="dkb-guide">Scanning with DKB Banking – Step by Step</h2>
        <ol>
          <li>Open the DKB app and log in with your access number and PIN</li>
          <li>Navigate to &ldquo;Überweisungen&rdquo; (Transfers)</li>
          <li>Tap &ldquo;Neue Überweisung&rdquo; (New Transfer)</li>
          <li>Find the QR code scan icon in the transfer form</li>
          <li>Grant camera permissions and scan the GiroCode</li>
          <li>All fields (recipient, IBAN, amount, reference) are pre-filled</li>
          <li>Review and confirm with your DKB TAN</li>
        </ol>
      </section>

      <section aria-labelledby="no-qr-scanner" className="mt-10">
        <h2 id="no-qr-scanner">What to Do If Your App Has No QR Scanner</h2>

        <h3>Alternative 1: Google Lens / iOS Camera App</h3>
        <p>
          The standard iOS camera app and Google Lens can read QR codes, but they cannot
          directly initiate bank transfers. They decode the EPC payload and display the text.
          You can then manually copy the payment details.
        </p>

        <h3>Alternative 2: Standard QR scanner apps</h3>
        <p>
          Many generic QR scanner apps can read GiroCodes and display the decoded text
          payload. You can then manually enter the displayed IBAN, amount and reference into
          your banking app&apos;s transfer form.
        </p>

        <h3>Alternative 3: Contact your bank</h3>
        <p>
          If your bank&apos;s app does not support GiroCode scanning, contact your bank and
          ask them to add this feature. Many banks have added GiroCode support after customer
          requests.
        </p>

        <h3>Alternative 4: Check for app updates</h3>
        <p>
          Banking apps are updated regularly. If your current version does not have a QR
          scanner, check for updates in the App Store (iOS) or Google Play Store (Android).
        </p>
      </section>

      <section aria-labelledby="security-scanning" className="mt-10">
        <h2 id="security-scanning">Security When Scanning GiroCodes</h2>

        <h3>Always verify data before confirming</h3>
        <p>
          The single most important security practice is to{' '}
          <strong>always carefully check the pre-filled transfer data</strong> before
          confirming. Specifically, verify:
        </p>
        <ul>
          <li><strong>Recipient name:</strong> Does it match who you expect to pay?</li>
          <li><strong>IBAN:</strong> Does the first few characters match the expected bank?</li>
          <li><strong>Amount:</strong> Does it match the invoice total?</li>
          <li><strong>Payment reference:</strong> Does it reference the correct invoice number?</li>
        </ul>

        <h3>Recognising manipulated QR codes</h3>
        <ul>
          <li>A QR code sticker that appears to be placed over the original</li>
          <li>The recipient name or IBAN does not match what is printed on the invoice</li>
          <li>The QR code is of noticeably different print quality than the rest of the invoice</li>
        </ul>
        <p>
          When in doubt, do not scan the QR code – enter the payment details manually from
          the human-readable invoice text instead.
        </p>

        <h3>QR code phishing (Quishing) explained</h3>
        <p>
          <strong>Quishing</strong> is the use of malicious QR codes for phishing attacks.
          The best defence is simple: always verify the pre-filled transfer data against the
          human-readable invoice text before confirming. Never pay an invoice from an unknown
          sender based solely on a QR code scan.
        </p>

        <h3>What to do if you suspect fraud</h3>
        <ol>
          <li>Contact your bank immediately – the sooner you report it, the better the chance of recovery</li>
          <li>Provide your bank with the transaction date, amount and recipient IBAN</li>
          <li>File a police report</li>
          <li>Report the incident to the German Federal Financial Supervisory Authority (BaFin) if appropriate</li>
        </ol>
      </section>
    </KnowledgeLayout>
  );
}
