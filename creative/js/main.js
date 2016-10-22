jQuery(document).ready(function($) {
	var e = $(".portfolio-grid");
	e.isotope({
	    itemSelector: ".portfolio-item",
	    layoutMode: 'fitRows',
	    animationOptions: {
	        duration: 750,
	        easing: "linear",
	        queue: !1
	    }
	}), 
	$(".portfolio-filter").on("click", ".categories", function() {
	    var a = $(this).attr("data-filter");
	    e.isotope({
	        filter: a
	    })
	}), 
	$(".categories-filter").each(function(a, e) {
	    var i = $(e);
	    i.on("click", ".categories", function() {
	        i.find(".active").removeClass("active"), $(this).addClass("active")
	    })
	})
	var $section = $('#counter');
	$(document).bind('scroll', function(ev) {
		var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        $('.counter-num').each(function () {
		    $(this).prop('Counter',0).animate({
		        Counter: $(this).text()
		    }, {
		        duration: 5000,
		        easing: 'swing',
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    });
		});
	});

 	$section = $('#specialization');
	$(document).bind('scroll', function(ev) {
		var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
			jQuery('.skillbar').find('.skillbar-bar').animate({
				width:jQuery('.skillbar').attr('data-percent')
			},6000);
			$(document).unbind('scroll');
		}
	});
});


