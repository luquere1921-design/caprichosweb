import heroBg from "@/assets/hero-bg.jpg";
import { useOpenStatus } from "@/hooks/useOpenStatus";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MessageCircle, ChevronDown } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/595961939929?text=Hola!%20Quiero%20hacer%20un%20pedido";

export const HeroSection = () => {
  const isOpen = useOpenStatus();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Interior cálido de Caprichos de la abuela"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(25,35%,10%,0.7)] via-[hsl(25,35%,10%,0.5)] to-[hsl(25,35%,10%,0.8)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-6 py-24">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 mb-6">
            <span
              className={`inline-block w-2.5 h-2.5 rounded-full ${
                isOpen ? "bg-green-400 animate-pulse-soft" : "bg-red-400"
              }`}
            />
            <span className="text-sm font-medium tracking-wide uppercase text-primary-foreground/80">
              {isOpen ? "Abierto ahora" : "Cerrado — L a V, 07:00–14:00"}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <p className="font-display text-2xl md:text-3xl text-golden mb-2">
            Caprichos de la abuela
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-[0.95] tracking-tight text-balance max-w-3xl mx-auto mb-6">
            El sabor de lo auténtico y casero
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-lg md:text-xl text-primary-foreground/75 max-w-xl mx-auto mb-10 text-pretty">
            Comida casera deliciosa, económica y con todo el cariño todos los días.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-primary/25"
            >
              <MessageCircle className="w-5 h-5" />
              Pedir por WhatsApp
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground font-medium px-8 py-4 rounded-2xl text-lg transition-all duration-200 hover:bg-primary-foreground/10 hover:scale-[1.03] active:scale-[0.97]"
            >
              Ver menú del día
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="w-6 h-6 text-primary-foreground/40" />
      </div>
    </section>
  );
};
