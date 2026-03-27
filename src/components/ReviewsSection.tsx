import { ScrollReveal } from "@/components/ScrollReveal";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const reviews = [
  { name: "María G.", text: "La comida casera más rica fuera de casa. Vuelvo todos los días.", initials: "MG" },
  { name: "Carlos R.", text: "Opciones variadas y económicas. Ideal para el almuerzo del trabajo.", initials: "CR" },
  { name: "Ana L.", text: "Atención y comida 10/10. Se nota que cocinan con amor.", initials: "AL" },
  { name: "Jorge P.", text: "Desde que descubrí este lugar, almuerzo acá todas las semanas. Riquísimo.", initials: "JP" },
];

export const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <div className="text-center mb-4">
            <p className="font-display text-2xl text-primary mb-1">Reseñas</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Lo que dicen nuestros clientes
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex items-center justify-center gap-1 mb-12">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-golden text-golden" />
            ))}
            <span className="ml-2 text-lg font-bold text-foreground">4.9</span>
            <span className="text-sm text-muted-foreground ml-1">/ 5</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative overflow-hidden rounded-2xl bg-card shadow-md shadow-foreground/5 p-8 md:p-12 min-h-[200px]">
            {reviews.map((review, i) => (
              <div
                key={review.name}
                className={`transition-all duration-500 ease-out ${
                  i === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 absolute inset-0 p-8 md:p-12 pointer-events-none"
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-sm">
                    {review.initials}
                  </div>
                  <span className="font-semibold text-foreground">{review.name}</span>
                </div>
                <p className="text-lg text-muted-foreground italic leading-relaxed text-pretty">
                  "{review.text}"
                </p>
              </div>
            ))}

            {/* Dots */}
            <div className="flex gap-2 justify-center mt-8">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground/30"
                  }`}
                  aria-label={`Ver reseña ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
