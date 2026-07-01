import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { MetricCard } from '@/components/admin/MetricCard';
import {
  fetchBrevoListStats,
  fetchGitHubCommits,
  formatCommitDate,
  formatRelativeTime,
} from '@/lib/admin/data';

export const dynamic = 'force-dynamic';

const siteStats = [
  { category: 'Gesamtseiten', count: '367' },
  { category: 'Bank-Landingpages', count: '34' },
  { category: 'Wissensseiten', count: '7 × 5 = 35' },
  { category: 'Use-Case Seiten', count: '6 × 5 = 30' },
  { category: 'Blog-Artikel', count: '3 × 5 = 15' },
  { category: 'Vergleichsseiten', count: '3 × 5 = 15' },
  { category: 'Sprachen', count: '5 (DE/EN/FR/ES/IT)' },
];

const quickLinks = [
  { icon: '📊', label: 'Vercel Analytics', href: 'https://vercel.com/kalipos-projects/girocode-pdf/analytics' },
  { icon: '🔍', label: 'Search Console', href: 'https://search.google.com/search-console' },
  { icon: '📧', label: 'Brevo Newsletter', href: 'https://app.brevo.com' },
  { icon: '🔗', label: 'GitHub Repo', href: 'https://github.com/KalipoETH/girocode-generator' },
  { icon: '📈', label: 'Ahrefs', href: 'https://app.ahrefs.com' },
  { icon: '⚡', label: 'Speed Insights', href: 'https://vercel.com/kalipos-projects/girocode-pdf/speed-insights' },
  { icon: '🌐', label: 'Bing Webmaster', href: 'https://www.bing.com/webmasters' },
  { icon: '📱', label: 'Product Hunt', href: 'https://www.producthunt.com' },
];

const todos = [
  { done: true, text: 'Newsletter aufgebaut' },
  { done: true, text: 'Brevo Integration' },
  { done: true, text: '5 Sprachen live' },
  { done: true, text: '367 Seiten indexiert' },
  { done: true, text: 'API als Premium gesperrt' },
  { done: false, text: 'Google Workspace Add-on' },
  { done: false, text: 'Erste Premium Features' },
  { done: false, text: 'Lead Magnet (Rechnungsvorlagen)' },
  { done: false, text: '50 Newsletter Abonnenten' },
  { done: false, text: 'Reddit Präsenz' },
];

function Sparkline() {
  return (
    <svg viewBox="0 0 120 32" className="h-8 w-28 text-emerald-400" aria-hidden="true">
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="0,28 15,24 30,26 45,18 60,20 75,12 90,14 105,6 120,8"
      />
    </svg>
  );
}

export default async function AdminDashboardPage() {
  const [brevoStats, commits] = await Promise.all([
    fetchBrevoListStats(),
    fetchGitHubCommits(10),
  ]);

  const latestCommit = commits[0];

  return (
    <div className="flex min-h-screen bg-[#0b0c10]">
      <AdminSidebar />

      <div className="flex-1 overflow-y-auto p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <p className="mt-1 text-slate-400">GiroCode Generator – Übersicht & Metriken</p>
        </header>

        {/* Sektion 1: Overview Cards */}
        <section id="overview" className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-white">Übersicht</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <MetricCard
              icon="📧"
              label="Newsletter"
              value={brevoStats.error ? '—' : String(brevoStats.totalSubscribers)}
              subtext={brevoStats.error ?? brevoStats.name}
              color="green"
            />
            <MetricCard icon="📄" label="Seiten" value="367" subtext="Indexierte Seiten" color="blue" />
            <MetricCard icon="🌍" label="Sprachen" value="5" subtext="DE / EN / FR / ES / IT" color="purple" />
            <MetricCard
              icon="🔄"
              label="Commit"
              value={latestCommit ? formatCommitDate(latestCommit.date) : '—'}
              subtext={latestCommit?.message ?? 'Keine Commits'}
              color="orange"
            />
            <MetricCard
              icon="🏦"
              label="Banken"
              value="34 × 4"
              subtext="Bank-Seiten × Sprachen"
              color="cyan"
            />
            <MetricCard icon="🔌" label="API" value="Beta 🔒" subtext="Premium gesperrt" color="red" />
          </div>
        </section>

        {/* Sektion 2: Newsletter Stats */}
        <section id="newsletter" className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-white">Newsletter Stats (Brevo)</h2>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            {brevoStats.error ? (
              <p className="text-sm text-red-400">{brevoStats.error}</p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-3">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-emerald-400">↗</span>
                    <p className="text-sm text-slate-400">Gesamtzahl Abonnenten</p>
                  </div>
                  <div className="flex items-end justify-between gap-4">
                    <p className="text-4xl font-bold text-white">{brevoStats.totalSubscribers}</p>
                    <Sparkline />
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-sm text-slate-400">Aktive Abonnenten</p>
                  <p className="text-4xl font-bold text-white">{brevoStats.uniqueSubscribers}</p>
                </div>
                <div>
                  <p className="mb-2 text-sm text-slate-400">Liste Name</p>
                  <p className="text-2xl font-semibold text-emerald-400">{brevoStats.name}</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Sektion 3: GitHub Activity */}
        <section id="github" className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-white">GitHub Activity</h2>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            {commits.length === 0 ? (
              <p className="text-sm text-slate-500">Keine Commits geladen.</p>
            ) : (
              <ol className="space-y-4">
                {commits.map((commit, index) => (
                  <li key={commit.sha} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span
                        className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${
                          index === 0 ? 'bg-emerald-400' : 'bg-slate-600'
                        }`}
                      />
                      {index < commits.length - 1 && (
                        <span className="mt-1 w-px flex-1 bg-slate-700" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1 pb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <code className="rounded bg-slate-800 px-2 py-0.5 text-xs text-orange-400">
                          {commit.sha}
                        </code>
                        <span className="text-xs text-slate-500">
                          {formatRelativeTime(commit.date)}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-slate-200">{commit.message}</p>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </section>

        {/* Sektion 4: Site Übersicht */}
        <section id="site" className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-white">Site Übersicht</h2>
          <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-800/50">
                  <th className="px-6 py-3 font-medium text-slate-300">Kategorie</th>
                  <th className="px-6 py-3 font-medium text-slate-300">Anzahl</th>
                </tr>
              </thead>
              <tbody>
                {siteStats.map((row) => (
                  <tr key={row.category} className="border-b border-slate-800/80 last:border-0">
                    <td className="px-6 py-3 text-slate-300">{row.category}</td>
                    <td className="px-6 py-3 font-mono text-white">{row.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Sektion 5: Quick Links */}
        <section id="links" className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-white">Quick Links</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-emerald-500/40 hover:bg-slate-800/80"
              >
                <span className="text-2xl">{link.icon}</span>
                <p className="mt-2 text-sm font-medium text-slate-200 group-hover:text-emerald-400">
                  {link.label}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Sektion 6: Checkliste */}
        <section id="todo" className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-white">Checkliste / To-Do</h2>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <ul className="space-y-3">
              {todos.map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-sm">
                  <span className={item.done ? 'text-emerald-400' : 'text-slate-500'}>
                    {item.done ? '✅' : '🔲'}
                  </span>
                  <span className={item.done ? 'text-slate-400 line-through' : 'text-slate-200'}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
