import type { Metadata } from 'next';
import { UseCaseLanding } from '../../../components/UseCaseLanding';

const SLUG = 'kleinunternehmen';

export const metadata: Metadata = {
  title: 'GiroCode for Small Businesses – Professional Invoices',
  description:
    'Professional invoices for your small business: GiroCode + EU-compliant PDF invoice in 2 minutes. No subscription, no software – free & secure.',
  keywords:
    'girocode small business, small business invoice qr code, sepa qr llc, free invoicing software',
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

export default function KleinunternehmenEnPage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'en',
        generatorHref: '/en',
        homeHref: '/en',
        homeLabel: 'Home',
        breadcrumbLabel: 'Small Businesses',
        badge: 'For Small Businesses & LLCs',
        h1: 'Professional Invoices for Your Small Business',
        subtitle:
          'EU-compliant mandatory details, clean PDF layout, embedded GiroCode – without expensive accounting software and without monthly subscriptions.',
        problemHeadline: 'The Problem: Invoicing Costs Money and Time',
        problemIntro:
          'Small businesses need invoices every day – and the industry pushes them into expensive software subscriptions. Many owners suffer from:',
        painPoints: [
          'Expensive invoice software – monthly subscriptions for features you never use',
          'Fear of wrong mandatory details – your accountant has to check everything',
          'Hours writing invoices – copy-pasting from Word templates',
        ],
        solutionHeadline: 'The Solution: Compliant, Fast and Free',
        solutionIntro:
          'Our generator creates an EU-compliant PDF invoice with logo, GiroCode and all mandatory details – in 2 minutes and without subscription.',
        benefits: [
          {
            icon: '🆓',
            title: 'Free – no subscription',
            description:
              'No hidden fees, no premium tiers, no limits – just professional invoices.',
          },
          {
            icon: '📋',
            title: 'EU-compliant invoices',
            description:
              'Address, tax ID, invoice number, date, service description, net/VAT/gross totals – everything included.',
          },
          {
            icon: '⏱️',
            title: 'Invoice in 2 minutes',
            description:
              'Enter the data, upload the logo, the GiroCode is embedded automatically – download the PDF and send it.',
          },
        ],
        stepsHeadline: 'Your invoice in 3 steps',
        steps: [
          {
            title: 'Save your business details once',
            description:
              'Company name, address, tax ID, IBAN, logo – everything is cached locally in your browser.',
          },
          {
            title: 'Enter the order data',
            description:
              'Add recipient, service description, net amount and VAT rate. The generator calculates gross and creates the GiroCode.',
          },
          {
            title: 'Generate PDF & send',
            description:
              'Download the ready-to-send A4 PDF with embedded GiroCode and email it to your customer.',
          },
        ],
        faqHeadline: 'Small Business FAQ',
        faq: [
          {
            question: 'Does the invoice meet EU mandatory requirements?',
            answer:
              'Yes, as long as you fill in all required fields: sender and recipient name and address, tax ID or VAT ID, date, invoice number, service description, net amount, VAT rate and amount (or note about small-business exemption), gross amount.',
          },
          {
            question: 'Does this work for VAT-exempt small businesses?',
            answer:
              'Yes. Set the VAT rate to 0% and add a note in the description like "VAT exempt according to small-business regulation". You can save this note as a default.',
          },
          {
            question: 'Where is my invoice data stored?',
            answer:
              'Nowhere on our servers. Data stays exclusively in your browser. If you want to keep it, save the generated PDF locally or in your cloud storage.',
          },
          {
            question: 'Can I use sequential invoice numbers?',
            answer:
              'Yes. You can choose your invoice number freely (e.g. "2026-001"). Just make sure the numbers are continuous – this is a legal requirement.',
          },
          {
            question: 'Is the invoice archive-compliant?',
            answer:
              'The generated PDF is non-editable and therefore suitable for archiving. For full archive compliance (storage system, process documentation) you have to manage that yourself, like with any other invoicing software.',
          },
        ],
        ctaHeadline: 'Ready for stress-free invoicing?',
        ctaText:
          'Create your first GiroCode invoice in 2 minutes – free, no subscription, no signup. Locally in your browser.',
        ctaButton: 'Create your free GiroCode now →',
      }}
    />
  );
}
