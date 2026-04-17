import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ClienteResponse } from "../models/Cliente";
import { clienteService } from "../services/clienteService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const clienteSchema = z.object({
  nome: z.string().min(5, "Nome deve ter no mínimo 5 caracteres"),
  email: z.string().email("Email inválido"),
  cpf: z.string().regex(/^\d{11}$/, "CPF deve ter 11 dígitos"),
  telefone: z.string().regex(/^\d{11}$/, "Telefone deve ter 11 dígitos"),
  dataNascimento: z.string().min(1, "Data de nascimento obrigatória"),
});

type ClienteFormData = z.infer<typeof clienteSchema>;

interface ClienteFormProps {
  cliente?: ClienteResponse;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function ClienteForm({
  cliente,
  onSuccess,
  onCancel,
}: ClienteFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClienteFormData>({
    resolver: zodResolver(clienteSchema),
    defaultValues: cliente
      ? {
          nome: cliente.nome,
          email: cliente.email,
          cpf: cliente.cpf,
          telefone: cliente.telefone,
          dataNascimento: cliente.dataNascimento,
        }
      : {
          nome: "",
          email: "",
          cpf: "",
          telefone: "",
          dataNascimento: "",
        },
  });

  const onSubmit = async (data: ClienteFormData) => {
    setIsLoading(true);

    try {
      if (cliente) {
        // Montar objeto ClienteResponse completo para atualização
        const clienteAtualizado: ClienteResponse = {
          id: cliente.id,
          nome: data.nome,
          email: data.email,
          cpf: data.cpf,
          telefone: data.telefone,
          dataNascimento: data.dataNascimento,
        };
        await clienteService.atualizarCliente(clienteAtualizado);
        toast.success("Cliente atualizado com sucesso!");
      } else {
        await clienteService.criarCliente(data);
        toast.success("Cliente criado com sucesso!");
      }

      onSuccess();
    } catch (error) {
      toast.error("Erro ao salvar cliente");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Grid de campos */}
      <div className="grid grid-cols-1 gap-4">
        {/* Nome */}
        <div>
          <Label className="text-slate-300">Nome</Label>
          <Input
            {...register("nome")}
            placeholder="Ex: João Silva"
            disabled={isLoading}
            className="bg-slate-800/50 border-slate-700 text-white"
          />
          {errors.nome && (
            <p className="text-xs text-red-400 mt-1">{errors.nome.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <Label className="text-slate-300">Email</Label>
          <Input
            {...register("email")}
            type="email"
            placeholder="Ex: joao@email.com"
            disabled={isLoading}
            className="bg-slate-800/50 border-slate-700 text-white"
          />
          {errors.email && (
            <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* CPF */}
        <div>
          <Label className="text-slate-300">CPF (11 dígitos)</Label>
          <Input
            {...register("cpf")}
            placeholder="12345678901"
            disabled={isLoading}
            className="bg-slate-800/50 border-slate-700 text-white"
          />
          {errors.cpf && (
            <p className="text-xs text-red-400 mt-1">{errors.cpf.message}</p>
          )}
        </div>

        {/* Telefone */}
        <div>
          <Label className="text-slate-300">Telefone (11 dígitos)</Label>
          <Input
            {...register("telefone")}
            placeholder="11987654321"
            disabled={isLoading}
            className="bg-slate-800/50 border-slate-700 text-white"
          />
          {errors.telefone && (
            <p className="text-xs text-red-400 mt-1">{errors.telefone.message}</p>
          )}
        </div>

        {/* Data de Nascimento */}
        <div>
          <Label className="text-slate-300">Data de Nascimento</Label>
          <Input
            {...register("dataNascimento")}
            type="date"
            disabled={isLoading}
            className="bg-slate-800/50 border-slate-700 text-white"
          />
          {errors.dataNascimento && (
            <p className="text-xs text-red-400 mt-1">
              {errors.dataNascimento.message}
            </p>
          )}
        </div>
      </div>

      {/* Botões */}
      <div className="flex gap-3 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isLoading}
          className="flex-1"
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          disabled={isLoading}
          className="flex-1 bg-blue-600 hover:bg-blue-700"
        >
          {isLoading ? "Salvando..." : cliente ? "Atualizar" : "Criar"}
        </Button>
      </div>
    </form>
  );
}
