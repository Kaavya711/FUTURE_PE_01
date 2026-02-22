import { Link } from "react-router-dom";
import { Instagram, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-cafe-espresso py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-serif text-2xl font-bold text-primary-foreground">Between the Pages</h3>
            <p className="mb-4 font-body text-sm italic text-primary-foreground/60">
              Lose yourself in books and find yourself in a coffee.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/50">
              <MapPin className="h-4 w-4" />
              <span className="font-body text-sm">Jaipur, Rajasthan</span>
            </div>
          </div>

          {/* Hours & Contact */}
          <div>
            <h4 className="mb-4 font-serif text-lg font-semibold text-primary-foreground">Visit Us</h4>
            <div className="mb-3 flex items-center gap-2 text-primary-foreground/60">
              <Clock className="h-4 w-4" />
              <span className="font-body text-sm">Mon – Sun, 9:00 AM – 9:00 PM</span>
            </div>
            <a
              href="https://instagram.com/betweenthepagesjaipur"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/60 transition-colors duration-300 hover:text-cafe-gold"
            >
              <Instagram className="h-4 w-4" />
              <span className="font-body text-sm">@betweenthepagesjaipur</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-serif text-lg font-semibold text-primary-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: "Menu", to: "/menu" },
                { label: "Events", to: "/events" },
                { label: "Visit Us", to: "/visit-us" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-body text-sm text-primary-foreground/60 transition-colors duration-300 hover:text-cafe-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Between the Pages. All rights reserved. Crafted with love in Jaipur.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
