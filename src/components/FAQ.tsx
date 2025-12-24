"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Puedo llevar acompañante?",
    answer:
      "Tu invitación indica si incluye acompañante. Por favor, respeta el número de personas indicadas en tu invitación. Si tienes dudas, contáctanos directamente.",
  },
  {
    question: "¿Pueden asistir niños?",
    answer:
      "Queremos que este día sea especial para ti y para nosotros, por lo que hemos decidido que sea una celebración solo para adultos. Esperamos que comprendas nuestra decisión.",
  },
  {
    question: "¿Hay estacionamiento disponible?",
    answer:
      "Sí, el venue cuenta con amplio estacionamiento gratuito para todos los invitados. También habrá servicio de valet parking disponible.",
  },
  {
    question: "¿Qué tipo de comida se servirá?",
    answer:
      "Tendremos un menú gourmet con opciones de carne, pescado y vegetariana. Si tienes alguna alergia o restricción alimentaria, por favor indícalo en tu confirmación.",
  },
  {
    question: "¿Habrá transporte desde los hoteles?",
    answer:
      "Sí, organizaremos transporte desde los hoteles recomendados al venue y de regreso. Los horarios se enviarán más cerca de la fecha.",
  },
  {
    question: "¿Puedo tomar fotos durante la ceremonia?",
    answer:
      "Por favor, mantén tu teléfono guardado durante la ceremonia para que todos puedan disfrutar del momento. Tendremos fotógrafos profesionales. ¡Después puedes tomar todas las fotos que quieras!",
  },
  {
    question: "¿Cuál es la fecha límite para confirmar?",
    answer:
      "Por favor, confirma tu asistencia antes del 1 de Julio de 2026. Esto nos ayudará con la planificación final del evento.",
  },
  {
    question: "¿Qué pasa si llueve?",
    answer:
      "El venue tiene áreas techadas y carpas de respaldo. ¡La celebración continuará sin importar el clima!",
  },
];

function FAQItem({
  faq,
  isOpen,
  onClick,
  index,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-navy/10 last:border-0"
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="font-serif text-xl text-navy group-hover:text-gold transition-colors pr-4">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-gold" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-navy/60 leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <HelpCircle className="w-8 h-8 text-gold mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-6xl text-navy mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            Respuestas a las dudas más comunes sobre nuestra boda
          </p>
          <div className="w-24 h-px bg-gold mx-auto mt-8" />
        </motion.div>

        {/* FAQ List */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Contact Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-navy/50 mt-10"
        >
          ¿Tienes otra pregunta? Escríbenos a{" "}
          <a href="mailto:boda@pablomariajose.com" className="text-gold hover:underline">
            boda@pablomariajose.com
          </a>
        </motion.p>
      </div>
    </section>
  );
}
