const header = document.querySelector('header');
const navs = document.querySelector('.navbar');
const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const burgerdivs = document.querySelectorAll('.burger div');
const navlias = document.querySelectorAll('.navbar li a');
const navlis = document.querySelectorAll('.navbar li');
const sections = document.querySelectorAll("section")
const home = sections[0]
const about = sections[1]
const titletext = document.querySelector('.titletext')
const homehead = document.querySelector('div.homehead')
const main = document.querySelector('main')
const logo = document.querySelector('.logo')
const mobileWidth = 500

function setMinHeight() {
    const headerHeight = header.clientHeight
    const main = document.querySelector('body');
    main.style.setProperty('--nav-height', `${headerHeight}px`);
};
const sizeBody = () => {
    body.setAttribute('width', `${window.innerWidth - navs.clientWidth}px`)
    body.setAttribute('height', `${window.innerHeight}px`)
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

    if (on) {
        burgerdivs.forEach((a) => {
            a.style.backgroundColor = '#2e2e2e'
        })
    } else {
        burgerdivs.forEach((a) => {
            a.style.backgroundColor = ''
        })
    }

    burger.classList.toggle('toggle');

    return on;
}

const clickLinks = (toggle_ = true) => {
        navlias.forEach((a) => {
            const id = a.getAttribute('id')
                //when clicked scrolls into view
            const sections = document.querySelector(`.${id}` + "-sepblock")
            a.addEventListener('click', () => {
                sections.scrollIntoView({ 'behavior': 'smooth' })

                if (toggle_) {
                    if (window.innerWidth <= mobileWidth) {
                        toggle()
                    }
                }
            })
        })
    } //toggle nav

function Scrolling() {
    //when the home page passes, header should change style
    const yScr = window.scrollY
    let mainHeight = body.scrollHeight - window.innerHeight

    if (yScr === mainHeight) { //if scroll reaches end
        //navs
        navlias.forEach((a) => { a.style.color = '#2e2e2e' })
            //Brand
        logo.style.filter = 'brightness(100%)'
        titletext.style.color = '#2e2e2e'
            //header
        header.style.backgroundColor = '#f2f2f2'
        header.style.boxShadow = ''
        header.style.transition = 'all 0.2s ease'
            //if in the main content
    } else if (yScr >= (60) && yScr < mainHeight) {
        //navs
        navlias.forEach((a) => { a.style.color = '#2e2e2e' })
            //Brand
        logo.style.filter = 'brightness(100%)'
        titletext.style.color = '#2e2e2e'
            //header
        header.style.backgroundColor = '#f2f2f2'
        header.style.boxShadow = '0px 2px 20px #2e2e2e'
        header.style.transition = 'all 0.5s ease'
            //butger for mobile
        burgerdivs.forEach(bun => {
            bun.style.backgroundColor = '#2e2e2e'
        })

    } else { //if on the top
        titletext.style.color = ''
        header.style.backgroundColor = ''
        header.style.boxShadow = ''
        logo.style.filter = 'brightness(500%)'
        navlias.forEach((a) => { a.style.color = '' })
        burgerdivs.forEach(bun => {
            bun.style.backgroundColor = ''
        })
        header.style.transition = 'all 0.7s ease'
    }
};

//like listening for media queries
//function for medi query


const media = () => {
    clickLinks(true);
    window.addEventListener('scroll', Scrolling);
    window.addEventListener('load', Scrolling);
}

// app functions all together
const app = () => {
    window.addEventListener('load', sizeBody);
    window.addEventListener('load', Scrolling);
    window.addEventListener('resize', sizeBody);
    window.addEventListener('resize', media)
    window.addEventListener('load', media)
    window.addEventListener('load', setMinHeight);
    window.addEventListener('resize', setMinHeight);

    burger.addEventListener('click', toggle);

    clickLinks(false)
};

app();