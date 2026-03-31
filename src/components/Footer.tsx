import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import KaironLogo from "./KaironLogo";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="gradient-hero text-primary-foreground">
    <div className="container py-16">
      <div className="grid md:grid-cols-3 gap-10">
        <div className="space-y-4">
          <KaironLogo light />
          <p className="text-primary-foreground/70 text-sm max-w-xs">
            El lugar donde se crea la oportunidad exacta.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-primary-foreground/50">Navegación</h4>
          {[
            { label: "Inicio", href: "/" },
            { label: "Servicios", href: "/servicios" },
            { label: "Demos", href: "/demos" },
            { label: "Contacto", href: "/contacto" },
          ].map((l) => (
            <Link key={l.href} to={l.href} className="block text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="space-y-3">
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-primary-foreground/50">Contacto</h4>
          <a href="https://instagram.com/kaironstudio_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
            <Instagram className="w-4 h-4" /> @kaironstudio_
          </a>
          <a href="mailto:kaironargentina@gmail.com" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
            <Mail className="w-4 h-4" /> kaironargentina@gmail.com
          </a>
          <a href="tel:+542915663536" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
            <Phone className="w-4 h-4" /> +54 291 566-3536
          </a>
          <p className="flex items-center gap-2 text-sm text-primary-foreground/60">
            <MapPin className="w-4 h-4" /> Bahía Blanca, Buenos Aires · Trabajamos de forma 100% remota para toda Argentina y Latinoamérica.
          </p>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Kairon Studio — Bahía Blanca, Buenos Aires · Trabajamos de forma 100% remota para toda Argentina y Latinoamérica.
      </div>
    </div>
  </footer>
);

export default Footer;
