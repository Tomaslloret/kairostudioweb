import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SobreMiPage = () => (
  <>
    <Header />
    <main>
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container max-w-3xl text-center space-y-4">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl">Nosotros</h1>
          <p className="text-primary-foreground/70 text-lg">
            Diseño web profesional con estrategia detrás.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20 py-16 w-full">
            <img src="/kaironlogofoblanco.png" alt="Kairon" className="w-80 h-80 flex-shrink-0 object-contain bg-transparent" />
            <div className="space-y-8 flex-1">
              <p className="text-muted-foreground leading-relaxed text-xl">
                Kairon es un estudio de diseño web con un enfoque simple: cada sitio que construimos tiene que cumplir un objetivo real.
              </p>
              <p className="text-muted-foreground leading-relaxed text-xl">
                Trabajamos con diseño hecho a medida y desarrollo profesional, con una visión clara de cómo una web puede posicionar y hacer crecer un negocio. Sin plantillas. Sin soluciones genéricas. Cada proyecto es distinto porque cada negocio lo es.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-light">
        <div className="container max-w-3xl space-y-8">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Nos importa el resultado final tanto como el proceso. Por eso cada proyecto recibe atención total, de principio a fin.
            </p>
          </div>
          <div className="text-center pt-4">
            <Button variant="cta" size="lg" asChild>
              <Link to="/demos">Trabajemos juntos</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default SobreMiPage;
