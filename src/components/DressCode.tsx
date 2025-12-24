"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shirt, Sparkles } from "lucide-react";

export default function DressCode() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-navy text-white relative overflow-hidden">
      {/* Decorative elements - hidden on mobile */}
      <div className="absolute inset-0 opacity-10 hidden md:block">
        <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Shirt className="w-8 h-8 text-gold mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-6xl mb-6">Dress Code</h2>
          <div className="w-24 h-px bg-gold mx-auto mb-12" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/20"
          >
            <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-gold mx-auto mb-4 sm:mb-6" />
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">Formal</h3>
            <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
              Te invitamos a vestir de manera elegante para esta celebración
              especial. Traje formal para caballeros y vestido largo o cocktail
              para damas.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-8 mt-8 sm:mt-10">
              {/* Men */}
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl mb-1 sm:mb-2">Caballeros</h4>
                <p className="text-white/70 text-sm sm:text-base">
                  Traje formal oscuro
                  <br />
                  Corbata o pajarita
                </p>
              </div>

              {/* Women */}
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl mb-1 sm:mb-2">Damas</h4>
                <p className="text-white/70 text-sm sm:text-base">
                  Vestido largo o cocktail
                  <br />
                  Tacones elegantes
                </p>
              </div>
            </div>

            <p className="text-gold mt-8 sm:mt-10 text-xs sm:text-sm tracking-wide">
              * Por favor evitar el color blanco, reservado para la novia
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
