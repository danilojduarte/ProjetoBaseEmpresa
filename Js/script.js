/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav__menu'),
      navToggle = document.getElementById('nav__toggle'),
      navClose = document.getElementById('nav__close')

      // Menu Show
      if(navToggle){
        navToggle.addEventListener('click', () => {
          navMenu.classList.add('show-menu')
        })
      }

      // Menu Hidden

      if(navClose) {
        navClose.addEventListener('click', () => {
          navMenu.classList.remove('show-menu')
        })
      }


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
  const Menu = document.getElementById('nav__menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SWIPER SERVICES ===============*/ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
