export const en = {
  // Navigation
  nav: {
    home: 'Home',
    knowledge: 'Knowledge',
    about: 'About Us',
    imprint: 'Imprint',
    privacy: 'Privacy Policy',
    developers: 'For Developers',
  },
  // Hauptseite
  hero: {
    badge: '100% local · no uploads',
    title: 'GiroCode Generator',
    subtitle:
      'Create SEPA-QR codes and invoice PDFs – completely in your browser, no data transmission.',
  },
  // Formular
  form: {
    paymentData: 'Payment Data',
    recipient: 'Recipient (Name)',
    iban: 'IBAN',
    bic: 'BIC (optional)',
    amount: 'Amount (EUR)',
    purpose: 'Payment Reference',
    generate: 'Generate GiroCode',
    reset: 'Reset',
    ibanValid: 'IBAN check: valid',
    ibanInvalid: 'IBAN check: invalid',
  },
  // QR Preview
  qr: {
    title: 'Preview (QR)',
    tip: 'Open your banking app and test the code.',
    fallback:
      'External QR fallback (api.qrserver.com) – sends payment data to the service.',
    success: 'QR successfully generated. Test with your banking app.',
  },
  // PDF (Rechnungs-PDF)
  pdf: {
    title: 'Invoice',
    invoiceNo: 'No.:',
    date: 'Date:',
    sender: 'Sender',
    recipient: 'Recipient',
    serviceDescription: 'Service description',
    net: 'Net',
    vat: 'VAT',
    gross: 'Gross total',
    footer: 'Generated locally in browser · no data transmission',
  },
  // Rechnung
  invoice: {
    title: 'Invoice (PDF)',
    invoiceNo: 'Invoice No.',
    invoiceDate: 'Invoice Date',
    seller: 'Your Company Details (Sender)',
    buyer: 'Customer Details',
    logo: 'Logo (PNG/JPG, optional)',
    description: 'Service Description',
    net: 'Net Amount (EUR)',
    vat: 'VAT Rate (%)',
    vatAmount: 'VAT Amount',
    gross: 'Gross Amount',
    download: 'Download PDF',
  },
  // SEO Text
  seo: {
    howTitle: "Create GiroCode for free – here's how",
    howText:
      'A GiroCode (also known as SEPA-QR or EPC-QR) is a standardized QR code that contains all the information needed for a SEPA bank transfer. With our free generator, you can create GiroCodes directly in your browser – without registration, without data transmission.',
    faqTitle: 'Frequently Asked Questions',
    faq: [
      {
        q: 'Is the GiroCode Generator really free?',
        a: 'Yes, completely free – no registration, no subscription.',
      },
      {
        q: 'Is my data stored?',
        a: 'No. All processing happens locally in your browser. No data is transmitted to our servers.',
      },
      {
        q: 'Which banking apps support GiroCodes?',
        a: 'Most German banking apps support SEPA-QR codes, including Sparkasse, Volksbank, ING, DKB and many more.',
      },
      {
        q: 'Do I have to enter an amount?',
        a: 'No, the amount is optional. If left empty, the recipient can enter any amount.',
      },
      {
        q: 'Can I embed the GiroCode in an invoice?',
        a: 'Yes! Use our invoice PDF feature to create a professional invoice with embedded GiroCode.',
      },
    ],
  },
  // Footer
  footer: {
    local: 'local',
    noWarranty: 'no warranty',
  },
} as const;

