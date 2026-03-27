import { ScrollReveal } from "@/components/ScrollReveal";
import { MapPin, ExternalLink } from "lucide-react";

const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5!2d-57.63!3d-25.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE2JzQ4LjAiUyA1N8KwMzcnNDguMCJX!5e0!3m2!1ses!2spy!4v1";
const MAPS_LINK = "https://www.google.com/maps/search/Eusebio+Lillo+2017+Asuncion+Paraguay";

export const LocationSection = () => (
  <section id="ubicacion" className="py-20 md:py-28">
    <div className="container max-w-4xl">
      <ScrollReveal>
        <div className="text-center mb-14">
          <p className="font-display text-2xl text-primary mb-1">Ubicación</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Vení a visitarnos</h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="rounded-2xl overflow-hidden shadow-lg shadow-foreground/10 bg-card">
          <div className="aspect-video w-full">
            <iframe
              src={MAPS_EMBED}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Caprichos de la abuela"
            />
          </div>
          <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Eusebio Lillo N° 2017</p>
                <p className="text-sm text-muted-foreground">Asunción, Paraguay</p>
              </div>
            </div>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200 hover:scale-[1.04] active:scale-[0.97]"
            >
              Cómo llegar
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
