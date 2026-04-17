/* =============================================================
   RiverGuard User (Employee) Login Page
   Design: Shield Protocol (Premium SaaS Dark)
   Login para funcionários/usuários do sistema
   ============================================================= */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { authService } from "@/domains/auth/services/authService";
import { LoginCredentials } from "@/domains/auth/models/Usuario";

export default function UserLogin() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const credentials: LoginCredentials = { usuario, senha };
    const result = await authService.login(credentials);

    if (result.success && result.usuario) {
      localStorage.setItem("currentUser", JSON.stringify(result.usuario));
      toast.success(`Bem-vindo, ${result.usuario.nome}!`);
      navigate("/dashboard");
    } else {
      setError(result.error || "Erro ao fazer login");
      setIsLoading(false);
    }
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
          <h1 className="text-2xl font-black text-white text-center mb-2">Painel Administrativo</h1>
          <p className="text-slate-400 text-sm text-center mb-8">
            Acesse como funcionário para gerenciar clientes e apólices
          </p>

          {/* Error message */}
          {error && (
            <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Username */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Usuário</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  placeholder="seu_usuario"
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
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
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

          {/* Demo credentials */}
          <div className="mt-8 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <p className="text-xs font-semibold text-blue-400 mb-2">Credenciais de Teste:</p>
            <div className="space-y-1 text-xs text-slate-400">
              <p>Consulte o backend para credenciais válidas</p>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-center text-slate-500 text-xs mt-6">
          Sistema de gerenciamento de apólices de seguro de eletrônicos
        </p>
      </div>
    </div>
  );
}
