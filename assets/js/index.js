const carouselSlider = (function () {
  let _slideIndex = 1;

  const _slides = document.querySelectorAll(".image-fade");
  const _dots = document.querySelectorAll(".dot");

  function _sliderInitState(slides, dots) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
  }

  function _checkSlideIndexBoundary(slideIndex, slides) {
    if (slideIndex > slides.length) {
      _slideIndex = 1;
    }
    if (slideIndex === 0) {
      _slideIndex = slides.length;
    }
  }

  function _slideSelectionIndecator(dots, slideIndex) {
    dots[slideIndex - 1].classList.add("active");
  }

  function _activateSlide(slides, slideIndex) {
    slides[slideIndex - 1].style.display = "block";
    _slideSelectionIndecator(_dots, _slideIndex);
  }

  function _imageDirection(direction) {
    _sliderInitState(_slides, _dots);
    if (direction == "next") {
      _activateSlide(_slides, _slideIndex);
      _slideIndex++;
      _checkSlideIndexBoundary(_slideIndex, _slides);
    } else {
      _slideIndex--;
      _checkSlideIndexBoundary(_slideIndex, _slides);
      _activateSlide(_slides, _slideIndex);
    }
  }

  const _previousButton = document.querySelector(".previous");
  const _nextButton = document.querySelector(".next");

  _previousButton.addEventListener("click", function () {
    _imageDirection("previous");
  });

  _nextButton.addEventListener("click", function () {
    _imageDirection("next");
  });

  const slide = function () {
    _sliderInitState(_slides, _dots);
    _activateSlide(_slides, _slideIndex);
    _slideIndex++;
    _checkSlideIndexBoundary(_slideIndex, _slides);
    // Change image every 5 seconds
    setTimeout(slide, 7000);
  };

  return {
    slide
  };
})();

carouselSlider.slide();


//menu visibilty
const showMenu = (toggleId, navId) => {
const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

if (toggle && nav) {
    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')
    })
}
}
showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
const navMenu = document.getElementById('nav-menu')
navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')


//scroll


function scrollHeader() {
const nav = document.getElementById('header')
if (this.scrollY >= 200) nav.classList.add('scroll-header');
else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

function scrollTop() {
const scrollTop = document.getElementById('scroll-top');
if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

//animationsjs
window.sr = ScrollReveal({ reset: false });
sr.reveal(".animate-title", {
duration: 1000,
origin: 'top',
distance: '90%'
});
sr.reveal(".animate-img",{
duration: 2000,
origin: 'bottom',
distance: '90%'
});
sr.reveal(".animate-card",{
duration: 3000,
origin: 'bottom',
distance: '90%'
});
sr.reveal(".animate-left",{
duration: 3500,
origin: 'top',
distance: '90%'
});
sr.reveal(".animate-right",{
duration: 3500,
origin: 'bottom',
distance: '90%'
});  


//marcas
$(function () {
 
var filterList = {

  init: function () {
  
      // https://mixitup.kunkalabs.com/
      $('#gallery').mixItUp({
          selectors: {
          target: '.gallery-item',
          filter: '.filter'	
      },
      load: {
        filter: '.audiodigital' // show all items on page load.
      }     
      });								
  
  }

};

// Filter ALL the things
filterList.init();

});

//correo

$("#submit").click(function(e){
e.preventDefault();
$("#err_nom").html('');
$("#err_tel").html('');
$("#err_tex").html('');
$("#err_corr").html('');
if($("#nombre").val() == ''){
  $("#err_nom").html('* Tu Nombre Requerido');
  return false;
}else if($("#tel").val()== ''){
      $("#err_tel").html('* El Telefono Requerido');
      return false;
}else if($("#tel").val().length < 9){
      $("#err_tel").html('* Te hacen falta más numeros');
      return false;
}else if($("#tex").val()== ''){
      $("#err_tex").html('* Mensaje Requerido');
      return false;    
}else if($("#corr").val()== ''){
      $("#err_corr").html('* Correo Requerido');
      return false;    
}else{
  $.ajax({
      url:'https://hermes-music.com.mx/assets/js/corr.php',
      method:'post',
      data:$("#form-data").serialize(),
      success:function(response){
        document.getElementById("form-data").reset();
        Swal.fire({
          icon: 'success',
          title: 'Hermes Music México',
          text: 'Te da las !Gracias¡ por ponerte en contacto con nosotros',
          confirmButtonColor: '#fdc416',
          confirmButtonText:
          '<a class="text-white"  href="https://hermes-music.com.mx/Agradecimiento">Entiendo</a>'
                                     
        })
      }
  });
}
      
});