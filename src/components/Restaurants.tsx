"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { UtensilsCrossed, MapPin, ExternalLink } from "lucide-react";

const restaurants = [
  {
    name: "Guasimo",
    description:
      "Cocina contemporánea con ingredientes locales en un ambiente sofisticado y acogedor.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    url: "#",
  },
  {
    name: "Casa Magdalena",
    description:
      "Restaurante boutique con platos de autor y una selección exquisita de vinos.",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80",
    url: "#",
  },
  {
    name: "Grupo Ouzo",
    description:
      "Experiencia gastronómica mediterránea con los mejores sabores del mar Caribe.",
    image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=600&q=80",
    url: "#",
  },
];

function RestaurantCard({
  restaurant,
  index,
}: {
  restaurant: (typeof restaurants)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
    >
      <div className="relative h-44 sm:h-56 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="font-serif text-xl sm:text-2xl text-navy mb-2">{restaurant.name}</h3>
        <p className="text-navy/60 text-sm sm:text-base mb-4">{restaurant.description}</p>

        <div className="flex items-center justify-end pt-3 sm:pt-4 border-t border-gray-100">
          <a
            href={restaurant.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 sm:gap-2 text-navy hover:text-gold transition-colors text-sm"
          >
            Ver más
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Restaurants() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="restaurantes" className="py-16 sm:py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-20"
        >
          <UtensilsCrossed className="w-6 h-6 sm:w-8 sm:h-8 text-gold mx-auto mb-4 sm:mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-navy mb-4 sm:mb-6">
            Recomendación de Restaurantes
          </h2>
          <p className="text-navy/60 text-base sm:text-lg max-w-2xl mx-auto">
            Disfruta de la mejor gastronomía de Santa Marta en estos lugares especiales
          </p>
          <div className="w-16 sm:w-24 h-px bg-gold mx-auto mt-6 sm:mt-8" />
        </motion.div>

        {/* Restaurants Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={restaurant.name} restaurant={restaurant} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
