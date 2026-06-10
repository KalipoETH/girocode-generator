import type { MetadataRoute } from 'next';

const BASE = 'https://www.girocodegenerator.com';
const LOCALES = ['en', 'fr', 'es', 'it'] as const;
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

const BANKS_AT = [
  'erste-bank',
  'raiffeisen-oesterreich',
  'bank-austria',
  'bawag',
  'volksbank-oesterreich',
  'hypo-oesterreich',
  'oberbank',
  'bks-bank',
] as const;

const BANKS_CH = [
  'ubs',
  'zuercher-kantonalbank',
  'raiffeisen-schweiz',
  'postfinance',
  'credit-suisse-ubs',
  'cantonal-banks',
] as const;

const BANKS_DE_REGIONAL = [
  'hamburger-sparkasse',
  'berliner-sparkasse',
  'sparkasse-koeln-bonn',
  'ostsaechsische-sparkasse',
  'kreissparkasse',
  'volksbank-raiffeisenbank',
  'stadtsparkasse',
  'ing-diba',
  'hypovereinsbank',
  'santander',
] as const;

const USE_CASES = [
  'freelancer',
  'verein',
  'handwerker',
  'spenden',
  'kleinunternehmen',
  'privatverkauf',
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
    entry('/it', 0.9, 'monthly', now),

    // ── Transaktionale Landingpages (EN) ───────────────────────────────────
    entry('/en/create-epc-qr-code', 0.9, 'monthly', now),
    entry('/en/generate-sepa-qr-code', 0.9, 'monthly', now),
    entry('/en/free-sepa-qr-code', 0.9, 'monthly', now),
    entry('/en/sepa-qr-code-generator-online', 0.9, 'monthly', now),
    entry('/en/epc-qr-code-uk', 0.9, 'monthly', now),
    entry('/en/epc-qr-code-ireland', 0.9, 'monthly', now),
    entry('/en/mandatory-sepa-qr-invoice', 0.9, 'monthly', now),

    // ── Transaktionale Landingpages (FR) ───────────────────────────────────
    entry('/fr/creer-code-qr-epc', 0.9, 'monthly', now),
    entry('/fr/generateur-qr-virement-sepa', 0.9, 'monthly', now),
    entry('/fr/qr-code-sepa-gratuit', 0.9, 'monthly', now),
    entry('/fr/facture-electronique-qr-obligatoire', 0.9, 'monthly', now),

    // ── Transaktionale Landingpages (ES) ───────────────────────────────────
    entry('/es/crear-codigo-qr-epc', 0.9, 'monthly', now),
    entry('/es/generador-qr-transferencia-sepa', 0.9, 'monthly', now),
    entry('/es/codigo-qr-sepa-gratis', 0.9, 'monthly', now),
    entry('/es/factura-electronica-qr-obligatorio', 0.9, 'monthly', now),

    // ── Italienische Landingpages ──────────────────────────────────────────
    entry('/it/generatore-qr-epc', 0.8, 'monthly', now),
    entry('/it/codice-qr-sepa-gratis', 0.8, 'monthly', now),
    entry('/it/qr-code-fattura-sepa', 0.8, 'monthly', now),
    entry('/it/banche-italiane-qr-epc', 0.8, 'monthly', now),

    // ── ViDA Pflicht (DE) ──────────────────────────────────────────────────
    entry('/sepa-qr-pflicht', 0.8, 'monthly', now),

    // ── Rechnungs-Editor ───────────────────────────────────────────────────
    entry('/rechnungs-editor', 0.9, 'monthly', now),
    entry('/en/rechnungs-editor', 0.8, 'monthly', now),
    entry('/fr/rechnungs-editor', 0.8, 'monthly', now),
    entry('/es/rechnungs-editor', 0.8, 'monthly', now),

    // ── Rechnungs-Landingpages ─────────────────────────────────────────────
    entry('/rechnung-erstellen', 0.8, 'monthly', now),
    entry('/en/rechnung-erstellen', 0.7, 'monthly', now),
    entry('/fr/rechnung-erstellen', 0.7, 'monthly', now),
    entry('/es/rechnung-erstellen', 0.7, 'monthly', now),

    entry('/rechnungsgenerator', 0.8, 'monthly', now),
    entry('/en/rechnungsgenerator', 0.7, 'monthly', now),
    entry('/fr/rechnungsgenerator', 0.7, 'monthly', now),
    entry('/es/rechnungsgenerator', 0.7, 'monthly', now),

    entry('/kleinunternehmer-rechnung', 0.8, 'monthly', now),
    entry('/en/kleinunternehmer-rechnung', 0.7, 'monthly', now),
    entry('/fr/kleinunternehmer-rechnung', 0.7, 'monthly', now),
    entry('/es/kleinunternehmer-rechnung', 0.7, 'monthly', now),

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

    // ── API-Zugang ─────────────────────────────────────────────────────────
    entry('/api-access', 0.7, 'monthly', now),
    entry('/en/api-access', 0.7, 'monthly', now),
    entry('/fr/api-access', 0.7, 'monthly', now),
    entry('/es/api-access', 0.7, 'monthly', now),

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

    // ── Vergleichsseiten ───────────────────────────────────────────────────
    entry('/girocode-vs-paypal', 0.8, 'monthly', now),
    entry('/girocode-vs-bankueberweisung', 0.8, 'monthly', now),
    entry('/girocode-vs-lastschrift', 0.8, 'monthly', now),

    entry('/en/girocode-vs-paypal', 0.7, 'monthly', now),
    entry('/en/girocode-vs-bankueberweisung', 0.7, 'monthly', now),
    entry('/en/girocode-vs-lastschrift', 0.7, 'monthly', now),

    entry('/fr/girocode-vs-paypal', 0.7, 'monthly', now),
    entry('/fr/girocode-vs-bankueberweisung', 0.7, 'monthly', now),
    entry('/fr/girocode-vs-lastschrift', 0.7, 'monthly', now),

    entry('/es/girocode-vs-paypal', 0.7, 'monthly', now),
    entry('/es/girocode-vs-bankueberweisung', 0.7, 'monthly', now),
    entry('/es/girocode-vs-lastschrift', 0.7, 'monthly', now),

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

    // ── Alternative Namen (GiroCode Synonyme) ─────────────────────────────
    entry('/bezahlcode', 0.8, 'monthly', now),
    entry('/en/bezahlcode', 0.8, 'monthly', now),
    entry('/fr/bezahlcode', 0.7, 'monthly', now),
    entry('/es/bezahlcode', 0.7, 'monthly', now),

    entry('/sepa-qr-code', 0.8, 'monthly', now),
    entry('/en/sepa-qr-code', 0.8, 'monthly', now),
    entry('/fr/sepa-qr-code', 0.7, 'monthly', now),
    entry('/es/sepa-qr-code', 0.7, 'monthly', now),

    entry('/epc-qr-code', 0.8, 'monthly', now),
    entry('/en/epc-qr-code', 0.8, 'monthly', now),
    entry('/fr/epc-qr-code', 0.7, 'monthly', now),
    entry('/es/epc-qr-code', 0.7, 'monthly', now),

    entry('/iban-qr-code', 0.8, 'monthly', now),
    entry('/en/iban-qr-code', 0.8, 'monthly', now),
    entry('/fr/iban-qr-code', 0.7, 'monthly', now),
    entry('/es/iban-qr-code', 0.7, 'monthly', now),

    entry('/qr-code-ueberweisung', 0.8, 'monthly', now),
    entry('/en/qr-code-ueberweisung', 0.7, 'monthly', now),
    entry('/fr/qr-code-ueberweisung', 0.7, 'monthly', now),
    entry('/es/qr-code-ueberweisung', 0.7, 'monthly', now),

    // ── Internationale Keyword-Landingpages ────────────────────────────────
    entry('/en/epc-qr-code-generator', 0.8, 'monthly', now),
    entry('/en/sepa-payment-qr-code', 0.8, 'monthly', now),

    // ── English Country EPC QR Pages ───────────────────────────────────────
    entry('/en/epc-qr-code-belgium', 0.8, 'monthly', now),
    entry('/en/epc-qr-code-netherlands', 0.8, 'monthly', now),
    entry('/en/epc-qr-code-finland', 0.8, 'monthly', now),
    entry('/en/epc-qr-code-austria', 0.8, 'monthly', now),

    // ── English Use-Case EPC QR Pages ──────────────────────────────────────
    entry('/en/epc-qr-code-for-invoices', 0.8, 'monthly', now),
    entry('/en/epc-qr-code-for-donations', 0.8, 'monthly', now),
    entry('/en/epc-qr-code-for-freelancers', 0.8, 'monthly', now),
    entry('/en/sepa-credit-transfer-qr', 0.8, 'monthly', now),
    entry('/fr/generateur-qr-code-sepa', 0.8, 'monthly', now),
    entry('/fr/qr-code-virement-bancaire', 0.8, 'monthly', now),
    entry('/es/generador-qr-sepa', 0.8, 'monthly', now),
    entry('/es/qr-transferencia-bancaria', 0.8, 'monthly', now),

    // ── French Country EPC QR Pages ────────────────────────────────────────
    entry('/fr/code-qr-epc-france', 0.8, 'monthly', now),
    entry('/fr/code-qr-epc-belgique', 0.8, 'monthly', now),
    entry('/fr/code-qr-epc-luxembourg', 0.8, 'monthly', now),
    entry('/fr/code-qr-epc-suisse', 0.8, 'monthly', now),

    // ── French Use-Case EPC QR Pages ─────────────────────────────────────
    entry('/fr/code-qr-epc-facture', 0.8, 'monthly', now),
    entry('/fr/code-qr-epc-don', 0.8, 'monthly', now),
    entry('/fr/code-qr-sepa-freelance', 0.8, 'monthly', now),

    // ── Spanish Country EPC QR Pages ─────────────────────────────────────
    entry('/es/codigo-qr-epc-espana', 0.8, 'monthly', now),

    // ── Spanish Use-Case EPC QR Pages ────────────────────────────────────
    entry('/es/codigo-qr-epc-facturas', 0.8, 'monthly', now),
    entry('/es/codigo-qr-sepa-autonomos', 0.8, 'monthly', now),
    entry('/es/codigo-qr-donaciones', 0.8, 'monthly', now),
    entry('/stuzza-qr-code', 0.8, 'monthly', now),

    // ── Problem-Seiten / Troubleshooting ──────────────────────────────────
    entry('/girocode-funktioniert-nicht', 0.7, 'monthly', now),
    entry('/en/girocode-funktioniert-nicht', 0.7, 'monthly', now),
    entry('/fr/girocode-funktioniert-nicht', 0.6, 'monthly', now),
    entry('/es/girocode-funktioniert-nicht', 0.6, 'monthly', now),

    entry('/girocode-scannen-anleitung', 0.7, 'monthly', now),
    entry('/en/girocode-scannen-anleitung', 0.7, 'monthly', now),
    entry('/fr/girocode-scannen-anleitung', 0.6, 'monthly', now),
    entry('/es/girocode-scannen-anleitung', 0.6, 'monthly', now),

    entry('/girocode-erstellen-anleitung', 0.7, 'monthly', now),
    entry('/en/girocode-erstellen-anleitung', 0.7, 'monthly', now),
    entry('/fr/girocode-erstellen-anleitung', 0.6, 'monthly', now),
    entry('/es/girocode-erstellen-anleitung', 0.6, 'monthly', now),

    // ── Google Workspace Add-on ────────────────────────────────────────────
    entry('/google-workspace-addon', 0.6, 'monthly', now),
    entry('/en/google-workspace-addon', 0.6, 'monthly', now),
    entry('/fr/google-workspace-addon', 0.5, 'monthly', now),
    entry('/es/google-workspace-addon', 0.5, 'monthly', now),

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

    // ── Bank-Landingpages (AT) ─────────────────────────────────────────────
    ...BANKS_AT.map((bank) => entry(`/${bank}`, 0.7, 'monthly', now)),

    // ── Bank-Landingpages (AT) EN/FR/ES ───────────────────────────────────
    ...BANKS_AT.flatMap((bank) =>
      LOCALES.map((locale) => entry(`/${locale}/${bank}`, 0.6, 'monthly', now))
    ),

    // ── Bank-Landingpages (CH) ─────────────────────────────────────────────
    ...BANKS_CH.map((bank) => entry(`/${bank}`, 0.7, 'monthly', now)),

    // ── Bank-Landingpages (CH) EN/FR/ES ───────────────────────────────────
    ...BANKS_CH.flatMap((bank) =>
      LOCALES.map((locale) => entry(`/${locale}/${bank}`, 0.6, 'monthly', now))
    ),

    // ── Bank-Landingpages (DE Regional) ───────────────────────────────────
    ...BANKS_DE_REGIONAL.map((bank) => entry(`/${bank}`, 0.7, 'monthly', now)),

    // ── Bank-Landingpages (DE Regional) EN/FR/ES ──────────────────────────
    ...BANKS_DE_REGIONAL.flatMap((bank) =>
      LOCALES.map((locale) => entry(`/${locale}/${bank}`, 0.6, 'monthly', now))
    ),

    // ── Use-Case Landingpages (DE) ─────────────────────────────────────────
    ...USE_CASES.map((useCase) => entry(`/${useCase}`, 0.8, 'monthly', now)),

    // ── Use-Case Landingpages (EN/FR/ES) ───────────────────────────────────
    ...USE_CASES.flatMap((useCase) =>
      LOCALES.map((locale) => entry(`/${locale}/${useCase}`, 0.8, 'monthly', now))
    ),
  ];
}
