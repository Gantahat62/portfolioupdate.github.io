$(document).ready(function(){
	var altura = $('header').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('header').addClass('pined');
		} else {
			$('header').removeClass('pined');
		}
	});
});