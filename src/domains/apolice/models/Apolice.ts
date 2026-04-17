import { Cliente } from "@/domains/cliente/models/Cliente";
import { Usuario } from "@/domains/auth/models/Usuario";

export interface Apolice {
  id?: number;
  tipoDispositivo: string;
  marca: string;
  modelo: string;
  numeroSerie: string;
  anoFabricacao: number;
  anoAquisicao: number;
  valorBase: number;
  dataInicio: string;
  dataFim: string;
  cliente: { id: number };
  usuario: { id: number };
}

export interface ApoliceResponse extends Omit<Apolice, 'cliente' | 'usuario'> {
  id: number;
  valorDesconto: number;
  valorFinal: number;
  dataCriacao: string;
  cliente: Cliente;
  usuario: Usuario;
}

export interface ApoliceFormData {
  tipoDispositivo: string;
  marca: string;
  modelo: string;
  numeroSerie: string;
  anoFabricacao: string;
  anoAquisicao: string;
  valorBase: string;
  dataInicio: string;
  dataFim: string;
  clienteId: number;
}
