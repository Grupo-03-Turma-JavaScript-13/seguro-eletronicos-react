/* =============================================================
   RiverGuard Dashboard Page
   Design: Shield Protocol (Premium SaaS Dark)
   Gestão de apólices e dados do cliente
   ============================================================= */

import { useState } from "react";
import { Shield, Plus, LogOut, Settings, Bell, Smartphone, Trash2, Edit, CheckCircle, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Policy {
  id: string;
  device: string;
  model: string;
  value: number;
  premium: number;
  status: "active" | "pending" | "expired";
  createdAt: string;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [policies, setPolicies] = useState<Policy[]>([
    {
      id: "1",
      device: "iPhone 15 Pro",
      model: "Apple",
      value: 7999,
      premium: 59,
      status: "active",
      createdAt: "2026-04-10",
    },
  ]);
  const [showAddPolicy, setShowAddPolicy] = useState(false);
  const [newPolicy, setNewPolicy] = useState({
    device: "",
    model: "",
    value: "",
  });

  const user = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user") || "{}") : {};

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("clientData");
    navigate("/");
  };

  const handleAddPolicy = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPolicy.device || !newPolicy.model || !newPolicy.value) {
      alert("Preencha todos os campos!");
      return;
    }

    const policy: Policy = {
      id: String(policies.length + 1),
      device: newPolicy.device,
      model: newPolicy.model,
      value: Number(newPolicy.value),
      premium: Math.round(Number(newPolicy.value) * 0.01),
      status: "active",
      createdAt: new Date().toISOString().split("T")[0],
    };

    setPolicies([...policies, policy]);
    setNewPolicy({ device: "", model: "", value: "" });
    setShowAddPolicy(false);
  };

  const handleDeletePolicy = (id: string) => {
    setPolicies(policies.filter((p) => p.id !== id));
  };

  const totalValue = policies.reduce((sum, p) => sum + p.value, 0);
  const totalPremium = policies.reduce((sum, p) => sum + p.premium, 0);

  return (
    <div className="min-h-screen" style={{ background: "#0F172A", fontFamily: "'Outfit', sans-serif" }}>
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0A1628]/50 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-400" fill="currentColor" fillOpacity={0.3} strokeWidth={1.5} />
            <span className="font-bold text-lg">
              <span className="text-white">River</span>
              <span className="text-blue-400">Guard</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all">
              <Bell className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all">
              <Settings className="w-5 h-5" />
            </button>
            <button
              onClick={handleLogout}
              className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto px-4 lg:px-8 max-w-7xl py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-white mb-1">Bem-vindo, {user.name}!</h1>
          <p className="text-slate-400">Gerencie suas apólices e dispositivos protegidos</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card-glass rounded-2xl p-6 border border-white/10">
            <p className="text-slate-400 text-sm mb-2">Apólices Ativas</p>
            <p className="text-3xl font-black text-white">{policies.filter((p) => p.status === "active").length}</p>
          </div>
          <div className="card-glass rounded-2xl p-6 border border-white/10">
            <p className="text-slate-400 text-sm mb-2">Valor Total Protegido</p>
            <p className="text-3xl font-black text-blue-400">R$ {totalValue.toLocaleString("pt-BR")}</p>
          </div>
          <div className="card-glass rounded-2xl p-6 border border-white/10">
            <p className="text-slate-400 text-sm mb-2">Prêmio Mensal</p>
            <p className="text-3xl font-black text-green-400">R$ {totalPremium.toLocaleString("pt-BR")}</p>
          </div>
        </div>

        {/* Policies Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-white">Minhas Apólices</h2>
            <button
              onClick={() => setShowAddPolicy(!showAddPolicy)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all"
            >
              <Plus className="w-4 h-4" />
              Nova Apólice
            </button>
          </div>

          {/* Add Policy Form */}
          {showAddPolicy && (
            <div className="card-glass rounded-2xl p-6 border border-blue-500/30 bg-blue-500/5 mb-6">
              <form onSubmit={handleAddPolicy} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Dispositivo</label>
                    <input
                      type="text"
                      value={newPolicy.device}
                      onChange={(e) => setNewPolicy({ ...newPolicy, device: e.target.value })}
                      placeholder="ex: iPhone 15 Pro"
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Marca/Modelo</label>
                    <input
                      type="text"
                      value={newPolicy.model}
                      onChange={(e) => setNewPolicy({ ...newPolicy, model: e.target.value })}
                      placeholder="ex: Apple"
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Valor (R$)</label>
                    <input
                      type="number"
                      value={newPolicy.value}
                      onChange={(e) => setNewPolicy({ ...newPolicy, value: e.target.value })}
                      placeholder="ex: 5000"
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
                      required
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all"
                  >
                    Adicionar Apólice
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddPolicy(false)}
                    className="flex-1 py-2 border border-white/15 hover:border-white/30 text-white font-bold rounded-lg transition-all"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Policies List */}
          {policies.length > 0 ? (
            <div className="space-y-4">
              {policies.map((policy) => (
                <div key={policy.id} className="card-glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                        <Smartphone className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg">{policy.device}</h3>
                        <p className="text-slate-400 text-sm">{policy.model}</p>
                        <div className="flex items-center gap-4 mt-3 text-sm">
                          <span className="text-slate-400">
                            Valor: <span className="text-white font-semibold">R$ {policy.value.toLocaleString("pt-BR")}</span>
                          </span>
                          <span className="text-slate-400">
                            Prêmio: <span className="text-white font-semibold">R$ {policy.premium.toLocaleString("pt-BR")}/mês</span>
                          </span>
                          <span className="text-slate-400">
                            Desde: <span className="text-white font-semibold">{policy.createdAt}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Status + Actions */}
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-xs font-semibold text-green-400">Ativa</span>
                      </div>
                      <button className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeletePolicy(policy.id)}
                        className="w-9 h-9 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 flex items-center justify-center text-red-400 hover:text-red-300 transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="card-glass rounded-2xl p-12 border border-white/10 text-center">
              <Smartphone className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400 mb-4">Você ainda não tem apólices cadastradas</p>
              <button
                onClick={() => setShowAddPolicy(true)}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all"
              >
                <Plus className="w-4 h-4" />
                Adicionar Primeira Apólice
              </button>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all cursor-pointer">
            <h3 className="text-white font-bold mb-2">Abrir Sinistro</h3>
            <p className="text-slate-400 text-sm mb-4">Registre um roubo ou dano ao seu dispositivo</p>
            <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
              Começar →
            </button>
          </div>
          <div className="card-glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all cursor-pointer">
            <h3 className="text-white font-bold mb-2">Histórico de Sinistros</h3>
            <p className="text-slate-400 text-sm mb-4">Veja todos os sinistros já processados</p>
            <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
              Ver histórico →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
