/* =============================================================
   RiverGuard RoadmapSection — "Projetos Futuros"
   Timeline Q3 2026 → Q4 2026 → Q1 2027
   ============================================================= */

import { Monitor, CreditCard, Brain } from "lucide-react";

const roadmap = [
  {
    quarter: "Q3 2026",
    icon: Monitor,
    color: "text-blue-400",
    bg: "bg-blue-500/15",
    border: "border-blue-500/40",
    lineColor: "bg-blue-500",
    title: "Frontend Web",
    desc: "Interface web completa para gestão de apólices, sinistros e perfil do usuário. Dashboard com histórico e notificações em tempo real.",
    status: "Em desenvolvimento",
    statusColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    quarter: "Q4 2026",
    icon: CreditCard,
    color: "text-purple-400",
    bg: "bg-purple-500/15",
    border: "border-purple-500/40",
    lineColor: "bg-purple-500",
    title: "Gateways de Pagamento",
    desc: "Integração com Stripe, PIX e boleto bancário. Cobrança recorrente automática e gestão de inadimplência.",
    status: "Planejado",
    statusColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  },
  {
    quarter: "Q1 2027",
    icon: Brain,
    color: "text-green-400",
    bg: "bg-green-500/15",
    border: "border-green-500/40",
    lineColor: "bg-green-500",
    title: "IA Antifraude",
    desc: "Sistema de machine learning para detecção de fraudes em tempo real. Análise comportamental e scoring de risco por cliente.",
    status: "Futuro",
    statusColor: "text-green-400 bg-green-500/10 border-green-500/20",
  },
];

export default function RoadmapSection() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A1628 0%, #0F172A 100%)" }}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse-dot" />
            Roadmap
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Os próximos passos
            <br />
            <span className="text-purple-400">do ecossistema</span>.
          </h2>
          <p className="text-slate-400 text-lg">
            O RiverGuard está em constante evolução. Veja o que vem por aí.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal connector (desktop) */}
          <div className="hidden lg:flex absolute top-8 left-[16.67%] right-[16.67%] items-center">
            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-green-500/40" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {roadmap.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.quarter} className="relative">
                  {/* Timeline dot (desktop) */}
                  <div className="hidden lg:flex justify-center mb-8">
                    <div
                      className={`w-4 h-4 rounded-full ${item.lineColor} ring-4 ring-[#0A1628] relative z-10`}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`card-glass rounded-2xl p-6 border ${item.border} hover:-translate-y-1 transition-all duration-300`}
                  >
                    {/* Quarter badge */}
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className={`text-xs font-mono font-bold tracking-widest px-2.5 py-1 rounded-full border ${item.statusColor}`}
                      >
                        {item.quarter}
                      </span>
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${item.statusColor}`}
                      >
                        {item.status}
                      </span>
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4`}
                    >
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>

                    <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Arrow (mobile) */}
                  {i < roadmap.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-4 mb-2">
                      <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
