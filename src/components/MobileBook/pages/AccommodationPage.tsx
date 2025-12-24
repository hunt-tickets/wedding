"use client";

import { Hotel, Star, ExternalLink } from "lucide-react";

const hotels = [
  { name: "Hotel Boutique Don Pepe", stars: 5, price: "Desde $250/noche" },
  { name: "Marriott Santa Marta", stars: 4, price: "Desde $180/noche" },
  { name: "Hotel Tamacá Beach", stars: 4, price: "Desde $120/noche" },
];

export default function AccommodationPage() {
  return (
    <div className="h-full flex flex-col p-5">
      <div className="text-center mb-4">
        <Hotel className="w-5 h-5 text-gold mx-auto mb-2" />
        <h2 className="font-serif text-lg text-navy">Hospedaje</h2>
        <div className="w-10 h-px bg-gold mx-auto mt-2" />
      </div>

      <p className="text-navy/60 text-xs text-center mb-4">
        Hoteles recomendados cerca del venue
      </p>

      <div className="flex-1 space-y-3">
        {hotels.map((h) => (
          <div key={h.name} className="bg-navy/5 rounded-lg p-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-serif text-sm text-navy">{h.name}</h3>
                <div className="flex gap-0.5 my-1">
                  {Array.from({ length: h.stars }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-navy/60 text-xs">{h.price}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gold shrink-0" />
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-navy/40 text-[10px] mt-4 pt-3 border-t border-gold/20">
        Reserva con anticipación
      </p>
    </div>
  );
}
