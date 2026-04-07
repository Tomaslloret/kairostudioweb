import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const demos = [
  { category: "Gastronomía", url: "https://llamaylena.vercel.app", img: "/demorestaurante.png" },
  { category: "Salud", url: "https://dracarolinamendez.vercel.app", img: "/democlinica.png" },
  { category: "Servicios", url: "https://trazostudio.vercel.app", img: "/demoformaestudio.png" },
];

const DemosPreview = () => (
  <section className="section-padding bg-primary-light">
    <div className="container space-y-10">
      <div className="text-center space-y-3">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
          Mirá cómo trabajamos
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto text-lg">
          Cada demo es una web real, pensada para un rubro específico.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {demos.map((demo, index) => (
          <div key={index} className="card-kairon overflow-hidden group">
            <div className="h-48 overflow-hidden rounded-t-lg border-b border-primary/5">
              <img
                src={demo.img}
                alt={`Demo ${demo.category}`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 space-y-3">
              <div className="inline-block">
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                  {demo.category}
                </span>
              </div>
              <div className="pt-1">
                <a
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-secondary hover:text-secondary/80 transition-colors font-medium"
                >
                  Ver demo →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botón al pie */}
      <div className="text-center pt-4">
        <Button variant="cta" size="lg" asChild>
          <Link to="/demos">Ver todos los demos</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default DemosPreview;
