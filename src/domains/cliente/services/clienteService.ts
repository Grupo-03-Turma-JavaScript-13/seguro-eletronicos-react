import axios from "axios";
import { Cliente, ClienteResponse } from "../models/Cliente";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const clienteService = {
  /**
   * Lista todos os clientes
   */
  async listarClientes(): Promise<ClienteResponse[]> {
    try {
      const response = await api.get<ClienteResponse[]>("/clientes");
      return response.data;
    } catch (error) {
      console.error("Erro ao listar clientes:", error);
      throw error;
    }
  },

  /**
   * Obtém um cliente pelo ID
   */
  async obterClientePorId(id: number): Promise<ClienteResponse | null> {
    try {
      const response = await api.get<ClienteResponse>(`/clientes/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao obter cliente ${id}:`, error);
      return null;
    }
  },

  /**
   * Busca clientes pelo nome
   */
  async buscarClientePorNome(nome: string): Promise<ClienteResponse[]> {
    try {
      const response = await api.get<ClienteResponse[]>(`/clientes/buscarnome/${nome}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar cliente por nome ${nome}:`, error);
      throw error;
    }
  },

  /**
   * Busca cliente pelo CPF
   */
  async buscarClientePorCPF(cpf: string): Promise<ClienteResponse | null> {
    try {
      const response = await api.get<ClienteResponse>(`/clientes/buscarcpf/${cpf}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar cliente por CPF ${cpf}:`, error);
      return null;
    }
  },

  /**
   * Cria um novo cliente
   */
  async criarCliente(cliente: Cliente): Promise<ClienteResponse> {
    try {
      const response = await api.post<ClienteResponse>("/clientes", cliente);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
      throw error;
    }
  },

  /**
   * Atualiza um cliente existente
   */
  async atualizarCliente(cliente: ClienteResponse): Promise<ClienteResponse> {
    try {
      const response = await api.put<ClienteResponse>("/clientes", cliente);
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar cliente:", error);
      throw error;
    }
  },

  /**
   * Deleta um cliente
   */
  async deletarCliente(id: number): Promise<void> {
    try {
      await api.delete(`/clientes/${id}`);
    } catch (error) {
      console.error(`Erro ao deletar cliente ${id}:`, error);
      throw error;
    }
  },
};
