const CACHE = "ecityhub-v2";

const ASSETS = [
  "./",
  "./index.html",
  "./style",
  "./App.js",
  "./manifest.webmanifest",
  "./logo.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(
      cached => cached || fetch(e.request)
    )
  );
});
