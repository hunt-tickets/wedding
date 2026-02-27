"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onComplete?: () => void;
  minimumDuration?: number;
}

export default function SplashScreen({
  onComplete,
  minimumDuration = 2000,
}: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 600);
    }, minimumDuration);

    return () => clearTimeout(timer);
  }, [minimumDuration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-navy via-navy to-primary"
        >
          {/* Subtle animated gradient overlay */}
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(212,175,55,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(212,175,55,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(212,175,55,0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          />

          {/* Main content */}
          <div className="relative z-10 text-center text-white">
            {/* Elegant divider top */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-1.5 h-1.5 bg-gold rotate-45"
              />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
            </motion.div>

            {/* Names - elegante y simple */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl mb-3 text-white">
                María José
              </h1>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-gold text-3xl sm:text-4xl font-serif my-3"
              >
                &
              </motion.div>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl mt-3 text-white">
                Pablo José
              </h1>
            </motion.div>

            {/* Elegant divider bottom */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex items-center justify-center gap-3 mt-8"
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-1.5 h-1.5 bg-gold rotate-45"
              />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
            </motion.div>

            {/* Date */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-6 text-sm sm:text-base tracking-[0.3em] text-gold/90 font-light"
            >
              01 DE AGOSTO DE 2026
            </motion.p>

            {/* Simple elegant loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="mt-10 w-32 mx-auto"
            >
              <div className="h-px bg-white/10 overflow-hidden rounded-full">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-full w-1/3 bg-gradient-to-r from-transparent via-gold to-transparent"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
