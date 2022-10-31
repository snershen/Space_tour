"use strict";

// navbar mobile
$(".ham-menu").click(function (e) {
  e.preventDefault();
  $(".nav").toggleClass("d-flex");
  $(".ham-menu").toggleClass("ham-menu--close");
}); //navbar active

window.addEventListener("load", function () {
  var currentPage = document.querySelector("main");
  var navLink = document.querySelectorAll(".nav-link");
  navLink.forEach(function (i) {
    if (currentPage.getAttribute("data-page") === i.getAttribute("data-navLink")) {
      i.classList.add("nav-link--active");
    }
  });
}); //Swiper

var crewSwiper = new Swiper(".crew-swiper", {
  slidesPerView: 1,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
var technologySwiper = new Swiper(".technology-swiper", {
  slidesPerView: 1,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
  }
});
var planet = ["MOON", "MARS", "EUROPA", "TITAN"];
var destination = new Swiper(".destination-swiper", {
  slidesPerView: 1,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return '<span class="' + className + '">' + planet[index] + "</span>";
    }
  }
});
//# sourceMappingURL=all.js.map
