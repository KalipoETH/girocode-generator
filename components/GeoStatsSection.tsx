import React from 'react';

type Locale = 'de' | 'en' | 'fr' | 'es';

const stats: Record<Locale, { value: string; label: string }[]> = {
  de: [
    { value: 'EPC069-12', label: 'Offizieller EPC-Standard seit 2018' },
    { value: '22 Stellen', label: 'Maximale IBAN-Länge in Deutschland' },
    { value: '140 Zeichen', label: 'Maximale Länge des Verwendungszwecks' },
    { value: 'Level M', label: 'QR-Code Fehlerkorrekturlevel' },
  ],
  en: [
    { value: 'EPC069-12', label: 'Official EPC Standard since 2018' },
    { value: '22 digits', label: 'Maximum IBAN length in Germany' },
    { value: '140 chars', label: 'Maximum payment reference length' },
    { value: 'Level M', label: 'QR code error correction level' },
  ],
  fr: [
    { value: 'EPC069-12', label: 'Norme EPC officielle depuis 2018' },
    { value: '22 chiffres', label: "Longueur maximale de l'IBAN en Allemagne" },
    { value: '140 caractères', label: 'Longueur maximale de la référence de paiement' },
    { value: 'Niveau M', label: "Niveau de correction d'erreur QR" },
  ],
  es: [
    { value: 'EPC069-12', label: 'Norma EPC oficial desde 2018' },
    { value: '22 dígitos', label: 'Longitud máxima del IBAN en Alemania' },
    { value: '140 caracteres', label: 'Longitud máxima de la referencia de pago' },
    { value: 'Nivel M', label: 'Nivel de corrección de errores QR' },
  ],
};

const titles: Record<Locale, string> = {
  de: 'Fakten & Statistiken',
  en: 'Facts & Statistics',
  fr: 'Faits & Statistiques',
  es: 'Hechos & Estadísticas',
};

interface GeoStatsSectionProps {
  locale?: Locale;
}

export function GeoStatsSection({ locale = 'de' }: GeoStatsSectionProps) {
  const items = stats[locale];
  const title = titles[locale];

  return (
    <section aria-labelledby="geo-stats-heading" className="animate-card-in mt-4">
      <h2
        id="geo-stats-heading"
        className="mb-4 text-base font-semibold tracking-tight text-slate-50 md:text-lg"
      >
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.value}
            className="flex flex-col gap-1.5 rounded-xl border border-[#1f2431] bg-[#0f1117] p-4"
          >
            <span className="text-xl font-bold tracking-tight text-[#22c55e] sm:text-2xl">
              {item.value}
            </span>
            <span className="text-[12px] leading-snug text-[#8b90a0]">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
