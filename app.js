/*const search_input = document.getElementById('searchinput')
const search_bt = document.getElementById('searchbt')

function getsearchinput() {
    console.log(search_input.value)
}

search_input.addEventListener('keyup', getsearchinput)
console.log(search_input) **/



//get elements

/*
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

registerServiceWorker();*/

function setMinHeight() {
    const header = document.querySelector('header').clientHeight;
    const main = document.querySelector('body');
    main.style.setProperty('--nav-height', `${header}px`);
}
window.addEventListener('load', setMinHeight);
window.addEventListener('resize', setMinHeight);

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navs = document.querySelector('.navbar');
    const navlis = document.querySelectorAll('.navbar li');
    //toggle nav
    burger.addEventListener('click', () => {
        navs.classList.toggle('nav-active');

        navlis.forEach((link, index) => {
            // basically if the link in 
            //the navbar has an animation already just use it
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navlisfadein 0.5s ease forwards ${index/7+0.1}s`
            }
        });
        burger.classList.toggle('toggle')
    });
    // animate fade

}



// app functions all together
const app = () => {
    navSlide()
}
app()