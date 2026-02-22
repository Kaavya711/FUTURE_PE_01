import { useState } from "react";
import { MapPin, Clock, Instagram, Phone, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReservationModal from "@/components/ReservationModal";

const VisitUsPage = () => {
  const [reserveOpen, setReserveOpen] = useState(false);

  return (
    <>
      <ReservationModal open={reserveOpen} onClose={() => setReserveOpen(false)} />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-cafe-espresso py-20 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-3 font-body text-sm uppercase tracking-[0.25em] text-cafe-gold">Find Us</p>
            <h1 className="mb-4 font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
              Visit Us in Jaipur
            </h1>
            <p className="mx-auto max-w-lg font-body text-sm text-primary-foreground/70">
              Your favourite corner table is waiting. Come as you are — leave inspired.
            </p>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              {/* Location */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">Location</h3>
                <p className="font-body text-base text-muted-foreground">Between the Pages</p>
                <p className="font-body text-sm text-muted-foreground">Jaipur, Rajasthan, India</p>
                <p className="mt-1 font-body text-sm italic text-cafe-sage">(Exact address coming soon)</p>
              </div>

              {/* Hours */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">Opening Hours</h3>
                <p className="font-body text-base text-foreground">Monday – Sunday</p>
                <p className="font-body text-2xl font-semibold text-primary">9:00 AM – 9:00 PM</p>
                <p className="mt-2 font-body text-sm italic text-cafe-sage">Open every day of the week</p>
              </div>

              {/* Contact */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">Contact</h3>
                <p className="font-body text-base text-muted-foreground">Phone: +91 00000 00000</p>
                <p className="mt-1 font-body text-sm italic text-cafe-sage">(Contact number coming soon)</p>
              </div>

              {/* Instagram */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                  <Instagram className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">Follow Us</h3>
                <a
                  href="https://instagram.com/betweenthepagesjaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-base text-primary underline-offset-2 transition-colors duration-300 hover:text-cafe-gold hover:underline"
                >
                  @betweenthepagesjaipur
                </a>
                <p className="mt-1 font-body text-sm text-muted-foreground">
                  Behind the scenes, aesthetic corners, & upcoming events.
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-border">
              <div className="flex h-64 items-center justify-center bg-muted md:h-80">
                <div className="text-center">
                  <MapPin className="mx-auto mb-3 h-10 w-10 text-muted-foreground/50" />
                  <p className="font-body text-sm text-muted-foreground">Google Maps integration coming soon</p>
                  <p className="mt-1 font-body text-xs italic text-muted-foreground/70">Jaipur, Rajasthan</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Urgency + CTA */}
        <section className="bg-card py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto flex max-w-xl items-center justify-center gap-2 rounded-xl border border-cafe-warm/30 bg-accent px-6 py-4">
              <AlertCircle className="h-4 w-4 shrink-0 text-cafe-warm" />
              <p className="font-body text-sm text-foreground">
                <span className="font-semibold">Limited quiet tables during weekends</span> — book early to secure your reading nook.
              </p>
            </div>
            <div className="mt-8">
              <Button
                size="lg"
                onClick={() => setReserveOpen(true)}
                className="rounded-full bg-primary px-10 font-body text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-cafe-gold hover:text-cafe-espresso"
              >
                Reserve a Table
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VisitUsPage;
