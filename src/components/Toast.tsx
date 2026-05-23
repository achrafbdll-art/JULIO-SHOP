import { useEffect } from 'react';
import { X, CheckCircle, Info } from 'lucide-react';

export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'info';
}

interface ToastProps {
  toast: ToastMessage;
  onClose: (id: string) => void;
}

export default function Toast({ toast, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(toast.id);
    }, 4000);
    return () => clearTimeout(timer);
  }, [toast.id, onClose]);

  return (
    <div 
      className={`flex items-center gap-3 rounded-xl p-4 shadow-xl border text-xs min-w-[280px] max-w-sm animate-in slide-in-from-bottom duration-300 ${
        toast.type === 'success' 
          ? 'bg-brand-red text-white border-brand-red' 
          : 'bg-brand-dark text-brand-cream border-brand-dark'
      }`}
    >
      <div className="shrink-0">
        {toast.type === 'success' ? (
          <CheckCircle className="h-4 w-4 text-brand-gold fill-white/10" />
        ) : (
          <Info className="h-4 w-4 text-brand-gold" />
        )}
      </div>

      <div className="flex-1 font-sans font-semibold">
        {toast.message}
      </div>

      <button
        type="button"
        onClick={() => onClose(toast.id)}
        className="p-1 rounded-full text-white/70 hover:text-white transition-colors hover:bg-white/10 cursor-pointer"
        aria-label="Fermer la notification"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
