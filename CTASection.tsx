import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="reserve" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-cafe-espresso to-cafe-brown p-10 text-center md:p-16">
          <h2 className="mb-4 font-serif text-3xl font-bold text-primary-foreground md:text-5xl">
            Ready to lose yourself in books and find yourself in a coffee?
          </h2>
          <p className="mx-auto mb-10 max-w-lg font-body text-base text-primary-foreground/70">
            Limited quiet tables during weekends — book early to secure your reading nook.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="rounded-full bg-cafe-gold px-8 font-body text-sm font-semibold text-cafe-espresso hover:bg-cafe-gold/90">
              Reserve Your Table
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-primary-foreground/30 bg-transparent px-8 font-body text-sm text-primary-foreground hover:bg-primary-foreground/10">
              Join Our Next Book Club
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-primary-foreground/30 bg-transparent px-8 font-body text-sm text-primary-foreground hover:bg-primary-foreground/10">
              Visit Us in Jaipur Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
