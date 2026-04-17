/* =============================================================
   RiverGuard SolutionSection — "A Solução"
   Features principais: Agilidade, Automação, Zero Burocracia
   ============================================================= */

import { Zap, Bot, ShieldCheck, Lock, RefreshCw, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Zap,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    title: "Agilidade Extrema",
    desc: "Apólice gerada em menos de 2 minutos. Aprovação automática via algoritmo de risco em tempo real.",
    tag: "< 2 min",
  },
  {
    icon: Bot,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    title: "Automação Total",
    desc: "Cálculo automático de depreciação, validação de CPF único por apólice e regras de negócio aplicadas instantaneamente.",
    tag: "100% Auto",
  },
  {
    icon: ShieldCheck,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    title: "Zero Burocracia",
    desc: "Sem vistoria prévia para dispositivos até R$5.000. Sem papelada. Sem ligação para central. Tudo digital.",
    tag: "Sem papel",
  },
  {
    icon: Lock,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    title: "Trava de Segurança",
    desc: "Cada CPF pode ter apenas uma apólice ativa por dispositivo. Proteção contra fraudes com validação em tempo real.",
    tag: "Anti-fraude",
  },
  {
    icon: RefreshCw,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    title: "Renovação Automática",
    desc: "Sua cobertura se renova automaticamente. Nunca fique desprotegido por esquecer de renovar o seguro.",
    tag: "Auto-renew",
  },
  {
    icon: HeadphonesIcon,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    title: "Suporte 24/7",
    desc: "Equipe disponível a qualquer hora para abertura de sinistros, dúvidas e acompanhamento do processo.",
    tag: "24h",
  },
];

export default function SolutionSection() {
  return (
    <section
      id="cobertura"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A1628 0%, #0F172A 100%)" }}
    >
      {/* Glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-dot" />
            A Solução
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Proteção que funciona
            <br />
            na{" "}
            <span className="text-blue-400">velocidade do digital</span>.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            O RiverGuard foi construído do zero para eliminar a burocracia do
            seguro tradicional. Tecnologia de ponta para proteger o que você
            mais usa.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`card-glass rounded-2xl p-6 border ${f.border} hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden`}
              >
                {/* Tag */}
                <span
                  className={`absolute top-4 right-4 text-xs font-mono font-semibold px-2 py-0.5 rounded-full ${f.bg} ${f.color} border ${f.border}`}
                >
                  {f.tag}
                </span>

                <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#planos"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
          >
            Ver Planos de Cobertura
          </a>
        </div>
      </div>
    </section>
  );
}
