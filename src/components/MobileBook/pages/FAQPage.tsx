"use client";

import { HelpCircle } from "lucide-react";

const faqs = [
  { q: "¿Puedo llevar niños?", a: "Ceremonia solo adultos" },
  { q: "¿Hay estacionamiento?", a: "Sí, gratuito en el venue" },
  { q: "¿Puedo tomar fotos?", a: "¡Sí! Compártelas con #MariaJoseYPablo2026" },
  { q: "¿Qué hora termina?", a: "La fiesta termina a las 3 AM" },
];

export default function FAQPage() {
  return (
    <div className="h-full flex flex-col p-5">
      <div className="text-center mb-4">
        <HelpCircle className="w-5 h-5 text-gold mx-auto mb-2" />
        <h2 className="font-serif text-lg text-navy">Preguntas</h2>
        <div className="w-10 h-px bg-gold mx-auto mt-2" />
      </div>

      <div className="flex-1 space-y-3">
        {faqs.map((f, i) => (
          <div key={i} className="bg-navy/5 rounded-lg p-3">
            <h3 className="font-serif text-sm text-navy mb-1">{f.q}</h3>
            <p className="text-navy/60 text-xs">{f.a}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-navy/40 text-[10px] mt-4 pt-3 border-t border-gold/20">
        ¿Más preguntas? Contáctanos
      </p>
    </div>
  );
}
