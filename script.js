const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuopenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// Open menu
menuopenButton.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
});

// Close menu
menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("show-mobile-menu");
    });
});

// ........initialize swiper....

const swiper = new Swiper('.slider-wrapper', {
  // Optional parameters
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

//   responsive breakpoints

  breakpoints: {
    0: {
        slidesPerView: 1
  },
    768: {
        slidesPerView: 2
  },
    1024: {
        slidesPerView: 3
  },
 }

});




