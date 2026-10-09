/* Personalizamos PWA service worker */
var CACHE_NAME = 'personalizamos-pwa-v1';
var PRECACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/css/style.css?v=20260925d',
  '/assets/js/scripts.js?v=20261008pwa',
  '/assets/ico/pwa-icon-192.png',
  '/assets/ico/pwa-icon-512.png',
  '/assets/ico/favicon-32.png',
  '/assets/img/logo.png',
  '/assets/img/logo_wp.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(PRECACHE.map(function (url) {
        return new Request(url, { cache: 'reload' });
      })).catch(function () {
        // ignore individual precache failures
        return Promise.all(PRECACHE.map(function (url) {
          return cache.add(url).catch(function () {});
        }));
      });
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (key) {
        if (key !== CACHE_NAME) return caches.delete(key);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET') return;

  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Network-first for HTML navigations
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').indexOf('text/html') !== -1) {
    event.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE_NAME).then(function (cache) { cache.put(req, copy); });
        return res;
      }).catch(function () {
        return caches.match(req).then(function (cached) {
          return cached || caches.match('/index.html');
        });
      })
    );
    return;
  }

  // Cache-first for same-origin static assets
  event.respondWith(
    caches.match(req).then(function (cached) {
      if (cached) return cached;
      return fetch(req).then(function (res) {
        if (!res || res.status !== 200 || res.type === 'opaque') return res;
        var copy = res.clone();
        caches.open(CACHE_NAME).then(function (cache) { cache.put(req, copy); });
        return res;
      });
    })
  );
});
