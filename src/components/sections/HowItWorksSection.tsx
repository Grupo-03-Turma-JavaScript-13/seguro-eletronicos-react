/* =============================================================
   RiverGuard HowItWorksSection — "Como Funciona"
   Timeline de 4 passos com ícones e descrições
   ============================================================= */

import { UserPlus, Smartphone, FileCheck, DollarSign, Calculator, ShieldCheck, LifeBuoy } from "lucide-react";
import WhatsAppIcon from "../ui/WhatsappIcon";

const steps = [
  {
    step: "01",
    icon: WhatsAppIcon,
    color: "text-blue-400",
    bg: "bg-blue-500/15",
    border: "border-blue-500/30",
    title: "Mande um Alô",
    desc: "Chame nosso consultor no WhatsApp e diga qual é o seu aparelho",
  },
  {
    step: "02",
    icon: Calculator,
    color: "text-green-400",
    bg: "bg-green-500/15",
    border: "border-green-500/30",
    title: "Cotação Expressa",
    desc: "Nossa equipe avalia o modelo e te envia o valor da cobertura em tempo real.",
  },
  {
    step: "03",
    icon: ShieldCheck,
    color: "text-yellow-400",
    bg: "bg-yellow-500/15",
    border: "border-yellow-500/30",
    title: "Apólice Ativa",
    desc: "Você aprova, nós registramos tudo no nosso sistema de gestão e seu eletrônico já está seguro.",
  },
  {
    step: "04",
    icon: LifeBuoy,
    color: "text-purple-400",
    bg: "bg-purple-500/15",
    border: "border-purple-500/30",
    title: "Deu ruim? Mande mensagem",
    desc: "Nada de preencher formulários infinitos. Aconteceu algo? Chame seu consultor no Zap e nós acionamos o seguro para você.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "#0F172A" }}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot" />
            Como Funciona
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Do cadastro à cobertura
            <br />
            em{" "}
            <span className="text-green-400">4 passos simples</span>.
          </h2>
          
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.step} className="relative text-center group">
                  {/* Step number + icon */}
                  <div className="relative inline-flex flex-col items-center mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl ${s.bg} border ${s.border} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-7 h-7 ${s.color}`} size={36} />
                    </div>
                    <span
                      className={`text-xs font-mono font-bold tracking-widest ${s.color} opacity-60`}
                    >
                      PASSO {s.step}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-3">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>

                  {/* Arrow between steps (mobile) */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6 mb-2">
                      <div className="w-px h-8 bg-gradient-to-b from-blue-500/30 to-transparent" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech stack badge */}
        <div className="mt-20 flex flex-wrap justify-center gap-3">
          {[
            { label: "Node.js", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
            { label: "TypeScript", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
            { label: "MySQL", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
            { label: "NestJS", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" },
            { label: "99.9% Uptime", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
          ].map((tech) => (
            <span
              key={tech.label}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold font-mono ${tech.bg} ${tech.color} border ${tech.border}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
              {tech.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
