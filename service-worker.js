const CACHE_NAME = 'pic-li-v1';
const URLS_TO_CACHE = [
  './',
  './style.css',
  './colors.css',
  './index.js'
];

self.addEventListener('install', (e) => {
  console.log('ServiceWorker installation completed 😎');
  e.waitUntil(caches.open(CACHE_NAME)
    .then((cache) => {
      console.log('ServiceWorker opened cache 📀');
      const result = cache.addAll(URLS_TO_CACHE);
      console.log('ServiceWorker cached all specified files 💽');
      return result;
    })
    .catch(error => {
      console.error(`ServiceWorker couldn't open cache: `, error);
    })
  )
});

self.addEventListener('activation', (e) => {
  const allowedCacheNames = ['pic-li-v1'];
  e.waitUntil(caches.keys()
    .then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!allowedCacheNames.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    })
    .catch((error) => {
      console.error(`ServiceWorker couldn't be activated: `, error);
    })
  )
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request)
    .then((response) => {
      if (response) {
        return response;
      }

      return fetch(e.request).then((newResponse) => {
        if (!newResponse || newResponse.status !== 200 || newResponse.type === 'basic') {
          return newResponse;
        }
        const responseToCache = newResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, responseToCache)
            .then(() => {
              console.log('ServiceWorker cached new resource: ', e.request.url);
            })
            .catch((error) => {
              console.error(`ServiceWorker Couldn't cache new resource: `, error);
            })
        })
      });
    })
    .catch((error) => {
      console.error(`ServiceWorker couldn't be activated: `, error);
    })
  );
});