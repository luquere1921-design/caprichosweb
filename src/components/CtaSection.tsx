import { ScrollReveal } from "@/components/ScrollReveal";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/595961939929?text=Hola!%20Quiero%20hacer%20un%20pedido";

export const CtaSection = () => (
  <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary-foreground/5" />
    <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-primary-foreground/5" />

    <div className="container relative z-10 text-center">
      <ScrollReveal>
        <p className="font-display text-3xl text-primary-foreground/80 mb-2">¿Tenés hambre?</p>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground text-balance max-w-xl mx-auto mb-8">
          ¿Listo para comer casero hoy?
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary-foreground text-primary font-bold px-10 py-5 rounded-2xl text-lg transition-all duration-200 hover:scale-[1.04] active:scale-[0.97] shadow-xl shadow-foreground/20"
        >
          <MessageCircle className="w-6 h-6 animate-float" />
          Haz tu pedido ahora
        </a>
      </ScrollReveal>
    </div>
  </section>
);
