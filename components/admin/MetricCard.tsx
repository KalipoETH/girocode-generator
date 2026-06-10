type MetricCardProps = {
  icon: string;
  label: string;
  value: string;
  subtext?: string;
  color: 'green' | 'blue' | 'purple' | 'orange' | 'cyan' | 'red';
};

const colorClasses = {
  green: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
  blue: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
  purple: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
  orange: 'border-orange-500/30 bg-orange-500/10 text-orange-400',
  cyan: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
  red: 'border-red-500/30 bg-red-500/10 text-red-400',
};

export function MetricCard({ icon, label, value, subtext, color }: MetricCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-slate-700">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-2xl">{icon}</span>
        <span
          className={`rounded-full border px-2 py-0.5 text-xs font-medium ${colorClasses[color]}`}
        >
          {label}
        </span>
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      {subtext && <p className="mt-1 truncate text-sm text-slate-500">{subtext}</p>}
    </div>
  );
}
