import type { Metadata } from 'next';
import Link from 'next/link';
import { UseCaseLanding } from '../../../components/UseCaseLanding';

const SLUG = 'freelancer';

export const metadata: Metadata = {
  title: 'GiroCode per Freelance – Farsi Pagare più in Fretta 2026',
  description:
    'I freelance vengono pagati più velocemente con i GiroCodes sulle fatture: meno errori IBAN, meno ritardi, più professionalità. Gratis.',
  keywords:
    'girocode freelance, fattura freelance qr code, sepa qr partita iva, pagamento freelance italia',
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

export default function FreelancerItPage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'it',
        generatorHref: '/it',
        homeHref: '/it',
        homeLabel: 'Home',
        breadcrumbLabel: 'Freelance',
        badge: 'Per Freelance & Autonomi',
        h1: 'Farsi Pagare più in Fretta come Freelance',
        subtitle:
          'Con un GiroCode sulla fattura, i clienti pagano in pochi secondi – senza digitare l\'IBAN, senza errori, senza ritardi.',
        problemHeadline: 'Il problema: i pagamenti arrivano in ritardo',
        problemIntro:
          'Lo conosci: il lavoro è fatto, la fattura inviata – ma i soldi tardano ad arrivare. Questi tre punti costano più nervi a chi lavora in proprio:',
        painPoints: [
          '😤 I clienti sbagliano a digitare l\'IBAN – Una cifra sbagliata e il bonifico va altrove o torna indietro. Aspetti giorni per il tuo denaro.',
          '⏰ I pagamenti arrivano sempre in ritardo – I clienti rimandano il bonifico perché è complicato. Una scansione richiede 10 secondi – inserire manualmente 3 minuti.',
          '📊 Aspetto poco professionale – Le fatture senza QR code sembrano obsolete. I tuoi concorrenti usano già i GiroCodes.',
        ],
        solutionHeadline: 'La soluzione: GiroCode su ogni fattura',
        solutionIntro:
          'Un solo codice QR sulla fattura cambia tutto. Il cliente scansiona – e l\'app bancaria compila IBAN, importo e causale automaticamente.',
        benefits: [
          {
            icon: '⚡',
            title: 'Pagamenti 10x più veloci',
            description:
              'I clienti scansionano, verificano, confermano – finito. Nessuna scusa.',
          },
          {
            icon: '✅',
            title: 'Zero errori di digitazione',
            description:
              'IBAN, importo e causale vengono trasferiti automaticamente.',
          },
          {
            icon: '💼',
            title: 'Aspetto professionale',
            description:
              'Le fatture moderne con GiroCode segnalano: sai quello che fai.',
          },
        ],
        stepsHeadline: 'La tua fattura con GiroCode in 3 passi',
        steps: [
          {
            title: 'Inserisci IBAN e dati fattura',
            description:
              'Aggiungi beneficiario, IBAN, importo e causale nel generatore. Tutto avviene localmente nel browser.',
          },
          {
            title: 'Genera GiroCode e crea PDF',
            description:
              'Il generatore crea subito il codice QR e, opzionalmente, una fattura PDF pronta da inviare con il codice integrato.',
          },
          {
            title: 'Invia fattura – il cliente scansiona e paga',
            description:
              'Invia il PDF via email. Il cliente scansiona il codice con la sua app bancaria e conferma il bonifico in due clic.',
          },
        ],
        faqHeadline: 'Domande frequenti per freelance',
        faq: [
          {
            question: 'Devo registrarmi per usare il generatore?',
            answer:
              'No, completamente gratuito senza registrazione.',
          },
          {
            question: 'Funziona con il software di fatturazione italiano?',
            answer:
              'Sì. Puoi scaricare il QR come PNG e inserirlo in qualsiasi programma di fatturazione.',
          },
          {
            question: 'Quali indicazioni obbligatorie deve avere una fattura freelance?',
            answer:
              'Secondo la normativa italiana: dati completi di entrambe le parti, Partita IVA, data e numero progressivo, descrizione servizio, importi e totale.',
          },
          {
            question: 'Cos\'è il regime forfettario?',
            answer:
              'Il regime forfettario è un regime fiscale agevolato per freelance con ricavi fino a 85.000€/anno. Non si applica l\'IVA sulle fatture.',
          },
          {
            question: 'Posso usare il generatore per le note spese?',
            answer:
              'Sì, puoi creare GiroCodes per qualsiasi tipo di pagamento SEPA.',
          },
        ],
        ctaHeadline: 'Pronto a farti pagare più in fretta?',
        ctaText:
          'Crea la tua prima fattura con GiroCode in 2 minuti – gratis, senza registrazione, 100% locale nel browser.',
        ctaButton: 'Genera il tuo primo GiroCode →',
        closing: (
          <div className="mt-4 flex justify-center">
            <Link
              href="/it/rechnungs-editor"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 px-6 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/10"
            >
              Crea fattura con GiroCode →
            </Link>
          </div>
        ),
      }}
    />
  );
}
