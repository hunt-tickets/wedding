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
      "Recomendamos no llevar carro, las opciones de estacionamiento son limitadas y no se encuentran cerca de los lugares.",
  },
  {
    question: "¿Qué tipo de comida se servirá?",
    answer:
      "Tendremos un buffet así que se pueden servir lo que quieran, hay opciones para todos.",
  },
  {
    question: "¿Habrá transporte desde los hoteles?",
    answer:
      "Hay un servicio muy bueno de taxi Irotama +57 304 207 6640. Sí contamos con transporte de la catedral al club.",
  },
  {
    question: "¿Puedo tomar fotos durante la ceremonia?",
    answer:
      "Por favor, mantén tu teléfono guardado durante la ceremonia para que todos puedan disfrutar del momento. Tendremos fotógrafos profesionales. ¡Después puedes tomar todas las fotos que quieras!",
  },
  {
    question: "¿Cuál es la fecha límite para confirmar?",
    answer:
      "Por favor, confirma tu asistencia antes del 1 de julio. Nuestra wedding planner María Paola va a estar llamándote para que confirmes.",
  },
  {
    question: "¿Qué pasa si llueve?",
    answer:
      "Tanto la ceremonia como la fiesta ocurrirán bajo techo así que no hay problema. ¡La celebración continuará sin importar el clima!",
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
        className="w-full py-4 sm:py-6 flex items-center justify-between text-left group"
      >
        <span className="font-serif text-base sm:text-xl text-navy group-hover:text-gold transition-colors pr-4">
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
            <p className="pb-4 sm:pb-6 text-navy/60 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
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
    <section id="faq" className="py-16 sm:py-24 md:py-32 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-gold mx-auto mb-4 sm:mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-navy mb-4 sm:mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-navy/60 text-base sm:text-lg max-w-2xl mx-auto">
            Respuestas a las dudas más comunes sobre nuestra boda
          </p>
          <div className="w-16 sm:w-24 h-px bg-gold mx-auto mt-6 sm:mt-8" />
        </motion.div>

        {/* FAQ List */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-10">
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
