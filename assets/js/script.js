$(document).ready(function() {
	$('#title-content-container').plaxify({"xRange":20,"yRange":20})
	$('.background-container').plaxify({"xRange":5,"yRange":5})

	$.plax.enable()

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

});