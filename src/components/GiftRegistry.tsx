"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gift, Home, Plane, CreditCard, Heart } from "lucide-react";

const giftOptions = [
  {
    icon: Home,
    title: "Nuestro Hogar",
    description:
      "Ayúdanos a amueblar y decorar nuestro nuevo hogar con artículos de nuestra lista.",
    link: "#",
    linkText: "Ver lista de regalos",
  },
  {
    icon: Plane,
    title: "Luna de Miel",
    description:
      "Contribuye a nuestra luna de miel soñada. Cada aporte nos acerca a ese viaje especial.",
    link: "#",
    linkText: "Contribuir",
  },
  {
    icon: CreditCard,
    title: "Transferencia",
    description:
      "Si prefieres, puedes hacer una transferencia directa a nuestra cuenta bancaria.",
    link: "#",
    linkText: "Ver datos bancarios",
    bankInfo: {
      bank: "Bancolombia",
      account: "Ahorros: 123-456789-00",
      name: "María José & Pablo José",
    },
  },
];

function GiftCard({
  option,
  index,
}: {
  option: (typeof giftOptions)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = option.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-white rounded-2xl p-5 sm:p-8 shadow-lg hover:shadow-xl transition-all group text-center"
    >
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-gold/20 transition-colors">
        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-navy group-hover:text-gold transition-colors" />
      </div>

      <h3 className="font-serif text-xl sm:text-2xl text-navy mb-3 sm:mb-4">{option.title}</h3>
      <p className="text-navy/60 text-sm sm:text-base mb-4 sm:mb-6">{option.description}</p>

      {option.bankInfo && (
        <div className="bg-cream rounded-xl p-4 mb-6 text-left">
          <p className="text-sm text-navy/80">
            <strong>Banco:</strong> {option.bankInfo.bank}
          </p>
          <p className="text-sm text-navy/80">
            <strong>Cuenta:</strong> {option.bankInfo.account}
          </p>
          <p className="text-sm text-navy/80">
            <strong>Titular:</strong> {option.bankInfo.name}
          </p>
        </div>
      )}

      <a
        href={option.link}
        className="inline-flex items-center gap-2 text-gold hover:text-navy transition-colors font-medium"
      >
        {option.linkText}
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </motion.div>
  );
}

export default function GiftRegistry() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="regalos" className="py-16 sm:py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-20"
        >
          <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-gold mx-auto mb-4 sm:mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-navy mb-4 sm:mb-6">
            Mesa de Regalos
          </h2>
          <p className="text-navy/60 text-base sm:text-lg max-w-2xl mx-auto">
            Tu presencia es nuestro mejor regalo, pero si deseas obsequiarnos algo,
            aquí tienes algunas opciones
          </p>
          <div className="w-16 sm:w-24 h-px bg-gold mx-auto mt-6 sm:mt-8" />
        </motion.div>

        {/* Gift Options */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {giftOptions.map((option, index) => (
            <GiftCard key={option.title} option={option} index={index} />
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 text-navy/50">
            <Heart className="w-5 h-5 text-gold" />
            <span className="text-sm">Con todo nuestro amor y gratitud</span>
            <Heart className="w-5 h-5 text-gold" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
