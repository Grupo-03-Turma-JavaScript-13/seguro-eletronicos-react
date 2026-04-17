import axios from "axios";
import { Apolice, ApoliceResponse } from "../models/Apolice";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const apoliceService = {
  /**
   * Lista todas as apólices
   */
  async listarApolices(): Promise<ApoliceResponse[]> {
    try {
      const response = await api.get<ApoliceResponse[]>("/apolices");
      return response.data;
    } catch (error) {
      console.error("Erro ao listar apólices:", error);
      throw error;
    }
  },

  /**
   * Obtém uma apólice pelo ID
   */
  async obterApolice(id: number): Promise<ApoliceResponse | null> {
    try {
      const response = await api.get<ApoliceResponse>(`/apolices/apolice/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao obter apólice ${id}:`, error);
      return null;
    }
  },

  /**
   * Busca apólices por tipo de dispositivo
   */
  async buscarPorDispositivo(dispositivo: string): Promise<ApoliceResponse[]> {
    try {
      const response = await api.get<ApoliceResponse[]>(`/apolices/dispositivos/${dispositivo}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar apólices por dispositivo ${dispositivo}:`, error);
      throw error;
    }
  },

  /**
   * Busca apólices por faixa de preço
   */
  async buscarPorFaixaPreco(min: number, max: number): Promise<ApoliceResponse[]> {
    try {
      const response = await api.get<ApoliceResponse[]>(`/apolices/buscar/${min}/${max}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar apólices por faixa de preço:`, error);
      throw error;
    }
  },

  /**
   * Cria uma nova apólice
   */
  async criarApolice(apolice: Apolice): Promise<ApoliceResponse> {
    try {
      const response = await api.post<ApoliceResponse>("/apolices", apolice);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar apólice:", error);
      throw error;
    }
  },

  /**
   * Atualiza uma apólice existente
   */
  async atualizarApolice(apolice: ApoliceResponse): Promise<ApoliceResponse> {
    try {
      const response = await api.put<ApoliceResponse>("/apolices", apolice);
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar apólice:", error);
      throw error;
    }
  },

  /**
   * Deleta uma apólice
   */
  async deletarApolice(id: number): Promise<void> {
    try {
      await api.delete(`/apolices/${id}`);
    } catch (error) {
      console.error(`Erro ao deletar apólice ${id}:`, error);
      throw error;
    }
  },
};
