self.addEventListener('install', function (e) {
  console.log('Service Worker Installed');
});

self.addEventListener('fetch', function (e) {
  // Future enhancement: offline caching
});
