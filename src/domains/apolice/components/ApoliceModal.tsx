import { X } from "lucide-react";
import { ApoliceResponse } from "../models/Apolice";
import ApoliceForm from "./ApoliceForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ApoliceModalProps {
  isOpen: boolean;
  apolice?: ApoliceResponse;
  usuarioId: number;
  onClose: () => void;
  onSuccess: () => void;
}

export default function ApoliceModal({
  isOpen,
  apolice,
  usuarioId,
  onClose,
  onSuccess,
}: ApoliceModalProps) {
  const handleSuccess = () => {
    onSuccess();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-slate-900 border-slate-700 max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-white">
            {apolice ? "Editar Apólice" : "Nova Apólice"}
          </DialogTitle>
        </DialogHeader>

        <ApoliceForm
          apolice={apolice}
          usuarioId={usuarioId}
          onSuccess={handleSuccess}
          onCancel={onClose}
        />
      </DialogContent>
    </Dialog>
  );
}
