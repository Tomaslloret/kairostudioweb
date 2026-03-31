const AboutPreview = () => (
  <section className="section-padding bg-primary-light">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-20 py-16 w-full">
        <img src="/kaironlogofogris.png" alt="Kairon Studio Logo" className="w-80 h-80 flex-shrink-0 object-contain bg-transparent" />
        <div className="space-y-8 flex-1">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
            Kairon Studio.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-xl">
            No hacemos webs. Creamos presencias digitales que convierten.
          </p>
          <p className="text-muted-foreground leading-relaxed text-xl">
            Kairon Studio nace de una convicción simple: cada negocio merece existir en digital de forma única, profesional y pensada para convertir. No trabajamos con plantillas ni con fórmulas genéricas. Cada proyecto empieza desde cero, con una mirada estratégica sobre quién es el cliente, qué necesita comunicar y cómo quiere crecer.
          </p>
          <p className="text-muted-foreground leading-relaxed text-xl">
            Combinamos diseño UI/UX, desarrollo técnico, SEO y análisis de datos en un proceso ágil que entrega resultados reales. Usamos inteligencia artificial como herramienta de aceleración — no como reemplazo de la creatividad ni del criterio.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutPreview;
