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

//carr mov

const carouselSlidermov = (function () {
  let _slideIndexmov = 1;

  const _slidesmov = document.querySelectorAll(".image-fade-mov");
  const _dotsmov = document.querySelectorAll(".dot__mov");

  function _sliderInitStatemov(slidesmov, dotsmov) {
    for (let i = 0; i < slidesmov.length; i++) {
      slidesmov[i].style.display = "none";
    }

    for (let i = 0; i < dotsmov.length; i++) {
      dotsmov[i].classList.remove("activemov");
    }
  }

  function _checkSlideIndexBoundarymov(slideIndexmov, slidesmov) {
    if (slideIndexmov > slidesmov.length) {
      _slideIndexmov = 1;
    }
    if (slideIndexmov === 0) {
      _slideIndexmov = slidesmov.length;
    }
  }

  function _slideSelectionIndecatormov(dotsmov, slideIndexmov) {
    dotsmov[slideIndexmov - 1].classList.add("activemov");
  }

  function _activateSlidemov(slidesmov, slideIndexmov) {
    slidesmov[slideIndexmov - 1].style.display = "block";
    _slideSelectionIndecatormov(_dotsmov, _slideIndexmov);
  }

  function _imageDirectionmov(directionmov) {
    _sliderInitStatemov(_slidesmov, _dotsmov);
    if (directionmov == "next") {
      _activateSlidemov(_slidesmov, _slideIndexmov);
      _slideIndexmov++;
      _checkSlideIndexBoundarymov(_slideIndexmov, _slidesmov);
    } else {
      _slideIndexmov--;
      _checkSlideIndexBoundarymov(_slideIndexmov, _slidesmov);
      _activateSlidemov(_slidesmov, _slideIndexmov);
    }
  }

  const _previousButtonmov = document.querySelector(".previous__mov");
  const _nextButtonmov = document.querySelector(".next__mov");

  _previousButtonmov.addEventListener("click", function () {
    _imageDirectionmov("previous__mov");
  });

  _nextButtonmov.addEventListener("click", function () {
    _imageDirectionmov("next__mov");
  });

  const slidemov = function () {
    _sliderInitStatemov(_slidesmov, _dotsmov);
    _activateSlidemov(_slidesmov, _slideIndexmov);
    _slideIndexmov++;
    _checkSlideIndexBoundarymov(_slideIndexmov, _slidesmov);
    // Change image every 5 seconds
    setTimeout(slidemov, 7000);
  };

  return {
    slidemov
  };
})();

carouselSlidermov.slidemov();
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
        $('#Container').mixItUp({
            selectors: {
            target: '.item',
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
//modales
  // Get the modal--4
  var modal = document.getElementById("myModal");
  // Get the button that opens the modal
  var btn = document.getElementById("open-modal");
  // Get the <span> element that closes the modal
  var span = document.getElementById("close");
  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  // Get the modal--4
   // Get the modal--3
   var modale = document.getElementById("myModale");
   // Get the button that opens the modal
   var btne = document.getElementById("open-modale");
   // Get the <span> element that closes the modal
   var span = document.getElementById("closee");
   // When the user clicks on the button, open the modal
   btne.onclick = function() {
     modale.style.display = "block";
   }
   // When the user clicks on <span> (x), close the modal
   span.onclick = function() {
     modale.style.display = "none";
   }
   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
     if (event.target == modale) {
       modale.style.display = "none";
     }
   }
   // Get the modal--2
   var modaler = document.getElementById("myModaler");
   // Get the button that opens the modal
   var btner = document.getElementById("opene-modal");
   // Get the <span> element that closes the modal
   var span = document.getElementById("closeer");
   // When the user clicks on the button, open the modal
   btner.onclick = function() {
     modaler.style.display = "block";
   }
   // When the user clicks on <span> (x), close the modal
   span.onclick = function() {
     modaler.style.display = "none";
   }
   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
     if (event.target == modaler) {
       modaler.style.display = "none";
     }
   }
   // Get the modal--1
   var modalere = document.getElementById("myModalere");
   // Get the button that opens the modal
   var btnere = document.getElementById("opene-modale");
   // Get the <span> element that closes the modal
   var span = document.getElementById("closeere");
   // When the user clicks on the button, open the modal
   btnere.onclick = function() {
     modalere.style.display = "block";
   }
   // When the user clicks on <span> (x), close the modal
   span.onclick = function() {
     modalere.style.display = "none";
   }
   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
     if (event.target == modalere) {
       modalere.style.display = "none";
     }
   }

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