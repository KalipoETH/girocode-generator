// Kill-Switch: meldet die PWA ab und räumt alle Caches der v1-Version.
//
// Diese Datei muss dauerhaft unter /sw.js erreichbar bleiben. Ein 404 beim
// Update-Check schlägt mit NetworkError fehl und lässt die alte Registrierung
// samt Cache-First-Verhalten am Leben, statt sie zu entfernen.
//
// Bestandsnutzer erhalten diese Version über den Update-Check, den jede
// Navigation in den Scope auslöst — unabhängig davon, dass register() im
// Client-Code entfernt wurde.

const KILL_SWITCH = 'girocode-v2-killswitch';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));

      await self.registration.unregister();
    })()
  );
});

// Kein fetch-Handler: der Worker bleibt inert, bis die Registrierung greift.
