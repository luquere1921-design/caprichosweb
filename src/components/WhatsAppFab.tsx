import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/595961939929?text=Hola!%20Quiero%20hacer%20un%20pedido";

export const WhatsAppFab = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white rounded-full flex items-center justify-center shadow-lg shadow-[hsl(142,70%,30%,0.3)] transition-all duration-200 hover:scale-110 active:scale-95 animate-float"
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);
