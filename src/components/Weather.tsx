"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sun, Droplets, Wind, CloudRain } from "lucide-react";

export default function Weather() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clima" className="pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-24 md:pb-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-20"
        >
          <Sun className="w-6 h-6 sm:w-8 sm:h-8 text-gold mx-auto mb-4 sm:mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-navy mb-4 sm:mb-6">
            Clima del Lugar
          </h2>
          <p className="text-navy/60 text-base sm:text-lg max-w-2xl mx-auto">
            Santa Marta te espera con su clima cálido tropical
          </p>
          <div className="w-16 sm:w-24 h-px bg-gold mx-auto mt-6 sm:mt-8" />
        </motion.div>

        {/* Weather Info */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-cream rounded-2xl p-6 text-center"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sun className="w-7 h-7 sm:w-8 sm:h-8 text-gold" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-navy mb-2">Temperatura</h3>
            <p className="text-navy/60 text-2xl sm:text-3xl font-light">28°C - 32°C</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-cream rounded-2xl p-6 text-center"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Droplets className="w-7 h-7 sm:w-8 sm:h-8 text-navy" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-navy mb-2">Humedad</h3>
            <p className="text-navy/60 text-2xl sm:text-3xl font-light">70% - 80%</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-cream rounded-2xl p-6 text-center"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wind className="w-7 h-7 sm:w-8 sm:h-8 text-navy" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-navy mb-2">Vientos</h3>
            <p className="text-navy/60 text-2xl sm:text-3xl font-light">Suaves</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-cream rounded-2xl p-6 text-center"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CloudRain className="w-7 h-7 sm:w-8 sm:h-8 text-navy" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-navy mb-2">Lluvias</h3>
            <p className="text-navy/60 text-2xl sm:text-3xl font-light">Ocasionales</p>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-navy/60 text-base sm:text-lg max-w-2xl mx-auto">
            Agosto en Santa Marta ofrece un clima cálido perfecto para celebrar.
            Recomendamos ropa ligera y fresca, pero siempre con un toque elegante.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
