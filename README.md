# GiroCode Generator – Free SEPA-QR / EPC Generator

[![Product Hunt](https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1090895&theme=dark&t=1772743698922)](https://www.producthunt.com/products/girocode-generator)

**🔗 [girocodegenerator.com](https://www.girocodegenerator.com)**

A free, privacy-first GiroCode (SEPA-QR / EPC) generator for freelancers and small businesses – running 100% locally in your browser.

---

## ✨ Features

- **GiroCode Generator** – Create SEPA-QR / EPC codes for bank transfers and invoices
- **Real-time IBAN Validation** – Mod-97 checksum verification
- **Invoice PDF** – Generate professional invoices with embedded QR code
- **Logo Upload** – Add your company logo to the invoice
- **100% Local** – Your IBAN and payment data never leave your device
- **No Registration** – No account, no subscription, completely free
- **Multilingual** – Available in 🇩🇪 DE, 🇬🇧 EN, 🇫🇷 FR, 🇪🇸 ES
- **Mobile-friendly** – Fully responsive design

---

## 🔒 Privacy First

The core of GiroCode Generator — turning your payment details into a SEPA QR code — runs **entirely client-side in your browser**. Your IBAN, name and amount are used to build the EPC payload and render the QR code locally; the core generator never sends this payment data to a server.

Here's what that means, stated precisely:

- ✅ **QR generation is local** — the EPC payload and QR code are built in the browser, so your payment data isn't transmitted to run the core feature.
- ✅ **Cookieless, anonymized analytics** — we use Vercel Web Analytics and Speed Insights (plus a few custom events). No tracking cookies, no cross-site profiling. The only cookie the site sets at all is a session token when an administrator logs into the backend.
- ✅ **Sensitive parameters are scrubbed** — since the PII-leak fix, IBAN, name and amount are never carried in URL query params, and any sensitive URL parameters are stripped before anything is sent to analytics.
- ⚠️ **There is a backend** — a few server routes exist (contact form, newsletter, the beta `/api/generate`, admin). They aren't involved in generating a QR code, but they're real, so we don't claim "no server".
- ⚠️ **Optional QR fallback** — if the local renderer is unavailable, an optional fallback can fetch the QR image from `api.qrserver.com`. When that path is used, the payload leaves your browser.

For the full picture — analytics, the QR fallback, cookies and data processing — see the [privacy policy](https://girocodegenerator.com/datenschutz) (§5).

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **QR Generation:** qrcode (npm)
- **PDF Generation:** pdf-lib
- **Deployment:** Vercel (static site)

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/KalipoETH/girocode-pdf.git
cd girocode-pdf

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Deploy to Vercel
vercel deploy
```

---

## ⚠️ Service Worker – Do Not Delete `public/sw.js`

`public/sw.js` is a **kill switch**: it unregisters the former PWA service worker and clears its caches. It must stay reachable under `/sw.js` permanently.

If the file 404s, the update check fails with a `NetworkError` and the old service worker stays registered — leaving those users stuck on its cache-first behaviour instead of unregistering them.

---

## 📋 How It Works

### GiroCode (EPC Payload)

The generator creates a QR code following the **EPC (European Payments Council)** standard:

```
BCD
001
1
SCT
[BIC]
[Recipient Name]
[IBAN]
EUR[Amount]
[empty]
[empty]
[Payment Reference]
```

### IBAN Validation

Real-time validation using the **Mod-97 checksum algorithm**:

```typescript
function ibanIsValid(iban: string): boolean {
  iban = iban.toUpperCase().replace(/\s+/g, '');
  if (iban.length < 15 || iban.length > 34) return false;
  const r = iban.slice(4) + iban.slice(0, 4);
  const ex = r.replace(/[A-Z]/g, ch => (ch.charCodeAt(0) - 55).toString());
  let rem = 0;
  for (const d of ex) { rem = (rem * 10 + (+d)) % 97; }
  return rem === 1;
}
```

---

## 🌍 Supported Languages

| Language | URL |
|---|---|
| 🇩🇪 Deutsch | girocodegenerator.com |
| 🇬🇧 English | girocodegenerator.com/en |
| 🇫🇷 Français | girocodegenerator.com/fr |
| 🇪🇸 Español | girocodegenerator.com/es |

---

## 📄 License

MIT License – feel free to use, modify and distribute.

---

## 👤 Author

**Kaleb Jahnke**
- Website: [girocodegenerator.com](https://www.girocodegenerator.com)
- Email: kontakt@girocodegenerator.com

---

## ⭐ Support

If you find this project useful, please consider:
- Giving it a ⭐ on GitHub
- Upvoting on [Product Hunt](https://www.producthunt.com/products/girocode-generator)
- Sharing it with freelancers and small businesses

---

*Built with ❤️ in Osterholz-Scharmbeck, Germany*
