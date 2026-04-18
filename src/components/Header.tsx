import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import KaironLogo from "./KaironLogo";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Demos", href: "/demos" },
  { label: "Nosotros", href: "/sobre-mi" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/10">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <KaironLogo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-secondary ${location.pathname === item.href ? "text-secondary" : "text-foreground"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <a href="https://instagram.com/kaironstudio_" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
          </Button>
          <Button variant="cta" size="sm" asChild>
            <Link to="/demos">Pedir demo</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-primary/10 animate-fade-in">
          <nav className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={`text-base font-medium py-2 ${location.pathname === item.href ? "text-secondary" : "text-foreground"}`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t border-primary/10">
              <Button variant="cta" asChild>
                <Link to="/demos" onClick={() => setOpen(false)}>Pedir demo</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://instagram.com/kaironstudio_" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
