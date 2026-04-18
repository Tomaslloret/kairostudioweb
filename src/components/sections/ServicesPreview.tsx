import { Layout, Building2, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Layout,
    title: "Landing de alta conversión",
    desc: "Una página clara, rápida y diseñada para que tus visitantes se conviertan en clientes.",
    audience: "Emprendedores, freelancers, lanzamientos.",
  },
  {
    icon: Building2,
    title: "Sitio institucional",
    desc: "Presencia digital completa con múltiples secciones, SEO y formularios.",
    audience: "Pymes, estudios, consultorios.",
  },
  {
    icon: UtensilsCrossed,
    title: "Web gastronómica",
    desc: "Menú digital, reservas online y todo lo que tu restaurante necesita. Disponible como servicio especializado.",
    audience: "Restaurantes, cafeterías, bares.",
  },
];

const ServicesPreview = () => (
  <section className="section-padding bg-primary-light">
    <div className="container space-y-12">
      <div className="text-center space-y-3">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
          Servicios
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Diseño y desarrollo web personalizado, rápido y optimizado.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="card-kairon p-6 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
              <s.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground flex-1">{s.desc}</p>
            <p className="text-xs text-secondary font-medium">Para: {s.audience}</p>
            <Button variant="cta" size="sm" asChild className="mt-2">
              <Link to="/demos">Pedir demo</Link>
            </Button>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" asChild>
          <Link to="/servicios">Ver todos los servicios</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default ServicesPreview;
