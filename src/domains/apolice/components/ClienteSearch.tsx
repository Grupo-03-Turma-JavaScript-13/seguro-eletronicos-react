import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { ClienteResponse } from "@/domains/cliente/models/Cliente";
import { clienteService } from "@/domains/cliente/services/clienteService";
import { toast } from "sonner";

interface ClienteSearchProps {
  value: ClienteResponse | null;
  onChange: (cliente: ClienteResponse | null) => void;
  disabled?: boolean;
}

export default function ClienteSearch({
  value,
  onChange,
  disabled = false,
}: ClienteSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [clientes, setClientes] = useState<ClienteResponse[]>([]);
  const [filteredClientes, setFilteredClientes] = useState<ClienteResponse[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Carregar clientes ao montar
  useEffect(() => {
    const loadClientes = async () => {
      try {
        setIsLoading(true);
        const data = await clienteService.listarClientes();
        setClientes(data);
      } catch (error) {
        toast.error("Erro ao carregar clientes");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadClientes();
  }, []);

  // Filtrar clientes conforme o usuário digita
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredClientes([]);
      return;
    }

    const term = searchTerm.toLowerCase();
    const filtered = clientes.filter(
      (cliente) =>
        cliente.nome.toLowerCase().includes(term) ||
        cliente.cpf.includes(term)
    );

    setFilteredClientes(filtered);
  }, [searchTerm, clientes]);

  const handleSelectCliente = (cliente: ClienteResponse) => {
    onChange(cliente);
    setSearchTerm("");
    setIsOpen(false);
  };

  const handleClear = () => {
    onChange(null);
    setSearchTerm("");
  };

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-slate-300 mb-2">
        Cliente
      </label>

      {value ? (
        <div className="flex items-center justify-between bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5">
          <div>
            <p className="text-white font-medium">{value.nome}</p>
            <p className="text-xs text-slate-400">
              CPF: {value.cpf || clientes.find(c => c.id === value.id)?.cpf || "Carregando..."} |
              Email: {value.email || clientes.find(c => c.id === value.id)?.email || "Carregando..."}
            </p>
          </div>
          <button
            type="button"
            onClick={handleClear}
            disabled={disabled}
            className="p-1 hover:bg-slate-700 rounded transition disabled:opacity-50"
          >
            <X className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      ) : (
        <div className="relative">
          <Search className="absolute left-3 top-3.5 w-5 h-5 text-slate-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder="Buscar por nome ou CPF..."
            disabled={disabled || isLoading}
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition disabled:opacity-50"
          />

          {/* Dropdown */}
          {isOpen && filteredClientes.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
              {filteredClientes.map((cliente) => (
                <button
                  key={cliente.id}
                  type="button"
                  onClick={() => handleSelectCliente(cliente)}
                  className="w-full text-left px-4 py-3 hover:bg-slate-700 transition border-b border-slate-700 last:border-b-0"
                >
                  <p className="text-white font-medium">{cliente.nome}</p>
                  <p className="text-xs text-slate-400">
                    CPF: {cliente.cpf} | Email: {cliente.email}
                  </p>
                </button>
              ))}
            </div>
          )}

          {isOpen && searchTerm && filteredClientes.length === 0 && !isLoading && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-50 p-4 text-center text-slate-400">
              Nenhum cliente encontrado
            </div>
          )}
        </div>
      )}
    </div>
  );
}