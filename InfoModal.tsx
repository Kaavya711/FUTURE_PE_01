import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface InfoModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  body: string;
  closingLine?: string;
  cta?: {
    label: string;
    onClick: () => void;
  };
  icon?: React.ReactNode;
}

const InfoModal = ({ open, onClose, title, subtitle, body, closingLine, cta, icon }: InfoModalProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backdropFilter: "blur(5px)", background: "rgba(25,18,10,0.6)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg animate-fade-up rounded-2xl bg-background p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground transition-all duration-300 hover:bg-accent hover:text-primary"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Icon */}
        {icon && (
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-accent">
            {icon}
          </div>
        )}

        {/* Subtitle label */}
        {subtitle && (
          <p className="mb-2 font-body text-xs uppercase tracking-[0.25em] text-cafe-sage">{subtitle}</p>
        )}

        {/* Title */}
        <h2 className="mb-4 font-serif text-2xl font-bold text-primary md:text-3xl">{title}</h2>

        {/* Body */}
        <p className="mb-5 font-body text-sm leading-relaxed text-muted-foreground">{body}</p>

        {/* Closing line */}
        {closingLine && (
          <p className="mb-6 font-body text-sm italic text-cafe-warm">{closingLine}</p>
        )}

        {/* CTA */}
        {cta && (
          <Button
            onClick={cta.onClick}
            className="w-full rounded-full bg-primary font-body text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-cafe-gold hover:text-cafe-espresso"
          >
            {cta.label}
          </Button>
        )}
      </div>
    </div>
  );
};

export default InfoModal;
