import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Plus, LogOut, Search, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Usuario } from "@/domains/auth/models/Usuario";
import { ClienteResponse } from "@/domains/cliente/models/Cliente";
import { ApoliceResponse } from "../models/Apolice";
import { apoliceService } from "../services/apoliceService";
import { clienteService } from "@/domains/cliente/services/clienteService";
import ApoliceTable from "../components/ApoliceTable";
import ApoliceModal from "../components/ApoliceModal";
import DeleteApoliceModal from "../components/DeleteApoliceModal";
import ClienteModal from "@/domains/cliente/components/ClienteModal";
import DeleteClienteModal from "@/domains/cliente/components/DeleteClienteModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [apolices, setApolices] = useState<ApoliceResponse[]>([]);
  const [clientes, setClientes] = useState<ClienteResponse[]>([]);
  const [isLoadingApolices, setIsLoadingApolices] = useState(true);
  const [isLoadingClientes, setIsLoadingClientes] = useState(false);

  // Apolice modal states
  const [isApoliceModalOpen, setIsApoliceModalOpen] = useState(false);
  const [selectedApolice, setSelectedApolice] = useState<ApoliceResponse | undefined>();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [apoliceToDelete, setApoliceToDelete] = useState<ApoliceResponse | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Cliente modal states
  const [isClienteModalOpen, setIsClienteModalOpen] = useState(false);
  const [selectedCliente, setSelectedCliente] = useState<ClienteResponse | undefined>();
  const [isDeleteClienteModalOpen, setIsDeleteClienteModalOpen] = useState(false);
  const [clienteToDelete, setClienteToDelete] = useState<ClienteResponse | null>(null);
  const [isDeletingCliente, setIsDeletingCliente] = useState(false);

  // Search states
  const [apoliceSearchTerm, setApoliceSearchTerm] = useState("");
  const [clienteSearchTerm, setClienteSearchTerm] = useState("");
  const [filteredApolices, setFilteredApolices] = useState<ApoliceResponse[]>([]);
  const [filteredClientes, setFilteredClientes] = useState<ClienteResponse[]>([]);

  // Verificar autenticação
  useEffect(() => {
    const usuarioData = localStorage.getItem("currentUser");
    if (!usuarioData) {
      navigate("/user-login");
      return;
    }

    const usuarioParsed = JSON.parse(usuarioData) as Usuario;
    setUsuario(usuarioParsed);

    // Carregar apólices
    loadApolices();
  }, [navigate]);

  const loadApolices = async () => {
    try {
      setIsLoadingApolices(true);
      const data = await apoliceService.listarApolices();
      setApolices(data);
      setFilteredApolices(data);
    } catch (error) {
      toast.error("Erro ao carregar apólices");
      console.error(error);
    } finally {
      setIsLoadingApolices(false);
    }
  };

  const loadClientes = async () => {
    try {
      setIsLoadingClientes(true);
      const data = await clienteService.listarClientes();
      setClientes(data);
      setFilteredClientes(data);
    } catch (error) {
      toast.error("Erro ao carregar clientes");
      console.error(error);
    } finally {
      setIsLoadingClientes(false);
    }
  };

  // Filtrar apólices conforme o usuário digita (por ID ou CPF do cliente)
  useEffect(() => {
    if (apoliceSearchTerm.trim() === "") {
      setFilteredApolices(apolices);
      return;
    }

    const term = apoliceSearchTerm.toLowerCase();
    const filtered = apolices.filter(
      (apolice) =>
        apolice.id.toString().includes(term) ||
        apolice.cliente.cpf.includes(term) ||
        apolice.cliente.nome.toLowerCase().includes(term)
    );

    setFilteredApolices(filtered);
  }, [apoliceSearchTerm, apolices]);

  // Filtrar clientes conforme o usuário digita
  useEffect(() => {
    if (clienteSearchTerm.trim() === "") {
      setFilteredClientes(clientes);
      return;
    }

    const term = clienteSearchTerm.toLowerCase();
    const filtered = clientes.filter(
      (cliente) =>
        cliente.nome.toLowerCase().includes(term) ||
        cliente.cpf.includes(term)
    );

    setFilteredClientes(filtered);
  }, [clienteSearchTerm, clientes]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  // Apolice handlers
  const handleAddApolice = () => {
    setSelectedApolice(undefined);
    setIsApoliceModalOpen(true);
  };

  const handleEditApolice = (apolice: ApoliceResponse) => {
    setSelectedApolice(apolice);
    setIsApoliceModalOpen(true);
  };

  const handleDeleteApolice = (apolice: ApoliceResponse) => {
    setApoliceToDelete(apolice);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!apoliceToDelete) return;

    try {
      setIsDeleting(true);
      await apoliceService.deletarApolice(apoliceToDelete.id);
      toast.success("Apólice deletada com sucesso!");
      loadApolices();
      setIsDeleteModalOpen(false);
      setApoliceToDelete(null);
    } catch (error) {
      toast.error("Erro ao deletar apólice");
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleApoliceModalSuccess = () => {
    loadApolices();
  };

  // Cliente handlers
  const handleAddCliente = () => {
    setSelectedCliente(undefined);
    setIsClienteModalOpen(true);
  };

  const handleEditCliente = (cliente: ClienteResponse) => {
    setSelectedCliente(cliente);
    setIsClienteModalOpen(true);
  };

  const handleDeleteCliente = (cliente: ClienteResponse) => {
    setClienteToDelete(cliente);
    setIsDeleteClienteModalOpen(true);
  };

  const handleConfirmDeleteCliente = async () => {
    if (!clienteToDelete) return;

    try {
      setIsDeletingCliente(true);
      await clienteService.deletarCliente(clienteToDelete.id);
      toast.success("Cliente deletado com sucesso!");
      loadClientes();
      setIsDeleteClienteModalOpen(false);
      setClienteToDelete(null);
    } catch (error) {
      toast.error("Erro ao deletar cliente");
      console.error(error);
    } finally {
      setIsDeletingCliente(false);
    }
  };

  const handleClienteModalSuccess = () => {
    loadClientes();
  };

  const handleClientesTabChange = (tab: string) => {
    if (tab === "clientes" && clientes.length === 0) {
      loadClientes();
    }
  };

  // Verificar se cliente tem apólices
  const clienteTemApolices = (clienteId: number): boolean => {
    return apolices.some((apolice) => apolice.cliente.id === clienteId);
  };

  if (!usuario) {
    return null;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">RiverGuard</h1>
              <p className="text-xs text-slate-400">Dashboard de Apólices</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium text-white">{usuario.nome}</p>
              <p className="text-xs text-slate-400">{usuario.usuario}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="gap-2"
            >
              <LogOut className="w-4 h-4" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Tabs defaultValue="apolices" onValueChange={handleClientesTabChange}>
          <TabsList className="bg-slate-800/50 border border-slate-700">
            <TabsTrigger value="apolices">Apólices</TabsTrigger>
            <TabsTrigger value="clientes">Clientes</TabsTrigger>
          </TabsList>

          {/* Aba de Apólices */}
          <TabsContent value="apolices" className="space-y-6 mt-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Apólices</h2>
                <p className="text-sm text-slate-400 mt-1">
                  Gerenciar apólices de seguros
                </p>
              </div>
              <Button
                onClick={handleAddApolice}
                className="gap-2 bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="w-4 h-4" />
                Nova Apólice
              </Button>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3.5 w-5 h-5 text-slate-500" />
              <Input
                type="text"
                value={apoliceSearchTerm}
                onChange={(e) => setApoliceSearchTerm(e.target.value)}
                placeholder="Buscar por ID da apólice, CPF ou nome do cliente..."
                className="pl-10 bg-slate-800/50 border-slate-700 text-white"
              />
            </div>

            <ApoliceTable
              apolices={filteredApolices}
              onEdit={handleEditApolice}
              onDelete={handleDeleteApolice}
              isLoading={isLoadingApolices}
            />
          </TabsContent>

          {/* Aba de Clientes */}
          <TabsContent value="clientes" className="space-y-6 mt-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Clientes</h2>
                <p className="text-sm text-slate-400 mt-1">
                  Gerenciar clientes cadastrados no sistema
                </p>
              </div>
              <Button
                onClick={handleAddCliente}
                className="gap-2 bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="w-4 h-4" />
                Novo Cliente
              </Button>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3.5 w-5 h-5 text-slate-500" />
              <Input
                type="text"
                value={clienteSearchTerm}
                onChange={(e) => setClienteSearchTerm(e.target.value)}
                placeholder="Buscar por nome ou CPF..."
                className="pl-10 bg-slate-800/50 border-slate-700 text-white"
              />
            </div>

            {/* Clientes Table */}
            {isLoadingClientes ? (
              <div className="flex items-center justify-center py-12">
                <div className="w-8 h-8 border-4 border-slate-700 border-t-blue-500 rounded-full animate-spin" />
              </div>
            ) : filteredClientes.length === 0 ? (
              <div className="text-center py-12 text-slate-400">
                Nenhum cliente encontrado
              </div>
            ) : (
              <div className="border border-slate-700 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-800/50 border-b border-slate-700">
                      <th className="px-6 py-3 text-left text-sm font-medium text-slate-300">
                        Nome
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-slate-300">
                        CPF
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-slate-300">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-slate-300">
                        Telefone
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-slate-300">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredClientes.map((cliente) => (
                      <tr
                        key={cliente.id}
                        className="border-b border-slate-700 hover:bg-slate-800/30 transition"
                      >
                        <td className="px-6 py-4 text-slate-300">
                          {cliente.nome}
                        </td>
                        <td className="px-6 py-4 text-slate-300 font-mono text-sm">
                          {cliente.cpf}
                        </td>
                        <td className="px-6 py-4 text-slate-300">
                          {cliente.email}
                        </td>
                        <td className="px-6 py-4 text-slate-300">
                          {cliente.telefone}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEditCliente(cliente)}
                              className="p-2 hover:bg-slate-700 rounded transition text-blue-400 hover:text-blue-300"
                              title="Editar"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteCliente(cliente)}
                              className="p-2 hover:bg-slate-700 rounded transition text-red-400 hover:text-red-300"
                              title="Deletar"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>

      {/* Modals */}
      {usuario && (
        <>
          <ApoliceModal
            isOpen={isApoliceModalOpen}
            apolice={selectedApolice}
            usuarioId={usuario.id}
            onClose={() => setIsApoliceModalOpen(false)}
            onSuccess={handleApoliceModalSuccess}
          />
          <DeleteApoliceModal
            apolice={apoliceToDelete}
            isOpen={isDeleteModalOpen}
            isLoading={isDeleting}
            onConfirm={handleConfirmDelete}
            onCancel={() => {
              setIsDeleteModalOpen(false);
              setApoliceToDelete(null);
            }}
          />
          <ClienteModal
            isOpen={isClienteModalOpen}
            cliente={selectedCliente}
            onClose={() => setIsClienteModalOpen(false)}
            onSuccess={handleClienteModalSuccess}
          />
          <DeleteClienteModal
            cliente={clienteToDelete}
            isOpen={isDeleteClienteModalOpen}
            isLoading={isDeletingCliente}
            temApolices={clienteToDelete ? clienteTemApolices(clienteToDelete.id) : false}
            onConfirm={handleConfirmDeleteCliente}
            onCancel={() => {
              setIsDeleteClienteModalOpen(false);
              setClienteToDelete(null);
            }}
          />
        </>
      )}
    </div>
  );
}
