(function($) { // Begin jQuery
    $(function() { // DOM ready
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      // Clicking away from dropdown will remove the dropdown class
      $('html').click(function() {
        $('.nav-dropdown').hide();
        
      });
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      // Hamburger to X toggle
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
     
    }); // end DOM ready
  })(jQuery); // end jQuery

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
        $("#err_tel").html('* Te hacen falta mÃ¡s numeros');
        return false;
  }else if($("#tex").val()== ''){
        $("#err_tex").html('* Mensaje Requerido');
        return false;    
  }else if($("#corr").val()== ''){
        $("#err_corr").html('* Correo Requerido');
        return false;    
  }else{
    $.ajax({
        url:'http://www.fundacionhermesmusic.org/assets/js/corr.php',
        method:'post',
        data:$("#form-data").serialize(),
        success:function(response){
          document.getElementById("form-data").reset();
          Swal.fire({
            icon: 'success',
            title: 'Fundacion Music Mexico',
            text: 'Te da las !Gracias¡ por ponerte en contacto con nosotros',
            confirmButtonColor: '#fdc416',
            confirmButtonText:
            '<a class="text-white"  href="http://www.fundacionhermesmusic.org/">Entiendo</a>'
                                       
          })
        }
    });
  }
        
  });
//scroll
  function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');
  if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
  else scrollTop.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollTop)