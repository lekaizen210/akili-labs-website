import { odooSectorUseCases } from "@/lib/odoo-data";

export default function OdooSectors() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F0FE] text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
          ■ Secteurs d&apos;intervention
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C] mb-10">
          Odoo pour tous les secteurs
        </h2>
        <div className="hidden sm:block overflow-x-auto rounded-2xl border border-[#D9E2EC]">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#1A2B3C] text-white">
                <th className="px-5 py-4 text-sm font-semibold">Secteur</th>
                <th className="px-5 py-4 text-sm font-semibold">Cas d&apos;usage prioritaires</th>
              </tr>
            </thead>
            <tbody>
              {odooSectorUseCases.map((s, i) => (
                <tr key={s.sector} className={i % 2 === 0 ? "bg-white" : "bg-[#E8F0FE]"}>
                  <td className="px-5 py-4 text-sm font-bold text-[#1A2B3C] align-top whitespace-nowrap">{s.sector}</td>
                  <td className="px-5 py-4 text-sm text-[#374151] align-top">{s.useCases}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="sm:hidden space-y-3">
          {odooSectorUseCases.map((s) => (
            <div key={s.sector} className="bg-[#E8F0FE] rounded-xl p-4 border border-[#D9E2EC]">
              <div className="text-sm font-bold text-[#1A2B3C] mb-1">{s.sector}</div>
              <div className="text-xs text-[#374151]">{s.useCases}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
