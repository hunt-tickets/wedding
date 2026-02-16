"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const photos = [
  {
    src: "/images/gallery-1.jpg",
    alt: "María José y Pablo José",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "María José y Pablo José",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "María José y Pablo José",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "María José y Pablo José",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "María José y Pablo José",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "María José y Pablo José",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () =>
    setSelectedImage((prev) => (prev !== null ? (prev + 1) % photos.length : null));
  const prevImage = () =>
    setSelectedImage((prev) =>
      prev !== null ? (prev - 1 + photos.length) % photos.length : null
    );

  return (
    <section id="galeria" className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-20"
        >
          <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-gold mx-auto mb-4 sm:mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-navy mb-4 sm:mb-6">
            Nuestra Galería
          </h2>
          <p className="text-navy/60 text-base sm:text-lg max-w-2xl mx-auto">
            Algunos de nuestros momentos más especiales juntos
          </p>
          <div className="w-16 sm:w-24 h-px bg-gold mx-auto mt-6 sm:mt-8" />
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => openLightbox(index)}
              className="relative overflow-hidden rounded-xl cursor-pointer group aspect-square"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300 flex items-center justify-center">
                <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white transition-colors z-10"
            >
              <X size={28} className="sm:w-8 sm:h-8" />
            </button>

            {/* Navigation arrows - hidden on mobile (use swipe) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="hidden sm:block absolute left-4 sm:left-6 text-white/70 hover:text-white transition-colors"
            >
              <ChevronLeft size={48} />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={photos[selectedImage].src}
              alt={photos[selectedImage].alt}
              className="max-w-full max-h-[80vh] sm:max-w-[90vw] sm:max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="hidden sm:block absolute right-4 sm:right-6 text-white/70 hover:text-white transition-colors"
            >
              <ChevronRight size={48} />
            </button>

            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
              {selectedImage + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
