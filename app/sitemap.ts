import type { MetadataRoute } from 'next';

const BASE = 'https://www.girocodegenerator.com';
const LOCALES = ['en', 'fr', 'es'] as const;
const BANKS = [
  'sparkasse',
  'volksbank',
  'deutsche-bank',
  'commerzbank',
  'ing',
  'dkb',
  'postbank',
  'targobank',
  'n26',
  'comdirect',
] as const;

type Entry = MetadataRoute.Sitemap[number];

function entry(
  path: string,
  priority: number,
  changeFrequency: Entry['changeFrequency'] = 'monthly',
  lastModified: Date = new Date(),
): Entry {
  return { url: `${BASE}${path}`, lastModified, changeFrequency, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // ── Hauptseiten ────────────────────────────────────────────────────────
    entry('', 1, 'monthly', now),
    entry('/en', 0.9, 'monthly', now),
    entry('/fr', 0.9, 'monthly', now),
    entry('/es', 0.9, 'monthly', now),

    // ── Scanner ────────────────────────────────────────────────────────────
    entry('/scanner', 0.8, 'monthly', now),
    entry('/en/scanner', 0.8, 'monthly', now),
    entry('/fr/scanner', 0.8, 'monthly', now),
    entry('/es/scanner', 0.8, 'monthly', now),

    // ── Bulk ───────────────────────────────────────────────────────────────
    entry('/bulk', 0.7, 'monthly', now),
    entry('/en/bulk', 0.7, 'monthly', now),
    entry('/fr/bulk', 0.7, 'monthly', now),
    entry('/es/bulk', 0.7, 'monthly', now),

    // ── API-Docs ───────────────────────────────────────────────────────────
    entry('/api-docs', 0.6, 'monthly', now),
    entry('/en/api-docs', 0.6, 'monthly', now),
    entry('/fr/api-docs', 0.6, 'monthly', now),
    entry('/es/api-docs', 0.6, 'monthly', now),

    // ── Wissen Übersicht ───────────────────────────────────────────────────
    entry('/wissen', 0.8, 'monthly', now),
    entry('/en/wissen', 0.7, 'monthly', now),
    entry('/fr/wissen', 0.7, 'monthly', now),
    entry('/es/wissen', 0.7, 'monthly', now),

    // ── Wissen – girocode ──────────────────────────────────────────────────
    entry('/wissen/girocode', 0.8, 'monthly', now),
    entry('/en/wissen/girocode', 0.8, 'monthly', now),
    entry('/fr/wissen/girocode', 0.7, 'monthly', now),
    entry('/es/wissen/girocode', 0.7, 'monthly', now),

    // ── Wissen – epc-standard ──────────────────────────────────────────────
    entry('/wissen/epc-standard', 0.8, 'monthly', now),
    entry('/en/wissen/epc-standard', 0.8, 'monthly', now),
    entry('/fr/wissen/epc-standard', 0.7, 'monthly', now),
    entry('/es/wissen/epc-standard', 0.7, 'monthly', now),

    // ── Wissen – iban-bic ──────────────────────────────────────────────────
    entry('/wissen/iban-bic', 0.8, 'monthly', now),
    entry('/en/wissen/iban-bic', 0.8, 'monthly', now),
    entry('/fr/wissen/iban-bic', 0.7, 'monthly', now),
    entry('/es/wissen/iban-bic', 0.7, 'monthly', now),

    // ── Wissen – betrag-und-zweck ──────────────────────────────────────────
    entry('/wissen/betrag-und-zweck', 0.7, 'monthly', now),
    entry('/en/wissen/betrag-und-zweck', 0.7, 'monthly', now),
    entry('/fr/wissen/betrag-und-zweck', 0.7, 'monthly', now),
    entry('/es/wissen/betrag-und-zweck', 0.7, 'monthly', now),

    // ── Wissen – rechnung ──────────────────────────────────────────────────
    entry('/wissen/rechnung', 0.7, 'monthly', now),
    entry('/en/wissen/rechnung', 0.7, 'monthly', now),
    entry('/fr/wissen/rechnung', 0.7, 'monthly', now),
    entry('/es/wissen/rechnung', 0.7, 'monthly', now),

    // ── Wissen – banking-apps ──────────────────────────────────────────────
    entry('/wissen/banking-apps', 0.7, 'monthly', now),
    entry('/en/wissen/banking-apps', 0.7, 'monthly', now),
    entry('/fr/wissen/banking-apps', 0.7, 'monthly', now),
    entry('/es/wissen/banking-apps', 0.7, 'monthly', now),

    // ── Wissen – scannen ───────────────────────────────────────────────────
    entry('/wissen/scannen', 0.6, 'monthly', now),
    entry('/en/wissen/scannen', 0.6, 'monthly', now),
    entry('/fr/wissen/scannen', 0.6, 'monthly', now),
    entry('/es/wissen/scannen', 0.6, 'monthly', now),

    // ── Blog ───────────────────────────────────────────────────────────────
    entry('/blog', 0.7, 'weekly', now),
    entry('/en/blog', 0.7, 'weekly', now),
    entry('/fr/blog', 0.7, 'weekly', now),
    entry('/es/blog', 0.7, 'weekly', now),

    entry('/blog/freelancer-rechnungen-qr-code', 0.7, 'monthly', now),
    entry('/blog/geschichte-des-girocodes', 0.7, 'monthly', now),
    entry('/blog/iban-sicherheit', 0.7, 'monthly', now),

    entry('/en/blog/freelancer-rechnungen-qr-code', 0.7, 'monthly', now),
    entry('/en/blog/geschichte-des-girocodes', 0.7, 'monthly', now),
    entry('/en/blog/iban-sicherheit', 0.7, 'monthly', now),

    entry('/fr/blog/freelancer-rechnungen-qr-code', 0.7, 'monthly', now),
    entry('/fr/blog/geschichte-des-girocodes', 0.7, 'monthly', now),
    entry('/fr/blog/iban-sicherheit', 0.7, 'monthly', now),

    entry('/es/blog/freelancer-rechnungen-qr-code', 0.7, 'monthly', now),
    entry('/es/blog/geschichte-des-girocodes', 0.7, 'monthly', now),
    entry('/es/blog/iban-sicherheit', 0.7, 'monthly', now),

    // ── Über uns ───────────────────────────────────────────────────────────
    entry('/ueber-uns', 0.6, 'monthly', now),
    entry('/en/ueber-uns', 0.5, 'monthly', now),
    entry('/fr/ueber-uns', 0.5, 'monthly', now),
    entry('/es/ueber-uns', 0.5, 'monthly', now),

    // ── Kontakt ────────────────────────────────────────────────────────────
    entry('/kontakt', 0.5, 'yearly', now),
    entry('/en/kontakt', 0.5, 'yearly', now),
    entry('/fr/kontakt', 0.5, 'yearly', now),
    entry('/es/kontakt', 0.5, 'yearly', now),

    // ── Für Entwickler ─────────────────────────────────────────────────────
    entry('/fuer-entwickler', 0.7, 'monthly', now),
    entry('/en/fuer-entwickler', 0.6, 'monthly', now),
    entry('/fr/fuer-entwickler', 0.6, 'monthly', now),
    entry('/es/fuer-entwickler', 0.6, 'monthly', now),

    // ── Impressum ──────────────────────────────────────────────────────────
    entry('/impressum', 0.3, 'yearly', now),
    entry('/en/impressum', 0.3, 'yearly', now),
    entry('/fr/impressum', 0.3, 'yearly', now),
    entry('/es/impressum', 0.3, 'yearly', now),

    // ── Datenschutz ────────────────────────────────────────────────────────
    entry('/datenschutz', 0.3, 'yearly', now),
    entry('/en/datenschutz', 0.3, 'yearly', now),
    entry('/fr/datenschutz', 0.3, 'yearly', now),
    entry('/es/datenschutz', 0.3, 'yearly', now),

    // ── Bank-Landingpages (DE) ─────────────────────────────────────────────
    ...BANKS.map((bank) => entry(`/${bank}`, 0.7, 'monthly', now)),

    // ── Bank-Landingpages (EN/FR/ES) → Redirects auf DE, trotzdem in Sitemap
    ...BANKS.flatMap((bank) =>
      LOCALES.map((locale) => entry(`/${locale}/${bank}`, 0.6, 'monthly', now))
    ),
  ];
}
