"use client";

import { Heart } from "lucide-react";

const moments = [
  { year: "2018", title: "Nos Conocimos", desc: "Un encuentro que cambió todo." },
  { year: "2020", title: "Primera Cita", desc: "Horas de conversación infinita." },
  { year: "2023", title: "La Propuesta", desc: "Un sí eterno." },
  { year: "2026", title: "Nuestra Boda", desc: "El inicio de nuestra historia." },
];

export default function StoryPage() {
  return (
    <div className="h-full flex flex-col p-5">
      <div className="text-center mb-4">
        <Heart className="w-5 h-5 text-gold mx-auto mb-2" />
        <h2 className="font-serif text-lg text-navy">Nuestra Historia</h2>
        <div className="w-10 h-px bg-gold mx-auto mt-2" />
      </div>

      <div className="flex-1 relative pl-6">
        <div className="absolute left-2 top-0 bottom-0 w-px bg-gold/30" />

        <div className="space-y-4">
          {moments.map((m) => (
            <div key={m.year} className="relative">
              <div className="absolute -left-[18px] top-1 w-2 h-2 rounded-full bg-gold" />
              <span className="text-gold text-xs font-medium">{m.year}</span>
              <h3 className="font-serif text-sm text-navy">{m.title}</h3>
              <p className="text-navy/60 text-xs">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-navy/40 text-[10px] italic mt-4 pt-3 border-t border-gold/20">
        "El amor no se mira, se siente"
      </p>
    </div>
  );
}
