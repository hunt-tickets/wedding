"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Instagram, Sparkles, Car, Scissors } from "lucide-react";

const contacts = [
  {
    category: "Maquillaje",
    icon: Sparkles,
    providers: [
      {
        name: "K Makeup",
        whatsapp: "+57 320 5673902",
        instagram: "@kmakeup_c",
      },
      {
        name: "Andrea Altahona",
        whatsapp: "+57 300 1499172",
        instagram: "@andrealtahonamakeup",
      },
      {
        name: "Makeup by Mike G",
        whatsapp: "+57 300 1499172",
        instagram: "@makeupbymikeg",
      },
      {
        name: "Adri Beauty",
        whatsapp: "+57 300 1499172",
        instagram: "@adrivlogsa",
      },
    ],
  },
  {
    category: "Transporte",
    icon: Car,
    providers: [
      {
        name: "Taxi Irotama",
        whatsapp: "+57 304 2076640",
        instagram: "",
      },
      {
        name: "Villegas Van Santa Marta",
        whatsapp: "+57 301 6774130",
        instagram: "",
      },
      {
        name: "Amanda Taxi Bahía",
        whatsapp: "+57 302 4704274",
        instagram: "",
      },
    ],
  },
  {
    category: "Peluquería",
    icon: Scissors,
    providers: [
      {
        name: "Jherson Kock",
        whatsapp: "+57 300 8142926",
        instagram: "@jhersonkock",
      },
      {
        name: "Herman Restrepo",
        whatsapp: "+57 300 8142926",
        instagram: "@hermanrestrepo",
      },
    ],
  },
];

export default function Contacts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contactos" className="py-16 sm:py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-20"
        >
          <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-gold mx-auto mb-4 sm:mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-navy mb-4 sm:mb-6">
            Contactos Útiles
          </h2>
          <p className="text-navy/60 text-base sm:text-lg max-w-2xl mx-auto">
            Servicios recomendados para que disfrutes al máximo tu estadía en Santa Marta
          </p>
          <div className="w-16 sm:w-24 h-px bg-gold mx-auto mt-6 sm:mt-8" />
        </motion.div>

        {/* Contacts Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {contacts.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl text-navy">
                    {category.category}
                  </h3>
                </div>

                {/* Providers List */}
                <div className="space-y-6">
                  {category.providers.map((provider, providerIndex) => (
                    <div
                      key={providerIndex}
                      className="border-t border-gray-100 pt-4 first:border-0 first:pt-0"
                    >
                      <h4 className="font-medium text-navy mb-3">
                        {provider.name}
                      </h4>

                      <div className="space-y-2">
                        {/* WhatsApp */}
                        <a
                          href={`https://wa.me/${provider.whatsapp.replace(/\s/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-navy/70 hover:text-gold transition-colors group"
                        >
                          <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                            <Phone className="w-4 h-4 text-green-600" />
                          </div>
                          <span>{provider.whatsapp}</span>
                        </a>

                        {/* Instagram */}
                        {provider.instagram && (
                          <a
                            href={`https://instagram.com/${provider.instagram.replace("@", "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-navy/70 hover:text-gold transition-colors group"
                          >
                            <div className="w-8 h-8 bg-pink-500/10 rounded-full flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                              <Instagram className="w-4 h-4 text-pink-600" />
                            </div>
                            <span>{provider.instagram}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-navy/50 mt-10 text-sm"
        >
          Estos son servicios recomendados. No dudes en contactarlos para coordinar tu visita.
        </motion.p>
      </div>
    </section>
  );
}
