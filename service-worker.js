let cacheName = 'cupom-verde-v.1.0.0';
let filesToCache  = [
  './',
  'assets/app.js',
  'assets/images/avatar.png',
  'assets/images/brand.png',
  'assets/images/vertical-dot.png',
  'assets/images/search.png',
  'assets/images/ico-phone.png',
  'assets/images/ico-mail.png',
  'assets/images/ico-document.png',
  'assets/images/ico-address.png',
  'assets/images/icons/60x60.png',
  'assets/images/icons/128x128.png',
  'assets/images/icons/144x144.png',
  'assets/images/icons/152x152.png',
  'assets/images/icons/192x192.png',
  'assets/images/icons/256x256.png',
  'assets/images/icons/512x512.png',
  'assets/images/icons/browserconfig.xml',
  'assets/images/icons/favicon-16x16.png',
  'assets/images/icons/favicon-32x32.png',
  'assets/images/icons/favicon.ico',
  'assets/images/icons/safari-pinned-tab.svg',
  'assets/lib/clipboard/dist/clipboard.min.js',
  'assets/lib/dialog-polyfill/dialog-polyfill.css',
  'assets/lib/dialog-polyfill/dialog-polyfill.js',
  'assets/lib/jsqrcode/src/alignpat.js',
  'assets/lib/jsqrcode/src/bitmat.js',
  'assets/lib/jsqrcode/src/bmparser.js',
  'assets/lib/jsqrcode/src/datablock.js',
  'assets/lib/jsqrcode/src/databr.js',
  'assets/lib/jsqrcode/src/datamask.js',
  'assets/lib/jsqrcode/src/decoder.js',
  'assets/lib/jsqrcode/src/detector.js',
  'assets/lib/jsqrcode/src/errorlevel.js',
  'assets/lib/jsqrcode/src/findpat.js',
  'assets/lib/jsqrcode/src/formatinf.js',
  'assets/lib/jsqrcode/src/gf256.js',
  'assets/lib/jsqrcode/src/gf256poly.js',
  'assets/lib/jsqrcode/src/grid.js',
  'assets/lib/jsqrcode/src/qrcode.js',
  'assets/lib/jsqrcode/src/rsdecoder.js',
  'assets/lib/jsqrcode/src/version.js',
  'assets/lib/material-design-lite/material.min.css',
  'assets/lib/material-design-lite/material.min.js',
  'assets/qrcode_worker.js',
  'assets/jquery-3.2.1.min.js',
  'assets/dist/js/jquery.rippler.min.js',
  'assets/script.js',
  'assets/style.css',
  'assets/dist/css/rippler.min.css',
  'assets/colors.css',
  'assets/camera.css',
  'index.html',
  'manifest.json'
];


self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] Installer');
  e.waitUntil(
      caches.open(cacheName).then(function(cache) {
          console.log('[ServiceWorker] Caching app shell');
          return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener('activate', function (e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
      caches.keys().then(function (keyList) {
          return Promise.all(keyList.map(function(key) {
              if (key !== cacheName) {
                  console.log('[ServiceWorker] Removing old cache', key);
                  return caches.delete(key);
              }
          }));
      })
  );
});

self.addEventListener('fetch', function (e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
      caches.match(e.request).then(function(response) {
          return response || fetch(e.request);
      })
  );
});




