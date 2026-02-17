self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('v2').then((c) => c.addAll(['./', './index.html', './manifest.json']))); // Cache version updated
});
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
