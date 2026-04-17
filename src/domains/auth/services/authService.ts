import axios from "axios";
import { Usuario, LoginCredentials, LoginResponse } from "../models/Usuario";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const authService = {
  /**
   * Busca um usuário pelo nome de usuário
   */
  async buscarUsuario(usuario: string): Promise<Usuario | null> {
    try {
      const response = await api.get<Usuario>(`/usuarios/buscar/${usuario}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar usuário ${usuario}:`, error);
      return null;
    }
  },

  /**
   * Realiza login validando usuário e senha
   */
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    try {
      const usuario = await this.buscarUsuario(credentials.usuario);

      if (!usuario) {
        return {
          success: false,
          error: "Usuário não encontrado",
        };
      }

      // Validar senha (comparação simples - idealmente seria hash no backend)
      if (usuario.senha !== credentials.senha) {
        return {
          success: false,
          error: "Senha incorreta",
        };
      }

      // Retornar usuário sem a senha
      const { senha, ...usuarioSemSenha } = usuario;
      return {
        success: true,
        usuario: usuarioSemSenha,
      };
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return {
        success: false,
        error: "Erro ao conectar com o servidor",
      };
    }
  },

  /**
   * Obtém um usuário pelo ID
   */
  async obterUsuarioPorId(id: number): Promise<Usuario | null> {
    try {
      const response = await api.get<Usuario>(`/usuarios/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao obter usuário ${id}:`, error);
      return null;
    }
  },
};
