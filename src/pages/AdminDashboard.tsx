/* =============================================================
   RiverGuard Admin Dashboard
   Design: Shield Protocol (Premium SaaS Dark)
   Painel administrativo com filtros avançados
   ============================================================= */

import { useState, useEffect } from "react";
import {
  Shield,
  Plus,
  LogOut,
  Settings,
  Bell,
  Users,
  FileText,
  Trash2,
  Edit,
  X,
  Search,
  Filter,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Entidades conforme backend
interface Cliente {
  id: number;
  nome: string;
  email: string;
  dataNascimento: string;
  cpf: string;
  telefone: string;
}

interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
}

interface Apolice {
  id: number;
  tipoDispositivo: string;
  marca: string;
  modelo: string;
  numeroSerie: string;
  anoFabricacao: number;
  anoAquisicao: number;
  valorBase: number;
  valorDesconto: number;
  valorFinal: number;
  dataInicio: string;
  dataFim: string;
  cliente: { id: number };
  usuario: { id: number };
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<Usuario | null>(null);
  const [activeTab, setActiveTab] = useState<"clientes" | "apolices">("clientes");
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [apolices, setApolices] = useState<Apolice[]>([]);
  const [showClienteForm, setShowClienteForm] = useState(false);
  const [showApoliceForm, setShowApoliceForm] = useState(false);

  // Filtros
  const [filtroClienteNome, setFiltroClienteNome] = useState("");
  const [filtroClienteCPF, setFiltroClienteCPF] = useState("");
  const [filtroApolicePrecoMin, setFiltroApolicePrecoMin] = useState("");
  const [filtroApolicePrecoMax, setFiltroApolicePrecoMax] = useState("");
  const [filtroApoliceDispositivo, setFiltroApoliceDispositivo] = useState("");

  const [novoCliente, setNovoCliente] = useState({
    nome: "",
    email: "",
    dataNascimento: "",
    cpf: "",
    telefone: "",
  });

  const [novaApolice, setNovaApolice] = useState({
    tipoDispositivo: "",
    marca: "",
    modelo: "",
    numeroSerie: "",
    anoFabricacao: new Date().getFullYear(),
    anoAquisicao: new Date().getFullYear(),
    valorBase: 0,
    clienteId: "",
  });

  // Carregar usuário logado
  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user) {
      navigate("/user-login");
    } else {
      setCurrentUser(JSON.parse(user));
    }
  }, [setLocation]);

  // Carregar dados do localStorage
  useEffect(() => {
    const savedClientes = localStorage.getItem("clientes");
    const savedApolices = localStorage.getItem("apolices");

    if (savedClientes) setClientes(JSON.parse(savedClientes));
    if (savedApolices) setApolices(JSON.parse(savedApolices));
  }, []);

  // Salvar dados
  useEffect(() => {
    localStorage.setItem("clientes", JSON.stringify(clientes));
  }, [clientes]);

  useEffect(() => {
    localStorage.setItem("apolices", JSON.stringify(apolices));
  }, [apolices]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/user-login");
  };

  const handleAddCliente = (e: React.FormEvent) => {
    e.preventDefault();
    if (!novoCliente.nome || !novoCliente.cpf || !novoCliente.email) {
      alert("Preencha os campos obrigatórios!");
      return;
    }

    const cliente: Cliente = {
      id: Math.max(...clientes.map((c) => c.id), 0) + 1,
      ...novoCliente,
    };

    setClientes([...clientes, cliente]);
    setNovoCliente({
      nome: "",
      email: "",
      dataNascimento: "",
      cpf: "",
      telefone: "",
    });
    setShowClienteForm(false);
  };

  const handleDeleteCliente = (id: number) => {
    setClientes(clientes.filter((c) => c.id !== id));
    setApolices(apolices.filter((a) => a.cliente.id !== id));
  };

  const handleAddApolice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!novaApolice.clienteId || !novaApolice.tipoDispositivo || !novaApolice.valorBase) {
      alert("Preencha os campos obrigatórios!");
      return;
    }

    // Cálculo de desconto: 10% se aparelho tem > 3 anos
    const anosUso = new Date().getFullYear() - novaApolice.anoFabricacao;
    const valorDesconto = anosUso > 3 ? novaApolice.valorBase * 0.1 : 0;
    const valorFinal = novaApolice.valorBase - valorDesconto;

    const apolice: Apolice = {
      id: Math.max(...apolices.map((a) => a.id), 0) + 1,
      tipoDispositivo: novaApolice.tipoDispositivo,
      marca: novaApolice.marca,
      modelo: novaApolice.modelo,
      numeroSerie: novaApolice.numeroSerie,
      anoFabricacao: novaApolice.anoFabricacao,
      anoAquisicao: novaApolice.anoAquisicao,
      valorBase: novaApolice.valorBase,
      valorDesconto,
      valorFinal,
      dataInicio: new Date().toISOString(),
      dataFim: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
      cliente: { id: parseInt(novaApolice.clienteId) },
      usuario: { id: currentUser?.id || 1 },
    };

    setApolices([...apolices, apolice]);
    setNovaApolice({
      tipoDispositivo: "",
      marca: "",
      modelo: "",
      numeroSerie: "",
      anoFabricacao: new Date().getFullYear(),
      anoAquisicao: new Date().getFullYear(),
      valorBase: 0,
      clienteId: "",
    });
    setShowApoliceForm(false);
  };

  const handleDeleteApolice = (id: number) => {
    setApolices(apolices.filter((a) => a.id !== id));
  };

  // Filtros
  const clientesFiltrados = clientes.filter((c) => {
    const nomeMatch = c.nome.toLowerCase().includes(filtroClienteNome.toLowerCase());
    const cpfMatch = c.cpf.includes(filtroClienteCPF);
    return nomeMatch && cpfMatch;
  });

  const apolicesFiltradas = apolices
    .filter((a) => a.usuario.id === currentUser?.id)
    .filter((a) => {
      const dispositivoMatch = a.tipoDispositivo
        .toLowerCase()
        .includes(filtroApoliceDispositivo.toLowerCase());
      const precoMin = filtroApolicePrecoMin ? parseFloat(filtroApolicePrecoMin) : 0;
      const precoMax = filtroApolicePrecoMax ? parseFloat(filtroApolicePrecoMax) : Infinity;
      const precoMatch = a.valorFinal >= precoMin && a.valorFinal <= precoMax;
      return dispositivoMatch && precoMatch;
    });

  if (!currentUser) return null;

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
            <span className="ml-4 text-slate-400 text-sm">Admin • {currentUser.nome}</span>
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
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-white/10">
          <button
            onClick={() => setActiveTab("clientes")}
            className={`flex items-center gap-2 px-4 py-3 font-semibold border-b-2 transition-all ${
              activeTab === "clientes"
                ? "text-blue-400 border-blue-400"
                : "text-slate-400 border-transparent hover:text-white"
            }`}
          >
            <Users className="w-5 h-5" />
            Clientes ({clientesFiltrados.length})
          </button>
          <button
            onClick={() => setActiveTab("apolices")}
            className={`flex items-center gap-2 px-4 py-3 font-semibold border-b-2 transition-all ${
              activeTab === "apolices"
                ? "text-blue-400 border-blue-400"
                : "text-slate-400 border-transparent hover:text-white"
            }`}
          >
            <FileText className="w-5 h-5" />
            Apólices ({apolicesFiltradas.length})
          </button>
        </div>

        {/* CLIENTES TAB */}
        {activeTab === "clientes" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-white">Meus Clientes</h2>
              <button
                onClick={() => setShowClienteForm(!showClienteForm)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all"
              >
                <Plus className="w-4 h-4" />
                Novo Cliente
              </button>
            </div>

            {/* Filtros */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-white/5 border border-white/10 rounded-lg">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Buscar por Nome</label>
                <input
                  type="text"
                  placeholder="Digite o nome..."
                  value={filtroClienteNome}
                  onChange={(e) => setFiltroClienteNome(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Buscar por CPF</label>
                <input
                  type="text"
                  placeholder="Digite o CPF..."
                  value={filtroClienteCPF}
                  onChange={(e) => setFiltroClienteCPF(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Formulário */}
            {showClienteForm && (
              <form onSubmit={handleAddCliente} className="mb-6 p-4 bg-white/5 border border-white/10 rounded-lg space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nome"
                    value={novoCliente.nome}
                    onChange={(e) => setNovoCliente({ ...novoCliente, nome: e.target.value })}
                    className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={novoCliente.email}
                    onChange={(e) => setNovoCliente({ ...novoCliente, email: e.target.value })}
                    className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="CPF"
                    value={novoCliente.cpf}
                    onChange={(e) => setNovoCliente({ ...novoCliente, cpf: e.target.value })}
                    className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="tel"
                    placeholder="Telefone"
                    value={novoCliente.telefone}
                    onChange={(e) => setNovoCliente({ ...novoCliente, telefone: e.target.value })}
                    className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="date"
                    value={novoCliente.dataNascimento}
                    onChange={(e) => setNovoCliente({ ...novoCliente, dataNascimento: e.target.value })}
                    className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all"
                  >
                    Salvar Cliente
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowClienteForm(false)}
                    className="px-4 py-2 border border-white/20 text-slate-300 hover:text-white rounded-lg transition-all"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            )}

            {/* Lista de Clientes */}
            <div className="space-y-3">
              {clientesFiltrados.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Nenhum cliente encontrado</p>
                </div>
              ) : (
                clientesFiltrados.map((cliente) => (
                  <div key={cliente.id} className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-all">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-white">{cliente.nome}</h3>
                        <p className="text-sm text-slate-400">{cliente.email}</p>
                        <p className="text-xs text-slate-500">CPF: {cliente.cpf}</p>
                      </div>
                      <button
                        onClick={() => handleDeleteCliente(cliente.id)}
                        className="p-2 hover:bg-red-500/20 text-red-400 rounded-lg transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* APÓLICES TAB */}
        {activeTab === "apolices" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-white">Minhas Apólices</h2>
              <button
                onClick={() => setShowApoliceForm(!showApoliceForm)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all"
              >
                <Plus className="w-4 h-4" />
                Nova Apólice
              </button>
            </div>

            {/* Filtros */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-white/5 border border-white/10 rounded-lg">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Tipo de Dispositivo</label>
                <input
                  type="text"
                  placeholder="Ex: Smartphone, Notebook..."
                  value={filtroApoliceDispositivo}
                  onChange={(e) => setFiltroApoliceDispositivo(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Preço Mínimo (R$)</label>
                <input
                  type="number"
                  placeholder="0"
                  value={filtroApolicePrecoMin}
                  onChange={(e) => setFiltroApolicePrecoMin(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Preço Máximo (R$)</label>
                <input
                  type="number"
                  placeholder="999999"
                  value={filtroApolicePrecoMax}
                  onChange={(e) => setFiltroApolicePrecoMax(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Formulário */}
            {showApoliceForm && (
              <form onSubmit={handleAddApolice} className="mb-6 p-4 bg-white/5 border border-white/10 rounded-lg space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    value={novaApolice.clienteId}
                    onChange={(e) => setNovaApolice({ ...novaApolice, clienteId: e.target.value })}
                    className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Selecione um Cliente</option>
                    {clientes.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.nome}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="Tipo de Dispositivo"
                    value={novaApolice.tipoDispositivo}
                    onChange={(e) => setNovaApolice({ ...novaApolice, tipoDispositivo: e.target.value })}
                    className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Marca"
                    value={novaApolice.marca}
                    onChange={(e) => setNovaApolice({ ...novaApolice, marca: e.target.value })}
                    className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Modelo"
                    value={novaApolice.modelo}
                    onChange={(e) => setNovaApolice({ ...novaApolice, modelo: e.target.value })}
                    className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Número de Série"
                    value={novaApolice.numeroSerie}
                    onChange={(e) => setNovaApolice({ ...novaApolice, numeroSerie: e.target.value })}
                    className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="number"
                    placeholder="Ano de Fabricação"
                    value={novaApolice.anoFabricacao}
                    onChange={(e) => setNovaApolice({ ...novaApolice, anoFabricacao: parseInt(e.target.value) })}
                    className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="number"
                    placeholder="Ano de Aquisição"
                    value={novaApolice.anoAquisicao}
                    onChange={(e) => setNovaApolice({ ...novaApolice, anoAquisicao: parseInt(e.target.value) })}
                    className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="number"
                    placeholder="Valor Base (R$)"
                    value={novaApolice.valorBase}
                    onChange={(e) => setNovaApolice({ ...novaApolice, valorBase: parseFloat(e.target.value) })}
                    className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all"
                  >
                    Salvar Apólice
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowApoliceForm(false)}
                    className="px-4 py-2 border border-white/20 text-slate-300 hover:text-white rounded-lg transition-all"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            )}

            {/* Lista de Apólices */}
            <div className="space-y-3">
              {apolicesFiltradas.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Nenhuma apólice encontrada</p>
                </div>
              ) : (
                apolicesFiltradas.map((apolice) => {
                  const cliente = clientes.find((c) => c.id === apolice.cliente.id);
                  return (
                    <div key={apolice.id} className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/30 transition-all">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-bold text-white">
                            {apolice.marca} {apolice.modelo} ({apolice.tipoDispositivo})
                          </h3>
                          <p className="text-sm text-slate-400">Cliente: {cliente?.nome}</p>
                          <div className="flex gap-4 mt-2 text-xs text-slate-500">
                            <span>Série: {apolice.numeroSerie}</span>
                            <span>Fabricação: {apolice.anoFabricacao}</span>
                          </div>
                          <div className="flex gap-4 mt-2">
                            <span className="text-sm">
                              <span className="text-slate-400">Valor Base:</span> R$ {apolice.valorBase.toFixed(2)}
                            </span>
                            {apolice.valorDesconto > 0 && (
                              <span className="text-sm text-green-400">
                                Desconto: R$ {apolice.valorDesconto.toFixed(2)}
                              </span>
                            )}
                            <span className="text-sm font-bold text-blue-400">
                              Valor Final: R$ {apolice.valorFinal.toFixed(2)}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDeleteApolice(apolice.id)}
                          className="p-2 hover:bg-red-500/20 text-red-400 rounded-lg transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
