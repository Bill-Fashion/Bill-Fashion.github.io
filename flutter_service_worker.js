'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "117dd711f1789ad54a20cf0a7d3ec77d",
"index.html": "117db821ecf7f591d6f769e65f3c5c73",
"/": "117db821ecf7f591d6f769e65f3c5c73",
"main.dart.js": "3c6d9f3a2de0ae9178f951b827bede85",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d39cce15bef7efb6b8bbbcec65aa5591",
".git/config": "d04aaf370a01e8a3eb7fa676d4e1a7d2",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/0b/c3cb19bd98d5d0bc2aaeb9585b1543e3f4e737": "d304a398bf58cdedb21d851aa599dbd3",
".git/objects/93/5a777ef8b4671871c720c3458d793da2e1b0a3": "075bb0f1bdb3b61de455431dd038a748",
".git/objects/9d/9c325354eb969ab2ecde6571667159b6100033": "c0133ae81aa4c535b48c773959be9866",
".git/objects/02/923c43cef7743610a5d874f87606b221bba482": "b7dee9e2d50fa7d19549bd4dc8e31a2d",
".git/objects/02/8114d5b24c7b1a9f914e485e1c6d78839e480d": "1c8c7fcd64b8ff4f018032015b345ba5",
".git/objects/ac/4fa6826a99110f0d869c8380d7a84bf5abe01f": "e26cdf51162221e1bc59d96b22e97a44",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/a2/0266cac6847a3b06356fba9eec4e5b71ba7fd5": "bcf1bc90679d4e6ae06fb2fbbab01093",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ca/fe213eba96eec71fac502815413222a6ca157f": "7a8f82cf5d6b295c81a6a9f33547a858",
".git/objects/c1/6c9472ea9504b3cd23412092dd36bc185eb15e": "45cf1a47fed55aa124b35e7954431b2e",
".git/objects/4b/846c07603f57787d02f079825565a87473ba1a": "62af0184da106b36ffcdb04abd529135",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/11/12cb0ced9ab0f6fff48f80efbfebda9ad55f32": "b02561fbbb2df3cf4e1e7f4ed3308e31",
".git/objects/29/ec17d19f20b5820588b71250cd73f81a5cef78": "033845c3f4a173c82103b053fa8733c0",
".git/objects/1a/831b390d5358b3f962932f5d2bf1fbd5b59fe7": "c209fa50bc4371f0d3f3862c7584c7b8",
".git/objects/8f/1913ab70dcdca8e0e95410f649d1edb59f18ae": "fa496293c813186256433fb3599f786c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/54e0f671d59f42170abafda1deff430486a680": "9f1c2f7860d98c9e6b2173a57316e17e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/a6f457e89cbebd47bf1815e66989feb0a64110": "9b494381bbfed5efb7d9611379b5a5d0",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/5b/762af3c17c338750a11b844491584a923b0965": "2f7962749c26e3eccf1e8643c92faa83",
".git/objects/06/62a0d8bd03aae834d12417c676e553955f8fd8": "9b7f8502e6c6767b167d32fb4b12b142",
".git/objects/97/b7c31fc84d0e19a9ce986f0bce25d5b5b04bec": "9d7959266f9893eed0579c1d87c353d5",
".git/objects/a0/8ba339674230c662fdcb26967a3758c6003744": "207c3b4bbe0dad9e6e0fb783ae498f25",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/707c578faefe5e3dd7bc7fb336e4e833a4b052": "76cc95c5bffcda3c15f11b550d2e2865",
".git/objects/e0/17e8554227d0ae849d4d29e925ffe7a28a407a": "e5d45a16dce6945fe018252869cc9a67",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/70/39ddbc38706134d20485be3a03dd592dbe43b1": "923125f4baa188c1a5351447a7eee016",
".git/objects/1e/e87821051d605633bb02fc673b91ba218a4768": "a9ea74cf04a2eedb5af1af6c163eab32",
".git/objects/8d/334976b180d8d24a1fa4af4eab5add37910e33": "183b3d923ad1dbcea871acdb9138614e",
".git/objects/8c/119c1927f525d87f01329b1ef473f584f3dbc4": "381772bdc3023f934e1d2aa1d50ae617",
".git/objects/85/855227f01b70ad5e644c161573af96b7965f55": "4b02a8f7b674700d1970e68d8b7aca47",
".git/objects/78/12dfefdfca2954aa481831d0c733e25b29fad5": "94f78ba99c25f36114297bafce48e46a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "32082322a0c19c5a53718c8575dc46f5",
".git/logs/refs/heads/main": "9c79be22c45b0b1550b67affe77e7d98",
".git/logs/refs/remotes/origin/main": "ce4991a9954fd0c27f1f2a4da5a1a2c4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "584cd3f67f37c2d791d8dc7552944564",
".git/refs/remotes/origin/main": "497cd8d337ba70c95b8f2f7fbcef8f03",
".git/index": "4c3381907de8378bdbe38a86473a9183",
".git/COMMIT_EDITMSG": "749e140a80655cde5e5d5e7fc79ba94b",
".git/FETCH_HEAD": "2438bbdba9fb91a8519565fc9549b514",
"assets/AssetManifest.json": "d6242ea85f7b859a5a0052b16ee77625",
"assets/NOTICES": "e3278158a4b180e67188c08fe12601ef",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/icons/coin-stack.png": "a3d01db393199b5226d5ebd6b739fa3d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
