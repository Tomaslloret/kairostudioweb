import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const FinalCTA = () => (
  <section className="gradient-hero text-primary-foreground section-padding">
    <div className="container max-w-3xl text-center space-y-6">
      <h2 className="font-heading font-extrabold text-3xl md:text-4xl leading-tight">
        Dale a tu negocio el momento exacto para existir en digital.
      </h2>
      <p className="text-primary-foreground/70 text-lg">
        Sin plantillas. Sin excusas. Con resultados.
      </p>
      <div className="flex flex-wrap justify-center gap-4 pt-2">
        <Button variant="hero" size="lg" asChild>
          <Link to="/demos">Pedir demo</Link>
        </Button>
        <Button variant="outline-light" size="lg" asChild>
          <a href="https://instagram.com/kaironstudio_" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-4 h-4" /> Instagram
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default FinalCTA;
