'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "724c02d1afff7d3f669a9452981fba22",
"assets/AssetManifest.bin.json": "a170cc0f299c73f3b3f072576505e0f3",
"assets/AssetManifest.json": "c5a00b62bcce66378539cc4421fc6f1c",
"assets/assets/countryCodes.json": "fbd2849211ea2cdd6f94e8126dffc4d7",
"assets/assets/fonts/Gilroy-Black.otf": "0f6e082f42f5247d82c3ade9c2a8f928",
"assets/assets/fonts/Gilroy-Bold.ttf": "10b9cd1ddd69d318220fdfeca35a23b3",
"assets/assets/fonts/Gilroy-Medium.ttf": "ef9daf9c32f47a3468f30f861e92b9c4",
"assets/assets/fonts/Gilroy-Regular.ttf": "af5b8da12b32c5e74532c6446eb356b4",
"assets/assets/icons/arrow-right.svg": "5fdf2dccccbbfc2266b05cc3db82e52e",
"assets/assets/icons/back.svg": "d9258d3e7baa4c7ea1edaff06df08298",
"assets/assets/icons/bank_info.svg": "21d69c59acb4d1559d2befc95b612499",
"assets/assets/icons/box.svg": "eec7f752bcd030554a4fb1f4f54e1e8c",
"assets/assets/icons/calendar.svg": "9cf7ab4e2d7b71c8bf9e6e6a8baf577f",
"assets/assets/icons/cash.svg": "e7dc07e57d280a71452498c9f599d4a4",
"assets/assets/icons/cih.png": "d76f59f9e9ef1b3d232874c1d9c38e4c",
"assets/assets/icons/deliveredbox.svg": "df89e124715bb5bd2f289851fe9cee7f",
"assets/assets/icons/delivery_charges.svg": "82c3d0176db10b0ff828d58a904b9243",
"assets/assets/icons/dollar.svg": "88557368ed3bff9abde081d510cedd23",
"assets/assets/icons/edit.png": "621ef0a590df79245f9f527d948eacd0",
"assets/assets/icons/go_arrow.png": "a3ca1bbaa4f552ed9e856c775bd483d0",
"assets/assets/icons/go_arrow.svg": "ad952ca42e1ce77e885e7a0546a5f71f",
"assets/assets/icons/history.png": "a5de060c547c94e60efde8b4a8c22328",
"assets/assets/icons/home.png": "99b783803e3b6ffac256fb476d5de087",
"assets/assets/icons/icon_edit.png": "621ef0a590df79245f9f527d948eacd0",
"assets/assets/icons/icon_edit.svg": "204843625378bca9678250f9d5a529c1",
"assets/assets/icons/key.svg": "a961295cbd4463d94dbf064adfb8d18c",
"assets/assets/icons/lang.svg": "7fadb877ee114e3c33f7671b4e324eb6",
"assets/assets/icons/logout.svg": "e0421bb9f2e028346257f8cd61193308",
"assets/assets/icons/moto.svg": "463948b45e7174edb0de5494d1614d1e",
"assets/assets/icons/parcel.png": "8b48749637c9101f18d53c1441772608",
"assets/assets/icons/parcel.svg": "9b728fa087807740c0fc7c024d55369c",
"assets/assets/icons/parcel1.png": "1edd3bfb22d608fbd7ba9fe1c19d0d66",
"assets/assets/icons/parcel2.svg": "c2def7140364836bcb6f53a3012afffb",
"assets/assets/icons/payment.svg": "277a30ca831cea977479127f050d8eae",
"assets/assets/icons/pickup.png": "c951be2f9ba25ffe6db5a475321ead96",
"assets/assets/icons/pickup_outlined.png": "c2d189a36cf16bd34b204add08a34cf1",
"assets/assets/icons/placeholder.png": "0c5b3b93c66843c390bfaae7f6d56c65",
"assets/assets/icons/product.svg": "872c931170741d746c6034dd5195436f",
"assets/assets/icons/productadd.svg": "468cbd841e3a52a11bd05b3ab22eae29",
"assets/assets/icons/product_placeholder.png": "b7ba74b34c86cf2bbb116f2b431e10a8",
"assets/assets/icons/profile.png": "da77228aef850d5b96b183b448abb995",
"assets/assets/icons/returnbox.svg": "f119f3fbf86407180e6e0cc6b2668c74",
"assets/assets/icons/returns.png": "b29f0d0245d565057ce9113e2b90552c",
"assets/assets/icons/shop.svg": "74b85c19135ec0db51c57181ca1f22ff",
"assets/assets/icons/shopurl.png": "f1693887e4c471f796c76897b54d2b86",
"assets/assets/icons/support.png": "4e272a95567e4f91918790cb0a172f9d",
"assets/assets/icons/support.svg": "5399019009e8c4eaed326ec561881a6d",
"assets/assets/icons/tijari.png": "841c72286f8321688d046fd4f071671a",
"assets/assets/icons/transitbox.svg": "82c3d0176db10b0ff828d58a904b9243",
"assets/assets/icons/truck-loading.svg": "889337ca4777cddd8f76bf780e7774d4",
"assets/assets/icons/whatsapp.svg": "7f5989f9473fae5d1cf92150bbcedca1",
"assets/assets/images/empty.png": "8709c13f4e915bc2a7ef149a471c7e13",
"assets/assets/images/goexpress_logo.png": "c98bf3b8c3a3aa2feadd482c8c202ded",
"assets/assets/images/logo.png": "1fdec8376fa3a738724c008080f9cadc",
"assets/assets/images/logo_black.png": "5adf125f1fe039af594755f2d9017030",
"assets/assets/images/logo_placeholder.png": "8c08961bd38632e03b2a9ede9f0a570f",
"assets/assets/images/original-3b53f79fa29d35d43fccc9b98bc3042d.png": "1f393052ee913a8ec1278a20a62891e5",
"assets/assets/images/placeholder.png": "9bfa696a97bde86e84c7b26a1852a178",
"assets/assets/images/profile.png": "5be718acdce6a8235a38da074d0d0789",
"assets/assets/sqlite/chatwoot.sql": "1dc64dfcee6e158d4215dc25ce005c73",
"assets/FontManifest.json": "3d5126a7fb396abb02c797318a3566a6",
"assets/fonts/MaterialIcons-Regular.otf": "debcd11b4318feee79f9e966efafddf6",
"assets/NOTICES": "03618f113dead28a2ce2999e014af4e5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "84c3ce2a037bc8227f14712da7e438d9",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "40469726c5ed792185741388e68dd9e8",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "440da663f17184f21f007a3a2bf60f69",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "fe01a3d983ec656f50653a99108eb38d",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "1e3af8a981446c8d580d0319fb1fcf82",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/packages/nb_utils/assets/icons/ic_beautify.png": "a680304f89d7cf2de6ebaabcb05e6947",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "4fe1928e582fd2e3316275954fc92e86",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "6d247986689d283b7e45ccdf7214c2ff",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "984dd1ba6363972e855541928ba55170",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1b1ca0c0c6788416432595085eda250b",
"/": "1b1ca0c0c6788416432595085eda250b",
"main.dart.js": "590ed50b36dbe940eed665aa7c9fc608",
"manifest.json": "e4b994e0a0d4fe934eb5197e5bf45535",
"version.json": "aee802adbd7ae7b7c125ca76d556790c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
