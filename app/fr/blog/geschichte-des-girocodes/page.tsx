import type { Metadata } from 'next';
import Link from 'next/link';
import { AuthorBox, AuthorBoxEnd } from '../../../../components/AuthorBox';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: "L'histoire du GiroCode – Du document papier au scan QR",
  description:
    "Comment le GiroCode a été créé : des débuts de la norme EPC en 2012 à son adoption généralisée en Allemagne. L'histoire de l'évolution du SEPA-QR.",
  alternates: {
    canonical: `${SITE_URL}/fr/blog/geschichte-des-girocodes`,
    languages: {
      de: `${SITE_URL}/blog/geschichte-des-girocodes`,
      en: `${SITE_URL}/en/blog/geschichte-des-girocodes`,
      fr: `${SITE_URL}/fr/blog/geschichte-des-girocodes`,
      es: `${SITE_URL}/es/blog/geschichte-des-girocodes`,
      it: `${SITE_URL}/it/blog/geschichte-des-girocodes`,
    },
  },
};

export default function HistoireGiroCodeFrPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <nav className="mb-8 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/fr" className="hover:text-slate-300">Accueil</Link>
          <span>/</span>
          <Link href="/fr/blog" className="hover:text-slate-300">Blog</Link>
          <span>/</span>
          <span className="text-slate-400">Histoire du GiroCode</span>
        </nav>

        <header className="mb-10 space-y-4">
          <time dateTime="2026-03-15" className="text-xs text-slate-500">15 mars 2026</time>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl lg:text-4xl">
            L&apos;histoire du GiroCode – Du document papier au scan QR
          </h1>
          <p className="text-base leading-relaxed text-slate-400 md:text-lg">
            Le GiroCode est né du standard QR de l&apos;EPC publié par le Conseil européen des
            paiements en 2012 et a été déployé en Allemagne sous le nom de « GiroCode » par la
            Deutsche Kreditwirtschaft entre 2016 et 2018. Il permet de déclencher un virement
            SEPA en scannant un code QR, sans saisir l&apos;IBAN ni le montant. De la première
            idée à l&apos;adoption généralisée, il s&apos;est toutefois écoulé plus d&apos;une
            décennie – c&apos;est ce parcours que retrace cet article.
          </p>
        </header>

        <AuthorBox locale="fr" publishedDate="15 mars 2026" updatedDate="15 mars 2026" />

        <article className="space-y-10 text-sm leading-relaxed text-slate-300 md:text-base">

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Les débuts : SEPA et le Conseil européen des paiements
            </h2>
            <p>
              Pour comprendre l&apos;histoire du GiroCode, il faut d&apos;abord examiner le
              contexte plus large : la création de l&apos;espace unique de paiement en euros,
              SEPA (Single Euro Payments Area). Depuis le début des années 2000, les banques
              européennes travaillaient à rendre les virements transfrontaliers au sein de
              l&apos;Europe aussi simples que les virements nationaux.
            </p>
            <p className="mt-3">
              En 2002, des associations bancaires européennes ont fondé le Conseil européen des
              paiements (EPC), qui a pris en charge la coordination de cette harmonisation.
              L&apos;EPC a développé des normes communes pour les virements SEPA (SCT) et les
              prélèvements SEPA (SDD). Ces normes ont créé la base technique sur laquelle le
              GiroCode allait être construit.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              2012 : L&apos;EPC développe la norme QR
            </h2>
            <p>
              En 2012, le Conseil européen des paiements a publié pour la première fois le
              document « Quick Response Code – Guidelines to Enable the Data Capture for the
              Initiation of a SCT ». Ce document définissait comment un code QR devait être
              structuré pour transmettre toutes les informations nécessaires à un virement SEPA.
            </p>
            <p className="mt-3">
              La spécification technique était concise mais précise : le code QR contient un
              payload texte orienté lignes en format UTF-8. La première ligne contient toujours
              « BCD » (Business Contact Details), suivi du numéro de version, de
              l&apos;identifiant du jeu de caractères, de l&apos;identifiant de transaction
              « SCT », du BIC, du nom du bénéficiaire, de l&apos;IBAN, du montant et de la
              référence de paiement.
            </p>
            <p className="mt-3">
              Cette norme – aujourd&apos;hui connue sous le nom EPC069-12 – est maintenue par le
              Conseil européen des paiements dans un tableau de révisions : à la première
              publication V1.0 (2012) ont succédé V2.0 (2015) et V2.1 (2016), puis V3.0 (2022) et
              enfin la version actuellement en vigueur V3.1 (2024). La structure de base du payload
              est restée stable au fil des années.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              2016–2018 : Introduction en Allemagne
            </h2>
            <p>
              En Allemagne, l&apos;introduction pratique du code EPC-QR sous le nom de marque
              « GiroCode » a commencé entre 2016 et 2018. Le comité bancaire allemand a
              coordonné l&apos;introduction et a choisi le nom « GiroCode » – basé sur le
              terme allemand « Girokonto » (compte courant), censé souligner la pertinence
              quotidienne du code.
            </p>
            <p className="mt-3">
              Le groupe Sparkasse et les Volksbanken und Raiffeisenbanken ont été parmi les
              premiers groupes bancaires allemands à équiper leurs applications pour scanner
              les GiroCodes. Comme ces deux groupes servent ensemble plus de la moitié de tous
              les comptes courants allemands, la couverture de base a été assurée dès le début.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              GiroCode vs. autres normes de paiement QR dans le monde
            </h2>
            <div className="mt-4 space-y-3">
              {[
                { region: 'Autriche – Stuzza-QR', text: "L'Autriche utilise également la norme EPC, mais l'appelle Stuzza-QR. Techniquement, il est entièrement compatible avec le GiroCode allemand." },
                { region: 'Suisse – QR-Bill', text: "En 2020, la Suisse a remplacé les bulletins de versement orange et rouges par la QR-facture (QR-Bill), basée sur une norme suisse mais structurée de manière similaire au EPC-QR." },
                { region: 'Chine – WeChat Pay / Alipay QR', text: "Les systèmes de super-applications chinoises utilisent également des codes QR, mais ceux-ci sont liés à des systèmes propriétaires et ne sont pas interopérables avec les normes bancaires européennes." },
                { region: 'Inde – UPI QR', text: "L'interface de paiement unifiée (UPI) de l'Inde est une norme indépendante des plateformes avec des codes QR, neutre vis-à-vis des banques, mais limitée au marché indien." },
              ].map((item) => (
                <div key={item.region} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                  <h3 className="font-semibold text-slate-100">{item.region}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">Conclusion</h2>
            <p>
              Du document EPC de 2012 à l&apos;intégration dans l&apos;application Sparkasse
              jusqu&apos;à l&apos;utilisation omniprésente sur les factures aujourd&apos;hui
              – le GiroCode a parcouru un chemin remarquable. C&apos;est l&apos;exemple
              parfait d&apos;une standardisation européenne qui a réellement fait son entrée
              dans la vie quotidienne.
            </p>
            <div className="mt-6">
              <Link
                href="/fr"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
              >
                Créer votre GiroCode gratuitement →
              </Link>
            </div>
          </section>
        </article>

        <AuthorBoxEnd locale="fr" />

        {/* Essayez maintenant */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <h2 className="mb-4 text-lg font-bold text-[#e8eaf0]">Essayez maintenant</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: '⚡', title: 'Générateur GiroCode', desc: 'Créez un GiroCode gratuitement – localement dans le navigateur.', cta: 'Vers le générateur →', href: '/fr' },
              { icon: '🔍', title: 'Scanner GiroCode', desc: 'Scannez un GiroCode et lisez les données de paiement.', cta: 'Vers le scanner →', href: '/fr/scanner' },
              { icon: '📦', title: 'Générateur en masse', desc: 'Créez plusieurs GiroCodes à la fois via importation CSV.', cta: 'Vers le générateur en masse →', href: '/fr/bulk' },
            ].map((item) => (
              <Link key={item.href} href={item.href}
                className="group flex flex-col gap-2 rounded-xl border border-[#1f2431] bg-[#121318] p-4 transition-all duration-200 hover:-translate-y-[3px] hover:border-[#22c55e40] hover:shadow-[0_8px_24px_rgba(34,197,94,0.08)] motion-reduce:transform-none">
                <span className="text-2xl" aria-hidden>{item.icon}</span>
                <h3 className="font-bold text-[#e8eaf0]">{item.title}</h3>
                <p className="text-sm text-[#8b90a0]">{item.desc}</p>
                <span className="mt-auto text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:translate-x-1">{item.cta}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Link href="/fr/blog" className="text-sm text-slate-400 hover:text-slate-200">
            ← Retour au blog
          </Link>
        </div>
      </div>
    </main>
  );
}
