"use client";

import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  panelClassName?: string;
};

export const Modal: React.FC<ModalProps> = ({ open, onClose, children, className, panelClassName }) => {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6",
        className
      )}
      onClick={onClose}
    >
      <div
        className={cn(
          "relative w-full max-w-140 max-h-[90vh] overflow-y-auto bg-rede-surface rounded-3xl p-10",
          panelClassName
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-rede-surface border border-rede-white/20 flex items-center justify-center text-rede-white hover:bg-rede-white/10 transition-colors"
        >
          <X width={16} height={16} />
        </button>

        {children}
      </div>
    </div>
  );
};