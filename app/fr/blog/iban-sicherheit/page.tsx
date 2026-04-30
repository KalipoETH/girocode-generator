import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Sécurité IBAN : ce que vous devez savoir sur les virements",
  description:
    "Est-il sécurisé de partager son IBAN ? Que peut faire quelqu'un avec votre IBAN ? Tout sur la sécurité IBAN, la confidentialité GiroCode et les virements sûrs.",
  alternates: {
    canonical: 'https://www.girocodegenerator.com/fr/blog/iban-sicherheit',
    languages: {
      de: 'https://www.girocodegenerator.com/blog/iban-sicherheit',
      en: 'https://www.girocodegenerator.com/en/blog/iban-sicherheit',
      fr: 'https://www.girocodegenerator.com/fr/blog/iban-sicherheit',
      es: 'https://www.girocodegenerator.com/es/blog/iban-sicherheit',
    },
  },
};

export default function IbanSecuriteFrPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <nav className="mb-8 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/fr" className="hover:text-slate-300">Accueil</Link>
          <span>/</span>
          <Link href="/fr/blog" className="hover:text-slate-300">Blog</Link>
          <span>/</span>
          <span className="text-slate-400">Sécurité IBAN</span>
        </nav>

        <header className="mb-10 space-y-4">
          <time dateTime="2026-04-01" className="text-xs text-slate-500">1 avril 2026</time>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 md:text-3xl lg:text-4xl">
            Sécurité IBAN : ce que vous devez savoir sur les virements
          </h1>
          <p className="text-base leading-relaxed text-slate-400 md:text-lg">
            De nombreuses personnes hésitent à communiquer leur IBAN. Que peut-on réellement
            faire avec votre IBAN – et que ne peut-on pas faire ?
          </p>
        </header>

        <article className="space-y-10 text-sm leading-relaxed text-slate-300 md:text-base">

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Que peut faire quelqu&apos;un avec mon IBAN ?
            </h2>
            <p>
              La réponse courte : pas grand-chose qui pourrait vous nuire – du moins pas sans
              votre connaissance. L&apos;IBAN (International Bank Account Number) identifie
              votre compte bancaire de manière unique, tout comme une adresse postale identifie
              votre domicile. Et comme pour une adresse : toute personne souhaitant vous
              envoyer de l&apos;argent en a besoin.
            </p>
            <ul className="mt-3 space-y-2">
              {[
                { label: 'Vous virer de l\'argent', safe: true, text: 'N\'importe qui peut vous faire un virement – c\'est le but d\'un IBAN et ce n\'est pas un problème de sécurité.' },
                { label: 'Initier un prélèvement SEPA (avec restrictions)', safe: false, text: 'Un prélèvement SEPA nécessite en plus un mandat écrit. Sans ce mandat, un prélèvement est impossible – et s\'il a lieu quand même, la banque doit le rembourser.' },
                { label: 'Créer un GiroCode', safe: true, text: 'Quelqu\'un pourrait créer un GiroCode avec votre IBAN – cela signifie seulement qu\'il peut vous demander un paiement.' },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3 list-none rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                  <span className={`mt-0.5 flex-shrink-0 font-bold ${item.safe ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {item.safe ? '✓' : '⚠'}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-100">{item.label}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Le GiroCode est-il sécurisé ?
            </h2>
            <div className="mt-4 space-y-3">
              {[
                { title: 'Aucun prélèvement possible', text: 'Un GiroCode est une demande de paiement, pas un mandat de prélèvement. Il ne contient aucune information permettant un prélèvement.' },
                { title: 'Confirmation requise par le payeur', text: 'Même si quelqu\'un scanne un GiroCode, il doit confirmer activement le virement avec un TAN, Face ID ou empreinte digitale. Aucun prélèvement automatique n\'est possible.' },
                { title: 'Pas de données secrètes dans le code', text: 'Un GiroCode ne contient que des données que vous publiez déjà sur une facture : nom, IBAN, montant, référence. Pas de codes PIN, pas de mots de passe.' },
                { title: 'Norme EPC avec correction d\'erreurs', text: 'Le code QR utilise le niveau de correction d\'erreurs M, ce qui signifie qu\'il reste lisible de manière fiable même avec de légères dommages.' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                  <h3 className="font-semibold text-slate-100">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">
              Hameçonnage par code QR (Quishing) – comment le repérer
            </h2>
            <ul className="mt-3 space-y-3">
              {[
                { icon: '🔍', tip: 'Vérifier les données du bénéficiaire', text: 'Après le scan, vérifiez toujours le nom et l\'IBAN du bénéficiaire pré-remplis dans votre application bancaire avant de confirmer.' },
                { icon: '📌', tip: 'Se méfier des autocollants physiques', text: 'Les codes QR qui semblent être des autocollants collés sur d\'autres codes peuvent être manipulés. Vérifiez si le code est directement imprimé ou collé par-dessus.' },
                { icon: '🏦', tip: 'Ouvrir directement l\'application bancaire', text: 'Ouvrez toujours votre application bancaire directement – jamais via un lien dans un e-mail ou un SMS. Scannez le GiroCode uniquement depuis l\'application.' },
                { icon: '📧', tip: 'Vérifier les factures par e-mail', text: 'Pour les factures par e-mail : vérifiez que l\'expéditeur et le contenu correspondent à la facture attendue. En cas de doute, contactez l\'expéditeur par téléphone.' },
              ].map((item) => (
                <li key={item.tip} className="flex items-start gap-3 list-none">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-slate-100">{item.tip}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-50">Conclusion</h2>
            <p>
              Partager son IBAN est bien plus sûr que beaucoup ne le pensent. Pour un virement
              régulier vers vous, il est nécessaire – et il ne permet pas de prélèvement sans
              votre mandat. Un GiroCode avec votre IBAN est un outil pratique et sécurisé pour
              la facturation moderne.
            </p>
            <div className="mt-6">
              <Link
                href="/fr"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
              >
                Créer un GiroCode sécurisé maintenant →
              </Link>
            </div>
          </section>
        </article>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <Link href="/fr/blog" className="text-sm text-slate-400 hover:text-slate-200">
            ← Retour au blog
          </Link>
        </div>
      </div>
    </main>
  );
}
