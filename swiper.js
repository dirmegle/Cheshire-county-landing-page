const swiper = new Swiper('.swiper', {

    slidesPerView: 1,

    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    breakpoints: {

        900: {
          slidesPerView: 2,
          spaceBetween: 10,
        },

        1200: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
      }

  });