import React from 'react';
import { Check, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#171815] text-[#F6F5F0] px-4 py-3 rounded-lg shadow-xl border border-[#DADAD2]/20 animate-fade-in text-sm"
    >
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C5ED70] text-[#171815]">
        <Check className="h-3 w-3 stroke-[3]" />
      </span>
      <span className="font-medium tracking-tight">{message}</span>
      <button
        onClick={onClose}
        aria-label="Close notification"
        className="ml-2 text-[#DADAD2] hover:text-[#F6F5F0] transition-colors p-1"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};
