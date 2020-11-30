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

  /* Footer Form Focus Animation */
  $(".footer__form_input input").focus(function () {
    $(this).parent().find("label").addClass("is-active");
  });

  $(".footer__form_input input").focusout(function () {
    if ($(this).val() === "") 
       $(this).parent().find("label").removeClass("is-active");
   /* $(this).parent().find("label").removeClass("is-active"); */
  });

  AOS.init({
    once: true,
  });
});


/* Scroll */
var swiper = new Swiper(".slider-first .swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".slider-first .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".slider-first .swiper-button-next",
    prevEl: ".slider-first .swiper-button-prev",
  },
});

var swiper = new Swiper(".slider-second .swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".slider-second .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".slider-second .swiper-button-next",
    prevEl: ".slider-second .swiper-button-prev",
  },
});

var swiper = new Swiper(".slider-third .swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".slider-third .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".slider-third .swiper-button-next",
    prevEl: ".slider-third .swiper-button-prev",
  },
});

var swiper = new Swiper(".slider-fourth .swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".slider-fourth .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".slider-fourth .swiper-button-next",
    prevEl: ".slider-fourth .swiper-button-prev",
  },
});

var swiper = new Swiper(".slider-fifth .swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".slider-fifth .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".slider-fifth .swiper-button-next",
    prevEl: ".slider-fifth .swiper-button-prev",
  },
});

var swiper = new Swiper(".other-cases .swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


AOS.init({
  once: true,
  anchorPlacement: "bottom-bottom",
  duration: 400,
});


if (document.readyState == "complete") {
  AOS.refresh();
}