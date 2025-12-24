"use client";

import { Heart, Instagram, Mail } from "lucide-react";

export default function BackCoverPage() {
  return (
    <div
      className="h-full flex flex-col items-center justify-center p-6 relative"
      style={{
        background: "linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 50%, #1e3a5f 100%)",
      }}
    >
      {/* Frame */}
      <div className="absolute inset-4 border border-gold/30 rounded" />

      <div className="relative z-10 text-center text-white">
        <p className="text-gold text-xs mb-4">#MariaJoseYPablo2026</p>

        <h2 className="font-serif text-2xl mb-2">¡Gracias!</h2>
        <p className="text-white/60 text-xs mb-6">
          Por ser parte de nuestra historia
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://instagram.com"
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold/50 transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="mailto:boda@ejemplo.com"
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold/50 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <div className="w-12 h-px bg-gold/50 mx-auto mb-6" />

        <p className="text-white/40 text-[10px]">
          01 de Agosto de 2026<br />
          Santa Marta, Colombia
        </p>

        <div className="flex items-center justify-center gap-1 text-gold/60 mt-4">
          <Heart className="w-3 h-3 fill-current" />
          <span className="text-[10px]">M & P</span>
          <Heart className="w-3 h-3 fill-current" />
        </div>
      </div>
    </div>
  );
}
