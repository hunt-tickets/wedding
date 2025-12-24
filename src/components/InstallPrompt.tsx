"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, Share, Plus } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
      return;
    }

    // Check if dismissed before
    const dismissed = localStorage.getItem("pwa-prompt-dismissed");
    if (dismissed) return;

    // Detect iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as unknown as { MSStream?: unknown }).MSStream;
    setIsIOS(isIOSDevice);

    if (isIOSDevice) {
      // Show prompt after a short delay on iOS
      setTimeout(() => setShowPrompt(true), 2000);
    }

    // Listen for beforeinstallprompt (Chrome/Android/Edge)
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setTimeout(() => setShowPrompt(true), 2000);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setShowPrompt(false);
      }
      setDeferredPrompt(null);
    } else if (isIOS) {
      setShowIOSInstructions(true);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setShowIOSInstructions(false);
    localStorage.setItem("pwa-prompt-dismissed", "true");
  };

  if (isInstalled || !showPrompt) return null;

  return (
    <>
      {/* Install Banner */}
      <AnimatePresence>
        {showPrompt && !showIOSInstructions && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-4 left-4 right-4 z-[200] md:left-auto md:right-4 md:w-80"
          >
            <div className="bg-navy text-white rounded-2xl shadow-2xl p-4 border border-gold/20">
              <button
                onClick={handleDismiss}
                className="absolute top-2 right-2 p-1 text-white/60 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center shrink-0">
                  <Download className="w-6 h-6 text-gold" />
                </div>
                <div className="flex-1 pr-4">
                  <h3 className="font-serif text-lg mb-1">Instalar Invitación</h3>
                  <p className="text-white/70 text-xs mb-3">
                    Agrega nuestra boda a tu pantalla de inicio para acceso rápido
                  </p>
                  <button
                    onClick={handleInstall}
                    className="w-full py-2 bg-gold text-navy font-medium rounded-lg text-sm hover:bg-gold-light transition-colors"
                  >
                    {isIOS ? "Cómo instalar" : "Instalar ahora"}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* iOS Instructions Modal */}
      <AnimatePresence>
        {showIOSInstructions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/70 flex items-end justify-center p-4"
            onClick={handleDismiss}
          >
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-sm overflow-hidden"
            >
              <div className="bg-navy p-4 text-white text-center">
                <h3 className="font-serif text-xl">Instalar en iPhone</h3>
                <p className="text-white/70 text-sm mt-1">Sigue estos pasos</p>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center shrink-0">
                    <Share className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-navy">1. Toca "Compartir"</p>
                    <p className="text-navy/60 text-sm">El ícono en la barra de Safari</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center shrink-0">
                    <Plus className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-navy">2. "Agregar a inicio"</p>
                    <p className="text-navy/60 text-sm">Desplaza y selecciona esta opción</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-gold font-serif font-bold">M&P</span>
                  </div>
                  <div>
                    <p className="font-medium text-navy">3. ¡Listo!</p>
                    <p className="text-navy/60 text-sm">La invitación estará en tu inicio</p>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t">
                <button
                  onClick={handleDismiss}
                  className="w-full py-3 bg-navy text-white rounded-xl font-medium"
                >
                  Entendido
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
