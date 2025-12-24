"use client";

import { Gift, Home, Plane, CreditCard } from "lucide-react";

const options = [
  { icon: Home, title: "Nuestro Hogar", desc: "Lista de regalos" },
  { icon: Plane, title: "Luna de Miel", desc: "Contribuye al viaje" },
  { icon: CreditCard, title: "Transferencia", desc: "Datos bancarios" },
];

export default function GiftRegistryPage() {
  return (
    <div className="h-full flex flex-col p-5">
      <div className="text-center mb-4">
        <Gift className="w-5 h-5 text-gold mx-auto mb-2" />
        <h2 className="font-serif text-lg text-navy">Mesa de Regalos</h2>
        <div className="w-10 h-px bg-gold mx-auto mt-2" />
      </div>

      <p className="text-navy/60 text-xs text-center mb-4">
        Tu presencia es nuestro mejor regalo
      </p>

      <div className="flex-1 space-y-3">
        {options.map((o) => {
          const Icon = o.icon;
          return (
            <div key={o.title} className="flex items-center gap-3 bg-navy/5 rounded-lg p-3">
              <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-sm text-navy">{o.title}</h3>
                <p className="text-navy/60 text-xs">{o.desc}</p>
              </div>
              <span className="text-gold text-sm">→</span>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-gold/20">
        <p className="text-navy/50 text-[10px] text-center">
          <strong>Bancolombia</strong><br />
          Ahorros: 123-456789-00<br />
          María José & Pablo José
        </p>
      </div>
    </div>
  );
}
