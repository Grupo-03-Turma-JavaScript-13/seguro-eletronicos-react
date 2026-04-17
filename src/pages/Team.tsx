/* =============================================================
   RiverGuard Team Page
   Design: Shield Protocol (Premium SaaS Dark)
   Grupo 03 - Turma JavaScript 13
   ============================================================= */

import { Github, Linkedin, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";

const team = [
  {
    name: "Ana Silva",
    role: "Product Lead & Full-Stack Developer",
    bio: "Arquiteta da solução RiverGuard. Especialista em Node.js e arquitetura de sistemas escaláveis.",
    avatar: "AS",
    avatarBg: "bg-blue-500",
    socials: {
      github: "#",
      linkedin: "#",
      email: "ana@riverguard.com",
    },
  },
  {
    name: "Carlos Oliveira",
    role: "Backend Lead & DevOps",
    bio: "Responsável pela infraestrutura e APIs. Especialista em MySQL e otimização de performance.",
    avatar: "CO",
    avatarBg: "bg-green-500",
    socials: {
      github: "#",
      linkedin: "#",
      email: "carlos@riverguard.com",
    },
  },
  {
    name: "Marina Costa",
    role: "Frontend Lead & UI/UX Designer",
    bio: "Criadora da identidade visual do RiverGuard. Especialista em React e design systems.",
    avatar: "MC",
    avatarBg: "bg-purple-500",
    socials: {
      github: "#",
      linkedin: "#",
      email: "marina@riverguard.com",
    },
  },
  {
    name: "Rafael Mendes",
    role: "Senior Developer & Technical Architect",
    bio: "Arquiteto técnico do projeto. Especialista em TypeScript e padrões de design.",
    avatar: "RM",
    avatarBg: "bg-cyan-500",
    socials: {
      github: "#",
      linkedin: "#",
      email: "rafael@riverguard.com",
    },
  },
  {
    name: "Juliana Ferreira",
    role: "QA Lead & Product Manager",
    bio: "Garante a qualidade e experiência do usuário. Especialista em testes e user research.",
    avatar: "JF",
    avatarBg: "bg-pink-500",
    socials: {
      github: "#",
      linkedin: "#",
      email: "juliana@riverguard.com",
    },
  },
  {
    name: "Lucas Almeida",
    role: "Database & Security Engineer",
    bio: "Responsável pela segurança e integridade dos dados. Especialista em MySQL e criptografia.",
    avatar: "LA",
    avatarBg: "bg-orange-500",
    socials: {
      github: "#",
      linkedin: "#",
      email: "lucas@riverguard.com",
    },
  },
];

export default function Team() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-center overflow-hidden pt-24"
        style={{
          background: "linear-gradient(135deg, #0A1628 0%, #0F172A 50%, #0D1B35 100%)",
        }}
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-40" />

        {/* Glow */}
        <div
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-dot" />
            Conheça nosso time
          </div>

          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            Os criadores do{" "}
            <span className="text-blue-400">RiverGuard</span>.
          </h1>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Um grupo de 6 desenvolvedores apaixonados por tecnologia, trabalhando juntos para
            revolucionar o seguro de eletrônicos no Brasil.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ background: "#0F172A" }}
      >
        {/* Grid bg */}
        <div className="absolute inset-0 grid-bg opacity-30" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="card-glass rounded-2xl p-7 border border-white/8 hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-20 h-20 rounded-full ${member.avatarBg} flex items-center justify-center text-white text-2xl font-black group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-current/20`}
                  >
                    {member.avatar}
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-white font-bold text-lg text-center mb-1">{member.name}</h3>
                <p className="text-blue-400 text-sm font-semibold text-center mb-4">{member.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed text-center mb-6">{member.bio}</p>

                {/* Socials */}
                <div className="flex items-center justify-center gap-3 pt-6 border-t border-white/10">
                  <a
                    href={member.socials.github}
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${member.socials.email}`}
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                    title="E-mail"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="relative py-16 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0F172A 0%, #0A1628 100%)" }}
      >
        {/* Grid */}
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "6", label: "Desenvolvedores" },
              { value: "3", label: "Meses de Desenvolvimento" },
              { value: "12.000+", label: "Usuários Protegidos" },
              { value: "99.9%", label: "Uptime Garantido" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl lg:text-4xl font-black text-white">{stat.value}</p>
                <p className="text-slate-500 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "#0F172A" }}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Pronto para confiar no{" "}
            <span className="text-blue-400">RiverGuard</span>?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de usuários que já protegem seus dispositivos com o sistema
            mais ágil do Brasil.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/login"
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/30"
            >
              Fazer Login
            </a>
            <a
              href="/signup"
              className="px-8 py-3.5 border border-white/15 hover:border-white/30 text-white font-bold rounded-lg transition-all hover:bg-white/5"
            >
              Criar Conta
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative border-t border-white/10 py-12"
        style={{ background: "#0A1628" }}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center">
            <p className="text-slate-500 text-sm">
              © 2026 RIVER Technology — Grupo 03, Turma JavaScript 13
            </p>
            <p className="text-slate-600 text-xs mt-2">
              Desenvolvido com ❤️ em Node.js, TypeScript e React
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
