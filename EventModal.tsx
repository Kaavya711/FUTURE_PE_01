import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EventModalProps {
  open: boolean;
  onClose: () => void;
}

const EventModal = ({ open, onClose }: EventModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", event: "" });

  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ name: "", email: "", event: "" });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backdropFilter: "blur(4px)", background: "rgba(25,18,10,0.55)" }}
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-md animate-fade-up rounded-2xl bg-[hsl(35,33%,96%)] p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-full p-1 text-[hsl(25,30%,40%)] transition-colors duration-300 hover:bg-[hsl(35,40%,82%)] hover:text-[hsl(25,45%,25%)]"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="mb-1 font-serif text-2xl font-bold text-[hsl(25,45%,25%)]">Join Our Next Event</h2>
        <p className="mb-6 font-body text-sm text-[hsl(25,15%,45%)]">
          Be part of Jaipur's most vibrant literary community.
        </p>

        {submitted ? (
          <div className="rounded-xl border border-[hsl(140,15%,40%)]/30 bg-[hsl(140,15%,90%)] p-6 text-center">
            <p className="font-body text-sm leading-relaxed text-[hsl(25,30%,12%)]">
              You're in! We'll reach out with event details soon. See you Between the Pages.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label className="font-body text-sm text-[hsl(25,30%,12%)]">Your Name</Label>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Full name"
                className="mt-1 font-body"
              />
            </div>
            <div>
              <Label className="font-body text-sm text-[hsl(25,30%,12%)]">Email Address</Label>
              <Input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@email.com"
                className="mt-1 font-body"
              />
            </div>
            <div>
              <Label className="font-body text-sm text-[hsl(25,30%,12%)]">Which event interests you?</Label>
              <Input
                name="event"
                value={form.event}
                onChange={handleChange}
                placeholder="e.g. Book Club, Poetry Night…"
                className="mt-1 font-body"
              />
            </div>
            <Button
              type="submit"
              className="mt-2 w-full rounded-full bg-[hsl(25,45%,25%)] font-body text-sm font-semibold text-[hsl(35,33%,96%)] transition-all duration-300 hover:bg-[hsl(38,60%,50%)] hover:text-[hsl(25,45%,25%)]"
            >
              Register Interest
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EventModal;
