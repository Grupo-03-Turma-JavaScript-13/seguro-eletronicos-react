import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ClienteResponse } from "@/domains/cliente/models/Cliente";
import { ApoliceResponse } from "../models/Apolice";
import { apoliceService } from "../services/apoliceService";
import ClienteSearch from "./ClienteSearch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const apoliceSchema = z.object({
  tipoDispositivo: z.string().min(3, "Tipo de dispositivo inválido"),
  marca: z.string().min(2, "Marca inválida"),
  modelo: z.string().min(2, "Modelo inválido"),
  numeroSerie: z.string().min(5, "Número de série inválido"),
  anoFabricacao: z.string().regex(/^\d{4}$/, "Ano inválido"),
  anoAquisicao: z.string().regex(/^\d{4}$/, "Ano inválido"),
  valorBase: z.string().regex(/^\d+(\.\d{2})?$/, "Valor inválido"),
  dataInicio: z.string().min(1, "Data de início obrigatória"),
  dataFim: z.string().min(1, "Data de término obrigatória"),
});

type ApoliceFormData = z.infer<typeof apoliceSchema>;

// Função auxiliar para converter ISO para YYYY-MM-DD
const formatDateToInput = (isoDate: string): string => {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  return date.toISOString().split("T")[0];
};

interface ApoliceFormProps {
  apolice?: ApoliceResponse;
  usuarioId: number;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function ApoliceForm({
  apolice,
  usuarioId,
  onSuccess,
  onCancel,
}: ApoliceFormProps) {
  const [clienteSelecionado, setClienteSelecionado] =
    useState<ClienteResponse | null>(
      apolice?.cliente && apolice.cliente.id
        ? (apolice.cliente as ClienteResponse)
        : null
    );
  const [isLoading, setIsLoading] = useState(false);
  const [valorFinal, setValorFinal] = useState(apolice?.valorFinal || 0);
  const [valorDesconto, setValorDesconto] = useState(apolice?.valorDesconto || 0);

  // Resetar cliente quando abre modal para criar nova apólice
  useEffect(() => {
    if (!apolice) {
      setClienteSelecionado(null);
    }
  }, [apolice]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApoliceFormData>({
    resolver: zodResolver(apoliceSchema),
    defaultValues: apolice
      ? {
          tipoDispositivo: apolice.tipoDispositivo,
          marca: apolice.marca,
          modelo: apolice.modelo,
          numeroSerie: apolice.numeroSerie,
          anoFabricacao: apolice.anoFabricacao.toString(),
          anoAquisicao: apolice.anoAquisicao.toString(),
          valorBase: apolice.valorBase.toString(),
          dataInicio: formatDateToInput(apolice.dataInicio),
          dataFim: formatDateToInput(apolice.dataFim),
        }
      : undefined,
  });

  const onSubmit = async (data: ApoliceFormData) => {
    if (!clienteSelecionado) {
      toast.error("Selecione um cliente");
      return;
    }

    setIsLoading(true);

    try {
      const payload = {
        tipoDispositivo: data.tipoDispositivo,
        marca: data.marca,
        modelo: data.modelo,
        numeroSerie: data.numeroSerie,
        anoFabricacao: parseInt(data.anoFabricacao),
        anoAquisicao: parseInt(data.anoAquisicao),
        valorBase: parseFloat(data.valorBase),
        dataInicio: data.dataInicio,
        dataFim: data.dataFim,
        cliente: { id: clienteSelecionado.id },
        usuario: { id: usuarioId },
      };

      if (apolice) {
        const updatePayload: ApoliceResponse = {
          id: apolice.id,
          tipoDispositivo: payload.tipoDispositivo,
          marca: payload.marca,
          modelo: payload.modelo,
          numeroSerie: payload.numeroSerie,
          anoFabricacao: payload.anoFabricacao,
          anoAquisicao: payload.anoAquisicao,
          valorBase: payload.valorBase,
          dataInicio: payload.dataInicio,
          dataFim: payload.dataFim,
          cliente: clienteSelecionado,
          usuario: { id: usuarioId } as any,
          valorDesconto: apolice.valorDesconto,
          valorFinal: apolice.valorFinal,
          dataCriacao: apolice.dataCriacao,
        };
        await apoliceService.atualizarApolice(updatePayload);
        toast.success("Apólice atualizada com sucesso!");
      } else {
        const response = await apoliceService.criarApolice(payload as any);
        setValorFinal(response.valorFinal);
        setValorDesconto(response.valorDesconto);
        toast.success("Apólice criada com sucesso!");
      }

      onSuccess();
    } catch (error) {
      toast.error("Erro ao salvar apólice");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Cliente - Readonly quando editando */}
      <ClienteSearch
        value={clienteSelecionado}
        onChange={setClienteSelecionado}
        disabled={isLoading || !!apolice}
      />

      {/* Grid de campos */}
      <div className="grid grid-cols-2 gap-4">
        {/* Tipo de Dispositivo */}
        <div>
          <Label className="text-slate-300">Tipo de Dispositivo</Label>
          <Input
            {...register("tipoDispositivo")}
            placeholder="Ex: Smartphone"
            disabled={isLoading}
            className="bg-slate-800/50 border-slate-700 text-white"
          />
          {errors.tipoDispositivo && (
            <p className="text-xs text-red-400 mt-1">
              {errors.tipoDispositivo.message}
            </p>
          )}
        </div>

        {/* Marca */}
        <div>
          <Label className="text-slate-300">Marca</Label>
          <Input
            {...register("marca")}
            placeholder="Ex: Apple"
            disabled={isLoading}
            className="bg-slate-800/50 border-slate-700 text-white"
          />
          {errors.marca && (
            <p className="text-xs text-red-400 mt-1">{errors.marca.message}</p>
          )}
        </div>

        {/* Modelo */}
        <div>
          <Label className="text-slate-300">Modelo</Label>
          <Input
            {...register("modelo")}
            placeholder="Ex: iPhone 15"
            disabled={isLoading}
            className="bg-slate-800/50 border-slate-700 text-white"
          />
          {errors.modelo && (
            <p className="text-xs text-red-400 mt-1">{errors.modelo.message}</p>
          )}
        </div>

        {/* Número de Série */}
        <div>
          <Label className="text-slate-300">Número de Série</Label>
          <Input
            {...register("numeroSerie")}
            placeholder="Ex: SN123456789"
            disabled={isLoading}
            className="bg-slate-800/50 border-slate-700 text-white"
          />
          {errors.numeroSerie && (
            <p className="text-xs text-red-400 mt-1">
              {errors.numeroSerie.message}
            </p>
          )}
        </div>

        {/* Ano de Fabricação */}
        <div>
          <Label className="text-slate-300">Ano de Fabricação</Label>
          <Input
            {...register("anoFabricacao")}
            type="number"
            placeholder="2024"
            disabled={isLoading}
            className="bg-slate-800/50 border-slate-700 text-white"
          />
          {errors.anoFabricacao && (
            <p className="text-xs text-red-400 mt-1">
              {errors.anoFabricacao.message}
            </p>
          )}
        </div>

        {/* Ano de Aquisição */}
        <div>
          <Label className="text-slate-300">Ano de Aquisição</Label>
          <Input
            {...register("anoAquisicao")}
            type="number"
            placeholder="2024"
            disabled={isLoading}
            className="bg-slate-800/50 border-slate-700 text-white"
          />
          {errors.anoAquisicao && (
            <p className="text-xs text-red-400 mt-1">
              {errors.anoAquisicao.message}
            </p>
          )}
        </div>

        {/* Valor Base */}
        <div>
          <Label className="text-slate-300">Valor Base (R$)</Label>
          <Input
            {...register("valorBase")}
            type="number"
            step="0.01"
            placeholder="0.00"
            disabled={isLoading}
            className="bg-slate-800/50 border-slate-700 text-white"
          />
          {errors.valorBase && (
            <p className="text-xs text-red-400 mt-1">
              {errors.valorBase.message}
            </p>
          )}
        </div>

        {/* Valor Final (readonly) */}
        <div>
          <Label className="text-slate-300">Valor Final (R$)</Label>
          <Input
            type="text"
            value={`R$ ${valorFinal.toFixed(2)}`}
            disabled
            className="bg-slate-700/50 border-slate-700 text-slate-400"
          />
          <p className="text-xs text-slate-500 mt-1">Calculado pelo servidor</p>
        </div>

        {/* Data de Início */}
        <div>
          <Label className="text-slate-300">Data de Início</Label>
          <Input
            {...register("dataInicio")}
            type="date"
            disabled={isLoading}
            className="bg-slate-800/50 border-slate-700 text-white"
          />
          {errors.dataInicio && (
            <p className="text-xs text-red-400 mt-1">
              {errors.dataInicio.message}
            </p>
          )}
        </div>

        {/* Data de Término */}
        <div>
          <Label className="text-slate-300">Data de Término</Label>
          <Input
            {...register("dataFim")}
            type="date"
            disabled={isLoading}
            className="bg-slate-800/50 border-slate-700 text-white"
          />
          {errors.dataFim && (
            <p className="text-xs text-red-400 mt-1">{errors.dataFim.message}</p>
          )}
        </div>

        {/* Desconto (readonly) */}
        <div>
          <Label className="text-slate-300">Desconto (R$)</Label>
          <Input
            type="text"
            value={`R$ ${valorDesconto.toFixed(2)}`}
            disabled
            className="bg-slate-700/50 border-slate-700 text-slate-400"
          />
          <p className="text-xs text-slate-500 mt-1">Calculado pelo servidor</p>
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
          {isLoading ? "Salvando..." : apolice ? "Atualizar" : "Criar"}
        </Button>
      </div>
    </form>
  );
}
