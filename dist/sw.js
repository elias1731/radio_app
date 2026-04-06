const t="fordy-radio-v1",n=["./index.html","./assets/style.css","../assets/style.css","../assets/icon.png","../assets/Fordy.png"];self.addEventListener("install",s=>{s.waitUntil(caches.open(t).then(e=>e.addAll(n)))});self.addEventListener("fetch",s=>{s.respondWith(fetch(s.request).catch(()=>caches.match(s.request)))});
//# sourceMappingURL=sw.js.map
