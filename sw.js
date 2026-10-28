// Offline support: the game page comes from the network when online (so updates arrive) and from the cache otherwise.
const CACHE = "turno-v10";
const CORE = ["./", "index.html", "en/", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  const fonts = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (url.origin !== location.origin && !fonts) return;
  if (req.mode === "navigate") {
    // each page (Portuguese at the root, English under en/) is cached under its own address
    const page = url.pathname.replace(/index\.html$/, "");
    e.respondWith(fetch(req).then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(page, copy)); return res; })
      .catch(() => caches.match(page).then((hit) => hit || caches.match("./"))));
    return;
  }
  // icons, manifest and fonts: cache first, filled on first use
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => {
    if (res.ok || res.type === "opaque") { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
    return res;
  })));
});
