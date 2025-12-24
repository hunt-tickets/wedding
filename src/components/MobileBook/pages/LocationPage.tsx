"use client";

import { MapPin, Navigation } from "lucide-react";

export default function LocationPage() {
  return (
    <div className="h-full flex flex-col p-5">
      <div className="text-center mb-4">
        <MapPin className="w-5 h-5 text-gold mx-auto mb-2" />
        <h2 className="font-serif text-lg text-navy">Ubicación</h2>
        <div className="w-10 h-px bg-gold mx-auto mt-2" />
      </div>

      <div className="flex-1 flex flex-col">
        {/* Map placeholder */}
        <div className="flex-1 bg-navy/10 rounded-lg mb-4 overflow-hidden relative min-h-[120px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-navy/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur rounded-lg p-3 text-center">
              <MapPin className="w-5 h-5 text-gold mx-auto mb-1" />
              <p className="font-serif text-sm text-navy">Hacienda Villa Rosa</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-serif text-base text-navy mb-1">Hacienda Villa Rosa</h3>
          <p className="text-navy/60 text-xs mb-3">
            Km 5 Vía Santa Marta - Ciénaga<br />
            Santa Marta, Colombia
          </p>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-gold hover:text-navy transition-colors"
          >
            <Navigation className="w-3 h-3" />
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
