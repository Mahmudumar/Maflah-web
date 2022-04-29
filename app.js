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