import type { Metadata } from 'next';
import { UseCaseLanding } from '../../../components/UseCaseLanding';

const SLUG = 'handwerker';

export const metadata: Metadata = {
  title: 'GiroCode per Artigiani – Fatture Pagate Immediatamente',
  description:
    'Artigiani e imprese usano GiroCodes per essere pagati subito sul posto. Fattura PDF professionale in 2 minuti. Gratis.',
  keywords:
    'girocode artigiano, fattura artigiano qr code, sepa qr impresa, pagamento immediato cantiere',
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

export default function HandwerkerItPage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'it',
        generatorHref: '/it',
        homeHref: '/it',
        homeLabel: 'Home',
        breadcrumbLabel: 'Artigiani',
        badge: 'Per Artigiani & Imprese',
        h1: 'Fatture per Artigiani Pagate Immediatamente',
        subtitle:
          'Sul cantiere o a fine lavoro: il cliente scansiona il GiroCode e paga subito – niente settimane di attesa, niente IBAN dettato al telefono.',
        problemHeadline: 'Il problema: il pagamento arriva troppo tardi',
        problemIntro:
          'Come artigiano conosci queste situazioni quotidiane:',
        painPoints: [
          '🔧 Pagamento solo settimane dopo – Il lavoro è finito, ma il bonifico tarda ad arrivare',
          '📝 Fatture cartacee che si perdono – Senza QR il cliente rimanda il pagamento',
          '📞 Richieste per IBAN errato – Dettare 27 caratteri al telefono porta sempre a errori',
        ],
        solutionHeadline: 'La soluzione: pagamento immediato con GiroCode',
        solutionIntro:
          'Crea la fattura con GiroCode sul posto. Il cliente scansiona con il cellulare e il bonifico parte in pochi secondi.',
        benefits: [
          {
            icon: '💰',
            title: 'Essere pagati sul posto',
            description:
              'Fattura emessa, QR scansionato, bonifico confermato – prima di lasciare il cantiere.',
          },
          {
            icon: '📄',
            title: 'Fattura PDF professionale in 2 minuti',
            description:
              'Genera fattura e GiroCode in un unico passaggio – pronta da inviare o stampare.',
          },
          {
            icon: '📱',
            title: 'Il cliente paga con il cellulare subito',
            description:
              'Tutte le app bancarie SEPA supportano la scansione – nessuna app speciale necessaria.',
          },
        ],
        stepsHeadline: 'Fattura con GiroCode in 3 passi',
        steps: [
          {
            title: 'Inserisci dati lavoro e IBAN',
            description:
              'Importo, causale (es. "Riparazione caldaia") e i tuoi dati aziendali nel generatore o nell\'editor fatture.',
          },
          {
            title: 'Genera PDF con GiroCode',
            description:
              'Scarica la fattura PDF con codice QR integrato – pronta per il cliente.',
          },
          {
            title: 'Cliente scansiona e paga',
            description:
              'Mostra il QR sul cellulare o sulla stampa. Il cliente conferma il bonifico nell\'app bancaria.',
          },
        ],
        faqHeadline: 'Domande frequenti per artigiani',
        faq: [
          {
            question: 'Devo applicare l\'IVA come artigiano?',
            answer:
              'Dipende dal tuo regime fiscale. Con Partita IVA ordinaria applichi l\'IVA; in regime forfettario no. Il GiroCode è indipendente dal regime – facilita solo il pagamento.',
          },
          {
            question: 'Cos\'è la ritenuta d\'acconto?',
            answer:
              'Per prestazioni verso ditte, il committente trattiene una percentuale (ritenuta d\'acconto) e la versa all\'Agenzia delle Entrate. Il GiroCode può indicare l\'importo netto da pagare.',
          },
          {
            question: 'Posso caricare il logo aziendale?',
            answer:
              'Sì, nell\'editor fatture puoi aggiungere il logo e generare un PDF professionale con GiroCode integrato.',
          },
          {
            question: 'Come creo una fattura acconto?',
            answer:
              'Crea un GiroCode con l\'importo dell\'acconto e causale "Acconto lavori – [descrizione]". Per il saldo, genera un secondo QR con l\'importo residuo.',
          },
        ],
        ctaHeadline: 'Pronto a farti pagare subito?',
        ctaText:
          'Crea in 2 minuti la tua prima fattura con GiroCode – gratis, senza registrazione.',
        ctaButton: 'Genera GiroCode gratis →',
      }}
    />
  );
}
