const CACHE_NAME = 'noti-minute-v1';
const APP_SHELL = [
  '/noti/',
  '/noti/index.html',
  '/noti/styles.css',
  '/noti/app.js',
  '/noti/manifest.webmanifest',
  '/assets/imgs/icons/icon-512x512.png',
  '/assets/imgs/icons/icon-384x384.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
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
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => cachedResponse || fetch(event.request))
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
      const existing = clients.find((client) => client.url.includes('/noti/'));

      if (existing) {
        return existing.focus();
      }

      return self.clients.openWindow('/noti/');
    })
  );
});
