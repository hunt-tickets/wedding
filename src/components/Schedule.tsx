"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Church, Wine, UtensilsCrossed, Music, Calendar } from "lucide-react";

const scheduleItems = [
  {
    time: "5:00 PM",
    title: "Ceremonia",
    description: "Únete a nosotros mientras intercambiamos nuestros votos de amor eterno",
    icon: Church,
  },
  {
    time: "6:30 PM",
    title: "Cóctel de Bienvenida",
    description: "Disfruta de bebidas refrescantes y canapés mientras nos preparamos para celebrar",
    icon: Wine,
  },
  {
    time: "8:00 PM",
    title: "Cena",
    description: "Una exquisita cena para deleitar tu paladar en una noche inolvidable",
    icon: UtensilsCrossed,
  },
  {
    time: "10:00 PM",
    title: "Fiesta",
    description: "¡Es hora de bailar y celebrar el amor hasta el amanecer!",
    icon: Music,
  },
];

export default function Schedule() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cronograma" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Calendar className="w-8 h-8 text-gold mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-6xl text-navy mb-6">
            Cronograma del Día
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            Sábado, 01 de Agosto de 2026
          </p>
          <div className="w-24 h-px bg-gold mx-auto mt-8" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/30 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {scheduleItems.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex items-center gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold rounded-full transform md:-translate-x-1/2 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                    }`}
                  >
                    <div
                      className={`bg-cream p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow ${
                        isEven ? "md:ml-auto" : ""
                      } max-w-md`}
                    >
                      <div
                        className={`flex items-center gap-4 mb-4 ${
                          isEven ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-gold font-serif text-2xl">
                          {item.time}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl text-navy mb-2">
                        {item.title}
                      </h3>
                      <p className="text-navy/60">{item.description}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
