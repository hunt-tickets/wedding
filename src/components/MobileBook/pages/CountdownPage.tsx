"use client";

import { useState, useEffect } from "react";
import { Calendar, Heart } from "lucide-react";

export default function CountdownPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-08-01T17:00:00");
    const calculate = () => {
      const diff = targetDate.getTime() - new Date().getTime();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };
    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center">
      <Calendar className="w-6 h-6 text-gold mb-3" />
      <h2 className="font-serif text-xl text-navy mb-1">Cuenta Regresiva</h2>
      <p className="text-navy/50 text-xs mb-6">Faltan...</p>

      <div className="grid grid-cols-4 gap-2 mb-6">
        {[
          { v: timeLeft.days, l: "Días" },
          { v: timeLeft.hours, l: "Hrs" },
          { v: timeLeft.minutes, l: "Min" },
          { v: timeLeft.seconds, l: "Seg" },
        ].map((u) => (
          <div key={u.l} className="bg-navy/5 rounded-lg p-2">
            <span className="block font-serif text-xl text-navy">{String(u.v).padStart(2, "0")}</span>
            <span className="text-[10px] text-navy/50 uppercase">{u.l}</span>
          </div>
        ))}
      </div>

      <div className="w-12 h-px bg-gold/40 mb-6" />

      <p className="font-serif text-sm text-navy">Sábado, 01 de Agosto</p>
      <p className="text-xs text-navy/60 mt-1">5:00 PM • Santa Marta</p>

      <div className="mt-6 flex items-center gap-1 text-gold">
        <Heart className="w-3 h-3 fill-gold" />
        <span className="text-xs">¡Te esperamos!</span>
        <Heart className="w-3 h-3 fill-gold" />
      </div>
    </div>
  );
}
