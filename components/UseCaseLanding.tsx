import Link from 'next/link';
import type { ReactNode } from 'react';

export type UseCaseLocale = 'de' | 'en' | 'fr' | 'es';

export interface UseCaseFAQ {
  question: string;
  answer: string;
}

export interface UseCaseStep {
  title: string;
  description: string;
}

export interface UseCaseBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface UseCaseContent {
  locale: UseCaseLocale;
  generatorHref: string;
  homeHref: string;
  homeLabel: string;
  breadcrumbLabel: string;
  badge: string;
  h1: string;
  subtitle: string;
  problemHeadline: string;
  problemIntro: string;
  painPoints: string[];
  solutionHeadline: string;
  solutionIntro: string;
  benefits: UseCaseBenefit[];
  stepsHeadline: string;
  steps: UseCaseStep[];
  faqHeadline: string;
  faq: UseCaseFAQ[];
  ctaHeadline: string;
  ctaText: string;
  ctaButton: string;
  closing?: ReactNode;
}

export function UseCaseLanding({ content }: { content: UseCaseContent }) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen bg-[#0b0c10] text-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link
                  href={content.homeHref}
                  className="text-sky-400 hover:text-sky-300"
                >
                  {content.homeLabel}
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-400">{content.breadcrumbLabel}</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="mb-12 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {content.badge}
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-[#e8eaf0] md:text-4xl">
              {content.h1}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              {content.subtitle}
            </p>
            <div className="pt-2">
              <Link
                href={content.generatorHref}
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,197,94,0.4)]"
                style={{
                  background:
                    'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  color: '#ffffff',
                  boxShadow: '0 0 24px rgba(34,197,94,0.35)',
                }}
              >
                {content.ctaButton}
              </Link>
            </div>
          </header>

          {/* Problem-Sektion */}
          <section
            aria-labelledby="problem-section"
            className="mb-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-6"
          >
            <h2
              id="problem-section"
              className="mb-2 text-xl font-bold text-[#e8eaf0] md:text-2xl"
            >
              {content.problemHeadline}
            </h2>
            <p className="mb-5 text-sm text-slate-300 md:text-base">
              {content.problemIntro}
            </p>
            <ul className="space-y-3">
              {content.painPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-rose-500/20 bg-[#1a1015] p-4"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/15 text-rose-300"
                  >
                    ✕
                  </span>
                  <span className="text-sm leading-relaxed text-slate-200 md:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Lösung-Sektion */}
          <section
            aria-labelledby="solution-section"
            className="mb-12 rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-6"
          >
            <h2
              id="solution-section"
              className="mb-2 text-xl font-bold text-[#e8eaf0] md:text-2xl"
            >
              {content.solutionHeadline}
            </h2>
            <p className="mb-5 text-sm text-slate-300 md:text-base">
              {content.solutionIntro}
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {content.benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex flex-col gap-2 rounded-xl border border-emerald-500/20 bg-[#0f1a14] p-5"
                >
                  <span aria-hidden className="text-3xl">
                    {benefit.icon}
                  </span>
                  <h3 className="text-sm font-bold text-emerald-300 md:text-base">
                    {benefit.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-300 md:text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Schritt-für-Schritt */}
          <section
            aria-labelledby="steps-section"
            className="mb-12"
          >
            <h2
              id="steps-section"
              className="mb-6 text-xl font-bold text-[#e8eaf0] md:text-2xl"
            >
              {content.stepsHeadline}
            </h2>
            <ol className="space-y-4">
              {content.steps.map((step, idx) => (
                <li
                  key={step.title}
                  className="flex gap-4 rounded-xl border border-[#1f2431] bg-[#121318] p-5"
                >
                  <span
                    aria-hidden
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-base font-bold text-slate-950"
                    style={{
                      background:
                        'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                    }}
                  >
                    {idx + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="mb-1 text-base font-bold text-[#e8eaf0]">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq-section" className="mb-12">
            <h2
              id="faq-section"
              className="mb-6 text-xl font-bold text-[#e8eaf0] md:text-2xl"
            >
              {content.faqHeadline}
            </h2>
            <div className="space-y-3">
              {content.faq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-xl border-l-[3px] border-l-[#22c55e] bg-[#1a1d25] px-5 py-4 transition-colors duration-200 hover:bg-[#1e2130]"
                >
                  <h3 className="mb-2 text-sm font-bold text-[#e8eaf0] md:text-base">
                    {item.question}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section
            aria-labelledby="cta-section"
            className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-[#0f1a14] to-[#0b0c10] p-8 text-center"
          >
            <h2
              id="cta-section"
              className="mb-3 text-2xl font-bold text-[#e8eaf0] md:text-3xl"
            >
              {content.ctaHeadline}
            </h2>
            <p className="mx-auto mb-6 max-w-xl text-sm text-slate-300 md:text-base">
              {content.ctaText}
            </p>
            <Link
              href={content.generatorHref}
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,197,94,0.4)]"
              style={{
                background:
                  'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                color: '#ffffff',
                boxShadow: '0 0 24px rgba(34,197,94,0.35)',
              }}
            >
              {content.ctaButton}
            </Link>
          </section>

          {content.closing ? (
            <div className="mt-10 text-sm text-slate-400">{content.closing}</div>
          ) : null}
        </div>
      </main>
    </>
  );
}
