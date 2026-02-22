import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cafe.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Cozy literary café interior with books and coffee" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(25,50%,18%,0.85)] via-[hsl(25,40%,20%,0.7)] to-[hsl(25,30%,15%,0.5)]" />
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
            A cozy literary café in Jaipur designed for readers, writers, and dreamers who want beautiful spaces, 
            meaningful conversations, and unforgettable coffee.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-cafe-gold px-8 font-body text-sm font-semibold text-cafe-espresso hover:bg-cafe-gold/90">
              <a href="#reserve">Reserve a Table</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground/30 bg-transparent px-8 font-body text-sm text-primary-foreground hover:bg-primary-foreground/10">
              <a href="#menu">Explore the Menu</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
