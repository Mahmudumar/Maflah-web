/*const search_input = document.getElementById('searchinput')
const search_bt = document.getElementById('searchbt')

function getsearchinput() {
    console.log(search_input.value)
}

search_input.addEventListener('keyup', getsearchinput)
console.log(search_input) **/


//get elements
main_ = document.getElementsByClassName('main')
main = main_[0]

//get window size at all times
function onWinResize() {
    main.setAttribute("width", window.innerWidth)
    main.setAttribute("height", window.innerHeight)

    console.log(main.getAttribute('height'));
}
window.addEventListener('resize', onWinResize)