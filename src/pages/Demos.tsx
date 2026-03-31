import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DemoFormSection from "@/components/sections/DemoFormSection";
import { Eye, MessageSquare, Palette } from "lucide-react";

const includes = [
  { icon: Eye, title: "Concepto visual", desc: "Un diseño adaptado a tu negocio para que veas cómo podría quedar tu web." },
  { icon: MessageSquare, title: "Diagnóstico rápido", desc: "Analizamos tu rubro, competencia y necesidades." },
  { icon: Palette, title: "Propuesta personalizada", desc: "Sin plantillas. Todo pensado para vos." },
];

const DemosPage = () => (
  <>
    <Header />
    <main>
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container max-w-3xl text-center space-y-4">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl">Demos personalizadas</h1>
          <p className="text-primary-foreground/70 text-lg">
            Te mostramos cómo podría verse tu web. Sin compromiso, sin costo.
          </p>
        </div>
      </section>

      <section className="section-padding bg-primary-light">
        <div className="container max-w-4xl">
          <h2 className="font-heading font-bold text-2xl text-primary text-center mb-8">¿Qué incluye la demo?</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {includes.map((item) => (
              <div key={item.title} className="card-kairon p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mx-auto">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mock demos */}
      <section className="section-padding">
        <div className="container max-w-4xl text-center space-y-6">
          <h2 className="font-heading font-bold text-2xl text-primary">Ejemplos de demos</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {["Restaurante", "Consultorio", "Estudio creativo"].map((label) => (
              <div key={label} className="card-kairon overflow-hidden">
                <div className="h-40 bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Mockup</span>
                </div>
                <div className="p-4">
                  <p className="font-heading font-semibold text-sm text-foreground">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DemoFormSection />
    </main>
    <Footer />
  </>
);

export default DemosPage;
