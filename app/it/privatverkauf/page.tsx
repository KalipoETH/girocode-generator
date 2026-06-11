import type { Metadata } from 'next';
import { UseCaseLanding } from '../../../components/UseCaseLanding';

const SLUG = 'privatverkauf';

export const metadata: Metadata = {
  title: 'GiroCode per Vendite Private – Subito.it & Annunci 2026',
  description:
    'Vendite private su Subito.it, Vinted & simili: fatti pagare facilmente con GiroCode. Sicuro, gratuito, senza PayPal.',
  keywords:
    'girocode vendita privata, subito.it pagamento, sepa qr annuncio, vinted bonifico',
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

export default function PrivatverkaufItPage() {
  return (
    <UseCaseLanding
      content={{
        locale: 'it',
        generatorHref: '/it',
        homeHref: '/it',
        homeLabel: 'Home',
        breadcrumbLabel: 'Vendite Private',
        badge: 'Per Vendite Private & Annunci',
        h1: 'Gestire le Vendite Private in Modo Sicuro e Facile',
        subtitle:
          'Niente commissioni PayPal né stress con contanti: invia un GiroCode all\'acquirente. Scansiona, bonifica – e vedi i soldi sul conto prima che l\'oggetto esca di casa.',
        problemHeadline: 'Il problema: i metodi di pagamento sono scomodi',
        problemIntro:
          'Su Subito.it, Vinted e annunci simili perdi soldi o tempo. Questi tre punti rendono frustranti le vendite private:',
        painPoints: [
          '💸 PayPal prende commissioni – e l\'opzione "Amici" esclude la protezione acquirente',
          '🔒 Gli acquirenti esitano a inserire l\'IBAN – errori e ritardi',
          '📱 Nessun sistema di pagamento comune – ognuno vuole pagare diversamente',
        ],
        solutionHeadline: 'La soluzione: bonifico SEPA – ma intelligente',
        solutionIntro:
          'Invia all\'acquirente un GiroCode. Scansiona con l\'app bancaria preferita, tu ricevi un bonifico SEPA reale – senza intermediari, senza commissioni.',
        benefits: [
          {
            icon: '🆓',
            title: 'Nessuna commissione come PayPal',
            description:
              'Niente 1,9–3,4%. I bonifici SEPA in eurozona sono gratuiti – ricevi esattamente l\'importo concordato.',
          },
          {
            icon: '🔒',
            title: 'Bonifico SEPA sicuro',
            description:
              'Il bonifico va direttamente da banca a banca. Niente terze parti, niente conti bloccati.',
          },
          {
            icon: '📱',
            title: 'L\'acquirente scansiona con l\'app bancaria',
            description:
              'Intesa, UniCredit, BNL, N26 e tutte le banche SEPA scansionano il GiroCode con la propria app.',
          },
        ],
        stepsHeadline: 'Vendita privata sicura in 3 passi',
        steps: [
          {
            title: 'Inserisci i dati',
            description:
              'Il tuo IBAN, nome beneficiario, prezzo di vendita e causale (es. "Vendita bici blu") nel generatore.',
          },
          {
            title: 'Invia il GiroCode all\'acquirente',
            description:
              'Scarica il QR come PNG e invialo via WhatsApp o email – o stampalo per la consegna a mano.',
          },
          {
            title: 'Verifica il bonifico e consegna',
            description:
              'L\'acquirente scansiona e bonifica. Consegna l\'oggetto solo quando vedi l\'accredito sul conto – non un semplice SMS.',
          },
        ],
        faqHeadline: 'Domande frequenti per venditori privati',
        faq: [
          {
            question: 'È più sicuro di PayPal?',
            answer:
              'Dipende dal punto di vista. PayPal offre protezione acquirente; un bonifico SEPA eseguito non può essere stornato unilateralmente. Aspetta sempre l\'accredito sul conto prima di consegnare.',
          },
          {
            question: 'Cosa succede se l\'acquirente non paga?',
            answer:
              'Non consegni l\'oggetto finché non vedi il bonifico. Con GiroCode l\'acquirente non può sbagliare IBAN o importo – il pagamento è più semplice e quindi più probabile.',
          },
          {
            question: 'Posso inviare un GiroCode via WhatsApp?',
            answer:
              'Sì. Invia l\'immagine PNG del QR via WhatsApp, Telegram o email. L\'acquirente la apre e scansiona direttamente dallo schermo.',
          },
          {
            question: 'Funziona anche su Vinted o Subito.it?',
            answer:
              'Sì, per pagamenti diretti fuori dalla piattaforma. Invia il GiroCode solo dopo aver concordato la vendita – così il tuo IBAN non resta visibile pubblicamente.',
          },
        ],
        ctaHeadline: 'Pronto per vendite private eque?',
        ctaText:
          'Crea in 60 secondi un GiroCode per la tua prossima vendita – gratis, senza registrazione, senza commissioni.',
        ctaButton: 'Genera GiroCode gratis →',
        closing: (
          <div className="mt-8 rounded-xl border border-[#1f2431] bg-[#121318] p-5">
            <h3 className="mb-3 text-sm font-bold text-[#e8eaf0]">
              GiroCode vs PayPal per vendite private
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
                    <td className="py-2 pr-4 font-medium text-slate-200">Commissioni</td>
                    <td className="py-2 pr-4 text-emerald-300">✅ Gratuite</td>
                    <td className="py-2">❌ 1,9–3,4%</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-200">Account richiesto</td>
                    <td className="py-2 pr-4 text-emerald-300">✅ No</td>
                    <td className="py-2">❌ Sì</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-200">Protezione acquirente</td>
                    <td className="py-2 pr-4">❌ No</td>
                    <td className="py-2 text-emerald-300">✅ Sì</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-200">Velocità</td>
                    <td className="py-2 pr-4 text-emerald-300">✅ Istantaneo</td>
                    <td className="py-2 text-emerald-300">✅ Istantaneo</td>
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
