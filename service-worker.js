const i = [
  "/_app/immutable/assets/female-1-163f67f7.jpeg",
  "/_app/immutable/assets/female-2-8e8012f9.jpeg",
  "/_app/immutable/assets/male-1-b9f79da7.jpeg",
  "/_app/immutable/assets/male-2-fedcff7c.jpeg",
  "/_app/immutable/assets/logo-470e047c.svg",
  "/_app/immutable/assets/logo-text-415a6058.svg",
  "/_app/immutable/start-aebfcfd0.js",
  "/_app/immutable/components/pages/_layout.svelte-d960eb4d.js",
  "/_app/immutable/assets/_layout-80dbf142.css",
  "/_app/immutable/components/pages/_error.svelte-af0e4904.js",
  "/_app/immutable/components/pages/panel/_layout.svelte-78f7fed8.js",
  "/_app/immutable/components/pages/panel/_error.svelte-938dd68a.js",
  "/_app/immutable/components/pages/login/_page.svelte-25ea0588.js",
  "/_app/immutable/components/pages/logout/_page.svelte-89937286.js",
  "/_app/immutable/components/pages/panel/dashboard/_page.svelte-83d62afb.js",
  "/_app/immutable/components/pages/panel/ecommerce/_page.svelte-f5b624c2.js",
  "/_app/immutable/components/pages/panel/ecommerce/add/_page.svelte-5d2891cb.js",
  "/_app/immutable/components/pages/panel/_...slug_/_page.svelte-cb334dd9.js",
  "/_app/immutable/components/pages/signup/_page.svelte-31a9f5e2.js",
  "/_app/immutable/modules/pages/_layout.ts-b8ee4d7c.js",
  "/_app/immutable/modules/pages/panel/_...slug_/_layout.ts-cc7d66e8.js",
  "/_app/immutable/modules/pages/_page.ts-117cc3f6.js",
  "/_app/immutable/chunks/singletons-1368421b.js",
  "/_app/immutable/chunks/index-ad65ff70.js",
  "/_app/immutable/chunks/control-03134885.js",
  "/_app/immutable/chunks/preload-helper-b21cceae.js",
  "/_app/immutable/chunks/ThemeBloc-e693fb8a.js",
  "/_app/immutable/chunks/dayjs.min-287502cb.js",
  "/_app/immutable/chunks/_commonjsHelpers-094ef602.js",
  "/_app/immutable/chunks/check-circle-91940688.js",
  "/_app/immutable/chunks/_layout-1daba58d.js",
  "/_app/immutable/chunks/404-79a98f1b.js",
  "/_app/immutable/chunks/search-a1a7473e.js",
  "/_app/immutable/chunks/navigation-6a0d0b65.js",
  "/_app/immutable/chunks/index-95d9c52b.js",
  "/_app/immutable/chunks/chevron-right-20726459.js",
  "/_app/immutable/chunks/male-1-58f41db0.js",
  "/_app/immutable/chunks/_layout-d3bf9179.js",
  "/_app/immutable/chunks/_page-8cf51044.js",
  "/_app/immutable/chunks/object-d721b2ed.js",
  "/_app/immutable/chunks/logo-37947059.js",
  "/_app/immutable/chunks/Focus-18975199.js",
  "/_app/immutable/chunks/chevron-left-7316ae28.js",
  "/_app/immutable/chunks/0-316363d5.js",
  "/_app/immutable/chunks/1-1660eb3d.js",
  "/_app/immutable/chunks/2-7a65fa38.js",
  "/_app/immutable/chunks/3-004491fd.js",
  "/_app/immutable/chunks/4-2a9dbd26.js",
  "/_app/immutable/chunks/5-868a9c2c.js",
  "/_app/immutable/chunks/6-c4b52bef.js",
  "/_app/immutable/chunks/7-f64392db.js",
  "/_app/immutable/chunks/8-f8dc934c.js",
  "/_app/immutable/chunks/9-d33ace8e.js",
  "/_app/immutable/chunks/10-14f4373a.js",
  "/_app/immutable/chunks/11-41850d2a.js",
  "/_app/immutable/chunks/12-20f5e5db.js",
  "/_app/immutable/chunks/VisitorsChart-732216ee.js",
  "/_app/immutable/chunks/apexcharts.common-174b0ac7.js",
  "/_app/immutable/chunks/PreciousRadarChart-2579e516.js",
  "/_app/immutable/chunks/PreciousLineChart-1ebc1d6e.js",
  "/_app/immutable/chunks/Paginate-bb041230.js",
  "/_app/immutable/assets/Paginate-e6234abb.css"
], o = [
  "/favicon.png",
  "/manifest.json"
], m = "1668139296589", t = self, n = `cache${m}`, l = i.concat(o), b = new Set(l);
t.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(n).then((a) => a.addAll(l)).then(() => {
      t.skipWaiting();
    })
  );
});
t.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (a) => {
      for (const s of a)
        s !== n && await caches.delete(s);
      t.clients.claim();
    })
  );
});
async function h(e) {
  const a = await caches.open(`offline${m}`);
  try {
    const s = await fetch(e);
    return a.put(e, s.clone()), s;
  } catch (s) {
    const p = await a.match(e);
    if (p)
      return p;
    throw s;
  }
}
t.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const a = new URL(e.request.url), s = a.protocol.startsWith("http"), p = a.hostname === self.location.hostname && a.port !== self.location.port, c = a.host === self.location.host && b.has(a.pathname), u = e.request.cache === "only-if-cached" && !c;
  s && !p && !u && e.respondWith(
    (async () => c && await caches.match(e.request) || h(e.request))()
  );
});
