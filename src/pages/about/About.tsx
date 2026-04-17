import { Mail, Code2, Database, Palette, Zap } from "lucide-react";
import { GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'

//members img
import ERICK from '../../assets/img/members/ERICK_SANTANA.png'
import EVELYN from '../../assets/img/members/EVELYN_LAMARCA.png'
import JOSUE from '../../assets/img/members/JOSUE_VIEGAS.png'
import LIVIA from '../../assets/img/members/LIVIA_CAMPOS.png'
import MATHEUS from '../../assets/img/members/MATHEUS_BASTOS.jpg'
import RENAN from '../../assets/img/members/RENAN_LIMA.png'
import ContactFormSection from "../home/ContactFormSection";

const teamMembers = [
    {
        name: "Erick Santana",
        role: "Desenvolvedor",
        image: ERICK,
        linkedin: "https://www.linkedin.com/in/erickystn/",
    },
    {
        name: "Evelyn Lamarca",
        role: "Desenvolvedora",
        image: EVELYN,
        linkedin: "https://www.linkedin.com/in/evelyn-lamarca/",
    },
    {
        name: "Josue Viegas",
        role: "Desenvolvedor",
        image: JOSUE,
        linkedin: "https://www.linkedin.com/in/josue-viegas-desenvolvedor-web/",

    },
    {
        name: "Lívia Campos",
        role: "Desenvolvedora",
        image: LIVIA,
        linkedin: "https://www.linkedin.com/in/livmachado/",
    },
    {
        name: "Matheus Bastos",
        role: "Desenvolvedor",
        image: MATHEUS,
        linkedin: "https://www.linkedin.com/in/matheus-moura-bastos",
    },
    {
        name: "Renan Lima",
        role: "Desenvolvedor",
        image: RENAN,
        linkedin: "https://www.linkedin.com/in/renanferreiralima",
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
        <>
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
                                    <div className="w-40 h-40 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Info */}
                                <h3 className="text-white font-bold text-lg text-center mb-1">{member.name}</h3>
                                <p className="text-blue-400 text-sm font-semibold text-center mb-3">{member.role}</p>

                                {/* Socials */}
                                <div className="flex items-center justify-center gap-3 pt-6 border-t border-white/10">
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                                        title="GitHub"
                                    >
                                        <GithubLogoIcon className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                                        title="LinkedIn"
                                    >
                                        <LinkedinLogoIcon className="w-4 h-4" />
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
            <ContactFormSection />
        </>
    );
}
