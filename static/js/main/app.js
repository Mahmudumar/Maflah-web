const header = document.querySelector('header');
const navs = document.querySelector('.navbar');
const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const navlias = document.querySelectorAll('.navbar li a');
const navlis = document.querySelectorAll('.navbar li');

function setMinHeight() {
    const headerHeight = header.clientHeight
    const main = document.querySelector('body');
    main.style.setProperty('--nav-height', `${headerHeight}px`);
};

const toggle = () => {
    var on = navs.classList.toggle('nav-active').valueOf();
    navlis.forEach((link, index) => {
        // basically if the link in 
        //the navbar has an animation already just use it
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navlisfadein 0.5s ease forwards ${index / 10 + .09}s`
        }
    });
    burger.classList.toggle('toggle')
}

const clickLinks = (toggle_ = true) => {
        navlias.forEach((a) => {
            const id = a.getAttribute('id')
                //when clicked scrolls into view
            const sections = document.querySelector(`.${id}`)

            a.addEventListener('click', () => {
                sections.scrollIntoView({ 'behavior': 'smooth' })

                if (toggle_) {
                    toggle()
                } else {}
            })
        })
    } //toggle nav



const sizeBody = () => {
    body.setAttribute('width', `${window.innerWidth - navs.clientWidth}px`)
    body.setAttribute('height', `${window.innerHeight}px`)
};

function Scrolling() {
    //as soon as i start scrolling down, header should go up
    const yScroll = window.scrollY
    const scrHeight = document.querySelector('main').scrollHeight

    if (yScroll >= (scrHeight - yScroll)) {
        header.style.transform = 'translateY(-100%)'
        header.style.transition = 'transform 0.5s ease'
    } else {
        header.style.transform = ''
    }

};



//like listening for media queries
const media = () => {

    if (window.innerWidth <= 500) {
        window.removeEventListener('scroll', Scrolling)
        window.removeEventListener('load', Scrolling)
        clickLinks(true)
    } else {
        window.addEventListener('scroll', Scrolling);
        window.addEventListener('load', Scrolling);

    }
}


// app functions all together
const app = () => {
    window.addEventListener('load', sizeBody);
    window.addEventListener('resize', sizeBody);
    window.addEventListener('resize', media)
    window.addEventListener('load', media)
    window.addEventListener('load', setMinHeight);
    window.addEventListener('resize', setMinHeight);
    burger.addEventListener('click', toggle);
    clickLinks(false)
};
app();