console.log("Cookies: " + navigator.cookieEnabled);
console.log("Browser Language: " + navigator.browserLanguage);
console.log("Language: " + navigator.language);
console.log("Platform: " + navigator.platform);
console.log("Connection Speed: " + navigator.connectionSpeed);
console.log("User Agent: " + navigator.userAgent);
console.log("Webdriver: " + navigator.webdriver);
console.log("Geolocation: " + navigator.geolocation);

sessionStorage.setItem(`name`, `bo`)
console.log(sessionStorage.getItem('name'), navigator)