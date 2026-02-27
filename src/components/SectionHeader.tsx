"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  bgColor?: "cream" | "white" | "navy";
}

export default function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  bgColor = "cream",
}: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const textColor = bgColor === "navy" ? "text-white" : "text-navy";
  const subtitleColor =
    bgColor === "navy" ? "text-white/70" : "text-navy/60";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="text-center mb-10 sm:mb-20"
    >
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-gold mx-auto mb-4 sm:mb-6" />
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-6xl ${textColor} mb-4 sm:mb-6`}
      >
        {title}
      </h2>
      <p
        className={`${subtitleColor} text-base sm:text-lg max-w-2xl mx-auto`}
      >
        {subtitle}
      </p>
      <div className="w-16 sm:w-24 h-px bg-gold mx-auto mt-6 sm:mt-8" />
    </motion.div>
  );
}
