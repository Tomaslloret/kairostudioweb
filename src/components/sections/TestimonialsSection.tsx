import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="container max-w-3xl text-center space-y-8">
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
        Los primeros proyectos están en camino.
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed">
        ¿Querés ser el primero en tu rubro en tener una web que realmente convierte? Este es el momento.
      </p>
      <div className="pt-4">
        <Button variant="cta" size="lg" asChild>
          <Link to="/demos">Quiero ser el primero</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
