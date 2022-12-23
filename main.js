import './style.scss'
import * as bootstrap from './node_modules/bootstrap/'
import * as gliderjs from './node_modules/glider-js/'

// porfolio carrosel

new Glider(document.querySelector('.glider'), {
    slidesToScroll: 1,
    slidesToShow: 1.5,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 768,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToScroll: 2,
            slidesToShow: 2.5,
 
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 1200,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 3.5,
          }
        }
      ]

  });
