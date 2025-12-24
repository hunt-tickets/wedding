"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Hotel, Star, MapPin, ExternalLink } from "lucide-react";

const hotels = [
  {
    name: "Hotel Boutique Don Pepe",
    stars: 5,
    description:
      "Lujoso hotel boutique en el corazón del centro histórico con vistas al mar Caribe.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    price: "Desde $350.000/noche",
    distance: "15 min del venue",
    url: "#",
  },
  {
    name: "Casa del Mar Resort",
    stars: 4,
    description:
      "Resort frente al mar con spa, piscina infinita y acceso directo a la playa privada.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80",
    price: "Desde $280.000/noche",
    distance: "20 min del venue",
    url: "#",
  },
  {
    name: "Hostal Sierra Nevada",
    stars: 3,
    description:
      "Opción económica y acogedora con desayuno incluido y ambiente familiar.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
    price: "Desde $120.000/noche",
    distance: "25 min del venue",
    url: "#",
  },
];

function HotelCard({
  hotel,
  index,
}: {
  hotel: (typeof hotels)[0];
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
      <div className="relative h-56 overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <div className="flex items-center gap-1">
            {[...Array(hotel.stars)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-gold fill-gold" />
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-2xl text-navy mb-2">{hotel.name}</h3>
        <p className="text-navy/60 mb-4">{hotel.description}</p>

        <div className="flex items-center gap-2 text-sm text-navy/50 mb-4">
          <MapPin className="w-4 h-4" />
          {hotel.distance}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-gold font-medium">{hotel.price}</span>
          <a
            href={hotel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors"
          >
            Ver más
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Accommodation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="alojamiento" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Hotel className="w-8 h-8 text-gold mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-6xl text-navy mb-6">
            Alojamiento
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            Hemos seleccionado algunas opciones de hospedaje para que disfrutes de
            Santa Marta
          </p>
          <div className="w-24 h-px bg-gold mx-auto mt-8" />
        </motion.div>

        {/* Hotels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <HotelCard key={hotel.name} hotel={hotel} index={index} />
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-navy/50 mt-12 text-sm"
        >
          * Menciona &quot;Boda Pablo & María José&quot; al reservar para obtener
          tarifas especiales
        </motion.p>
      </div>
    </section>
  );
}
