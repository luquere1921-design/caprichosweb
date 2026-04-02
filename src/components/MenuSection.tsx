import menu from "@/data/menu.json";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MessageCircle, Flame, Heart } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/595961939929?text=Hola!%20Quiero%20pedir%20";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
}

const tagStyles: Record<string, string> = {
  Popular: "bg-primary/15 text-primary",
  Casero: "bg-secondary/15 text-secondary",
  Recomendado: "bg-golden/20 text-accent-foreground",
};

export const MenuSection = () => {
  return (
    <section id="menu" className="py-20 md:py-28 bg-warm-cream">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="font-display text-2xl text-primary mb-1">Menú del día</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Platos que te van a enamorar
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {menu.filter(item => item.available) 
          .map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 120}>
              <div className="group bg-card rounded-2xl overflow-hidden shadow-md shadow-foreground/5 hover:shadow-xl hover:shadow-foreground/10 transition-all duration-300 hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  {!item.available && (
  <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-10">
    <span className="text-white text-lg font-bold">AGOTADO</span>
  </div>
)}
                  <img src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute top-3 left-3 flex gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg backdrop-blur-sm ${
                          tagStyles[tag] || "bg-muted text-muted-foreground"
                      }`}
                >
                    {tag === "Popular" && <Flame className="w-3 h-3" />}
                    {tag === "Recomendado" && <Heart className="w-3 h-3" />}
                    {tag}
                    {item.offer && (
  <span className="absolute bottom-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded">
    OFERTA
  </span>
)}
                  </span>
              ))}
            </div>
            </div> 
 


                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 text-pretty">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary font-display">{item.price}</span>
                    <a
                      href={`https://wa.me/595961939929?text=${encodeURIComponent(
  `Hola! Quiero pedir: ${item.name} - ${item.price}`
)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-xl text-sm transition-all duration-200 hover:scale-[1.04] active:scale-[0.97] shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Pedir
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
