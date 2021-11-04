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
        setTimeout(slide, 5000);
      };
    
      return {
        slide
      };
    })();
    
    carouselSlider.slide();
    

//menu visibilty
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

const mobileMenu = () =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
}

menu.addEventListener('click',mobileMenu);


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
    duration: 4000,
    origin: 'top',
    distance: '90%'
});
sr.reveal(".animate-right",{
    duration: 4000,
    origin: 'bottom',
    distance: '90%'
});  
