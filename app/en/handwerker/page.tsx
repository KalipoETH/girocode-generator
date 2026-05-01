import type { Metadata } from 'next';
import { UseCaseLanding } from '../../../components/UseCaseLanding';

const SLUG = 'handwerker';

export const metadata: Metadata = {
  title: 'GiroCode for Tradespeople – Get Invoices Paid Faster',
  description:
    'Tradespeople invoices that get paid immediately: GiroCode on the invoice = on-site payment, fewer reminders, no IBAN typing. Free & no signup.',
  keywords:
    'girocode tradesperson, tradespeople invoice qr code, sepa qr trade, invoice paid immediately',
  alternates: {
    canonical: `https://www.girocodegenerator.com/en/${SLUG}`,
    languages: {
      'x-default': `https://www.girocodegenerator.com/${SLUG}`,
      de: `https://www.girocodegenerator.com/${SLUG}`,
      en: `https://www.girocodegenerator.com/en/${SLUG}`,
      fr: `https://www.girocodegenerator.com/fr/${SLUG}`,
      es: `https://www.girocodegenerator.com/es/${SLUG}`,
    },
  },
};

export default function HandwerkerEnPage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'en',
        generatorHref: '/en',
        homeHref: '/en',
        homeLabel: 'Home',
        breadcrumbLabel: 'Tradespeople',
        badge: 'For Tradespeople & Businesses',
        h1: 'Tradespeople Invoices That Get Paid Immediately',
        subtitle:
          'Print the GiroCode straight onto the delivery note or PDF invoice – your customer scans with their phone and pays before you leave. No more waiting for money.',
        problemHeadline: 'The Problem: Money Arrives Weeks Later',
        problemIntro:
          'In the trades, cash flow is everything. And this is exactly where many businesses struggle:',
        painPoints: [
          'Payment weeks later – material and wages have to be paid right away',
          'Paper invoices get lost – the customer simply forgets',
          'Queries about wrong IBAN – embarrassing and time-consuming',
        ],
        solutionHeadline: 'The Solution: Get Paid Before You Drive Off',
        solutionIntro:
          'With a GiroCode on the invoice you close the job and collect right away. Your customer scans with the banking app – done.',
        benefits: [
          {
            icon: '📍',
            title: 'Get paid on-site',
            description:
              'Customer scans after the job is finished – you leave with the invoice already paid.',
          },
          {
            icon: '⏱️',
            title: 'PDF invoice in 2 minutes',
            description:
              'Mandatory details, logo, GiroCode, VAT – all in a ready-to-print A4 invoice for the customer.',
          },
          {
            icon: '📱',
            title: 'Customer pays via phone instantly',
            description:
              'Open banking app, scan QR, confirm with TAN – the money is on its way before you sit in the van.',
          },
        ],
        stepsHeadline: 'Your GiroCode Invoice in 3 Steps',
        steps: [
          {
            title: 'Enter job details',
            description:
              'Add IBAN, recipient, amount and reference (e.g. "Heating repair 2026/123") in the generator.',
          },
          {
            title: 'Generate PDF with GiroCode',
            description:
              'Upload your logo, save your business details once – the generator creates a full PDF invoice with embedded QR code.',
          },
          {
            title: 'Hand over & let them scan',
            description:
              'Print or email the PDF. Your customer scans with the banking app and confirms the transfer in two clicks.',
          },
        ],
        faqHeadline: 'Tradespeople FAQ',
        faq: [
          {
            question: 'Can I print the GiroCode on delivery notes too?',
            answer:
              'Yes. Download the QR code as PNG and place it on any document – delivery note, receipt, maintenance report. Important: keep the printed code at least 2x2 cm in size.',
          },
          {
            question: 'Does the PDF invoice meet the legal invoice requirements?',
            answer:
              'Yes. With your address, tax ID, invoice number, date, service description and net/VAT/gross totals, the generator creates a fully compliant invoice. The GiroCode is added on top.',
          },
          {
            question: 'What if the customer cannot scan the GiroCode?',
            answer:
              'All data (IBAN, amount, reference) is also printed in plain text on the PDF. Your customer can still trigger the transfer manually – the QR code is always an additional convenience.',
          },
          {
            question: 'Does this work for B2B / commercial customers too?',
            answer:
              'Yes. The GiroCode is EPC compliant and recognised by all SEPA banks – whether private or business customer. Accounting departments love the error-free data input.',
          },
          {
            question: 'Are customer and job data safe?',
            answer:
              'Yes. Everything is processed only in your browser. Neither IBAN, logo nor invoice data ever leaves your device – and nothing is stored.',
          },
        ],
        ctaHeadline: 'Ready for invoices paid on the spot?',
        ctaText:
          'Create your first GiroCode tradespeople invoice in 2 minutes – free, no registration, locally in your browser.',
        ctaButton: 'Create your free GiroCode now →',
      }}
    />
  );
}
