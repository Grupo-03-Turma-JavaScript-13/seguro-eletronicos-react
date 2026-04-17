/* =============================================================
   RiverGuard Login Page
   Design: Shield Protocol (Premium SaaS Dark)
   ============================================================= */

import { useState } from "react";
import { Shield, Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simular delay de login
    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify({ email, name: email.split("@")[0] }));
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "linear-gradient(135deg, #0A1628 0%, #0F172A 50%, #0D1B35 100%)" }}
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

      <div className="w-full max-w-md relative z-10">
        {/* Back to home */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 transition-colors"
        >
          ← Voltar para Home
        </a>

        {/* Card */}
        <div className="card-glass rounded-2xl p-8 border border-white/10">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <Shield
                className="w-10 h-10 text-blue-400"
                fill="currentColor"
                fillOpacity={0.2}
                strokeWidth={1.5}
              />
              <Shield
                className="w-10 h-10 text-blue-500 absolute inset-0 opacity-60"
                fill="currentColor"
                fillOpacity={0.5}
                strokeWidth={0}
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-black text-white text-center mb-2">Bem-vindo de volta</h1>
          <p className="text-slate-400 text-sm text-center mb-8">
            Acesse sua conta para gerenciar suas apólices
          </p>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">E-mail</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Senha</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-white/20 bg-white/5 accent-blue-600"
                />
                <span className="text-slate-400">Lembrar de mim</span>
              </label>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                Esqueci a senha
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-700 disabled:opacity-50 text-white font-bold rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Entrando...
                </>
              ) : (
                <>
                  Entrar
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#0F172A] text-slate-500">Não tem conta?</span>
            </div>
          </div>

          {/* Sign up link */}
          <a
            href="/signup"
            className="w-full py-2.5 border border-white/15 hover:border-white/30 text-white font-semibold rounded-lg transition-all text-center hover:bg-white/5"
          >
            Criar nova conta
          </a>
        </div>

        {/* Footer text */}
        <p className="text-center text-slate-500 text-xs mt-6">
          Ao fazer login, você concorda com nossos{" "}
          <a href="#" className="text-blue-400 hover:text-blue-300">
            Termos de Serviço
          </a>
        </p>
      </div>
    </div>
  );
}
