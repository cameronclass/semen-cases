/* Preloader */
/* let hidePreloader = () => {
  let preloader = document.querySelector(".page-preloader");
  preloader.style.opacity = 0;
};

let webpage = document.querySelector("html");

document.addEventListener("DOMContentLoaded", hidePreloader); */

$(document).ready(function () {
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();

    if (scroll >= 80) {
      $(".header").addClass("header-active");
    } else {
      $(".header").removeClass("header-active");
    }
  });
});


/* Scroll */
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});