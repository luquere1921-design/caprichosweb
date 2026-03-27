import { MapPin, Phone, Clock } from "lucide-react";

export const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/70 py-12">
    <div className="container">
      <div className="grid sm:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <p className="font-display text-2xl text-primary-foreground mb-2">Caprichos de la abuela</p>
          <p className="text-sm">El sabor de lo auténtico y casero</p>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <p className="text-sm">Eusebio Lillo N° 2017, Asunción, Paraguay</p>
          </div>
          <a href="tel:+595961939929" className="flex items-center gap-2 text-sm hover:text-primary-foreground transition-colors">
            <Phone className="w-4 h-4" />
            +595 961 939929
          </a>
        </div>

        {/* Hours */}
        <div>
          <div className="flex items-start gap-2 mb-2">
            <Clock className="w-4 h-4 mt-0.5" />
            <span className="text-sm font-semibold text-primary-foreground">Horarios</span>
          </div>
          <p className="text-sm ml-6">Lunes a Viernes: 07:00 – 14:00</p>
          <p className="text-sm ml-6">Sábado y Domingo: Cerrado</p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Caprichos de la abuela. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);
