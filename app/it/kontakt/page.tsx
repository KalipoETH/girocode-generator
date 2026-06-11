import type { Metadata } from 'next';
import { ContactForm } from '../../../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contatti – GiroCode Generator',
  description:
    'Contattaci per domande, feedback o suggerimenti sul GiroCode Generator. Rispondiamo entro 48 ore.',
  alternates: { canonical: 'https://www.girocodegenerator.com/it/kontakt' },
};

export default function ContactPageIt() {
  return (
    <ContactForm
      badge="Rispondiamo entro 48 ore"
      heading="Contatti"
      subheading="Domande, feedback o suggerimenti? Scrivici!"
      labelName="Nome"
      labelEmail="E-Mail"
      labelMessage="Messaggio"
      placeholderName="Il tuo nome"
      placeholderEmail="la.tua@email.it"
      placeholderMessage="Il tuo messaggio..."
      buttonIdle="Invia messaggio →"
      buttonLoading="Invio in corso..."
      successMsg="✅ Messaggio inviato! Ti risponderemo entro 48 ore."
      errorMsg="❌ Errore. Riprova."
    />
  );
}
