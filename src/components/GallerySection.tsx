import galeria from "@/data/galeria.json";
import caprichosLogo from "@/assets/caprichos-logo.png";
import food3 from "@/assets/food-3.png";
import food4 from "@/assets/food-4.png";
import food5 from "@/assets/food-5.png";
import { ScrollReveal } from "@/components/ScrollReveal";



export const GallerySection = () => (
 <>
    <img 
      src={caprichosLogo} 
      alt="Logo de Caprichos de la abuela" 
      className="w-32 mx-auto mb-6"
    /> 

  <section id="galeria" className="py-20 md:py-28 bg-warm-cream">
    <div className="container">
      <ScrollReveal>
        <div className="text-center mb-14">
          <p className="font-display text-2xl text-primary mb-1">Galería</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nuestros platos hablan solos</h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
        {galeria.map((img, i) => (
          <ScrollReveal
            key={img.alt}
            delay={i * 80}
            className=""
          >
            <div className="group relative overflow-hidden rounded-2xl shadow-sm shadow-foreground/5 aspect-square">
              <img
                src={`/${img.image}`}
                alt={img.alt}
                className=""
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
  </>  
);
