const CACHE_VERSION = Date.now(); // Cambia con cada deploy
const CACHE_NAME = `mp-boda-v${CACHE_VERSION}`;

// Install event - skip waiting immediately to activate new version
self.addEventListener('install', (event) => {
  console.log('[SW] Installing new version:', CACHE_VERSION);
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});

// Activate event - delete ALL old caches and take control
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating new version:', CACHE_VERSION);
  event.waitUntil(
    Promise.all([
      // Delete ALL caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            console.log('[SW] Deleting cache:', cacheName);
            return caches.delete(cacheName);
          })
        );
      }),
      // Take control of all clients immediately
      self.clients.claim()
    ]).then(() => {
      // Reload all clients to get fresh content
      return self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({ type: 'CACHE_CLEARED', version: CACHE_VERSION });
        });
      });
    })
  );
});

// Fetch event - NETWORK FIRST strategy (always fresh content)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    // Always try network first
    fetch(event.request)
      .then((response) => {
        // Don't cache anything - always serve fresh
        return response;
      })
      .catch((error) => {
        console.log('[SW] Network request failed:', error);
        // Only for navigation, try to serve from cache as fallback
        if (event.request.mode === 'navigate') {
          return caches.match('/').catch(() => {
            return new Response('Offline - Please check your connection', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
        }
        throw error;
      })
  );
});

// Listen for messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
