import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, MapPin, Clock } from "lucide-react";

const ContactoPage = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Header />
      <main>
        <section className="gradient-hero text-primary-foreground section-padding">
          <div className="container max-w-3xl text-center space-y-4">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl">Contacto</h1>
            <p className="text-primary-foreground/70 text-lg">Hablemos de tu proyecto.</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Info */}
              <div className="space-y-6">
                <h2 className="font-heading font-bold text-2xl text-primary">Canales de contacto</h2>
                <div className="space-y-4">
                  <a href="https://instagram.com/kaironstudio_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-secondary transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Instagram (preferido)</p>
                      <p className="text-xs text-muted-foreground">@kaironstudio_</p>
                    </div>
                  </a>
                  <a href="mailto:kaironargentina@gmail.com" className="flex items-center gap-3 text-foreground hover:text-secondary transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <p className="text-xs text-muted-foreground">kaironargentina@gmail.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 text-foreground">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Ubicación</p>
                      <p className="text-xs text-muted-foreground">Bahía Blanca, Buenos Aires · Argentina y el mundo</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <Clock className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Horarios flexibles</p>
                      <p className="text-xs text-muted-foreground">Respondemos lo antes posible.</p>
                    </div>
                  </div>
                  <a href="tel:+542915663536" className="flex items-center gap-3 text-foreground hover:text-secondary transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Teléfono</p>
                      <p className="text-xs text-muted-foreground">+54 291 566-3536</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Form */}
              <div>
                {submitted ? (
                  <div className="card-kairon p-8 text-center space-y-3">
                    <div className="text-3xl">✉️</div>
                    <h3 className="font-heading font-bold text-lg text-primary">¡Mensaje enviado!</h3>
                    <p className="text-sm text-muted-foreground">Te responderemos pronto.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="card-kairon p-6 space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">Nombre *</label>
                      <input required className="w-full px-3 py-2.5 rounded-lg border border-primary/10 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">Email *</label>
                      <input required type="email" className="w-full px-3 py-2.5 rounded-lg border border-primary/10 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">Mensaje *</label>
                      <textarea required rows={4} className="w-full px-3 py-2.5 rounded-lg border border-primary/10 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" />
                    </div>
                    <Button variant="cta" size="lg" type="submit" className="w-full">
                      Enviar mensaje
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactoPage;
