import type { Metadata } from 'next';
import { UseCaseLanding } from '../../../components/UseCaseLanding';

const SLUG = 'verein';

export const metadata: Metadata = {
  title: 'GiroCode per Associazioni – Quote Sociali Facili 2026',
  description:
    'Le associazioni usano GiroCodes per quote sociali, donazioni ed eventi. Gratis, locale, senza registrazione.',
  keywords:
    'girocode associazione, quota sociale qr code, sepa qr associazione, donazione associazione',
  alternates: {
    canonical: `https://www.girocodegenerator.com/it/${SLUG}`,
    languages: {
      'x-default': `https://www.girocodegenerator.com/${SLUG}`,
      de: `https://www.girocodegenerator.com/${SLUG}`,
      en: `https://www.girocodegenerator.com/en/${SLUG}`,
      fr: `https://www.girocodegenerator.com/fr/${SLUG}`,
      es: `https://www.girocodegenerator.com/es/${SLUG}`,
      it: `https://www.girocodegenerator.com/it/${SLUG}`,
    },
  },
};

export default function VereinItPage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'it',
        generatorHref: '/it',
        homeHref: '/it',
        homeLabel: 'Home',
        breadcrumbLabel: 'Associazioni',
        badge: 'Per Associazioni & Organizzazioni',
        h1: 'Riscuotere Quote Sociali e Donazioni Facilmente',
        subtitle:
          'Con un GiroCode su lettere ai soci, volantini per donazioni e inviti agli eventi, i membri pagano in tempo – senza errori, senza lavoro extra per il tesoriere.',
        problemHeadline: 'Il problema: gestire le quote richiede tempo',
        problemIntro:
          'Essere tesoriere volontario è già un lavoro a tempo pieno. Queste tre attività consumano più tempo:',
        painPoints: [
          '😩 Scrivere solleciti richiede tempo – ogni quota va seguita manualmente',
          '🔢 Causali di pagamento errate – difficile assegnare gli incassi',
          '📋 Contabilità complicata per quote, donazioni ed eventi',
        ],
        solutionHeadline: 'La soluzione: GiroCode per i pagamenti associativi',
        solutionIntro:
          'Stampa il GiroCode su lettere ai soci, volantini o manifesti. Soci e donatori scansionano, pagano – e la causale corretta viene registrata automaticamente.',
        benefits: [
          {
            icon: '📱',
            title: 'Scansione e pagamento in 10 secondi',
            description:
              'I soci pagano subito dopo la scansione – senza cercare i dati bancari, senza digitazione manuale.',
          },
          {
            icon: '🎯',
            title: 'Causale automatica con numero socio',
            description:
              '"Quota 2026", "Donazione festa estiva" – la causale è codificata nel QR e trasferita senza errori.',
          },
          {
            icon: '📊',
            title: 'Attribuzione pagamenti più semplice',
            description:
              'Causali chiare nell\'estratto conto – la contabilità quasi si fa da sola.',
          },
        ],
        stepsHeadline: 'Il tuo GiroCode associativo in 3 passi',
        steps: [
          {
            title: 'Inserisci il conto dell\'associazione',
            description:
              'Aggiungi nome associazione, IBAN e – se lo conosci – un importo (es. quota annuale) nel generatore.',
          },
          {
            title: 'Definisci la causale',
            description:
              'Imposta una causale chiara come "Quota 2026" o "Donazione festa estiva" direttamente nel codice.',
          },
          {
            title: 'Stampa o invia il QR',
            description:
              'Usa il PNG su lettere, newsletter, sito web o volantini. I soci scansionano con la propria app bancaria.',
          },
        ],
        faqHeadline: 'Domande frequenti per associazioni',
        faq: [
          {
            question: 'Posso creare un GiroCode per diversi soci?',
            answer:
              'Sì. Puoi creare un QR generico per tutti i soci con causale "Quota 2026", oppure QR personalizzati con numero socio nella causale per un\'assegnazione più semplice.',
          },
          {
            question: 'Funziona anche per le donazioni?',
            answer:
              'Assolutamente sì. Lascia l\'importo vuoto per donazioni libere o imposta un importo suggerito per campagne specifiche.',
          },
          {
            question: 'Come integro il GiroCode nella newsletter dell\'associazione?',
            answer:
              'Scarica il PNG e inseriscilo nell\'email o nel PDF allegato. Anche un link alla pagina di donazione con il QR funziona bene.',
          },
          {
            question: 'Posso creare un GiroCode senza importo?',
            answer:
              'Sì. Senza importo fisso, il donatore o socio inserisce l\'importo desiderato nell\'app bancaria.',
          },
          {
            question: 'È conforme al GDPR?',
            answer:
              'Sì. Il generatore funziona interamente in locale nel browser – nessun dato viene trasmesso a server esterni.',
          },
        ],
        ctaHeadline: 'Pronto per quote sociali più semplici?',
        ctaText:
          'Crea in 2 minuti il GiroCode per la tua associazione – gratis, senza registrazione, pronto per lettere e volantini.',
        ctaButton: 'Genera GiroCode gratis →',
      }}
    />
  );
}
