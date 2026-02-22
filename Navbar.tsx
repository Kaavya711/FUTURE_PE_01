import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ReservationModal from "@/components/ReservationModal";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Menu", to: "/menu" },
  { label: "Events", to: "/events" },
  { label: "Visit Us", to: "/visit-us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <ReservationModal open={reserveOpen} onClose={() => setReserveOpen(false)} />
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
          <Link to="/" className="font-serif text-xl font-bold tracking-tight text-primary md:text-2xl">
            Between the Pages
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-body text-sm tracking-wide transition-all duration-300 hover:text-primary ${
                    isActive ? "font-semibold text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button
              onClick={() => setReserveOpen(true)}
              className="rounded-full bg-primary px-6 font-body text-sm transition-all duration-300 hover:bg-cafe-gold hover:text-cafe-espresso"
            >
              Reserve a Table
            </Button>
          </div>

          {/* Mobile nav */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <SheetTitle className="font-serif text-lg text-primary">Between the Pages</SheetTitle>
              <div className="mt-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="font-body text-lg text-foreground transition-all duration-300 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  onClick={() => { setOpen(false); setReserveOpen(true); }}
                  className="mt-4 rounded-full bg-primary font-body transition-all duration-300 hover:bg-cafe-gold hover:text-cafe-espresso"
                >
                  Reserve a Table
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
