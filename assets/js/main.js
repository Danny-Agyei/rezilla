$(document).ready(function () {
  const navbarMenu = $(".js-drawer");
  const navbarLink = $(".js-navbar-link");
  const navbarMenuBtn = $(".js-navbar-toggler");
  const navbarMenuIcon = $(".js-menu-icon");
  const mainHeader = $(".js-header");
  const allCarousels = $(".owl-carousel");

  // Add event to Element
  const addEventToElem = (eventType, target, cb) => {
    eventType == "click" ? $(target).click(cb) : $(target).scroll(cb);
  };

  // Add shadow to navbar at 100px range
  addEventToElem("scroll", window, onScrollTrigger);

  function onScrollTrigger() {
    if (window.scrollY > 100) {
      mainHeader.addClass("is-active");
      return;
    }
    mainHeader.removeClass("is-active");
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
      },
      testimonials: {
        responsiveClass: true,
        autoPlayTimeout: 1000,
        autoplaySpeed: 1800,
        smartSpeed: 800,
        margin: 40,
        nav: false,
        dots: true,
        navText: [
          '<i class="bx bx-arrow-left-alt bx-lg hero__icon" aria-hidden="true"></i>',
          '<i class="bx bx-arrow-right-alt bx-lg hero__icon" aria-hidden="true"></i>',
        ],
        responsive: {
          768: {
            items: 2,
            margin: 20,
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
