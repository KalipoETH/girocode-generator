import type { Metadata } from 'next';
import { UseCaseLanding } from '../../../components/UseCaseLanding';

const SLUG = 'spenden';

export const metadata: Metadata = {
  title: 'GiroCode for Donations – SEPA QR Code for Fundraising',
  description:
    'More donations through easy scanning: a GiroCode on flyers, posters and websites lets donors transfer in 10 seconds – no IBAN entry, no drop-off.',
  keywords:
    'girocode donation, donation qr code, sepa qr fundraising, ngo qr code, fundraising qr',
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

export default function SpendenEnPage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'en',
        generatorHref: '/en',
        homeHref: '/en',
        homeLabel: 'Home',
        breadcrumbLabel: 'Donations',
        badge: 'For Fundraising & NGOs',
        h1: 'More Donations Through Easy Scanning',
        subtitle:
          'Print a GiroCode on flyers, posters or your donation page. "I\u2019ll donate later" turns into "I\u2019m donating now" – in ten seconds.',
        problemHeadline: 'The Problem: Good Intentions Fade Away',
        problemIntro:
          'Studies show: more than 70% of people who want to donate abandon the process. These three hurdles are the main reasons:',
        painPoints: [
          'Donors want to donate – but the path is too complicated',
          'Many drop off as soon as they have to type an IBAN',
          'The payment reference is forgotten – donations cannot be allocated',
        ],
        solutionHeadline: 'The Solution: GiroCode lowers the barrier dramatically',
        solutionIntro:
          'A single QR code is enough. Donors open their banking app, scan, confirm – and the amount lands on your account with the correct reference attached.',
        benefits: [
          {
            icon: '⚡',
            title: 'Scan & donate in 10 seconds',
            description:
              'No more searching IBAN or typing it in: scan once, enter the amount, done.',
          },
          {
            icon: '💸',
            title: 'No amount – donors choose',
            description:
              'Leave the amount empty. Donors enter the amount they want to give in the banking app.',
          },
          {
            icon: '📰',
            title: 'Use on flyers & posters',
            description:
              'Download the PNG and place it on print material, your website, donation emails or social media posts.',
          },
        ],
        stepsHeadline: 'Your Donation GiroCode in 3 Steps',
        steps: [
          {
            title: 'Enter your donation account',
            description:
              'Add IBAN, recipient (association/NGO) and reference (e.g. "Donation campaign 2026") in the generator.',
          },
          {
            title: 'Leave amount open or pre-fill it',
            description:
              'Leave the field blank for free donations – or set a suggested amount (e.g. €25) for fixed-sum campaigns.',
          },
          {
            title: 'Share & use the QR code',
            description:
              'Place the code on posters, flyers, your website, mailings or social media graphics. Donors scan with their banking app.',
          },
        ],
        faqHeadline: 'Donation GiroCode FAQ',
        faq: [
          {
            question: 'Do we need a separate QR code per donation?',
            answer:
              'No. A single QR code is enough for an entire campaign – with or without a fixed amount. For separate accounting per campaign, generate one code per campaign with its own reference.',
          },
          {
            question: 'Can donors give without a fixed amount?',
            answer:
              'Yes. If the amount is left blank, the donor\u2019s banking app asks for the amount. Ideal for free donations.',
          },
          {
            question: 'Are GiroCode donations tax-deductible?',
            answer:
              'Yes, as long as your organisation is recognised as charitable. The donation is a regular SEPA transfer – on the donation receipt it appears like any other transfer.',
          },
          {
            question: 'Does this work on posters and large print media?',
            answer:
              'Yes. Make sure to keep at least 2x2 cm and good contrast. On posters, print larger (5\u201310 cm) so passers-by can scan from a few metres away.',
          },
          {
            question: 'Is donor data stored?',
            answer:
              'No. The generator works completely locally in your browser – we see neither your data nor the donor\u2019s. Donor data is only handled by the donor\u2019s bank.',
          },
        ],
        ctaHeadline: 'Ready to attract more donations?',
        ctaText:
          'Create the GiroCode for your next campaign in 2 minutes – free, no signup, ready to drop on flyers, posters and websites.',
        ctaButton: 'Create your free GiroCode now →',
      }}
    />
  );
}
