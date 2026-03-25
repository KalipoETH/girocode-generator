export default function ImpressumPageFr() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="mb-4 text-2xl font-semibold tracking-tight text-slate-50">
          Mentions légales
        </h1>
        <section className="space-y-4 text-sm text-slate-300">
          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">Éditeur du site</h2>
            <p>
              Kaleb Jahnke
              <br />
              Koppelstraße 6a
              <br />
              27711 Osterholz-Scharmbeck
              <br />
              Allemagne
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">Contact</h2>
            <p>
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
              Responsable selon le droit allemand (§ 18 Abs. 2 MStV)
            </h2>
            <p>
              Kaleb Jahnke
              <br />
              Koppelstraße 6a
              <br />
              27711 Osterholz-Scharmbeck
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">Responsabilité pour le contenu</h2>
            <p>
              En tant que prestataire de services, nous sommes responsables de nos propres contenus
              sur ces pages conformément au § 7 Abs. 1 TMG. Selon §§ 8 à 10 TMG, nous ne sommes pas
              tenus de surveiller les informations de tiers transmises ou stockées ni de rechercher
              des circonstances indiquant une activité illégale.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">Liens externes</h2>
            <p>
              Notre offre peut contenir des liens vers des sites externes de tiers, sur le contenu
              desquels nous n’avons aucune influence. La responsabilité du contenu des pages
              liées incombe toujours au fournisseur ou à l’exploitant de ces pages.
            </p>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-slate-50">Droit d’auteur</h2>
            <p>
              Les contenus et œuvres créés par l’exploitant du site sur ces pages sont soumis au
              droit d’auteur allemand. Les contributions de tiers sont identifiées comme telles.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

