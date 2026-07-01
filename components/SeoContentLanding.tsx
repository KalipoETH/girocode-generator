import Link from 'next/link';
import type { ReactNode } from 'react';
import { SITE_URL } from '@/lib/siteConfig';

const BASE_URL = SITE_URL;

type LandingLocale = 'de' | 'en' | 'fr' | 'es' | 'it';

function localeHomeHref(locale: LandingLocale): string {
  return locale === 'de' ? '/' : `/${locale}`;
}

function localePageUrl(locale: LandingLocale, slug: string): string {
  return locale === 'de' ? `${BASE_URL}/${slug}` : `${BASE_URL}/${locale}/${slug}`;
}

export interface SeoContentConfig {
  slug: string;
  locale?: LandingLocale;
  homeLabel?: string;
  shortAnswerLabel?: string;
  relatedArticlesLabel?: string;
  breadcrumbLabel: string;
  badge: string;
  h1: string;
  shortAnswer: string;
  stats?: { value: string; label: string }[];
  body: ReactNode;
  howTo?: {
    name: string;
    headline: string;
    steps: { title: string; description: string }[];
  };
  faqs: { q: string; a: string }[];
  faqHeadline?: string;
  ctas: { href: string; label: string; primary?: boolean }[];
  relatedLinks?: { href: string; label: string }[];
}

const HOME_LABELS: Record<LandingLocale, string> = {
  de: 'Startseite',
  en: 'Home',
  fr: 'Accueil',
  es: 'Inicio',
  it: 'Home',
};

const SHORT_ANSWER_LABELS: Record<LandingLocale, string> = {
  de: 'Kurzantwort',
  en: 'Short Answer',
  fr: 'Réponse courte',
  es: 'Respuesta breve',
  it: 'Risposta breve',
};

const RELATED_LABELS: Record<LandingLocale, string> = {
  de: 'Verwandte Artikel',
  en: 'Related Articles',
  fr: 'Articles connexes',
  es: 'Artículos relacionados',
  it: 'Articoli correlati',
};

const DEFAULT_FAQ_HEADLINES: Record<LandingLocale, string> = {
  de: 'Häufig gestellte Fragen',
  en: 'Frequently Asked Questions',
  fr: 'Questions fréquentes',
  es: 'Preguntas frecuentes',
  it: 'Domande frequenti',
};

export function SeoContentLanding({ content }: { content: SeoContentConfig }) {
  const locale = content.locale ?? 'en';
  const homeLabel = content.homeLabel ?? HOME_LABELS[locale];
  const shortAnswerLabel = content.shortAnswerLabel ?? SHORT_ANSWER_LABELS[locale];
  const relatedLabel = content.relatedArticlesLabel ?? RELATED_LABELS[locale];
  const homeHref = localeHomeHref(locale);
  const pageUrl = localePageUrl(locale, content.slug);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
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
        item: `${BASE_URL}${homeHref === '/' ? '' : homeHref}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: content.breadcrumbLabel,
        item: pageUrl,
      },
    ],
  };

  const howToJsonLd = content.howTo
    ? {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: content.howTo.name,
        description: content.howTo.headline,
        totalTime: 'PT2M',
        step: content.howTo.steps.map((s) => ({
          '@type': 'HowToStep',
          name: s.title,
          text: s.description,
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {howToJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      ) : null}
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href={homeHref} className="text-sky-400 hover:text-sky-300">
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

          {content.stats && content.stats.length > 0 ? (
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
          ) : null}

          <article className="prose prose-invert prose-lg max-w-none">{content.body}</article>

          {content.howTo ? (
            <section aria-labelledby="howto-section" className="mt-10">
              <h2
                id="howto-section"
                className="mb-4 text-xl font-bold text-[#e8eaf0] md:text-2xl"
              >
                {content.howTo.headline}
              </h2>
              <ol className="space-y-4">
                {content.howTo.steps.map((step, idx) => (
                  <li
                    key={step.title}
                    className="flex gap-4 rounded-xl border border-[#1f2431] bg-[#121318] p-5"
                  >
                    <span
                      aria-hidden
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-base font-bold text-slate-950"
                      style={{
                        background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                      }}
                    >
                      {idx + 1}
                    </span>
                    <div>
                      <h3 className="mb-1 text-base font-bold text-[#e8eaf0]">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-400">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          <div className="not-prose my-8 flex flex-wrap gap-3">
            {content.ctas.map((cta) =>
              cta.primary !== false ? (
                <Link
                  key={cta.href + cta.label}
                  href={cta.href}
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}
                >
                  {cta.label}
                </Link>
              ) : (
                <Link
                  key={cta.href + cta.label}
                  href={cta.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#1f2431] px-6 py-3 text-sm font-medium text-slate-300 transition duration-200 hover:border-emerald-500/30 hover:text-white"
                >
                  {cta.label}
                </Link>
              ),
            )}
          </div>

          <section aria-labelledby="faq-section" className="mt-10">
            <h2
              id="faq-section"
              className="mb-4 text-xl font-bold text-[#e8eaf0] md:text-2xl"
            >
              {content.faqHeadline ?? DEFAULT_FAQ_HEADLINES[locale]}
            </h2>
            <div className="space-y-4">
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
        </div>
      </main>
    </>
  );
}

export function seoAlternates(slug: string, locale: LandingLocale = 'en') {
  const canonical = localePageUrl(locale, slug);
  return {
    canonical,
    languages: { [locale]: canonical },
  };
}
