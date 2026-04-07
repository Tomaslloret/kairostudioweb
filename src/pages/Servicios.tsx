import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Layout, Building2, Crown, Pen, Palette, BarChart3, MessageSquare, Smartphone } from "lucide-react";

const plans = [
  {
    name: "Kairos Start",
    subtitle: "Landing page",
    ideal: "Emprendedores, freelancers, lanzamientos.",
    includes: ["Diseño a medida (1 página)", "Responsive 100%", "SEO base", "Formulario de contacto", "Performance optimizada"],
    icon: Layout,
  },
  {
    name: "Kairos Pro",
    subtitle: "Sitio institucional",
    ideal: "Pymes, estudios, consultorios.",
    includes: ["Hasta 5 secciones/páginas", "Responsive 100%", "SEO técnico completo", "Formularios avanzados", "Integraciones (WhatsApp, Maps)", "Copywriting básico", "Variante gastronómica disponible"],
    icon: Building2,
    featured: true,
  },
  {
    name: "Kairos Premium",
    subtitle: "Web de alto impacto",
    ideal: "Negocios con ticket alto, marcas premium.",
    includes: ["Diseño multi-sección premium", "Estrategia + branding visual", "SEO avanzado", "Integraciones a medida", "Analítica completa"],
    icon: Crown,
  },
];

const addons = [
  { icon: Pen, label: "Copywriting profesional" },
  { icon: Palette, label: "Branding básico" },
  { icon: MessageSquare, label: "Blog / contenidos" },
  { icon: Smartphone, label: "Integraciones (reservas, WhatsApp)" },
  { icon: BarChart3, label: "Analítica y eventos" },
];

const ServiciosPage = () => (
  <>
    <Header />
    <main>
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container max-w-3xl text-center space-y-4">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl">Servicios</h1>
          <p className="text-primary-foreground/70 text-lg">
            Diseño y desarrollo web personalizado, rápido y optimizado.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((p) => (
              <div key={p.name} className={`card-kairon p-6 flex flex-col gap-4 ${p.featured ? "ring-2 ring-secondary shadow-lg relative" : ""}`}>
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </span>
                )}
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                  <p.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground">{p.name}</h3>
                  <p className="text-sm text-secondary font-medium">{p.subtitle}</p>
                </div>
                <p className="text-xs text-muted-foreground">Ideal para: {p.ideal}</p>
                <ul className="space-y-2 flex-1">
                  {p.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="text-secondary mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground">Entrega ágil según alcance</p>
                <Button variant="cta" asChild>
                  <Link to="/demos">Pedir demo gratis</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-light">
        <div className="container max-w-3xl space-y-8">
          <div className="text-center space-y-3">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary">Add-ons / Extras</h2>
            <p className="text-muted-foreground">Sumá funcionalidades según lo que necesites.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {addons.map((a) => (
              <div key={a.label} className="card-kairon p-4 flex items-center gap-3">
                <a.icon className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm font-medium text-foreground">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container max-w-3xl text-center space-y-6">
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            ¿No sabés cuál plan es para vos?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-lg mx-auto">
            Contanos tu proyecto y te recomendamos la mejor opción. Sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="cta" size="lg" asChild>
              <Link to="/demos">Pedir demo gratis</Link>
            </Button>
            <Button variant="outline-light" size="lg" asChild>
              <a href="https://wa.me/542915663536" target="_blank" rel="noopener noreferrer">
                Escribinos por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ServiciosPage;
