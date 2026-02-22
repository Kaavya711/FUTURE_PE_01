import { BookOpen, MapPin, Calendar, Star } from "lucide-react";

const stats = [
  { icon: BookOpen, value: "3,000+", label: "Books" },
  { icon: MapPin, value: "5", label: "Reading Zones" },
  { icon: Calendar, value: "8+", label: "Events Monthly" },
  { icon: Star, value: "4.8★", label: "Student Favorite" },
];

const StatsSection = () => {
  return (
    <section className="bg-cafe-espresso py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-3 h-8 w-8 text-cafe-gold" />
              <p className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">{stat.value}</p>
              <p className="mt-1 font-body text-sm text-primary-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold text-primary-foreground md:text-4xl">
            Why Jaipur Chooses Between the Pages
          </h2>
          <p className="font-body text-base leading-relaxed text-primary-foreground/70">
            Not every café lets you stay for hours. Not every bookstore serves great coffee.{" "}
            <span className="font-semibold text-cafe-gold">We beautifully combine both.</span>{" "}
            A place where your coffee stays warm, your book stays open, and the world stays outside.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
