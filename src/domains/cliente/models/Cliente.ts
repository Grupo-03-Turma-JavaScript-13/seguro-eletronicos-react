export interface Cliente {
  id?: number;
  nome: string;
  email: string;
  dataNascimento: string;
  cpf: string;
  telefone: string;
}

export interface ClienteResponse extends Cliente {
  id: number;
}
