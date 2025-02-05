var homwSwiper = new Swiper(".homw-swiper", {
   spaceBetween: 30,
   loop: 'true',
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   autoplay: {
      delay: 5000,
      disableOnInteraction: false,

   },
});

function scrollHeader(){
   const header = document.getElementById('header');
   if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);


var NewSwiper = new Swiper(".new-swiper", {
   spaceBetween: 16,
   centeredSlides: true,
   slidesPerView: "auto",
   loop: 'true',

   autoplay: {
      delay: 5000,
      disableOnInteraction: false,

   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

   breakpoints: {
     640: {
       slidesPerView: 2,
       spaceBetween: 20,
     },
     768: {
       slidesPerView: 2,
       spaceBetween: 40,
     },
     1024: {
       slidesPerView: 3,
       spaceBetween: 50,
    },
  },

});


const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close');

if(cartShop){
   cartShop.addEventListener('click', () => {
      cart.classList.add('show-cart');
   })
}

if(cartClose){
   cartClose.addEventListener('click', () => {
      cart.classList.remove('show-cart');
   })
}

const Login = document.getElementById('Login'),
LoginButton = document.getElementById('Login-button'),
LoginClose = document.getElementById('Login-close');

if(LoginButton){
   LoginButton.addEventListener('click', () => {
      Login.classList.add('show-login');
   })
}

if(LoginButton){
   LoginClose.addEventListener('click', () => {
      Login.classList.remove('show-login');
   })
}


function scrollup(){
   const scrollup = document.getElementById('scroll-up');
   
   if(this.scrollY >= 350) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollup);


const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');



if(navToggle){
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
   })
}

if(navClose){
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
   })
}

