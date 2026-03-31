import { ArrowUp, Zap, Search, Cpu, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const badges = [
  { icon: Palette, label: "100% personalizado" },
  { icon: Zap, label: "Entrega ágil" },
  { icon: Search, label: "SEO + Métricas" },
  { icon: Cpu, label: "IA integrada" },
];

const HeroSection = () => (
  <section className="gradient-hero text-primary-foreground overflow-hidden relative">
    <div className="container section-padding">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight">
            Diseñamos tu web a medida para que tu negocio exista en digital{" "}
            <span className="text-secondary">en el momento exacto.</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl">
            Webs rápidas, únicas y optimizadas para posicionar en Google, atraer tráfico y convertir. Proceso potenciado con inteligencia artificial.
          </p>

          <div className="flex flex-wrap gap-3">
            {badges.map((b) => (
              <span key={b.label} className="flex items-center gap-1.5 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-3 py-1.5 text-xs font-medium">
                <b.icon className="w-3.5 h-3.5 text-secondary" /> {b.label}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/demos">Pedir demo gratis</Link>
            </Button>
            <Button variant="outline-light" size="lg" asChild>
              <a href="#proceso">Ver cómo trabajamos</a>
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/50">
            Ideal para negocios sin web o con presencia digital precaria.
          </p>
        </div>

        {/* Visual */}
        <div className="relative hidden lg:flex items-center justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative w-full max-w-md">
            {/* Mock browser */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20 p-4 shadow-2xl animate-float">
              <div className="flex gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-secondary/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary-foreground/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary-foreground/30" />
              </div>
              <div className="bg-primary-foreground/5 rounded-lg h-48 flex items-center justify-center">
                <span className="text-primary-foreground/30 font-heading text-sm">Tu web aquí</span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="h-3 bg-primary-foreground/10 rounded" />
                <div className="h-3 bg-secondary/30 rounded" />
                <div className="h-3 bg-primary-foreground/10 rounded" />
              </div>
            </div>

            {/* Floating arrows */}
            <ArrowUp className="absolute -top-4 right-8 w-8 h-8 text-secondary/50 animate-arrow-up" />
            <ArrowUp className="absolute bottom-8 -left-4 w-6 h-6 text-secondary/30 animate-arrow-up" style={{ animationDelay: "0.5s" }} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
