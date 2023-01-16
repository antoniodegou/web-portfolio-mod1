import './style.scss'
import * as gliderjs from './node_modules/glider-js/'
import imgUrl from './assets/479E3A03679BC0F4.png'
import './src/svgs/self.svg'

// Make the porfolio carousel work, define its sizes and responsiveness 

new Glider(document.querySelector('.glider'), {
    slidesToScroll: 1,
    slidesToShow: 1.5,
    draggable: true,
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


// Making de form work and adding errors in case of invalid fields.

let form = document.getElementById("contactForm");

  async function handleSubmit(event) {
    event.preventDefault();
    let status = document.getElementById("my-form-status");
    let data = new FormData(event.target);
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


//Update the year in footer,  its updated at all times without hardcoding

document.getElementById("currentYear").innerHTML = new Date().getFullYear();

// Injecting SVG into the HTML document without bloating the html file.

SVGInject.setOptions({
  makeIdsUnique: false
})
SVGInject(document.querySelectorAll("img.injectable"));

