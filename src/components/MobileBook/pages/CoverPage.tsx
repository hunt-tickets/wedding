"use client";

import { motion } from "framer-motion";

export default function CoverPage() {
  return (
    <div
      className="h-full flex flex-col items-center justify-center p-6 relative"
      style={{
        background: "linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 50%, #1e3a5f 100%)",
      }}
    >
      {/* Frame */}
      <div className="absolute inset-4 border border-gold/30 rounded" />
      <div className="absolute inset-6 border border-gold/20 rounded" />

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <p className="text-gold text-[10px] uppercase tracking-[0.2em] mb-4">
          Nuestra Boda
        </p>

        <h1 className="font-serif text-3xl font-light mb-1">María José</h1>
        <p className="text-gold text-2xl font-serif my-2">&</p>
        <h1 className="font-serif text-3xl font-light">Pablo José</h1>

        <div className="w-16 h-px bg-gold/50 mx-auto my-6" />

        <p className="text-base font-light mb-1">01 de Agosto de 2026</p>
        <p className="text-xs text-white/60">Santa Marta, Colombia</p>

        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gold/70 text-[10px] mt-8 uppercase tracking-wider"
        >
          Desliza →
        </motion.p>
      </div>
    </div>
  );
}
