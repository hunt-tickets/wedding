"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, memo } from "react";
import { UtensilsCrossed, ExternalLink } from "lucide-react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const restaurants = [
  {
    name: "Guasimo",
    description:
      "Cocina contemporánea con ingredientes locales en un ambiente sofisticado y acogedor.",
    image: "https://eeyjhkhrdoouapuilwep.supabase.co/storage/v1/object/public/wedding/restaurants/guasimo.jpg",
    url: "https://www.facebook.com/people/Guasimo-Restaurante/100077570176542/",
  },
  {
    name: "Casa Magdalena",
    description:
      "Restaurante boutique con platos de autor y una selección exquisita de vinos.",
    image: "https://eeyjhkhrdoouapuilwep.supabase.co/storage/v1/object/public/wedding/restaurants/casa_m.jpg",
    url: "https://www.instagram.com/casamagdalena_smr/",
  },
  {
    name: "Grupo Ouzo",
    description:
      "Experiencia gastronómica mediterránea con los mejores sabores del mar Caribe.",
    image: "https://eeyjhkhrdoouapuilwep.supabase.co/storage/v1/object/public/wedding/restaurants/ouzo.jpg",
    url: "https://www.instagram.com/ouzo.santamarta/",
  },
];

const RestaurantCard = memo(function RestaurantCard({
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
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2Y1ZjVmNSIvPjwvc3ZnPg=="
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
});

export default function Restaurants() {
  return (
    <section id="restaurantes" className="py-16 sm:py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <SectionHeader
          icon={UtensilsCrossed}
          title="Recomendación de Restaurantes"
          subtitle="Disfruta de la mejor gastronomía de Santa Marta en estos lugares especiales"
        />

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
