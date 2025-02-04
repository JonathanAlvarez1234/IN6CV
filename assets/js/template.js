jQuery(document).ready(function($) {

	var my_nav = $('.navbar-sticky');
	var sticky_navigation_offset_top = my_nav.offset().top;

	var sticky_navigation = function(){
		var scroll_top = $(window).scrollTop();
		
		if (scroll_top > sticky_navigation_offset_top) { 
			my_nav.addClass( 'stick' );
		} else {
			my_nav.removeClass( 'stick' );
		}   
	};

	var initio_parallax_animation = function() { 
		$('.parallax').each( function(i, obj) {
			var speed = $(this).attr('parallax-speed');
			if( speed ) {
				var background_pos = '-' + (window.pageYOffset / speed) + "px";
				$(this).css( 'background-position', 'center ' + background_pos );
			}
		});
	}
	
	sticky_navigation();
	
	$(window).scroll(function() {
		 sticky_navigation();
		 initio_parallax_animation();
	});

});