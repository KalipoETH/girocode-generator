const CACHE_NAME = 'girocode-v1';
const PRECACHE_URLS = [
  '/',
  '/scanner',
  '/bulk',
  '/rechnungs-editor',
  '/manifest.json',
  '/offline',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll(PRECACHE_URLS).catch((err) => {
        // Einzelne Fehler beim Precaching ignorieren (z.B. nicht erreichbare Seiten)
        console.warn('[SW] Precache partial failure:', err);
      })
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Nur GET-Requests cachen, API-Calls überspringen
  if (request.method !== 'GET' || request.url.includes('/api/')) {
    return;
  }

  // Externe Ressourcen (z.B. Analytics, Vercel Speed Insights) nicht cachen
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    return;
  }

  // Network-First für HTML-Seiten
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() =>
          caches.match(request).then(
            (cached) => cached || caches.match('/offline')
          )
        )
    );
    return;
  }

  // Cache-First für statische Assets (JS, CSS, Bilder, Fonts)
  event.respondWith(
    caches.match(request).then(
      (cached) =>
        cached ||
        fetch(request).then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
    )
  );
});
