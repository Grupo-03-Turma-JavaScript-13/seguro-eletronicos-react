import { ClienteResponse } from "../models/Cliente";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface DeleteClienteModalProps {
  cliente: ClienteResponse | null;
  isOpen: boolean;
  isLoading: boolean;
  temApolices: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function DeleteClienteModal({
  cliente,
  isOpen,
  isLoading,
  temApolices,
  onConfirm,
  onCancel,
}: DeleteClienteModalProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onCancel}>
      <AlertDialogContent className="bg-slate-900 border-slate-700 text-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Deletar Cliente?</AlertDialogTitle>
          <AlertDialogDescription className="text-slate-400">
            {temApolices ? (
              <>
                <span className="text-red-400 font-semibold">
                  ⚠️ Este cliente possui apólices associadas!
                </span>
                  

                Tem certeza que deseja deletar o cliente{" "}
                <span className="font-semibold text-white">{cliente?.nome}</span>
                ? Todas as apólices relacionadas também serão deletadas. Esta ação não pode ser desfeita.
              </>
            ) : (
              <>
                Tem certeza que deseja deletar o cliente{" "}
                <span className="font-semibold text-white">{cliente?.nome}</span>?
                Esta ação não pode ser desfeita.
              </>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex gap-3">
          <AlertDialogCancel
            disabled={isLoading}
            className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
          >
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            disabled={isLoading}
            className={temApolices ? "bg-orange-600 hover:bg-orange-700" : "bg-red-600 hover:bg-red-700"}
          >
            {isLoading ? "Deletando..." : "Deletar"}
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
