
//menu visibilty
const showMenu = (toggleId, navId) => {
const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

if (toggle && nav) {
    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')
    })
}
}
showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
const navMenu = document.getElementById('nav-menu')
navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')


//scroll


function scrollHeader() {
const nav = document.getElementById('header')
if (this.scrollY >= 200) nav.classList.add('scroll-header');
else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

function scrollTop() {
const scrollTop = document.getElementById('scroll-top');
if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

//animationsjs
window.sr = ScrollReveal({ reset: false });
sr.reveal(".animate-title", {
duration: 1000,
origin: 'top',
distance: '90%'
});
sr.reveal(".animate-img",{
duration: 2000,
origin: 'top',
distance: '90%'
});
sr.reveal(".animate-card",{
duration: 3000,
origin: 'bottom',
distance: '90%'
});
sr.reveal(".animate-left",{
duration: 3500,
origin: 'bottom',
distance: '90%'
});
sr.reveal(".animate-right",{
duration: 3500,
origin: 'bottom',
distance: '90%'
});  

