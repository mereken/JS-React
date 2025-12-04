const CACHE_NAME = 'ocean-basket-v1';
const DATA_CACHE_NAME = 'ocean-basket-data-v1';
const FILES_TO_CACHE = [
    '/',
    '/index.html',
    'manifest.json',
    'icon-192x192.png',
    'icon-512x512.png',
];

self.addEventListener('install', (event) => {
    console.log('[ServiceWorker Install');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Pre-caching App Shell');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('[ServiceWorker] Activate');
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                        console.log('[ServiceWorker] Removing old cache', key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim();

    if (url.origin === 'https://www.themealdb.com') {
    event.respondWith(
      caches.open(DATA_CACHE_NAME).then((cache) => {
        return fetch(request)
          .then((response) => {
            if (response.status === 200) {
              cache.put(request.url, response.clone());
            }
            return response;
          })
          .catch(() => {
            return cache.match(request);
          });
      })
    );
    return;
}

    if (url.origin.includes('firebase') || url.origin.includes('googleapis')) {
        return; 
    }

    if (request.mode === 'navigate') {
        event.respondWith(
        fetch(request)
            .catch(() => {
            return caches.match('/index.html');
            })
        );
        return;
    }


    event.respondWith(
        caches.match(request).then((cachedResponse) => {
        const fetchPromise = fetch(request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
            }
            return networkResponse;
        });
        
        return cachedResponse || fetchPromise;
        })
    );
});





