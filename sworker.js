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
            "/Maflah-web/app.js",
            "/Maflah-web/image-list.js",
            "/Maflah-web/star-wars-logo.jpg",
            "/Maflah-web/gallery/bountyHunters.jpg",
            "/Maflah-web/gallery/myLittleVader.jpg",
            "/Maflah-web/gallery/snowTroopers.jpg",
        ])
    );
});