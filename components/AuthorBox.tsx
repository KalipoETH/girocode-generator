import React from 'react';

type Locale = 'de' | 'en' | 'fr' | 'es' | 'it';

interface AuthorBoxProps {
  locale?: Locale;
  publishedDate: string;
  updatedDate?: string;
}

const i18n: Record<
  Locale,
  {
    role: string;
    published: string;
    updated: string;
    aboutTitle: string;
    aboutText: string;
  }
> = {
  de: {
    role: 'Entwickler & Gründer von girocodegenerator.com',
    published: 'Veröffentlicht',
    updated: 'Aktualisiert',
    aboutTitle: 'Über den Autor',
    aboutText:
      'Dieser Artikel wurde von Kaleb Jahnke verfasst, dem Entwickler von girocodegenerator.com. Kaleb beschäftigt sich seit 2023 mit SEPA-Standards, EPC-Protokollen und digitalen Zahlungssystemen.',
  },
  en: {
    role: 'Developer & Founder of girocodegenerator.com',
    published: 'Published',
    updated: 'Updated',
    aboutTitle: 'About the Author',
    aboutText:
      'This article was written by Kaleb Jahnke, the developer of girocodegenerator.com. Kaleb has been working with SEPA standards, EPC protocols and digital payment systems since 2023.',
  },
  fr: {
    role: 'Développeur & Fondateur de girocodegenerator.com',
    published: 'Publié le',
    updated: 'Mis à jour le',
    aboutTitle: "À propos de l'auteur",
    aboutText:
      'Cet article a été rédigé par Kaleb Jahnke, le développeur de girocodegenerator.com. Kaleb travaille sur les normes SEPA, les protocoles EPC et les systèmes de paiement numériques depuis 2023.',
  },
  es: {
    role: 'Desarrollador & Fundador de girocodegenerator.com',
    published: 'Publicado el',
    updated: 'Actualizado el',
    aboutTitle: 'Sobre el autor',
    aboutText:
      'Este artículo fue escrito por Kaleb Jahnke, el desarrollador de girocodegenerator.com. Kaleb trabaja con estándares SEPA, protocolos EPC y sistemas de pago digitales desde 2023.',
  },
  it: {
    role: 'Sviluppatore & Fondatore di girocodegenerator.com',
    published: 'Pubblicato',
    updated: 'Aggiornato',
    aboutTitle: "Informazioni sull'autore",
    aboutText:
      'Questo articolo è stato scritto da Kaleb Jahnke, lo sviluppatore di girocodegenerator.com. Kaleb lavora con standard SEPA, protocolli EPC e sistemi di pagamento digitali dal 2023.',
  },
};

export function AuthorBox({ locale = 'de', publishedDate, updatedDate }: AuthorBoxProps) {
  const t = i18n[locale];
  return (
    <div
      className="my-6 flex items-start gap-4 rounded-xl border border-[#1f2431] bg-[#0f1117] p-4"
      aria-label="Autorenbox"
    >
      {/* Avatar */}
      <div
        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
        style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
        aria-hidden
      >
        KJ
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold text-[#e8eaf0]">Kaleb Jahnke</p>
        <p className="text-xs text-[#8b90a0]">{t.role}</p>
        <p className="mt-1 text-xs text-slate-500">
          {t.published}: {publishedDate}
          {updatedDate && (
            <>
              {' · '}
              {t.updated}: {updatedDate}
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export function AuthorBoxEnd({ locale = 'de' }: { locale?: Locale }) {
  const t = i18n[locale];
  return (
    <div className="mt-10 rounded-xl border border-[#1f2431] bg-[#0f1117] p-5">
      <h2 className="mb-2 text-sm font-bold text-[#e8eaf0]">{t.aboutTitle}</h2>
      <p className="text-sm leading-relaxed text-[#8b90a0]">{t.aboutText}</p>
    </div>
  );
}
