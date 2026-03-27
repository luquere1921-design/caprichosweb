import { ScrollReveal } from "@/components/ScrollReveal";
import { UtensilsCrossed, ShoppingBag, QrCode } from "lucide-react";

const services = [
  { icon: UtensilsCrossed, title: "Comer en local", desc: "Disfruta en nuestro ambiente climatizado y acogedor." },
  { icon: ShoppingBag, title: "Para llevar", desc: "Tu comida casera lista para llevar al trabajo o a casa." },
  { icon: QrCode, title: "Efectivo + QR", desc: "Pagá como prefieras — aceptamos efectivo y pagos por QR." },
];

export const ServicesSection = () => (
  <section className="py-20 md:py-28 bg-warm-cream">
    <div className="container">
      <ScrollReveal>
        <div className="text-center mb-14">
          <p className="font-display text-2xl text-primary mb-1">Servicios</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Cómo podés disfrutar</h2>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 100}>
            <div className="text-center p-6 bg-card rounded-2xl shadow-sm shadow-foreground/5 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground text-pretty">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
