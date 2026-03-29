import type { Metadata } from 'next';
import { ContactForm } from '../../../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact – GiroCode Generator',
  description:
    'Contactez-nous pour toute question, commentaire ou suggestion concernant le GiroCode Generator.',
  alternates: { canonical: 'https://www.girocodegenerator.com/fr/kontakt' },
};

export default function ContactPage() {
  return (
    <ContactForm
      badge="Nous répondons dans les 48 heures"
      heading="Contact"
      subheading="Questions, commentaires ou suggestions ? Écrivez-nous !"
      labelName="Nom"
      labelEmail="E-Mail"
      labelMessage="Message"
      placeholderName="Votre nom"
      placeholderEmail="votre@email.fr"
      placeholderMessage="Votre message..."
      buttonIdle="Envoyer le message →"
      buttonLoading="Envoi en cours..."
      successMsg="✅ Message envoyé ! Nous vous répondrons dans les 48 heures."
      errorMsg="❌ Erreur lors de l'envoi. Veuillez réessayer."
    />
  );
}
