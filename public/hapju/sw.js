// 혼자 합주실은 https://htcho-max.github.io/hapju/ 로 옮김 — 예전 서비스 워커는 캐시를 지우고 스스로 물러남
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('hapju-')).map(k=>caches.delete(k)))).then(()=>self.registration.unregister()).then(()=>self.clients.matchAll()).then(cs=>cs.forEach(c=>c.navigate(c.url))))});
