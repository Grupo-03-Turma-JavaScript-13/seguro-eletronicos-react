/* =============================================================
   RiverGuard CtaSection + Footer — "Finalização"
   CTA final com quote + footer com links e info
   ============================================================= */

import { Shield, Github, ArrowRight, Mail, MapPin } from "lucide-react";

export default function CtaSection() {
  return (
    <>
      {/* CTA Section */}
      <section
        id="contato"
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ background: "#0F172A" }}
      >
        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(59,130,246,0.12) 0%, transparent 60%)",
          }}
        />
        {/* Grid */}
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10 text-center">
          {/* Quote */}
          <div className="mb-12">
            <span className="text-blue-500/40 text-8xl font-serif leading-none select-none">"</span>
            <p className="text-3xl lg:text-5xl font-black text-white leading-tight -mt-8">
              O futuro não é sobre papel.
              <br />
              É sobre{" "}
              <span className="text-blue-400 text-blue-glow">milissegundos</span>.
            </p>
          </div>

          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Junte-se a mais de 12.000 usuários que já protegem seus dispositivos
            com o sistema de seguro mais ágil do Brasil. Comece hoje, sem
            burocracia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#planos"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              Proteger Meu Dispositivo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://github.com/Grupo-03-Turma-JavaScript-13/seguro-eletronicos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 hover:border-white/30 text-slate-300 hover:text-white font-semibold text-base rounded-xl transition-all duration-200 hover:bg-white/5"
            >
              <Github className="w-5 h-5" />
              Ver no GitHub
            </a>
          </div>

          {/* RIVER Technology badge */}
          <div className="mt-16 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse-dot" />
            <span className="text-slate-500 text-sm font-mono tracking-widest uppercase">
              RIVER Technology
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative border-t border-white/10 py-12"
        style={{ background: "#0A1628" }}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <Shield className="w-7 h-7 text-blue-400" fill="currentColor" fillOpacity={0.3} strokeWidth={1.5} />
                <span className="font-bold text-lg">
                  <span className="text-white">River</span>
                  <span className="text-blue-400">Guard</span>
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                O sistema de seguro de eletrônicos mais ágil do Brasil.
                Desenvolvido pela RIVER Technology com Node.js, TypeScript e MySQL.
              </p>
              <div className="flex items-center gap-3 mt-5">
                <a
                  href="https://github.com/Grupo-03-Turma-JavaScript-13/seguro-eletronicos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="mailto:contato@riverguard.com.br"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Produto</h4>
              <ul className="space-y-2.5">
                {["Cobertura", "Planos", "Como Funciona", "Roadmap", "API Docs"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Empresa</h4>
              <ul className="space-y-2.5">
                {["Sobre Nós", "Time", "Blog", "Carreiras", "Contato"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-xs">
              © 2026 RIVER Technology. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-1.5 text-slate-500 text-xs">
              <MapPin className="w-3 h-3" />
              Brasil — Grupo 03, Turma JavaScript 13
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
