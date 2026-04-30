const CACHE_STATIC = "sincrocare-static-v2";
const CACHE_PAGES = "sincrocare-pages-v2";

// Allow client to trigger SW update
self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
});

const STATIC_ASSETS = [
  "/manifest.json",
  "/favicon.svg",
  "/foto-perfil-mae.png",
  "/pedro.jpeg",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/apple-touch-icon.png",
];

// Pre-cache static assets on install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_STATIC).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Clean old caches on activate
self.addEventListener("activate", (event) => {
  const CURRENT = [CACHE_STATIC, CACHE_PAGES];
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => !CURRENT.includes(k)).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Only handle same-origin requests
  if (url.origin !== self.location.origin) return;

  // Skip Next.js internals and HMR
  if (url.pathname.startsWith("/_next/webpack-hmr")) return;
  if (url.pathname.startsWith("/_next/static/")) {
    // Cache-first for immutable Next.js static chunks
    event.respondWith(
      caches.match(event.request).then(
        (cached) => cached || fetchAndCache(event.request, CACHE_STATIC)
      )
    );
    return;
  }

  // Network-first for HTML pages (always fresh, fallback to cache offline)
  const isNavigation =
    event.request.mode === "navigate" ||
    event.request.headers.get("accept")?.includes("text/html");

  if (isNavigation) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_PAGES).then((cache) => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request).then((c) => c || caches.match("/")))
    );
    return;
  }

  // Stale-while-revalidate for everything else (images, fonts, api)
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networkFetch = fetchAndCache(event.request, CACHE_STATIC);
      return cached || networkFetch;
    })
  );
});

function fetchAndCache(request, cacheName) {
  return fetch(request).then((response) => {
    if (response.ok) {
      const clone = response.clone();
      caches.open(cacheName).then((cache) => cache.put(request, clone));
    }
    return response;
  });
}
