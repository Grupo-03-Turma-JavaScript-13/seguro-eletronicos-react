export interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha?: string;
  email?: string;
}

export interface LoginCredentials {
  usuario: string;
  senha: string;
}

export interface LoginResponse {
  success: boolean;
  usuario?: Usuario;
  error?: string;
}
