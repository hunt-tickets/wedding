"use client";

import { Shirt } from "lucide-react";

export default function DressCodePage() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center">
      <Shirt className="w-6 h-6 text-gold mb-3" />
      <h2 className="font-serif text-lg text-navy mb-1">Código de Vestimenta</h2>
      <div className="w-10 h-px bg-gold mx-auto mt-2 mb-6" />

      <div className="bg-navy/5 rounded-xl p-6 mb-6">
        <h3 className="font-serif text-2xl text-navy mb-2">Formal</h3>
        <p className="text-navy/60 text-xs">
          Elegante y sofisticado
        </p>
      </div>

      <div className="space-y-3 text-xs text-navy/60">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-navy border-2 border-cream" />
          <span>Hombres: Traje oscuro</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-gold border-2 border-cream" />
          <span>Mujeres: Vestido largo o cóctel</span>
        </div>
      </div>

      <p className="text-navy/40 text-[10px] mt-8">
        Evita el color blanco, reservado para la novia
      </p>
    </div>
  );
}
