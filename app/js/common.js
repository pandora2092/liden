$(function() {

	$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 60,
    autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		dots: true,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:3
        }
    	}
	})

});
