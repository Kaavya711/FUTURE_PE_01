import { Coffee, BookOpen, Users } from "lucide-react";

const services = [
  {
    icon: Coffee,
    title: "Coffee & Beverages",
    description:
      "High-quality coffee crafted for long reading sessions and deep conversations. From rich espressos to seasonal signature drinks — every cup is brewed to keep you company through one more chapter.",
    items: ["Espresso", "Cappuccino", "Latte", "Flat White", "Cold Brew", "Matcha Latte", "Masala Chai", "Seasonal Signature Drinks"],
    highlight: "Student-friendly pricing. Comfort for long stays.",
  },
  {
    icon: BookOpen,
    title: "Book Library & Reading Space",
    description:
      "A curated library with 3,000+ books across genres — from thriller and romance to poetry and self-help. Floor-to-ceiling wooden shelves, a wooden ladder to reach the top, and corners so cozy you'll forget the time.",
    items: ["Thriller", "Romance", "Contemporary Fiction", "Self-Help", "Classical Literature", "Poetry"],
    highlight: "Quiet reading zones. Instagram-worthy aesthetic corners. Monthly staff recommendations.",
  },
  {
    icon: Users,
    title: "Events & Community",
    id: "events",
    description:
      "More than a café — a creative hub in Jaipur. Join weekly book clubs, poetry nights, writers' meetups, open mic evenings, reading challenges, and couple reading date nights.",
    items: ["Weekly Book Clubs", "Poetry Nights", "Writers' Meetups", "Open Mic Evenings", "Reading Challenges", "Couple Reading Date Nights"],
    highlight: "Where Jaipur's literary community comes alive.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="mb-3 font-body text-sm uppercase tracking-[0.25em] text-cafe-sage">What We Offer</p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            Stories, Sips & Shared Moments
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              id={service.id}
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:shadow-cafe-warm/10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-semibold text-foreground">{service.title}</h3>
              <p className="mb-5 font-body text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              <div className="mb-5 flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-accent px-3 py-1 font-body text-xs text-accent-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="font-body text-sm font-medium italic text-cafe-sage">{service.highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
