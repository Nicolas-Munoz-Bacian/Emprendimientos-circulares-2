new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

// Pagination bullets
pagination: {
    el: '.swiper-pagination',
    clickblade: true,
    dynamicBullets: true,
},

// Nvigation arrows
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},

// Responsive breakpoints
breakpoints: {
    0: {
        slidePerView: 1
    },

    768: {
        slidePerView: 2
    },
    
    1024: {
        slidePerView: 3
    },
}
})

const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickblade: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsve breakpoints
    breakpoints: {
        0: {
            slidePerView: 1
        },
        620: {
            slidesPerview: 2
        },

        1024: {
            slidesPerview: 3
        }
    }
  });


  



  jQuery('document').ready(function($){

    var subir= $('.back-to-top');

    subir.cliick(function(e){
        e.preventDefault();

        $('html,body').animate({scrollTop: 0}, 500);
    });

    subir.hide();

    $(window).scroll(function()){

       if( $(this).scrollTop() > 200) {
        subir.fadeIn();
       }else {
        subir.fadeOut();
       }

    }

  });