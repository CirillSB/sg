// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';
// let swiper = new Swiper('.swiper', {
//   loop: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   initialSlide: -5,
//   slidesPerColumn: 1,
//   breakpoints: {
//     320: {

//       slidesPerView: 1,
//       spaceBetween: 0,
//       centeredSlides: true,
//       direction: 'horizontal',
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 30,
//       centeredSlides: false,
//     },
//     1200: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//   },
// });
let coachesSlider = new Swiper('.coaches-slider', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  initialSlide: -5,
  slidesPerColumn: 1,
  breakpoints: {
    320: {

      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      direction: 'horizontal',
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: false,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

let mySwiper = new Swiper('.feedback-swiper', {
  loop: false,
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
  slidesPerView: 1,
  spaceBetween: 40,
  autoHeight: true,
});
