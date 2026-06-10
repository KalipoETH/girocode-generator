import Link from 'next/link';
import type { ReactNode } from 'react';

const BASE_URL = 'https://www.girocodegenerator.com';

export interface CountryBank {
  name: string;
  app: string;
}

type LandingLocale = 'en' | 'fr' | 'es';

export interface CountryEpcContent {
  slug: string;
  locale?: LandingLocale;
  homeLabel?: string;
  shortAnswerLabel?: string;
  relatedArticlesLabel?: string;
  ctaHref?: string;
  breadcrumbLabel: string;
  badge: string;
  h1: string;
  shortAnswer: string;
  stats: { value: string; label: string }[];
  introSection: {
    title: string;
    body: ReactNode;
  };
  banksHeadline: string;
  banks: CountryBank[];
  howToHeadline: string;
  howToSteps: { title: string; description: string }[];
  howToJsonLdName: string;
  faqHeadline: string;
  faqs: { q: string; a: string }[];
  ctaText: string;
  relatedLinks?: { href: string; label: string }[];
}

const HOME_LABELS: Record<LandingLocale, string> = {
  en: 'Home',
  fr: 'Accueil',
  es: 'Inicio',
};

const SHORT_ANSWER_LABELS: Record<LandingLocale, string> = {
  en: 'Short Answer',
  fr: 'Réponse courte',
  es: 'Respuesta breve',
};

const RELATED_LABELS: Record<LandingLocale, string> = {
  en: 'Related Articles',
  fr: 'Articles connexes',
  es: 'Artículos relacionados',
};

export function CountryEpcLanding({ content }: { content: CountryEpcContent }) {
  const locale = content.locale ?? 'en';
  const homeLabel = content.homeLabel ?? HOME_LABELS[locale];
  const shortAnswerLabel = content.shortAnswerLabel ?? SHORT_ANSWER_LABELS[locale];
  const relatedLabel = content.relatedArticlesLabel ?? RELATED_LABELS[locale];
  const ctaHref = content.ctaHref ?? `/${locale}`;
  const pageUrl = `${BASE_URL}/${locale}/${content.slug}`;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: content.howToJsonLdName,
    description: content.howToHeadline,
    totalTime: 'PT30S',
    step: content.howToSteps.map((s) => ({
      '@type': 'HowToStep',
      name: s.title,
      text: s.description,
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: homeLabel,
        item: `${BASE_URL}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: content.breadcrumbLabel,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href={`/${locale}`} className="text-sky-400 hover:text-sky-300">
                  {homeLabel}
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">{content.breadcrumbLabel}</li>
            </ol>
          </nav>

          <header className="mb-8 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              {content.badge}
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              {content.h1}
            </h1>
          </header>

          <div
            className="mb-8 rounded-lg border-l-4 border-[#22c55e] bg-[#133018]/50 px-4 py-3"
            role="note"
          >
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#22c55e]">
              💡 {shortAnswerLabel}
            </p>
            <p className="text-sm leading-relaxed text-slate-300">{content.shortAnswer}</p>
          </div>

          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {content.stats.map((s, i) => (
              <div
                key={i}
                className="rounded-lg border border-[#1f2431] bg-[#0f1117] p-4 text-center"
              >
                <p className="text-2xl font-bold text-[#22c55e]">{s.value}</p>
                <p className="mt-1 text-xs leading-snug text-[#8b90a0]">{s.label}</p>
              </div>
            ))}
          </div>

          <article className="prose prose-invert prose-lg max-w-none">
            <section aria-labelledby="intro-section">
              <h2 id="intro-section">{content.introSection.title}</h2>
              {content.introSection.body}
            </section>

            <section aria-labelledby="banks-section" className="not-prose mt-10">
              <h2
                id="banks-section"
                className="mb-4 text-xl font-bold text-[#e8eaf0] md:text-2xl"
              >
                {content.banksHeadline}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {content.banks.map((bank) => (
                  <div
                    key={bank.name}
                    className="rounded-xl border border-[#1f2431] bg-[#121318] p-5"
                  >
                    <h3 className="text-base font-bold text-[#e8eaf0]">{bank.name}</h3>
                    <p className="mt-1 text-sm text-slate-400">{bank.app}</p>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="howto-section" className="mt-10">
              <h2 id="howto-section">{content.howToHeadline}</h2>
              <ol>
                {content.howToSteps.map((step) => (
                  <li key={step.title}>
                    <strong>{step.title}</strong> – {step.description}
                  </li>
                ))}
              </ol>
            </section>

            <div className="not-prose my-8">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
              >
                {content.ctaText}
              </Link>
            </div>

            <section aria-labelledby="faq-section">
              <h2 id="faq-section">{content.faqHeadline}</h2>
              <div className="not-prose space-y-4">
                {content.faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-lg border-l-[3px] border-l-[#22c55e] bg-[#1a1d25] px-5 py-4"
                  >
                    <h3 className="text-sm font-bold text-[#e8eaf0] md:text-base">{faq.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {content.relatedLinks && content.relatedLinks.length > 0 ? (
              <div className="not-prose mt-10 rounded-2xl border border-[#1f2431] bg-[#0f1117] p-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-xl" aria-hidden>
                    📚
                  </span>
                  <h2 className="text-base font-bold text-[#e8eaf0]">{relatedLabel}</h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {content.relatedLinks.map((a) => (
                    <Link
                      key={a.href}
                      href={a.href}
                      className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3.5 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/30 hover:bg-[#1a1d25] hover:text-[#e8eaf0]"
                    >
                      <span className="leading-snug">{a.label}</span>
                      <span className="ml-3 shrink-0 text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </article>
        </div>
      </main>
    </>
  );
}

export function countryAlternates(slug: string, locale: LandingLocale = 'en') {
  const canonical = `${BASE_URL}/${locale}/${slug}`;
  return {
    canonical,
    languages: { [locale]: canonical },
  };
}
