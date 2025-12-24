"use client";

import { Clock, Church, UtensilsCrossed, Music } from "lucide-react";

const events = [
  { time: "5:00 PM", title: "Ceremonia", desc: "Capilla del venue", icon: Church },
  { time: "6:30 PM", title: "Cóctel", desc: "Terraza principal", icon: UtensilsCrossed },
  { time: "8:00 PM", title: "Recepción", desc: "Salón de eventos", icon: Music },
];

export default function SchedulePage() {
  return (
    <div className="h-full flex flex-col p-5">
      <div className="text-center mb-4">
        <Clock className="w-5 h-5 text-gold mx-auto mb-2" />
        <h2 className="font-serif text-lg text-navy">Itinerario</h2>
        <div className="w-10 h-px bg-gold mx-auto mt-2" />
      </div>

      <div className="flex-1 space-y-4">
        {events.map((e) => {
          const Icon = e.icon;
          return (
            <div key={e.title} className="flex items-start gap-3 bg-navy/5 rounded-lg p-3">
              <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <span className="text-gold text-xs font-medium">{e.time}</span>
                <h3 className="font-serif text-sm text-navy">{e.title}</h3>
                <p className="text-navy/60 text-xs">{e.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-center text-navy/40 text-[10px] mt-4">
        Te pedimos puntualidad
      </p>
    </div>
  );
}
