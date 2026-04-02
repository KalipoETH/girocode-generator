import type { Metadata } from 'next';
import { KnowledgeLayout } from '../../../../components/KnowledgeLayout';

export const metadata: Metadata = {
  title: 'How to Scan a GiroCode – Step-by-Step Guide 2026',
  description:
    'Scan a GiroCode with your banking app: Sparkasse, ING, DKB, Volksbank & more. Easy guide for iPhone and Android. ✅ Pay in 30 seconds.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/en/wissen/scannen',
    languages: {
      'x-default': 'https://www.girocodegenerator.com/wissen/scannen',
      'de': 'https://www.girocodegenerator.com/wissen/scannen',
      'en': 'https://www.girocodegenerator.com/en/wissen/scannen',
      'fr': 'https://www.girocodegenerator.com/fr/wissen/scannen',
      'es': 'https://www.girocodegenerator.com/es/wissen/scannen',
    },
  },
};

export default function WissenScannenPageEn() {
  return (
    <KnowledgeLayout
      breadcrumbCurrent="How to Scan a GiroCode"
      badge="Guide · Scanning GiroCodes"
      title="How to Scan a GiroCode – Complete Guide for iPhone & Android"
      lead="Scanning a GiroCode with your banking app takes less than 30 seconds and eliminates the most common cause of payment errors: manual data entry. This guide covers everything from the basic scanning process to iPhone- and Android-specific instructions, troubleshooting, quality requirements and security tips."
      relatedArticles={[
        { href: '/en/wissen/girocode', label: 'What is a GiroCode? – Everything You Need to Know' },
        { href: '/en/wissen/banking-apps', label: 'Banking Apps Supporting GiroCode – Complete Overview' },
        { href: '/en/wissen/rechnung', label: 'GiroCode on Invoices – The Complete Guide' },
        { href: '/en/wissen/epc-standard', label: 'EPC Standard & SEPA-QR – Technical Structure' },
        { href: '/en/wissen/iban-bic', label: 'IBAN & BIC for GiroCode – Complete Guide' },
        { href: '/en/wissen/betrag-und-zweck', label: 'Amount & Payment Reference in GiroCode' },
      ]}
      locale="en"
    >
      <section aria-labelledby="scanning-how-it-works">
        <h2 id="scanning-how-it-works">Scanning a GiroCode – How It Works</h2>
        <p>
          A GiroCode is a QR code that encodes SEPA payment data in a standardised
          text format (EPC payload). When you point your banking app&apos;s camera at
          the code, the app reads the encoded data and automatically fills in the
          transfer form.
        </p>
        <p>
          The scanning process takes less than 30 seconds from start to payment confirmation:
        </p>
        <ol>
          <li>Open your banking app and navigate to &ldquo;New Transfer&rdquo;</li>
          <li>Tap the QR code / camera icon</li>
          <li>Point the camera at the GiroCode</li>
          <li>Wait for automatic recognition (usually under 1 second)</li>
          <li>Review the pre-filled data</li>
          <li>Confirm with your TAN or biometrics</li>
        </ol>
        <p>
          After scanning, you are in full control: you see exactly what will be transferred
          before you confirm anything. The transfer is only initiated after your explicit
          TAN confirmation. At no point does the scanning process itself move any money.
        </p>
      </section>

      <section aria-labelledby="scanning-iphone" className="mt-10">
        <h2 id="scanning-iphone">Scanning on iPhone (iOS) – Step by Step</h2>

        <h3>Prerequisites</h3>
        <ul>
          <li>iPhone with iOS 14 or later (iOS 16+ recommended)</li>
          <li>Your banking app installed and up to date</li>
          <li>Camera permission granted for your banking app (Settings → Privacy → Camera)</li>
          <li>Good lighting and a clear view of the GiroCode</li>
        </ul>

        <h3>Step-by-step instructions</h3>
        <ol>
          <li>
            <strong>Unlock your iPhone</strong> and open your banking app (e.g. Sparkasse,
            ING, DKB, VR-Banking, Deutsche Bank, Commerzbank).
          </li>
          <li>
            <strong>Log in</strong> using Face ID, Touch ID or your PIN.
          </li>
          <li>
            <strong>Navigate to transfers:</strong> Find the &ldquo;Transfer&rdquo;,
            &ldquo;Pay&rdquo; or &ldquo;Überweisung&rdquo; function.
          </li>
          <li>
            <strong>Tap &ldquo;New Transfer&rdquo;:</strong> This opens the transfer form.
          </li>
          <li>
            <strong>Find the QR scanner:</strong> Look for a small QR code icon or camera
            symbol – typically in the top-right corner of the form or next to the IBAN field.
          </li>
          <li>
            <strong>Allow camera access:</strong> If this is your first time, iOS will ask
            for permission. Tap &ldquo;Allow&rdquo;.
          </li>
          <li>
            <strong>Scan the GiroCode:</strong> Hold your iPhone steady, 15–30 cm from the
            printed invoice or screen. The app will automatically focus and scan.
          </li>
          <li>
            <strong>Review pre-filled data:</strong> Carefully check each field: recipient
            name, IBAN, amount and payment reference.
          </li>
          <li>
            <strong>Confirm with Face ID or Touch ID.</strong> Some apps also require an
            additional TAN for transfers above a certain amount.
          </li>
        </ol>

        <h3>iOS-specific tips</h3>
        <ul>
          <li>
            <strong>Struggling to scan?</strong> Try tapping the QR code area on screen to
            help the camera focus.
          </li>
          <li>
            <strong>iOS native camera app:</strong> It can read QR codes, but it cannot
            initiate bank transfers. Always use the QR scanner in your banking app.
          </li>
        </ul>
      </section>

      <section aria-labelledby="scanning-android" className="mt-10">
        <h2 id="scanning-android">Scanning on Android – Step by Step</h2>

        <h3>Prerequisites</h3>
        <ul>
          <li>Android smartphone with Android 8.0 or later</li>
          <li>Banking app updated to the latest version</li>
          <li>Camera permission granted for the banking app</li>
        </ul>

        <h3>Step-by-step instructions</h3>
        <ol>
          <li><strong>Open your banking app:</strong> Authenticate with fingerprint, face unlock or PIN.</li>
          <li><strong>Go to &ldquo;Transfer&rdquo;:</strong> Find the transfer shortcut on the home screen.</li>
          <li><strong>Start a new transfer</strong> and find the QR code scanner icon (often a camera icon in the IBAN input field).</li>
          <li><strong>Grant camera permission</strong> if prompted. Select &ldquo;Allow only while using the app&rdquo;.</li>
          <li><strong>Hold your Android device steady,</strong> approximately 15–25 cm from the GiroCode.</li>
          <li><strong>The app scans automatically</strong> when the QR code comes into focus.</li>
          <li><strong>Review and confirm</strong> with your TAN.</li>
        </ol>

        <h3>Android-specific tips</h3>
        <ul>
          <li>
            <strong>Google Lens integration:</strong> Google Lens can decode QR codes but cannot
            initiate bank transfers directly. Use the in-app scanner instead.
          </li>
          <li>
            <strong>Low-end Android cameras:</strong> Budget smartphones may struggle with
            smaller QR codes (under 2 × 2 cm). Try moving closer or to better lighting.
          </li>
        </ul>
      </section>

      <section aria-labelledby="troubleshooting" className="mt-10">
        <h2 id="troubleshooting">Troubleshooting – Common Problems and Solutions</h2>

        <h3>Problem: App does not recognise the QR code</h3>
        <ul>
          <li><strong>Poor lighting:</strong> Increase ambient light or use your phone&apos;s flashlight</li>
          <li><strong>QR code too small:</strong> Move closer; ensure the code is at least 2 × 2 cm printed</li>
          <li><strong>Camera dirty:</strong> Clean the camera lens with a soft cloth</li>
          <li><strong>Shaky hands:</strong> Rest your phone on a surface to keep the camera steady</li>
          <li><strong>QR code damaged:</strong> If more than 15% is damaged, the error correction may be exceeded</li>
        </ul>

        <h3>Problem: App says &ldquo;Invalid QR code&rdquo;</h3>
        <p>
          This means the app scanned something but it does not match the EPC format. The QR
          code may not be a GiroCode, or it was generated with invalid data. Use our free
          GiroCode Generator to create a new one.
        </p>

        <h3>Problem: Pre-filled data looks wrong</h3>
        <ul>
          <li>Do not confirm the transfer</li>
          <li>Contact the invoice sender to verify the correct payment details</li>
          <li>Consider whether the QR code may have been tampered with (quishing attack)</li>
        </ul>

        <h3>Problem: Amount field remains empty after scanning</h3>
        <p>
          This is not an error – the invoice sender deliberately left the amount open, so you
          can enter it yourself. This is valid and common for donations or variable-price
          payments.
        </p>
      </section>

      <section aria-labelledby="quality-requirements" className="mt-10">
        <h2 id="quality-requirements">Quality Requirements for Scannable GiroCodes</h2>

        <h3>Print quality requirements</h3>
        <ul>
          <li><strong>Resolution:</strong> Minimum 300 DPI; 600 DPI recommended for small codes</li>
          <li><strong>Colour contrast:</strong> Black modules on white background</li>
          <li><strong>Quiet zone:</strong> White border of at least 4 modules on all four sides</li>
          <li><strong>Size:</strong> Minimum 2 × 2 cm; recommended 3 × 3 cm</li>
          <li><strong>Undistorted:</strong> No stretching, rotation or skewing</li>
        </ul>

        <h3>Digital display requirements</h3>
        <ul>
          <li><strong>Resolution:</strong> Minimum 200 × 200 pixels; 400 × 400 recommended</li>
          <li><strong>PNG or SVG format:</strong> Avoid JPEG (compression creates artefacts)</li>
          <li><strong>No overlay elements:</strong> Do not place logos or text over the QR code modules</li>
        </ul>

        <h3>Error correction level</h3>
        <p>
          GiroCodes use error correction level M, which allows up to 15% of the code to be
          damaged while remaining readable. A slightly smudged print or screen reflection
          will usually not prevent successful scanning.
        </p>
      </section>

      <section aria-labelledby="scanning-digital" className="mt-10">
        <h2 id="scanning-digital">Scanning GiroCodes Digitally (from a Screen)</h2>

        <h3>From a computer screen</h3>
        <p>
          If your invoice is open in a PDF viewer on your computer screen, hold your phone
          at a comfortable reading distance (30–50 cm) and use your banking app&apos;s QR
          scanner. Increase the zoom level if needed to make the code larger on screen.
        </p>

        <h3>From a tablet</h3>
        <p>
          Tablets have larger displays, making it easy to show the invoice at a size that
          is comfortable to scan. Simply open the invoice PDF on the tablet and scan from
          your phone.
        </p>

        <h3>From another phone screen</h3>
        <p>
          If the invoice is on your phone, you need a second device to scan the GiroCode.
          Alternatively, some banking apps support scanning from the device&apos;s own screen
          via a second camera (front camera), but this varies by app.
        </p>
      </section>

      <section aria-labelledby="security-tips-scanning" className="mt-10">
        <h2 id="security-tips-scanning">Security Tips When Scanning</h2>
        <ul>
          <li>
            <strong>Always check the recipient name and IBAN</strong> after scanning, before
            confirming the transfer.
          </li>
          <li>
            <strong>Match the amount</strong> to the invoice total. Investigate any discrepancy.
          </li>
          <li>
            <strong>Verify the payment reference</strong> contains your correct invoice number.
          </li>
          <li>
            <strong>Do not scan QR codes from unknown or unsolicited senders</strong>.
          </li>
          <li>
            <strong>Check the QR code for tampering</strong> – physical stickers placed over the
            original QR code are a red flag.
          </li>
          <li>
            <strong>Keep your banking app updated</strong> – security patches and QR code
            scanning improvements are regularly included in app updates.
          </li>
          <li>
            <strong>Use your bank&apos;s official app only</strong> – do not use third-party QR
            scanner apps to initiate bank transfers.
          </li>
        </ul>
      </section>

      <section aria-labelledby="faq-scanning" className="mt-10">
        <h2 id="faq-scanning">Frequently Asked Questions</h2>
        <div className="not-prose space-y-5">
          {[
            {
              q: 'Can I scan a GiroCode without a banking app?',
              a: 'You can decode the QR code with any QR scanner, but you cannot initiate a bank transfer without a banking app. The decoded EPC text shows the payment details, which you can manually enter in your banking app. For the best experience, use your banking app\'s integrated QR scanner.',
            },
            {
              q: 'Is scanning a GiroCode safe?',
              a: 'Yes, scanning a GiroCode is safe. The QR code only transfers data to your banking app – it does not initiate any payment on its own. A transfer is only made after you explicitly review the pre-filled data and confirm with your TAN or biometrics.',
            },
            {
              q: 'Why does the amount field stay empty after scanning?',
              a: 'The GiroCode was created without a pre-specified amount (the amount field in the EPC payload is optional). This is intentional for donations or variable-price payments. Enter the amount based on the invoice total before confirming.',
            },
            {
              q: 'Can I scan GiroCodes with the native iOS camera app?',
              a: 'The iOS native camera app can read QR codes and display the decoded text. However, it cannot initiate bank transfers. You must use your banking app\'s integrated QR scanner to initiate a transfer from a GiroCode.',
            },
            {
              q: 'Does scanning a GiroCode work from a PDF on screen?',
              a: 'Yes. Open the PDF invoice on a computer or tablet screen, zoom in so the GiroCode is at least 5 cm in size, and scan it with your banking app on your phone.',
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
