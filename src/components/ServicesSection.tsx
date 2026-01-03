import { Card, CardContent } from "@/components/ui/card";
import { WaterDrop, ShieldIcon, UsersIcon, ZapIcon, ClockIcon } from "@/components/icons";

const services = [
  {
    icon: WaterDrop,
    title: "Agua Potable de Calidad",
    description:
      "Suministro continuo de agua potable tratada y certificada, cumpliendo todos los estándares sanitarios.",
  },
  {
    icon: ShieldIcon,
    title: "Tratamiento Certificado",
    description:
      "Procesos de purificación y control de calidad constantes para garantizar agua segura para tu familia.",
  },
  {
    icon: ClockIcon,
    title: "Servicio Continuo",
    description:
      "Disponibilidad las 24 horas del día, los 7 días de la semana, para que nunca te falte agua.",
  },
  {
    icon: UsersIcon,
    title: "Atención Personalizada",
    description:
      "Equipo comprometido con resolver tus consultas y mantener un servicio de excelencia.",
  },
  {
    icon: ZapIcon,
    title: "Respuesta Rápida",
    description:
      "Atención inmediata ante emergencias y reparaciones para minimizar interrupciones del servicio.",
  },
  {
    icon: WaterDrop,
    title: "Infraestructura Moderna",
    description:
      "Red de distribución mantenida y actualizada para garantizar un flujo constante y presión adecuada.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Nuestros Servicios
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Lo Que Ofrecemos
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprometidos con brindar el mejor servicio de agua potable a la comunidad de Maicolpue.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              variant="feature"
              className="group opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl gradient-ocean flex items-center justify-center mb-6 shadow-water group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
