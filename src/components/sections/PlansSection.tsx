/* =============================================================
   RiverGuard PlansSection — "Planos de Cobertura"
   3 planos: Básico, Profissional (destaque), Premium
   ============================================================= */

import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "29",
    period: "/mês",
    desc: "Ideal para quem quer proteção essencial para um dispositivo.",
    highlight: false,
    badge: null,
    features: [
      "1 dispositivo coberto",
      "Cobertura contra roubo",
      "Cobertura contra quebra de tela",
      "Aprovação em até 5 minutos",
      "Suporte via chat",
      "Indenização em até 72h",
    ],
    notIncluded: ["Danos elétricos", "Cobertura internacional"],
    cta: "Começar Agora",
    ctaStyle: "border border-white/15 hover:border-blue-500/50 text-white hover:bg-white/5",
  },
  {
    name: "Profissional",
    price: "59",
    period: "/mês",
    desc: "A escolha certa para quem depende do dispositivo no trabalho.",
    highlight: true,
    badge: "Mais Popular",
    features: [
      "Até 3 dispositivos cobertos",
      "Cobertura contra roubo",
      "Cobertura contra quebra de tela",
      "Aprovação em menos de 2 minutos",
      "Suporte 24/7 prioritário",
      "Indenização em até 48h",
      "Danos elétricos incluídos",
      "Cobertura nacional",
    ],
    notIncluded: ["Cobertura internacional"],
    cta: "Escolher Profissional",
    ctaStyle: "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25",
  },
  {
    name: "Premium",
    price: "99",
    period: "/mês",
    desc: "Proteção total sem limites para você e sua família.",
    highlight: false,
    badge: null,
    features: [
      "Dispositivos ilimitados",
      "Cobertura contra roubo",
      "Cobertura contra quebra de tela",
      "Aprovação instantânea",
      "Suporte 24/7 VIP",
      "Indenização em até 24h",
      "Danos elétricos incluídos",
      "Cobertura nacional e internacional",
    ],
    notIncluded: [],
    cta: "Escolher Premium",
    ctaStyle: "border border-white/15 hover:border-blue-500/50 text-white hover:bg-white/5",
  },
];

export default function PlansSection() {
  return (
    <section
      id="planos"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0F172A 0%, #0A1628 100%)" }}
    >
      {/* Glow center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse-dot" />
            Planos e Preços
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Escolha o plano
            <br />
            <span className="text-yellow-400">certo para você</span>.
          </h2>
          <p className="text-slate-400 text-lg">
            Sem taxa de adesão, sem multa por cancelamento. Cancele quando quiser.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? "bg-blue-600/10 border-2 border-blue-500/50 shadow-xl shadow-blue-500/10"
                  : "card-glass border border-white/8"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg shadow-blue-500/30">
                    <Star className="w-3 h-3 fill-current" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm">{plan.desc}</p>
              </div>

              {/* Price */}
              <div className="flex items-end gap-1 mb-7 pb-7 border-b border-white/10">
                <span className="text-slate-400 text-lg font-semibold">R$</span>
                <span className="text-5xl font-black text-white leading-none">{plan.price}</span>
                <span className="text-slate-400 text-sm mb-1">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600 line-through">
                    <span className="w-4 h-4 flex-shrink-0 mt-0.5 text-slate-700">✕</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-slate-500 text-xs mt-10">
          * Preços em BRL. Cobertura sujeita às condições gerais da apólice.
          Cancele a qualquer momento sem multa.
        </p>
      </div>
    </section>
  );
}
