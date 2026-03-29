import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.girocodegenerator.com/fr/datenschutz' },
};

export default function PrivacyPageFr() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="mb-4 text-2xl font-semibold tracking-tight text-slate-50">
          Politique de confidentialité
        </h1>
        <section className="space-y-4 text-sm text-slate-300">
          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">1. Responsable</h2>
            <p>
              Kaleb Jahnke, Koppelstraße 6a, 27711 Osterholz-Scharmbeck
              <br />
              E-mail :{' '}
              <a
                href="mailto:jahnke.kaleb@gmail.com"
                className="text-sky-400 underline decoration-sky-500/60 hover:text-sky-300"
              >
                jahnke.kaleb@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              2. Principe de fonctionnement de l’application
            </h2>
            <p>
              L’application web génère des GiroCodes (SEPA-QR) et des factures PDF localement dans
              votre navigateur. Vos saisies ne sont ni transmises à notre serveur ni enregistrées par
              nos soins.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              3. Hébergement &amp; journaux de serveur
            </h2>
            <p>
              Le site est hébergé par Vercel (Vercel Inc., États-Unis). Les transferts s’effectuent
              sur la base de clauses contractuelles types de l’UE. Lors de l’accès au site, des
              données techniques (adresse IP, date/heure, URL appelée, user agent, référent) sont
              traitées dans des journaux de serveur. Base légale : art. 6 (1) f) RGPD.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              4. Ressources externes (CDN)
            </h2>
            <p>
              Des CDNs peuvent être utilisés pour la livraison de bibliothèques. Lors du chargement
              de ces fichiers, votre adresse IP peut être transmise aux fournisseurs. Base légale :
              art. 6 (1) f) RGPD.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              5. Option de QR externe (fallback)
            </h2>
            <p>
              Si vous activez l’option « QR externe », le texte EPC est transmis au service QR externe{' '}
              <span className="font-mono text-xs text-slate-400">api.qrserver.com</span>. Cela peut
              inclure des données de paiement (bénéficiaire, IBAN, montant, référence). Base légale :
              art. 6 (1) a) RGPD (consentement). Sans activation, aucune transmission n’a lieu.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">6. Communication</h2>
            <p>
              Si vous nous contactez par e-mail, nous traitons vos données pour répondre à votre
              demande (art. 6 (1) b/f RGPD).
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">7. Vos droits</h2>
            <p>
              Vous disposez notamment des droits suivants :
              <br />- droit d’accès, de rectification, d’effacement, de limitation (art. 15–18 RGPD)
              <br />- droit à la portabilité des données (art. 20 RGPD)
              <br />- droit d’opposition (art. 21 RGPD)
              <br />- droit d’introduire une réclamation auprès d’une autorité de contrôle
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              8. Transferts vers des pays tiers
            </h2>
            <p>
              Vercel Inc. est basé aux États-Unis. Les transferts reposent sur les clauses
              contractuelles types de l’UE.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">
              9. Cookies / suivi
            </h2>
            <p>
              L’application n’utilise pas de cookies à des fins d’analyse ou de marketing.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">10. Modifications</h2>
            <p>
              Nous adaptons cette politique de confidentialité si les fonctionnalités ou le cadre
              légal évoluent.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

