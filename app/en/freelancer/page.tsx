import type { Metadata } from 'next';
import { UseCaseLanding } from '../../../components/UseCaseLanding';

const SLUG = 'freelancer';

export const metadata: Metadata = {
  title: 'GiroCode for Freelancers – Get Paid Faster 2026',
  description:
    'Freelancers get paid faster with GiroCode invoices: fewer reminders, fewer errors, more professionalism. Free & no registration.',
  keywords:
    'girocode freelancer, freelancer invoice qr code, sepa qr freelancer, get paid faster freelancer',
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

export default function FreelancerEnPage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'en',
        generatorHref: '/en',
        homeHref: '/en',
        homeLabel: 'Home',
        breadcrumbLabel: 'Freelancers',
        badge: 'For Freelancers & Self-Employed',
        h1: 'Get Paid Faster as a Freelancer',
        subtitle:
          'With a GiroCode on your invoice, clients pay in seconds – no manual IBAN entry, no typos.',
        problemHeadline: 'The Problem: Payments Drag On',
        problemIntro:
          'You know the feeling: the work is done, the invoice is sent – but the money keeps you waiting. These three points cost freelancers the most nerves:',
        painPoints: [
          'Clients mistype the IBAN – the transfer never arrives',
          'Payments always arrive late – chasing reminders eats your time',
          'Unprofessional appearance – no easy payment option on the invoice',
        ],
        solutionHeadline: 'The Solution: GiroCode on Every Invoice',
        solutionIntro:
          'A single QR code on your invoice changes everything. Your client scans – and the banking app fills in IBAN, amount and reference automatically.',
        benefits: [
          {
            icon: '⚡',
            title: '10x faster payments',
            description:
              'Clients pay right after receiving the invoice – no postponing, no searching for IBAN data.',
          },
          {
            icon: '✅',
            title: 'Zero typos',
            description:
              'No manual data entry. IBAN, amount and reference are encoded in the QR code.',
          },
          {
            icon: '💼',
            title: 'Professional appearance',
            description:
              'Modern invoices with a QR code look serious and show your clients that you are up to date.',
          },
        ],
        stepsHeadline: 'Your GiroCode Invoice in 3 Steps',
        steps: [
          {
            title: 'Enter IBAN & invoice details',
            description:
              'Add recipient, IBAN, amount and payment reference in the generator. Everything happens locally in your browser.',
          },
          {
            title: 'Generate GiroCode & PDF',
            description:
              'The generator instantly creates the QR code and, optionally, a ready-to-send PDF invoice with embedded code.',
          },
          {
            title: 'Send invoice – client scans & pays',
            description:
              'Send the PDF by email. Your client scans the code with their banking app and confirms the transfer in two clicks.',
          },
        ],
        faqHeadline: 'Freelancer FAQ',
        faq: [
          {
            question: 'Is a GiroCode on an invoice legally compliant?',
            answer:
              'Yes. A GiroCode is an optional add-on – your invoice still needs the legally required information (address, tax ID, invoice number, etc.). The QR code simply makes it easier for your clients to pay.',
          },
          {
            question: 'Which banking apps can scan my invoice?',
            answer:
              'Practically all SEPA banking apps: Sparkasse, Volksbank, ING, DKB, Comdirect, Deutsche Bank, Commerzbank, Postbank, N26 and many more support the EPC standard.',
          },
          {
            question: 'Is there a fee or subscription?',
            answer:
              'No. The GiroCode generator is 100% free, no registration required. Only your standard SEPA bank fees apply – if your bank charges any.',
          },
          {
            question: 'Are my banking and client data safe?',
            answer:
              'Yes. All data is processed exclusively in your browser. Nothing is transmitted to a server – neither your IBAN nor your client data ever leaves your device.',
          },
          {
            question: 'Can I create recurring invoices too?',
            answer:
              'Yes. You can generate as many GiroCode invoices as you like. For fixed amounts, you can reuse a single QR code – great for monthly retainers, for example.',
          },
        ],
        ctaHeadline: 'Ready to get paid faster?',
        ctaText:
          'Create your first GiroCode invoice in 2 minutes – free, no signup, 100% local in your browser.',
        ctaButton: 'Create your free GiroCode now →',
      }}
    />
  );
}
