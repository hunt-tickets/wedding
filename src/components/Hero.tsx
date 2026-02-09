"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Countdown from "./Countdown";

const heroImages = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const imageDuration = 8000; // 8 seconds per image

  // Rotate images every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      setProgress(0);
    }, imageDuration);

    return () => clearInterval(interval);
  }, []);

  // Update progress indicator
  useEffect(() => {
    setProgress(0);
    const startTime = Date.now();

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / imageDuration) * 100;

      if (newProgress >= 100) {
        setProgress(100);
        clearInterval(progressInterval);
      } else {
        setProgress(newProgress);
      }
    }, 50);

    return () => clearInterval(progressInterval);
  }, [currentImageIndex]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms - background moves slower than scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Decorative elements parallax at different speeds
  const circle1Y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const circle2Y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax effect and image rotation */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0 bg-cover bg-center"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 1.8 }}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(30, 58, 95, 0.2), rgba(30, 58, 95, 0.3)), url('${heroImages[currentImageIndex]}')`,
              y: backgroundY,
              scale: backgroundScale,
            }}
          />
        </AnimatePresence>
      </div>

      {/* Decorative elements with parallax - hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          style={{ y: circle1Y }}
          className="absolute top-20 left-10 w-64 h-64 border border-white/30 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.5 }}
          style={{ y: circle2Y }}
          className="absolute bottom-20 right-10 w-96 h-96 border border-white/20 rounded-full"
        />
      </div>

      {/* Content with parallax */}
      <motion.div
        className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto pt-16 md:pt-0"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-lg md:text-xl tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6 font-light"
        >
          Estás invitado a la boda de
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light mb-2 sm:mb-4 leading-tight"
        >
          María José
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-gold text-3xl sm:text-4xl md:text-5xl font-serif my-2 sm:my-4"
        >
          &
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light mb-6 sm:mb-8 leading-tight"
        >
          Pablo José
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-24 h-px bg-gold mx-auto mb-8"
        />

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <Countdown targetDate="2026-08-01T17:00:00" />
        </motion.div>

        {/* Date and Location - below countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-8 sm:mt-12"
        >
          <p className="text-lg sm:text-xl md:text-2xl tracking-wide font-light mb-1 sm:mb-2">
            01 de Agosto de 2026
          </p>
          <p className="text-base sm:text-lg md:text-xl tracking-wide font-light text-white/80">
            Santa Marta, Colombia
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - outside parallax content, fixed at bottom of section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#historia"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/70 hover:text-white transition-colors"
        >
          <ChevronDown size={32} />
        </motion.a>
      </motion.div>

      {/* Progress indicator - bottom right corner */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="relative w-12 h-12">
          {/* Background circle */}
          <svg className="w-12 h-12 transform -rotate-90">
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="2"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="rgba(212, 175, 55, 0.9)"
              strokeWidth="2"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 20}`}
              strokeDashoffset={`${2 * Math.PI * 20 * (1 - progress / 100)}`}
              className="transition-all duration-50 ease-linear"
            />
          </svg>
          {/* Image counter */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/80 text-xs font-light">
              {currentImageIndex + 1}/{heroImages.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
