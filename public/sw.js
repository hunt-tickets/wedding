const CACHE_VERSION = Date.now();
const CACHE_NAME = `mp-boda-v${CACHE_VERSION}`;

// Install event - activate immediately
self.addEventListener('install', (event) => {
  console.log('[SW] Installing:', CACHE_VERSION);
  self.skipWaiting();
});

// Activate event - clear old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating:', CACHE_VERSION);
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - NETWORK FIRST (always fresh, no caching)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log('[SW] Fetch failed:', event.request.url);
        throw error;
      })
  );
});
