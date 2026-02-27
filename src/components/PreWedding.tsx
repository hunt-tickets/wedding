"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Shirt } from "lucide-react";

export default function PreWedding() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="preboda" className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-20"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-navy mb-4 sm:mb-6">
            Pre-boda
          </h2>
          <p className="text-navy/60 text-base sm:text-lg max-w-2xl mx-auto">
            Comencemos a celebrar juntos
          </p>
          <div className="w-16 sm:w-24 h-px bg-gold mx-auto mt-6 sm:mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Venue Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif text-3xl md:text-4xl text-navy mb-4">
                Cóctel de Bienvenida
              </h3>
              <p className="text-navy/60 text-lg leading-relaxed mb-6">
                Un balcón tallado en la roca donde el sol se funde con el azul del Caribe.
                El escenario soñado para alzar nuestras copas y comenzar a celebrar el amor
                bajo el cielo infinito de Santa Marta.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-navy">Dirección</h4>
                  <p className="text-navy/60">
                    Burukuka<br />
                    Carrera 1 Calle 1, Rodadero<br />
                    Entrada por Edificio Cascadas del Rodadero<br />
                    Santa Marta, Colombia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-navy">Hora</h4>
                  <p className="text-navy/60">4:30 PM - 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <Shirt className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-navy">Dress Code</h4>
                  <p className="text-navy/60">
                    Todos de blanco
                    <br />
                    <span className="text-sm italic">No flecos para las mujeres</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mt-8 md:mt-0"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl relative">
              <iframe
                src="https://www.google.com/maps?q=Burukuka+Carrera+1+Calle+1+Rodadero+Santa+Marta+Colombia&output=embed&z=17"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500 md:h-[400px]"
              />
              {/* Overlay to hide bottom UI elements */}
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
            </div>
            {/* Decorative frame - hidden on mobile */}
            <div className="hidden md:block absolute -top-4 -right-4 w-full h-full border-2 border-gold rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
