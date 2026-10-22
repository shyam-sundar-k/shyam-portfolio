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
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#101527] text-[#F5F7FF] px-4 py-3 rounded-xl shadow-[0_0_25px_-5px_rgba(55,231,255,0.4)] border border-[#37E7FF]/40 animate-fade-in text-sm font-mono"
    >
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#37E7FF] text-[#080B14]">
        <Check className="h-3 w-3 stroke-[3]" />
      </span>
      <span className="font-medium tracking-tight text-xs">{message}</span>
      <button
        onClick={onClose}
        aria-label="Close notification"
        className="ml-2 text-[#A6B0C8] hover:text-[#F5F7FF] transition-colors p-1 cursor-pointer"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};
