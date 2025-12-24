"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";

const storyEvents = [
  {
    year: "2018",
    title: "Nos Conocimos",
    description:
      "Fue en una tarde de verano cuando nuestros caminos se cruzaron por primera vez. Una mirada, una sonrisa, y supimos que algo especial estaba por comenzar.",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
  },
  {
    year: "2019",
    title: "Primera Cita",
    description:
      "Nerviosos pero emocionados, compartimos nuestra primera cena juntos. Las horas pasaron volando mientras descubríamos lo mucho que teníamos en común.",
    image: "https://images.unsplash.com/photo-1511306404404-ad607bd7c601?auto=format&fit=crop&w=600&q=80",
  },
  {
    year: "2021",
    title: "Mudamos Juntos",
    description:
      "Después de años de amor, decidimos dar el siguiente paso y construir un hogar juntos. Cada día fue una nueva aventura compartida.",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    year: "2025",
    title: "La Propuesta",
    description:
      "Bajo un cielo estrellado, con el corazón latiendo a mil, llegó la pregunta más importante. Y la respuesta fue un rotundo ¡SÍ!",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80",
  },
];

function StoryCard({
  event,
  index,
}: {
  event: (typeof storyEvents)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } gap-8 md:gap-16 items-center`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <div className="relative overflow-hidden rounded-2xl shadow-xl group">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors duration-500" />
        </div>
      </div>

      {/* Content */}
      <div className={`w-full md:w-1/2 ${isEven ? "md:text-left" : "md:text-right"}`}>
        <span className="text-gold font-serif text-5xl md:text-6xl font-light">
          {event.year}
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-navy mt-4 mb-4">
          {event.title}
        </h3>
        <p className="text-navy/70 text-lg leading-relaxed">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function OurStory() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="historia" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Heart className="w-8 h-8 text-gold mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-6xl text-navy mb-6">
            Nuestra Historia
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            Un viaje de amor que comenzó hace años y que ahora nos lleva al día más
            especial de nuestras vidas
          </p>
          <div className="w-24 h-px bg-gold mx-auto mt-8" />
        </motion.div>

        {/* Timeline */}
        <div className="space-y-16 md:space-y-24">
          {storyEvents.map((event, index) => (
            <StoryCard key={event.year} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
