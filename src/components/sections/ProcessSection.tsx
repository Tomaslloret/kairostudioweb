import { MessageSquare, Eye, Palette, Code2, BarChart3, Cpu } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Diagnóstico", desc: "Te hago 5–10 preguntas clave + analizo tu rubro." },
  { icon: Eye, title: "Demo personalizada", desc: "Te muestro un concepto visual adaptado a tu negocio. Gratis." },
  { icon: Palette, title: "Diseño UI/UX", desc: "Estructura, copy, jerarquía, estilo visual moderno." },
  { icon: Code2, title: "Desarrollo + SEO", desc: "Sitio rápido, responsive, optimizado para Google." },
  { icon: BarChart3, title: "Medición y mejoras", desc: "Métricas, conversiones, ajustes continuos." },
];

const ProcessSection = () => (
  <section id="proceso" className="section-padding">
    <div className="container space-y-12">
      <div className="text-center space-y-3">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
          Cómo trabajamos
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Un proceso claro, rápido y transparente. Sin sorpresas.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/10 hidden md:block" />

        <div className="space-y-8">
          {steps.map((s, i) => (
            <div key={s.title} className="flex gap-6 items-start">
              <div className="relative z-10 w-12 h-12 rounded-xl gradient-hero flex items-center justify-center shrink-0 shadow-md">
                <s.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="pt-1">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">Paso {i + 1}</span>
                <h3 className="font-heading font-bold text-lg text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* IA badge */}
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/5 border border-secondary/15">
          <Cpu className="w-6 h-6 text-secondary shrink-0" />
          <p className="text-sm text-foreground">
            <strong>IA integrada:</strong> usamos inteligencia artificial para acelerar iteraciones, mejorar copy y optimizar estructura sin perder personalización.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
