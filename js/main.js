$(window).on('resize load', function() { 
	
	$('.galimg').each(function() {
	    var h = $(this).children('img').height();
	    var w = $(this).children('img').width();
	    var bodyW = $('body').width();
	   	var left = ( $(this).height() - h)/2; 
	    var top = ( $(this).width() - w)/2; 

		if (h > w) {
		    $(this).children('img').addClass('portrait').height(bodyW/4).css({'margin-top': 'top'});
		}

	    else {
	        $(this).children('img').addClass('landscape').height(bodyW/4).css({'margin-left': 'left'});
		}
	});

});
