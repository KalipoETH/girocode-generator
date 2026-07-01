import type { Metadata } from 'next';
import { UseCaseLanding } from '../../../components/UseCaseLanding';
import { SITE_URL } from '@/lib/siteConfig';

const SLUG = 'spenden';

export const metadata: Metadata = {
  title: 'GiroCode per Donazioni – QR SEPA per Raccolte Fondi 2026',
  description:
    'Raccolte fondi con GiroCode: scansiona e dona. Per associazioni, ONG e raccolte fondi private. Gratis & senza registrazione.',
  keywords:
    'girocode donazione, codice qr donazione, sepa qr raccolta fondi, ong qr code italia',
  alternates: {
    canonical: `${SITE_URL}/it/${SLUG}`,
    languages: {
      'x-default': `${SITE_URL}/${SLUG}`,
      de: `${SITE_URL}/${SLUG}`,
      en: `${SITE_URL}/en/${SLUG}`,
      fr: `${SITE_URL}/fr/${SLUG}`,
      es: `${SITE_URL}/es/${SLUG}`,
      it: `${SITE_URL}/it/${SLUG}`,
    },
  },
};

export default function SpendenItPage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'it',
        generatorHref: '/it',
        homeHref: '/it',
        homeLabel: 'Home',
        breadcrumbLabel: 'Donazioni',
        badge: 'Per Raccolte Fondi & ONG',
        h1: 'Più Donazioni con una Semplice Scansione',
        subtitle:
          'Stampa un GiroCode su volantini, manifesti o la pagina donazioni. "Donerò dopo" diventa "Dono ora" – in dieci secondi.',
        problemHeadline: 'Il problema: le buone intenzioni svaniscono',
        problemIntro:
          'Gli studi lo dimostrano: oltre il 70% di chi vuole donare abbandona il processo. Queste tre barriere sono le principali:',
        painPoints: [
          '💸 I donatori vogliono donare – ma il processo è troppo complicato',
          '📉 Molti abbandonano perché l\'inserimento IBAN è noioso',
          '🎯 La causale viene dimenticata – la donazione non si può assegnare',
        ],
        solutionHeadline: 'La soluzione: GiroCode riduce drasticamente la barriera',
        solutionIntro:
          'Un solo codice QR basta. I donatori aprono l\'app bancaria, scansionano, confermano – e l\'importo arriva sul vostro conto con la causale corretta.',
        benefits: [
          {
            icon: '📱',
            title: 'Scansione e donazione in 10 secondi',
            description:
              'Nessuna ricerca dell\'IBAN né digitazione: una scansione, un importo, fatto.',
          },
          {
            icon: '💝',
            title: 'Anche senza importo – i donatori scelgono',
            description:
              'Lascia l\'importo vuoto. I donatori inseriscono la cifra che vogliono nell\'app bancaria.',
          },
          {
            icon: '🌐',
            title: 'Utilizzabile su volantini, manifesti, siti web',
            description:
              'Scarica il PNG e usalo su materiale stampato, web, email o social media.',
          },
        ],
        stepsHeadline: 'Il tuo GiroCode per donazioni in 3 passi',
        steps: [
          {
            title: 'Inserisci il conto donazioni',
            description:
              'IBAN, beneficiario (associazione/ONG) e causale (es. "Donazione campagna 2026") nel generatore.',
          },
          {
            title: 'Lascia l\'importo libero o suggeriscilo',
            description:
              'Campo vuoto per donazioni libere – oppure un importo suggerito (es. 25 €) per campagne a somma fissa.',
          },
          {
            title: 'Condividi e usa il QR',
            description:
              'Metti il codice su manifesto, volantino, sito, mailing o grafica social. I donatori scansionano con l\'app bancaria.',
          },
        ],
        faqHeadline: 'Domande frequenti sul GiroCode per donazioni',
        faq: [
          {
            question: 'Posso creare il GiroCode senza importo?',
            answer:
              'Sì. Se lasci l\'importo vuoto, l\'app bancaria del donatore chiederà l\'importo. Ideale per donazioni libere.',
          },
          {
            question: 'Come stampo il GiroCode sui manifesti?',
            answer:
              'Scarica il PNG ad alta risoluzione. Su manifesti stampa almeno 5–10 cm per una scansione facile da distanza. Mantieni buon contrasto bianco/nero.',
          },
          {
            question: 'È necessaria una ricevuta di donazione automatica?',
            answer:
              'Il GiroCode non genera ricevute automatiche – è solo un invito al pagamento. Per le detrazioni fiscali, l\'associazione deve comunque rilasciare ricevuta secondo la normativa italiana.',
          },
        ],
        ctaHeadline: 'Pronto per più donazioni?',
        ctaText:
          'Crea in 2 minuti il GiroCode per la tua prossima campagna – gratis, senza registrazione.',
        ctaButton: 'Genera GiroCode gratis →',
        closing: (
          <div className="mt-8 rounded-xl border border-[#1f2431] bg-[#121318] p-5">
            <h3 className="mb-3 text-sm font-bold text-[#e8eaf0]">
              GiroCode vs PayPal per donazioni
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-slate-300 md:text-sm">
                <thead>
                  <tr className="border-b border-slate-700 text-left">
                    <th className="py-2 pr-4 font-medium text-slate-400" />
                    <th className="py-2 pr-4 font-medium text-emerald-300">GiroCode</th>
                    <th className="py-2 font-medium text-slate-400">PayPal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-200">Costi</td>
                    <td className="py-2 pr-4 text-emerald-300">Gratuito</td>
                    <td className="py-2">1,9–3,4% di commissioni</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-200">Accredito</td>
                    <td className="py-2 pr-4 text-emerald-300">Diretto sul conto</td>
                    <td className="py-2">Via saldo PayPal</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-200">Account</td>
                    <td className="py-2 pr-4 text-emerald-300">Nessun account</td>
                    <td className="py-2">Account PayPal richiesto</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      }}
    />
  );
}
