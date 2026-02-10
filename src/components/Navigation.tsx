"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Inicio", href: "#hero" },
  { name: "Nuestra Historia", href: "#historia" },
  { name: "Ceremonia", href: "#cronograma" },
  { name: "Ubicación", href: "#ubicacion" },
  { name: "Contactos", href: "#contactos" },
  { name: "Regalos", href: "#regalos" },
  { name: "RSVP", href: "#rsvp" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ top: "var(--strip-offset, 0px)", transition: "top 0.3s ease-out" }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#hero"
            className={`font-serif text-2xl font-light tracking-wider transition-colors ${
              isScrolled ? "text-navy" : "text-white"
            }`}
          >
            MJ & PJ
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-light tracking-wide transition-colors hover:text-gold ${
                  isScrolled ? "text-navy" : "text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-navy" : "text-white"
            }`}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6">
                <span className="font-serif text-2xl text-white">MJ & PJ</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white p-2"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center gap-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="font-serif text-3xl text-white hover:text-gold transition-colors"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
