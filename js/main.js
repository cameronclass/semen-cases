/* Preloader */
/* let hidePreloader = () => {
  let preloader = document.querySelector(".page-preloader");
  preloader.style.opacity = 0;
};

let webpage = document.querySelector("html");

document.addEventListener("DOMContentLoaded", hidePreloader); */

$(document).ready(function () {
 /*  $(window).scroll(function () {
    let scroll = $(window).scrollTop();

    if (scroll >= 80) {
      $(".header").addClass("header-active");
    } else {
      $(".header").removeClass("header-active");
    }
  }); */

  $(".js-menu-open").click( function (){
    $(".js-menu").toggleClass("menu-opened");
    $("body").toggleClass("lock");
    $(".hamburger_menu").toggleClass("hamburger_menu_active");
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


});

/* Aos animation */
$(function () {
  AOS.init({
    once: true,
    anchorPlacement: "bottom-bottom",
    duration: 500,
  });

  onElementHeightChange(document.body, function () {
    AOS.refresh();
  });

  /* if (document.readyState == "complete") {
     AOS.refresh();
   } */
});

function onElementHeightChange(elm, callback) {
  var lastHeight = elm.clientHeight;
  var newHeight;

  (function run() {
    newHeight = elm.clientHeight;
    if (lastHeight !== newHeight) callback();
    lastHeight = newHeight;

    if (elm.onElementHeightChangeTimer) {
      clearTimeout(elm.onElementHeightChangeTimer);
    }

    elm.onElementHeightChangeTimer = setTimeout(run, 200);
  })();
}



/* Sliders */

/* var swiper = new Swiper(".slider-first .swiper-container", {
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
}); */

var swiper = new Swiper(".other-cases .swiper-container", {
  slidesPerView: "auto",
  loop: "true",
  spaceBetween: 30,
});

var swiper = new Swiper(".architecture__slider-1 .swiper-container", {
  slidesPerView: "auto",
  loop: "false",
  spaceBetween: 30,

  navigation: {
    nextEl: ".architecture__slider-1 .swiper-button-next",
    prevEl: ".architecture__slider-1 .swiper-button-prev",
  },
});
var swiper = new Swiper(".architecture__slider-2 .swiper-container", {
  slidesPerView: "auto",
  loop: "false",
  spaceBetween: 30,

  navigation: {
    nextEl: ".architecture__slider-2 .swiper-button-next",
    prevEl: ".architecture__slider-2 .swiper-button-prev",
  },
});
