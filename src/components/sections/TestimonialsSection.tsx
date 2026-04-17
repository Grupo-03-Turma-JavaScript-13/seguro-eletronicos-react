/* =============================================================
   RiverGuard TestimonialsSection — "O que nossos clientes dizem"
   3 depoimentos em cards com avatar, nome, avaliação
   ============================================================= */

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Costa",
    role: "Designer Freelancer",
    avatar: "MC",
    avatarBg: "bg-blue-500",
    rating: 5,
    text: "Meu notebook foi roubado numa sexta-feira à noite. Abri o sinistro pelo app e na segunda de manhã já tinha a confirmação da indenização. Nunca vi nada igual no Brasil.",
  },
  {
    name: "Rafael Mendes",
    role: "Desenvolvedor Sênior",
    avatar: "RM",
    avatarBg: "bg-green-500",
    rating: 5,
    text: "Trabalho com 3 dispositivos e o plano Profissional cobre todos. O processo de cadastro levou menos de 3 minutos. A API deles é muito bem documentada também.",
  },
  {
    name: "Juliana Ferreira",
    role: "Empreendedora",
    avatar: "JF",
    avatarBg: "bg-purple-500",
    rating: 5,
    text: "Tela do iPhone quebrou no aeroporto. Sem burocracia, sem vistoria, sem espera. Em 48h o valor estava na minha conta. O RiverGuard é o que o seguro deveria ser.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0F172A 0%, #0A1628 100%)" }}
    >
      {/* Glow */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-dot" />
            Depoimentos
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Quem usa,{" "}
            <span className="text-cyan-400">recomenda</span>.
          </h2>
          <p className="text-slate-400 text-lg">
            Mais de 12.000 usuários já confiam no RiverGuard para proteger seus dispositivos.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-glass rounded-2xl p-7 border border-white/8 hover:-translate-y-1 transition-all duration-300 group relative"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-blue-500/20 absolute top-6 right-6" fill="currentColor" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div
                  className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          {[
            { label: "Nota média", value: "4.9/5" },
            { label: "Avaliações", value: "3.200+" },
            { label: "NPS Score", value: "87" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-2xl font-black text-white">{item.value}</p>
              <p className="text-slate-500 text-xs mt-0.5">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
