import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "¿Cuánto tarda una web?", a: "Depende del alcance, pero nuestro proceso es ágil. Una landing puede estar lista en pocos días, un sitio más complejo en 2–3 semanas." },
  { q: "¿Trabajan con plantillas?", a: "No. Todo es 100% personalizado. Cada diseño se crea desde cero para tu negocio." },
  { q: "¿Incluye SEO?", a: "Sí. Todos nuestros sitios incluyen SEO técnico de base: estructura correcta, velocidad, meta tags y buenas prácticas." },
  { q: "¿Puedo pedir cambios?", a: "Por supuesto. El proceso incluye rondas de revisión para ajustar hasta que quede perfecto." },
  { q: "¿Cómo es el pago?", a: "Podemos trabajar con pago único, suscripción o un mix según tu caso. Lo definimos juntos." },
  { q: "¿Ofrecen mantenimiento?", a: "El mantenimiento es opcional y lo definimos según necesidades de cada proyecto." },
  { q: "¿Trabajan para cualquier rubro?", a: "Sí. Nos adaptamos a cada industria, desde gastronomía hasta servicios profesionales, comercio y más." },
];

const FAQSection = () => (
  <section className="section-padding bg-primary-light">
    <div className="container max-w-3xl space-y-8">
      <div className="text-center space-y-3">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
          Preguntas frecuentes
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="card-kairon px-5 border-none">
            <AccordionTrigger className="font-heading font-semibold text-left text-foreground hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
