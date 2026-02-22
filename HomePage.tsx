import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, MapPin, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cafe.jpg";
import ReservationModal from "@/components/ReservationModal";

const stats = [
  { icon: BookOpen, value: "3,000+", label: "Books" },
  { icon: MapPin, value: "5", label: "Reading Zones" },
  { icon: Calendar, value: "8+", label: "Events Monthly" },
  { icon: Star, value: "4.8★", label: "Student Favorite" },
];

const HomePage = () => {
  const [reserveOpen, setReserveOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <ReservationModal open={reserveOpen} onClose={() => setReserveOpen(false)} />

      {/* Hero */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Cozy literary café interior with books and coffee"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(25,50%,18%,0.88)] via-[hsl(25,40%,20%,0.72)] to-[hsl(25,30%,15%,0.45)]" />
        </div>
        <div className="container relative z-10 mx-auto flex min-h-[90vh] items-center px-4">
          <div className="max-w-2xl animate-fade-up">
            <p className="mb-4 font-body text-sm uppercase tracking-[0.3em] text-cafe-gold">
              A Literary Café in Jaipur
            </p>
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl">
              More Than a Café.{" "}
              <span className="italic">A Place Between the Pages.</span>
            </h1>
            <p className="mb-10 max-w-xl font-body text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
              A cozy literary café in Jaipur designed for readers, writers, and dreamers who want beautiful
              spaces, meaningful conversations, and unforgettable coffee.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => setReserveOpen(true)}
                className="rounded-full bg-cafe-gold px-8 font-body text-sm font-semibold text-cafe-espresso transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                Reserve a Table
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/menu")}
                className="rounded-full border-primary-foreground/30 bg-transparent px-8 font-body text-sm text-primary-foreground transition-all duration-300 hover:bg-cafe-gold hover:text-cafe-espresso hover:border-cafe-gold"
              >
                Explore the Menu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-background py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-3 font-body text-sm uppercase tracking-[0.25em] text-cafe-sage">Our Story</p>
          <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Where Productivity Meets Poetry
          </h2>
          <p className="mx-auto max-w-2xl font-body text-base leading-relaxed text-muted-foreground">
            Between the Pages is a book café in Jaipur featuring 3,000+ curated books, peaceful reading zones,
            aesthetic interiors, and a calm, study-friendly atmosphere. It is where productivity meets poetry —
            a place where your coffee stays warm, your book stays open, and the world stays outside.
          </p>
        </div>
      </section>

      {/* Stats */}
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
    </>
  );
};

export default HomePage;
