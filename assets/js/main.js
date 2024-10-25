$(document).ready(function () {
  const navbarMenu = $(".js-drawer");
  const navbarLink = $(".js-navbar-link");
  const navbarMenuBtn = $(".js-navbar-toggler");
  const navbarMenuIcon = $(".js-menu-icon");
  const header = $(".js-header");
  const mainNavbar = $(".js-main-navbar");
  const allCarousels = $(".owl-carousel");

  // Add event to Element
  const addEventToElem = (eventType, target, cb) => {
    eventType == "click" ? $(target).click(cb) : $(target).scroll(cb);
  };

  // Add shadow to navbar at 100px range
  addEventToElem("scroll", window, onScrollTrigger);

  function onScrollTrigger() {
    if (window.scrollY > 100) {
      header.addClass("is-active");
      mainNavbar.addClass("is-active");
      return;
    }
    header.removeClass("is-active");
    mainNavbar.removeClass("is-active");
  }

  // Navbar menu toggler
  Array.from(navbarLink, (link) =>
    addEventToElem("click", link, navbarToggler)
  );

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
        margin: 20,
        nav: true,
        dots: true,
        navText: [
          '<i class="bx bx-chevron-left bx-lg hero__icon" aria-hidden="true"></i>',
          '<i class="bx bx-chevron-right bx-lg hero__icon" aria-hidden="true"></i>',
        ],
        responsive: {
          992: {
            margin: 30,
          },
        },
      },
      testimonials: {
        // responsiveClass: true,
        autoPlayTimeout: 1000,
        autoplaySpeed: 1800,
        smartSpeed: 800,
        margin: 40,
        nav: false,
        dots: true,
        navText: [
          '<i class="bx bx-left-arrow-alt bx-md" aria-hidden="true"></i>',
          '<i class="bx bx-right-arrow-alt bx-md" aria-hidden="true"></i>',
        ],
        responsive: {
          768: {
            nav: true,
            items: 2,
            margin: 20,
          },
          992: {
            nav: true,
            items: 1,
            margin: 30,
          },
          1280: {
            nav: true,
            items: 1,
            margin: 40,
          },
        },
      },
      properties: {
        responsiveClass: true,
        autoPlayTimeout: 1000,
        autoplaySpeed: 1800,
        smartSpeed: 800,
        margin: 40,
        nav: false,
        dots: false,
        responsive: {
          992: {
            items: 3,
            margin: 40,
          },
        },
      },
    };

    $(elem).owlCarousel({
      center: true,
      items: 1,
      loop: true,
      autoplay: true,
      autoHeight: true,
      autoplayHoverPause: true,
      ...options[sectionName],
    });
  });
});
