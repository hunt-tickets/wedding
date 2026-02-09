"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";

const storyEvents = [
  {
    year: "29.07.2023",
    title: "Nos Conocimos",
    description:
      "Fue una noche de verano cuando nuestros caminos se cruzaron por primera vez. En el lugar menos esperado, solo bastó una mirada, una sonrisa y supimos que algo especial estaba por comenzar.",
    image: "/images/story-conocimos.jpg",
  },
  {
    year: "04.08.2023",
    title: "Primera Cita",
    description:
      "Nerviosos pero emocionados, rápidamente acordamos vernos en Emilia Grace. Las horas pasaron volando mientras descubríamos que no había vuelta atrás.",
    image: "/images/story-primera-cita.jpg",
  },
  {
    year: "06.10.2023",
    title: "Relación a Distancia",
    description:
      "Después de conocer una de las ciudades más románticas y especiales de Colombia, y de aceptar que la conexión que sentíamos no tenía comparación, decidimos intentar tener una relación a distancia.",
    image: "/images/story-distancia.jpg",
  },
  {
    year: "2024",
    title: "Citas Alrededor del Mundo",
    description:
      "Tuvimos citas alrededor del mundo, primero en Paris, luego en Fontaineblue, después en Philadelphia, y finalizando en Singapur…",
    image: "/images/story-viajes-mundo.jpg",
  },
  {
    year: "14.03.2025",
    title: "Nuestro Hogar en Madrid",
    description:
      "Después de varios meses a distancia, y de que nos llegara la noticia de que habías conseguido el puesto soñado en Madrid, decidimos dar el siguiente paso y aventurarnos y construir un hogar juntos. Cada día fue una nueva aventura compartida.",
    image: "/images/story-hogar-madrid.jpg",
  },
  {
    year: "09.08.2025",
    title: "La Propuesta",
    description:
      "Cerca del fin del mundo, muy enamorados, llegó la pregunta más importante.. y la respuesta, después de unos llantos, fue un rotundo si!!!",
    image: "/images/story-propuesta.jpg",
  },
];

export default function OurStory() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="historia" className="py-16 sm:py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-gold mx-auto mb-4 sm:mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-navy mb-4 sm:mb-6">
            Nuestra Historia
          </h2>
          <p className="text-navy/60 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Fue un amor a primera vista que superó la distancia y ahora nos lleva al día más especial de nuestras vidas
          </p>
          <div className="w-16 sm:w-24 h-px bg-gold mx-auto mt-6 sm:mt-8" />
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {storyEvents.map((event, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/5] cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${event.image}')`,
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent transition-opacity duration-500 group-hover:from-navy/90 group-hover:via-navy/50" />

              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white">
                {/* Year Badge */}
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="inline-block bg-gold text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-4 self-start"
                >
                  {event.year}
                </motion.span>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 transition-transform duration-500 group-hover:translate-y-[-4px]">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-sm sm:text-base leading-relaxed max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-48 group-hover:opacity-100">
                  {event.description}
                </p>
              </div>

              {/* Decorative corner element */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
