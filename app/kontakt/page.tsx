import type { Metadata } from 'next';
import { ContactForm } from '../../components/ContactForm';

export const metadata: Metadata = {
  title: 'Kontakt – GiroCode Generator',
  description:
    'Kontaktiere uns bei Fragen, Feedback oder Verbesserungsvorschlägen zum GiroCode Generator.',
};

export default function KontaktPage() {
  return (
    <ContactForm
      badge="Wir antworten innerhalb von 48 Stunden"
      heading="Kontakt"
      subheading="Fragen, Feedback oder Verbesserungsvorschläge? Schreib uns gerne!"
      labelName="Name"
      labelEmail="E-Mail"
      labelMessage="Nachricht"
      placeholderName="Dein Name"
      placeholderEmail="deine@email.de"
      placeholderMessage="Deine Nachricht..."
      buttonIdle="Nachricht senden →"
      buttonLoading="Wird gesendet..."
      successMsg="✅ Nachricht gesendet! Wir melden uns innerhalb von 48 Stunden."
      errorMsg="❌ Fehler beim Senden. Bitte versuche es erneut."
    />
  );
}
