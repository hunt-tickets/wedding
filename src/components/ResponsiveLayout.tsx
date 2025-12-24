"use client";

import { useState, useEffect, ReactNode } from "react";
import dynamic from "next/dynamic";

// Dynamically import MobileBook to avoid SSR issues with react-pageflip
const MobileBook = dynamic(
  () => import("./MobileBook/MobileBook"),
  { ssr: false }
);

interface ResponsiveLayoutProps {
  desktopContent: ReactNode;
}

export default function ResponsiveLayout({ desktopContent }: ResponsiveLayoutProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Loading state while checking screen size
  if (isMobile === null) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm text-white/60">Cargando...</p>
        </div>
      </div>
    );
  }

  // Mobile: Show book experience
  if (isMobile) {
    return <MobileBook />;
  }

  // Desktop: Show original scrolling page
  return <>{desktopContent}</>;
}
