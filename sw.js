/* GTA V Manager as an app (PWA): lets the page be installed and opened without internet.
   - The page itself (and the json / md files) always comes fresh from GitHub when online,
     so a new version shows up at once, with no Ctrl+F5; offline, the last copy is used.
   - Pictures, icons and fonts are kept and refreshed in the background.
   - GitHub saving (api.github.com, raw.githubusercontent.com) is never touched. */
const VERSION = "0.22";
const CACHE = "gtam-" + VERSION;
const CORE = ["./GTA_V_Manager.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./favicon-32.png", "./bg/los_santos_poster.webp"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(CORE.map(u => c.add(new Request(u, { cache: "reload" })).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith("gtam-") && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

const FONTS = /^https:\/\/fonts\.(googleapis|gstatic)\.com\//;
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url), same = url.origin === location.origin;
  if (!same && !FONTS.test(req.url)) return;          // GitHub API, raw files, everything else: straight to the network
  const fresh = same && (req.mode === "navigate" || /\.(html|json|md|webmanifest)$/i.test(url.pathname) || url.pathname.endsWith("/"));
  if (fresh) {
    // network first, asking GitHub Pages to check for a newer copy; offline: the saved one
    e.respondWith(fetch(req, { cache: "no-cache" }).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true })
      .then(r => r || (req.mode === "navigate" ? caches.match("./GTA_V_Manager.html") : Response.error()))));
    return;
  }
  // pictures, icons, fonts: the saved copy at once, refreshed in the background
  e.respondWith(caches.open(CACHE).then(c => c.match(req).then(hit => {
    const net = fetch(req).then(res => { if (res.ok || res.type === "opaque") c.put(req, res.clone()); return res; }).catch(() => hit || Response.error());
    return hit || net;
  })));
});
