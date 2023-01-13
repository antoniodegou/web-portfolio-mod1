import './style.scss'
import * as bootstrap from './node_modules/bootstrap/'
import * as gliderjs from './node_modules/glider-js/'
import imgUrl from './assets/479E3A03679BC0F4.png'
import './src/svgs/self.svg'



// porfolio carrosel

new Glider(document.querySelector('.glider'), {
    slidesToScroll: 1,
    slidesToShow: 1.5,
    draggable: true,
    // dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
    ,
    responsive: [
        {
          // screens greater than >= 768px
          breakpoint: 768,
          settings: {
            slidesToShow: 2.5,
          }
        },{
          // screens greater than >= 992px
          breakpoint: 992,
          settings: {
            slidesToShow: 3.0,
          }
        },{
          // screens greater than >= 1200px
          breakpoint: 1200,
          settings: {
            slidesToShow: 3.5,
          }
        }
      ]

  });


  // working form

  var form = document.getElementById("contactForm");

    
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form"
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Oops! There was a problem submitting your form"
    });
  }
  form.addEventListener("submit", handleSubmit)






  //get footer current year

document.getElementById("currentYear").innerHTML = new Date().getFullYear();


// inject SVG

SVGInject.setOptions({
  makeIdsUnique: false
})
SVGInject(document.querySelectorAll("img.injectable"));

