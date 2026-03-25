import React from 'react';
import Link from 'next/link';

export interface RelatedArticle {
  href: string;
  label: string;
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface KnowledgeLayoutProps {
  breadcrumbCurrent: string;
  badge: string;
  title: string;
  lead: React.ReactNode;
  children: React.ReactNode;
  relatedArticles: RelatedArticle[];
  locale?: 'de' | 'en' | 'fr' | 'es';
}

const i18n = {
  de: {
    homeLabel: 'Startseite',
    homeHref: '/',
    wissenLabel: 'Wissen',
    wissenHref: '/wissen',
    breadcrumbAriaLabel: 'Breadcrumb',
    affiliateTitle: 'GiroCode professionell nutzen – Software-Empfehlungen',
    affiliateIntro:
      'Wer GiroCodes professionell und dauerhaft auf Rechnungen einsetzen möchte, kommt früher oder später an einer guten Buchhaltungs- oder Rechnungsstellungs-Software nicht vorbei. Einen GiroCode manuell zu erstellen ist für gelegentliche Nutzung in Ordnung – bei regelmäßiger Rechnungsstellung zahlt sich eine automatisierte Lösung jedoch schnell aus.',
    affiliateRecommend: 'Wir empfehlen zwei bewährte Tools, die GiroCodes nativ unterstützen:',
    sevdeskName: 'sevDesk',
    sevdeskDesc:
      'sevDesk ist eine der führenden deutschen Buchhaltungssoftwares für Selbstständige und KMUs. Rechnungen mit automatisch generiertem GiroCode lassen sich in wenigen Klicks erstellen und direkt per E-Mail versenden. Die Software ist DATEV-kompatibel und unterstützt die Kleinunternehmerregelung.',
    sevdeskCta: 'sevDesk kostenlos testen *',
    fastbillName: 'FastBill',
    fastbillDesc:
      'FastBill bietet eine einfache, auf Geschwindigkeit ausgelegte Rechnungsstellungs-Plattform. Mit FastBill erstellst du in unter zwei Minuten eine professionelle Rechnung inklusive GiroCode – direkt aus dem Browser, ohne Installation. Ideal für Freelancer und kleine Teams.',
    fastbillCta: 'FastBill kostenlos testen *',
    affiliateNote:
      '* Affiliate-Link – Wenn du über diesen Link kaufst, erhalten wir eine kleine Provision ohne Mehrkosten für dich.',
    generatorNote: 'Für gelegentliche Nutzung oder als erste Anlaufstelle empfehlen wir unseren',
    generatorLink: 'kostenlosen GiroCode Generator',
    generatorHref: '/',
    generatorSuffix: '– komplett lokal im Browser, ohne Registrierung.',
    ctaLabel: 'Jetzt GiroCode erstellen',
    ctaHref: '/',
    relatedTitle: 'Weitere Artikel',
    disclaimer:
      '* Affiliate-Hinweis: Mit einem * gekennzeichnete Links sind Affiliate-Links. Wenn du über diese Links kaufst, erhalten wir eine kleine Provision – für dich entstehen keine Mehrkosten.',
  },
  en: {
    homeLabel: 'Home',
    homeHref: '/en',
    wissenLabel: 'Knowledge',
    wissenHref: '/en/wissen',
    breadcrumbAriaLabel: 'Breadcrumb',
    affiliateTitle: 'Use GiroCode Professionally – Software Recommendations',
    affiliateIntro:
      'Anyone who wants to use GiroCodes professionally on invoices will eventually need good accounting or invoicing software. Creating GiroCodes manually is fine for occasional use – but for regular invoicing, an automated solution quickly pays off.',
    affiliateRecommend: 'We recommend two proven tools that natively support GiroCodes:',
    sevdeskName: 'sevDesk',
    sevdeskDesc:
      'sevDesk is one of Germany\'s leading accounting platforms for freelancers and SMEs. Invoices with automatically generated GiroCode can be created in just a few clicks and sent directly by email. The software is DATEV-compatible and supports the small business regulation.',
    sevdeskCta: 'Try sevDesk free *',
    fastbillName: 'FastBill',
    fastbillDesc:
      'FastBill offers a simple, speed-focused invoicing platform. With FastBill you can create a professional invoice including a GiroCode in under two minutes – directly in the browser, no installation needed. Ideal for freelancers and small teams.',
    fastbillCta: 'Try FastBill free for 14 days *',
    affiliateNote:
      '* Affiliate link – If you purchase through this link, we receive a small commission at no extra cost to you.',
    generatorNote: 'For occasional use or as a starting point, we recommend our',
    generatorLink: 'free GiroCode Generator',
    generatorHref: '/en',
    generatorSuffix: '– completely local, no registration required.',
    ctaLabel: 'Create GiroCode now',
    ctaHref: '/en',
    relatedTitle: 'More articles',
    disclaimer:
      '* Affiliate disclosure: Links marked with * are affiliate links. If you purchase through these links, we receive a small commission – at no extra cost to you.',
  },
  fr: {
    homeLabel: 'Accueil',
    homeHref: '/fr',
    wissenLabel: 'Informations',
    wissenHref: '/fr/wissen',
    breadcrumbAriaLabel: "Fil d'Ariane",
    affiliateTitle: 'Utiliser GiroCode professionnellement – Recommandations logicielles',
    affiliateIntro:
      "Quiconque souhaite utiliser des GiroCodes de manière professionnelle sur ses factures aura tôt ou tard besoin d'un bon logiciel de comptabilité ou de facturation. Créer des GiroCodes manuellement convient pour un usage occasionnel – mais pour une facturation régulière, une solution automatisée est rapidement rentable.",
    affiliateRecommend: 'Nous recommandons deux outils éprouvés qui prennent en charge nativement les GiroCodes :',
    sevdeskName: 'sevDesk',
    sevdeskDesc:
      "sevDesk est l'une des principales plateformes comptables allemandes pour les indépendants et les PME. Les factures avec GiroCode généré automatiquement peuvent être créées en quelques clics et envoyées directement par e-mail.",
    sevdeskCta: 'Tester sevDesk gratuitement *',
    fastbillName: 'FastBill',
    fastbillDesc:
      "FastBill propose une plateforme de facturation simple et rapide. Avec FastBill, vous créez une facture professionnelle incluant un GiroCode en moins de deux minutes – directement dans le navigateur, sans installation.",
    fastbillCta: 'Tester FastBill gratuitement *',
    affiliateNote:
      "* Lien affilié – Si vous achetez via ce lien, nous percevons une petite commission sans frais supplémentaires pour vous.",
    generatorNote: "Pour un usage occasionnel, nous recommandons notre",
    generatorLink: 'générateur de GiroCode gratuit',
    generatorHref: '/fr',
    generatorSuffix: '– entièrement local, sans inscription.',
    ctaLabel: 'Créer un GiroCode maintenant',
    ctaHref: '/fr',
    relatedTitle: 'Voir aussi',
    disclaimer:
      "* Divulgation affilié : Les liens marqués d'un * sont des liens affiliés. Si vous achetez via ces liens, nous percevons une petite commission – sans frais supplémentaires pour vous.",
  },
  es: {
    homeLabel: 'Inicio',
    homeHref: '/es',
    wissenLabel: 'Información',
    wissenHref: '/es/wissen',
    breadcrumbAriaLabel: 'Ruta de navegación',
    affiliateTitle: 'Usar GiroCode profesionalmente – Recomendaciones de software',
    affiliateIntro:
      'Quien quiera usar GiroCodes de forma profesional en sus facturas necesitará tarde o temprano un buen software de contabilidad o facturación. Crear GiroCodes manualmente es adecuado para uso ocasional, pero para facturación regular, una solución automatizada se amortiza rápidamente.',
    affiliateRecommend: 'Recomendamos dos herramientas probadas que admiten GiroCodes de forma nativa:',
    sevdeskName: 'sevDesk',
    sevdeskDesc:
      'sevDesk es una de las principales plataformas de contabilidad alemanas para autónomos y pymes. Las facturas con GiroCode generado automáticamente se pueden crear en pocos clics y enviarse directamente por correo electrónico.',
    sevdeskCta: 'Probar sevDesk gratis *',
    fastbillName: 'FastBill',
    fastbillDesc:
      'FastBill ofrece una plataforma de facturación simple y rápida. Con FastBill puedes crear una factura profesional con GiroCode en menos de dos minutos, directamente en el navegador, sin instalación.',
    fastbillCta: 'Probar FastBill gratis *',
    affiliateNote:
      '* Enlace de afiliado – Si compras a través de este enlace, recibimos una pequeña comisión sin coste adicional para ti.',
    generatorNote: 'Para uso ocasional, recomendamos nuestro',
    generatorLink: 'generador de GiroCode gratuito',
    generatorHref: '/es',
    generatorSuffix: '– completamente local, sin registro.',
    ctaLabel: 'Crear un GiroCode ahora',
    ctaHref: '/es',
    relatedTitle: 'Artículos relacionados',
    disclaimer:
      '* Divulgación: Los enlaces marcados con * son enlaces de afiliado. Si compras a través de estos enlaces, recibimos una pequeña comisión sin coste adicional para ti.',
  },
} as const;

export function KnowledgeLayout({
  breadcrumbCurrent,
  badge,
  title,
  lead,
  children,
  relatedArticles,
  locale = 'de',
}: KnowledgeLayoutProps) {
  const t = i18n[locale];

  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">

        {/* Breadcrumb */}
        <nav aria-label={t.breadcrumbAriaLabel} className="mb-6 text-xs text-slate-500">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link href={t.homeHref} className="text-sky-400 hover:text-sky-300">
                {t.homeLabel}
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li>
              <Link href={t.wissenHref} className="text-sky-400 hover:text-sky-300">
                {t.wissenLabel}
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li className="text-slate-400">{breadcrumbCurrent}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            {badge}
          </p>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
              {title}
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              {lead}
            </p>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          {children}

          {/* Affiliate Cards Section */}
          <section aria-labelledby="kl-affiliate" className="mt-10">
            <h2 id="kl-affiliate">{t.affiliateTitle}</h2>
            <p>{t.affiliateIntro}</p>
            <p>{t.affiliateRecommend}</p>

            <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-5 transition-colors duration-200 hover:bg-[#1a1d25]">
                <h3 className="mb-2 text-base font-bold text-[#e8eaf0]">{t.sevdeskName}</h3>
                <p className="mb-4 text-sm text-[#9aa1b6]">{t.sevdeskDesc}</p>
                <a
                  href="https://www.awin1.com/cread.php?awinmid=15944&awinaffid=2793610"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="btn-affiliate inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold text-white"
                  style={{ color: '#ffffff' }}
                >
                  {t.sevdeskCta}
                </a>
              </div>

              <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-5 transition-colors duration-200 hover:bg-[#1a1d25]">
                <h3 className="mb-2 text-base font-bold text-[#e8eaf0]">{t.fastbillName}</h3>
                <p className="mb-4 text-sm text-[#9aa1b6]">{t.fastbillDesc}</p>
                <a
                  href="https://www.awin1.com/cread.php?awinmid=20766&awinaffid=2793610"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="btn-affiliate inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold text-white"
                  style={{ color: '#ffffff' }}
                >
                  {t.fastbillCta}
                </a>
              </div>
            </div>

            <p className="text-xs text-slate-500">{t.affiliateNote}</p>
            <p className="mt-4">
              {t.generatorNote}{' '}
              <Link href={t.generatorHref} className="text-sky-400 underline hover:text-sky-300">
                {t.generatorLink}
              </Link>{' '}
              {t.generatorSuffix}
            </p>
          </section>

          {/* Footer: CTA + Related Articles + Disclaimer */}
          <div className="not-prose mt-10 flex flex-col gap-8 border-t border-slate-800 pt-8">

            {/* CTA Button */}
            <div>
              <Link
                href={t.ctaHref}
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,197,94,0.4)]"
                style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#ffffff' }}
              >
                {t.ctaLabel}
                <span aria-hidden>→</span>
              </Link>
            </div>

            {/* Related Articles as Card Grid */}
            {relatedArticles.length > 0 && (
              <div>
                <h2 className="mb-4 text-base font-bold text-[#e8eaf0]">{t.relatedTitle}</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {relatedArticles.map((article) => (
                    <Link
                      key={article.href}
                      href={article.href}
                      className="group flex items-center justify-between rounded-xl border border-[#1f2431] bg-[#121318] px-4 py-3 text-sm font-medium text-[#9aa1b6] transition-all duration-200 hover:bg-[#1a1d25] hover:border-emerald-500/25 hover:text-[#e8eaf0] hover:-translate-y-0.5"
                    >
                      <span>{article.label}</span>
                      <span className="ml-2 text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Affiliate Disclaimer */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3 text-xs text-slate-400">
              <strong className="text-slate-300">*</strong> {t.disclaimer.replace(/^\*\s*/, '')}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
