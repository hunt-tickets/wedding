"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

const storyEvents = [
  {
    year: "29.07.2023",
    title: "Nos Conocimos",
    description:
      "Fue una noche de verano cuando nuestros caminos se cruzaron por primera vez. En el lugar menos esperado, solo bastó una mirada, una sonrisa y supimos que algo especial estaba por comenzar.",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "04.08.2023",
    title: "Primera Cita",
    description:
      "Nerviosos pero emocionados, rápidamente acordamos vernos en Emilia Grace. Las horas pasaron volando mientras descubríamos que no había vuelta atrás.",
    image: "https://images.unsplash.com/photo-1511306404404-ad607bd7c601?auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "06.10.2023",
    title: "Relación a Distancia",
    description:
      "Después de conocer una de las ciudades más románticas y especiales de Colombia, y de aceptar que la conexión que sentíamos no tenía comparación, decidimos intentar tener una relación a distancia.",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "2024",
    title: "Citas Alrededor del Mundo",
    description:
      "Tuvimos citas alrededor del mundo, primero en Paris, luego en Fontaineblue, después en Philadelphia, y finalizando en Singapur…",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "14.03.2025",
    title: "Nuestro Hogar en Madrid",
    description:
      "Después de varios meses a distancia, y de que nos llegara la noticia de que habías conseguido el puesto soñado en Madrid, decidimos dar el siguiente paso y aventurarnos y construir un hogar juntos. Cada día fue una nueva aventura compartida.",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "09.08.2025",
    title: "La Propuesta",
    description:
      "Cerca del fin del mundo, muy enamorados, llegó la pregunta más importante.. y la respuesta, después de unos llantos, fue un rotundo si!!!",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function OurStory() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const [[page, direction], setPage] = useState([0, 0]);

  const currentIndex = ((page % storyEvents.length) + storyEvents.length) % storyEvents.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const goToSlide = (index: number) => {
    const newDirection = index > currentIndex ? 1 : -1;
    setPage([index, newDirection]);
  };

  return (
    <section id="historia" className="py-16 sm:py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-gold mx-auto mb-4 sm:mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-navy mb-4 sm:mb-6">
            Nuestra Historia
          </h2>
          <p className="text-navy/60 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Un viaje de amor que comenzó hace años y que ahora nos lleva al día más
            especial de nuestras vidas
          </p>
          <div className="w-16 sm:w-24 h-px bg-gold mx-auto mt-6 sm:mt-8" />
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[550px] overflow-hidden rounded-2xl sm:rounded-3xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                {/* Card Content */}
                <div className="relative h-full w-full">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${storyEvents[currentIndex].image}')`,
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-12 text-white">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <span className="inline-block bg-gold text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4">
                        {storyEvents[currentIndex].year}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl md:text-5xl mb-2 sm:mb-4">
                        {storyEvents[currentIndex].title}
                      </h3>
                      <p className="text-white/80 text-sm sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                        {storyEvents[currentIndex].description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows - Hidden on mobile */}
            <button
              onClick={() => paginate(-1)}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {storyEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-6 sm:w-8 h-2 sm:h-3 bg-gold"
                    : "w-2 sm:w-3 h-2 sm:h-3 bg-navy/30 hover:bg-navy/50"
                }`}
              />
            ))}
          </div>

          {/* Timeline Bar */}
          <div className="hidden md:flex justify-between items-center mt-10 px-4">
            {storyEvents.map((event, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex flex-col items-center gap-2 transition-all duration-300 group ${
                  index === currentIndex ? "scale-110" : "opacity-60 hover:opacity-100"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gold border-gold"
                      : "bg-transparent border-navy/40 group-hover:border-gold"
                  }`}
                />
                <span
                  className={`font-serif text-lg transition-colors ${
                    index === currentIndex ? "text-gold" : "text-navy/60"
                  }`}
                >
                  {event.year}
                </span>
                <span
                  className={`text-sm transition-colors ${
                    index === currentIndex ? "text-navy" : "text-navy/40"
                  }`}
                >
                  {event.title}
                </span>
              </button>
            ))}
            {/* Connecting Line */}
            <div className="absolute left-[12%] right-[12%] top-[calc(100%-88px)] h-px bg-navy/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
