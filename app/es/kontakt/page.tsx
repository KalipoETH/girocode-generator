import type { Metadata } from 'next';
import { ContactForm } from '../../../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto – GiroCode Generator',
  description:
    'Contáctanos con preguntas, comentarios o sugerencias sobre el GiroCode Generator.',
};

export default function ContactPage() {
  return (
    <ContactForm
      badge="Respondemos en 48 horas"
      heading="Contacto"
      subheading="¿Preguntas, comentarios o sugerencias? ¡Escríbenos!"
      labelName="Nombre"
      labelEmail="E-Mail"
      labelMessage="Mensaje"
      placeholderName="Tu nombre"
      placeholderEmail="tu@email.es"
      placeholderMessage="Tu mensaje..."
      buttonIdle="Enviar mensaje →"
      buttonLoading="Enviando..."
      successMsg="✅ ¡Mensaje enviado! Te responderemos en 48 horas."
      errorMsg="❌ Error al enviar. Por favor, inténtalo de nuevo."
    />
  );
}
