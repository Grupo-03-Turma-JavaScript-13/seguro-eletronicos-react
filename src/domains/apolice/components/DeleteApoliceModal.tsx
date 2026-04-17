import { AlertTriangle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ApoliceResponse } from "../models/Apolice";

interface DeleteApoliceModalProps {
  apolice: ApoliceResponse | null;
  isOpen: boolean;
  isLoading: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function DeleteApoliceModal({
  apolice,
  isOpen,
  isLoading,
  onConfirm,
  onCancel,
}: DeleteApoliceModalProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={(open) => !open && onCancel()}>
      <AlertDialogContent className="bg-slate-900 border-slate-700">
        <AlertDialogHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-500" />
            </div>
            <AlertDialogTitle className="text-white">
              Deletar Apólice
            </AlertDialogTitle>
          </div>
        </AlertDialogHeader>
        <AlertDialogDescription className="text-slate-400">
          Tem certeza que deseja deletar a apólice{" "}
          <span className="font-semibold text-white">#{apolice?.id}</span> (
          {apolice?.marca} {apolice?.modelo})? Esta ação não pode ser desfeita.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel
            disabled={isLoading}
            className="bg-slate-800 text-white border-slate-700 hover:bg-slate-700"
          >
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={isLoading}
            onClick={onConfirm}
            className="bg-red-600 text-white hover:bg-red-700"
          >
            {isLoading ? "Deletando..." : "Deletar"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
