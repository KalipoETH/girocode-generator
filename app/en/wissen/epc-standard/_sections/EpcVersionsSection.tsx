export function EpcVersionsSection() {
  return (
    <section
      aria-labelledby="epc-versions"
      className="mt-10"
      style={{ contentVisibility: 'auto', containIntrinsicHeight: 'auto 320px' }}
    >
      <h2 id="epc-versions">EPC Versions Compared</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="py-2 pr-4 text-left text-slate-300">Aspect</th>
              <th className="py-2 pr-4 text-left text-slate-300">Version 001</th>
              <th className="py-2 text-left text-slate-300">Version 002</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-400">
            <tr>
              <td className="py-2 pr-4 font-medium text-slate-300">Year introduced</td>
              <td className="py-2 pr-4">2012</td>
              <td className="py-2">2018</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 font-medium text-slate-300">BIC required</td>
              <td className="py-2 pr-4">Yes (mandatory)</td>
              <td className="py-2">No (optional)</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 font-medium text-slate-300">Max payload size</td>
              <td className="py-2 pr-4">331 bytes</td>
              <td className="py-2">331 bytes</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 font-medium text-slate-300">Recommended for</td>
              <td className="py-2 pr-4">Legacy systems</td>
              <td className="py-2">New implementations</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 font-medium text-slate-300">Character encoding</td>
              <td className="py-2 pr-4">UTF-8 or ISO 8859</td>
              <td className="py-2">UTF-8 recommended</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        For new implementations, version 002 with UTF-8 encoding is the recommended choice.
        It is forward-compatible with version 001 readers and does not require a BIC.
      </p>
    </section>
  );
}
