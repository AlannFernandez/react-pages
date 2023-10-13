importScripts('https://cdnjs.cloudflare.com/ajax/libs/sw-toolbox/3.6.0/sw-toolbox.min.js');

self.addEventListener('install', function(event) {
  console.log('Service worker installed');
});

self.addEventListener('activate', function(event) {
  console.log('Service worker activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request).then(function(response) {
    return response;
  }));
});
