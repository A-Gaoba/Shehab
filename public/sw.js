// Service Worker for Russia Travel Website
const CACHE_NAME = "russia-travel-v1";
const STATIC_CACHE_URLS = [
  "/",
  "/src/main.tsx",
  "/src/index.css",
  "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap",
];

const IMAGE_CACHE_URLS = [
  "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?q=60&w=800&auto=format&fit=crop&fm=webp&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

// Install event - cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll([...STATIC_CACHE_URLS, ...IMAGE_CACHE_URLS]);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener("fetch", (event) => {
  // Skip non-GET requests and unsupported schemes
  if (
    event.request.method !== "GET" ||
    event.request.url.startsWith("chrome-extension://") ||
    event.request.url.startsWith("moz-extension://") ||
    event.request.url.startsWith("ms-browser-extension://")
  ) {
    return;
  }

  // Handle image requests with cache-first strategy
  if (event.request.destination === "image") {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).then((response) => {
          // Cache successful responses
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        });
      })
    );
    return;
  }

  // Handle other requests with network-first strategy
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache successful responses
        if (response.ok && event.request.url.startsWith(self.location.origin)) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch((error) => {
        console.log("SW: Network request failed, trying cache:", error);
        // Fallback to cache if network fails
        return caches.match(event.request);
      })
  );
});
