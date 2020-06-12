var serviceWorkerOption = {
  "assets": [
    "/app.bundle.js",
    "/db.bundle.js",
    "/manifest.json",
    "/assets/icons/icon_512x512.png",
    "/assets/icons/icon_384x384.png",
    "/assets/icons/icon_256x256.png",
    "/assets/icons/icon_192x192.png",
    "/assets/icons/icon_128x128.png",
    "/assets/icons/icon_96x96.png"
  ]
};
        
        !function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n=["/","/index.html","/dist/app.bundle.js","/dist/db.bundle.js"];self.addEventListener("install",(function(e){e.waitUntil(caches.open("static-cache-v1").then((function(e){return e.addAll(n)})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var t=["static-cache-v1","runtime-cache"];e.waitUntil(caches.keys().then((function(e){return e.filter((function(e){return!t.includes(e)}))})).then((function(e){return Promise.all(e.map((function(e){return caches.delete(e)})))})).then((function(){return self.clients.claim()})))})),self.addEventListener("fetch",(function(e){"GET"===e.request.method&&e.request.url.startsWith(self.location.origin)?e.request.url.includes("/api/transaction")?e.respondWith(caches.open("runtime-cache").then((function(t){return fetch(e.request).then((function(n){return t.put(e.request,n.clone()),n})).catch((function(){return caches.match(e.request)}))}))):e.respondWith(caches.match(e.request).then((function(t){return t||caches.open("runtime-cache").then((function(t){return fetch(e.request).then((function(n){return t.put(e.request,n.clone()).then((function(){return n}))}))}))}))):e.respondWith(fetch(e.request))})),self.addEventListener("foreignfetch",(function(e){e.respondWith(fetch(e.request).catch((function(){return new Response("34")})).then((function(t){return{response:t,origin:e.origin}})))}))}]);