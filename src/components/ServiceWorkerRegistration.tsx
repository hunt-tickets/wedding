"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      // Clear all caches on page load
      if ('caches' in window) {
        caches.keys().then((names) => {
          names.forEach((name) => {
            console.log('[Cache] Deleting:', name);
            caches.delete(name);
          });
        });
      }

      // Unregister all existing service workers first
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          console.log('[SW] Unregistering old service worker');
          registration.unregister();
        });

        // Register new service worker after unregistering old ones
        setTimeout(() => {
          navigator.serviceWorker
            .register("/sw.js", { updateViaCache: 'none' })
            .then((registration) => {
              console.log("[SW] Registered successfully:", registration.scope);

              // Check for updates every 30 seconds
              setInterval(() => {
                registration.update();
              }, 30000);

              // Listen for new service worker waiting
              registration.addEventListener('updatefound', () => {
                const newWorker = registration.installing;
                if (newWorker) {
                  newWorker.addEventListener('statechange', () => {
                    if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                      console.log('[SW] New version available, reloading...');
                      // Tell the new service worker to take over immediately
                      newWorker.postMessage({ type: 'SKIP_WAITING' });
                      // Reload the page to get the new version
                      window.location.reload();
                    }
                  });
                }
              });
            })
            .catch((error) => {
              console.log("[SW] Registration failed:", error);
            });
        }, 500);
      });

      // Listen for messages from service worker
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'CACHE_CLEARED') {
          console.log('[SW] Cache cleared, version:', event.data.version);
          // Force reload to ensure fresh content
          window.location.reload();
        }
      });

      // Force reload when service worker becomes active
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          refreshing = true;
          console.log('[SW] Controller changed, reloading...');
          window.location.reload();
        }
      });
    }

    // Also clear browser cache using meta tags programmatically
    const clearBrowserCache = () => {
      // Add timestamp to all requests to bypass cache
      const timestamp = Date.now();
      sessionStorage.setItem('cache-buster', String(timestamp));
    };
    clearBrowserCache();
  }, []);

  return null;
}
