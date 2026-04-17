/* =============================================================
   RiverGuard ProblemSection — "O Problema do Mercado"
   Stats de roubo + dor do usuário com cards de impacto
   ============================================================= */

import { AlertTriangle, Smartphone, Clock, FileX } from "lucide-react";

const problems = [
  {
    icon: Smartphone,
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    stat: "2/min",
    label: "Roubos de celular",
    desc: "No Brasil, um smartphone é roubado a cada 30 segundos. Sua apólice precisa ser mais rápida que o ladrão.",
  },
  {
    icon: AlertTriangle,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    stat: "R$1.5k+",
    label: "Custo médio de reparo",
    desc: "Tela de iPhone ou Samsung quebrada pode custar até R$2.000 no conserto. Sem seguro, o prejuízo é seu.",
  },
  {
    icon: Clock,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    stat: "30 dias",
    label: "Espera no seguro tradicional",
    desc: "Seguros convencionais demoram semanas para aprovar um sinistro. Você fica sem o dispositivo esperando.",
  },
  {
    icon: FileX,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    stat: "68%",
    label: "Sinistros negados",
    desc: "Mais da metade dos pedidos de indenização são negados por burocracia ou cláusulas escondidas no contrato.",
  },
];

export default function ProblemSection() {
  return (
    <section
      id="produto"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0F172A 0%, #0A1628 100%)" }}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse-dot" />
            O Problema
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Todo mundo tem um.
            <br />
            <span className="text-slate-400 font-normal text-3xl lg:text-4xl">
              E todo mundo já perdeu.
            </span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Seja o celular no bolso ou o notebook de trabalho. A dor de ver uma
            tela estilhaçada ou perder tudo em um roubo é universal — e o mercado
            de seguros tradicional só piora a situação.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.label}
                className={`card-glass rounded-2xl p-6 border ${p.border} hover:border-opacity-50 transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div className={`w-12 h-12 rounded-xl ${p.bg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${p.color}`} />
                </div>
                <p className={`text-3xl font-black ${p.color} mb-1`}>{p.stat}</p>
                <p className="text-white font-semibold text-sm mb-3">{p.label}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl lg:text-3xl font-black text-white max-w-3xl mx-auto">
            "O pesadelo começa quando a{" "}
            <span className="text-blue-400">tela apaga</span>."
          </blockquote>
          <p className="text-slate-500 mt-3 text-sm">
            — E é exatamente aí que o RiverGuard entra.
          </p>
        </div>
      </div>
    </section>
  );
}
