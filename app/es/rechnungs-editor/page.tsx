import type { Metadata } from 'next';
import { InvoiceEditor } from '@/app/(de)/rechnungs-editor/InvoiceEditor';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Editor de facturas – Diseña tu factura | GiroCode Generator',
  description:
    'Crea tu propia factura con nuestro editor visual. Arrastrar y soltar, logo propio, diseño individual. Gratuito y local en tu navegador.',
  alternates: {
    canonical: `${SITE_URL}/es/rechnungs-editor`,
  },
};

export default function InvoiceEditorPageES() {
  return <InvoiceEditor locale="es" />;
}
