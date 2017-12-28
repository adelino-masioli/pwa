/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["assets/app.js","aca59b278d11e323facabd3dc97eefd1"],
["assets/images/avatar.png","e5cb675577c0197c6f178ec03244a6e40ec0a49d"],
["assets/images/brand.png","27e127758c657b96b5616f6fa3f3c5e364c706f6"],
["assets/images/vertical-dot.png","738894f56dcae87fac3a418e20f25e9ee765d6ec"],
["assets/images/search.png","b86b4cc0a5ea8ae071e56d2ab3131900ca908c54"],
["assets/images/ico-phone.png","8968c6525071c58a78884a58e8a62dca1ebacb28"],
["assets/images/ico-mail.png","f372fd7eb5981929850e5f15866faed62608426d"],
["assets/images/ico-document.png","13a2ef2de8b9ae8a108564484d7fba13c39d1026"],
["assets/images/ico-address.png","493c432fb3dfee644b7cb6211cb2ea243a53e91a"],
["assets/images/icons/60x60.png","ab29d3aeba5721c5b100e19a0ee88bdd4568c4a6"],
["assets/images/icons/128x128.png","9f56e5c8170d2da9fdb7f1d17e1e9bd351485523"],
["assets/images/icons/144x144.png","4843993be6edef04a311e4a734272aaf"],
["assets/images/icons/152x152.png","044bd41692ca0e3e43c3b88sdfds0c3ae18c31bd71"],
["assets/images/icons/192x192.png","45301c088c051c2ebf434b1768a1ba025e6b1ca4"],
["assets/images/icons/256x256.png","e57a614ddef18c2a965a9be770889691"],
["assets/images/icons/512x512.png","91bdd7d077cc3641d62e54eb1a5d5705"],
["assets/images/icons/browserconfig.xml","7f09281b72cfc98e0c769d97ba2d151a"],
["assets/images/icons/favicon-16x16.png","2507906a6625f80f7300f44431666df6"],
["assets/images/icons/favicon-32x32.png","9a812df8ae4619eba28b3d8739eff0e9"],
["assets/images/icons/favicon.ico","f5db88910186c48ba280532662beb4ec"],
["assets/images/icons/safari-pinned-tab.svg","bd0ddd3b3d30c9cba25d5912e20ced12"],
["assets/lib/clipboard/dist/clipboard.min.js","1f91008d9fb39b45db0978805499ad9c"],
["assets/lib/dialog-polyfill/dialog-polyfill.css","251690696eef08ec5d6895068e2d4154"],
["assets/lib/dialog-polyfill/dialog-polyfill.js","5d9c5c6154c090e19ada5e9c79df7cb9"],
["assets/lib/jsqrcode/src/alignpat.js","1e58b6d563d49987403280b50692757a"],
["assets/lib/jsqrcode/src/bitmat.js","8d18b552d807dcfe97f7848f85e5702a"],
["assets/lib/jsqrcode/src/bmparser.js","c48502b57f83ec17935d44b4ac699657"],
["assets/lib/jsqrcode/src/datablock.js","bf08eb72b68af0d3cf2c4306826922c3"],
["assets/lib/jsqrcode/src/databr.js","422a59e8435e20e61c0aef1110dcb6b4"],
["assets/lib/jsqrcode/src/datamask.js","a081e360268593ab57817200b24be5bc"],
["assets/lib/jsqrcode/src/decoder.js","d406b3f8ccdba885b9d6a49abc8af700"],
["assets/lib/jsqrcode/src/detector.js","a34db8774fa4aa3b2390725a918e4e53"],
["assets/lib/jsqrcode/src/errorlevel.js","d24496ffc9a69c16bc5aac0ed40aefd8"],
["assets/lib/jsqrcode/src/findpat.js","dd27264906f8eb4af9df8c5619f45356"],
["assets/lib/jsqrcode/src/formatinf.js","b73cb5d77d7520b8430e5191a07228f7"],
["assets/lib/jsqrcode/src/gf256.js","2850226ae5a3a2a1287e31c56e0e3d9b"],
["assets/lib/jsqrcode/src/gf256poly.js","5a496ca11ae528d1988f2936b02c534b"],
["assets/lib/jsqrcode/src/grid.js","4e6035e11c7069200863edbbac120342"],
["assets/lib/jsqrcode/src/qrcode.js","837cae183b6edaa4b383c8070bb72307"],
["assets/lib/jsqrcode/src/rsdecoder.js","c2bd625c20ad34c368e5fe9ade8ae8cd"],
["assets/lib/jsqrcode/src/version.js","c6d740362454336c31fe55a4831d5fb1"],
["assets/lib/material-design-lite/material.min.css","8ce4631006b601c6253396365879a7a9"],
["assets/lib/material-design-lite/material.min.js","df211fcb13a5c100eeb182f14fd37b44"],
["assets/qrcode_worker.js","0a8752ef0d78e8f010558230282c2b4f"],
["assets/jquery-3.2.1.min.js","33ea5b72be424c4d84252e4a851ca611e91ffd72"],
["assets/dist/js/jquery.rippler.min.js","96986614816b48a9ca772ddc4c2950e1a38f6d35"],
["assets/script.js","da39a3ee5e6b4b0d3255bfef95601890afd80709"],
["assets/style.css","937bfaea6b875d17a48b0e4b499c346e56c4ca1c"],
["assets/rippler.min.css","3ce8f4620d2581e26dc1df25fb24e0by"],
["assets/colors.css","2ce8f4620d2e71e2dc1df266fb24e0bz"],
["assets/camera.css","9ce8f4620d2e71712dc1df25fb24e0bf"],
["index.html","ef04647f457fb8ddefeab99f41e3a267"],
["manifest.json","4542af92c75fe36f9eb6603625892c1f"]];
var cacheName = 'sw-precache-v2--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







