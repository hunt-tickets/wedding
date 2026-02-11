"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      // Clear all caches on page load (one time only)
      if ('caches' in window) {
        caches.keys().then((names) => {
          names.forEach((name) => {
            console.log('[Cache] Deleting:', name);
            caches.delete(name);
          });
        });
      }

      // Register service worker with no cache
      navigator.serviceWorker
        .register("/sw.js", { updateViaCache: 'none' })
        .then((registration) => {
          console.log("[SW] Registered successfully:", registration.scope);
        })
        .catch((error) => {
          console.log("[SW] Registration failed:", error);
        });
    }

    // Add timestamp to session to bypass cache
    sessionStorage.setItem('cache-buster', String(Date.now()));
  }, []);

  return null;
}
