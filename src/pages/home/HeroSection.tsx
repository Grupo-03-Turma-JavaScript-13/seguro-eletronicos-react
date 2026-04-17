import { Shield, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import HERO_BG from '../../assets/img/riverguard-hero-bg.jpg'
import DEVICES_IMG from '../../assets/img/riverguard-devices.jpg'


function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A1628 0%, #0F172A 50%, #0D1B35 100%)",
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: HERO_BG }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-150 h-150 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-dot" />
              RIVER Technology — Seguro Digital
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-white">
                Seguro de Eletrônicos{" "}
                <span className="text-blue-400 text-blue-glow">Inteligente</span>
                <br />
                para Profissionais
              </h1>
              <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-lg">
                RiverGuard: Proteção rápida, eficiente e confiável para seus dispositivos. Processamento automático, sem burocracia.
              </p>
            </div>

            {/* Features list */}
            <ul className="space-y-2.5">
              {[
                "Aprovação automática em menos de 2 minutos",
                "Cobertura para roubo, quebra e danos elétricos",
                "Sem vistoria prévia para dispositivos até R$5.000",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA Button - apenas para Admin */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/user-login"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
              >
                Painel Administrativo
                <Shield className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 hover:border-blue-500/50 text-slate-300 hover:text-white font-semibold text-base rounded-xl transition-all duration-200 hover:bg-white/5"
              >
                Como Funciona
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex -space-x-2">
                {["#3B82F6", "#10B981", "#8B5CF6", "#F59E0B"].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#0F172A]"
                    style={{ backgroundColor: color, opacity: 0.8 }}
                  />
                ))}
              </div>
              <p className="text-sm text-slate-400">
                <span className="text-white font-semibold">+12.000</span> dispositivos protegidos
              </p>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative h-125 lg:h-150 flex items-center justify-center">
            {/* Animated background shapes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute w-48 h-48 bg-blue-400/5 rounded-full blur-2xl animate-pulse delay-1000" />
            </div>

            {/* Devices image */}
            <img
              src={DEVICES_IMG}
              alt="Dispositivos protegidos"
              className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
            />

            {/* Floating stats */}
            <div className="absolute bottom-8 left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-sm">
              <p className="text-blue-400 font-bold">
                <AnimatedCounter target={99} suffix="%" />
              </p>
              <p className="text-slate-300 text-xs">Uptime Garantido</p>
            </div>

            <div className="absolute top-8 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-sm">
              <p className="text-green-400 font-bold">&lt;200ms</p>
              <p className="text-slate-300 text-xs">Tempo de Resposta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
