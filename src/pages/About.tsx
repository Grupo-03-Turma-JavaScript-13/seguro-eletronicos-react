/* =============================================================
   RiverTech About Page
   Design: Shield Protocol (Premium SaaS Dark)
   Página sobre a empresa RiverTech - desenvolvedora de qualidade
   ============================================================= */

import { Github, Linkedin, Mail, Code2, Database, Palette, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";

const teamMembers = [
  {
    name: "Ana Silva",
    role: "Product Lead & Full-Stack Developer",
    image: "AS",
    imageBg: "bg-blue-500",
    bio: "Arquiteta de soluções escaláveis com expertise em Node.js",
  },
  {
    name: "Carlos Oliveira",
    role: "Backend Lead & DevOps",
    image: "CO",
    imageBg: "bg-green-500",
    bio: "Especialista em infraestrutura e otimização de performance",
  },
  {
    name: "Marina Costa",
    role: "Frontend Lead & UI/UX Designer",
    image: "MC",
    imageBg: "bg-purple-500",
    bio: "Criadora de design systems e interfaces modernas",
  },
  {
    name: "Rafael Mendes",
    role: "Senior Developer & Technical Architect",
    image: "RM",
    imageBg: "bg-cyan-500",
    bio: "Arquiteto técnico especializado em TypeScript",
  },
  {
    name: "Juliana Ferreira",
    role: "QA Lead & Product Manager",
    image: "JF",
    imageBg: "bg-pink-500",
    bio: "Garantia de qualidade e experiência do usuário",
  },
  {
    name: "Lucas Almeida",
    role: "Database & Security Engineer",
    image: "LA",
    imageBg: "bg-orange-500",
    bio: "Especialista em segurança e integridade de dados",
  },
];

const stacks = [
  {
    name: "Frontend",
    icon: Palette,
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Vite", "Next.js"],
  },
  {
    name: "Backend",
    icon: Code2,
    technologies: ["Node.js", "NestJS", "Express", "TypeScript", "REST APIs"],
  },
  {
    name: "Database",
    icon: Database,
    technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Prisma ORM"],
  },
  {
    name: "DevOps & Tools",
    icon: Zap,
    technologies: ["Docker", "GitHub", "Render", "AWS", "CI/CD Pipelines"],
  },
];

export default function About() {
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
            Sobre RiverTech
          </div>

          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            Desenvolvemos projetos de <span className="text-blue-400">qualidade</span>.
          </h1>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Somos uma equipe de 6 desenvolvedores apaixonados por criar soluções inovadoras e
            escaláveis que transformam ideias em realidade.
          </p>
        </div>
      </section>

      {/* Team */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ background: "#0F172A" }}
      >
        {/* Grid bg */}
        <div className="absolute inset-0 grid-bg opacity-30" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <h2 className="text-4xl font-black text-white text-center mb-16">Nosso Time</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="card-glass rounded-2xl p-7 border border-white/8 hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-20 h-20 rounded-full ${member.imageBg} flex items-center justify-center text-white text-2xl font-black group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-current/20`}
                  >
                    {member.image}
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-white font-bold text-lg text-center mb-1">{member.name}</h3>
                <p className="text-blue-400 text-sm font-semibold text-center mb-3">{member.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed text-center mb-6">{member.bio}</p>

                {/* Socials */}
                <div className="flex items-center justify-center gap-3 pt-6 border-t border-white/10">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
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

      {/* Stacks */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0F172A 0%, #0A1628 100%)" }}
      >
        {/* Grid */}
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <h2 className="text-4xl font-black text-white text-center mb-16">Stacks que Dominamos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stacks.map((stack) => {
              const Icon = stack.icon;
              return (
                <div
                  key={stack.name}
                  className="card-glass rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{stack.name}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold hover:bg-blue-500/20 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="relative py-16 overflow-hidden"
        style={{ background: "#0F172A" }}
      >
        {/* Grid */}
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "6", label: "Desenvolvedores" },
              { value: "50+", label: "Projetos Entregues" },
              { value: "100%", label: "Satisfação do Cliente" },
              { value: "24/7", label: "Suporte Técnico" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl lg:text-4xl font-black text-blue-400">{stat.value}</p>
                <p className="text-slate-500 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "#0F172A" }}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Entre em <span className="text-blue-400">Contato</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Tem dúvidas ou quer conhecer mais sobre a RiverTech? Estamos aqui para ajudar!
          </p>

          <div className="space-y-4 mb-8">
            <p className="text-slate-300">
              <strong>Email:</strong>{" "}
              <a href="mailto:contato@rivertech.com" className="text-blue-400 hover:text-blue-300">
                contato@rivertech.com
              </a>
            </p>
            <p className="text-slate-300">
              <strong>Telefone:</strong> +55 (11) 9999-9999
            </p>
            <p className="text-slate-300">
              <strong>Endereço:</strong> São Paulo, SP - Brasil
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contato@rivertech.com"
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/30"
            >
              Enviar Email
            </a>
            <a
              href="/"
              className="px-8 py-3.5 border border-white/15 hover:border-white/30 text-white font-bold rounded-lg transition-all hover:bg-white/5"
            >
              Voltar para Home
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
              © 2026 RiverTech — Desenvolvemos projetos de qualidade
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
