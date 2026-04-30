import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The History of GiroCode – From Paper to QR Scan',
  description:
    'How the GiroCode was created: from the beginnings of the EPC standard in 2012 to its widespread adoption in Germany. The story of SEPA-QR evolution.',
  alternates: {
    canonical: 'https://www.girocodegenerator.com/en/blog/geschichte-des-girocodes',
    languages: {
      de: 'https://www.girocodegenerator.com/blog/geschichte-des-girocodes',
      en: 'https://www.girocodegenerator.com/en/blog/geschichte-des-girocodes',
      fr: 'https://www.girocodegenerator.com/fr/blog/geschichte-des-girocodes',
      es: 'https://www.girocodegenerator.com/es/blog/geschichte-des-girocodes',
    },
  },
};

export default function GeschichteEnPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <nav className="mb-8 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/en" className="hover:text-slate-300">Home</Link>
          <span>/</span>
          <Link href="/en/blog" className="hover:text-slate-300">Blog</Link>
          <span>/</span>
          <span className="text-slate-400">History of GiroCode</span>
        </nav>

        <header className="mb-10 space-y-4">
          <time dateTime="2026-03-15" className="text-xs text-slate-500">15 March 2026</time>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl lg:text-4xl">
            The History of GiroCode – From Paper to QR Scan
          </h1>
          <p className="text-base leading-relaxed text-slate-400 md:text-lg">
            The GiroCode appears on invoices and payment slips as a matter of course today.
            But its journey from idea to widespread use took over a decade.
          </p>
        </header>

        <article className="space-y-10 text-sm leading-relaxed text-slate-300 md:text-base">

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              The Beginnings: SEPA and the European Payments Council
            </h2>
            <p>
              To understand the history of GiroCode, one must first look at the broader
              context: the creation of the Single Euro Payments Area (SEPA). Since the early
              2000s, European banks had been working to make cross-border transfers within
              Europe as simple as domestic ones.
            </p>
            <p className="mt-3">
              In 2002, European banking associations founded the European Payments Council (EPC),
              which took over the coordination of this harmonisation. The EPC developed common
              standards for SEPA credit transfers (SCT) and SEPA direct debits (SDD). These
              standards created the technical foundation on which the GiroCode would later be built.
            </p>
            <p className="mt-3">
              The real challenge, however, was not the technology but usability: IBANs are long
              and error-prone when typed manually. A simple, machine-readable solution was needed.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              2012: The EPC Develops the QR Standard
            </h2>
            <p>
              In 2012, the European Payments Council first published the document "Quick Response
              Code – Guidelines to Enable the Data Capture for the Initiation of a SCT". This
              paper defined how a QR code must be structured to transmit all the information
              needed for a SEPA transfer.
            </p>
            <p className="mt-3">
              The technical specification was concise but precise: the QR code contains a
              line-oriented text payload in UTF-8 format. The first line always contains "BCD"
              (Business Contact Details), followed by version number, character set identifier,
              the transaction identifier "SCT" (SEPA Credit Transfer), BIC, recipient name,
              IBAN, amount, and payment reference.
            </p>
            <p className="mt-3">
              This standard – today known as EPC069-12 – has been valid in its current form
              since version 2.1 (2019) and has remained stable since then. This was a deliberate
              decision: a permanently valid standard gives banks and software developers
              planning certainty.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              2016–2018: Introduction in Germany
            </h2>
            <p>
              In Germany, the practical introduction of the EPC-QR-Code under the brand name
              "GiroCode" began between 2016 and 2018. The German Banking Industry Committee
              coordinated the introduction and chose the name "GiroCode" – based on the German
              term "Girokonto" (current account), which was meant to emphasise the everyday relevance.
            </p>
            <p className="mt-3">
              The Sparkasse group and the Volksbanken und Raiffeisenbanken were among the first
              German bank groups to equip their apps for scanning GiroCodes. Since these two
              groups together serve more than half of all German current accounts, basic
              coverage was established early on.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              GiroCode vs. Other QR Payment Standards Worldwide
            </h2>
            <div className="mt-4 space-y-3">
              {[
                {
                  region: 'Austria – Stuzza-QR',
                  text: 'Austria also uses the EPC standard, but calls it Stuzza-QR after the Studiengesellschaft für Zusammenarbeit im Zahlungsverkehr. Technically it is fully compatible with the German GiroCode.',
                },
                {
                  region: 'Switzerland – QR-Bill',
                  text: 'In 2020, Switzerland replaced the classic orange and red payment slips with the QR-Bill. It is based on a Swiss standard but is similarly structured to the EPC-QR.',
                },
                {
                  region: 'China – WeChat Pay / Alipay QR',
                  text: 'Chinese super-app systems also use QR codes, but these are tied to proprietary systems (WeChat Pay, Alipay) and are not interoperable with European banking standards.',
                },
                {
                  region: 'India – UPI QR',
                  text: "India's Unified Payments Interface (UPI) is a government-steered, platform-independent standard with QR codes. Like GiroCode, it is bank-neutral, but limited to the Indian market.",
                },
              ].map((item) => (
                <div key={item.region} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                  <h3 className="font-semibold text-slate-100">{item.region}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              The Future: QR Payments in Europe
            </h2>
            <p>
              The European Commission and the European Central Bank (ECB) are continuing to
              push the digitalisation of payments. With the digital euro – a central
              bank-issued digital currency (CBDC) – a new payment infrastructure is also
              planned that may also use QR codes as an input medium.
            </p>
            <p className="mt-3">
              The EPC is also working on extensions to the SEPA-QR standard, including:
            </p>
            <ul className="mt-3 space-y-2 pl-5">
              {[
                'Linking invoice PDFs directly in the QR code (proxy-based payment)',
                'Integration of Request-to-Pay (RTP) – a kind of digital payment request',
                'Support for instant transfers (SEPA Instant Credit Transfer)',
                'Improved security mechanisms against QR code manipulation (quishing)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 list-none">
                  <span className="mt-1 text-emerald-400 flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">Conclusion</h2>
            <p>
              From the EPC paper in 2012 to the Sparkasse app integration to today's
              ubiquitous use on invoices – the GiroCode has come a remarkable way. It is the
              prime example of a European standardisation that has actually made it into
              everyday life.
            </p>
            <p className="mt-3">
              For freelancers, associations, and businesses, the GiroCode is now an
              indispensable tool that makes payments faster, more accurate, and more convenient.
              And with free tools like the GiroCode Generator, creation takes less than a minute.
            </p>
            <div className="mt-6">
              <Link
                href="/en"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
              >
                Create your GiroCode for free →
              </Link>
            </div>
          </section>
        </article>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <Link href="/en/blog" className="text-sm text-slate-400 hover:text-slate-200">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
