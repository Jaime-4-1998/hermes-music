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

//itemmselector
$(document).ready( function() {

  var itemSelector = '.grid-item'; 
  
  var $container = $('#container').isotope({
  itemSelector: itemSelector,
  masonry: {
    columnWidth: itemSelector,
    isFitWidth: true
  }
  });
  
  //Ascending order
  var responsiveIsotope = [
  [480, 7],
  [720, 10]
  ];
  
  var itemsPerPageDefault = 12;
  var itemsPerPage = defineItemsPerPage();
  var currentNumberPages = 1;
  var currentPage = 1;
  var currentFilter = '*';
  var filterAtribute = 'data-filter';
  var pageAtribute = 'data-page';
  var pagerClass = 'isotope-pager';
  
  function changeFilter(selector) {
  $container.isotope({
      filter: selector
  });
  }
  
  
  function goToPage(n) {
  currentPage = n;
  
  var selector = itemSelector;
      selector += ( currentFilter != '*' ) ? '['+filterAtribute+'="'+currentFilter+'"]' : '';
      selector += '['+pageAtribute+'="'+currentPage+'"]';
  
  changeFilter(selector);
  }
  
  function defineItemsPerPage() {
  var pages = itemsPerPageDefault;
  
  for( var i = 0; i < responsiveIsotope.length; i++ ) {
      if( $(window).width() <= responsiveIsotope[i][0] ) {
          pages = responsiveIsotope[i][1];
          break;
      }
  
      
  
  }
  
  return pages;
  }
  
  function setPagination() {
  
  var SettingsPagesOnItems = function(){
  
      var itemsLength = $container.children(itemSelector).length;
      
      var pages = Math.ceil(itemsLength / itemsPerPage);
      var item = 1;
      var page = 1;
      var selector = itemSelector;
          selector += ( currentFilter != '*' ) ? '['+filterAtribute+'="'+currentFilter+'"]' : '';
      
      $container.children(selector).each(function(){
          if( item > itemsPerPage ) {
              page++;
              item = 1;
          }
          $(this).attr(pageAtribute, page);
          item++;
      });
  
      currentNumberPages = page;
  
  }();
  
  var CreatePagers = function() {
  
      var $isotopePager = ( $('.'+pagerClass).length == 0 ) ? $('<div class="'+pagerClass+'"></div>') : $('.'+pagerClass);
  
      $isotopePager.html('');
      
      for( var i = 0; i < currentNumberPages; i++ ) {
          var $pager = $('<a href="javascript:void(0);" class="pager" '+pageAtribute+'="'+(i+1)+'"></a>');
              $pager.html(i+1);
              
              $pager.click(function(){
                  var page = $(this).eq(0).attr(pageAtribute);
                  goToPage(page);
              });
  
          $pager.appendTo($isotopePager);
      }
  
      $container.after($isotopePager);
  
  }();
  
  }
  
  setPagination();
  goToPage(1);
  
  //Adicionando Event de Click para as categorias
  $('.filters a').click(function(){
  var filter = $(this).attr(filterAtribute);
  currentFilter = filter;
  
  setPagination();
  goToPage(1);
  
  
  });
  
  //Evento Responsivo
  $(window).resize(function(){
  itemsPerPage = defineItemsPerPage();
  setPagination();
  });
  
  
  
  });
  
  
  
  $(document).ready( function() {   
  
  // filter items on button click
  $('.filter-button-group').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $('.grid').isotope({ filter: filterValue });
  $('.filter-button-group li').removeClass('active');
  $(this).addClass('active');
  });
  })
  
  
  $(document).ready( function() {   
  
  // filter items on button click
  $('.isotope-pager').on( 'click', 'a', function() {
  var filterValue = $(this).attr('data-page');
  
  $('.isotope-pager a').removeClass('active');
  $(this).addClass('active');
  });
  })

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
