/*console.log("Cookies: " + navigator.cookieEnabled);
console.log("Browser Language: " + navigator.browserLanguage);
console.log("Language: " + navigator.language);
console.log("Platform: " + navigator.platform);
console.log("Connection Speed: " + navigator.connectionSpeed);
console.log("User Agent: " + navigator.userAgent);
console.log("Webdriver: " + navigator.webdriver);
console.log("Geolocation: " + navigator.geolocation);
*/



function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let user = getCookie("email");
    if (user != "") {
        user = user.split('@').reverse().pop()
        console.log('welcome ' + user);
        return true
    }
}

function compareCookie(a, b) {

    if (a === b) {
        return true
    } else {
        return false
    }

}

// When the email is valid,
// check if the email in the email box is the same with the one in the cookies,(compareCookies)

//  if they are the same, 
//      then run this function (alert that it already has been submitted)
// else, 
//      overwrite the existing email address in the cookies

email.addEventListener('blur', () => {
    if (compareCookie(email.value, getCookie('email'))) {
        window.alert("Thank you!, We already have your email.")
    } else {
        submit.addEventListener('click', () => {
            setCookie('email', email.value)
        })
    }
})


window.addEventListener('load', () => {
    checkCookie()
})