"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onComplete?: () => void;
  minimumDuration?: number;
}

export default function SplashScreen({
  onComplete,
  minimumDuration = 2500,
}: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimatingOut(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 800); // Exit animation duration
    }, minimumDuration);

    return () => clearTimeout(timer);
  }, [minimumDuration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212,175,55,0.3) 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Decorative rings */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute w-[500px] h-[500px] border border-gold/30 rounded-full"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="absolute w-[400px] h-[400px] border border-gold/20 rounded-full"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="absolute w-[300px] h-[300px] border border-gold/10 rounded-full"
          />

          {/* Main content */}
          <div className="relative z-10 text-center text-white">
            {/* Monogram */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              {/* Decorative line top */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"
              />

              {/* M & P */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={
                  isAnimatingOut
                    ? { y: -20, opacity: 0 }
                    : { y: 0, opacity: 1 }
                }
                transition={{ duration: 0.6, delay: isAnimatingOut ? 0 : 0.5 }}
                className="font-serif text-7xl sm:text-8xl md:text-9xl tracking-wider"
              >
                <span className="text-gold">M</span>
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="text-white/60 text-5xl sm:text-6xl md:text-7xl mx-4"
                >
                  &
                </motion.span>
                <span className="text-gold">P</span>
              </motion.div>

              {/* Decorative line bottom */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-8"
              />
            </motion.div>

            {/* Names */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={
                isAnimatingOut ? { y: -10, opacity: 0 } : { y: 0, opacity: 1 }
              }
              transition={{ duration: 0.6, delay: isAnimatingOut ? 0.1 : 1 }}
              className="mt-8 text-lg sm:text-xl tracking-[0.3em] uppercase font-light text-white/80"
            >
              María José & Pablo José
            </motion.p>

            {/* Date */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={
                isAnimatingOut ? { y: -10, opacity: 0 } : { y: 0, opacity: 1 }
              }
              transition={{ duration: 0.6, delay: isAnimatingOut ? 0.15 : 1.2 }}
              className="mt-4 text-sm sm:text-base tracking-widest text-gold/80"
            >
              01 · 08 · 2026
            </motion.p>

            {/* Loading indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isAnimatingOut ? 0 : 1 }}
              transition={{ duration: 0.3, delay: isAnimatingOut ? 0 : 1.5 }}
              className="mt-12 flex justify-center gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-2 h-2 bg-gold rounded-full"
                />
              ))}
            </motion.div>
          </div>

          {/* Corner decorations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-gold/30"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-gold/30"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-gold/30"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-gold/30"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
