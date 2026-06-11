import type { Metadata } from 'next';
import { UseCaseLanding } from '../../../components/UseCaseLanding';

const SLUG = 'kleinunternehmen';

export const metadata: Metadata = {
  title: 'GiroCode per Piccole Imprese – Fatture Professionali 2026',
  description:
    'Piccole imprese e SRL creano fatture professionali con GiroCode. Conformi alla normativa italiana, con generatore PDF. Gratis.',
  keywords:
    'girocode pmi, fattura srl qr code, sepa qr piccola impresa, fatturazione italia',
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

export default function KleinunternehmenItPage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'it',
        generatorHref: '/it',
        homeHref: '/it',
        homeLabel: 'Home',
        breadcrumbLabel: 'Piccole Imprese',
        badge: 'Per PMI & SRL',
        h1: 'Fatture Professionali per la Tua Piccola Impresa',
        subtitle:
          'Fatture conformi con GiroCode integrato – i clienti pagano più velocemente, tu risparmi tempo e costi di software.',
        problemHeadline: 'Il problema: la fatturazione costa tempo e denaro',
        problemIntro:
          'Le piccole imprese italiane affrontano spesso queste sfide:',
        painPoints: [
          '💶 Software di fatturazione costosi – Abbonamenti mensili per funzioni di base',
          '⚖️ Paura di errori nelle indicazioni obbligatorie – Multe e contestazioni',
          '⏱️ Ore a creare fatture – Tempo perso invece di fare business',
        ],
        solutionHeadline: 'La soluzione: fatture con GiroCode gratis e veloci',
        solutionIntro:
          'Genera fatture PDF professionali con codice QR SEPA integrato – conformi, moderne e pronte in 2 minuti.',
        benefits: [
          {
            icon: '💰',
            title: 'Gratis – nessun abbonamento',
            description:
              'Nessun costo mensile. Generatore e editor fatture completamente gratuiti.',
          },
          {
            icon: '✅',
            title: 'Conformità normativa italiana',
            description:
              'Tutti i campi obbligatori per fatture B2B e B2C – Partita IVA, numerazione, importi.',
          },
          {
            icon: '⚡',
            title: 'Fattura con GiroCode in 2 minuti',
            description:
              'Dati cliente, importo, causale – PDF con QR pronto da inviare.',
          },
        ],
        stepsHeadline: 'Fattura professionale in 3 passi',
        steps: [
          {
            title: 'Inserisci dati azienda e cliente',
            description:
              'Partita IVA, indirizzo, IBAN e dati del cliente nell\'editor fatture.',
          },
          {
            title: 'Genera PDF con GiroCode',
            description:
              'Il codice QR SEPA viene creato automaticamente con importo e causale corretti.',
          },
          {
            title: 'Invia al cliente',
            description:
              'Il cliente scansiona e paga – bonifico SEPA in pochi secondi.',
          },
        ],
        faqHeadline: 'Domande frequenti per PMI',
        faq: [
          {
            question: 'Quali indicazioni obbligatorie deve avere una fattura?',
            answer:
              'Numero e data progressiva, Partita IVA di entrambe le parti, descrizione beni/servizi, aliquota IVA, imponibile, totale e modalità di pagamento.',
          },
          {
            question: 'Cos\'è la fatturazione elettronica in Italia?',
            answer:
              'Per B2B e PA è obbligatoria la fattura elettronica via SDI. Il GiroCode è un complemento per facilitare il pagamento – non sostituisce l\'invio allo SDI.',
          },
          {
            question: 'Quando è necessaria la Partita IVA?',
            answer:
              'Quando superi i limiti di legge per attività occasionale o scegli un regime che la richiede. Con Partita IVA devi emettere fattura per ogni prestazione.',
          },
          {
            question: 'Posso creare fatture nette?',
            answer:
              'Sì. Imposta importo netto e IVA separatamente nell\'editor. Il GiroCode trasferisce l\'importo totale da pagare.',
          },
        ],
        ctaHeadline: 'Pronto per fatture professionali?',
        ctaText:
          'Crea la tua prima fattura con GiroCode – gratis, conforme, pronta in 2 minuti.',
        ctaButton: 'Genera GiroCode gratis →',
      }}
    />
  );
}
