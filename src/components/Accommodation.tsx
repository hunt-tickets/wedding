"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Hotel, Star, ExternalLink } from "lucide-react";

const hotels = [
  {
    name: "AC Hotel Marriott",
    stars: 4,
    description:
      "Moderno hotel con diseño contemporáneo, ubicado cerca del centro histórico.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    url: "#",
  },
  {
    name: "Hilton Garden Inn",
    stars: 4,
    description:
      "Hotel de primera clase con excelentes servicios y comodidades para tu estadía.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80",
    url: "#",
  },
  {
    name: "Hotel Boutique Don Pepe",
    stars: 5,
    description:
      "Lujoso hotel boutique en el corazón del centro histórico con vistas al mar Caribe.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
    url: "#",
  },
  {
    name: "Marriott Playa Dormida",
    stars: 5,
    description:
      "Resort exclusivo frente al mar con todas las comodidades para una estadía inolvidable.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=600&q=80",
    url: "#",
  },
  {
    name: "Hotel Mercure",
    stars: 4,
    description:
      "Hotel con encanto francés y excelente ubicación cerca de la zona turística.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80",
    url: "#",
  },
  {
    name: "Irotama Resort",
    stars: 5,
    description:
      "Resort todo incluido en Pozos Colorados con amplias instalaciones y playa privada.",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80",
    url: "#",
  },
  {
    name: "Hotel Pombal",
    stars: 3,
    description:
      "Opción encantadora y acogedora con excelente relación calidad-precio.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80",
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
      <div className="relative h-44 sm:h-56 overflow-hidden">
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

      <div className="p-4 sm:p-6">
        <h3 className="font-serif text-xl sm:text-2xl text-navy mb-2">{hotel.name}</h3>
        <p className="text-navy/60 text-sm sm:text-base mb-4">{hotel.description}</p>

        <div className="flex items-center justify-end pt-3 sm:pt-4 border-t border-gray-100">
          <a
            href={hotel.url}
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

export default function Accommodation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="alojamiento" className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-20"
        >
          <Hotel className="w-6 h-6 sm:w-8 sm:h-8 text-gold mx-auto mb-4 sm:mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-navy mb-4 sm:mb-6">
            Alojamiento
          </h2>
          <p className="text-navy/60 text-base sm:text-lg max-w-2xl mx-auto">
            Hemos seleccionado algunas opciones de hospedaje para que disfrutes de
            Santa Marta
          </p>
          <div className="w-16 sm:w-24 h-px bg-gold mx-auto mt-6 sm:mt-8" />
        </motion.div>

        {/* Hotels Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
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
          Opciones cerca de la ceremonia y fiesta, o en Pozos Colorados
        </motion.p>
      </div>
    </section>
  );
}
