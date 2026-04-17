import { GithubLogoIcon } from "@phosphor-icons/react";
import { Mail, MapPin, Shield } from "lucide-react";

export default function Footer(){
    return(
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
                  <GithubLogoIcon className="w-4 h-4" />
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
    )
}