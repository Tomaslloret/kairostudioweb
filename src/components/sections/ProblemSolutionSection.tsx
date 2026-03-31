import { AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const problems = [
  "No tengo web, pierdo confianza y ventas.",
  "Mi web es lenta y no aparece en Google.",
  "Mi presencia digital se ve vieja y no convierte.",
];

const solutions = [
  "Web profesional, clara y lista para vender.",
  "Velocidad + SEO técnico + estructura pensada para Google.",
  "Diseño moderno, a medida, con enfoque en conversión.",
];

const ProblemSolutionSection = () => (
  <section className="section-padding">
    <div className="container space-y-12">
      <div className="text-center space-y-3">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
          ¿Te suena familiar?
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Si tu negocio enfrenta alguno de estos problemas, tenemos la solución.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Problems */}
        <div className="space-y-4">
          <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-destructive">Problema</h3>
          {problems.map((p, i) => (
            <div key={i} className="flex gap-3 items-start p-4 rounded-xl bg-destructive/5 border border-destructive/10">
              <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">{p}</p>
            </div>
          ))}
        </div>

        {/* Solutions */}
        <div className="space-y-4">
          <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-secondary">Solución Kairon</h3>
          {solutions.map((s, i) => (
            <div key={i} className="flex gap-3 items-start p-4 rounded-xl bg-secondary/5 border border-secondary/10">
              <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">{s}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center pt-4">
        <Button variant="cta" size="lg" asChild>
          <Link to="/demos">Quiero resolver esto</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default ProblemSolutionSection;
