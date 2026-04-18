import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { supabase } from "@/lib/supabase";

const DemoFormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    nombre: "",
    negocio: "",
    contacto: "",
    telefono: "",
    pais: "",
    ciudad: "",
    mensaje: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data, error } = await supabase
        .from('contactos')
        .insert([
          {
            nombre: formData.nombre,
            negocio: formData.negocio,
            contacto: formData.contacto,
            telefono: formData.telefono,
            pais: formData.pais,
            ciudad: formData.ciudad,
            mensaje: formData.mensaje,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        throw error;
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setError('Hubo un error al enviar tu solicitud. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
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
            {error && (
              <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
                {error}
              </div>
            )}
            
            {/* Grid de 2 columnas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Nombre *</label>
                <input 
                  required 
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-lg border border-primary/10 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Negocio / Rubro *</label>
                <input 
                  required 
                  name="negocio"
                  value={formData.negocio}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-lg border border-primary/10 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">WhatsApp o Email *</label>
                <input 
                  required 
                  name="contacto"
                  value={formData.contacto}
                  onChange={handleChange}
                  placeholder="Ej: +54 291 566-3536 o email@ejemplo.com"
                  className="w-full px-3 py-2.5 rounded-lg border border-primary/10 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Teléfono (opcional)</label>
                <input 
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+54 291 566-3536"
                  className="w-full px-3 py-2.5 rounded-lg border border-primary/10 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">País (opcional)</label>
                <input 
                  name="pais"
                  value={formData.pais}
                  onChange={handleChange}
                  placeholder="Argentina"
                  className="w-full px-3 py-2.5 rounded-lg border border-primary/10 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Ciudad (opcional)</label>
                <input 
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleChange}
                  placeholder="Bahía Blanca"
                  className="w-full px-3 py-2.5 rounded-lg border border-primary/10 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" 
                />
              </div>
            </div>

            {/* Campo de mensaje ancho completo */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">Mensaje / ¿Qué necesitás? (opcional)</label>
              <textarea 
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Contanos un poco más sobre tu proyecto..."
                rows={3}
                className="w-full px-3 py-2.5 rounded-lg border border-primary/10 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none" 
              />
            </div>

            {/* Checkbox ancho completo */}
            <label className="flex items-start gap-2 text-sm text-muted-foreground">
              <input type="checkbox" required className="mt-1 accent-secondary" />
              Acepto que me contacten para hablar sobre mi proyecto.
            </label>

            {/* Botones ancho completo */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="cta" size="lg" type="submit" disabled={loading}>
                {loading ? "Enviando..." : "Quiero mi demo"}
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
