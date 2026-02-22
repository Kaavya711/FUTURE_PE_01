import { GraduationCap, Camera, Laptop, PenTool, Heart, User } from "lucide-react";

const audiences = [
  { icon: GraduationCap, title: "Students", desc: "Study dates, chai breaks, and Instagram-worthy corners — your campus has competition." },
  { icon: Camera, title: "Bookstagram Creators", desc: "Flat-lay heaven. Every shelf and corner is designed to be your next viral post." },
  { icon: Laptop, title: "Freelancers", desc: "Strong Wi-Fi, stronger coffee. Work from a place that actually inspires productivity." },
  { icon: PenTool, title: "Writers", desc: "Find your next plot twist between the pages. Quiet zones built for deep focus." },
  { icon: Heart, title: "Couples", desc: "Reading date nights, shared desserts, and conversations that actually matter." },
  { icon: User, title: "Solo Readers", desc: "A table for one, a world of stories. The kind of alone time that fills you up." },
];

const MadeForSection = () => {
  return (
    <section className="bg-card py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="mb-3 font-body text-sm uppercase tracking-[0.25em] text-cafe-sage">Our People</p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-5xl">
            Between the Pages Is Made For
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="group rounded-2xl border border-border bg-background p-8 text-center transition-all duration-300 hover:border-cafe-warm/40 hover:shadow-lg"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent transition-colors group-hover:bg-cafe-sage-light">
                <a.icon className="h-7 w-7 text-cafe-sage" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">{a.title}</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MadeForSection;
