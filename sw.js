self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("mywaifu-cache").then((cache) => {
      return cache.addAll([
        "/MyWaifu/",
        "/MyWaifu/index.html",
        "/MyWaifu/styles.css",
        "/MyWaifu/script.js",
        "/MyWaifu/icons/icon-192x192.png",
        "/MyWaifu/icons/icon-512x512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
