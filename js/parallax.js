$(document).ready(function(){
 

	var ancho = $(window).width();
 
// Si trabajamos con una imagen desactivamos el background-size:cover;
	if (ancho <= 768){

		/*$('#principal').css({
			'-webkit-background-size': 'initial',
			'-moz-background-size': 'initial',
			'-o-background-size': 'initial',
			'-ms-background-size': 'initial',
			'background-size': 'initial'
		});*/


		$('#calltocontact').css({
			'-webkit-background-size': 'initial',
			'-moz-background-size': 'initial',
			'-o-background-size': 'initial',
			'-ms-background-size': 'initial',
			'background-size': 'initial'
		});

		$('.equipo').css({
			'-webkit-background-size': 'initial',
			'-moz-background-size': 'initial',
			'-o-background-size': 'initial',
			'-ms-background-size': 'initial',
			'background-size': 'initial'
		});
	}



	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.11);
		
		$('#principal').css({
			'background-position': '0 -' + posicion + 'px'
		});
 
	});

	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.10);
		
		/*$('#calltocontact').css({
			'background-position': '0 -' + posicion + 'px'
		});*/
 
	});

	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.07);
		
		$('.equipo').css({
			'background-position': '0 -' + posicion + 'px'
		});
 
	});


	
 
});