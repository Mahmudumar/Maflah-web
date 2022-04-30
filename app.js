/*const search_input = document.getElementById('searchinput')
const search_bt = document.getElementById('searchbt')

function getsearchinput() {
    console.log(search_input.value)
}

search_input.addEventListener('keyup', getsearchinput)
console.log(search_input) **/


//get elements
function setMinHeight() {
    const header = document.querySelector('header').clientHeight;
    const main = document.querySelector('body');
    main.style.setProperty('--nav-height', `${header}px`);
}
window.addEventListener('load', setMinHeight);
window.addEventListener('resize', setMinHeight);

const burger = document.querySelector('.burger')
console.log(burger);


const registerServiceWorker = async() => {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.register(
                '/Maflah-web/sworker.js', {
                    scope: '/Maflah-web/',
                }
            );
            if (registration.installing) {
                console.log('Service worker installing');
            } else if (registration.waiting) {
                console.log('Service worker installed');
            } else if (registration.active) {
                console.log('Service worker active');
            }
        } catch (error) {
            console.error(`Registration failed with ${error}`);
        }
    }
};

// ...

registerServiceWorker();