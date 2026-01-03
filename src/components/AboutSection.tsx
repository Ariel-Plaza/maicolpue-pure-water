import { WaterDrop } from "@/components/icons";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual element */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full gradient-ocean opacity-10 animate-pulse" />
              <div
                className="absolute inset-8 rounded-full bg-water-medium/20 animate-wave-slow"
                style={{ animationDelay: "-3s" }}
              />
              <div className="absolute inset-16 rounded-full bg-water-light/30 animate-wave" />

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full gradient-ocean flex items-center justify-center mx-auto shadow-glow mb-4 animate-float">
                    <WaterDrop className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <p className="font-display font-bold text-5xl text-primary">APR</p>
                  <p className="text-muted-foreground text-sm">Maicolpue</p>
                </div>
              </div>

              {/* Floating bubbles */}
              <div
                className="absolute top-10 right-10 w-8 h-8 rounded-full bg-water-crystal/40 animate-float"
                style={{ animationDelay: "-1s" }}
              />
              <div
                className="absolute bottom-20 left-10 w-6 h-6 rounded-full bg-water-medium/30 animate-float"
                style={{ animationDelay: "-2s" }}
              />
              <div
                className="absolute top-1/3 left-5 w-4 h-4 rounded-full bg-water-light/50 animate-float"
                style={{ animationDelay: "-0.5s" }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Sobre Nosotros
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              Agua Potable Rural de Maicolpue
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Somos el <strong className="text-foreground">Sistema Sanitario Rural (SSR)</strong> de Maicolpue,
                una organización comprometida con el suministro de agua potable de calidad para
                nuestra comunidad en la hermosa Región de Los Lagos.
              </p>
              <p>
                Nuestra misión es garantizar que cada hogar de Maicolpue tenga acceso a agua pura,
                segura y confiable. Trabajamos día a día para mantener y mejorar nuestra
                infraestructura, asegurando un servicio continuo y de excelencia.
              </p>
              <p>
                Con años de experiencia sirviendo a nuestra comunidad, nos enorgullecemos de ser
                parte fundamental del bienestar de las familias de Maicolpue.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-secondary/50">
                <p className="font-display font-bold text-2xl text-primary">Calidad</p>
                <p className="text-sm text-muted-foreground">Agua 100% potable</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50">
                <p className="font-display font-bold text-2xl text-primary">Confianza</p>
                <p className="text-sm text-muted-foreground">Servicio garantizado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
