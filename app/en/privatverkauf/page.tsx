import type { Metadata } from 'next';
import { UseCaseLanding } from '../../../components/UseCaseLanding';

const SLUG = 'privatverkauf';

export const metadata: Metadata = {
  title: 'GiroCode for Private Sales – eBay Kleinanzeigen & More',
  description:
    'Handle private sales safely & fairly: GiroCode instead of PayPal fees – buyers scan with their banking app, you receive a guaranteed SEPA transfer. Free & no signup.',
  keywords:
    'girocode private sale, ebay kleinanzeigen qr code, sepa qr private sale, classifieds safe payment',
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

export default function PrivatverkaufEnPage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'en',
        generatorHref: '/en',
        homeHref: '/en',
        homeLabel: 'Home',
        breadcrumbLabel: 'Private Sales',
        badge: 'For Private Sales & Classifieds',
        h1: 'Handle Private Sales Safely & Easily',
        subtitle:
          'No more PayPal fees or cash hassle: send your buyer a GiroCode. They scan, transfer – and you see the money on your account before they walk out the door.',
        problemHeadline: 'The Problem: Payment Methods Are Unfair or Unsafe',
        problemIntro:
          'On classifieds you either lose money or your nerves. These three points make private sales annoying:',
        painPoints: [
          'PayPal charges fees – and "Friends & Family" is excluded from buyer protection',
          'Buyers hesitate to enter the IBAN – typos and delays',
          'No common payment system – everyone wants to pay through a different service',
        ],
        solutionHeadline: 'The Solution: A SEPA Transfer – But Smart',
        solutionIntro:
          'Just send your buyer a GiroCode. They scan with the banking app of their choice, you get a real SEPA transfer – no third party, no fees.',
        benefits: [
          {
            icon: '💰',
            title: 'No fees like PayPal',
            description:
              '2.9% + 35 cents? Not here. SEPA transfers in the EU are free – you receive exactly the agreed amount.',
          },
          {
            icon: '🛡️',
            title: 'Secure SEPA transfer',
            description:
              'The transfer runs directly between the banks. No third parties, no frozen accounts, no chargebacks.',
          },
          {
            icon: '📲',
            title: 'Buyer scans with banking app',
            description:
              'Sparkasse, ING, Volksbank, DKB, N26 – every banking app can scan a GiroCode.',
          },
        ],
        stepsHeadline: 'Your Safe Private Sale in 3 Steps',
        steps: [
          {
            title: 'Enter the data',
            description:
              'Put your IBAN, your name, the sales price and a reference (e.g. "Sale blue bicycle") in the generator.',
          },
          {
            title: 'Send the GiroCode to the buyer',
            description:
              'Download the QR code as PNG and send it via messenger or email – or print it out and show it during the handover.',
          },
          {
            title: 'Verify the transfer & hand over',
            description:
              'Buyer scans with their banking app and transfers immediately. Hand over the goods only after the credit appears on your account – not just a screenshot.',
          },
        ],
        faqHeadline: 'Private Seller FAQ',
        faq: [
          {
            question: 'Is a SEPA transfer really safe for me as a seller?',
            answer:
              'Yes. An executed SEPA transfer cannot be unilaterally clawed back by the buyer – unlike PayPal buyer protection. But always wait for the credit to appear on your account before handing over the goods – not just a text message or screenshot.',
          },
          {
            question: 'How long does a SEPA transfer take for private sales?',
            answer:
              'Since 2025 SEPA Instant is mandatory for most EU banks – the money is on your account within 10 seconds. Standard SEPA transfers take 1 business day.',
          },
          {
            question: 'What if the buyer transfers wrong data?',
            answer:
              'With a GiroCode the buyer cannot enter wrong data – IBAN, recipient and amount are taken directly from the QR code. Typos are eliminated.',
          },
          {
            question: 'Does the buyer get my full bank details?',
            answer:
              'Yes, your name and IBAN are encoded in the QR code – this is required for any transfer. With this data alone nobody can debit money from your account.',
          },
          {
            question: 'Can I put the GiroCode directly into the listing?',
            answer:
              'Technically yes – but we recommend sending it only after the buyer has confirmed interest. That way your IBAN is not publicly visible on the platform.',
          },
        ],
        ctaHeadline: 'Ready for fair private sales?',
        ctaText:
          'Create a GiroCode for your next sale in 60 seconds – free, no signup, no fees.',
        ctaButton: 'Create your free GiroCode now →',
      }}
    />
  );
}
