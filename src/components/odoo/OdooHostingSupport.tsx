import { odooHostingModes, odooSupportTiers } from "@/lib/odoo-data";

export default function OdooHostingSupport() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F0FE] text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
          ■ Hébergement & Support
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C] mb-10">
          Un mode de déploiement et un support adaptés à vos contraintes
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-[#1A2B3C] mb-4">Hébergement & Infrastructure</h3>
            <div className="hidden sm:block overflow-x-auto rounded-2xl border border-[#D9E2EC]">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#1A2B3C] text-white">
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide">Mode</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide">Adapté pour</th>
                  </tr>
                </thead>
                <tbody>
                  {odooHostingModes.map((h, i) => (
                    <tr key={h.mode} className={i % 2 === 0 ? "bg-white" : "bg-[#E8F0FE]"}>
                      <td className="px-4 py-3 align-top">
                        <div className="text-sm font-bold text-[#1A2B3C]">{h.mode}</div>
                        <div className="text-xs text-[#374151] mt-1">{h.description}</div>
                      </td>
                      <td className="px-4 py-3 text-sm text-[#374151] align-top">{h.fit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="sm:hidden space-y-3">
              {odooHostingModes.map((h) => (
                <div key={h.mode} className="bg-white rounded-xl border border-[#D9E2EC] p-4">
                  <div className="text-sm font-bold text-[#1A2B3C]">{h.mode}</div>
                  <div className="text-xs text-[#374151] mt-1 mb-2">{h.description}</div>
                  <div className="text-xs text-[#FF5500] font-semibold">→ {h.fit}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-[#1A2B3C] mb-4">Support & Maintenance</h3>
            <div className="hidden sm:block overflow-x-auto rounded-2xl border border-[#D9E2EC]">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#1A2B3C] text-white">
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide">Niveau</th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide">Délai</th>
                  </tr>
                </thead>
                <tbody>
                  {odooSupportTiers.map((s, i) => (
                    <tr key={s.level} className={i % 2 === 0 ? "bg-white" : "bg-[#E8F0FE]"}>
                      <td className="px-4 py-3 align-top">
                        <div className="text-sm font-bold text-[#1A2B3C]">{s.level}</div>
                        <div className="text-xs text-[#374151] mt-1">{s.content}</div>
                      </td>
                      <td className="px-4 py-3 text-sm font-semibold text-[#FF5500] align-top">{s.delay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="sm:hidden space-y-3">
              {odooSupportTiers.map((s) => (
                <div key={s.level} className="bg-white rounded-xl border border-[#D9E2EC] p-4">
                  <div className="text-sm font-bold text-[#1A2B3C]">{s.level}</div>
                  <div className="text-xs text-[#374151] mt-1 mb-2">{s.content}</div>
                  <div className="text-xs font-semibold text-[#FF5500]">Délai : {s.delay}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
