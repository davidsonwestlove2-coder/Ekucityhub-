const CACHE="ecityhub-v1";
const ASSETS=["./","./index.html","./styles.css","./app.js","./manifest.webmanifest","./assets/logo.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(x=>x||fetch(e.request))));
