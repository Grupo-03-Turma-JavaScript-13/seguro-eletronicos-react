import { ClienteResponse } from "../models/Cliente";
import ClienteForm from "./ClienteForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ClienteModalProps {
  isOpen: boolean;
  cliente?: ClienteResponse;
  onClose: () => void;
  onSuccess: () => void;
}

export default function ClienteModal({
  isOpen,
  cliente,
  onClose,
  onSuccess,
}: ClienteModalProps) {
  const handleSuccess = () => {
    onSuccess();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-md">
        <DialogHeader>
          <DialogTitle>
            {cliente ? "Editar Cliente" : "Novo Cliente"}
          </DialogTitle>
        </DialogHeader>
        <ClienteForm
          cliente={cliente}
          onSuccess={handleSuccess}
          onCancel={onClose}
        />
      </DialogContent>
    </Dialog>
  );
}
