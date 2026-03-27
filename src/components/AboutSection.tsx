import { ScrollReveal } from "@/components/ScrollReveal";
import { Home, DollarSign, Snowflake, Clock } from "lucide-react";

const benefits = [
  { icon: Home, text: "Comida casera real, hecha con cariño" },
  { icon: DollarSign, text: "Precios accesibles para todos los días" },
  { icon: Snowflake, text: "Ambiente climatizado y confortable" },
  { icon: Clock, text: "Atención rápida, sin largas esperas" },
];

export const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-display text-2xl text-primary mb-1">Sobre nosotros</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Como comer en casa de la abuela
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-14 text-pretty leading-relaxed">
            En <strong className="text-foreground">Caprichos de la abuela</strong> cocinamos como en casa — con ingredientes frescos, recetas de toda la vida y mucho amor. Cada plato que sale de nuestra cocina lleva el sabor auténtico que solo lo casero puede dar.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.text} delay={150 + i * 80}>
              <div className="flex items-start gap-4 bg-card p-5 rounded-2xl shadow-sm shadow-foreground/5 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-medium text-sm leading-relaxed pt-2">{b.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
