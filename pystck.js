const shop = document.querySelector('.shop')
const header = document.querySelector('header')
const setWinSize = () => {
    const winh = window.innerHeight - header.clientHeight
    const winw = window.innerWidth
    shop.setAttribute('height', `${winh}px`)
    shop.setAttribute('width', `${winw}px`)
}
window.addEventListener('load', setWinSize)
window.addEventListener('resize', setWinSize)