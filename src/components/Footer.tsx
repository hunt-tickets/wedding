"use client";

import { motion } from "framer-motion";
import { Heart, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cream py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Hashtag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <p className="text-navy/50 mb-2">Comparte tus fotos con nuestro hashtag</p>
          <h3 className="font-serif text-3xl md:text-4xl text-navy">
            #PabloYMariaJose2026
          </h3>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-6 mb-10"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white hover:bg-gold transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="mailto:boda@pablomariajose.com"
            className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white hover:bg-gold transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-navy mb-2">
            Pablo José & María José
          </h2>
          <p className="text-navy/60">01 de Agosto de 2026 • Santa Marta, Colombia</p>
        </motion.div>

        {/* Divider */}
        <div className="w-24 h-px bg-gold mx-auto mb-8" />

        {/* Credits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-navy/40 text-sm"
        >
          <p className="flex items-center justify-center gap-2">
            Hecho con <Heart className="w-4 h-4 text-gold fill-gold" /> para nuestro
            día especial
          </p>
          <p className="mt-2">© 2026 Pablo José & María José. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}
