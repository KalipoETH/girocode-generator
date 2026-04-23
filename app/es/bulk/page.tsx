import type { Metadata } from 'next';
import BulkClient from '../../bulk/BulkClient';

export const metadata: Metadata = {
  title: 'Generador masivo de GiroCode – Crea múltiples códigos QR a la vez',
  description:
    'Sube un archivo Excel/CSV y crea cientos de GiroCodes a la vez. Gratis, local, sin transmisión de datos.',
  alternates: { canonical: 'https://www.girocodegenerator.com/es/bulk' },
};

export default function BulkPageEs() {
  return <BulkClient locale="es" />;
}
