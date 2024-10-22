$(document).ready(function () {
  const navbarMenu = $(".js-drawer");
  const navbarMenuBtn = $(".js-navbar-toggler");
  const navbarMenuIcon = $(".js-menu-icon");
  const mobileNavbar = $(".js-mobile-nav");
  const allCarousels = $(".owl-carousel");

  // Add event to Element
  const addEventToElem = (eventType, target, cb) => {
    eventType == "click" ? $(target).click(cb) : $(target).scroll(cb);
  };

  // Add shadow to navbar at 100px range
  addEventToElem("scroll", window, onScrollTrigger);

  function onScrollTrigger() {
    if (window.scrollY > 100) {
      mobileNavbar.addClass("is-active");
      return;
    }
    mobileNavbar.removeClass("is-active");
  }

  // Navbar menu toggler
  addEventToElem("click", navbarMenuBtn, navbarToggler);

  function navbarToggler() {
    navbarMenu.toggleClass("is-open");
    navbarMenuIcon.toggleClass("is-active");
  }

  //  Section Carousel / Slideshow handler
  [...allCarousels].forEach((elem) => {
    const sectionName = $(elem).attr("data-name");

    const options = {
      hero: {
        responsiveClass: true,
        autoPlayTimeout: 1000,
        autoplaySpeed: 1800,
        smartSpeed: 800,
        nav: true,
        dots: true,
        navText: [
          '<i class="bx bx-chevron-left bx-lg hero__icon" aria-hidden="true"></i>',
          '<i class="bx bx-chevron-right bx-lg hero__icon" aria-hidden="true"></i>',
        ],
      },
    };

    $(elem).owlCarousel({
      center: true,
      items: 1,
      loop: true,
      margin: 20,
      autoplay: true,
      autoHeight: true,
      autoplayHoverPause: true,
      ...options[sectionName],
    });
  });
});
