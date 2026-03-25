import type { Metadata } from 'next';
import { ContactForm } from '../../../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact – GiroCode Generator',
  description:
    'Contact us with questions, feedback or suggestions about the GiroCode Generator.',
};

export default function ContactPage() {
  return (
    <ContactForm
      badge="We respond within 48 hours"
      heading="Contact"
      subheading="Questions, feedback or suggestions? Feel free to write us!"
      labelName="Name"
      labelEmail="E-Mail"
      labelMessage="Message"
      placeholderName="Your name"
      placeholderEmail="your@email.com"
      placeholderMessage="Your message..."
      buttonIdle="Send message →"
      buttonLoading="Sending..."
      successMsg="✅ Message sent! We'll get back to you within 48 hours."
      errorMsg="❌ Error sending. Please try again."
    />
  );
}
