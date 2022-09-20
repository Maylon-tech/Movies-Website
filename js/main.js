

//Swiper Auto of Home section

var swiper = new Swiper(".home", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
    },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
    },
 })


// Swiper of Comming soon section

      var swiper = new Swiper(".coming-container", {
        spaceBetween: 20,
        loop:true,
        centeredSlides: true,
        autoplay: {
          delay: 55000,
          disableOnInteraction: false,
    },
        breakpoints: {
          0: {
            slidesPerView: 2,
          },
          568: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          968: {
            slidesPerView: 5,
          },
                
    },
})

const header = document.querySelector('header')

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0)
})