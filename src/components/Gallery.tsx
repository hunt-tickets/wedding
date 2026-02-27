"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

// Generate array of 43 photos from Supabase Storage
const photos = Array.from({ length: 43 }, (_, i) => ({
  src: `https://eeyjhkhrdoouapuilwep.supabase.co/storage/v1/object/public/wedding/gallery/photo${i + 1}.jpg`,
  alt: "María José y Pablo José",
}));

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Number of photos to show initially
  const initialPhotoCount = 12;
  const displayedPhotos = showAll ? photos : photos.slice(0, initialPhotoCount);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () =>
    setSelectedImage((prev) => (prev !== null ? (prev + 1) % photos.length : null));
  const prevImage = () =>
    setSelectedImage((prev) =>
      prev !== null ? (prev - 1 + photos.length) % photos.length : null
    );

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  return (
    <section id="galeria" className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <SectionHeader
          icon={Camera}
          title="Nuestra Galería"
          subtitle="Algunos de nuestros momentos más especiales juntos"
          bgColor="white"
        />

        {/* Photo Grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
          {displayedPhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => openLightbox(index)}
              className="relative overflow-hidden rounded-xl cursor-pointer group aspect-square"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2Y1ZjVmNSIvPjwvc3ZnPg=="
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300 flex items-center justify-center">
                <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ver más fotos button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-8 sm:mt-12"
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-navy text-white rounded-full font-light text-sm sm:text-base hover:bg-navy/90 transition-colors"
            >
              <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
              Ver más fotos ({photos.length - initialPhotoCount} más)
            </button>
          </motion.div>
        )}
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
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
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
