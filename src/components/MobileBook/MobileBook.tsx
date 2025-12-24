"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight, Book } from "lucide-react";
import { motion } from "framer-motion";

// Import page content components
import CoverPage from "./pages/CoverPage";
import CountdownPage from "./pages/CountdownPage";
import StoryPage from "./pages/StoryPage";
import SchedulePage from "./pages/SchedulePage";
import LocationPage from "./pages/LocationPage";
import AccommodationPage from "./pages/AccommodationPage";
import DressCodePage from "./pages/DressCodePage";
import GiftRegistryPage from "./pages/GiftRegistryPage";
import GalleryPage from "./pages/GalleryPage";
import FAQPage from "./pages/FAQPage";
import RSVPPage from "./pages/RSVPPage";
import PlaylistPage from "./pages/PlaylistPage";
import BackCoverPage from "./pages/BackCoverPage";

interface FlipBookRef {
  pageFlip: () => {
    flipNext: () => void;
    flipPrev: () => void;
    getCurrentPageIndex: () => number;
    getPageCount: () => number;
    turnToPage: (page: number) => void;
  };
}

// Wrapper for each page with book styling
const BookPage = React.forwardRef<HTMLDivElement, { children: React.ReactNode; iscover?: boolean; pageNumber?: number }>(
  ({ children, iscover, pageNumber }, ref) => (
    <div
      ref={ref}
      className="bg-cream h-full overflow-hidden relative"
      style={{ boxShadow: "inset -1px 0 3px rgba(0,0,0,0.05)" }}
    >
      {!iscover && (
        <>
          <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold/20" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-gold/20" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-gold/20" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold/20" />
        </>
      )}
      <div className="h-full overflow-y-auto">{children}</div>
      {pageNumber && !iscover && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-navy/30 text-xs">
          {pageNumber}
        </div>
      )}
    </div>
  )
);
BookPage.displayName = "BookPage";

export default function MobileBook() {
  const bookRef = useRef<FlipBookRef>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(13);
  const [dimensions, setDimensions] = useState({ width: 350, height: 507 });

  useEffect(() => {
    const updateDimensions = () => {
      const width = Math.min(window.innerWidth - 32, 380);
      const height = Math.min(window.innerHeight - 140, width * 1.45);
      setDimensions({ width, height });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const onFlip = useCallback((e: { data: number }) => {
    setCurrentPage(e.data);
  }, []);

  const onInit = useCallback(() => {
    if (bookRef.current) {
      setTotalPages(bookRef.current.pageFlip().getPageCount());
    }
  }, []);

  const flipNext = () => bookRef.current?.pageFlip().flipNext();
  const flipPrev = () => bookRef.current?.pageFlip().flipPrev();

  return (
    <div className="min-h-screen bg-navy flex flex-col items-center justify-center py-6 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-4"
      >
        <div className="flex items-center justify-center gap-2 text-gold mb-1">
          <Book className="w-4 h-4" />
          <span className="text-xs uppercase tracking-widest">Invitación</span>
        </div>
      </motion.div>

      {/* Book */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative"
      >
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[85%] h-6 bg-black/20 blur-lg rounded-full" />

        <HTMLFlipBook
          ref={bookRef}
          width={dimensions.width}
          height={dimensions.height}
          size="fixed"
          minWidth={280}
          maxWidth={400}
          minHeight={400}
          maxHeight={600}
          maxShadowOpacity={0.4}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={onFlip}
          onInit={onInit}
          className=""
          style={{}}
          startPage={0}
          drawShadow={true}
          flippingTime={600}
          usePortrait={true}
          startZIndex={0}
          autoSize={false}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={20}
          showPageCorners={true}
          disableFlipByClick={false}
        >
          <BookPage iscover><CoverPage /></BookPage>
          <BookPage pageNumber={1}><CountdownPage /></BookPage>
          <BookPage pageNumber={2}><StoryPage /></BookPage>
          <BookPage pageNumber={3}><SchedulePage /></BookPage>
          <BookPage pageNumber={4}><LocationPage /></BookPage>
          <BookPage pageNumber={5}><AccommodationPage /></BookPage>
          <BookPage pageNumber={6}><DressCodePage /></BookPage>
          <BookPage pageNumber={7}><GiftRegistryPage /></BookPage>
          <BookPage pageNumber={8}><GalleryPage /></BookPage>
          <BookPage pageNumber={9}><FAQPage /></BookPage>
          <BookPage pageNumber={10}><RSVPPage /></BookPage>
          <BookPage pageNumber={11}><PlaylistPage /></BookPage>
          <BookPage iscover><BackCoverPage /></BookPage>
        </HTMLFlipBook>
      </motion.div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-6 mt-6"
      >
        <button
          onClick={flipPrev}
          disabled={currentPage === 0}
          className="p-2 rounded-full bg-white/10 disabled:opacity-30 text-white"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-1">
          {Array.from({ length: totalPages }).map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === currentPage ? "bg-gold w-3" : "bg-white/30"
              }`}
            />
          ))}
        </div>

        <button
          onClick={flipNext}
          disabled={currentPage >= totalPages - 1}
          className="p-2 rounded-full bg-white/10 disabled:opacity-30 text-white"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </motion.div>

      <p className="text-white/30 text-xs mt-4">
        Desliza para pasar páginas
      </p>
    </div>
  );
}
