/************ MENU RESPONSIVE ***********/

var contador = 0;
$( '#menu-logo' ).click(function() {

  if(contador == 0){

  $('nav ul').css('left', '0px');

  contador = 1;

}else{

    $('nav ul').css('left', '110%');

    contador = 0;
  }

});


$( 'nav ul li a' ).click(function() {
  $('nav ul').css('left', '110%');
});




/*************** BUSQUEDA ******************/


$( '#icono-buscar' ).click(function() {



  $('#busqueda').css('top', '0px');

});


$( '#cierra-busqueda' ).click(function() {
   $('#busqueda').css('top', '-110%');
   $('input').val('');
});



/************** SLIDER DE EQUIPO***************/

$(document).ready(function(){
  $('.slider4').bxSlider({
    slideWidth: 300,
    minSlides: 2,
    maxSlides: 3,
    moveSlides: 1,
    pager: false,
    slideMargin: 10
  });
});

/**********************************/






/*EFECTO SCROLL SMOOTH*/


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);

   
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 60
        }, 1000);

        return false;
      }
    }
  });
});



