"use client";

import { useState } from "react";
import SplashScreen from "./SplashScreen";

interface AppWrapperProps {
  children: React.ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  const [showContent, setShowContent] = useState(false);
  const [splashComplete, setSplashComplete] = useState(false);

  const handleSplashComplete = () => {
    setSplashComplete(true);
    // Small delay to ensure smooth transition
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      <SplashScreen onComplete={handleSplashComplete} minimumDuration={2500} />
      <div
        style={{
          opacity: showContent ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          visibility: splashComplete ? "visible" : "hidden",
        }}
      >
        {children}
      </div>
    </>
  );
}
