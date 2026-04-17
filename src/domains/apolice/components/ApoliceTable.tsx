import { Trash2, Edit, AlertCircle } from "lucide-react";
import { ApoliceResponse } from "../models/Apolice";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface ApoliceTableProps {
  apolices: ApoliceResponse[];
  onEdit: (apolice: ApoliceResponse) => void;
  onDelete: (apolice: ApoliceResponse) => void;
  isLoading: boolean;
}

export default function ApoliceTable({
  apolices,
  onEdit,
  onDelete,
  isLoading,
}: ApoliceTableProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-4 border-slate-700 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (apolices.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-slate-400">
        <AlertCircle className="w-12 h-12 mb-4 opacity-50" />
        <p>Nenhuma apólice cadastrada</p>
      </div>
    );
  }

  return (
    <div className="border border-slate-700 rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-800/50 border-b border-slate-700">
            <TableHead className="text-slate-300">ID</TableHead>
            <TableHead className="text-slate-300">Dispositivo</TableHead>
            <TableHead className="text-slate-300">Marca</TableHead>
            <TableHead className="text-slate-300">Modelo</TableHead>
            <TableHead className="text-slate-300 text-right">Valor Base</TableHead>
            <TableHead className="text-slate-300 text-right">Valor Final</TableHead>
            <TableHead className="text-slate-300">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {apolices.map((apolice) => (
            <TableRow
              key={apolice.id}
              className="border-b border-slate-700 hover:bg-slate-800/30 transition"
            >
              <TableCell className="text-slate-300 font-mono text-sm">
                #{apolice.id}
              </TableCell>
              <TableCell className="text-slate-300">
                {apolice.tipoDispositivo}
              </TableCell>
              <TableCell className="text-slate-300">{apolice.marca}</TableCell>
              <TableCell className="text-slate-300">{apolice.modelo}</TableCell>
              <TableCell className="text-slate-300 text-right">
                R$ {apolice.valorBase.toFixed(2)}
              </TableCell>
              <TableCell className="text-slate-300 text-right">
                <span className="text-green-400 font-semibold">
                  R$ {apolice.valorFinal.toFixed(2)}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onEdit(apolice)}
                    className="h-8 w-8 p-0"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => onDelete(apolice)}
                    className="h-8 w-8 p-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
