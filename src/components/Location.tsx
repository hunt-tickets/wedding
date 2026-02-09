"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Navigation as NavIcon, Clock, Phone, Church, Wine, UtensilsCrossed, Music, Calendar } from "lucide-react";

const scheduleItems = [
  {
    time: "6:30 PM",
    title: "Llegada a la Ceremonia",
    description: "Te esperamos en la Catedral Basílica de Santa Marta",
    icon: Church,
  },
  {
    time: "7:00 PM",
    title: "Ceremonia",
    description: "Únete a nosotros mientras intercambiamos nuestros votos de amor eterno",
    icon: Church,
  },
  {
    time: "8:30 PM",
    title: "Llegada a la Recepción",
    description: "Nos trasladamos al Club Santa Marta para continuar la celebración",
    icon: Wine,
  },
  {
    time: "9:00 PM",
    title: "Cena",
    description: "Una exquisita cena para deleitar tu paladar en una noche inolvidable",
    icon: UtensilsCrossed,
  },
  {
    time: "10:30 PM",
    title: "Fiesta",
    description: "¡Es hora de bailar y celebrar el amor hasta el amanecer!",
    icon: Music,
  },
];

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ubicacion" className="py-16 sm:py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-20"
        >
          <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-gold mx-auto mb-4 sm:mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-navy mb-4 sm:mb-6">
            Boda
          </h2>
          <p className="text-navy/60 text-base sm:text-lg max-w-2xl mx-auto">
            Dos lugares especiales en el corazón de Santa Marta
          </p>
          <div className="w-16 sm:w-24 h-px bg-gold mx-auto mt-6 sm:mt-8" />
        </motion.div>

        {/* Cronograma Timeline */}
        <div className="relative mb-16 sm:mb-24">
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
                      className={`bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow ${
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

        {/* Ceremonia */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 sm:mb-24">
          {/* Venue Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif text-3xl md:text-4xl text-navy mb-4">
                Ceremonia
              </h3>
              <h4 className="font-serif text-2xl md:text-3xl text-gold mb-4">
                Catedral Basílica de Santa Marta
              </h4>
              <p className="text-navy/60 text-lg leading-relaxed mb-6">
                Bajo los blancos arcos de la catedral más antigua de América, donde la fe y la
                historia se abrazan, uniremos nuestras vidas en una promesa que trascenderá el tiempo.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="font-medium text-navy">Dirección</h5>
                  <p className="text-navy/60">
                    Plaza de la catedral, Cra 4
                    <br />
                    Comuna 2, Santa Marta, Colombia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="font-medium text-navy">Hora</h5>
                  <p className="text-navy/60">6:30 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="font-medium text-navy">Contacto</h5>
                  <p className="text-navy/60">+57 300 830 4774</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Catedral+Basílica+Santa+Marta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-navy text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-navy-light transition-colors w-full sm:w-auto"
            >
              <NavIcon className="w-5 h-5" />
              Cómo llegar
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mt-8 md:mt-0"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1748!2d-74.2148!3d11.2467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4f5f5f5f5f5f5%3A0x5f5f5f5f5f5f5f5f!2sCatedral%20Basílica%20de%20Santa%20Marta!5e0!3m2!1sen!2sco!4v1609459200000!5m2!1sen!2sco"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500 md:h-[400px]"
              />
            </div>
            <div className="hidden md:block absolute -top-4 -right-4 w-full h-full border-2 border-gold rounded-2xl -z-10" />
          </motion.div>
        </div>

        {/* Recepción */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative order-2 md:order-1 mt-8 md:mt-0"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2!2d-74.2135!3d11.2425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4f5e5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sClub%20Santa%20Marta!5e0!3m2!1sen!2sco!4v1609459200000!5m2!1sen!2sco"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500 md:h-[400px]"
              />
            </div>
            <div className="hidden md:block absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-2xl -z-10" />
          </motion.div>

          {/* Venue Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-8 order-1 md:order-2"
          >
            <div>
              <h3 className="font-serif text-3xl md:text-4xl text-navy mb-4">
                Recepción y Fiesta
              </h3>
              <h4 className="font-serif text-2xl md:text-3xl text-gold mb-4">
                Club Santa Marta
              </h4>
              <p className="text-navy/60 text-lg leading-relaxed mb-6">
                Entre muros que guardan cien años de memorias y celebraciones, nos reuniremos
                para escribir el capítulo más alegre de nuestra historia en el corazón de la
                tradición samaria.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="font-medium text-navy">Dirección</h5>
                  <p className="text-navy/60">
                    Cra 1C #22-110
                    <br />
                    Santa Marta, Colombia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="font-medium text-navy">Hora</h5>
                  <p className="text-navy/60">8:30 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="font-medium text-navy">Contacto</h5>
                  <p className="text-navy/60">+57 300 830 4774</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Club+Santa+Marta+Colombia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-navy text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-navy-light transition-colors w-full sm:w-auto"
            >
              <NavIcon className="w-5 h-5" />
              Cómo llegar
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
