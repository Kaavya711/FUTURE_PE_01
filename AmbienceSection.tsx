import { Sun, Armchair, Music, Leaf, Lamp, BookOpen } from "lucide-react";

const features = [
  { icon: Sun, title: "Sunlit Corners", desc: "Large windows flood every table with golden afternoon light" },
  { icon: Armchair, title: "Cozy Armchairs", desc: "Sink into plush seating designed for hours of reading" },
  { icon: Music, title: "Soft Instrumentals", desc: "A carefully curated playlist that never interrupts your thoughts" },
  { icon: Leaf, title: "Plant-Filled Spaces", desc: "Indoor greens that bring life and calm to every corner" },
  { icon: Lamp, title: "Warm Interiors", desc: "Rich wooden textures and warm lighting that feels like home" },
  { icon: BookOpen, title: "Reading Nooks", desc: "Dedicated quiet zones where the world fades away" },
];

const AmbienceSection = () => {
  return (
    <section className="bg-card py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="mb-3 font-body text-sm uppercase tracking-[0.25em] text-cafe-sage">The Atmosphere</p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-5xl">A Space Designed to Stay</h2>
          <p className="mx-auto max-w-2xl font-body text-base leading-relaxed text-muted-foreground">
            Walk in and feel the difference. The scent of freshly ground coffee mingles with the soft rustle of turning pages.
            Warm wooden interiors, sunlit reading corners, and the kind of quiet that makes you think clearly, dream freely,
            and stay a little longer than you planned.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group flex items-start gap-4 rounded-xl border border-border/50 bg-background p-6 transition-all duration-300 hover:border-cafe-warm/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent">
                <f.icon className="h-6 w-6 text-cafe-warm" />
              </div>
              <div>
                <h3 className="mb-1 font-serif text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmbienceSection;
