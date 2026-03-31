import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const DemoFormSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="demo" className="section-padding">
      <div className="container max-w-4xl space-y-8">
        <div className="text-center space-y-3">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
            ¿No tenés web? Te armamos una demo gratis.
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Sin compromiso. Te llevás una idea clara de cómo podría verse tu web.
          </p>
        </div>

        {submitted ? (
          <div className="card-kairon p-10 text-center space-y-4">
            <div className="text-4xl">🎉</div>
            <h3 className="font-heading font-bold text-xl text-primary">¡Gracias!</h3>
            <p className="text-muted-foreground">Recibimos tu solicitud. Te contactaremos pronto.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card-kairon p-6 md:p-8 space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">Nombre *</label>
              <input required className="w-full px-3 py-2.5 rounded-lg border border-primary/10 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">Negocio / Rubro *</label>
              <input required className="w-full px-3 py-2.5 rounded-lg border border-primary/10 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">WhatsApp o Email *</label>
              <input required placeholder="Ej: +54 291 566-3536 o email@ejemplo.com" className="w-full px-3 py-2.5 rounded-lg border border-primary/10 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" />
            </div>

            <label className="flex items-start gap-2 text-sm text-muted-foreground">
              <input type="checkbox" required className="mt-1 accent-secondary" />
              Acepto que me contacten para hablar sobre mi proyecto.
            </label>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="cta" size="lg" type="submit">
                Quiero mi demo gratis
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://instagram.com/kaironstudio_" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4" /> Escribirme por Instagram
                </a>
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default DemoFormSection;
