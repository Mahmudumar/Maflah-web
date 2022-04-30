const addResourcesToCache = async(resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
    event.waitUntil(
        addResourcesToCache([
            "/Maflah-web/",
            "/Maflah-web/index.html",
            "/Maflah-web/style.css",
            "/Maflah-web/app.js"
        ])
    );
});

self.addEventListener('fetch', (event) => {
    window.alert(event)
    event.respondWith(
        caches.match(event.request)
    );
});