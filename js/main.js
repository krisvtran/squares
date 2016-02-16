$(window).on('resize load', function() { 
	
	$('.galimg').each(function() {
	    var image = $(this).children('img');
	    	h = $(this).children('img').height();
	    	w = $(this).children('img').width();
	    	bodyW = $('body').width();
	    	top = ( $(this).width() - w ) / 2; 
	   		left = ( $(this).height() - h ) / 2; 

		if (h > w) {
		    image.addClass('portrait').height(bodyW/4).css({'margin-top': 'top'});
		}

	    else {
	        image.addClass('landscape').height(bodyW/4).css({'margin-left': 'left'});
		}
	});

});
