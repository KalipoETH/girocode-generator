import type { Metadata } from 'next';
import { UseCaseLanding } from '../../../components/UseCaseLanding';

const SLUG = 'verein';

export const metadata: Metadata = {
  title: 'GiroCode for Associations – Collect Membership Fees Easily',
  description:
    'Associations use GiroCodes for membership fees, donations and events. Free, local, no registration.',
  keywords:
    'girocode association, membership fee qr code, sepa qr club, donation qr association',
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

export default function VereinEnPage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'en',
        generatorHref: '/en',
        homeHref: '/en',
        homeLabel: 'Home',
        breadcrumbLabel: 'Associations',
        badge: 'For Associations & Organizations',
        h1: 'Collect Membership Fees & Donations Easily',
        subtitle:
          'With a GiroCode on fee letters, donation flyers and event invitations, members pay on time – no typos, no extra work for your treasurer.',
        problemHeadline: 'The Problem: Fee Management Eats Up Time',
        problemIntro:
          'Being an association treasurer is volunteer work – and yet a full-time job. These three tasks consume most of your time:',
        painPoints: [
          'Writing reminders takes time – every fee has to be tracked manually',
          'Wrong payment references make it hard to match incoming payments',
          'Complex bookkeeping for membership fees, donations and event payments',
        ],
        solutionHeadline: 'The Solution: GiroCode for Association Payments',
        solutionIntro:
          'Print the GiroCode on member letters, flyers or posters. Members and donors scan, pay – and the correct payment reference is automatically attached.',
        benefits: [
          {
            icon: '⚡',
            title: 'Scan & payment in 10 seconds',
            description:
              'Members pay right after scanning – no looking for IBAN data, no manual typing.',
          },
          {
            icon: '🏷️',
            title: 'Automatic payment reference',
            description:
              '"Membership fee 2026", "Donation summer party" – the reference is encoded in the QR code and transferred safely.',
          },
          {
            icon: '📊',
            title: 'Easier allocation',
            description:
              'Clear references on the bank statement – your bookkeeping almost runs itself.',
          },
        ],
        stepsHeadline: 'Your Association GiroCode in 3 Steps',
        steps: [
          {
            title: 'Enter the association account',
            description:
              'Add your association name, IBAN and – if known – an amount (e.g. annual fee) in the generator.',
          },
          {
            title: 'Define payment reference',
            description:
              'Set a clear reference like "Membership fee 2026" or "Donation summer party" directly inside the QR code.',
          },
          {
            title: 'Print & share the code',
            description:
              'Place the GiroCode on fee letters, flyers or posters. Members scan with their banking app and complete the transfer.',
          },
        ],
        faqHeadline: 'Association FAQ',
        faq: [
          {
            question: 'Can we use the GiroCode without a fixed amount?',
            answer:
              'Yes. Just leave the amount field empty – members or donors can then enter any amount themselves. Perfect for donation campaigns.',
          },
          {
            question: 'Is the GiroCode suitable for donation receipts?',
            answer:
              'Yes. You can place the GiroCode on donation flyers, posters or letters. Donation receipts are issued as usual – the GiroCode only simplifies the actual transfer.',
          },
          {
            question: 'Do we need to register or pay a subscription?',
            answer:
              'No. The generator is 100% free and works without registration. There are no hidden fees – not even for many QR codes.',
          },
          {
            question: 'Are the association data safe?',
            answer:
              'Yes. All data is processed exclusively locally in your browser. Your IBAN, association data and amounts never leave your device and are not sent to any third party.',
          },
          {
            question: 'Can we use the same code for several members?',
            answer:
              'Yes, if the fee is the same for everyone. If you need a personalised reference (e.g. membership number), generate a separate QR code per member.',
          },
        ],
        ctaHeadline: 'Ready for stress-free association payments?',
        ctaText:
          'Create GiroCodes for membership fees, donations or events in a few clicks – free, no registration.',
        ctaButton: 'Create your free GiroCode now →',
      }}
    />
  );
}
